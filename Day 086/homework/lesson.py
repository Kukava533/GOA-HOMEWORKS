arr = []
for i in range(4):
    arr.append(int(input("Please enter a number: ")))

num1 = arr[0]
index1 = 0
for i in range(len(arr)):
    if arr[i] > num1:  
        num1 = arr[i]
        index1 = i

arr.pop(index1)
num2 = arr[0]
for i in range(len(arr)):
    if arr[i] > num2:  
        num2 = arr[i]
        
print(num1 * num2)