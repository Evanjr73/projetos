
from selenium import webdriver
from selenium.webdriver.common.keys import keys
from selenium.webdriver.common.by import By
import time 



class IGBot:

    def __init__(self):
        self.driver = webdriver.Chrome
        
    
    def loggin(self):
        driver = self.driver
        url = 'https://instagram.com/'
        driver.get(url)

        time.sleep(5)


tarefa = IGBot()
tarefa.loggin()       


