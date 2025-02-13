#1. Given a string, check if it ends with a specific character or substring using the endswith() method.

string = "this sentence ends with"
print(string.endswith("with"))


#2. Given a list of strings, filter out the strings that end with a specific suffix using the endswith() method.

list = ["started","ended","middle"]
for i in list:
    if i.endswith("ed"):
        print(i)