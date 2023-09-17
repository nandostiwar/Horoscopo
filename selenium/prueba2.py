from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from time import sleep

espera = 3
chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("excludeSwitches", ['enable-automation'])
chrome_options.add_argument("--start-maximized")
driver = webdriver.Chrome(options=chrome_options)
driver.get('http://ktronix.com/')

driver.refresh()

sleep(espera)

objeto = driver.find_element(By.CSS_SELECTOR,".button-primary.js-cookie-notification-accept").click()

sleep(espera)

objeto = driver.find_element(By.ID,'js-site-search-input')
objeto.send_keys("Silla gamer")
objeto.submit()

sleep(espera)

objeto = driver.find_element(By.CSS_SELECTOR,".float-select.js-float-select.js-float-group.full-width.active-click").click()

sleep(espera)

objeto = driver.find_element(By.XPATH,"//*[@id='sort-by']/div/div[2]/ul/li[3]").click()

sleep(espera)

objeto = driver.find_element(By.CSS_SELECTOR,".ais-InfiniteHits-item.product__item.js-product-item.js-algolia-product-click").click()

sleep(espera)

objeto = driver.find_element(By.XPATH,"//*[@id='addToCartButton']").click()

sleep(espera)

object = driver.find_element(By.XPATH, "//*[@id='js-cart-modal']/div/div/div[3]/a").click()

#sleep(5)

#Agregar rutina de COMPRAR TRES ELEMENTOS

sleep(espera)

object = driver.find_element(By.XPATH, "//*[@id='js-go-to-pay']").click()

sleep(espera)

objeto = driver.find_element(By.ID,'j_username')
objeto.send_keys("webmaster@gmil.com")
objeto.submit()

#Agregar rutina del llenado del FORMATO DE PAGO

#ACABAMOS!!!

while(True):
    a = 15

