e=0;

e++;
window["type"+e] = "4";
window["des"+e] = `What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print(self.a)

class B(A):
    def __init__(self, a, b):
        A.__init__(self, a)
        self.b = b

    def display(self):
        print(self.a, self.b)

obj = B(10, 20)
obj.display()`;
window["ans"+e] = `10 20`;
window["noans1"+e] = `10`;
window["noans2"+e] = `20`;
window["noans3"+e] = `None`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self):
        self.a = 1

    def display(self):
        print(self.a)

class B(A):
    def __init__(self):
        self.b = 2

    def display(self):
        print(self.b)

obj = B()
obj.display()`;
window["ans"+e] = `2`;
window["noans1"+e] = `1`;
window["noans2"+e] = `Error`;
window["noans3"+e] = `None`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

obj = B(10, 20)
print(obj.a)`;
window["ans"+e] = `10`;
window["noans1"+e] = `20`;
window["noans2"+e] = `Error`;
window["noans3"+e] = `30`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

obj = B(10, 20)
print(obj.b)`;
window["ans"+e] = `20`;
window["noans1"+e] = `10`;
window["noans2"+e] = `Error`;
window["noans3"+e] = `30`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __add__(self, other):
        return self.a + other.a

obj1 = A(10)
obj2 = A(20)
print(obj1 + obj2)`;
window["ans"+e] = `30`;
window["noans1"+e] = `10`;
window["noans2"+e] = `20`;
window["noans3"+e] = `40`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __lt__(self, other):
        if(self.a<other.a):
            return True
        else:
            return False

obj1 = A(10)
obj2 = A(20)
if(obj1<obj2):
    print("obj1 is less than obj2")
else:
    print("obj1 is greater than or equal to obj2")`;
window["ans"+e] = `obj1 is less than obj2`;
window["noans1"+e] = `obj1 is greater than or equal to obj2`;
window["noans2"+e] = `Error`;
window["noans3"+e] = `None`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        A.__init__(self, a)
        self.b = b

    def display(self):
        print(self.a, self.b)

obj = B(10, 20)
obj.display()`;
window["ans"+e] = `10 20`;
window["noans1"+e] = `10`;
window["noans2"+e] = `20`;
window["noans3"+e] = `1020`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        A.__init__(self, a)
        self.b = b

    def display(self):
        print(self.a, self.b)

obj1 = A(10)
obj2 = B(20, 30)
obj1.display()
obj2.display()`;
window["ans"+e] = `AttributeError`;
window["noans1"+e] = `10, 20`;
window["noans2"+e] = `20, 30`;
window["noans3"+e] = `10, 30`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __str__(self):
        return str(self.a)

obj = A(10)
print(obj)`;
window["ans"+e] = `10`;
window["noans1"+e] = `A object`;
window["noans2"+e] = `Error`;
window["noans3"+e] = `None`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __str__(self):
        return str(self.a)

obj1 = A(10)
obj2 = A(20)
print(obj1, obj2)`;
window["ans"+e] = `10 20`;
window["noans1"+e] = `A object, A object`;
window["noans2"+e] = `Error`;
window["noans3"+e] = `None`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __str__(self):
        return str(self.a)

    def __add__(self, other):
        return self.a + other.a

obj1 = A(10)
obj2 = A(20)
print(obj1 + obj2)`;
window["ans"+e] = `30`;
window["noans1"+e] = `A object`;
window["noans2"+e] = `10`;
window["noans3"+e] = `20`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __str__(self):
        return str(self.a)

    def __lt__(self, other):
        if(self.a<other.a):
            return True
        else:
            return False

obj1 = A(10)
obj2 = A(20)
if(obj1<obj2):
    print("obj1 is less than obj2")
