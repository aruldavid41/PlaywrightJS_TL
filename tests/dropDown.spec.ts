import test, { chromium } from '@playwright/test'

test("DropDown with selectOption", async () => {

    const browser = await chromium.launch({ headless: false, channel: "chrome" })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.telerik.com/contact")

    //label -> text value
    await page.selectOption("#licensing-pricing-quotes", {label:"Licensing/Pricing/Quotes"})
    await page.waitForTimeout(8000)
    //index value start from 0
   // await page.selectOption(".ui-selectonemenu", { label : "Licensing/Pricing/Quotes" })
    //await page.waitForTimeout(3000)

    //await page.selectOption(".ui-selectonemenu", { label: "Invoicing/Billing"})
    //await page.waitForTimeout(3000)
})



