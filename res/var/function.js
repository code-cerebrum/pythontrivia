c = 0;

c++;
window["type"+c] = "4";
window["des"+c] = `What is the output of the following code snippet?
`;
window["q"+c] =`
def add_numbers(a, b):
    return a + b

print(add_numbers(5, 10))`;
window["ans"+c] = `15`;
window["noans1"+c] = `5`;
window["noans2"+c] = `10`;
window["noans3"+c] = `50`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is a valid function call in Python?
`;
window["q"+c] =``;
window["ans"+c] = `my_function()`;
window["noans1"+c] = `my_function`;
window["noans2"+c] = `my-function(x)`;
window["noans3"+c] = `my-function(x, y)`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("Alice")`;
window["ans"+c] = `Hello, Alice!`;
window["noans1"+c] = `Hello, world!`;
window["noans2"+c] = `world`;
window["noans3"+c] = `None`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is a valid Python function definition?
`;
window["q"+c] =``;
window["ans"+c] = `def add_numbers(a, b): return a + b`;
window["noans1"+c] = `def add_numbers(a, b) { return a + b }`;
window["noans2"+c] = `def add_numbers(a, b) -> a + b`;
window["noans3"+c] = `def add_numbers(a, b); return a + b`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def multiply_numbers(a=2, b=3):
    return a * b

print(multiply_numbers())`;
window["ans"+c] = `6`;
window["noans1"+c] = `5`;
window["noans2"+c] = `8`;
window["noans3"+c] = `9`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is a valid way to define a function that takes an arbitrary number of arguments in Python?
`;
window["q"+c] =``;
window["ans"+c] = `def my_function(*args):`;
window["noans1"+c] = `def my_function(args):`;
window["noans2"+c] = `def my_function(**kwargs):`;
window["noans3"+c] = `def my_function(*args, **kwargs):`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def add_numbers(a, b):
    return a + b

print(add_numbers(b=5, a=10))`;
window["ans"+c] = `15`;
window["noans1"+c] = `5`;
window["noans2"+c] = `10`;
window["noans3"+c] = `50`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is a valid way to define a function that takes a variable number of keyword arguments in Python?
`;
window["q"+c] =``;
window["ans"+c] = `def my_function(**kwargs):`;
window["noans1"+c] = `def my_function(*args):`;
window["noans2"+c] = `def my_function(args):`;
window["noans3"+c] = `def my_function(*args, **kwargs):`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))`;
window["ans"+c] = `120`;
window["noans1"+c] = `5`;
window["noans2"+c] = `10`;
window["noans3"+c] = `20`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def sum_of_squares(a, b):
    return a**2 + b**2

print(sum_of_squares(3, 4))`;
window["ans"+c] = `25`;
window["noans1"+c] = `7`;
window["noans2"+c] = `9`;
window["noans3"+c] = `12`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is a valid Python lambda function that returns the sum of two numbers?
`;
window["q"+c] =``;
window["ans"+c] = `lambda x, y: x + y`;
window["noans1"+c] = `lambda x, y: return x + y`;
window["noans2"+c] = `lambda x + y`;
window["noans3"+c] = `lambda x, y: sum(x, y)`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def print_twice(s):
    print(s)
    print(s)

print_twice("Hello")`;
window["ans"+c] = `Hello Hello`;
window["noans1"+c] = `Hello`;
window["noans2"+c] = `"HelloHello"`;
window["noans3"+c] = `"(Hello),(Hello)`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is a valid way to define a recursive function in Python?
// `;
// window["q"+c] =``;
// window["ans"+c] = `def my_function(n):`;
// window["noans1"+c] = `def my_function(n, recursion=True):`;
// window["noans2"+c] = `def my_function(n): recursion=True`;
// window["noans3"+c] = `def my_function(n, recursion=False):`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def print_even_numbers(n):
    if n % 2 == 0:
        print(n)
    if n > 0:
        print_even_numbers(n-1)

print_even_numbers(6)`;
window["ans"+c] = `6 4 2 0`;
window["noans1"+c] = `0 2 4 6`;
window["noans2"+c] = `2 4 6`;
window["noans3"+c] = `6 4 2`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is a valid way to pass a function as an argument to another function in Python?
`;
window["q"+c] =``;
window["ans"+c] = `my_function(another_function)`;
window["noans1"+c] = `my_function.add(another_function)`;
window["noans2"+c] = `my_function[another_function]`;
window["noans3"+c] = `my_function.call(another_function)`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def add_numbers(a, b):
    result = a + b
    print(f"The result is {result}")

