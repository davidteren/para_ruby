# Duck Typing

In Ruby, "duck typing" refers to the idea that an object's methods and properties determine its behavior, rather than its inheritance from a particular class or implementation of a specific interface. This means that, in Ruby, it is not necessary to specify the type of an object in order to use it; instead, you can simply use any object that responds to the methods that you need.

For example, consider the following code:

```ruby
def print_name(object)
  puts object.name
end

class Person
  attr_reader :name
  
  def initialize(name)
    @name = name
  end
end

class Dog
  attr_reader :name
  
  def initialize(name)
    @name = name
  end
end

person = Person.new("Alice")
dog = Dog.new("Fido")

print_name(person)  # Outputs "Alice"
print_name(dog)     # Outputs "Fido"

```

In this example, the `print_name` method takes an object as an argument and calls the name method on it. The `Person` and `Dog` classes both have a `name` method, so they can both be used with the `print_name` method without any issues. This is an example of duck typing in Ruby, because the objects are being used based on their ability to respond to the `name` method, rather than their specific class or type.

## Other examples

```ruby
# Using an object as an enumerable

def print_uppercase(enumerable)
  enumerable.each do |item|
    puts item.upcase
  end
end

names = ["Alice", "Bob", "Charlie"]
print_uppercase(names)  # Outputs "ALICE", "BOB", "CHARLIE"

# Using an object as a hash

def print_value(hash, key)
  puts hash[key]
end

person = { name: "Alice", age: 30 }
print_value(person, :name)  # Outputs "Alice"
```

In the first example, the print_uppercase method takes an enumerable object as an argument and iterates over it, calling the upcase method on each item. The names array is an enumerable object, so it can be used with this method.

In the second example, the print_value method takes a hash object as an argument and retrieves a value from it using the [] operator. The person hash is a hash object, so it can be used with this method.

In both of these examples, the objects are being used based on their ability to respond to certain methods, rather than their specific class or type. This is an example of duck typing in Ruby.