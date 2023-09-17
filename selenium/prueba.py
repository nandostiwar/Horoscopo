from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep

chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("excludeSwitches", ['enable-automation'])
chrome_options.add_argument("--start-maximized")
driver = webdriver.Chrome(options=chrome_options)
driver.get('http://ktronix.com/')
#driver.get('https://www.ktronix.com/search?text=Silla%2520gamer&sort=price-asc')

driver.refresh()

texto_busqueda = driver.find_element("id","js-site-search-input")

texto_busqueda.send_keys("Silla gamer")

texto_busqueda.submit()

#objeto = driver.find_element(By.XPATH,"/html/body/main/section/div/section/section/div[2]/div/div/div[4]/div/div/ol/li[1]/div[1]/h3/a").click()

#boton_carrito = driver.find_element(By.XPATH,"//*[@id='js-mycart-header']").click()  //Carrito de arriba

#boton_carrito = driver.find_element(By.XPATH,"/html/body/main/section/div[1]/div/div[1]/div[2]/a").click()  //Volver estando dentro del carrito de copras vacio

#boton_carrito = driver.find_element(By.ID,'js-toolbar-button').click()

#boton_carrito.click()

while(True):
    a = 15