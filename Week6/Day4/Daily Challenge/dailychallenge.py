from datetime import datetime

today = datetime.today().strftime('%Y-%m-%d')
date_list = today.split('-')
birdate = input('whats your birthdate? input like so: year/month/day\n')
age_list = birdate.split('/')

if int(date_list[1]) > int(age_list[1]):
    age = int(date_list[0]) - int(age_list[0])
    print(age)
elif int(date_list[1]) == int(age_list[1]):
    if int(date_list[2]) > int(age_list[2]):
        age = int(date_list[0]) - int(age_list[0]) -1
        print(age)
    else:
        print(age)
else:
    age = int(date_list[0]) - int(age_list[0])-1
    print(age)
    


candles = int(str(age)[1])


space= (int(5 - (candles/2)) + 1) * "_"
candlesTop = "i" *candles




print(f"        {space}{candlesTop}{space}\n       |:H:a:p:p:y:|\n     __|___________|__\n    |^^^^^^^^^^^^^^^^^|\n    |:B:i:r:t:h:d:a:y:|\n    |                 |\n    ~~~~~~~~~~~~~~~~~~~")