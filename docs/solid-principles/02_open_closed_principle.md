---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Open/Closed Principle (OCP)


## What is OCP?

The Open/Closed Principle (OCP) is a principle of object-oriented design that states that software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification. This means that new functionality can be added to existing classes without changing their existing code. This allows for code reusability and maintainability, as well as flexibility to accommodate future changes in requirements. To implement the OCP, developers can use techniques such as [abstraction](../glossary/abstraction.md), [polymorphism](../glossary/polymorphism.md), and [inheritance](../glossary/inheritance.md).

:::info Explain like I'm five.
> The Open/Closed Principle is like a box. You can put things inside the box and take things out, but you can't change the box itself. This is good because you can use the same box over and over again and it will still work the same way. And if you want to put a different kind of thing in the box, you can just make a new box that is the same size but has a different shape or color. This way, you can keep using the old box and the new box without having to change anything.
:::

## Code examples

<Tabs>
  <TabItem value="bad" label="Bad" default>

```ruby
class PaymentProcessor
  def process(order)
    case order.payment_type
      when 'credit_card'
        process_credit_card(order)
      when 'paypal'
        process_paypal(order)
      when 'stripe'
        process_stripe(order)
    end
  end

  def process_credit_card(order)
    # Credit card processing logic
  end

  def process_paypal(order)
    # PayPal processing logic
  end

  def process_stripe(order)
    # Stripe processing logic
  end
end
```
In this code, the PaymentProcessor class is responsible for processing payments for different payment types. However, if a new payment type is added (e.g. Apple Pay), the PaymentProcessor class would need to be modified to handle it. This violates the Open/Closed Principle, which states that classes should be open for extension but closed for modification.

  </TabItem>
  <TabItem value="good" label="Good">

A better way to structure this code would be to use polymorphism to allow new payment types to be added without modifying the `PaymentProcessor` class. For example:

```ruby
class PaymentProcessor
  def process(payment)
    payment.process
  end
end

class CreditCardPayment
  def process
    # Credit card processing logic
  end
end

class PayPalPayment
  def process
    # PayPal processing logic
  end
end

class StripePayment
  def process
    # Stripe processing logic
  end
end
```

With this refactored code, new payment types can be added by creating new classes that implement the process method, without modifying the PaymentProcessor class. This allows the `PaymentProcessor` class to be open for extension without being modified.

  </TabItem>
  <TabItem value="specs" label="Specs">

```ruby
describe PaymentProcessor do
  describe '#process' do
    it 'processes a credit card payment' do
      payment = CreditCardPayment.new
      expect(payment).to receive(:process)
      PaymentProcessor.new.process(payment)
    end

    it 'processes a PayPal payment' do
      payment = PayPalPayment.new
      expect(payment).to receive(:process)
      PaymentProcessor.new.process(payment)
    end

    it 'processes a Stripe payment' do
      payment = StripePayment.new
      expect(payment).to receive(:process)
      PaymentProcessor.new.process(payment)
    end
  end
end

describe CreditCardPayment do
  describe '#process' do
    it 'processes the payment' do
      payment = CreditCardPayment.new
      expect(payment).to receive(:process)
      payment.process
    end
  end
end

describe PayPalPayment do
  describe '#process' do
    it 'processes the payment' do
      payment = PayPalPayment.new
      expect(payment).to receive(:process)
      payment.process
    end
  end
end

describe StripePayment do
  describe '#process' do
    it 'processes the payment' do
      payment = StripePayment.new
      expect(payment).to receive(:process)
      payment.process
    end
  end
end
````
  </TabItem>
</Tabs>
