#1. Initialize an empty list and append elements from multiple smaller lists to it.

biglist = []
list1 = [7,5,3]
list2 = ["asd","dasd"]
for i in list1:
    biglist.append(i)
for i in list2:
    biglist.append(i)
print(biglist)

#2. Create a program to input student grades and append each grade to a list for further analysis.
grades = []
students = int(input("how many students :"))
for i in range(1,students+1):
    grade=int(input("enter the grade : "))
    grades.append(grade)
print(grades)