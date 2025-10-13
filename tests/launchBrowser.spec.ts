import test, { chromium } from '@playwright/test'

test ('login page', async()=>{
const browser= await chromium.launch({headless:false,channel:'chrome'})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator("//input[contains(@class,'username')]").fill("dilip@testleaf.com")
    await page.locator('[name=pw]').fill("Leaf@2025")
    await page.locator('#Login').click()
 
    
    await page.waitForTimeout(4000)


   const title =await page.title()
   console.log(title)

}

)