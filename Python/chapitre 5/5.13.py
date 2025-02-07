user_logins = { 
"alice": "12345678", 
"bob": "p@ssw0rd", 
"charlie": "qwertyuiop123", 
"michael": "superP@ssword123", 
} 
user_name = input("Enter a username : ").lower()
password = input("Enter a password : ")
if user_name in user_logins and user_logins[user_name] == password:
    print("Acess granted")
else :
    print("Could not login")