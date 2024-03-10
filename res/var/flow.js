b = 0;

b++;
window["type"+b] = "4";
window["des"+b] = `What is the output of the following code snippet?`;
window["q"+b] =`
x = 10
if x > 5:
    print("x is greater than 5")
else:
    print("x is less than or equal to 5")`;
window["ans"+b] = `x is greater than 5`;
window["noans1"+b] = `x is less than or equal to 5`;
window["noans2"+b] = `x is equal to 5`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 10
if x < 5:
    print("x is less than 5")
elif x < 10:
    print("x is less than 10")
else:
    print("x is greater than or equal to 10")`;
window["ans"+b] = `x is greater than or equal to 10`;
window["noans1"+b] = `x is less than 5`;
window["noans2"+b] = `x is less than 10`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 5:
    print(x)
    x += 1`;
window["ans"+b] = `0 1 2 3 4`;
window["noans1"+b] = `1 2 3 4 5`;
window["noans2"+b] = `0 1 2 3`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 5:
    x += 1
    if x == 3:
        continue
    print(x)`;
window["ans"+b] = `1 2 4 5`;
window["noans1"+b] = `1 2 3 4 5`;
window["noans2"+b] = `2 3 4 5`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 5:
    x += 1
    if x == 3:
        break
    print(x)`;
window["ans"+b] = `1 2`;
window["noans1"+b] = `1 2 3 4 5`;
window["noans2"+b] = `1 2 3`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for x in range(1, 6):
    print(x)`;
window["ans"+b] = `1 2 3 4 5`;
window["noans1"+b] = `0 1 2 3 4`;
window["noans2"+b] = `2 3 4 5 6`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for x in range(1, 10, 2):
    print(x)`;
window["ans"+b] = `1 3 5 7 9`;
window["noans1"+b] = `0 2 4 6 8`;
window["noans2"+b] = `2 4 6 8 10`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for x in range(10, 0, -1):
    print(x)`;
window["ans"+b] = `10 9 8 7 6 5 4 3 2 1`;
window["noans1"+b] = `0 1 2 3 4 5 6 7 8 9`;
window["noans2"+b] = `9 8 7 6 5 4 3 2 1`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for x in range(5):
    for y in range(3):
        print(x, y)`;
window["ans"+b] = `0 0 0 1 0 2 1 0 1 1 1 2 2 0 2 1 2 2 3 0 3 1 3 2 4 0 4 1 4 2`;
window["noans1"+b] = `0 0 1 0 2 0 0 1 1 1 2 1 0 2 1 2 2 2 0 3 1 3 2 4 0 4 1 4 2`;
window["noans2"+b] = `0 0 1 0 2 0 0 1 1 1 2 1 0 2 0 2 1 2 1 3 2 3 2 4 0 4 1 4 2`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for x in range(5):
    if x == 2:
        break
    print(x)
else:
    print("Loop completed")`;
window["ans"+b] = `0 1`;
window["noans1"+b] = `0 1 2`;
window["noans2"+b] = `Loop completed`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for x in range(5):
    if x == 2:
        continue
    print(x)
else:
    print("Loop completed")`;
window["ans"+b] = `0 1 3 4`;
window["noans1"+b] = `0 1 2 3 4`;
window["noans2"+b] = `0 1 3 4 Loop completed`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for x in range(5):
    if x == 2:
        pass
    print(x)`;
window["ans"+b] = `0 1 2 3 4`;
window["noans1"+b] = `0 1 3 4`;
window["noans2"+b] = `0 1 3 4 2`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 5
while x > 0:
    x -= 1
    if x == 3:
        break
    print(x)
else:
    print("Loop completed")`;
window["ans"+b] = `4`;
window["noans1"+b] = `4 2`;
window["noans2"+b] = `4 3`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 5
while x > 0:
    x -= 1
    if x == 3:
        continue
    print(x)
