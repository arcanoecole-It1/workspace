def function_list(demo_list : list[float]) -> list[float]:
    average = sum(demo_list)/len(demo_list)
    print(f'sum ={sum(demo_list)} and total = {len(demo_list)} average is {average}')

demo_list = [5, 1, 59, 42, 8, 3, 15, 9, 7]
function_list(demo_list)