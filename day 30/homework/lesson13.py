#1. Input the user to enter a username and use the isalnum() method to verify if it contains only alphanumeric characters.

txt = "Company12"

x = txt.isalnum()

print(x)
#2. Implement a function that checks if a password contains both letters and numbers using the isalnum() method.
def check_password(password):
    if password.islanum():
        return "yes it is alphanumeric"
    else:
        return "no it is not alphanumeric"