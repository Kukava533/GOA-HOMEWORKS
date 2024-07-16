numbers = [4,6,12,34,5,67,76,8,6,10]

max_num = numbers[0]

for num in numbers:
    if num > max_num:
        max_num = num

print(max_num)