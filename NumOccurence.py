# 2. Write a function that counts the number of times the number 7 occurs in a given integer
# without converting it to a string.
# # For example the number 7,704,793 would output 3

import math


def seven_counter(num):
    count = 0
    while num > 0:
        rem = num % 10
        if rem == 7:
            count += 1
        num = math.floor(num/10)
    print(count)
