File_path = "chapitre 9/Resources/9.2.i_can_write.txt"
try:
    with open(File_path,mode='w',encoding='utf-8') as f:
        f.write("I can Write")
except Exception as e:
    print(e)