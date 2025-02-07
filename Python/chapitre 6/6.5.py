def function_minimum(number_list : list[float]) -> float:
    minimum = number_list[0]
    for i in number_list:
        if i < minimum:
            minimum = i
    print(minimum)
number_list =[12,23,54,11]
function_minimum(number_list)

def function_maximum(number_list : list[float]) -> float:
    maximum = number_list[0]
    for i in number_list:
        if i > maximum:
            maximum = i
    print(maximum)
number_list =[12,23,54,11]
function_maximum(number_list)