def list_value(my_list : list) -> str:
    try :
        index = int(input("Enter the index of the value you want : "))
        find = ''.join(my_list)
        if index in "01234":
            print(index)
            for i,value in enumerate(find):
                if i == index:
                    print(value)
    except LookupError as e:
        print(e)
liste = ["a", "b", "c", "d", "e"]
list_value(liste)