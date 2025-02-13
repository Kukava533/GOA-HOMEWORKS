list = ["lasd", "car", 7, 12, 15]
for i in range(len(list)):
    if i % 2 != 0:  
        print(list[i])

        
nums = int(input("please enter amount of numnbers : "))
numbers = []
for i in range(1, nums+1):
    num = int(input("please enter a number : "))
    numbers.append(num)

for i in range(len(numbers)):
    if i % 2 != 0:  
        print(numbers[i])


numbers = []
for i in range(1, 10 + 1):
    num = int(input("Please enter a number: "))
    numbers.append(num)

for i in numbers:
    print(i * 2)




#შემოგდით ჯერ N - შესატანი რიცხვების რაოდენობა, შემდეგ კი N ცალი რიცხვი. შეინახეთ რიცხვები
#  მასივში და გამობეჭდეთ შებრუნებული თანმიმდევრობით
# . (მაგ: თუ რიცხვებია 5 7 12, გამობეჭდეთ 12, 7, 5)

nums = int(input("please enter amount of numnbers : "))
numbers = []
for i in range(1, nums+1):
    num = int(input("please enter a number : "))
    numbers.append(num)

new_list = []
for i in range(len(numbers) , -1 , -1 ):
    new_list.append(i)
    
print(new_list)




#) შემოგდით N, შემდეგ N ცალი რიცხვი. შეინახეთ მასივში, ადგილი გაუცვალეთ
#  პირველ და ბოლო ელემენტს, და მასივი გამობეჭდეთ ეკრანზე.

nums = int(input("please enter amount of numnbers : "))
numbers = []
for i in range(1, nums+1):
    num = int(input("please enter a number : "))
    numbers.append(num)

num0 = numbers[0]
numbers[0] = numbers[-1]
numbers[-1] = num0
print(numbers)





def feast(beast, dish):
    if beast[0] == dish[0] and beast[-1] == dish[-1]:
        return True
    else:
        return False
    


def string_to_array(s):
    if s == "":
        return [""]
    else:
        return s.split()



def area_or_perimeter(l , w):
    if l == w :
        return l*w
    else:
        return (l*2 + w*2)



def find_it(seq):
    counts = {}
    for num in seq:
        if num in counts:
            counts[num] += 1
        else:
            counts[num] = 1
            
    for num, count in counts.items():
        if count % 2 != 0:
            return num

def find_it(seq):
    for i in seq:
        count = 0
        for j in seq:
            if j == i: 
                count += 1
        if count % 2 != 0:  
            return i


