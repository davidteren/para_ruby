"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9756],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>h});var t=a(7294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(a),h=s,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return a?t.createElement(m,i(i({ref:n},d),{},{components:a})):t.createElement(m,i({ref:n},d))}));function h(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=u;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},115:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=a(7462),s=(a(7294),a(3905));const o={sidebar_position:2},i="The Single Responsibility Principle",r={unversionedId:"solid-principles/single_responsibility_principle",id:"solid-principles/single_responsibility_principle",title:"The Single Responsibility Principle",description:"The Single Responsibility Principle (SRP) is a principle of object-oriented programming (OOP) that states that a class should only have a single responsibility, or a single reason to change. In other words, a class should focus on one specific aspect of the problem domain, and should not be cluttered with unrelated responsibilities or functionality.",source:"@site/docs/solid-principles/single_responsibility_principle.md",sourceDirName:"solid-principles",slug:"/solid-principles/single_responsibility_principle",permalink:"/para_ruby/docs/solid-principles/single_responsibility_principle",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is SOLID",permalink:"/para_ruby/docs/solid-principles/the_five_principles"},next:{title:"Open/Closed Principle (OCP)",permalink:"/para_ruby/docs/solid-principles/open_closed_principle"}},l={},c=[{value:"Advanced code Examples of Single Responsibility Principle in Ruby with inheritance",id:"advanced-code-examples-of-single-responsibility-principle-in-ruby-with-inheritance",level:3},{value:"Here are two examples of the Single Responsibility Principle (SRP) in Ruby on Rails:",id:"here-are-two-examples-of-the-single-responsibility-principle-srp-in-ruby-on-rails",level:2}],d={toc:c};function p(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"the-single-responsibility-principle"},"The Single Responsibility Principle"),(0,s.kt)("p",null,"The Single Responsibility Principle (SRP) is a principle of object-oriented programming (OOP) that states that a class should only have a single responsibility, or a single reason to change. In other words, a class should focus on one specific aspect of the problem domain, and should not be cluttered with unrelated responsibilities or functionality."),(0,s.kt)("blockquote",null,(0,s.kt)("h4",{parentName:"blockquote",id:"explain-the-single-responsibility-principle-like-im-five"},"Explain The Single Responsibility Principle like I'm five"),(0,s.kt)("p",{parentName:"blockquote"},"The Single Responsibility Principle is like a job. Everyone has a different job, and they do their job really well. For example, one person might be really good at making cookies, and another person might be really good at washing dishes. If they each just do their own job, then they will be able to make lots of cookies and wash lots of dishes. But if they try to do each other's job, then they might not be as good at it, and they might not be able to make as many cookies or wash as many dishes. So it's better for everyone to just do their own job and not try to do other people's jobs.")),(0,s.kt)("p",null,"In Ruby, the SRP can be applied by defining separate classes for different responsibilities, and using methods and attributes to encapsulate the relevant data and behavior. For example, instead of having a single Person class that handles both the person's name and age, we could define a Person class and a separate Age class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'class Person\n  attr_accessor :name\n\n  def initialize(name)\n    @name = name\n  end\nend\n\nclass Age\n  attr_accessor :age\n\n  def initialize(age)\n    @age = age\n  end\nend\n\nperson = Person.new("John")\nage = Age.new(25)\n')),(0,s.kt)("p",null,"This approach allows us to focus each class on a specific responsibility, and makes it easier to maintain and modify the code in the future."),(0,s.kt)("p",null,"This means that a class should not be responsible for multiple, unrelated tasks or responsibilities. Instead, each class should have a clear and well-defined purpose and should only be responsible for the tasks that are necessary to fulfill that purpose."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'# Define a class called "Person"\nclass Person\n  # Define attributes for the Person class\n  attr_accessor :name, :age\n\n  # Define a constructor method for initializing new Person objects\n  def initialize(name, age)\n    @name = name\n    @age = age\n  end\n\n  # Define a method for greeting another Person object\n  def greet(other_person)\n    puts "Hi #{other_person.name}, I\'m #{@name} and I\'m #{@age} years old."\n  end\nend\n\n# Define a class called "Employee"\nclass Employee < Person\n  # Define attributes for the Employee class\n  attr_accessor :title, :salary\n\n  # Define a constructor method for initializing new Employee objects\n  def initialize(name, age, title, salary)\n    # Use the super keyword to initialize the name and age attributes from the parent Person class\n    super(name, age)\n    @title = title\n    @salary = salary\n  end\n\n  # Define a method for calculating the annual salary for an Employee\n  def calculate_annual_salary\n    @salary * 12\n  end\nend\n\n# Create a new Employee object\nemployee = Employee.new("John", 25, "Software Engineer", 75000)\n\n# Use the Employee\'s calculate_annual_salary method to calculate their annual salary\nannual_salary = employee.calculate_annual_salary\n')),(0,s.kt)("p",null,"In this code, we define two classes: Person and Employee. The Person class is responsible for modeling a person and providing a method for greeting another person. The Employee class is responsible for modeling an employee and providing a method for calculating their annual salary. By separating these two responsibilities into separate classes, we are following the SRP and making our code more modular and maintainable."),(0,s.kt)("p",null,"In Ruby, this principle can be applied by ensuring that each class has a well-defined and narrowly focused purpose, and by avoiding the inclusion of unnecessary or unrelated functionality."),(0,s.kt)("p",null,"For example, consider a class that represents a bank account. The Single Responsibility Principle would dictate that this class should be responsible only for storing and manipulating information about the account (e.g. balance, transactions), and not for other tasks such as rendering HTML or sending email notifications. This would help to keep the class focused and easier to maintain."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"class BankAccount\n  attr_accessor :balance\n\n  def initialize(balance)\n    @balance = balance\n  end\n\n  def deposit(amount)\n    @balance += amount\n  end\n\n  def withdraw(amount)\n    @balance -= amount\n  end\nend\n")),(0,s.kt)("p",null,"This ",(0,s.kt)("inlineCode",{parentName:"p"},"BankAccount")," class only has a single responsibility, which is to store and manipulate information about the account. It does not include any unrelated functionality such as rendering HTML or sending email notifications. This makes the class more focused and easier to maintain."),(0,s.kt)("p",null,"More examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'# Define a class called "Person" that only has a single responsibility: managing information about a person\nclass Person\n  attr_accessor :name, :age\n\n  def initialize(name, age)\n    @name = name\n    @age = age\n  end\nend\n\n# Define a separate class called "EmailSender" that only has a single responsibility: sending emails\nclass EmailSender\n  def send_email(to, subject, body)\n    # Send the email\n  end\nend\n\n# Define a separate class called "Database" that only has a single responsibility: storing data\nclass Database\n  def save(data)\n    # Save the data to the database\n  end\nend\n\n# Create a new Person object\nperson = Person.new("John", 25)\n\n# Create an EmailSender object and use it to send an email\nemail_sender = EmailSender.new\nemail_sender.send_email("jane@example.com", "Hello!", "Hi there!")\n\n# Create a Database object and use it to save data\ndatabase = Database.new\ndatabase.save({name: "John", age: 25})\n')),(0,s.kt)("p",null,"In this code, we define three separate classes, each with a clear and focused responsibility. The Person class is responsible for managing information about a person, the EmailSender class is responsible for sending emails, and the Database class is responsible for storing data. This approach helps to promote code that is more modular, reusable, and maintainable."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'# Define a class called "Person"\nclass Person\n  # Define attributes for the Person class\n  attr_accessor :name, :age\n\n  # Define a constructor method for initializing new Person objects\n  def initialize(name, age)\n    @name = name\n    @age = age\n  end\n\n  # Define a method for greeting another Person object\n  def greet(other_person)\n    puts "Hi #{other_person.name}, I\'m #{@name} and I\'m #{@age} years old."\n  end\nend\n\n# Define a separate class called "PersonValidator" to handle validation\nclass PersonValidator\n  # Define a method for validating a Person object\n  def validate(person)\n    # Check if the person\'s name and age are valid\n    if person.name.nil? || person.age.nil?\n      raise "Invalid person: name and age are required"\n    end\n  end\nend\n\n# Create a new Person object\np1 = Person.new("John", 25)\n\n# Create a new PersonValidator object\nvalidator = PersonValidator.new\n\n# Validate the Person object using the PersonValidator\nvalidator.validate(p1)\n')),(0,s.kt)("p",null,"In this code, we define two classes: Person and PersonValidator. The Person class is responsible for modeling a person's name and age, and has a greet method for greeting another person. The PersonValidator class is responsible for validating a Person object, and has a validate method that checks if the person's name and age are valid. By separating the validation logic into a separate class, we are following the Single Responsibility Principle and ensuring that each class has a clear and well-defined responsibility. This can improve the maintainability and re-usability of the code."),(0,s.kt)("h3",{id:"advanced-code-examples-of-single-responsibility-principle-in-ruby-with-inheritance"},"Advanced code Examples of Single Responsibility Principle in Ruby with inheritance"),(0,s.kt)("p",null,"Here is an advanced code example of the Single Responsibility Principle (SRP) in Ruby with inheritance:"),(0,s.kt)("p",null,"A Person class that manages a person's name and age, and a Student class that inherits from Person and adds a student ID, a Teacher class that inherits from Person and adds a subject and salary, and a Course class that manages a course's name, teacher, and students:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"class Person\n  attr_accessor :name, :age\n\n  def initialize(name, age)\n    @name = name\n    @age = age\n  end\nend\n\nclass Student < Person\n  attr_accessor :id\n\n  def initialize(name, age, id)\n    super(name, age)\n    @id = id\n  end\nend\n\nclass Teacher < Person\n  attr_accessor :subject, :salary\n\n  def initialize(name, age, subject, salary)\n    super(name, age)\n    @subject = subject\n    @salary = salary\n  end\nend\n\nclass Course\n  attr_accessor :name, :teacher, :students\n\n  def initialize(name, teacher, students)\n    @name = name\n    @teacher = teacher\n    @students = students\n  end\n\n  def add_student(student)\n    @students << student\n  end\n\n  def remove_student(student)\n    @students.delete(student)\n  end\nend\n")),(0,s.kt)("p",null,"In this example, the Person class only manages a person's name and age, the Student and Teacher classes only manage additional attributes specific to students and teachers, and the Course class only manages a course's name, teacher, and students. This promotes code that is more modular and maintainable."),(0,s.kt)("p",null,"Here is an advanced code example of the Single Responsibility Principle (SRP) in Ruby with inheritance, featuring a Calculator class that provides methods for performing arithmetic operations, a ScientificCalculator class that inherits from Calculator and adds methods for scientific functions, and a History class that manages a history of calculations:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"class Calculator\n  def add(a, b)\n    a + b\n  end\n\n  def subtract(a, b)\n    a - b\n  end\n\n  def multiply(a, b)\n    a * b\n  end\n\n  def divide(a, b)\n    a / b\n  end\nend\n\nclass ScientificCalculator < Calculator\n  def square_root(a)\n    Math.sqrt(a)\n  end\n\n  def logarithm(a)\n    Math.log(a)\n  end\n\n  def exponent(a, b)\n    a ** b\n  end\n\n  def factorial(a)\n    (1..a).inject(:*) || 1\n  end\nend\n\nclass History\n  def self.add(calculation)\n    @history ||= []\n    @history << calculation\n  end\n\n  def self.clear\n    @history = []\n  end\n\n  def self.print\n    @history.each do |calculation|\n      puts calculation\n    end\n  end\nend\n")),(0,s.kt)("h2",{id:"here-are-two-examples-of-the-single-responsibility-principle-srp-in-ruby-on-rails"},"Here are two examples of the Single Responsibility Principle (SRP) in Ruby on Rails:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A Product model that manages a product's name, price, and quantity, and a ShoppingCart controller that manages a list of products and their total price:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"class Product < ActiveRecord::Base\n  validates :name, presence: true\n  validates :price, presence: true, numericality: true\n  validates :quantity, presence: true, numericality: { only_integer: true }\nend\n\nclass ShoppingCartController < ApplicationController\n  def add_product\n    product = Product.find(params[:product_id])\n    cart = session[:shopping_cart] ||= []\n    cart << product\n  end\n\n  def remove_product\n    product = Product.find(params[:product_id])\n    cart = session[:shopping_cart]\n    cart.delete(product) if cart\n  end\n\n  def total\n    cart = session[:shopping_cart]\n    @total = 0\n    if cart\n      cart.each do |product|\n        @total += product.price\n      end\n    end\n  end\nend\n\n")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A BankAccount model that manages a bank account's balance and transactions, and a Statement controller that generates a statement of transactions:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"class BankAccount < ActiveRecord::Base\n  validates :balance, presence: true, numericality: true\n\n  def deposit(amount)\n    self.balance += amount\n  end\n\n  def withdraw(amount)\n    self.balance -= amount\n  end\nend\n\nclass StatementController < ApplicationController\n  def generate\n    @account = BankAccount.find(params[:account_id])\n    @transactions = @account.transactions.order(created_at: :desc)\n  end\nend\n\n")),(0,s.kt)("p",null,"Here are some RSpec tests for the BankAccount and StatementController classes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'describe BankAccount do\n  let(:account) { BankAccount.new }\n\n  it "has a balance" do\n    expect(account).to respond_to(:balance)\n  end\n\n  it "validates the presence of the balance" do\n    expect(account).to validate_presence_of(:balance)\n  end\n\n  it "validates the numericality of the balance" do\n    expect(account).to validate_numericality_of(:balance)\n  end\n\n  describe "#deposit" do\n    it "increases the balance by the specified amount" do\n      expect { account.deposit(100) }.to change(account, :balance).by(100)\n    end\n  end\n\n  describe "#withdraw" do\n    it "decreases the balance by the specified amount" do\n      account.deposit(100)\n      expect { account.withdraw(50) }.to change(account, :balance).by(-50)\n    end\n  end\nend\n\ndescribe "POST /products" do\n  it "creates a new product" do\n    post "/products", params: { product: { name: "Product A", price: 10, quantity: 5 } }\n    expect(response).to have_http_status(:created)\n    expect(Product.last).to have_attributes(name: "Product A", price: 10, quantity: 5)\n  end\n\n  it "returns an error if the product is invalid" do\n    post "/products", params: { product: { name: "Product A", price: -10, quantity: 5 } }\n    expect(response).to have_http_status(:unprocessable_entity)\n    expect(response.body).to include("Validation failed")\n  end\nend\n\ndescribe "POST /shopping_cart/add_product" do\n  let(:product) { Product.create(name: "Product A", price: 10, quantity: 5) }\n\n  it "adds a product to the shopping cart" do\n    post "/shopping_cart/add_product", params: { product_id: product.id }\n    expect(response).to have_http_status(:ok)\n    expect(session[:shopping_cart]).to eq([product])\n  end\nend\n\ndescribe "POST /shopping_cart/remove_product" do\n  let(:product) { Product.create(name: "Product A", price: 10, quantity: 5) }\n\n  it "removes a product from the shopping cart" do\n    session[:shopping_cart] = [product]\n    post "/shopping_cart/remove_product", params: { product_id: product.id }\n    expect(response).to have_http_status(:ok)\n    expect(session[:shopping_cart]).to be_empty\n  end\nend\n\ndescribe "GET /shopping_cart/total" do\n  let(:product) { Product.create(name: "Product A", price: 10, quantity: 5) }\n\n  it "calculates the total price of products in the shopping cart" do\n    session[:shopping_cart] = [product]\n    get "/shopping_cart/total"\n    expect(response).to have_http_status(:ok)\n    expect(response.body).to eq("10")\n  end\nend\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'describe Product do\n  let(:product) { Product.new }\n\n  it "has a name" do\n    expect(product).to respond_to(:name)\n  end\n\n  it "validates the presence of the name" do\n    expect(product).to validate_presence_of(:name)\n  end\n\n  it "has a price" do\n    expect(product).to respond_to(:price)\n  end\n\n  it "validates the presence of the price" do\n    expect(product).to validate_presence_of(:price)\n  end\n\n  it "validates the numericality of the price" do\n    expect(product).to validate_numericality_of(:price)\n  end\n\n  it "has a quantity" do\n    expect(product).to respond_to(:quantity)\n  end\n\n  it "validates the presence of the quantity" do\n    expect(product).to validate_presence_of(:quantity)\n  end\n\n  it "validates the numericality of the quantity" do\n    expect(product).to validate_numericality_of(:quantity).only_integer\n  end\nend\n\ndescribe ShoppingCartController do\n  let(:product) { Product.create(name: "Product A", price: 10, quantity: 5) }\n\n  it "adds a product to the shopping cart" do\n    post :add_product, params: { product_id: product.id }\n    expect(session[:shopping_cart]).to eq([product])\n  end\n\n  it "removes a product from the shopping cart" do\n    session[:shopping_cart] = [product]\n    post :remove_product, params: { product_id: product.id }\n    expect(session[:shopping_cart]).to be_empty\n  end\n\n  it "calculates the total price of products in the shopping cart" do\n    session[:shopping_cart] = [product]\n    get :total\n    expect(assigns(:total)).to eq(10)\n  end\nend\n')))}p.isMDXComponent=!0}}]);