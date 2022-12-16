---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# The Single Responsibility Principle

The Single Responsibility Principle (SRP) is a principle of object-oriented programming (OOP) that states that a class
should only have a single responsibility, or a single reason to change. In other words, a class should focus on one
specific aspect of the problem domain, and should not be cluttered with unrelated responsibilities or functionality.

:::info Explain The Single Responsibility Principle like I'm five
> The Single Responsibility Principle is like a job. Everyone has a different job, and they do their job really well.
> For example, one person might be really good at making cookies, and another person might be really good at washing
> dishes. If they each just do their own job, then they will be able to make lots of cookies and wash lots of dishes.
> But
> if they try to do each other's job, then they might not be as good at it, and they might not be able to make as many
> cookies or wash as many dishes. So it's better for everyone to just do their own job and not try to do other people's
> jobs.
:::

In Ruby, the SRP can be applied by defining separate classes for different responsibilities, and using methods and
attributes to encapsulate the relevant data and behavior. For example, instead of having a single Person class that
handles both the person's name and age, we could define a Person class and a separate Age class:

## Examples A

### Example A1

<Tabs>
  <TabItem value="ruby" label="Ruby" default>

```ruby
class Person
  attr_accessor :name

  def initialize(name)
    @name = name
  end
end

class Age
  attr_accessor :age

  def initialize(age)
    @age = age
  end
end

person = Person.new("John")
age = Age.new(25)
```

This approach allows us to focus each class on a specific responsibility, and makes it easier to maintain and modify the
code in the future.

This means that a class should not be responsible for multiple, unrelated tasks or responsibilities. Instead, each class
should have a clear and well-defined purpose and should only be responsible for the tasks that are necessary to fulfill
that purpose.

  </TabItem>
  <TabItem value="specs" label="Specs">

```ruby
describe Person do
  describe "#initialize" do
    it "should set the name attribute" do
      person = Person.new("John")
      expect(person.name).to eq("John")
    end
  end
end

RSpec.describe Age do
  describe "#initialize" do
    it "should set the age attribute" do
      age = Age.new(25)
      expect(age.age).to eq(25)
    end
  end
end
````

  </TabItem>
 </Tabs>

___

### Example A2

<Tabs>
  <TabItem value="ruby" label="Ruby" default>

```ruby
# Define a class called "Person"
class Person
  # Define attributes for the Person class
  attr_accessor :name, :age

  # Define a constructor method for initializing new Person objects
  def initialize(name, age)
    @name = name
    @age = age
  end

  # Define a method for greeting another Person object
  def greet(other_person)
    "Hi #{other_person.name}, I'm #{@name} and I'm #{@age} years old."
  end
end

# Define a class called "Employee"
class Employee < Person
  # Define attributes for the Employee class
  attr_accessor :title, :salary

  # Define a constructor method for initializing new Employee objects
  def initialize(name, age, title, salary)
    # Use the super keyword to initialize the name and age attributes from the parent Person class
    super(name, age)
    @title = title
    @salary = salary
  end

  # Define a method for calculating the annual salary for an Employee
  def calculate_annual_salary
    @salary * 12
  end
end

# Create a new Employee object
employee = Employee.new("John", 25, "Software Engineer", 75000)

# Use the Employee's calculate_annual_salary method to calculate their annual salary
annual_salary = employee.calculate_annual_salary
```

In this code, we define two classes: Person and Employee. The Person class is responsible for modeling a person and
providing a method for greeting another person. The Employee class is responsible for modeling an employee and providing
a method for calculating their annual salary. By separating these two responsibilities into separate classes, we are
following the SRP and making our code more modular and maintainable.

In Ruby, this principle can be applied by ensuring that each class has a well-defined and narrowly focused purpose, and
by avoiding the inclusion of unnecessary or unrelated functionality.


  </TabItem>
  <TabItem value="specs" label="Specs">

```ruby
RSpec.describe Person do
  describe "#initialize" do
    it "should set the name and age attributes" do
      person = Person.new("John", 25)
      expect(person.name).to eq("John")
      expect(person.age).to eq(25)
    end
  end

  describe "#greet" do
    it "should greet another person" do
      person1 = Person.new("John", 25)
      person2 = Person.new("Jane", 30)
      expect(person1.greet(person2)).to eq("Hi Jane, I'm John and I'm 25 years old.")
    end
  end