add_numbers(3, 4)`;
window["ans"+c] = `The result is 7`;
window["noans1"+c] = `The result is 3`;
window["noans2"+c] = `The result is 4`;
window["noans3"+c] = `The result is 12`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def multiply_by_two(x):
    return x * 2

my_list = [1, 2, 3, 4]
result = map(multiply_by_two, my_list)
print(list(result))`;
window["ans"+c] = `[2, 4, 6, 8]`;
window["noans1"+c] = `[1, 2, 3, 4]`;
window["noans2"+c] = `[1, 4, 9, 16]`;
window["noans3"+c] = `[(1, 2), (3, 4)]`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is a valid way to define a global variable in Python?
`;
window["q"+c] =``;
window["ans"+c] = `global my_var`;
window["noans1"+c] = `my_var = 42`;
window["noans2"+c] = `def my_var(): return 42`;
window["noans3"+c] = `my_var == 42`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is a valid way to define a local variable inside a function in Python?
`;
window["q"+c] =``;
window["ans"+c] = `my_var = 42`;
window["noans1"+c] = `local my_var = 42`;
window["noans2"+c] = `my_var == 42`;
window["noans3"+c] = `global my_var = 42`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def power_of_two(n):
    if n == 0:
        return 1
    else:
        return 2 * power_of_two(n-1)

print(power_of_two(4))`;
window["ans"+c] = `16`;
window["noans1"+c] = `2`;
window["noans2"+c] = `4`;
window["noans3"+c] = `8`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is a valid way to define a lambda function that takes three arguments?
`;
window["q"+c] =``;
window["ans"+c] = `lambda x, y, z: x + y + z`;
window["noans1"+c] = `lambda (x, y, z): x + y + z`;
window["noans2"+c] = `lambda x y z: x + y + z`;
window["noans3"+c] = `lambda x y, z: x + y + z`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 10

def my_function():
    x = 5
    print(x)

my_function()
print(x)`;
window["ans"+c] = `5 10`;
window["noans1"+c] = `5 5`;
window["noans2"+c] = `10 10`;
window["noans3"+c] = `10 5`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is a valid way to define a function with a default argument in Python?
`;
window["q"+c] =``;
window["ans"+c] = `def my_function(n=2):`;
window["noans1"+c] = `def my_function(n): default=2`;
window["noans2"+c] = `def my_function(n): n=2`;
window["noans3"+c] = `def my_function(default=2, n):`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def print_odd_numbers(n):
    if n % 2 != 0:
        print(n)
    if n > 0:
        print_odd_numbers(n-1)

print_odd_numbers(7)`;
window["ans"+c] = `7 5 3 1`;
window["noans1"+c] = `0 2 4 6 7`;
window["noans2"+c] = `1 3 5 7`;
window["noans3"+c] = `7 5 3 1 0`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is a valid way to define an anonymous function that returns the square of a number?
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x: x*x`;
// window["noans1"+c] = `lambda x: x^2`;
// window["noans2"+c] = `def(x): return x*x`;
// window["noans3"+c] = `def(x): x^2`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 5

def my_function():
    global x
    x = 10

my_function()
print(x)`;
window["ans"+c] = `10`;
window["noans1"+c] = `5`;
window["noans2"+c] = `15`;
window["noans3"+c] = `20`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(4))`;
window["ans"+c] = `24`;
window["noans1"+c] = `4`;
window["noans2"+c] = `12`;
window["noans3"+c] = `120`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is a valid way to define a lambda function that takes no arguments and returns the string "Hello, world!"?
`;
window["q"+c] =``;
window["ans"+c] = `lambda: "Hello, world!"`;
window["noans1"+c] = `lambda(): "Hello, world!"`;
window["noans2"+c] = `lambda x: "Hello, world!"`;
window["noans3"+c] = `lambda x(): "Hello, world!"`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 5

def my_function():
    x = x + 1
    print(x)

my_function()
print(x)`;
window["ans"+c] = `UnboundLocalError`;
window["noans1"+c] = `6 6`;
window["noans2"+c] = `6 5`;
window["noans3"+c] = `5 6`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def countdown(n):
    if n == 0:
        print("Blastoff!")
    else:
        print(n)
        countdown(n-1)

countdown(3)`;
window["ans"+c] = `3 2 1 Blastoff!`;
window["noans1"+c] = `0 1 2 Blastoff!`;
window["noans2"+c] = `1 2 3 Blastoff!`;
window["noans3"+c] = `3 2 1 0 Blastoff!`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 5

def my_function():
    global x
    x = x + 1

print(x)
my_function()
print(x)`;
window["ans"+c] = `5 6`;
window["noans1"+c] = `5 5`;
window["noans2"+c] = `6 6`;
window["noans3"+c] = `6 5`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    return x + 1

