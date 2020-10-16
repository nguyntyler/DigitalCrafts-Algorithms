# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

a = 0
b = 1
sum = 0

while a <= 4000000:  # You check 'a' so that you can run it again right before the the condition is met. If 'b', it will stop the code one step before.
    if a % 2 == 0:
        sum += a
        # Adds the first even numbers into a variable to keep track of the sum.
    c = a + b  # Adding first and second number to make third number.
    a = b  # Make the second number the first number.
    b = c  # Make the third number the second number.
    # Repeat with new numbers.

print(sum)  # Prints the total after everything is added.