end

RSpec.describe Employee do
  describe "#initialize" do
    it "should set the name, age, title, and salary attributes" do
      employee = Employee.new("John", 25, "Software Engineer", 75000)
      expect(employee.name).to eq("John")
      expect(employee.age).to eq(25)
      expect(employee.title).to eq("Software Engineer")
      expect(employee.salary).to eq(75000)
    end
  end

  describe "#calculate_annual_salary" do
    it "should calculate the annual salary for an employee" do
      employee = Employee.new("John", 25, "Software Engineer", 75000)
      expect(employee.calculate_annual_salary).to eq(900000)
    end
  end
end
```
  </TabItem>
</Tabs>

---

### Example A3

<Tabs>
  <TabItem value="ruby" label="Ruby" default>

For example, consider a class that represents a bank account. The Single Responsibility Principle would dictate that
this class should be responsible only for storing and manipulating information about the account (e.g. balance,
transactions), and not for other tasks such as rendering HTML or sending email notifications. This would help to keep
the class focused and easier to maintain.

```ruby
class BankAccount
  attr_accessor :balance

  def initialize(balance)
    @balance = balance
  end

  def deposit(amount)
    @balance += amount
  end

  def withdraw(amount)
    @balance -= amount
  end
end
```

This `BankAccount` class only has a single responsibility, which is to store and manipulate information about the
account. It does not include any unrelated functionality such as rendering HTML or sending email notifications. This
makes the class more focused and easier to maintain.

  </TabItem>
  <TabItem value="specs" label="Specs">

```ruby
RSpec.describe BankAccount do
  describe "#initialize" do
    it "should set the balance attribute" do
      account = BankAccount.new(100)
      expect(account.balance).to eq(100)
    end
  end

  describe "#deposit" do
    it "should increase the balance by the given amount" do
      account = BankAccount.new(100)
      account.deposit(50)
      expect(account.balance).to eq(150)
    end
  end

  describe "#withdraw" do
    it "should decrease the balance by the given amount" do
      account = BankAccount.new(100)
      account.withdraw(50)
      expect(account.balance).to eq(50)
    end
  end
end

```

  </TabItem>
</Tabs>

--- 

### Example A4

<Tabs>
  <TabItem value="ruby" label="Ruby" default>

```ruby
# Define a class called "Person" that only has a single responsibility: managing information about a person
class Person
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end
end

# Define a separate class called "EmailSender" that only has a single responsibility: sending emails
class EmailSender
  def send_email(to, subject, body)
    # Send the email
  end
end

# Define a separate class called "Database" that only has a single responsibility: storing data
class Database
  def save(data)
    # Save the data to the database
  end
end

# Create a new Person object
person = Person.new("John", 25)

# Create an EmailSender object and use it to send an email
email_sender = EmailSender.new
email_sender.send_email("jane@example.com", "Hello!", "Hi there!")

# Create a Database object and use it to save data
database = Database.new
database.save({name: "John", age: 25})
```

In this code, we define three separate classes, each with a clear and focused responsibility. The Person class is
responsible for managing information about a person, the EmailSender class is responsible for sending emails, and the
Database class is responsible for storing data. This approach helps to promote code that is more modular, reusable, and
maintainable.

  </TabItem>
  <TabItem value="specs" label="Specs">

```ruby
RSpec.describe Person do
  describe "#initialize" do
    it "should set the name and age attributes" do
      person = Person.new("John", 25)
      expect(person.name).to eq("John")
      expect(person.age).to eq(25)
    end
  end
end

RSpec.describe EmailSender do
  describe "#send_email" do
    it "should send an email to the given recipient" do
      email_sender = EmailSender.new
      expect(email_sender.send_email("jane@example.com", "Hello!", "Hi there!")).to eq(true)
    end
  end
end

RSpec.describe Database do
  describe "#save" do
    it "should save the given data to the database" do
      database = Database.new
      expect(database.save({name: "John", age: 25})).to eq(true)
    end
  end