else:
    print("Loop completed")`;
window["ans"+b] = `4 2 1 0 Loop completed`;
window["noans1"+b] = `4 2 1 0`;
window["noans2"+b] = `4 3 2 1 0`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 5
while x > 0:
    x -= 1
    if x == 3:
        pass
    print(x)`;
window["ans"+b] = `4 3 2 1 0`;
window["noans1"+b] = `4 2 1 0`;
window["noans2"+b] = `4`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 5
while x > 0:
    if x == 3:
        continue
    print(x)
    x -= 1
else:
    print("Loop completed")`;
window["ans"+b] = `5 4`;
window["noans1"+b] = `5 4 3 1 Loop completed`;
window["noans2"+b] = `5 4 3 Loop completed`;
window["noans3"+b] = `5 4 2 1 Loop completed`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 5
while x > 0:
    x -= 1
    if x == 3:
        break
    print(x)
else:
    print("Loop completed")`;
window["ans"+b] = `4`;
window["noans1"+b] = `4 2 1 0`;
window["noans2"+b] = `4 3`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 5
while x > 0:
    x -= 1
    if x == 3:
        pass
    print(x)
else:
    print("Loop completed")`;
window["ans"+b] = `4 3 2 1 0 Loop completed`;
window["noans1"+b] = `4 2 1 0 Loop completed`;
window["noans2"+b] = `4 2 1 0 3 Loop completed`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 5
while x > 0:
    if x == 3:
        continue
    print(x)
    x -= 1
else:
    print("Loop completed")`;
window["ans"+b] = `5 4`;
window["noans1"+b] = `5 4 3 1 Loop completed`;
window["noans2"+b] = `5 4 3 Loop completed`;
window["noans3"+b] = `5 4 2 1 Loop completed`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 5:
    x += 1
    if x == 3:
        continue
    print(x)
else:
    print("Loop completed")`;
window["ans"+b] = `1 2 4 5 Loop completed`;
window["noans1"+b] = `1 2 4 5 3 Loop completed`;
window["noans2"+b] = `1 2 3 4 5 Loop completed`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 5:
    x += 1
    if x == 3:
        break
    print(x)
else:
    print("Loop completed")`;
window["ans"+b] = `1 2`;
window["noans1"+b] = `1 2 Loop completed`;
window["noans2"+b] = `1 2 3 4 5 Loop completed`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 5:
    x += 1
    if x == 3:
        pass
    print(x)
else:
    print("Loop completed")`;
window["ans"+b] = `1 2 3 4 5 Loop completed`;
window["noans1"+b] = `1 2 4 5 Loop completed`;
window["noans2"+b] = `1 2 3 4 Loop completed`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
else:
    print("Loop completed")`;
window["ans"+b] = `1 2 4 5 Loop completed`;
window["noans1"+b] = `1 2 4 5`;
window["noans2"+b] = `1 2 3 4 5 Loop completed`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i == 3:
        break
    print(i)
else:
    print("Loop completed")`;
window["ans"+b] = `1 2`;
window["noans1"+b] = `1 2 Loop completed`;
window["noans2"+b] = `1 2 3 4 5 Loop completed`;
window["noans3"+b] = `Loop completed`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i == 3:
        pass
    print(i)
else:
    print("Loop completed")`;
window["ans"+b] = `1 2 3 4 5 Loop completed`;
window["noans1"+b] = `1 2 4 5 Loop completed`;
window["noans2"+b] = `1 2 3 4 Loop completed`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(3):
    for j in range(3):
        if i == j:
            continue
        print(i, j)
else:
    print("Loop completed")`;
window["ans"+b] = `0 1 0 2 1 0 1 2 2 0 2 1 Loop completed`;
window["noans1"+b] = `0 1 0 2 1 0 1 2 2 0 2 1`;
window["noans2"+b] = `1 0 1 2 2 0 2 1`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(3):
    for j in range(3):
        if i == j:
            break
        print(i, j)
else:
    print("Loop completed")`;
