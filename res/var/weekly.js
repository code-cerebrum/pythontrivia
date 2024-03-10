f=0;

f++;
window["type"+f] = "4";
window["des"+f] = ``;
window["q"+f] =`
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

# Example usage
number = 5
result = factorial(number)
print(f"The factorial of {number} is: {result}")
`;
window["ans"+f] = `The factorial of 5 is: 120`;
window["noans1"+f] = `The factorial of 5 is: 100`;
window["noans2"+f] = `The factorial of 5 is: 110`;
window["noans3"+f] = `The factorial of 5 is: 140`;

f++;
window["type"+f] = "4";
window["des"+f] = ``;
window["q"+f] =`
def is_palindrome(s):
    s = s.lower().replace(" ", "").replace(",", "").replace(".", "")
    return s == s[::-1]

# Example usage
input_string = "A man, a plan, a canal, Panama"
if is_palindrome(input_string):
    print("The input string is a palindrome.")
else:
    print("The input string is not a palindrome.")
`;
window["ans"+f] = `The input string is a palindrome.`;
window["noans1"+f] = `The input string is not a palindrome.`;
window["noans2"+f] = `TypeError`;
window["noans3"+f] = `SyntaxError`;

f++;
window["type"+f] = "4";
window["des"+f] = ``;
window["q"+f] =`
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        # Check if the target is present at the middle
        if arr[mid] == target:
            return mid
        
        # If the target is greater, ignore the left half
        elif arr[mid] < target:
            left = mid + 1
        
        # If the target is smaller, ignore the right half
        else:
            right = mid - 1
    
    # Target was not found in the list
    return -1

# Example usage
sorted_list = [2, 4, 7, 10, 14, 18, 23, 27]
target = 14
result = binary_search(sorted_list, target)

if result != -1:
    print(f"Element {target} is present at index {result}.")
else:
    print(f"Element {target} is not present in the list.")
`;
window["ans"+f] = `Element 14 is present at index 4.`;
window["noans1"+f] = `Element 10 is present at index 1.`;
window["noans2"+f] = `Element 14 is not present in the list.`;
window["noans3"+f] = `Element 10 is not present in the list.`;

f++;
window["type"+f] = "4";
window["des"+f] = ``;
window["q"+f] =`
numbers = [1, 2, 3, 4, 5]
squared_numbers = map(lambda x: x ** 2, numbers)
even_numbers = filter(lambda x: x % 2 == 0, squared_numbers)
result = sum(even_numbers)
print(result)
`;
window["ans"+f] = `20`;
window["noans1"+f] = `14`;
window["noans2"+f] = `30`;
window["noans3"+f] = `6`;

f++;
window["type"+f] = "4";
window["des"+f] = ``;
window["q"+f] =`
def recursive_factorial(n):
    if n == 0:
        return 1
    else:
        return n * recursive_factorial(n - 1)

def find_special_number(n):
    return sum(int(digit) for digit in str(recursive_factorial(n)))

result = find_special_number(5)
print(result)
`;
window["ans"+f] = `3`;
window["noans1"+f] = `120`;
window["noans2"+f] = `45`;
window["noans3"+f] = `100`;

f++;
window["type"+f] = "4";
window["des"+f] = ``;
window["q"+f] =`
def func(a, b=[]):
    b.append(a)
    return b

print(func(1))
print(func(2))
`;
window["ans"+f] = `[1] [1, 2]`;
window["noans1"+f] = `[1, 2]`;
window["noans2"+f] = `[1, 1, 2]`;
window["noans3"+f] = `[1] [2]`;

f++;
window["type"+f] = "4";
window["des"+f] = `
<div class="small-txt">
    Requirements:<br/>
    <ul>
        <li>Find the maximum subarray sum.</li>
        <li>Parameters:</li>
        <ul>
            <li>arr (list): List of integers.</li>
        </ul>
        <li>Returns:</li>
        <ul>
            <li>int: Maximum subarray sum.</li>
        </ul>
    </ul>
</div>
`;
window["q"+f] =`
A. def max_subarray_sum(arr):
       max_sum = float('-inf')
       current_sum = 0
       for num in arr:
           current_sum = max(num, current_sum + num)
           max_sum = max(max_sum, current_sum)
       return max_sum

B. def max_subarray_sum(arr):
       max_sum = arr[0]
       current_sum = arr[0]
       for num in arr[1:]:
           current_sum = max(num, current_sum + num)
           max_sum = max(max_sum, current_sum)
       return max_sum

C. def max_subarray_sum(arr):
       max_sum = 0
       current_sum = 0
       for num in arr:
           current_sum = max(num, current_sum + num)
           max_sum = max(max_sum, current_sum)
       return max_sum

D. def max_subarray_sum(arr):
       max_sum = float('-inf')
       current_sum = arr[0]
       for num in arr[1:]:
           current_sum = max(num, current_sum + num)
           max_sum = max(max_sum, current_sum)
       return max_sum
`;
window["ans"+f] = `Option A`;
window["noans1"+f] = `Option B`;
window["noans2"+f] = `Option C`;
window["noans3"+f] = `Option D`;

f++;
window["type"+f] = "4";
window["des"+f] = `
<div class="small-txt">
    Requirements:<br/>
    <ul>
        <li>Check if the given string is a palindrome.</li>
        <li>Parameters:</li>
        <ul>
            <li>s (str): Input string.</li>
        </ul>
        <li>Returns:</li>
        <ul>
            <li>bool: True if the string is a palindrome, False otherwise.s</li>
        </ul>
    </ul>
</div>
`;
window["q"+f] =`
A. def is_palindrome(s):
       cleaned_str = ''.join(char.lower() for char in s if char.isalnum())
       return cleaned_str == cleaned_str[::-1]

B. def is_palindrome(s):
       return s == s[::-1]

C. def is_palindrome(s):
       cleaned_str = ''.join(char for char in s if char.isalpha())
       return cleaned_str.lower() == cleaned_str[::-1].lower()

D. def is_palindrome(s):
       return ''.join(s.split()).lower() == ''.join(s.split())[::-1].lower()
`;
window["ans"+f] = `Option A`;
window["noans1"+f] = `Option B`;
window["noans2"+f] = `Option C`;
window["noans3"+f] = `Option D`;

weeTotal = f;