my_list = [1, 2, 3]
new_list = map(my_function, my_list)
print(list(new_list))`;
window["ans"+c] = `[2, 3, 4]`;
window["noans1"+c] = `[1, 2, 3]`;
window["noans2"+c] = `2 3 4`;
window["noans3"+c] = `1 2 3`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x=5):
    return x + 1

print(my_function())
print(my_function(10))`;
window["ans"+c] = `6 11`;
window["noans1"+c] = `6 10`;
window["noans2"+c] = `5 11`;
window["noans3"+c] = `5 10`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 5

def my_function():
    x = 10
    print(x)

my_function()
print(x)`;
window["ans"+c] = `10 5`;
window["noans1"+c] = `5 10`;
window["noans2"+c] = `10 10`;
window["noans3"+c] = `5 5`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x == 1:
        return 1
    else:
        return x * my_function(x-1)

print(my_function(4))`;
window["ans"+c] = `24`;
window["noans1"+c] = `4`;
window["noans2"+c] = `12`;
window["noans3"+c] = `120`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 5

def my_function():
    x = 10
    print(x)

my_function()
print(x)`;
window["ans"+c] = `10 5`;
window["noans1"+c] = `10 10`;
window["noans2"+c] = `5 10`;
window["noans3"+c] = `5 5`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x, y):
    return x + y

my_dict = {'x': 1, 'y': 2}
print(my_function(**my_dict))`;
window["ans"+c] = `3`;
window["noans1"+c] = `{'x': 1, 'y': 2}`;
window["noans2"+c] = `1 2`;
window["noans3"+c] = `TypeError`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 5

def my_function():
    global x
    x = 10
    print(x)

my_function()
print(x)`;
window["ans"+c] = `10 10`;
window["noans1"+c] = `5 10`;
window["noans2"+c] = `10 5`;
window["noans3"+c] = `5 5`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x, y=5):
    return x + y

print(my_function(2))
print(my_function(2, 2))`;
window["ans"+c] = `7 4`;
window["noans1"+c] = `7 5`;
window["noans2"+c] = `2 7`;
window["noans3"+c] = `2 4`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function():
    x = 10

print(x)`;
window["ans"+c] = `NameError: name 'x' is not defined`;
window["noans1"+c] = `10`;
window["noans2"+c] = `None`;
window["noans3"+c] = `TypeError`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is a valid way to define an anonymous function that takes two arguments and returns the larger of the two arguments?
`;
window["q"+c] =``;
window["ans"+c] = `lambda x, y: x if x > y else y`;
window["noans1"+c] = `lambda x, y: x > y ? x : y`;
window["noans2"+c] = `lambda x, y: max(x, y)`;
window["noans3"+c] = `lambda x, y: min(x, y)`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 5

def my_function():
    x = 10
    print(x)

my_function()
print(x)`;
window["ans"+c] = `10 5`;
window["noans1"+c] = `10 10`;
window["noans2"+c] = `5 10`;
window["noans3"+c] = `5 5`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is a valid way to define an anonymous function that takes a single argument and returns True if the argument is positive and False otherwise?
`;
window["q"+c] =``;
window["ans"+c] = `lambda x: x > 0`;
window["noans1"+c] = `lambda x: x < 0`;
window["noans2"+c] = `lambda x: x >= 0`;
window["noans3"+c] = `lambda x: x == 0`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x, y):
    return x * y

my_dict = {'x': 2, 'y': 3}
print(my_function(**my_dict))`;
window["ans"+c] = `6`;
window["noans1"+c] = `{'x': 2, 'y': 3}`;
window["noans2"+c] = `2 3`;
window["noans3"+c] = `TypeError`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 5

def my_function():
    x = 10

print(my_function())`;
window["ans"+c] = `None`;
window["noans1"+c] = `10`;
window["noans2"+c] = `5`;
window["noans3"+c] = `TypeError`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b, c):
    return a + b + c

print(my_function(1, 2, 3))
print(my_function(a=1, b=2, c=3))
print(my_function(c=3, b=2, a=1))`;
window["ans"+c] = `6 6 6`;
window["noans1"+c] = `6 6`;
window["noans2"+c] = `6 TypeError`;
window["noans3"+c] = `6 6 TypeError`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 10

def my_function():
    global x
    x = 5

my_function()
print(x)`;
window["ans"+c] = `5`;
window["noans1"+c] = `10`;
window["noans2"+c] = `None`;
window["noans3"+c] = `TypeError`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(*args):
    return sum(args)