else:
    print("obj1 is greater than or equal to obj2")`;
window["ans"+e] = `obj1 is less than obj2`;
window["noans1"+e] = `obj1 is greater than or equal to obj2`;
window["noans2"+e] = `Error`;
window["noans3"+e] = `None`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __str__(self):
        return str(self.a)

class B:
    def __init__(self, b):
        self.b = b

    def __str__(self):
        return str(self.b)

    def __add__(self, other):
        return self.b + other.b

obj1 = A(10)
obj2 = B(20)
print(obj1 + obj2)`;
window["ans"+e] = `TypeError`;
window["noans1"+e] = `30`;
window["noans2"+e] = `10`;
window["noans3"+e] = `20`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __str__(self):
        return str(self.a)

class B(A):
    def __init__(self, a, b):
        A.__init__(self, a)
        self.b = b

    def __str__(self):
        return A.__str__(self) + ' ' + str(self.b)

obj = B(10, 20)
print(obj)`;
window["ans"+e] = `10 20`;
window["noans1"+e] = `B object`;
window["noans2"+e] = `10`;
window["noans3"+e] = `20`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __str__(self):
        return str(self.a)

class B(A):
    def __init__(self, a, b):
        A.__init__(self, a)
        self.b = b

    def __str__(self):
        return A.__str__(self) + ' ' + str(self.b)

class C(B):
    def __init__(self, a, b, c):
        B.__init__(self, a, b)
        self.c = c

    def __str__(self):
        return B.__str__(self) + ' ' + str(self.c)

obj = C(10, 20, 30)
print(obj)`;
window["ans"+e] = `10 20 30`;
window["noans1"+e] = `C object`;
window["noans2"+e] = `10`;
window["noans3"+e] = `20`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print(self.a)

class B(A):
    def __init__(self, a, b):
        A.__init__(self, a)
        self.b = b

    def display(self):
        print(self.a, self.b)

obj1 = A(10)
obj2 = B(20, 30)
obj1.display()
obj2.display()`;
window["ans"+e] = `10, 20 30`;
window["noans1"+e] = `20, 30`;
window["noans2"+e] = `Error`;
window["noans3"+e] = `None`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print(self.a)

class B(A):
    def __init__(self, a, b):
        A.__init__(self, a)
        self.b = b

    def display(self):
        print(self.a, self.b)

def show(obj):
    obj.display()

obj1 = A(10)
obj2 = B(20, 30)
show(obj1)
show(obj2)`;
window["ans"+e] = `10, 20 30`;
window["noans1"+e] = `20, 30`;
window["noans2"+e] = `Error`;
window["noans3"+e] = `None`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __lt__(self, other):
        return self.a < other.a

class B:
    def __init__(self, b):
        self.b = b

    def __lt__(self, other):
        return self.b < other.b

obj1 = A(10)
obj2 = A(20)
obj3 = B(10)
obj4 = B(20)

print(obj1 < obj2)
print(obj3 < obj4)`;
window["ans"+e] = `True True`;
window["noans1"+e] = `True False`;
window["noans2"+e] = `False True`;
window["noans3"+e] = `False False`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __lt__(self, other):
        return self.a < other.a

class B(A):
    def __init__(self, a, b):
        A.__init__(self, a)
        self.b = b

    def __lt__(self, other):
        return self.b < other.b

obj1 = A(10)
obj2 = A(20)
obj3 = B(10, 30)
obj4 = B(20, 20)

print(obj1 < obj2)
print(obj3 < obj4)`;
window["ans"+e] = `True False`;
window["noans1"+e] = `True True`;
window["noans2"+e] = `False True`;
window["noans3"+e] = `False False`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

obj = B(10, 20)
print(obj.a, obj.b)`;
window["ans"+e] = `10 20`;
window["noans1"+e] = `10`;
window["noans2"+e] = `20`;
window["noans3"+e] = `1020`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

obj = C(10, 20, 30)
print(obj.a, obj.b, obj.c)`;
window["ans"+e] = `10 20 30`;
window["noans1"+e] = `[10, 20, 30]`;
window["noans2"+e] = `102030`;
window["noans3"+e] = `Error`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

