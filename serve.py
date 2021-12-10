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