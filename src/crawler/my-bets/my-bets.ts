import puppeteer from "puppeteer";

export const myBetsCrawler = async (user: string, password: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.bet365.com/");
  console.log("====================================");
  console.log("bet");
  console.log("====================================");
  // await page.click(".hm-MainHeaderRHSLoggedOutWide_Login");

  // await page.type("input.lms-StandardLogin_Username", user);
  // await page.type("input.lms-StandardLogin_Password ", password);

  await page.pdf({ path: "bla.pdf", format: "a4" });

  await browser.close();
};