obj = C(10, 20, 30)
print(isinstance(obj, A))
print(isinstance(obj, B))
print(isinstance(obj, C))`;
window["ans"+e] = `True True True`;
window["noans1"+e] = `True False True`;
window["noans2"+e] = `False False True`;
window["noans3"+e] = `False False False`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def __str__(self):
        return str(self.a) + " " + str(self.b) + " " + str(self.c)

obj = C(10, 20, 30)
print(obj)`;
window["ans"+e] = `"10 20 30"`;
window["noans1"+e] = `102030`;
window["noans2"+e] = `[10, 20, 30]`;
window["noans3"+e] = `{10, 20, 30}`;

e++;
window["type"+e] = "4";
window["des"+e] = `What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def __repr__(self):
        return str(self.a) + " " + str(self.b) + " " + str(self.c)

obj = C(5, 7, 9)
print(obj)`;
window["ans"+e] = `5 7 9`;
window["noans1"+e] = `[5, 7, 9]`;
window["noans2"+e] = `{5, 7, 9}`;
window["noans3"+e] = `"579"`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

obj1 = A(10)
obj2 = B(10, 20)
obj3 = C(10, 20, 30)

print(isinstance(obj1, A))
print(isinstance(obj1, B))
print(isinstance(obj1, C))

print(isinstance(obj2, A))
print(isinstance(obj2, B))
print(isinstance(obj2, C))

print(isinstance(obj3, A))
print(isinstance(obj3, B))
print(isinstance(obj3, C))`;
window["ans"+e] = `True False False True True False True True True`;
window["noans1"+e] = `True True False True True True False False True`;
window["noans2"+e] = `True False False True True True False False True`;
window["noans3"+e] = `True False False True True True True True True`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print("A")

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

    def display(self):
        print("B")

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def display(self):
        print("C")

def fun(obj):
    obj.display()

obj1 = A(10)
obj2 = B(10, 20)
obj3 = C(10, 20, 30)

fun(obj1)
fun(obj2)
fun(obj3)`;
window["ans"+e] = `A B C`;
window["noans1"+e] = `A A A`;
window["noans2"+e] = `B B C`;
window["noans3"+e] = `A B B`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print("A")

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

    def display(self):
        print("B")

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def display(self):
        print("C")

def fun(obj):
    obj.display()

obj1 = A(10)
obj2 = B(10, 20)
obj3 = C(10, 20, 30)

for obj in [obj1, obj2, obj3]:
    fun(obj)`;
window["ans"+e] = `A B C`;
window["noans1"+e] = `A A A`;
window["noans2"+e] = `B B C`;
window["noans3"+e] = `A B B`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print("A")

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

    def display(self):
        print("B")

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def display(self):
        print("C")

obj = C(10, 20, 30)

print(isinstance(obj, A))
print(isinstance(obj, B))
print(isinstance(obj, C))`;
window["ans"+e] = `True True True`;
window["noans1"+e] = `True True False`;
window["noans2"+e] = `True False True`;
window["noans3"+e] = `False False True`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print("A")

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

    def display(self):
        print("B")

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def display(self):
        print("C")

def fun(obj):
    obj.display()

obj1 = A(10)
obj2 = B(10, 20)
obj3 = C(10, 20, 30)

for obj in [obj1, obj2, obj3]:
    fun(obj)`;
window["ans"+e] = `A B C`;
window["noans1"+e] = `A A A`;
window["noans2"+e] = `B B C`;
window["noans3"+e] = `A B B`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print("A")

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

    def display(self):
        print("B")

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def display(self):
        print("C")

obj = C(10, 20, 30)

print(isinstance(obj, A))
print(isinstance(obj, B))
print(isinstance(obj, C))`;
window["ans"+e] = `True True True`;
window["noans1"+e] = `True True False`;
window["noans2"+e] = `True False True`;
window["noans3"+e] = `False False True`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print("A")

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

    def display(self):
        print("B")

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def display(self):
        print("C")

