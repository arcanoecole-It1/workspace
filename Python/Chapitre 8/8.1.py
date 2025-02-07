try:
    number = int(input("Enter a number : "))
except ValueError as e :
    print(f'There is an error {e}')