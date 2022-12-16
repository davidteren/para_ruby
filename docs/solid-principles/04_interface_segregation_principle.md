---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Interface Segregation Principle (ISP)

The Interface Segregation Principle (ISP) is a principle of object-oriented design that states that no client should be forced to depend on methods it does not use. This means that classes should have small, specific interfaces that only include the methods that are actually needed by the client classes. This allows for better code organization and maintainability, as well as flexibility to accommodate future changes in requirements. To implement the ISP, developers can use techniques such as [abstraction](../glossary/abstraction.md) and [composition](../glossary/composition.md).

:::info Explain Interface Segregation Principle (ISP) like I'm five

> The Interface Segregation Principle is like a toolbox. In a toolbox, there are different tools for different jobs. For example, there might be a hammer for pounding nails, and a screwdriver for turning screws. And even though the hammer and the screwdriver are both tools, they are not used for the same thing. So if you want to use the hammer, you don't have to look through the whole toolbox to find it. You can just go to the part of the toolbox where the hammers are, and take out the one you need. In object-oriented programming, the tools are like methods, and the toolbox is like an interface. The Interface Segregation Principle says that interfaces should be organized into small, specific parts, so that you can easily find the methods you need without having to look through lots of other methods that you don't need.
:::


## Code examples

<Tabs>
  <TabItem value="bad" label="Bad" default>

```ruby
class Animal
  def eat
    puts "Eating food"
  end

  def sleep
    puts "Sleeping"
  end

  def swim
    puts "Swimming"
  end

  def fly
    puts "Flying"
  end
end

class Dog < Animal
  def swim
    puts "Dogs can't swim"
  end

  def fly
    puts "Dogs can't fly"
  end
end

class Bird < Animal
  def swim
    puts "Birds can't swim"
  end
end

dog = Dog.new
bird = Bird.new

dog.eat
dog.sleep
dog.swim
dog.fly

bird.eat
bird.sleep
bird.swim
bird.fly
```
In this example, the `Animal` class has four methods: `eat`, `sleep`, `swim`, and `fly`. However, not all animals can perform all of these actions. For example, dogs cannot swim or fly, and birds cannot swim.

This violates the Interface Segregation Principle because it requires classes that inherit from `Animal` to implement methods that they may not need or be able to use. A better design would be to split the `Animal` class into smaller, more specialized interfaces that only contain the methods relevant to a specific group of animals. For example, you could create an `AquaticAnimal` interface with a swim method, a `FlyingAnimal` interface with a fly method, and so on. This would allow you to create more specialized classes that only need to implement the methods relevant to their behavior, rather than being forced to implement unnecessary methods.

  </TabItem>
  <TabItem value="good" label="Good">


```ruby
module Aquatic
  def swim
    puts "Swimming"
  end
end

module Flying
  def fly
    puts "Flying"
  end
end

class Animal
  def eat
    puts "Eating food"
  end

  def sleep
    puts "Sleeping"
  end
end

class Dog < Animal
  include Aquatic

  def swim
    puts "Dogs can't swim"
  end
end

class Bird < Animal
  include Flying
end

dog = Dog.new
bird = Bird.new

dog.eat
dog.sleep
dog.swim

bird.eat
bird.sleep
bird.fly
```

In this example, the `Aquatic` and `Flying` modules contain methods for the specific behavior of aquatic and flying animals. The `Animal` class includes the eat and sleep methods that are common to all animals. The `Dog` class includes the `Aquatic` module, which gives it the ability to swim, and the `Bird` class includes the `Flying` module, which gives it the ability to fly.

This design adheres to the Interface Segregation Principle because it allows you to create specialized interfaces for different groups of animals, and classes that inherit from these interfaces only need to implement the methods relevant to their behavior. This helps to reduce the amount of unnecessary or irrelevant methods that a class must implement, and makes the code easier to understand and maintain.

  </TabItem>
  <TabItem value="specs" label="Specs">

```ruby
describe Animal do
  describe "#eat" do
    it "outputs 'Eating food'" do
      expect { subject.eat }.to output("Eating food\n").to_stdout
    end
  end

  describe "#sleep" do
    it "outputs 'Sleeping'" do
      expect { subject.sleep }.to output("Sleeping\n").to_stdout
    end
  end
end

describe Dog do
  it "includes the Aquatic module" do
    expect(described_class.ancestors).to include(Aquatic)
  end

  describe "#swim" do
    it "outputs 'Dogs can't swim'" do
      expect { subject.swim }.to output("Dogs can't swim\n").to_stdout
    end
  end
end

describe Bird do
  it "includes the Flying module" do
    expect(described_class.ancestors).to include(Flying)
  end

  describe "#fly" do
    it "outputs 'Flying'" do
      expect { subject.fly }.to output("Flying\n").to_stdout
    end
  end
end
````
These tests cover the basic behavior of the Animal, Dog, and Bird classes. They verify that the eat and sleep methods of the Animal class work as expected, and that the Dog class includes the Aquatic module and overrides the swim method with its own implementation. They also verify that the Bird class includes the Flying module and implements the fly method.

You may want to add additional tests to cover other aspects of the code, such as testing the swim method of the Aquatic module and the fly method of the Flying module. You could also add tests for any other methods or functionality that you want to include in your code.

  </TabItem>
</Tabs>
