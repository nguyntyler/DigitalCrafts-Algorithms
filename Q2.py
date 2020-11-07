# Given an array of statue sizes in a random order, how many additional statues
# would you need to arrange each statue so that each statue is only 1 unit taller than the previous one?

# All statues will have sizes between 0 and 20, and the given array will have a maximum length of 10.

# Example

# For the array of statues = [6, 2, 3, 8], the output should be
# numberStatues(statues) = 3.

# The completed set of statues needs the sizes 4, 5 and 7.

def numberStatues(statues):
    minNum = min(statues)
    maxNum = max(statues)

    min_max_range = list(range(minNum, maxNum))

    for i in statues:
        if i in min_max_range:
            min_max_range.remove(i)

    return len(min_max_range)

# ******** Tests ************


print(numberStatues([6, 2, 3, 8]))
print(numberStatues([5, 4, 6]))
print(numberStatues([6, 3]))
print(numberStatues([0, 3]))
print(numberStatues([19, 5, 8, 14, 11]))
