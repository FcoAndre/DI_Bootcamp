# # Exercise 1 : Favorite Numbers

# my_fav_numbers = {1,2,3,4,5}

# my_fav_numbers.add(11)
# my_fav_numbers.add(12)


# my_fav_numbers.remove(5)


# friend_fav_numbers = {21,22,23,24,25}

# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# print our_fav_numbers



# Exercise 2: Tuple

# No


# # Exercise 3: Print A Range Of Numbers

# for x in range(1, 21):
#   print(x) 



# # Exercise 4: Floats

# list = []

# for x in range(1, 6):
#     list.append(x)
#     x = x+0.5
#     list.append(x)
    
# list.pop(-1)

# print(list)



# # Exercise 5: Shopping List

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# # Remove “Banana” from the list.

# basket.pop(0)

# # Remove “Blueberries” from the list.

# basket.pop(-1)

# # Put “Kiwi” at the end of the list.

# basket.append("Kiwi")

# # Add “Apples” at the beginning of the list.

# basket.insert(0, "Apples")

# # Count how many apples are in the basket.
# x=0

# for fruit in basket:
#     if fruit == "Apples":
#         x+=1

# print(x)

# # Empty the basket.

# basket.clear()

# # Print(basket)

# print(basket)



# # Exercise 6 : Loop

# nameGuest = input("Please type your name\n")
# myName = "Francisco"

# while (nameGuest != myName):
#     nameGuest = input("Please type your name\n")
    
# print("You managed to leave this loop")



# # Exercise 7
# # Given a list, use a while loop to print out every element which has an even index.

# thislist = ["a", "b", "c", "d", "e", "f", "g", "h"]

# x = 0

# for x in range (0, (len(thislist) -1)):
#    if (x % 2) == 0:
#     print(thislist[x])


# # Exercise 8
# # Make a list of the multiples of 3 from 3 to 30. Use a for loop to print the numbers in your list.

# lista = []

# for multiplos in range(1, 11):
#      lista.append(multiplos*3)

# print(lista)




# # Exercise 9
# # Use a for loop to find numbers between 1500 and 2700, which are divisible by 7 and multiples of 5.

# for x in range (1500,2700):
#     if (x%7) == 0 and (x%5)==0:
#         print(x)





# # Exercise 10: Favorite Fruits

# fruits_string = input("Type your fav fruits separeted by space \n")

# fruits_string = fruits_string.split(" ")

# print(fruits_string)

# new_fruit = input("choose a fruit\n")

# if new_fruit in fruits_string:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy it too!")




# # # Exercise 11: Who Ordered A Pizza ?

# topping = ""
# toppinglist =[]

# while (topping != "quit"):
#     topping = input("Add your topping\n")
#     if topping == "quit":
#         break
#     txt = "You’ll add {} to your pizza"
#     print(txt.format(topping))
#     toppinglist.append(topping)
    

# print(f"your toppings are {toppinglist}")


# price = 10+(len(toppinglist))*2.5

# print(f'Your final price is {price}')





# # Exercise 12: Cinemax

# totalTicket = 0
# age = ""

# while age != "quit":
#     age = input("What is the age of the viewer: - Type quit when you are finished \n")
#     if age == "quit":
#         break
#     if int(age) < 3:
#         print("The ticket is free")
#     elif  3 <= int(age) <= 12:
#         print("The ticket costs $10")
#         totalTicket += 10
#     else:
#         print("The ticket costs $15")
#         totalTicket += 15

# print(f"Your total is ${totalTicket}")


# listAudience = []
# age = ""

# while age != "quit":
#     age = input("What is the age of the viewer: - Type quit when you are finished\n")
#     if age == "quit":
#         break
#     if  16 <= int(age) <= 21:
#         print("You can watch the movie")
#         name = input("Type me your name\n")
#         list_of_allowed.append(name)
        
#     else:
#         print("Unfortunately you can not watch this movie")
        

# print(f"Your bought tickets for {listAudience}")






# # Exercise 13 : Who Is Under 16?


# listAudience = ["aaaa","bbbb","cccc"]
# listAllowed = []
# age=""

# for x in range (0,len(listAudience)):
#     age = int(input(f'What is the age of {listAudience[x]}\n'))
#     if age >=16:
#         listAllowed.append(listAudience[x])
        

# print(listAllowed)




# # Exercise 14: Family Members

# option = ""
# family = []
# name = ""


# while option != "exit":
#     option = input("Here are your options:\n Type add to add a family member\n Type remove to remove a family member\n Type show to show all your family member\n Type exit to leave the program\n")
        
#     if option == "add":
#         name = input("Which name you wanna add?\n ")
#         family.append(name)
        
        
#     elif option == "remove":
#         name = input("Which name you wanna remove?\n ")
#         if name in family:
#             family.remove(name)
#         else:
#             print("This name was not on the list")
            
#     elif option == "show":
#         print(family)
        
#     elif option == "exit":
#         print("It was nice to see you!")
        
#     else:
#         print("This option is not available. Choose another one\n ")