print(my_function(1, 2, 3))
print(my_function(4, 5, 6, 7))`;
window["ans"+c] = `6 22`;
window["noans1"+c] = `123 4567`;
window["noans2"+c] = `6 22 123 4567`;
window["noans3"+c] = `TypeError`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b, c=0, d=0):
    return a + b + c + d

print(my_function(1, 2))
print(my_function(1, 2, 3))
print(my_function(1, 2, 3, 4))`;
window["ans"+c] = `3 6 10`;
window["noans1"+c] = `3 6 7`;
window["noans2"+c] = `1 2 3`;
window["noans3"+c] = `TypeError`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b, c):
    print(a, b, c)

my_list = [1, 2, 3]
my_function(*my_list)`;
window["ans"+c] = `1 2 3`;
window["noans1"+c] = `1 2 None`;
window["noans2"+c] = `1 [2, 3] None`;
window["noans3"+c] = `TypeError`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b, *args):
    print(a, b, args)

my_function(1, 2, 3, 4, 5)`;
window["ans"+c] = `1 2 (3, 4, 5)`;
window["noans1"+c] = `1 2 [3, 4, 5]`;
window["noans2"+c] = `1 2 3 4 5`;
window["noans3"+c] = `TypeError`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a=0, b=0, c=0):
    return a + b + c

print(my_function(b=2, a=1, c=3))`;
window["ans"+c] = `6`;
window["noans1"+c] = `3`;
window["noans2"+c] = `1 2 3`;
window["noans3"+c] = `TypeError`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function():
    x = 10

my_function()
print(x)`;
window["ans"+c] = `NameError: name 'x' is not defined`;
window["noans1"+c] = `10`;
window["noans2"+c] = `None`;
window["noans3"+c] = `undefined`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 10

def my_function():
    global x
    x = 20

my_function()
print(x)`;
window["ans"+c] = `20`;
window["noans1"+c] = `10`;
window["noans2"+c] = `None`;
window["noans3"+c] = `NameError: name 'x' is not defined`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b=2, c=3):
    print(a, b, c)

my_function(1, c=5)`;
window["ans"+c] = `1 2 5`;
window["noans1"+c] = `1 2 3`;
window["noans2"+c] = `1 5 3`;
window["noans3"+c] = `TypeError`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 10

def my_function(x):
    x += 5
    return x

my_function(x)
print(x)`;
window["ans"+c] = `10`;
window["noans1"+c] = `15`;
window["noans2"+c] = `None`;
window["noans3"+c] = `NameError: name 'x' is not defined`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 10

def my_function():
    x = 20
    print(x)

my_function()
print(x)`;
window["ans"+c] = `20 10`;
window["noans1"+c] = `10 20`;
window["noans2"+c] = `20 20`;
window["noans3"+c] = `10 10`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is the correct way to define a lambda function that takes a single argument, x, and returns True if x is greater than 10 and False otherwise?
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x: x > 10`;
// window["noans1"+c] = `lambda x: if x > 10: True else: False`;
// window["noans2"+c] = `lambda x: x > 10 ? True : False`;
// window["noans3"+c] = `lambda x: x > 10 and True or False`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b=2, c=3):
    print(a, b, c)

my_function(1, c=5, b=4)`;
window["ans"+c] = `1 4 5`;
window["noans1"+c] = `1 2 3`;
window["noans2"+c] = `1 3 5`;
window["noans3"+c] = `TypeError: my_function() got multiple values for argument 'b'`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 10

def my_function():
    global x
    x += 5
    print(x)

my_function()
print(x)`;
window["ans"+c] = `15 15`;
window["noans1"+c] = `10 15`;
window["noans2"+c] = `15 10`;
window["noans3"+c] = `10 10`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 10

def my_function(x):
    x += 5
    print(x)

my_function(x)
print(x)`;
window["ans"+c] = `15 10`;
window["noans1"+c] = `10 15`;
window["noans2"+c] = `15 15`;
window["noans3"+c] = `10 10`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b, c):
    print(a, b, c)

my_dict = {'b': 2, 'c': 3, 'a': 1}
my_function(**my_dict)`;
window["ans"+c] = `1 2 3`;
window["noans1"+c] = `1 3 2`;
window["noans2"+c] = `2 3 1`;
window["noans3"+c] = `TypeError: my_function() got an unexpected keyword argument 'a'`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is the correct way to define a lambda function that takes a single argument, x, and returns its square if x is positive and 0 otherwise?
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x: x**2 if x > 0 else 0`;
// window["noans1"+c] = `lambda x: x^2 if x > 0 else 0`;
// window["noans2"+c] = `lambda x: x*x if x > 0 else 0`;
// window["noans3"+c] = `lambda x: x*x if x > 0, 0`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    x[0] = 5