obj1 = A(10)
obj2 = B(10, 20)
obj3 = C(10, 20, 30)

obj1.display()
obj2.display()
obj3.display()`;
window["ans"+e] = `A B C`;
window["noans1"+e] = `A A A`;
window["noans2"+e] = `B B C`;
window["noans3"+e] = `A B B`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print("A")

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

    def display(self):
        print("B")

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def display(self):
        print("C")

obj1 = A(10)
obj2 = B(10, 20)
obj3 = C(10, 20, 30)

print(isinstance(obj1, C))
print(isinstance(obj2, A))
print(isinstance(obj3, B))`;
window["ans"+e] = `False True True`;
window["noans1"+e] = `True False True`;
window["noans2"+e] = `False False False`;
window["noans3"+e] = `False True False`;

e++;
window["type"+e] = "4";
window["des"+e] = `What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print("A")

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

    def display(self):
        print("B")

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def display(self):
        print("C")

obj = B(10, 20)

print(isinstance(obj, A))
print(isinstance(obj, B))
print(isinstance(obj, C))`;
window["ans"+e] = `True True False`;
window["noans1"+e] = `False True False`;
window["noans2"+e] = `False True True`;
window["noans3"+e] = `True False False`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print("A")

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

    def display(self):
        print("B")

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def display(self):
        print("C")

obj = C(10, 20, 30)

print(isinstance(obj, A))
print(isinstance(obj, B))
print(isinstance(obj, C))`;
window["ans"+e] = `True True True`;
window["noans1"+e] = `True True False`;
window["noans2"+e] = `True False True`;
window["noans3"+e] = `False False True`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print("A")

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

    def display(self):
        print("B")

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def display(self):
        print("C")

obj1 = A(10)
obj2 = B(10, 20)
obj3 = C(10, 20, 30)

print(obj1.a, obj2.a, obj2.b, obj3.a, obj3.b, obj3.c)`;
window["ans"+e] = `10 10 20 10 20 30`;
window["noans1"+e] = `AttributeError: 'B' object has no attribute 'c'`;
window["noans2"+e] = `10 None 20 10`;
window["noans3"+e] = `AttributeError: 'A' object has no attribute 'b'`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def display(self):
        print(self.a, self.b, self.c)

obj = C(10, 20, 30)

obj.display()`;
window["ans"+e] = `10 20 30`;
window["noans1"+e] = `None None None`;
window["noans2"+e] = `AttributeError: 'C' object has no attribute 'display'`;
window["noans3"+e] = `TypeError`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def display(self):
        print(self.a, self.b, self.c)

obj = C(10, 20, 30)

print(obj.a, obj.b, obj.c)`;
window["ans"+e] = `10 20 30`;
window["noans1"+e] = `None None None`;
window["noans2"+e] = `AttributeError: 'C' object has no attribute 'display'`;
window["noans3"+e] = `TypeError: display() takes 0 positional arguments but 1 was given`;

e++;
window["type"+e] = "4";
window["des"+e] = `What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def display(self):
        print(self.a, self.b, self.c)

obj1 = A(10)
obj2 = B(10, 20)
obj3 = C(10, 20, 30)

print(obj1.a, obj2.a, obj2.b, obj3.a, obj3.b, obj3.c)`;
window["ans"+e] = `10 10 20 10 20 30`;
window["noans1"+e] = `10 None 20 10 None 30`;
window["noans2"+e] = `10 None 20 10 20 30`;
window["noans3"+e] = `AttributeError: 'A' object has no attribute 'b'`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print(self.a)

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

    def display(self):
        print(self.a, self.b)

class C(B):
    def __init__(self, a, b, c):
        super().__init__(a, b)
        self.c = c

    def display(self):
        print(self.a, self.b, self.c)

obj1 = A(10)
obj2 = B(10, 20)
obj3 = C(10, 20, 30)

