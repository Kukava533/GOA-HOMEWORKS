#1. Create a list of items, then use the copy() method to make a duplicate list, serving as a backup.
list = ["asd",8,14]
new_list = list.copy()
print(new_list)

#2. Accept user input and store it in a list, then use the copy() method to duplicate the list, preserving the original input for comparison or further processing.
list1 = []
inp = input("enter the string you want to store in the list")
list1.append(inp)
list2 = list1.copy()
print(list2)