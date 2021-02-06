import * as puppeteer from "puppeteer";

export const dailyHumorCrawler = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://google.com");
  await page.pdf({ path: "google.pdf" });

  await browser.close();
};
