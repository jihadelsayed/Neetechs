# import the library
from tkinter import *
root = Tk()

# The head of the application 
root.title("Simple Calculator")
root.iconbitmap('1.ico')
root.geometry("1024x823")
part_text = StringVar()
part_label = Label(root,text='part Name ', font=('bold',14), pady=20)
part_label.grid(row=0, column=0)

# variable
rootCanvas = Canvas(root,height=1024,width=823)
bacgroundImage = PhotoImage(file="logo.png")
buttonQuit = Button(root, text="Exit Program", command=root.quit)

# The body of the application 
rootCanvas.pack(fill="both", expand=True)
rootCanvas.create_image(0,0,image=bacgroundImage, anchor="nw")
rootCanvas.create_text(400,250,text="welcome",font=("Helvetica",50),fill="white")
rootCanvas.create_window(10,10, anchor="nw", window=buttonQuit)

# bacground = Label(image=bacgroundImage)
# bacground.place(x=0,y=0,relwidth=1,relheight=1)
# The container of the application

frame = LabelFrame(root, text="This is my frame",padx=50,pady=50)
frame.pack(pady=10)

# head text
h1 = Label(frame,text="welcome",font=("Helvetica",50),fg="black")
h1.grid(pady=50)


e = Entry(frame,width=35,borderwidth=5)
e.grid(row=1,column=0,columnspan=3)

# back it or shoving it on the screen
root.mainloop()

