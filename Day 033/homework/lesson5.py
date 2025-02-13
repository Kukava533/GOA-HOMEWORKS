#1. Input the user to enter a numeric value and use the isdigit() method to verify if it consists only of digits.

inp = input("please enter a number : ")
if inp.isdigit():
    print("you really did only input a number good job ! ")
else:
    print("you did not input a number ! ")
#2. Given a list of phone numbers, filter out the numbers that contain non-numeric characters using the isdigit() method.
numbers = [4324,1233124,"asd", 7 ,"sda"]
for i in numbers:
    if i.isdigit():
        print(i)