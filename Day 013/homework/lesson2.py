print("1. enter miles to convert to km: ")
print("2. enter km to convert to miles: ")
choice = float(input("enter 1 or 2: "))
num = float(input("number you want to convert: "))
if choice == 1:
    print(num * 0.6) 
elif choice ==2:
    print(num * 1.6)
else:
    print("invalid input ")