obj1.display()
obj2.display()
obj3.display()`;
window["ans"+e] = `10, 10, 20, 10, 20, 30`;
window["noans1"+e] = `10, 20, 30, 10, 20, 30, 10, 20, 30`;
window["noans2"+e] = `10, None, None, 10, 20, None, 10, 20, 30`;
window["noans3"+e] = `10, None, None, 10, 20, 30, 10, 20, 30`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

class C(A):
    def __init__(self, a, c):
        super().__init__(a)
        self.c = c

class D(B, C):
    def __init__(self, a, b, c, d):
        B.__init__(self, a, b)
        C.__init__(self, a, c)
        self.d = d

    def display(self):
        print(self.a, self.b, self.c, self.d)

obj = D(10, 20, 30, 40)

obj.display()`;
window["ans"+e] = `TypeError: C.__init__() missing 1 required positional argument: 'c'`;
window["noans1"+e] = `10 20 30 40`;
window["noans2"+e] = `TypeError: init() takes 3 positional arguments but 4 were given`;
window["noans3"+e] = `AttributeError: 'D' object has no attribute 'display'`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print(self.a)

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

    def display(self):
        print(self.a, self.b)

class C(A):
    def __init__(self, a, c):
        super().__init__(a)
        self.c = c

class D(B, C):
    def __init__(self, a, b, c, d):
        B.__init__(self, a, b)
        C.__init__(self, a, c)
        self.d = d

obj = D(10, 20, 30, 40)

obj.display()`;
window["ans"+e] = `TypeError: C.__init__() missing 1 required positional argument: 'c'`;
window["noans1"+e] = `10 20`;
window["noans2"+e] = `AttributeError: 'D' object has no attribute 'display'`;
window["noans3"+e] = `10 20 30`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self):
        self.a = 1

    def display(self):
        print(self.a)

class B(A):
    def __init__(self):
        super().__init__()
        self.a = 2

obj = B()
obj.display()`;
window["ans"+e] = `2`;
window["noans1"+e] = `1`;
window["noans2"+e] = `None`;
window["noans3"+e] = `TypeError: display() takes 0 positional arguments but 1 was given`;

e++;
window["type"+e] = "4";
window["des"+e] = `What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self):
        self.a = 1

    def display(self):
        print(self.a)

class B(A):
    def __init__(self):
        super().__init__()
        self.b = 2

    def display(self):
        print(self.b)

obj = B()
obj.display()`;
window["ans"+e] = `2`;
window["noans1"+e] = `1`;
window["noans2"+e] = `None`;
window["noans3"+e] = `AttributeError: 'B' object has no attribute 'a'`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def display(self):
        print(self.a)

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

    def display(self):
        print(self.a, self.b)

class C(A):
    def __init__(self, a, c):
        super().__init__(a)
        self.c = c

class D(B, C):
    def __init__(self, a, b, c, d):
        super().__init__(a, b)
        self.d = d
        self.c = c

    def display(self):
        print(self.a, self.b, self.c, self.d)

obj = D(10, 20, 30, 40)

obj.display()`;
window["ans"+e] = `TypeError: C.__init__() missing 1 required positional argument: 'c'`;
window["noans1"+e] = `10 20`;
window["noans2"+e] = `AttributeError: 'D' object has no attribute 'display'`;
window["noans3"+e] = `10 20 30`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    pass

class B(A):
    pass

obj1 = A()
obj2 = B()

print(isinstance(obj1, A))
print(isinstance(obj2, B))
print(isinstance(obj2, A))`;
window["ans"+e] = `True True True`;
window["noans1"+e] = `True True False`;
window["noans2"+e] = `False True True`;
window["noans3"+e] = `False True False`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self):
        self.a = 1

class B(A):
    def __init__(self):
        super().__init__()
        self.b = 2

obj = B()

