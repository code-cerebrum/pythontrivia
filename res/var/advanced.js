f=0;

f++;
window["type"+f] = "4";
window["des"+f] = `Which keyword is used to define a generator function in Python?
`;
window["q"+f] =``;
window["ans"+f] = `yield`;
window["noans1"+f] = `return`;
window["noans2"+f] = `yield from`;
window["noans3"+f] = `generator`;

f++;
window["type"+f] = "4";
window["des"+f] = `
Which of the following is an iterator in Python?
`;
window["q"+f] =``;
window["ans"+f] = `all of the above`;
window["noans1"+f] = `list`;
window["noans2"+f] = `tuple`;
window["noans3"+f] = `dictionary`;

f++;
window["type"+f] = "4";
window["des"+f] = `
Which of the following is not a built-in function for creating iterators in Python?
`;
window["q"+f] =``;
window["ans"+f] = `list()`;
window["noans1"+f] = `iter()`;
window["noans2"+f] = `zip()`;
window["noans3"+f] = `enumerate()`;

f++;
window["type"+f] = "4";
window["des"+f] = `
Which of the following is not a built-in function for iterating over an iterable in Python?
`;
window["q"+f] =``;
window["ans"+f] = `yield`;
window["noans1"+f] = `for loop`;
window["noans2"+f] = `next()`;
window["noans3"+f] = `map()`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def count():
    i = 1
    while i <= 5:
        yield i
        i += 1

for num in count():
    print(num)`;
window["ans"+f] = `1 2 3 4 5`;
window["noans1"+f] = `[1, 2, 3, 4, 5]`;
window["noans2"+f] = `(1, 2, 3, 4, 5)`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def outer_func(x):
    def inner_func(y):
        return x + y
    return inner_func

add_five = outer_func(5)
print(add_five(3))`;
window["ans"+f] = `8`;
window["noans1"+f] = `5`;
window["noans2"+f] = `3`;
window["noans3"+f] = `None of the above`;

// f++;
// window["type"+f] = "4";
// window["des"+f] = `
// Which of the following is a valid way to define a decorator in Python?
// `;
// window["q"+f] =``;
// window["ans"+f] = `def my_decorator(func): return lambda: func()`;
// window["noans1"+f] = `def my_decorator(func): return func`;
// window["noans2"+f] = `def my_decorator(func): return func()`;
// window["noans3"+f] = `def my_decorator(func): func()`;

f++;
window["type"+f] = "4";
window["des"+f] = `
Which of the following is the correct syntax for defining a property in Python?
`;
window["q"+f] =``;
window["ans"+f] = `@property.setter`;
window["noans1"+f] = `@property`;
window["noans2"+f] = `@property()`;
window["noans3"+f] = `@property.setter()`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is a regular expression in Python?
`;
window["q"+f] =``;
window["ans"+f] = `A pattern that describes a set of strings.`;
window["noans1"+f] = `A function that returns a set of strings.`;
window["noans2"+f] = `A way to encode data in a string.`;
window["noans3"+f] = `A way to decode data in a string.`;

f++;
window["type"+f] = "4";
window["des"+f] = `
Which module in Python is used for working with regular expressions?
`;
window["q"+f] =``;
window["ans"+f] = `re`;
window["noans1"+f] = `regex`;
window["noans2"+f] = `reg`;
window["noans3"+f] = `regular`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the syntax for creating a regular expression object in Python?
`;
window["q"+f] =``;
window["ans"+f] = `re.compile(pattern)`;
window["noans1"+f] = `regex.compile(pattern)`;
window["noans2"+f] = `reg.compile(pattern)`;
window["noans3"+f] = `regular.compile(pattern)`;

