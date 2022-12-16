---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Liskov Substitution Principle (LSP)

The Liskov Substitution Principle (LSP) is a principle of object-oriented design that states that objects in a program should be replaceable with instances of their subtypes without affecting the correctness of the program. In other words, if a class is a subtype of another class, then objects of the subtype class should be able to be used wherever objects of the parent class are used without causing any problems. This allows for flexibility and maintainability in object-oriented design, as well as code reusability and extensibility. To implement the LSP, developers can use techniques such as [polymorphism](../glossary/polymorphism.md) and [inheritance](../glossary/inheritance.md).

:::info Explain the Liskov Substitution Principle (LSP) like I'm five
> The Liskov Substitution Principle is like a game of hide and seek. In hide and seek, there are different types of people who can play, like kids and adults. And even though kids and adults are different, they can still play the same game together. For example, if a kid is hiding, then an adult can still go and find them. And if an adult is hiding, then a kid can still go and find them. So even though kids and adults are different, they can still play hide and seek together without causing any problems. In object-oriented programming, the different types of people are like classes, and the game of hide and seek is like a program. The Liskov Substitution Principle says that objects of different classes should be able to be used together in a program without causing any problems.
:::


## Code examples

<Tabs>
  <TabItem value="bad" label="Bad" default>

```ruby
class Rectangle
  attr_accessor :width, :height

  def initialize(width, height)
    @width = width
    @height = height
  end

  def area
    @width * @height
  end
end

class Square < Rectangle
  def initialize(side_length)
    @width = side_length
    @height = side_length
  end
end
```
In this code, the `Square` class is a subclass of the `Rectangle` class. However, because a square's sides must be equal in length, setting the width and height attributes independently will violate the square's constraints. This means that a `Square` object cannot be used in the same way as a `Rectangle` object, violating the Liskov Substitution Principle.

  </TabItem>
  <TabItem value="good" label="Good">

A better way to structure this code would be to make the `Rectangle` class abstract and create a separate `Square` class that implements its own area method:

```ruby
class Shape
  def area
    raise NotImplementedError
  end
end

class Rectangle < Shape
  attr_accessor :width, :height

  def initialize(width, height)
    @width = width
    @height = height
  end

  def area
    @width * @height
  end
end

class Square < Shape
  attr_accessor :side_length

  def initialize(side_length)
    @side_length = side_length
  end

  def area
    @side_length ** 2
  end
end
```
With this refactored code, the `Rectangle` and `Square` classes are both subclasses of the abstract `Shape` class, and both implement their own versions of the area method. This allows `Square` objects to be used in the same way as `Rectangle` objects, without violating the Liskov Substitution Principle.

  </TabItem>
  <TabItem value="specs" label="Specs">

```ruby
describe Shape do
  describe '#area' do
    it 'raises a NotImplementedError' do
      shape = Shape.new
      expect { shape.area }.to raise_error(NotImplementedError)
    end
  end
end

describe Rectangle do
  describe '#area' do
    it 'calculates the area of the rectangle' do
      rectangle = Rectangle.new(4, 5)
      expect(rectangle.area).to eq(20)
    end
  end
end

describe Square do
  describe '#area' do
    it 'calculates the area of the square' do
      square = Square.new(4)
      expect(square.area).to eq(16)
    end
  end
end
````
These tests ensure that the `Rectangle` and `Square` classes can calculate their areas correctly, and that the `Shape` class raises a `NotImplementedError` when its `area` method is called.
  </TabItem>
</Tabs>