end
```
  </TabItem>
</Tabs>

---

### Example A5

<Tabs>
  <TabItem value="ruby" label="Ruby" default>

```ruby
# Define a class called "Person"
class Person
  # Define attributes for the Person class
  attr_accessor :name, :age

  # Define a constructor method for initializing new Person objects
  def initialize(name, age)
    @name = name
    @age = age
  end

  # Define a method for greeting another Person object
  def greet(other_person)
    "Hi #{other_person.name}, I'm #{@name} and I'm #{@age} years old."
  end
end

# Define a separate class called "PersonValidator" to handle validation
class PersonValidator
  # Define a method for validating a Person object
  def validate(person)
    # Check if the person's name and age are valid
    if person.name.nil? || person.age.nil?
      raise "Invalid person: name and age are required"
    end
  end
end

# Create a new Person object
p1 = Person.new("John", 25)

# Create a new PersonValidator object
validator = PersonValidator.new

# Validate the Person object using the PersonValidator
validator.validate(p1)
```

In this code, we define two classes: Person and PersonValidator. The Person class is responsible for modeling a person's
name and age, and has a greet method for greeting another person. The PersonValidator class is responsible for
validating a Person object, and has a validate method that checks if the person's name and age are valid. By separating
the validation logic into a separate class, we are following the Single Responsibility Principle and ensuring that each
class has a clear and well-defined responsibility. This can improve the maintainability and re-usability of the code.


  </TabItem>
  <TabItem value="specs" label="Specs">


```ruby
RSpec.describe Person do
  describe "#initialize" do
    it "should set the name and age attributes" do
      person = Person.new("John", 25)
      expect(person.name).to eq("John")
      expect(person.age).to eq(25)
    end
  end

  describe "#greet" do
    it "should greet another person" do
      person1 = Person.new("John", 25)
      person2 = Person.new("Jane", 30)
      expect(person1.greet(person2)).to eq("Hi Jane, I'm John and I'm 25 years old.")
    end
  end
end

RSpec.describe PersonValidator do
  describe "#validate" do
    it "should raise an error if the person is invalid" do
      person = Person.new(nil, nil)
      validator = PersonValidator.new
      expect { validator.validate(person) }.to raise_error("Invalid person: name and age are required")
    end

    it "should not raise an error if the person is valid" do
      person = Person.new("John", 25)
      validator = PersonValidator.new
      expect { validator.validate(person) }.not_to raise_error
    end
  end
end
```


  </TabItem>
</Tabs>

---  

## Examples B

### Example B1

<Tabs>
  <TabItem value="ruby" label="Ruby" default>

Here is an advanced code example of the Single Responsibility Principle (SRP) in Ruby with inheritance:

A Person class that manages a person's name and age, and a Student class that inherits from Person and adds a student
ID, a Teacher class that inherits from Person and adds a subject and salary, and a Course class that manages a course's
name, teacher, and students:

```ruby
class Person
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end
end

class Student < Person
  attr_accessor :id

  def initialize(name, age, id)
    super(name, age)
    @id = id
  end
end

class Teacher < Person
  attr_accessor :subject, :salary

  def initialize(name, age, subject, salary)
    super(name, age)
    @subject = subject
    @salary = salary
  end
end

class Course
  attr_accessor :name, :teacher, :students

  def initialize(name, teacher, students)
    @name = name
    @teacher = teacher
    @students = students
  end

  def add_student(student)
    @students << student
  end

  def remove_student(student)
    @students.delete(student)
  end
end
```

In this example, the Person class only manages a person's name and age, the Student and Teacher classes only manage
additional attributes specific to students and teachers, and the Course class only manages a course's name, teacher, and
students. This promotes code that is more modular and maintainable.

  </TabItem>
  <TabItem value="specs" label="Specs">

```ruby
RSpec.describe Person do
  describe '#initialize' do
    it 'initializes a person with a name and age' do
      person = Person.new('John Doe', 30)

      expect(person.name).to eq('John Doe')
      expect(person.age).to eq(30)
    end
  end
end

RSpec.describe Teacher do
  subject(:teacher) { described_class.new("Jane", 30, "Math", 50000) }

  describe "#initialize" do
    it "sets the teacher's name" do
      expect(teacher.name).to eq("Jane")
    end

    it "sets the teacher's age" do
      expect(teacher.age).to eq(30)
    end

    it "sets the teacher's subject" do
      expect(teacher.subject).to eq("Math")
    end

    it "sets the teacher's salary" do
      expect(teacher.salary).to eq(50000)
    end
  end