window["ans"+b] = `1 0 2 0 2 1 Loop completed`;
window["noans1"+b] = `0 1 0 2 1 0 1 2`;
window["noans2"+b] = `1 0 1 2 2 0 2 1`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(3):
    for j in range(3):
        if i == j:
            pass
        print(i, j)
else:
    print("Loop completed")`;
window["ans"+b] = `0 0 0 1 0 2 1 0 1 1 1 2 2 0 2 1 2 2 Loop completed`;
window["noans1"+b] = `0 0 0 1 0 2 1 0 1 1 1 2 2 0 2 1 2 2`;
window["noans2"+b] = `0 1 0 2 1 0 1 2 2 0 2 1`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(3):
    for j in range(3):
        if i == j:
            continue
        print(i, j)
else:
    print("Loop completed")`;
window["ans"+b] = `0 1 0 2 1 0 1 2 2 0 2 1 Loop completed`;
window["noans1"+b] = `0 1 0 2 1 0 1 2 2 0 2 1`;
window["noans2"+b] = `1 0 1 2 2 0 2 1`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 5
while x > 0:
    x -= 1
    if x == 3:
        continue
    print(x)
else:
    print("Loop completed")`;
window["ans"+b] = `4 2 1 0 Loop completed`;
window["noans1"+b] = `5 4 2 1 0 Loop completed`;
window["noans2"+b] = `5 4 2 1 Loop completed`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 5
while x > 0:
    x -= 1
    if x == 3:
        break
    print(x)
else:
    print("Loop completed")`;
window["ans"+b] = `4`;
window["noans1"+b] = `4 3`;
window["noans2"+b] = `4 2 1 0 Loop completed`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i == 3:
        pass
    print(i)
else:
    print("Loop completed")`;
window["ans"+b] = `1 2 3 4 5 Loop completed`;
window["noans1"+b] = `1 2 4 5 Loop completed`;
window["noans2"+b] = `1 2 3 4 Loop completed`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
else:
    print("Loop completed")`;
window["ans"+b] = `1 2 4 5 Loop completed`;
window["noans1"+b] = `1 2 4 5`;
window["noans2"+b] = `1 2 3 4 5 Loop completed`;
window["noans3"+b] = `Loop completed`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i == 3:
        break
    print(i)`;
window["ans"+b] = `1 2`;
window["noans1"+b] = `1 2 3`;
window["noans2"+b] = `1 2 4 5`;
window["noans3"+b] = `1 2 3 4 5`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i == 3:
        continue
    print(i)`;
window["ans"+b] = `1 2 4 5`;
window["noans1"+b] = `1 2 3 4 5`;
window["noans2"+b] = `1 2 4 5 Loop completed`;
window["noans3"+b] = `3`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    for j in range(i):
        if j == 2:
            break
        print(j)`;
window["ans"+b] = `0 0 1 0 1 0 1 0 1`;
window["noans1"+b] = `0 1 0 1 0`;
window["noans2"+b] = `0 1 0 1 2 0 1 2 0 1 2`;
window["noans3"+b] = `0 1 0 1 2 0 1 0 1 2`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    for j in range(i):
        if j == 2:
            continue
        print(j)`;
window["ans"+b] = `0 0 1 0 1 0 1 3 0 1 3 4`;
window["noans1"+b] = `0 1 0 1 0`;
window["noans2"+b] = `0 1 0 1 2 0 1 2 0 1 2`;
window["noans3"+b] = `0 1 0 1 0 1 0 1 0 1`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i == 3:
        pass
    else:
        print(i)`;
window["ans"+b] = `1 2 4 5`;
window["noans1"+b] = `1 2 3 4 5`;
window["noans2"+b] = `1 2 4 5 Loop completed`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i == 3:
        continue
    else:
        print(i)`;
window["ans"+b] = `1 2 4 5`;
window["noans1"+b] = `1 2 3 4 5 Loop completed`;
window["noans2"+b] = `1 2 4 5 Loop completed`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 3
y = 2
if x > y:
    print("x is greater than y")
