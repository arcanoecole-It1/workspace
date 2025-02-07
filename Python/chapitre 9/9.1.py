File_path = "chapitre 9/Resources/9.1.readme.txt"
f = open(File_path,mode='r',encoding='utf-8')
for line in f:
    print(line.strip())
f.close()
