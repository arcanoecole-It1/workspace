File_path = "chapitre 9/Resources/9.3.file_to_reverse.txt"
f= open(File_path,mode='r',encoding='utf-8')
my_list =[]
for line in f :
    my_list = ''.join(reversed(line))
File_path2 = "chapitre 9/Resources/9.3.reversed_file.txt"
with open(File_path2,mode='w',encoding='utf-8') as f1:
    for line_reversed in f1:
        f.write(line_reversed)