else:
    print("x is less than or equal to y")`;
window["ans"+b] = `x is greater than y`;
window["noans1"+b] = `x is less than or equal to y`;
window["noans2"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 5
if x % 2 == 0:
    print("x is even")
else:
    print("x is odd")`;
window["ans"+b] = `x is odd`;
window["noans1"+b] = `x is even`;
window["noans2"+b] = `Error`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 5
if x > 0:
    if x < 10:
        print("x is a single digit positive number")
    else:
        print("x is a double digit or more positive number")
else:
    print("x is not a positive number")`;
window["ans"+b] = `x is a single digit positive number`;
window["noans1"+b] = `x is a double digit or more positive number`;
window["noans2"+b] = `x is not a positive number`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 10
y = 5
if x > y:
    if x < 15:
        print("x is greater than y and less than 15")
    else:
        print("x is greater than y and greater than or equal to 15")
else:
    print("x is less than or equal to y")`;
window["ans"+b] = `x is greater than y and less than 15`;
window["noans1"+b] = `x is greater than y and greater than or equal to 15`;
window["noans2"+b] = `x is less than or equal to y`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 5
if x > 10:
    print("x is greater than 10")
elif x > 7:
    print("x is greater than 7")
elif x > 3:
    print("x is greater than 3")
else:
    print("x is less than or equal to 3")`;
window["ans"+b] = `x is greater than 3`;
window["noans1"+b] = `x is greater than 10`;
window["noans2"+b] = `x is greater than 7`;
window["noans3"+b] = `x is less than or equal to 3`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 3
if x > 10:
    print("x is greater than 10")
elif x > 7:
    print("x is greater than 7")
elif x > 3:
    print("x is greater than 3")
else:
    print("x is less than or equal to 3")`;
window["ans"+b] = `x is less than or equal to 3`;
window["noans1"+b] = `x is greater than 10`;
window["noans2"+b] = `x is greater than 7`;
window["noans3"+b] = `x is greater than 3`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 7
if x > 10:
    print("x is greater than 10")
elif x > 7:
    print("x is greater than 7")
elif x > 3:
    print("x is greater than 3")
else:
    print("x is less than or equal to 3")`;
window["ans"+b] = `x is greater than 3`;
window["noans1"+b] = `x is greater than 10`;
window["noans2"+b] = `x is greater than 7`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 10
while x > 0:
    print(x)
    x -= 1`;
window["ans"+b] = `10 9 8 7 6 5 4 3 2 1`;
window["noans1"+b] = `1 2 3 4 5 6 7 8 9 10`;
window["noans2"+b] = `10`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 10:
    x += 1
    if x % 2 == 0:
        continue
    print(x)`;
window["ans"+b] = `1 3 5 7 9`;
window["noans1"+b] = `2 4 6 8 10`;
window["noans2"+b] = `1 2 3 4 5 6 7 8 9 10`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 10:
    x += 1
    if x == 5:
        break
    print(x)`;
window["ans"+b] = `1 2 3 4`;
window["noans1"+b] = `1 2 3 4 5`;
window["noans2"+b] = `5 4 3 2 1`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for x in range(1, 11):
    if x == 5:
        break
    print(x)`;
window["ans"+b] = `1 2 3 4`;
window["noans1"+b] = `1 2 3 4 5`;
window["noans2"+b] = `5 4 3 2 1`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for x in range(1, 11):
    if x % 2 == 0:
        continue
    print(x)`;
window["ans"+b] = `1 3 5 7 9`;
window["noans1"+b] = `2 4 6 8 10`;
window["noans2"+b] = `1 2 3 4 5 6 7 8 9 10`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for x in range(1, 11):
    if x % 2 == 0:
        pass
    else:
        print(x)`;
window["ans"+b] = `1 3 5 7 9`;
window["noans1"+b] = `2 4 6 8 10`;
window["noans2"+b] = `1 2 3 4 5 6 7 8 9 10`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 5
while x > 0:
    x -= 1
    if x == 2:
        continue
    print(x)`;
