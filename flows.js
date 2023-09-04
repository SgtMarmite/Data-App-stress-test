module.exports = { helloFlow };

async function helloFlow(page) {
  //
  // The code below is just a standard Playwright script:
  //
  // Go to https://artillery.io/
  await page.goto('https://sandbox.north-europe.azure.keboola.com/45530968/');

  const startTime = Date.now();
  await page.waitForSelector('//*[@id="tabs-bui3-tabpanel-0"]/div[1]/div/div[3]/div[2]/div[1]/div/div[2]/div/div/div/img');
  const endTime = Date.now();

  // Calculate the time taken in milliseconds
  const loadTime = endTime - startTime;

  // Output the load time
  console.log(`Element loaded in ${loadTime} milliseconds`);
}
