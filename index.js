const process = require('node:process')
const puppeteer = require('puppeteer')
require('dotenv').config();

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const website_url = process.env.FILE_DIRECTION

  await page.goto(website_url, { waitUntil: 'networkidle0' })

  await page.emulateMediaType('screen')

  await page.pdf({
    path: 'dist/Kamil Kulig resume.pdf',
    // margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4',
  })
  await browser.close()
})()