print(obj.a)`;
window["ans"+e] = `1`;
window["noans1"+e] = `2`;
window["noans2"+e] = `AttributeError: 'B' object has no attribute 'a'`;
window["noans3"+e] = `TypeError: init() missing 1 required positional argument: 'self'`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self):
        self.a = 1

class B(A):
    def __init__(self):
        super().__init__()
        self.b = 2

obj = B()

print(obj.b)`;
window["ans"+e] = `2`;
window["noans1"+e] = `1`;
window["noans2"+e] = `AttributeError: 'B' object has no attribute 'b'`;
window["noans3"+e] = `TypeError: init() missing 1 required positional argument: 'self'`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        A.__init__(self, a)
        self.b = b

    def display(self):
        print(self.a, self.b)

obj = B(10, 20)

obj.display()`;
window["ans"+e] = `10 20`;
window["noans1"+e] = `AttributeError: 'B' object has no attribute 'display'`;
window["noans2"+e] = `TypeError: init() missing 1 required positional argument: 'b'`;
window["noans3"+e] = `TypeError: init() takes 2 positional arguments but 3 were given`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

class B(A):
    def __init__(self, a, b):
        A.__init__(self, a)
        self.b = b

    def display(self):
        print(self.a, self.b)

obj = B(10, 20)

print(isinstance(obj, A))`;
window["ans"+e] = `True`;
window["noans1"+e] = `False`;
window["noans2"+e] = `None`;
window["noans3"+e] = `Error`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    pass

class B(A):
    pass

class C(A):
    pass

class D(B, C):
    pass

print(issubclass(D, A))`;
window["ans"+e] = `True`;
window["noans1"+e] = `False`;
window["noans2"+e] = `None`;
window["noans3"+e] = `Error`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self):
        self.a = 1

class B(A):
    def __init__(self):
        super().__init__()
        self.b = 2

class C(B):
    def __init__(self):
        super().__init__()
        self.c = 3

obj = C()

print(obj.a, obj.b, obj.c)`;
window["ans"+e] = `1 2 3`;
window["noans1"+e] = `3 2 1`;
window["noans2"+e] = `AttributeError: 'C' object has no attribute 'a'`;
window["noans3"+e] = `AttributeError: 'C' object has no attribute 'b'`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class Complex:
    def __init__(self, real, imag):
        self.real = real
        self.imag = imag

    def __add__(self, other):
        return Complex(self.real + other.real, self.imag + other.imag)

    def __str__(self):
        return "{}+{}i".format(self.real, self.imag)

c1 = Complex(1, 2)
c2 = Complex(2, 3)

print(c1 + c2)`;
window["ans"+e] = `3+5i`;
window["noans1"+e] = `3+6i`;
window["noans2"+e] = `2+5i`;
window["noans3"+e] = `2+6i`;

e++;
window["type"+e] = "4";
window["des"+e] = `What is the output of the following code?`;
window["q"+e] =`
class Complex:
    def __init__(self, real, imag):
        self.real = real
        self.imag = imag

    def __eq__(self, other):
        return self.real == other.real and self.imag == other.imag

c1 = Complex(1, 2)
c2 = Complex(1, 2)

print(c1 == c2)`;
window["ans"+e] = `True`;
window["noans1"+e] = `False`;
window["noans2"+e] = `None`;
window["noans3"+e] = `Error`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class Complex:
    def __init__(self, real, imag):
        self.real = real
        self.imag = imag

    def __eq__(self, other):
        return self.real == other.real and self.imag == other.imag

c1 = Complex(1, 2)
c2 = Complex(2, 3)

print(c1 == c2)`;
window["ans"+e] = `False`;
window["noans1"+e] = `True`;
window["noans2"+e] = `None`;
window["noans3"+e] = `Error`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self):
        self.a = 1

class B(A):
    def __init__(self):
        self.b = 2

class C(B):
    def __init__(self):
        self.c = 3

obj = C()

