# import the library
from tkinter import *
from PIL import ImageTk,Image
root = Tk()

# The head of the application 
root.title("Simple Calculator")
root.iconbitmap('1.ico')
root.geometry("1024x823")
part_text = StringVar()
part_label = Label(root,text='part Name ', font=('bold',14), pady=20)
part_label.grid(row=0, column=0)


########## The body of the application 
# background image
bacgroundImage = PhotoImage(file="logo.png")
bacground = Label(root,image=bacgroundImage)
bacground.place(x=0,y=0,relwidth=1,relheight=1)
# The container of the application 
frame = LabelFrame(root, text="This is my frame",padx=50,pady=50)
frame.place()
# head text
h1 = Label(frame,text="welcome",font=("Helvetica",50),fg="black")
h1.grid(row=1,column=0,columnspan=3)
button_quit = Button(frame, text="Exit Program", command=root.quit)

e = Entry(frame,width=35,borderwidth=5)
e.grid(row=2,column=0,columnspan=3)
def buttonClick(value):
    current = e.get()
    e.delete(0,END)
    e.insert(0,str(current)+str(value))




# back it or shoving it on the screen
root.mainloop()