f++;
window["type"+f] = "4";
window["des"+f] = `
Which of the following is a valid regular expression pattern in Python?
`;
window["q"+f] =``;
window["ans"+f] = `All of the above`;
window["noans1"+f] = `^[a-z]+$`;
window["noans2"+f] = `[a-z]+`;
window["noans3"+f] = `[A-Z][a-z]*`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d+'
text = 'There are 123 apples and 456 bananas.'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['123', '456']`;
window["noans1"+f] = `['There', 'are', 'apples', 'and', 'bananas']`;
window["noans2"+f] = `['a', 'p', 'p', 'l', 'e', 's', 'a', 'n', 'd', 'b', 'a', 'n', 'a', 'n', 'a', 's']`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w+) (\\w+)'
text = 'John Smith, 25 years old.'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `[('John', 'Smith'), ('25', 'years')]`;
window["noans1"+f] = `[('John', 'Smith', '25', 'years')]`;
window["noans2"+f] = `['John Smith', '25 years']`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w+)'
text = 'John Smith, John Johnson.'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['John', 'Smith', 'John', 'Johnson']`;
window["noans1"+f] = `['John']`;
window["noans2"+f] = `['Smith', 'Johnson']`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is a closure in Python?
`;
window["q"+f] =``;
window["ans"+f] = `A function that has access to a variable from a surrounding function's scope.`;
window["noans1"+f] = `A function that takes another function as an argument.`;
window["noans2"+f] = `A function that returns another function.`;
window["noans3"+f] = `A function that has access to a variable from a global scope.`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is a decorator in Python?
`;
window["q"+f] =``;
window["ans"+f] = `All of the above`;
window["noans1"+f] = `A function that takes another function as an argument.`;
window["noans2"+f] = `A function that returns another function.`;
window["noans3"+f] = `A way to add functionality to an existing function without modifying its code.`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the syntax for applying a decorator to a function in Python?
`;
window["q"+f] =``;
window["ans"+f] = `@decorator`;
window["noans1"+f] = `@decorator(function)`;
window["noans2"+f] = `decorator(function)`;
window["noans3"+f] = `decorator`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def uppercase(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

@uppercase
def say_hello(name):
    return f'Hello, {name}!'

print(say_hello('John'))`;
window["ans"+f] = `'HELLO, JOHN!'`;
window["noans1"+f] = `'Hello, John!'`;
window["noans2"+f] = `'Hello, JOHN!'`;
window["noans3"+f] = `'HELLO, John!'`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def memoize(func):
    memo = {}
    def wrapper(*args):
        if args in memo:
            return memo[args]
        result = func(*args)
        memo[args] = result
        return result
    return wrapper

@memoize
def fibonacci(n):
    if n == 0 or n == 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))`;
window["ans"+f] = `55`;
window["noans1"+f] = `45`;
window["noans2"+f] = `65`;
window["noans3"+f] = `75`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def make_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

c1 = make_counter()
c2 = make_counter()

print(c1())
print(c1())
print(c2())
print(c2())`;
window["ans"+f] = `1, 2, 1, 2`;
window["noans1"+f] = `1 2, 2, 3`;
window["noans2"+f] = `1, 1, 1, 1`;
window["noans3"+f] = `1, 1, 2, 2`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def make_adder(n):
    def adder(x):
        return n + x
    return adder

add5 = make_adder(5)
add10 = make_adder(10)

print(add5(3))
print(add10(3))`;
window["ans"+f] = `8, 13`;
window["noans1"+f] = `3, 3`;
window["noans2"+f] = `5, 10`;
window["noans3"+f] = `15, 20`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
class MyClass:
    def __init__(self):
        self._x = 0

    @property
    def x(self):
        return self._x

    @x.setter
    def x(self, value):
        if value < 0:
            self._x = 0
        elif value > 100:
            self._x = 100
        else:
            self._x = value

obj = MyClass()
obj.x = 50
print(obj.x)
obj.x = -10
print(obj.x)`;
window["ans"+f] = `50, 0`;
window["noans1"+f] = `50, 100`;
window["noans2"+f] = `0, 0`;
window["noans3"+f] = `0, 100`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import itertools

data = [1, 2, 3]
combinations = itertools.combinations(data, 2)

for combo in combinations:
    print(combo)`;
window["ans"+f] = `(1, 2), (1, 3), (2, 3)`;
window["noans1"+f] = `(1, 2, 3)`;
window["noans2"+f] = `(1,), (2,), (3,)`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import itertools

data = [1, 2, 3]
permutations = itertools.permutations(data, 2)

for perm in permutations:
    print(perm)`;
window["ans"+f] = `(1, 2), (1, 3), (2, 1), (2, 3), (3, 1), (3, 2)`;
window["noans1"+f] = `(1, 2, 3)`;
window["noans2"+f] = `(1,), (2,), (3,)`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for num in countdown(5):
    print(num)`;
window["ans"+f] = `5, 4, 3, 2, 1`;
window["noans1"+f] = `1, 2, 3, 4, 5`;
window["noans2"+f] = `1, 3, 5`;
window["noans3"+f] = `5, 3, 1`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def add(a, b):
    return a + b

data = [(1, 2), (3, 4), (5, 6)]

result = list(map(add, *data))
print(result)`;
window["ans"+f] = `TypeError`;
window["noans1"+f] = `[9, 12]`;
window["noans2"+f] = `[(1, 3, 5), (2, 4, 6)]`;
window["noans3"+f] = `[4, 7, 11]`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d+'
text = "There are 10 types of people: those who understand binary and those who don't."

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['10']`;
window["noans1"+f] = `['10', '2']`;
window["noans2"+f] = `['1', '0', '2']`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\d+$'
text1 = '123'
text2 = '12a3'

result1 = re.match(pattern, text1)
result2 = re.match(pattern, text2)

print(result1)
print(result2)`;
window["ans"+f] = `<re.Match object; span=(0, 3), match='123'>, None`;
window["noans1"+f] = `<re.Match object>, None`;
window["noans2"+f] = `<re.Match object at 0x...>, None`;
window["noans3"+f] = `<re.Match object at 0x...>, <re.Match object at 0x...>`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\d+$'
text1 = '123'
text2 = '12a3'

result1 = re.search(pattern, text1)
result2 = re.search(pattern, text2)

print(result1)
print(result2)`;
window["ans"+f] = `<re.Match object; span=(0, 3), match='123'>, None`;
window["noans1"+f] = `<re.Match object at 0x...>, <re.Match object at 0x...>`;
window["noans2"+f] = `<re.Match object>, <re.Match object>`;
window["noans3"+f] = `None, <re.Match object; span=(0, 3), match='123'>`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d+'
text = "There are 10 types of people: those who understand binary and those who don't."

result = re.sub(pattern, '42', text)
print(result)`;
window["ans"+f] = `'There are 42 types of people: those who understand binary and those who don't.'`;
window["noans1"+f] = `'There are 10 types of people: those who understand binary and those who don't.'`;
window["noans2"+f] = `'There are 42 types of people: those who understand binary and 42 who don't.'`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w+)-good'
text = 'good-good-good-good-bad'

result = re.sub(pattern, r'hello', text)
print(result)`;
window["ans"+f] = `'hello-hello-bad'`;
window["noans1"+f] = `'hello-bad'`;
window["noans2"+f] = `'good-hello-good-bad'`;
window["noans3"+f] = `'hello-hello-hello-hello-bad'`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def my_decorator(func):
    def wrapper():
        print('Before function is called.')
        func()
        print('After function is called.')
    return wrapper

@my_decorator
def my_function():
    print('Function is called.')

my_function()`;
window["ans"+f] = `Before function is called. Function is called. After function is called.`;
window["noans1"+f] = `Function is called. Before function is called. After function is called.`;
window["noans2"+f] = `Before function is called. After function is called. Function is called.`;
window["noans3"+f] = `Function is called.`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def my_decorator(func):
    def wrapper():
        print('Before function is called.')
        func()
        print('After function is called.')
    return wrapper

@my_decorator
def my_function():
    print('Function is called.')

print(my_function.__name__)`;
window["ans"+f] = `wrapper`;
window["noans1"+f] = `my_function`;
window["noans2"+f] = `Before function is called. Function is called. After function is called.`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `What is the output of the following code?`;
window["q"+f] =`
def my_decorator(func):
    def wrapper():
        print('Before function is called.')
        func()
        print('After function is called.')
    return wrapper

@my_decorator
def my_function():
    print('Function is called.')

