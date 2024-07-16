numbers = []
for i in range(5):
    num = int(input(" Enter your number : "))
    numbers.append(num)

sum = 0

for num in numbers:
    sum = sum + num

print(sum)