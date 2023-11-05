import csv

filename = 'HackUTD-2023-HomeBuyerInfo.csv'

with open(filename, 'r') as csvfile:
    datareader = csv.reader(csvfile)
    for row in datareader:
        id = row[0]
        credit = row[9]
        ltv = row[10]
        dti = row[11]
        fedti = row[12]

        print(id + " " + credit + " " + ltv + " " + dti + " " + fedti)

        if credit >= 640 :
            print("congrats")

        