print(obj.a, obj.b, obj.c)`;
window["ans"+e] = `AttributeError: 'C' object has no attribute 'a'`;
window["noans1"+e] = `1 2 3`;
window["noans2"+e] = `AttributeError: 'B' object has no attribute 'a'`;
window["noans3"+e] = `AttributeError: 'A' object has no attribute 'b'`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self):
        self.a = 1

class B(A):
    def __init__(self):
        super().__init__()
        self.b = 2

class C(B):
    def __init__(self):
        self.c = 3

obj = C()

print(obj.a, obj.b, obj.c)`;
window["ans"+e] = `AttributeError: 'C' object has no attribute 'a'`;
window["noans1"+e] = `1 2 3`;
window["noans2"+e] = `AttributeError: 'B' object has no attribute 'a'`;
window["noans3"+e] = `AttributeError: 'A' object has no attribute 'b'`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self):
        self.a = 1

class B(A):
    def __init__(self):
        super().__init__()
        self.b = 2

class C(B):
    def __init__(self):
        super().__init__()
        self.c = 3

obj = C()

print(obj.a, obj.b, obj.c)`;
window["ans"+e] = `1 2 3`;
window["noans1"+e] = `AttributeError: 'C' object has no attribute 'a'`;
window["noans2"+e] = `AttributeError: 'B' object has no attribute 'a'`;
window["noans3"+e] = `AttributeError: 'A' object has no attribute 'b'`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self):
        self.a = 1

class B(A):
    def __init__(self):
        super().__init__()
        self.b = 2

class C(B, A):
    def __init__(self):
        super().__init__()
        self.c = 3

obj = C()

print(obj.a, obj.b, obj.c)`;
window["ans"+e] = `1 2 3`;
window["noans1"+e] = `AttributeError: 'C' object has no attribute 'a'`;
window["noans2"+e] = `AttributeError: 'A' object has no attribute 'b'`;
window["noans3"+e] = `AttributeError: 'B' object has no attribute 'c'`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self):
        self.a = 1

class B:
    def __init__(self):
        self.b = 2

class C(A, B):
    def __init__(self):
        super().__init__()
        super().__init__()
        self.c = 3

obj = C()

print(obj.a, obj.b, obj.c)`;
window["ans"+e] = `AttributeError: 'C' object has no attribute 'b'`;
window["noans1"+e] = `1 2 3`;
window["noans2"+e] = `AttributeError: 'B' object has no attribute 'a'`;
window["noans3"+e] = `AttributeError: 'A' object has no attribute 'b'`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __repr__(self):
        return str(self.a)

a1 = A(1)
a2 = A(2)
a3 = a1 + a2

print(a3)`;
window["ans"+e] = `TypeError: unsupported operand type(s) for +: 'A' and 'A'`;
window["noans1"+e] = `3`;
window["noans2"+e] = `TypeError: unsupported operand type(s) for +: 'int' and 'A'`;
window["noans3"+e] = `None`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __repr__(self):
        return str(self.a)

    def __add__(self, other):
        return A(self.a + other.a)

a1 = A(1)
a2 = A(2)
a3 = a1 + a2

print(a3)`;
window["ans"+e] = `3`;
window["noans1"+e] = `TypeError: unsupported operand type(s) for +: 'A' and 'A'`;
window["noans2"+e] = `TypeError: unsupported operand type(s) for +: 'int' and 'A'`;
window["noans3"+e] = `None`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __repr__(self):
        return str(self.a)

    def __add__(self, other):
        return self.a + other.a

a1 = A(1)
a2 = A(2)
a3 = a1 + a2

print(a3)`;
window["ans"+e] = `3`;
window["noans1"+e] = `TypeError: unsupported operand type(s) for +: 'A' and 'A'`;
window["noans2"+e] = `TypeError: unsupported operand type(s) for +: 'int' and 'A'`;
window["noans3"+e] = `None`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __repr__(self):
        return str(self.a)

    def __add__(self, other):
        return self.a + other.a

a1 = A(1)
a2 = A(2)
a3 = a1 + a2

