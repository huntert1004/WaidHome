



#   from bs4 import BeautifulSoup
# import urllib.request
import pyperclip
search = ""
import urllib.request
from bs4 import BeautifulSoup

textToSearch = 'python tutorials'
url = "https://www.youtube.com/results?search_query=nevermind+album&sp=EgIQAw%253D%253D"
response = urllib.request.urlopen(url)
html = response.read()
soup = BeautifulSoup(html, 'html.parser')
soup = str(soup)
pyperclip.copy(soup)
print(soup)
for vid in soup.findAll(attrs={'class':'yt-uix-tile-link'}):
    if not vid['href'].startswith("https://googleads.g.doubleclick.net/"):
        print('https://www.youtube.com' + vid['href'])

    # for i in divs:
    #     href= i.find('a', href=True)
    #     print(href.text,  "\nhttps://www.youtube.com"+href['href'], '\n')
    #     with open(SearchString.replace("%20", "_")+'.txt', 'a') as writer:
    #         writer.write("https://www.youtube.com"+href['href']+'\n')

    # print("What are you looking for?")
    # SearchString = input()
    # SearchVid(SearchString.replace(" ", "%20"))
    # print(search)
# def run():
#     res = requests.get('https://www.youtube.com/results?search_query=nevermind+album&sp=EgIQAw%253D%253D')
#     hi  =res.text
#     soup = BeautifulSoup(res.content, 'html.parser')
    
#     find_all_a = soup.find_all(href=True)
#     find_all_a = str(find_all_a)
#     hi = find_all_a.split("/event")
#     print(hi)
    # if (len(hi)>1):
    #     hi[2]
    # else
    #     return 
    # if hi.find('"}}')>=0:
    #     hi = hi.split('"}}')[0]
        
    # else:
    #     hi = hi.split("#ref")[0]
    # # print(hi)
    # # Extract title of page
    # url = "/event" +hi
    # name = url.replace("/event/","")
    # name = name.split("-")
    
    # namereal =""
    # lengthlol = len(name) - 1
    # counter = 0
    
    # for x in name:
    #     if lengthlol > counter:
    #         namereal += x+" "
    #     else:
    #         namereal += x
    #     counter+=1
    

    

    # # print(namereal)
    # res = requests.get('https://www.britannica.com/'+url)
    # soup = BeautifulSoup(res.content, 'html.parser')
    # # Extract title of page
    # page_title = soup.title.text
    # data = soup.body.text
    # #Date
    # lollol = eventdate = data.split("date")
    
    # if data.find(" date")>=0:
    #     eventdate = data.split(" date")[1]
    # else:
        
    #     if len(lollol) ==4:
    #         eventdate = data.split("date")[3]
    #     if len(lollol) ==3:
    #         eventdate = data.split("date")[2]
    #     if len(lollol) ==2:
    #         eventdate = data.split("date")[1]
    #     if len(lollol) ==1:
    #         eventdate = data.split("date")[0]
    
        
    # if data.find("timeline")>=0:
    #     eventdate = eventdate.split("timeline")[0]
    # if data.find("location")>=0:
    #     eventdate = eventdate.split("location")[0]
    # if data.find("participants")>=0:
    #     eventdate = eventdate.split("participants")[0]
    # if len(eventdate)>50:
    #     eventdate="Lol not good data"
    
    # #end
    # #info
    # if data.find(namereal+",")>=0:
    #     info = data.split(namereal+",")[1]
    #     info = info.split("Top Questions")[0]
    #     info = namereal+info
    # if data.find("see "+namereal+" summary.")>=0:
    #     info = data.split("see "+namereal+" summary.")[1]
    #     info = info.split("Top Questions")[0]
    #     info = namereal+info
    # if info.find(namereal+" summary.")>=0:
    #     info = data.split("see "+namereal+" summary.")[1]
    #     info = info.split("Top Questions")[0]
    #     info = namereal+info
    # if info.find("WRITTEN BY")>=0:
    #     info = data.split("see "+namereal+" summary.")[1]
    #     info = info.split("Top Questions")[0]
    #     info = namereal+info
    
   

    

    
    # print(data)

    



			
			
			