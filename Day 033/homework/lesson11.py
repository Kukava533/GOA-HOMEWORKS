#1. Write a program that removes a specific element from a list using the remove() method.

list = ["asd" , 7 , 7.49]
list.remove("asd")
print(list)

#2. Remove all occurrences of a particular value from a list using the remove() method.

def remove_value(list , value):
    for i in list:
        if i == value:
            list.remove(i)
    return list