print(a1 + a2 + a3)`;
window["ans"+e] = `6`;
window["noans1"+e] = `TypeError: unsupported operand type(s) for +: 'int' and 'NoneType'`;
window["noans2"+e] = `TypeError: unsupported operand type(s) for +: 'A' and 'A'`;
window["noans3"+e] = `None`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __repr__(self):
        return str(self.a)

    def __eq__(self, other):
        if isinstance(other, A):
            return self.a == other.a
        return False

a1 = A(1)
a2 = A(2)

print(a1 == a2)
print(a1 == 1)`;
window["ans"+e] = `False False`;
window["noans1"+e] = `False True`;
window["noans2"+e] = `True False`;
window["noans3"+e] = `True True`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __repr__(self):
        return str(self.a)

    def __gt__(self, other):
        if isinstance(other, A):
            return self.a > other.a
        return False

a1 = A(1)
a2 = A(2)

print(a1 > a2)
print(a2 > a1)`;
window["ans"+e] = `False True`;
window["noans1"+e] = `True False`;
window["noans2"+e] = `False False`;
window["noans3"+e] = `True True`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __repr__(self):
        return str(self.a)

    def __lt__(self, other):
        if isinstance(other, A):
            return self.a < other.a
        return False

a1 = A(1)
a2 = A(2)

print(a1 < a2)
print(a2 < a1)`;
window["ans"+e] = `True False`;
window["noans1"+e] = `False True`;
window["noans2"+e] = `False False`;
window["noans3"+e] = `True True`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __repr__(self):
        return str(self.a)

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

a = A(1)
b = B(2, 3)

print(isinstance(a, A))
print(isinstance(b, A))
print(isinstance(a, B))
print(isinstance(b, B))`;
window["ans"+e] = `True True False True`;
window["noans1"+e] = `True True True False`;
window["noans2"+e] = `True True False False`;
window["noans3"+e] = `True True True True`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __repr__(self):
        return str(self.a)

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

a = A(1)
b = B(2, 3)

print(issubclass(B, A))
print(issubclass(A, B))`;
window["ans"+e] = `True False`;
window["noans1"+e] = `False True`;
window["noans2"+e] = `True True`;
window["noans3"+e] = `False False`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __repr__(self):
        return str(self.a)

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

b = B(1, 2)

print(hasattr(b, 'a'))
print(hasattr(b, 'b'))`;
window["ans"+e] = `True True`;
window["noans1"+e] = `True False`;
window["noans2"+e] = `False True`;
window["noans3"+e] = `False False`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __repr__(self):
        return str(self.a)

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

b = B(1, 2)

print(getattr(b, 'a'))
print(getattr(b, 'b'))
print(getattr(b, 'c', 3))`;
window["ans"+e] = `1 2 3`;
window["noans1"+e] = `1 2 None`;
window["noans2"+e] = `AttributeError: 'B' object has no attribute 'c'`;
window["noans3"+e] = `TypeError: getattr expected at least 2 arguments, got 1`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __repr__(self):
        return str(self.a)

class B(A):
    def __init__(self, a, b):
        super().__init__(a)
        self.b = b

b = B(1, 2)

setattr(b, 'a', 3)
setattr(b, 'c', 4)

print(b.a, b.b, b.c)`;
window["ans"+e] = `3 2 4`;
window["noans1"+e] = `3 None 4`;
window["noans2"+e] = `1 2 4`;
window["noans3"+e] = `AttributeError: 'B' object has no attribute 'c'`;

e++;
window["type"+e] = "4";
window["des"+e] = `
What is the output of the following code?`;
window["q"+e] =`
class A:
    def __init__(self, a):
        self.a = a

    def __repr__(self):
        return str(self.a)

    def __call__(self, b):
        return self.a + b

a = A(1)

print(a(2))`;
window["ans"+e] = `3`;
window["noans1"+e] = `2`;
window["noans2"+e] = `TypeError: 'A' object is not callable`;
window["noans3"+e] = `AttributeError: 'A' object has no attribute 'call'`;

oopTotal = e;