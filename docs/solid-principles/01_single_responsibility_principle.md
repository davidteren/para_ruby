---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# The Single Responsibility Principle (SRP)

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

## Code examples

<Tabs>
  <TabItem value="bad" label="Bad" default>

In this code, the User class is responsible for multiple things: validating input, saving to the database, and sending an email. This violates the Single Responsibility Principle because the class has more than one reason to change. For example, if the way that the input is validated needs to change, or if the way that the welcome email is formatted needs to change, the User class would need to be modified.



```ruby
class User
  def initialize(name, email, password)
    @name = name
    @email = email
    @password = password
  end

  def register
    # Validate input
    if @name.empty? || @email.empty? || @password.empty?
      return "Invalid input"
    end

    # Save user to database
    db = Database.new
    db.save(@name, @email, @password)

    # Send welcome email
    Mailer.send_welcome_email(@email)
  end
end
```

 </TabItem>
  <TabItem value="good" label="Good">

A better way to structure this code would be to separate the responsibilities into different classes, each with a single responsibility. For example:

```ruby
class User
  def initialize(name, email, password)
    @name = name
    @email = email
    @password = password
  end
end

class UserValidator
  def self.validate(user)
    if user.name.empty? || user.email.empty? || user.password.empty?
      return "Invalid input"
    end
  end
end

class Database
  def save(user)
    # Save user to database
  end
end

class Mailer
  def self.send_welcome_email(email)
    # Send welcome email
  end
end

class UserRegistrar
  def self.register(user)
    if UserValidator.validate(user)
      return "Invalid input"
    end
    Database.new.save(user)
    Mailer.send_welcome_email(user.email)
  end
end
```
With this refactored code, each class has a single responsibility and can be changed independently of the others.

  </TabItem>
  <TabItem value="specs" label="Specs">

```ruby
require 'rspec'

describe User do
  describe '#initialize' do
    it 'initializes with a name, email, and password' do
      user = User.new('John', 'john@example.com', 'password')
      expect(user.name).to eq('John')
      expect(user.email).to eq('john@example.com')
      expect(user.password).to eq('password')
    end
  end
end

describe UserValidator do
  describe '.validate' do
    it 'returns "Invalid input" if the user has an empty name, email, or password' do
      user = User.new('', '', '')
      expect(UserValidator.validate(user)).to eq('Invalid input')
    end

    it 'returns nil if the user has a non-empty name, email, and password' do
      user = User.new('John', 'john@example.com', 'password')
      expect(UserValidator.validate(user)).to be_nil
    end
  end
end

describe Database do
  describe '#save' do
    it 'saves the user to the database' do
      user = User.new('John', 'john@example.com', 'password')
      database = Database.new
      expect(database).to receive(:save).with(user)
      database.save(user)
    end
  end
end

describe Mailer do
  describe '.send_welcome_email' do
    it 'sends a welcome email to the provided email address' do
      expect(Mailer).to receive(:send_welcome_email).with('john@example.com')
      Mailer.send_welcome_email('john@example.com')
    end
  end
end

describe UserRegistrar do
  describe '.register' do
    it 'saves the user to the database and sends a welcome email' do
      user = User.new('John', 'john@example.com', 'password')
      database = Database.new
      expect(database).to receive(:save).with(user)
      expect(Mailer).to receive(:send_welcome_email).with('john@example.com')
      UserRegistrar.register(user)
    end

    it 'returns "Invalid input" if the user has an empty name, email, or password' do
      user = User.new('', '', '')
      expect(UserRegistrar.register(user)).to eq('Invalid input')
    end
  end
end
````
  </TabItem>
 </Tabs>