print(my_function.__name__)`;
window["ans"+f] = `wrapper`;
window["noans1"+f] = `my_function`;
window["noans2"+f] = `Before function is called. Function is called. After function is called.`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print('Before function is called.')
        result = func(*args, **kwargs)
        print('After function is called.')
        return result
    return wrapper

@my_decorator
def my_function(a, b):
    return a + b

print(my_function(2, 3))`;
window["ans"+f] = `Before function is called. After function is called. 5`;
window["noans1"+f] = `5. Before function is called. After function is called.`;
window["noans2"+f] = `Before function is called. 5. After function is called.`;
window["noans3"+f] = `5`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
class MyClass:
    def __init__(self):
        self.__x = None

    @property
    def x(self):
        return self.__x

    @x.setter
    def x(self, value):
        self.__x = value

obj = MyClass()
obj.x = 42
print(obj.x)`;
window["ans"+f] = `42`;
window["noans1"+f] = `None`;
window["noans2"+f] = `AttributeError`;
window["noans3"+f] = `SyntaxError`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def my_generator():
    yield 1
    yield 2
    yield 3

for i in my_generator():
    print(i, end=' ')`;
window["ans"+f] = `1 2 3`;
window["noans1"+f] = `[1, 2, 3]`;
window["noans2"+f] = `(1, 2, 3)`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def my_iterator():
    yield 1
    yield 2
    yield 3

it = my_iterator()
print(next(it))
print(next(it))
print(next(it))`;
window["ans"+f] = `1 2 3`;
window["noans1"+f] = `[1, 2, 3]`;
window["noans2"+f] = `(1, 2, 3)`;
window["noans3"+f] = `StopIteration`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def my_closure(x):
    def inner(y):
        return x + y
    return inner

add_10 = my_closure(10)
print(add_10(5))`;
window["ans"+f] = `15`;
window["noans1"+f] = `10`;
window["noans2"+f] = `5`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def my_closure(x):
    def inner(y):
        return x + y
    return inner

add_10 = my_closure(10)
add_20 = my_closure(20)

print(add_10(5))
print(add_20(5))`;
window["ans"+f] = `15, 25`;
window["noans1"+f] = `10, 20`;
window["noans2"+f] = `5, 10`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d+'
text = 'abc123def456ghi789'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['123', '456', '789']`;
window["noans1"+f] = `[]`;
window["noans2"+f] = `['abc', 'def', 'ghi']`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\w+'
text = 'hello world'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['hello']`;
window["noans1"+f] = `['world']`;
window["noans2"+f] = `[]`;
window["noans3"+f] = `['hello', 'world']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w{4}'
text = 'hello world how are you today'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['hell', 'worl', 'toda']`;
window["noans1"+f] = `['how', 'you']`;
window["noans2"+f] = `[]`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w{4}'
text = 'hello world how are you today'

result = re.sub(pattern, '****', text)
print(result)`;
window["ans"+f] = `'****o ****d how are you ****y'`;
window["noans1"+f] = `'hello world how are you today'`;
window["noans2"+f] = `'hello **** how are you ****'`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d{3}-\\d{2}-\\d{4}'
text = 'My SSN is 123-45-6789.'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['123-45-6789']`;
window["noans1"+f] = `['My SSN is 123-45-6789.']`;
window["noans2"+f] = `[]`;
window["noans3"+f] = `['123456789']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\d{5}$'
text = '12345'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['12345']`;
window["noans1"+f] = `[]`;
window["noans2"+f] = `['12345`;
window["noans3"+f] = `['`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(?P<first>\\w+) (?P<last>\\w+)'
text = 'John Doe'

result = re.search(pattern, text)
print(result.group('first'))`;
window["ans"+f] = `John`;
window["noans1"+f] = `Doe`;
window["noans2"+f] = `John Doe`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(?P<first>\\w+) (?P<last>\\w+)'
text = 'John Doe'

result = re.search(pattern, text)
print(result.group('last'))`;
window["ans"+f] = `Doe`;
window["noans1"+f] = `John`;
window["noans2"+f] = `John Doe`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(?P<first>\\w+) (?P<last>\\w+)'
text = 'John Doe'

result = re.search(pattern, text)
print(result.group(1))`;
window["ans"+f] = `John`;
window["noans1"+f] = `Doe`;
window["noans2"+f] = `John Doe`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w+) (hello)'
text = 'hello hello world world'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `[('hello', 'hello')]`;
window["noans1"+f] = `[('hello', ''), ('world', '')]`;
window["noans2"+f] = `[('hello', 'world')]`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w+.)'
text = 'hello world world hello'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['hello ', 'world ', 'world ', 'hello']`;
window["noans1"+f] = `[('hello', 'world')]`;
window["noans2"+f] = `[]`;
window["noans3"+f] = `[('hello', 'hello'), ('world', 'world')]`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^(\\d{3})-(\\d{2})-(\\d{4})$'
text = '123-45-6789'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `[('123', '45', '6789')]`;
window["noans1"+f] = `['123-45-6789']`;
window["noans2"+f] = `[]`;
window["noans3"+f] = `['123456789']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\d{3})-(\\d{2})-(\\d{4})'
text = 'My SSN is 123-45-6789.'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `[('123', '45', '6789')]`;
window["noans1"+f] = `['123-45-6789']`;
window["noans2"+f] = `[]`;
window["noans3"+f] = `['123456789']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w{4}'
text = 'hello world how are you today'

result = re.finditer(pattern, text)

for match in result:
    print(match.group(), match.start())`;
window["ans"+f] = `hell 0, worl 6, toda 24`;
window["noans1"+f] = `how 6, you 14`;
window["noans2"+f] = `[]`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w{4}'
text = 'hello world how are you today'

result = re.finditer(pattern, text)

for match in result:
    print(match.group(), match.end())`;
window["ans"+f] = `hell 4 worl 10 toda 28`;
window["noans1"+f] = `how 9, you 17`;
window["noans2"+f] = `[]`;
window["noans3"+f] = `hello 5, world 11, today 25`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w{4}'
text = 'hello world how are you today'

result = re.finditer(pattern, text)

for match in result:
    print(match.group(), match.span())`;
window["ans"+f] = `hell (0, 4) worl (6, 10) toda (24, 28)`;
window["noans1"+f] = `how (6, 9), you (14, 17)`;
window["noans2"+f] = `[]`;
window["noans3"+f] = `hello (0, 5), world (6, 11), today (20, 25)`;
console.log(f)
f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w{4}'
text = 'hello world how are you today'

result = re.split(pattern, text)
print(result)`;
window["ans"+f] = `['', 'o ', 'd how are you ', 'y']`;
window["noans1"+f] = `['', ' ', ' ', ' are ', ' ', '']`;
window["noans2"+f] = `[]`;
window["noans3"+f] = `['hello world how', 'you', 'today']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d+'
text = 'Today is the 30th of March, 2023.'

result = re.sub(pattern, '', text)
print(result)`;
window["ans"+f] = `Today is the th of March, .`;
window["noans1"+f] = `Today is the of March, .`;
window["noans2"+f] = `Today is the 30th of March, .`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d+'
text = 'Today is the 30th of March, 2023.'

result = re.sub(pattern, '31', text)
print(result)`;
window["ans"+f] = `Today is the 31th of March, 31.`;
window["noans1"+f] = `Today is the 31th of March, 2023.`;
window["noans2"+f] = `Today is the 31th of March, .`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w+'
text = 'hello world'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['hello', 'world']`;
window["noans1"+f] = `[('hello',), ('world',)]`;
window["noans2"+f] = `[('hello', 'world')]`;
window["noans3"+f] = `None of the above`;
console.log(f)
f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w+'
text = 'hello world'

result = re.sub(pattern, r'Hi!', text)
print(result)`;
window["ans"+f] = `Hi! Hi!`;
window["noans1"+f] = `Hi! Hi`;
window["noans2"+f] = `hello Hi!`;
window["noans3"+f] = `Hi! World`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w+'
text = 'hello world'

result = re.sub(pattern, r'!', text)
print(result)`;
window["ans"+f] = `! !`;
window["noans1"+f] = `hello! world!`;
window["noans2"+f] = `hello world!`;
window["noans3"+f] = `hello!world!`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w+'
text = 'hello world'

result = re.sub(pattern, r'☺!☺', text)
print(result)`;
window["ans"+f] = `Hi!Hello Hi!Hello`;
window["noans1"+f] = `Hello!Hi!Hello!world`;
window["noans2"+f] = `hello!world!hello world!world`;
window["noans3"+f] = `hello!hello world!world`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w+)\\s(\\w+)'
text = 'hello world'

result = re.sub(pattern, r'world hello', text)
print(result)`;
window["ans"+f] = `world hello`;
window["noans1"+f] = `worldhello`;
window["noans2"+f] = `hello world`;
window["noans3"+f] = `world hello hello world`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'cat'
text = 'The cat is a domestic animal, but wild cats also exist.'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['cat', 'cat']`;
window["noans1"+f] = `['The cat is a']`;
window["noans2"+f] = `['cat', 'cats']`;
window["noans3"+f] = `['cat']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'cat(s)'
text = 'The cat is a domestic animal, but wild cats also exist.'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['s']`;
window["noans1"+f] = `['cat', 's', 'cats']`;
window["noans2"+f] = `['s', 's']`;
window["noans3"+f] = `['cat', 'cats']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w)(\\w)'
text = 'hello world'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `[('h', 'e'), ('l', 'l'), ('w', 'o'), ('r', 'l')]`;
window["noans1"+f] = `[('h', 'e'), ('w', 'o')]`;
window["noans2"+f] = `[('h', 'e'), ('l', 'l'), ('w', 'o')]`;
window["noans3"+f] = `[('h', 'e'), ('l', 'o')]`;

