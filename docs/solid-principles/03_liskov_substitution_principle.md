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

<Tabs>
  <TabItem value="bad" label="Bad" default>

  ```ruby

  ```

  </TabItem>
  <TabItem value="good" label="Good">

A better way to structure this code would be to separate the responsibilities into different classes, each with a single
responsibility. For example:

  ```ruby

  ```

  </TabItem>
  <TabItem value="specs" label="Specs">

  ```ruby

  ````

  </TabItem>
</Tabs>
