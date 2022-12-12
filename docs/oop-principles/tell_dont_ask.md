# Tell Don't Ask

Tell don't ask is a principle in object-oriented programming that suggests that objects should be given instructions directly instead of asking them for information and making decisions based on that information. In other words, it is better to tell an object what to do rather than ask it for information and use that information to make a decision.

For example, instead of asking an object for its size and then checking if it is greater than a certain value, we can simply tell the object to check its size and return a boolean value. This reduces the amount of code and makes the program more efficient and readable.

In Ruby programming, we can use this principle by using method calls and conditional statements to directly instruct objects to perform certain actions. For example, instead of asking an object if it is empty and then checking if it is, we can simply tell the object to return true or false if it is empty. This makes the code more concise and easy to understand.


:::info Explain the Tell Don't Ask principle like I'm five

> Tell don't ask is a way of telling objects what to do instead of asking them for information and making decisions based on that information. It's like when you tell your friend to do something instead of asking them if they want to do it. It's easier to understand and makes the program work better. 
> 
> In Ruby programming, we use tell don't ask by using method calls and conditional statements to directly instruct objects to do things. For example, instead of asking an object if it is empty and then deciding what to do, we can just tell the object to tell us if it is empty and it will say "yes" or "no" for us. This makes the code simpler and easier to understand.

::: 