f++;
window["type"+f] = "4";
window["des"+f] = `What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w)(\\w)\\w'
text = 'hello world'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `[('h', 'e'), ('w', 'o')]`;
window["noans1"+f] = `[('he', 'l'), ('wo', 'r')]`;
window["noans2"+f] = `[('h', 'e'), ('w', 'o')]`;
window["noans3"+f] = `[('h', 'e'), ('l', 'o')]`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w+\\s+world'
text = 'hello hello world world'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['hello world']`;
window["noans1"+f] = `['hello world']`;
window["noans2"+f] = `['hello', 'world']`;
window["noans3"+f] = `['hello hello', 'world world']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\d{3})-(\\d{3})-(\\d{4})'
text = 'My phone number is 123-456-7890.'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `[('123', '456', '7890')]`;
window["noans1"+f] = `[('123-', '456-', '7890')]`;
window["noans2"+f] = `['123-456-7890']`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d'
text = 'My phone number is 123-456-7890.'

result = re.search(pattern, text)
print(result.group())`;
window["ans"+f] = `'1'`;
window["noans1"+f] = `'123'`;
window["noans2"+f] = `'1234567890'`;
window["noans3"+f] = `1234567`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w{3}'
text = 'hello world how are you today'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['hel', 'wor', 'how', 'are', 'you', 'tod']`;
window["noans1"+f] = `['how', 'are', 'you']`;
window["noans2"+f] = `['how', 'are']`;
window["noans3"+f] = `['how', 'you']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w+'
text = 'hello world'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['hello', 'world']`;
window["noans1"+f] = `[('hello',), ('world',)]`;
window["noans2"+f] = `[('h', 'e', 'l', 'l', 'o'), ('w', 'o', 'r', 'l', 'd')]`;
window["noans3"+f] = `[('hello',)]`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w+)(\\W+)'
text = 'hello! hello world! world'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `[('hello', '! '), ('hello', ' '), ('world', '! ')]`;
window["noans1"+f] = `[('hello', '! '), ('world', '!'), ('world', '')]`;
window["noans2"+f] = `[('hello', '!'), ('world', '!'), ('world', '')]`;
window["noans3"+f] = `[('hello', '! '), ('world', '! ')]`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'cat(s)'
text = 'The cat is a domestic animal, but wild cats also exist.'

result = re.sub(pattern, 'dogs', text)
print(result)`;
window["ans"+f] = `The dog is a domestic animal, but wild dogs also exist.`;
window["noans1"+f] = `The dog is a domestic animal, but wild dogs also existes.`;
window["noans2"+f] = `The dog is a domestic animal, but wild dogs also existss.`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w+)(\\W+)(\\w+)'
text = 'hello! world'

