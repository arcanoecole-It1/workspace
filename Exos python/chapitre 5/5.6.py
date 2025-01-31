allowed_users = ["Alice", "Bob", "Charlie", "Michael","ALEXIE"]
user_name = input("Enter your name : ").capitalize()
if user_name in allowed_users :
    print("You are allowed")
else :
    print("You are not allowed")