i = 7
guess = int(input("guess a number from 1 to 10: "))
while guess != i:
    print("wrong")
    guess = int(input("try guessing again: "))
    if guess == i:
        print("correct ! ")