result = re.search(pattern, text)
print(result.groups())`;
window["ans"+f] = `('hello', '! ', 'world')`;
window["noans1"+f] = `('hello', 'world')`;
window["noans2"+f] = `('hello', '! ', '')`;
window["noans3"+f] = `('hello', '! ', 'hello')`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w+)(\\W+)(\\w+)'
text = 'hello! world'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `[('hello', '! ', 'world')]`;
window["noans1"+f] = `[('hello', '!', 'world')]`;
window["noans2"+f] = `[('hello', '! '), ('world', '')]`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w+)(\\W+)(\\w+)'
text = 'hello! world'

result = re.split(pattern, text)
print(result)`;
window["ans"+f] = `['', 'hello', '! ', 'world', '']`;
window["noans1"+f] = `['hello', '! ', 'world', '']`;
window["noans2"+f] = `['hello', '! ', 'world']`;
window["noans3"+f] = `['hello', '!', 'world', '']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w+)'
text = 'hello world'

result = re.sub(pattern, lambda x: x.group()[::-1], text)
print(result)`;
window["ans"+f] = `olleh dlrow`;
window["noans1"+f] = `hello world`;
window["noans2"+f] = `olohe dlrow`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w+'
text = 'hello world'

result = re.subn(pattern, lambda x: x.group()[::-1], text)
print(result)`;
window["ans"+f] = `('olleh dlrow', 2)`;
window["noans1"+f] = `('olleh world', 1)`;
window["noans2"+f] = `('hello world', 2)`;
window["noans3"+f] = `('hello world', 1)`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w+'
text = 'hello world'

result = re.subn(pattern, lambda x: x.group()[::-1], text, count=1)
print(result)`;
window["ans"+f] = `('olleh dlrow', 1)`;
window["noans1"+f] = `('olleh world', 1)`;
window["noans2"+f] = `('hello world', 2)`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(?P<first>\\w+)\\s(?P<last>\\w+)'
text = 'John Smith'

result = re.search(pattern, text)
print(result.groupdict())`;
window["ans"+f] = `{'first': 'John', 'last': 'Smith'}`;
window["noans1"+f] = `{'John': 'first', 'Smith': 'last'}`;
window["noans2"+f] = `{'first': 'Smith', 'last': 'John'}`;
window["noans3"+f] = `{'John': 'Smith'}`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(?P<first>\\w+)\\s(?P<last>\\w+)'
text = 'John Smith'

result = re.sub(pattern, '\\g<last>, \\g<first>', text)
print(result)`;
window["ans"+f] = `Smith, John`;
window["noans1"+f] = `John, Smith`;
window["noans2"+f] = `Smith,John`;
window["noans3"+f] = `Smith`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w+),\\s(\\w+)'
text = 'Smith, John'

result = re.sub(pattern, '\\g<2> \\g<1>', text)
print(result)`;
window["ans"+f] = `John Smith`;
window["noans1"+f] = `Smith, John`;
window["noans2"+f] = `Smith John`;
window["noans3"+f] = `John`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w+'
text = 'hello world'

result = re.findall(pattern, text, flags=re.IGNORECASE)
print(result)`;
window["ans"+f] = `['hello', 'world']`;
window["noans1"+f] = `['Hello', 'World']`;
window["noans2"+f] = `['hello', 'world', 'Hello', 'World']`;
window["noans3"+f] = `['hello', 'world', 'Hello']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\d{4}$'
text = '2022'

result = re.match(pattern, text)
print(result)`;
window["ans"+f] = `<re.Match object; span=(0, 4), match='2022'>`;
window["noans1"+f] = `<re.Match object; span=(0, 3), match='202'>`;
window["noans2"+f] = `<re.Match object; span=(0, 5), match=' 2022'>`;
window["noans3"+f] = `TypeError`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\d{4}$'
text = '2022 2023'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `[]`;
window["noans1"+f] = `['2022', '2023']`;
window["noans2"+f] = `['2022']`;
window["noans3"+f] = `['2023']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\d{4}$'
text = '2022'

result = re.findall(pattern, text)
print(result)`;
window["ans"+f] = `['2022']`;
window["noans1"+f] = `<re.Match object; span=(0, 4), match='2022'>`;
window["noans2"+f] = `[]`;
window["noans3"+f] = `ValueError`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w+'
text = 'hello world'

result = re.finditer(pattern, text)

for match in result:
    print(match.group())`;
window["ans"+f] = `hello world`;
window["noans1"+f] = `hello`;
window["noans2"+f] = `hello, world`;
window["noans3"+f] = `hello and world`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\d{2}\\s\\w{3}\\s\\d{4}$'
text = '30 Oct 2022'

result = re.search(pattern, text)

if result:
    print('Match found:', result.group())
else:
    print('Match not found')`;
window["ans"+f] = `Match found: 30 Oct 2022`;
window["noans1"+f] = `Match found: 30-Oct-2022`;
window["noans2"+f] = `Match found: 30_Oct_2022`;
window["noans3"+f] = `Match not found`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\d{2}\\s\\w{3}\\s\\d{4}$'
text = '30-10-2022'

result = re.search(pattern, text)

if result:
    print('Match found:', result.group())
else:
    print('Match not found')`;
window["ans"+f] = `Match not found`;
window["noans1"+f] = `Match found: 30 Oct 2022`;
window["noans2"+f] = `Match found: 30-10-2022`;
window["noans3"+f] = `Match found: 30102022`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\d{2}\\s\\w{3}\\s\\d{4}$'
text = '30 October 2022'

result = re.search(pattern, text)

if result:
    print('Match found:', result.group())
else:
    print('Match not found')`;
window["ans"+f] = `Match not found`;
window["noans1"+f] = `Match found: 30 Oct 2022`;
window["noans2"+f] = `Match found: 30_Oct_2022`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d+'
text = 'hello123world456'

result = re.findall(pattern, text)

