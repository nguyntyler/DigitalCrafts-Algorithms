# 1. Given an array nums, write a function to move all zeroes to the end of it while maintaining the relative order of the non-zero elements.
list1 = [0, 1, 3, 6, 2, 0, 0, 23, 55, 0]


def Remove_Zeros(list1):
    for i in list1:
        if i == 0:
            list1.remove(i)
            list1.append(i)
    print(list1)


Remove_Zeros(list1)