window["ans"+b] = `4 3 1 0`;
window["noans1"+b] = `4 3 2 1 0`;
window["noans2"+b] = `3 1 0`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for x in range(1, 11):
    if x == 5:
        continue
    elif x == 8:
        break
    print(x)`;
window["ans"+b] = `1 2 3 4 6 7`;
window["noans1"+b] = `1 2 3 4 6 7 8`;
window["noans2"+b] = `1 2 3 4 6 7 8 9 10`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `What is the output of the following code snippet?`;
window["q"+b] =`
x = 5
while x > 0:
    x -= 1
    if x == 2:
        break
    print(x)`;
window["ans"+b] = `4 3`;
window["noans1"+b] = `4 3 2`;
window["noans2"+b] = `3 2 1 0`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for x in range(1, 11):
    if x % 2 == 0:
        pass
    else:
        print(x)
    if x == 5:
        break`;
window["ans"+b] = `1 3 5`;
window["noans1"+b] = `1 3 5 7 9`;
window["noans2"+b] = `2 4 6 8 10`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for x in range(1, 11):
    if x % 2 == 0:
        continue
    print(x)
    if x == 5:
        break`;
window["ans"+b] = `1 3 5`;
window["noans1"+b] = `1 3 5 7 9`;
window["noans2"+b] = `2 4 6 8 10`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for x in range(1, 11):
    if x % 2 == 0:
        continue
    print(x)
    if x == 5:
        pass`;
window["ans"+b] = `1 3 5 7 9`;
window["noans1"+b] = `1 3 5 7 9 5`;
window["noans2"+b] = `2 4 6 8 10`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(3):
    for j in range(3):
        if i == j:
            continue
        print(i, j)`;
window["ans"+b] = `0 1 0 2 1 0 1 2 2 0 2 1`;
window["noans1"+b] = `0 1 0 2 1 0 2 1 2 0 2 1`;
window["noans2"+b] = `0 1 0 2 1 0 2 1 2 0 1 2`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 4):
    for j in range(i):
        print(i * j, end=' ')
    print()`;
window["ans"+b] = `0 0 2 0 3 6`;
window["noans1"+b] = `1 2 3 2 4 6 3 6 9`;
window["noans2"+b] = `0 0 0 1 2 3 2 4 6`;
window["noans3"+b] = `0 1 2 0 2 4 0 3 6`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 4):
    for j in range(1, 4):
        if i == j:
            break
        print(i * j, end=' ')
    print()`;
window["ans"+b] = `2 3 6`;
window["noans1"+b] = `1 2 1 3`;
window["noans2"+b] = `2 4`;
window["noans3"+b] = `1 2`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(3):
    for j in range(i, 3):
        print(j, end='')
    print()`;
window["ans"+b] = `012 12 2`;
window["noans1"+b] = `012 123 23`;
window["noans2"+b] = `210 210 210`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 5:
    if x == 3:
        break
    print(x, end='')
    x += 1
else:
    print('done')`;
window["ans"+b] = `012`;
window["noans1"+b] = `0123`;
window["noans2"+b] = `0124done`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i == 3:
        continue
    print(i, end='')
else:
    print('done')`;
window["ans"+b] = `1245done`;
window["noans1"+b] = `1245`;
window["noans2"+b] = `12345done`;
window["noans3"+b] = `12345`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 5:
    print(x, end='')
    x += 1
    if x == 3:
        continue
    print('after')
else:
    print('done')`;
window["ans"+b] = `0after 1after 23after 4after done`;
window["noans1"+b] = `0after 1after 2after 3after 4after done`;
window["noans2"+b] = `0after 1after 23after done`;
window["noans3"+b] = `done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 5:
    x += 1
    if x == 3:
        pass
    print(x, end='')