end

RSpec.describe Course do
  let(:teacher) { Teacher.new("Jane", 30, "Math", 50000) }
  let(:students) { ["John", "Sally", "Dave"] }
  subject(:course) { described_class.new("Algebra 101", teacher, students) }

  describe "#initialize" do
    it "sets the course's name" do
      expect(course.name).to eq("Algebra 101")
    end

    it "sets the course's teacher" do
      expect(course.teacher).to eq(teacher)
    end

    it "sets the course's students" do
      expect(course.students).to eq(students)
    end
  end

  describe "#add_student" do
    it "adds a student to the course" do
      course.add_student("Mark")
      expect(course.students).to include("Mark")
    end
  end

  describe "#remove_student" do
    it "removes a student from the course" do
      course.remove_student("Sally")
      expect(course.students).not_to include("Sally")
    end
  end
end
```
  </TabItem>
</Tabs>

### Example B2

<Tabs>
  <TabItem value="ruby" label="Ruby" default>

Here is an advanced code example of the Single Responsibility Principle (SRP) in Ruby with inheritance, featuring a
Calculator class that provides methods for performing arithmetic operations, a ScientificCalculator class that inherits
from Calculator and adds methods for scientific functions, and a History class that manages a history of calculations:

```ruby

class Calculator
  def add(a, b)
    a + b
  end

  def subtract(a, b)
    a - b
  end

  def multiply(a, b)
    a * b
  end

  def divide(a, b)
    a / b
  end
end

class ScientificCalculator < Calculator
  def square_root(a)
    Math.sqrt(a)
  end

  def logarithm(a)
    Math.log(a)
  end

  def exponent(a, b)
    a ** b
  end

  def factorial(a)
    (1 .. a).inject(:*) || 1
  end
end

class History
  def self.add(calculation)
    @history ||= []
    @history << calculation
  end

  def self.clear
    @history = []
  end

  def self.print
    @history.each do |calculation|
      puts calculation
    end
  end
end
```

  </TabItem>
  <TabItem value="specs" label="Specs">

```ruby
RSpec.describe Calculator do
  let(:calculator) { Calculator.new }

  describe "#add" do
    it "adds two numbers" do
      expect(calculator.add(2, 3)).to eq(5)
    end
  end

  describe "#subtract" do
    it "subtracts two numbers" do
      expect(calculator.subtract(5, 3)).to eq(2)
    end
  end

  describe "#multiply" do
    it "multiplies two numbers" do
      expect(calculator.multiply(2, 3)).to eq(6)
    end
  end

  describe "#divide" do
    it "divides two numbers" do
      expect(calculator.divide(6, 3)).to eq(2)
    end

    it "raises an error if the second argument is zero" do
      expect { calculator.divide(6, 0) }.to raise_error(ZeroDivisionError)
    end
  end
end

RSpec.describe ScientificCalculator do
  let(:calculator) { ScientificCalculator.new }

  describe "#square_root" do
    it "calculates the square root of a number" do
      expect(calculator.square_root(9)).to eq(3)
    end
  end

  describe "#logarithm" do
    it "calculates the logarithm of a number" do
      expect(calculator.logarithm(100)).to eq(4.605170185988092)
    end
  end

  describe "#exponent" do
    it "raises a number to a given power" do
      expect(calculator.exponent(2, 3)).to eq(8)
    end
  end

  describe "#factorial" do
    it "calculates the factorial of a number" do
      expect(calculator.factorial(5)).to eq(120)
    end
  end
end

RSpec.describe History do
  describe ".add" do
    it "adds a calculation to the history" do
      History.add("2 + 3 = 5")
      expect(History.instance_variable_get(:@history)).to eq(["2 + 3 = 5"])
    end
  end

  describe ".clear" do
    it "clears the history" do
      History.instance_variable_set(:@history, ["2 + 3 = 5"])
      History.clear
      expect(History.instance_variable_get(:@history)).to eq([])
    end
  end

  describe ".print" do
    it "prints the history to the console" do
      History.instance_variable_set(:@history, ["2 + 3 = 5", "4 + 5 = 9"])
      expect { History.print }.to output("2 + 3 = 5\n4 + 5 = 9\n").to_stdout
    end
  end
end
```

  </TabItem>
</Tabs>
