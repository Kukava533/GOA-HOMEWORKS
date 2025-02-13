sign = input("please input a math operator : ")
number1 = int(input("please enter your numbner : "))
number2 = int(input("please enter your numbner : "))
if sign == "+":
    print(number1 + number2)
elif sign == "-":
    print(number1-number2)
elif sign == "*":
    print(number1*number2)
elif sign == "/":
    print(number1 / number2)
else:
    print("this is not a mathematical operation ")