else:
    print('done')`;
window["ans"+b] = `12345done`;
window["noans1"+b] = `1245done`;
window["noans2"+b] = `1234done`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 4):
    for j in range(1, 4):
        if i == j:
            break
        print(i * j, end=' ')
    else:
        print('inner loop finished')
    print()`;
window["ans"+b] = `2 3 6`;
window["noans1"+b] = `2 3 inner loop finished`;
window["noans2"+b] = `1 2 1 3`;
window["noans3"+b] = `2 3`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 4):
    for j in range(1, 4):
        if i == j:
            break
        print(i * j, end=' ')
else:
    print('outer loop finished')`;
window["ans"+b] = `2 3 6 outer loop finished`;
window["noans1"+b] = `2 outer loop finished`;
window["noans2"+b] = `inner loop finished outer loop finished`;
window["noans3"+b] = `2 3 outer loop finished`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i % 2 == 0:
        pass
    else:
        print(i, end='')
else:
    print('done')`;
window["ans"+b] = `135done`;
window["noans1"+b] = `135`;
window["noans2"+b] = `15done`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i % 2 == 0:
        continue
    else:
        print(i, end='')
else:
    print('done')`;
window["ans"+b] = `135done`;
window["noans1"+b] = `135`;
window["noans2"+b] = `135 done`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 4):
    for j in range(1, 4):
        if i == j:
            continue
        print(i * j, end=' ')
else:
    print('outer loop finished')`;
window["ans"+b] = `2 3 2 6 3 6 outer loop finished`;
window["noans1"+b] = `2 3 2 3 6 outer loop finished`;
window["noans2"+b] = `2 3 2 3 6 1 3 2 6`;
window["noans3"+b] = `2 3 2 3 6 1 3 2 6 outer loop finished`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i % 2 == 0:
        continue
    print(i, end='')
else:
    print('done')`;
window["ans"+b] = `135done`;
window["noans1"+b] = `135`;
window["noans2"+b] = `1345done`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i == 3:
        break
    print(i, end='')
else:
    print('done')`;
window["ans"+b] = `12`;
window["noans1"+b] = `12done`;
window["noans2"+b] = `1234`;
window["noans3"+b] = `1234done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i == 3:
        pass
    print(i, end='')
else:
    print('done')`;
window["ans"+b] = `12345done`;
window["noans1"+b] = `1245done`;
window["noans2"+b] = `1234done`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 5:
    x += 1
    if x == 3:
        continue
    print(x, end='')
else:
    print('done')`;
window["ans"+b] = `1245done`;
window["noans1"+b] = `1245`;
window["noans2"+b] = `12345done`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 5:
    print(x, end='')
    x += 1
    if x == 3:
        break
    print('after')
else:
    print('done')`;
window["ans"+b] = `0after1after2`;
window["noans1"+b] = `0after1afterdone`;
window["noans2"+b] = `0after1after2afterdone`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 5:
    x += 1
    if x == 3:
        continue
    print(x, end='')
else:
    print('done')`;
window["ans"+b] = `1245done`;
window["noans1"+b] = `1245`;
window["noans2"+b] = `12345done`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
x = 0
while x < 5:
    print(x, end='')
    x += 1
    if x == 3:
        continue
    print('after')
else:
    print('done')`;
window["ans"+b] = `0after1after23after4afterdone`;
window["noans1"+b] = `0after1afterdone`;
window["noans2"+b] = `0after1after2`;
window["noans3"+b] = `0after1after2after4afterdone`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i % 2 == 0:
        continue
        print(i, end='')
else:
    print('done')`;
window["ans"+b] = `done`;
window["noans1"+b] = `135done`;
window["noans2"+b] = `135`;
window["noans3"+b] = `None of the above`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 6):
    if i == 3:
        break
        print(i, end='')
    else:
    print('done')`;
