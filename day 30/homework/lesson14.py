#1. Given a list of strings, filter out the strings that contain non-alphabetic characters using the isalpha() method.
list = ["asd", "hello" , "world"]
for i in list:
    if i.isalpha() == True:
        print(i)

#2. Input the user to enter their name and use the isalpha() method to verify if it contains only alphabetic characters.

name = str(input("please enter your name : "))
if name.isalpha() == True:
    print("your name is alphabetic")
else:
    print("your name is not alphabetic")