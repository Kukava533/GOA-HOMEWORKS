#1. Input the user to enter a string and use the islower() method to verify if it consists only of lowercase letters.

inp = str(input("please enter a string : "))
if inp.islower() == inp:
    print("the string consists only of lowercase letters")
else:
    print("the string does not consist only of lowercase letters")


#2. Given a list of strings, filter out the strings that contain uppercase or non-alphabetic characters using the islower() method.

list = ["string","car","asd","CaR"]
lowercase_list = []
for i in list:
    if i.islower() == i :
        lowercase_list.append(i)
print(lowercase_list)