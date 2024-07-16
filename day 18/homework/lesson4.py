numbers = []

for i in range(10,51,4):
    numbers.append(i)

print(numbers)

for i in range(len(numbers)-1, -1, -1):
    print(numbers[i])