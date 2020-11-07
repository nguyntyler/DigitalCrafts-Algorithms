# 3. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

num = [22, 33333, 1, 2, 4, 3, 6, 5, 3, 7, 1, 3, 9, 7, 6]


def Add_to_target(num, target):
    results = []

    for iidx, i in enumerate(num):
        for jidx, j in enumerate(num):
            if i + j == target and iidx != jidx:
                if len(results) == 0:
                    results.append([iidx, jidx])
        if len(results) != 0:
            break
    print(results)


Add_to_target(num, 8)
