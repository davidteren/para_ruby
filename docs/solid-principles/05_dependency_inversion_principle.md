---
sidebar_position: 6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dependency Inversion Principle (DIP)

The Dependency Inversion Principle (DIP) is a principle of object-oriented design that states that high-level modules should not depend on low-level modules, but rather both should depend on abstractions. This means that instead of directly depending on concrete implementations of classes, modules should depend on abstract interfaces or contracts. This allows for better code organization and maintainability, as well as flexibility to accommodate future changes in requirements. To implement the DIP, developers can use techniques such as [abstraction](../glossary/abstraction.md), [inversion of control](../glossary/inversion%20of%20control.md), and dependency injection.

:::info Explain Dependency Inversion Principle (DIP) like I'm five
> The Dependency Inversion Principle is like a toy robot. A toy robot can do different things, like walk and talk and dance. And even though the robot can do all these different things, it doesn't have to do them all by itself. Instead, it can use other things to help it do the things it wants to do. For example, the robot might use batteries to make it move, and a speaker to make it talk. And even though the robot is using batteries and a speaker, it doesn't have to know how the batteries and the speaker work. It just has to know what they can do for it. In object-oriented programming, the toy robot is like a high-level module, and the batteries and the speaker are like low-level modules. The Dependency Inversion Principle says that high-level modules should use low-level modules without knowing how they work, so that the high-level modules can be more flexible and reusable.
:::


## Code examples

<Tabs>
  <TabItem value="bad" label="Bad" default>

```ruby
class User
  def send_email
    email_client = EmailClient.new
    email_client.send_email(to: 'user@example.com', subject: 'Hello', body: 'Hello, how are you?')
  end
end

class EmailClient
  def send_email(to:, subject:, body:)
    # Send the email using a third-party email service
  end
end

```
In this example, the User class depends on the `EmailClient` class to send emails. This creates a tight coupling between the two classes, because the User class is directly dependent on the `EmailClient` class for its functionality.

This violates the Dependency Inversion Principle because it means that any changes to the `EmailClient` class will also affect the `User` class. For example, if the `EmailClient` class changes the way it sends emails, the `User` class will also be affected.

A better design would be to invert the dependency between the two classes by introducing an abstraction between them. For example, you could create an `EmailService` interface with a send_email method, and have the `EmailClient` class implement this interface. The User class could then depend on the `EmailService` interface, rather than the concrete `EmailClient` class. This would allow you to change the implementation of the email service without affecting the User class.

  </TabItem>
  <TabItem value="good" label="Good">

```ruby
class User
  def initialize(email_service: EmailClient.new)
    @email_service = email_service
  end

  def send_email
    @email_service.send_email(to: 'user@example.com', subject: 'Hello', body: 'Hello, how are you?')
  end
end

class EmailClient
  def send_email(to:, subject:, body:)
    # Send the email using a third-party email service
  end
end

class MockEmailClient
  def send_email(to:, subject:, body:)
    # Do nothing, just return success
  end
end

# In the User class, you can now pass in any object that responds to the `send_email` method
user = User.new(email_service: MockEmailClient.new)
user.send_email

```
In this example, the User class depends on the `EmailService` interface, rather than the concrete `EmailClient` class. This allows you to change the implementation of the email service without affecting the User class.

You can also see how the MockEmailClient class, which is a stub implementation of the EmailService interface, can be used to test the User class without actually sending any emails. This can be useful for testing or debugging purposes.

By inverting the dependency between the User class and the `EmailClient` class, you can make the code more flexible and easier to maintain. It also makes it easier to test and debug the code, as you can swap out different implementations of the `EmailService` interface as needed.

  </TabItem>
  <TabItem value="specs" label="Specs">

```ruby
describe User do
  describe "#send_email" do
    let(:email_service) { double('EmailService') }
    subject { described_class.new(email_service: email_service) }

    it "sends an email using the email service" do
      expect(email_service).to receive(:send_email).with(to: 'user@example.com', subject: 'Hello', body: 'Hello, how are you?')
      subject.send_email
    end
  end
end

describe EmailClient do
  describe "#send_email" do
    it "sends an email using a third-party email service" do
      # Add tests to verify that the email is actually sent using the third-party email service
    end
  end
end

describe MockEmailClient do
  describe "#send_email" do
    it "does nothing, just returns success" do
      # Add tests to verify that the mock email client does not actually send any emails
    end
  end
end
````
These tests cover the basic behavior of the `User`, `EmailClient`, and `MockEmailClient` classes. They verify that the User class sends an email using the email service, and that the EmailClient class actually sends the email using a third-party email service. They also verify that the `MockEmailClient` class does not actually send any emails.

You may want to add additional tests to cover other aspects of the code, such as testing the error handling or other functionality of the `EmailClient` class. You could also add tests for any other methods or functionality that you want to include in your code.

  </TabItem>
</Tabs>