window["ans"+b] = `done done`;
window["noans1"+b] = `12`;
window["noans2"+b] = `1234`;
window["noans3"+b] = `1234done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 4):
    for j in range(1, 4):
        if i == j:
            continue
        print(i * j, end=' ')
        if i + j == 4:
            break
else:
    print('outer loop finished')`;
window["ans"+b] = `2 3 2 6 3 outer loop finished`;
window["noans1"+b] = `2 3 2 3 6 1 3 2 6 outer loop finished`;
window["noans2"+b] = `2 3 2 3 6 outer loop finished`;
window["noans3"+b] = `2 3 2 3 outer loop finished`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 4):
    if i == 2:
        pass
    else:
        print(i, end=' ')
else:
    print('done')`;
window["ans"+b] = `1 3 done`;
window["noans1"+b] = `1 3`;
window["noans2"+b] = `done`;
window["noans3"+b] = `1 done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 4):
    if i == 2:
        continue
    else:
        print(i, end=' ')
else:
    print('done')`;
window["ans"+b] = `1 3 done`;
window["noans1"+b] = `1 3`;
window["noans2"+b] = `done`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 4):
    if i == 2:
        break
    else:
        print(i, end=' ')
else:
    print('done')`;
window["ans"+b] = `1`;
window["noans1"+b] = `1 done`;
window["noans2"+b] = `1 2`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 4):
    if i == 2:
        continue
    else:
        print(i, end=' ')
        break
else:
    print('done')`;
window["ans"+b] = `1`;
window["noans1"+b] = `1 done`;
window["noans2"+b] = `1 3 done`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
i = 0
while i < 3:
    if i == 1:
        i += 1
        continue
    print(i, end=' ')
    i += 1
else:
    print('done')`;
window["ans"+b] = `0 2 done`;
window["noans1"+b] = `0 1 2 done`;
window["noans2"+b] = `1 2 done`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
i = 0
while i < 3:
    if i == 1:
        i += 1
        break
    print(i, end=' ')
    i += 1
else:
    print('done')`;
window["ans"+b] = `0`;
window["noans1"+b] = `0 1`;
window["noans2"+b] = `0 1 done`;
window["noans3"+b] = `0 0`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 4):
    for j in range(1, 4):
        if i == j:
            continue
        if i * j == 6:
            break
        print(i * j, end=' ')
    else:
        print('inner loop finished')
        break
    print('outer loop finished')
else:
    print('done')`;
window["ans"+b] = `2 3 inner loop finished`;
window["noans1"+b] = `2 inner loop finished done`;
window["noans2"+b] = `2 inner loop finished inner loop finished done`;
window["noans3"+b] = `2 inner loop finished outer loop finished done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(3):
    print(i)
else:
    print('done')`;
window["ans"+b] = `0 1 2 done`;
window["noans1"+b] = `0 1 2`;
window["noans2"+b] = `done`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 4):
    for j in range(i):
        print(i, end=' ')
else:
    print('done')`;
window["ans"+b] = `1 2 2 3 3 3 done`;
window["noans1"+b] = `1 2 2 3 3 3`;
window["noans2"+b] = `done`;
window["noans3"+b] = `1 2 3 done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(1, 5):
    if i == 3:
        pass
    else:
        print(i)
else:
    print('done')`;
window["ans"+b] = `1 2 4 done`;
window["noans1"+b] = `1 2 4`;
window["noans2"+b] = `done`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
i = 0
while i < 3:
    i += 1
    if i == 2:
        continue
    print(i)
else:
    print('done')`;
window["ans"+b] = `1 3 done`;
window["noans1"+b] = `1 3`;
window["noans2"+b] = `done`;
window["noans3"+b] = `1 2 3 done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
i = 0
while i < 3:
    i += 1
    if i == 2:
        break
    print(i)
else:
    print('done')`;
window["ans"+b] = `1`;
window["noans1"+b] = `1 2`;
window["noans2"+b] = `done`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(2, 5):
    if i == 3:
        continue
    print(i)
