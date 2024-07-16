#1. Create two lists and use the extend() method to append elements of one list to another.
list1 = [1, 2, 3, 4, 5]
list2 = [6, 7, 8, 9, 10]
list1.extend(list2)
print(list1)

#2. Use the extend() method to add multiple items to an existing list at once.
list1 = [1, 2, 3, 4, 5]
list1.extend([43,"aasd,6.43"])
list1.extend(list2)
print(list1)