print(result)`;
window["ans"+f] = `[123, 456]`;
window["noans1"+f] = `[1, 2, 3, 4, 5, 6]`;
window["noans2"+f] = `['hello', 'world']`;
window["noans3"+f] = `['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'[a-z]+'
text = 'Hello World!'

result = re.findall(pattern, text)

print(result)`;
window["ans"+f] = `['ello', 'orld']`;
window["noans1"+f] = `['Hello', 'World']`;
window["noans2"+f] = `['H', 'W']`;
window["noans3"+f] = `['Hello', 'World', '']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d+'
text = '123abc456def789'

result = re.split(pattern, text)

print(result)`;
window["ans"+f] = `['', 'abc', 'def', '']`;
window["noans1"+f] = `['123', '456', '789']`;
window["noans2"+f] = `['1', '2', '3', 'abc', '4', '5', '6', 'def', '7', '8', '9']`;
window["noans3"+f] = `['123abc456def789']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\w+@\\w+\\.\\w{2,3}$'
text = 'hello.world.gmail.com'

result = re.match(pattern, text)

if result:
    print('Match found:', result.group())
else:
    print('Match not found')`;
window["ans"+f] = `Match not found`;
window["noans1"+f] = `Match found: hello.world.gmail.com`;
window["noans2"+f] = `Match found: hello.world`;
window["noans3"+f] = `Match found: None`;

f++;
window["type"+f] = "4";
window["des"+f] = `What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w{4}'
text = 'Python is a powerful programming language.'

result = re.findall(pattern, text)

print(result)`;
window["ans"+f] = `['Pyth', 'powe', 'rful', 'prog', 'ramm', 'lang', 'uage']`;
window["noans1"+f] = `['Python', 'is', 'powerful', 'programming', 'language']`;
window["noans2"+f] = `['is', 'a']`;
window["noans3"+f] = `['is', 'a', 'language']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w{3,}'
text = 'Python is a powerful programming language.'

result = re.findall(pattern, text)

print(result)`;
window["ans"+f] = `['Python', 'powerful', 'programming', 'language']`;
window["noans1"+f] = `['is', 'the']`;
window["noans2"+f] = `['is', 'pow', 'pro', 'lan']`;
window["noans3"+f] = `['is', 'a']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\d{3}-\\d{2}-\\d{4}$'
text = '123-45-6789'

result = re.match(pattern, text)

if result:
    print('Match found:', result.group())
else:
    print('Match not found')`;
window["ans"+f] = `Match found: 123-45-6789`;
window["noans1"+f] = `Match found: 123456789`;
window["noans2"+f] = `Match not found`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\d{3}-\\d{2}-\\d{4}$'
text = '123-456-7890'

result = re.match(pattern, text)

if result:
    print('Match found:', result.group())
else:
    print('Match not found')`;
window["ans"+f] = `Match not found`;
window["noans1"+f] = `Match found: 123-456-7890`;
window["noans2"+f] = `Match found: 1234567890`;
window["noans3"+f] = `Match found: None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\d{3}-\\d{2}-\\d{4}$'
text = '123-45-6789 is my SSN'

result = re.search(pattern, text)

if result:
    print('Match found:', result.group())
else:
    print('Match not found')`;
window["ans"+f] = `Match not found`;
window["noans1"+f] = `Match found: 123456789`;
window["noans2"+f] = `Match found: 123-45-6789`;
window["noans3"+f] = `Match found: is my SSN`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'^\\d{3}-\\d{2}-\\d{4}$'
text = 'My SSN is 234-56-7890 and my phone number is 123-456-7890'

result = re.findall(pattern, text)

print(result)`;
window["ans"+f] = `[]`;
window["noans1"+f] = `['234567890', '1234567890']`;
window["noans2"+f] = `['234-56-7890', '123-456-7890']`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d+'
text = 'My SSN is 234-56-7890 and my phone number is 123-456-7890'

result = re.findall(pattern, text)

print(result)`;
window["ans"+f] = `['234', '56', '7890', '123', '456', '7890']`;
window["noans1"+f] = `['234-56-7890', '123-456-7890']`;
window["noans2"+f] = `['SSN', 'and', 'phone', 'number', 'is']`;
window["noans3"+f] = `['234', '56', '7890', '123']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d+'
text = 'My SSN is 234-56-7890 and my phone number is 123-456-7890'

result = re.split(pattern, text)

print(result)`;
window["ans"+f] = `['My SSN is ', '-', '-', ' and my phone number is ', '-', '-', '']`;
window["noans1"+f] = `['My SSN is', '234', '56', '7890', 'and', 'my', 'phone', 'number', 'is', '123', '456', '7890']`;
window["noans2"+f] = `['My SSN is 234-56-7890 and my phone number is 123-456-7890']`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d+'
text = 'My SSN is 234-56-7890 and my phone number is 123-456-7890'

result = re.sub(pattern, 'X', text)

print(result)`;
window["ans"+f] = `'My SSN is X-X-X and my phone number is X-X-X'`;
window["noans1"+f] = `'My SSN is XXX-XX-XXXX and my phone number is XXX-XXX-XXXX'`;
window["noans2"+f] = `'My SSN is 234-56-7890 and my phone number is 123-456-7890'`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d+'
text = 'My SSN is 234-56-7890 and my phone number is 123-456-7890'

result = re.sub(pattern, 'X', text, 2)

print(result)`;
window["ans"+f] = `'My SSN is X-X-7890 and my phone number is 123-456-7890'`;
window["noans1"+f] = `'My SSN is XXX-XX-7890 and my phone number is 123-456-7890'`;
window["noans2"+f] = `'My SSN is XXX-XX-XXXX and my phone number is 123-456-7890'`;
window["noans3"+f] = `'My SSN is and my phone number is '`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\w{5}'
text = 'The quick brown fox jumps over the lazy dog'

result = re.findall(pattern, text)

print(result)`;
window["ans"+f] = `['quick', 'brown', 'jumps']`;
window["noans1"+f] = `['quick', 'brown']`;
window["noans2"+f] = `['quick', 'brown', 'jumps', 'lazy']`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(\\w)'
text = 'bookkeeper'

result = re.findall(pattern, text)

print(result)`;
window["ans"+f] = `['b', 'o', 'o', 'k', 'k', 'e', 'e', 'p', 'e', 'r']`;
window["noans1"+f] = `['bb', 'kk']`;
window["noans2"+f] = `['book', 'keeper']`;
window["noans3"+f] = `['oo', 'ee']`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(?<=\\d)(?=(\\d\\d\\d))'
text = '1000000 10000000 100000000'

result = re.sub(pattern, ',', text)

print(result)`;
window["ans"+f] = `'1,0,0,0,000 1,0,0,0,0,000 1,0,0,0,0,0,000'`;
window["noans1"+f] = `'1,000000 10,000000 100,000000'`;
window["noans2"+f] = `'1000000, 10000000, 100000000'`;
window["noans3"+f] = `1,000,000 10,000,000 100,000,000`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(?P<year>\\d{4})-(?P<month>\\d{2})-(?P<day>\\d{2})'
text = 'Today is 2022-04-01'

result = re.search(pattern, text)

print(result.group('year'))`;
window["ans"+f] = `'2022'`;
window["noans1"+f] = `'04'`;
window["noans2"+f] = `'01'`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d+'
text = 'My SSN is 234-56-7890 and my phone number is 123-456-7890'

result = re.search(pattern, text)

print(result.span())`;
window["ans"+f] = `(10, 13)`;
window["noans1"+f] = `(11, 13)`;
window["noans2"+f] = `(23, 25)`;
window["noans3"+f] = `(12, 15)`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'\\d+'
text = 'My SSN is 234-56-7890 and my phone number is 123-456-7890'

result = re.search(pattern, text)

print(result.group())`;
window["ans"+f] = `'234'`;
window["noans1"+f] = `'56'`;
window["noans2"+f] = `'7890'`;
window["noans3"+f] = `TypeError`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

pattern = r'(?P<year>\\d{4})-(?P<month>\\d{2})-(?P<day>\\d{2})'
text = 'Today is 2022-04-01'

result = re.search(pattern, text)

print(result.groupdict())`;
window["ans"+f] = `{'year': '2022', 'month': '04', 'day': '01'}`;
window["noans1"+f] = `{'Today': '2022', 'is': '04', '01': None}`;
window["noans2"+f] = `{'2022': '04', '01': None}`;
window["noans3"+f] = `{'year': '', 'month': '', 'day': ''}`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
class MyClass:
    def __init__(self, x):
        self.__x = x

    @property
    def x(self):
        return self.__x

    @x.setter
    def x(self, value):
        if value < 0:
            raise ValueError('Value cannot be negative')
        self.__x = value

obj = MyClass(5)
obj.x = -10
print(obj.x)`;
window["ans"+f] = `ValueError: Value cannot be negative`;
window["noans1"+f] = `5`;
window["noans2"+f] = `10`;
window["noans3"+f] = `-5`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return 'Name: {}, Age: {}'.format(self.name, self.age)

class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade

    def __str__(self):
        return 'Name: {}, Age: {}, Grade: {}'.format(self.name, self.age, self.grade)

s = Student('John', 18, 'A')
print(s)`;
window["ans"+f] = `'Name: John, Age: 18, Grade: A'`;
window["noans1"+f] = `'Name: John, Age: 18'`;
window["noans2"+f] = `'Name: John, Grade: A'`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
class A:
    def __init__(self, x):
        self.x = x

class B(A):
    def __init__(self, x, y):
        super().__init__(x)
        self.y = y

a = A(5)
b = B(10, 20)

print(a.x)
print(b.x)
print(b.y)`;
window["ans"+f] = `5, 10, 20`;
window["noans1"+f] = `5, 20, 10`;
window["noans2"+f] = `10, 20, 5`;
window["noans3"+f] = `SyntaxError`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def func(a, b=10, c=20):
    print(a, b, c)

func(1)
func(1, 2)
func(1, c=30)`;
window["ans"+f] = `1, 10, 20; 1, 2, 20; 1, 10, 30`;
window["noans1"+f] = `1, 10, 20; 1, 2, 20; 1, 30, 20`;
window["noans2"+f] = `1, 2, 30; 1, 2, 20; 1, 30, 20`;
window["noans3"+f] = `SyntaxError`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def func(a, b, *args):
    print(a, b, args)

func(1, 2, 3, 4, 5)`;
window["ans"+f] = `1, 2, (3, 4, 5)`;
window["noans1"+f] = `1, 2, [3, 4, 5]`;
window["noans2"+f] = `1, 2, {3, 4, 5}`;
window["noans3"+f] = `SyntaxError`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def func(a, b, *args, **kwargs):
    print(a, b, args, kwargs)

func(1, 2, 3, 4, 5, x=6, y=7, z=8)`;
window["ans"+f] = `1, 2, (3, 4, 5), {'x': 6, 'y': 7, 'z': 8}`;
window["noans1"+f] = `1, 2, [3, 4, 5], {'x': 6, 'y': 7, 'z': 8}`;
window["noans2"+f] = `1, 2, {3, 4, 5}, {'x': 6, 'y': 7, 'z': 8}`;
window["noans3"+f] = `SyntaxError`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def outer():
    x = 1
    def inner():
        x = 2
        print(x)
    inner()
    print(x)

outer()`;
window["ans"+f] = `2, 1`;
window["noans1"+f] = `1, 2`;
window["noans2"+f] = `2, 2`;
window["noans3"+f] = `1, 1`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def outer():
    x = 1
    def inner():
        nonlocal x
        x = 2
        print(x)
    inner()
    print(x)

outer()`;
window["ans"+f] = `2, 2`;
window["noans1"+f] = `1, 2`;
window["noans2"+f] = `2, 1`;
window["noans3"+f] = `1, 1`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def outer():
    x = 1
    def inner():
        nonlocal x
        x += 1
        print(x)
    inner()
    print(x)

outer()`;
window["ans"+f] = `2, 2`;
window["noans1"+f] = `1, 2`;
window["noans2"+f] = `2, 1`;
window["noans3"+f] = `1, 1`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def outer():
    x = 1
    def inner():
        global x
        x = 2
        print(x)
    inner()
    print(x)

outer()
print(x)`;
window["ans"+f] = `2, 1, 2`;
window["noans1"+f] = `1, 2, 2`;
window["noans2"+f] = `2, 2, 2`;
window["noans3"+f] = `SyntaxError`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def add(x, y):
    return x + y

result = add(2, 3)
print(result)`;
window["ans"+f] = `5`;
window["noans1"+f] = `add`;
window["noans2"+f] = `(2, 3)`;
window["noans3"+f] = `None of the above`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def func():
    print('Hello, world!')

result = func()
print(result)`;
window["ans"+f] = `'Hello, world!', None`;
window["noans1"+f] = `'Hello, world!', func`;
window["noans2"+f] = `None, 'Hello, world!'`;
window["noans3"+f] = `None, None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def outer():
    def inner():
        print('Hello, world!')
    return inner

result = outer()
result()`;
window["ans"+f] = `'Hello, world!'`;
window["noans1"+f] = `outer`;
window["noans2"+f] = `inner`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
numbers = [1, 2, 3, 4, 5]
squares = map(lambda x: x ** 2, numbers)
print(squares)`;
window["ans"+f] = `<map object at 0x7f97b15c3e50>`;
window["noans1"+f] = `[1, 4, 9, 16, 25]`;
window["noans2"+f] = `[2, 4, 6, 8, 10]`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
numbers = [1, 2, 3, 4, 5]
squares = map(lambda x: x ** 2, numbers)
print(list(squares))`;
window["ans"+f] = `[1, 4, 9, 16, 25]`;
window["noans1"+f] = `<map object at 0x7f97b15c3e50>`;
window["noans2"+f] = `[2, 4, 6, 8, 10]`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
numbers = [1, 2, 3, 4, 5]
squares = [x ** 2 for x in numbers]
print(squares)`;
window["ans"+f] = `[1, 4, 9, 16, 25]`;
window["noans1"+f] = `<map object at 0x7f97b15c3e50>`;
window["noans2"+f] = `[2, 4, 6, 8, 10]`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
numbers = [1, 2, 3, 4, 5]
squares = (x ** 2 for x in numbers)
print(squares)`;
window["ans"+f] = `<generator object <genexpr> at 0x7f97b15c3e50>`;
window["noans1"+f] = `[1, 4, 9, 16, 25]`;
window["noans2"+f] = `[2, 4, 6, 8, 10]`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
numbers = [1, 2, 3, 4, 5]
squares = (x ** 2 for x in numbers)
print(list(squares))`;
window["ans"+f] = `[1, 4, 9, 16, 25]`;
window["noans1"+f] = `<generator object <genexpr> at 0x7f97b15c3e50>`;
window["noans2"+f] = `[2, 4, 6, 8, 10]`;
window["noans3"+f] = `None`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the purpose of the yield keyword in Python?
`;
window["q"+f] =``;
window["ans"+f] = `It generates a sequence of values to be returned by a function.`;
window["noans1"+f] = `It returns a value from a function.`;
window["noans2"+f] = `It defines a new variable.`;
window["noans3"+f] = `It creates a new instance of a class.`;

f++;
window["type"+f] = "4";
window["des"+f] = `
Which of the following is not a built-in Python decorator?
`;
window["q"+f] =``;
window["ans"+f] = `@final`;
window["noans1"+f] = `@staticmethod`;
window["noans2"+f] = `@property`;
window["noans3"+f] = `@abstractmethod`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

text = "The quick brown fox jumps over the lazy dog"
pattern = r"\\w{5}"
matches = re.findall(pattern, text)
print(matches)`;
window["ans"+f] = `["quick", "brown", "jumps"]`;
window["noans1"+f] = `["quick", "brown", "fox", "jumps", "over", "lazy"]`;
window["noans2"+f] = `["quick", "brown", "fox", "jumps", "over", "lazy", "dog"]`;
window["noans3"+f] = `["quick", "brown", "jumps", "lazy"]`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
import re

text = "The quick brown fox jumps over the lazy dog"
pattern = r"\\w{4}"
matches = re.findall(pattern, text)
print(matches)`;
window["ans"+f] = `["quic", "brow", "jump", "over", "lazy"]`;
window["noans1"+f] = `["quick", "brown", "jumps", "over", "lazy"]`;
window["noans2"+f] = `["quick", "brown", "fox", "jumps", "over", "lazy", "dog"]`;
window["noans3"+f] = `["quick", "brown", "jumps", "lazy"]`;

f++;
window["type"+f] = "4";
window["des"+f] = `
Which of the following is not a built-in Python generator function?
`;
window["q"+f] =``;
window["ans"+f] = `map`;
window["noans1"+f] = `range`;
window["noans2"+f] = `enumerate`;
window["noans3"+f] = `zip`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

f = fibonacci()
for i in range(10):
    print(next(f), end=", ")`;
window["ans"+f] = `0, 1, 1, 2, 3, 5, 8, 13, 21, 34`;
window["noans1"+f] = `1, 2, 3, 4, 5, 6, 7, 8, 9, 10`;
window["noans2"+f] = `1, 1, 2, 3, 5, 8, 13, 21, 34, 55`;
window["noans3"+f] = `0, 1, 2, 3, 4, 5, 6, 7, 8, 9`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def add_numbers(a, b):
    return a + b

result = add_numbers(3, 5)
print(result)`;
window["ans"+f] = `8`;
window["noans1"+f] = `3 + 5`;
window["noans2"+f] = `"8"`;
window["noans3"+f] = `TypeError`;

f++;
window["type"+f] = "4";
window["des"+f] = `
What is the output of the following code?`;
window["q"+f] =`
def multiply_by(factor):
    def multiply(number):
        return number * factor
    return multiply

double = multiply_by(2)
triple = multiply_by(3)
print(double(5), triple(5))`;
window["ans"+f] = `10, 15`;
window["noans1"+f] = `15, 10`;
window["noans2"+f] = `25, 15`;
window["noans3"+f] = `10, 25`;

advTotal = f;