else:
    print('done')`;
window["ans"+b] = `2 4 done`;
window["noans1"+b] = `2 4`;
window["noans2"+b] = `2 done`;
window["noans3"+b] = `2 done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(3):
    for j in range(3):
        if i == j:
            print('Hello')
            break
        print(i, j)
    else:
        continue
    break
else:
    print('done')`;
window["ans"+b] = `Hello`;
window["noans1"+b] = `Hello 1 0 done`;
window["noans2"+b] = `Hello 0 1`;
window["noans3"+b] = `0 1 2 done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(3):
    for j in range(3):
        if i == j:
            continue
        print(i, j)
    else:
        continue
    break
else:
    print('done')`;
window["ans"+b] = `0 1 0 2 1 0 1 2 2 0 2 1 done`;
window["noans1"+b] = `0 1 0 2 1 0 1 2 2 0 2 1`;
window["noans2"+b] = `done`;
window["noans3"+b] = `0 1 2 3 done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
i = 0
while i < 2:
    i += 1
    for j in range(3):
        if i == j:
            continue
        print(i, j)
    else:
        continue
    break
else:
    print('done')`;
window["ans"+b] = `1 0 1 2 2 0 2 1 done`;
window["noans1"+b] = `0 1 0 2 1 0 1 2 2 0 2 1 done`;
window["noans2"+b] = `done`;
window["noans3"+b] = `0 1 2 done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(3):
    if i == 1:
        pass
    else:
        print(i)
else:
    print('done')`;
window["ans"+b] = `0 2 done`;
window["noans1"+b] = `0 1 2 done`;
window["noans2"+b] = `0 2`;
window["noans3"+b] = `done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(3):
    if i == 1:
        break
    else:
        print(i)
else:
    print('done')`;
window["ans"+b] = `0`;
window["noans1"+b] = `0 1 2 done`;
window["noans2"+b] = `0 done`;
window["noans3"+b] = `done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
for i in range(3):
    if i == 1:
        continue
    else:
        print(i)
else:
    print('done')`;
window["ans"+b] = `0 2 done`;
window["noans1"+b] = `0 1 2 done`;
window["noans2"+b] = `0 2`;
window["noans3"+b] = `done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
i = 0
while i < 3:
    i += 1
    if i == 2:
        pass
    else:
        print(i)
else:
    print('done')`;
window["ans"+b] = `1 3 done`;
window["noans1"+b] = `1 2 3 done`;
window["noans2"+b] = `1 3`;
window["noans3"+b] = `1 1 1 done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
i = 0
while i < 3:
    i += 1
    if i == 2:
        break
    else:
        print(i)
else:
    print('done')`;
window["ans"+b] = `1`;
window["noans1"+b] = `1 2 done`;
window["noans2"+b] = `1 done`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
i = 0
while i < 3:
    print(i)
    i += 1
    if i == 1:
        continue
    else:
        print('foo')
else:
    print('done')`;
window["ans"+b] = `0 1 foo 2 foo done`;
window["noans1"+b] = `0 foo 1 foo 2 foo done`;
window["noans2"+b] = `0 1 foo 1 foo 2 done`;
window["noans3"+b] = `0 foo 1 done`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
i = 0
while i < 3:
    print(i)
    i += 1
else:
    print('done')`;
window["ans"+b] = `0 1 2 done`;
window["noans1"+b] = `0 1 2`;
window["noans2"+b] = `done`;
window["noans3"+b] = `None`;

b++;
window["type"+b] = "4";
window["des"+b] = `
What is the output of the following code snippet?`;
window["q"+b] =`
i = 0
while i < 3:
    if i == 1:
        i += 1
        continue
    else:
        print(i)
    i += 1
else:
    print('done')`;
window["ans"+b] = `0 2 done`;
window["noans1"+b] = `0 1 2 done`;
window["noans2"+b] = `0 2`;
window["noans3"+b] = `None`;


floTotal = b; //flow total