my_list = [1, 2, 3]
my_function(my_list)
print(my_list)`;
window["ans"+c] = `[5, 2, 3]`;
window["noans1"+c] = `[1, 2, 3]`;
window["noans2"+c] = `[1, 5, 3]`;
window["noans3"+c] = `[1, 2, 5]`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is the correct way to define a lambda function that takes a single argument, x, and returns True if x is divisible by 3 and False otherwise?
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x: x % 3 == 0`;
// window["noans1"+c] = `lambda x: if x % 3 == 0: True else: False`;
// window["noans2"+c] = `lambda x: x % 3 == 0 and True or False`;
// window["noans3"+c] = `lambda x: x % 3`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b, c=3):
    print(a, b, c)

my_function(1, c=5, 2)`;
window["ans"+c] = `SyntaxError: positional argument follows keyword argument`;
window["noans1"+c] = `1 2 5`;
window["noans2"+c] = `1 2 3`;
window["noans3"+c] = `1 5 2`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is the correct way to define a lambda function that takes two arguments, x and y, and returns the larger of the two?
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x, y: x if x > y else y`;
// window["noans1"+c] = `lambda x, y: max(x, y)`;
// window["noans2"+c] = `lambda x, y: x > y ? x : y`;
// window["noans3"+c] = `lambda x, y: y if x > y else x`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b=2, c=3):
    print(a, b, c)

my_function(1, c=4)`;
window["ans"+c] = `1 2 4`;
window["noans1"+c] = `1 4 3`;
window["noans2"+c] = `1 2 3`;
window["noans3"+c] = `SyntaxError: positional argument follows keyword argument`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b):
    return a + b, a - b

result = my_function(3, 2)
print(result[0])`;
window["ans"+c] = `5`;
window["noans1"+c] = `3`;
window["noans2"+c] = `2`;
window["noans3"+c] = `(3, 2)`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 5

def my_function():
    x = 3

my_function()
print(x)`;
window["ans"+c] = `5`;
window["noans1"+c] = `3`;
window["noans2"+c] = `0`;
window["noans3"+c] = `NameError: name 'x' is not defined`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is the correct way to define a lambda function that takes a single argument, x, and returns True if x is a string and False otherwise?
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x: isinstance(x, str)`;
// window["noans1"+c] = `lambda x: type(x) == 'str'`;
// window["noans2"+c] = `lambda x: x is str`;
// window["noans3"+c] = `lambda x: x.__class__ == str`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 5

def my_function():
    global x
    x = 3

my_function()
print(x)`;
window["ans"+c] = `3`;
window["noans1"+c] = `5`;
window["noans2"+c] = `0`;
window["noans3"+c] = `NameError: name 'x' is not defined`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b=2, c=3):
    print(a, b, c)

my_function(1, 4)`;
window["ans"+c] = `1 4 3`;
window["noans1"+c] = `1 2 4`;
window["noans2"+c] = `1 2 3`;
window["noans3"+c] = `SyntaxError: positional argument follows keyword argument`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b):
    return a + b, a - b

result1, result2 = my_function(3, 2)
print(result1, result2)`;
window["ans"+c] = `5 1`;
window["noans1"+c] = `3 2`;
window["noans2"+c] = `(3, 2)`;
window["noans3"+c] = `TypeError: cannot unpack non-iterable int object`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is the correct way to define a lambda function that takes two arguments, x and y, and returns True if x is divisible by y and False otherwise?
`;
window["q"+c] =``;
window["ans"+c] = `lambda x, y: x%y == 0`;
window["noans1"+c] = `lambda x, y: x//y == 0`;
window["noans2"+c] = `lambda x, y: x/y == 0`;
window["noans3"+c] = `lambda x, y: x%y == 1`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 5

def my_function():
    x = x + 3

my_function()
print(x)`;
window["ans"+c] = `UnboundLocalError`;
window["noans1"+c] = `3`;
window["noans2"+c] = `5`;
window["noans3"+c] = `0`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is the correct way to define a lambda function that takes a single argument, x, and returns True if x is an even number and False otherwise?
`;
window["q"+c] =``;
window["ans"+c] = `lambda x: x%2 == 0`;
window["noans1"+c] = `lambda x: x%2 == 1`;
window["noans2"+c] = `lambda x: x//2 == 0`;
window["noans3"+c] = `lambda x: x//2 == 1`;

