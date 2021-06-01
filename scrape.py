import requests
from bs4 import BeautifulSoup
def heelo(data,page_title):
        fullname = data.split("Place of Birth")[1]
        fullname = fullname.split("Zodiac Sign")[0]
        birthdata = data.split('Birth Date')[1]
        birthdata = birthdata.split("Place of Birth")[0]

        # info = data.split("Who Is "+name+"?")[1]
        # info = info.split("Early Life")[0]

        zodiac = data.split("Zodiac Sign")[1]
        zodiac = zodiac.split("Who Is")[0]
        print("it worked")
    
def run():
    res = requests.get('https://www.biography.com/search?query=bradley+cooper')
    hi  =res.text
    hi = hi.split("/bradley-cooper")[0]
    hi = hi.split("main.js-->")[1]
    hi = hi.split('f="')[1]
    hi += "/bradley-cooper"

    print(hi)
    res = requests.get('https://www.biography.com'+hi)
    soup = BeautifulSoup(res.content, 'html.parser')

    # Extract title of page
    page_title = soup.title.text
    data = soup.body.text
    if data.find("Education") >= 0:
        if data.find("Place of Birth")>=0:
            if data.find("Did You Know?")>=0:
                if data.find("Who Is")>=0:
                    birth = data.split("Place of Birth")[1]
                    birth = birth.split("Full Name")[0]
                    fullname = data.split("Place of Birth")[1]
                    fullname = fullname.split("Zodiac Sign")[0]
                    
                    education = data.split("Education")[1]
                    education = education.split("PLACE OF BIRTH")[0]
                    
                    funfact = data.split("Did You Know?")[1]
                    funfact = funfact.split("EDUCATION")[0]   
                    
                    
                    
                    zodiac = data.split("Zodiac Sign")[1]
                    zodiac = zodiac.split("Who Is")[0]
                    # name = page_title.split(" - Stats")[0]
                    info = data.split("Who Is "+name+"?")[1]
                    info = info.split("Early Life")
                    birthdata = data.split('Birth Date')[1]
                    birthdata = birthdata.split("Place of Birth")[0]
                else:
                    heelo(data,page_title)  
    
            else:
                heelo(data,page_title)
    
        else:
            heelo(data,page_title)
           
    else:
        heelo(data,page_title)

    

    
run()

			
			
			