# # # Exercise 1 : Convert Lists Into Dictionaries

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]


# dictionary = {keys[i]: values[i] for i in range(len(keys))}

# print(dictionary)





# Exercise 2 : Cinemax #2


family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

familyAge = list(family.values())
familyMember = list(family.keys())

totalPrice=0


for members in range(len(familyMember)):
    if familyAge[members] < 3:
        print(f"{familyMembers[members]} Free ticket")
    elif 3 < familyAge[members] <= 12:
        print(f"{familyMember[members]} Ticket costs $10")
        ticketPrice = 10
        totalPrice = totalPrice + ticketPrice
    else:
        print(f"{familyMember[members]} Ticket costs $15")
        ticketPrice = 15
        totalPrice = totalPrice + ticketPrice

print(f"The total is: ${totalPrice}")




# # Exercise 3: Zara

# # Create a dictionary called brand, and translate the information above into keys and values.

# brand = {
# "name": "Zara", 
# "creation_date": 1975,
# "creator_name": "Amancio Ortega Gaona", 
# "type_of_clothes": ["men", "women", "children", "home"], 
# "international_competitors": ["Gap", "H&M", "Benetton"], 
# "number_stores": 7000, 
# "major_color": [("France", "blue"), ("spain", "red"), ("US", ["pink", "green"]) ]

# }

# # Change the number of stores to 2.

# brand["number_stores"] = 2

# # Print a sentence that explains who the clients of Zara are.

# print("The main clients are" , (brand['type_of_clothes'][0]), (brand['type_of_clothes'][1]),(brand['type_of_clothes'][2]))


# # Add a key called country_creation with a value of Spain to brand

# brand["country_creation"] = "Spain"

# # If the key international_competitors is in the dictionary, add the store Desigual.


# brand["international_competitors"].append("Desigual")


# # Delete the information about the date of creation.

# brand.pop("creation_date")

# # Print the last international competitor.

# print(brand["international_competitors"][-1])

# # Print in a sentence, the major clothes’ colors in the US.
# colorsUS1 = brand["major_color"][2][1][0]
# colorsUS2 = brand["major_color"][2][1][1]
# print(f"The major clothes colours in the US are {(colorsUS1)} and {colorsUS2}")


# # Print the amount of key value pairs (length of the dictionary).

# numberItems = len(brand.keys())
# print(f"The amount of items is {numberItems}")


# # Print only the keys of the dictionary.


# for key in range (numberItems):
#     print(list(brand.keys())[key])
    
# # Create another dictionary called more_on_zara with the following information:

# more_on_zara = {
#     "creation_date": 1975,
#     "number_stores": 10000,
# }

# # Use a method to add the information from the dictionary more_on_zara to the dictionary brand.

# newbrand = brand.copy()
# newbrand.update(more_on_zara)

# # Print the value of the key number_stores. What just happened ?

# print(brand["number_stores"])
# print(newbrand["number_stores"])





# # Exercise 4 : Disney Characters

# users = [ "Mickey", "Minnie", "Donald","Ariel","Pluto"] 

# # Use a for loop to recreate the #1 result. Tip : don’t hardcode the numbers


# numbers = [num for num in range(len(users)) ]

# disney_users_A = dict(zip(users, numbers))
# print(disney_users_A)

# # Use a for loop to recreate the #2 result. Tip : don’t hardcode the numbers

# disney_users_B = dict(zip(numbers, users))
# print(disney_users_B)


# # Use a method to recreate the #3 result


# disney_users_C = dict(zip(sorted(users), numbers))
# print(disney_users_C)