c++;
window["type"+c] = "4";
window["des"+c] = `What is the output of the following code snippet?
`;
window["q"+c] =`
x = 5

def my_function():
    global x
    x = x + 3

my_function()
print(x)`;
window["ans"+c] = `8`;
window["noans1"+c] = `3`;
window["noans2"+c] = `5`;
window["noans3"+c] = `NameError: name 'x' is not defined`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b=2, c=3):
    print(a, b, c)

my_function(1, c=4)`;
window["ans"+c] = `1 2 4`;
window["noans1"+c] = `1 4 2`;
window["noans2"+c] = `1 2 3`;
window["noans3"+c] = `TypeError: my_function() got multiple values for argument 'c'`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b):
    return a + b, a - b

result = my_function(3, 2)
print(result[1])`;
window["ans"+c] = `1`;
window["noans1"+c] = `3`;
window["noans2"+c] = `2`;
window["noans3"+c] = `TypeError: 'int' object is not subscriptable`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b=2, c=3):
    print(a, b, c)

my_function(b=4, a=1)`;
window["ans"+c] = `1 4 3`;
window["noans1"+c] = `1 2 4`;
window["noans2"+c] = `1 2 3`;
window["noans3"+c] = `TypeError: my_function() got multiple values for argument 'a'`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a=1, b=2, c=3):
    print(a, b, c)

my_function(c=4)`;
window["ans"+c] = `1 2 4`;
window["noans1"+c] = `1 2 3`;
window["noans2"+c] = `1 3 4`;
window["noans3"+c] = `4 2 3`;
//check below for verification
c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is the correct way to define a lambda function that takes a single argument, x, and returns the absolute value of x?
`;
window["q"+c] =``;
window["ans"+c] = `lambda x: abs(x)`;
window["noans1"+c] = `lambda x: x ** 2`;
window["noans2"+c] = `lambda x: -x`;
window["noans3"+c] = `lambda x: x`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(a, b):
    a = b

x = 1
y = 2
my_function(x, y)
print(x)`;
window["ans"+c] = `1`;
window["noans1"+c] = `2`;
window["noans2"+c] = `None`;
window["noans3"+c] = `SyntaxError`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is the correct way to define a lambda function that takes a single argument, x, and returns the square root of x?
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x: math.sqrt(x)`;
// window["noans1"+c] = `lambda x: x ** 2`;
// window["noans2"+c] = `lambda x: -x`;
// window["noans3"+c] = `lambda x: x`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x <= 1:
        return 1
    else:
        return x * my_function(x - 1)

print(my_function(5))`;
window["ans"+c] = `120`;
window["noans1"+c] = `1`;
window["noans2"+c] = `5`;
window["noans3"+c] = `15`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is the correct way to define a lambda function that takes a single argument, x, and returns the square of x if x is greater than 0, and the absolute value of x otherwise?
`;
window["q"+c] =``;
window["ans"+c] = `lambda x: x ** 2 if x > 0 else abs(x)`;
window["noans1"+c] = `lambda x: x ** 2 if x < 0 else abs(x)`;
window["noans2"+c] = `lambda x: abs(x) if x > 0 else x ** 2`;
window["noans3"+c] = `lambda x: abs(x) if x < 0 else x ** 2`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 1

def my_function():
    x = 2
    print(x)

my_function()
print(x)`;
window["ans"+c] = `2 1`;
window["noans1"+c] = `1 2`;
window["noans2"+c] = `2 2`;
window["noans3"+c] = `1 1`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x, y):
    x = y
    y = x

a = 1
b = 2
my_function(a, b)
print(a, b)`;
window["ans"+c] = `1 2`;
window["noans1"+c] = `2 1`;
window["noans2"+c] = `1 1`;
window["noans3"+c] = `2 2`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    x += 1
    return x

a = 1
b = my_function(a)
print(a, b)`;
window["ans"+c] = `1 2`;
window["noans1"+c] = `2 1`;
window["noans2"+c] = `1 1`;
window["noans3"+c] = `2 2`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 1

def my_function():
    global x
    x = 2
    print(x)

my_function()
print(x)`;
window["ans"+c] = `2 2`;
window["noans1"+c] = `1 2`;
window["noans2"+c] = `2 1`;
window["noans3"+c] = `1 1`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is the correct way to define a lambda function that takes a single argument, x, and returns the length of x if x is a string, and None otherwise?
`;
window["q"+c] =``;
window["ans"+c] = `lambda x: len(x) if isinstance(x, str) else None`;
window["noans1"+c] = `lambda x: len(x) if type(x) == None`;
window["noans2"+c] = `lambda x: x if x.__class__ == str else None`;
window["noans3"+c] = `lambda x: len(x) if x.__name__ == 'str' else None`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x, y):
    if y == 0:
        return 1
    else:
        return x * my_function(x, y - 1)

