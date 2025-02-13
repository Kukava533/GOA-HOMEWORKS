#1. Create a program that counts the number of occurrences of a specific character in a given string using the count() method.

string = "aabshdjhajsjjjjshjshabdd"
amount = string.count("j")
print(amount)

#2. Develop a text analysis tool that counts the frequency of each word in a text document using the count() method.
def count_words(text,word):
    amount_of_words = text.count(word)