print(my_function(2, 3))`;
window["ans"+c] = `8`;
window["noans1"+c] = `6`;
window["noans2"+c] = `9`;
window["noans3"+c] = `10`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is the correct way to define a lambda function that takes a single argument, x, and returns True if x is a list or a tuple, and False otherwise?
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x: isinstance(x, (list, tuple))`;
// window["noans1"+c] = `lambda x: type(x) in (list, tuple)`;
// window["noans2"+c] = `lambda x: x.__class__ in (list, tuple)`;
// window["noans3"+c] = `lambda x: x.__class__.__name__ in ('list', 'tuple')`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x <= 0:
        return 1
    else:
        return x * my_function(x - 2)

print(my_function(5))`;
window["ans"+c] = `15`;
window["noans1"+c] = `120`;
window["noans2"+c] = `21`;
window["noans3"+c] = `25`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is the correct way to define a lambda function that takes a single argument, x, and returns True if x is a dictionary, and False otherwise?
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x: isinstance(x, dict)`;
// window["noans1"+c] = `lambda x: type(x) == dict`;
// window["noans2"+c] = `lambda x: x.__class__ == dict`;
// window["noans3"+c] = `lambda x: x.__class__.__name__ == 'dict'`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x == 0:
        return 1
    else:
        return x * my_function(x // 2)

print(my_function(10))`;
window["ans"+c] = `100`;
window["noans1"+c] = `1`;
window["noans2"+c] = `10`;
window["noans3"+c] = `320`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x < 0:
        return 0
    else:
        return x + my_function(x - 1)

print(my_function(5))`;
window["ans"+c] = `15`;
window["noans1"+c] = `10`;
window["noans2"+c] = `20`;
window["noans3"+c] = `25`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is the correct way to define a lambda function that takes two arguments, x and y, and returns True if x is a string that contains y, and False otherwise? 
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x, y: y in x`;
// window["noans1"+c] = `lambda x, y: x in y`;
// window["noans2"+c] = `lambda x, y: y.startswith(x)`;
// window["noans3"+c] = `lambda x, y: y.endswith(x)`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
x = 10

def my_function():
    global x
    x = 20

my_function()
print(x)`;
window["ans"+c] = `20`;
window["noans1"+c] = `10`;
window["noans2"+c] = `30`;
window["noans3"+c] = `NameError: x is not defined`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is the correct way to define a lambda function that takes a single argument, x, and returns True if x is a boolean value, and False otherwise?
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x: isinstance(x, bool)`;
// window["noans1"+c] = `lambda x: type(x) == bool`;
// window["noans2"+c] = `lambda x: x.__class__ == bool`;
// window["noans3"+c] = `lambda x: x.__class__.__name__ == 'bool'`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x <= 1:
        return 1
    else:
        return x * my_function(x - 2)

print(my_function(4))`;
window["ans"+c] = `8`;
window["noans1"+c] = `1`;
window["noans2"+c] = `2`;
window["noans3"+c] = `4`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is the correct way to define a lambda function that takes two arguments, x and y, and returns True if x is equal to y, and False otherwise?
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x, y: x == y`;
// window["noans1"+c] = `lambda x, y: x != y`;
// window["noans2"+c] = `lambda x, y: x is y`;
// window["noans3"+c] = `lambda x, y: x is not y`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x < 1:
        return 1
    else:
        return x * my_function(x // 2)

print(my_function(8))`;
window["ans"+c] = `64`;
window["noans1"+c] = `1`;
window["noans2"+c] = `8`;
window["noans3"+c] = `16`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x == 0:
        return 0
    else:
        return x + my_function(x - 1)

print(my_function(5))`;
window["ans"+c] = `15`;
window["noans1"+c] = `10`;
window["noans2"+c] = `20`;
window["noans3"+c] = `25`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x == 1:
        return 1
    else:
        return x + my_function(x // 2)

print(my_function(6))`;
window["ans"+c] = `10`;
window["noans1"+c] = `1`;
window["noans2"+c] = `6`;
window["noans3"+c] = `9`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is the correct way to define a lambda function that takes a single argument, x, and returns True if x is a list, and False otherwise?
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x: isinstance(x, list)`;
// window["noans1"+c] = `lambda x: type(x) == list`;
// window["noans2"+c] = `lambda x: x.__class__ == list`;
// window["noans3"+c] = `lambda x: x.__class__.__name__ == 'list'`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x == 1:
        return 1
    else:
        return x * my_function(x - 1)

print(my_function(4))`;
window["ans"+c] = `24`;
window["noans1"+c] = `1`;
window["noans2"+c] = `2`;
window["noans3"+c] = `6`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is the correct way to define a lambda function that takes two arguments, x and y, and returns True if x is less than or equal to y, and False otherwise?  
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x, y: x <= y`;
// window["noans1"+c] = `lambda x, y: x < y`;
// window["noans2"+c] = `lambda x, y: x >= y`;
// window["noans3"+c] = `lambda x, y: x > y`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x <= 1:
        return 1
    else:
        return my_function(x - 1) + my_function(x - 2)

print(my_function(6))`;
window["ans"+c] = `13`;
window["noans1"+c] = `5`;
window["noans2"+c] = `10`;
window["noans3"+c] = `8`;

// c++;
// window["type"+c] = "4";
// window["des"+c] = `
// Which of the following is the correct way to define a lambda function that takes two arguments, x and y, and returns True if x is greater than or equal to y, and False otherwise?
// `;
// window["q"+c] =``;
// window["ans"+c] = `lambda x, y: x >= y`;
// window["noans1"+c] = `lambda x, y: x <= y`;
// window["noans2"+c] = `lambda x, y: x > y`;
// window["noans3"+c] = `lambda x, y: x < y`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x == 1:
        return 1
    elif x == 2:
        return 2
    else:
        return my_function(x - 1) + my_function(x - 2)

print(my_function(5))`;
window["ans"+c] = `8`;
window["noans1"+c] = `3`;
window["noans2"+c] = `5`;
window["noans3"+c] = `13`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x == 0:
        return 0
    else:
        return my_function(x - 1) + x

print(my_function(4))`;
window["ans"+c] = `10`;
window["noans1"+c] = `4`;
window["noans2"+c] = `12`;
window["noans3"+c] = `16`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x == 0:
        return 1
    else:
        return 2 * my_function(x - 1)

print(my_function(4))`;
window["ans"+c] = `16`;
window["noans1"+c] = `4`;
window["noans2"+c] = `12`;
window["noans3"+c] = `8`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x == 0:
        return 0
    else:
        return my_function(x // 2) + 1

print(my_function(10))`;
window["ans"+c] = `4`;
window["noans1"+c] = `2`;
window["noans2"+c] = `3`;
window["noans3"+c] = `5`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x == 0:
        return 1
    else:
        return x * my_function(x - 1)

print(my_function(4))`;
window["ans"+c] = `24`;
window["noans1"+c] = `4`;
window["noans2"+c] = `8`;
window["noans3"+c] = `12`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x == 0:
        return 1
    else:
        return my_function(x // 2) + my_function(x // 2)

print(my_function(10))`;
window["ans"+c] = `16`;
window["noans1"+c] = `2`;
window["noans2"+c] = `4`;
window["noans3"+c] = `5`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is the correct way to define a lambda function that takes two arguments, x and y, and returns the larger of the two?
`;
window["q"+c] =``;
window["ans"+c] = `lambda x, y: x if x > y else y`;
window["noans1"+c] = `lambda x, y: x if x < y else y`;
window["noans2"+c] = `lambda x, y: x > y`;
window["noans3"+c] = `lambda x, y: x < y`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x == 1:
        return 1
    else:
        return x + my_function(x - 1)

print(my_function(5))`;
window["ans"+c] = `15`;
window["noans1"+c] = `5`;
window["noans2"+c] = `10`;
window["noans3"+c] = `20`;

c++;
window["type"+c] = "4";
window["des"+c] = `
Which of the following is the correct way to define a lambda function that takes a single argument, x, and returns True if x is even, and False otherwise?
`;
window["q"+c] =``;
window["ans"+c] = `lambda x: x % 2 == 0`;
window["noans1"+c] = `lambda x: x % 2 == 1`;
window["noans2"+c] = `lambda x: x % 2`;
window["noans3"+c] = `lambda x: x // 2 == 0`;

c++;
window["type"+c] = "4";
window["des"+c] = `
What is the output of the following code snippet?
`;
window["q"+c] =`
def my_function(x):
    if x == 1:
        return 1
    else:
        return x * my_function(x - 1)

print(my_function(5))`;
window["ans"+c] = `120`;
window["noans1"+c] = `5`;
window["noans2"+c] = `10`;
window["noans3"+c] = `20`;

funTotal = c