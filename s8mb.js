module.exports = { s8mb };

async function s8mb(page) {
  //
  // The code below is just a standard Playwright script:
  //
  // Go to the target URL specified in the environment variable
  await page.goto('https://sandbox.north-europe.azure.keboola.com/50328266/');

  const startTime = Date.now();
  try {
    // Wait for the selector with a timeout of 5 seconds
    await page.waitForSelector('//*[@id="root"]/div[1]/div[1]/div/div/div/section/div[1]/div[1]/div/div[12]/div/div/div/div[2]/img', { timeout: 30000 });
  } catch (error) {
    // Handle the timeout error here
    console.error('Page load timeout:', error.message);

    // Throw an error to fail the test
    throw new Error('Page load timeout');
  }
  const endTime = Date.now();

  // Calculate the time taken in milliseconds
  const loadTime = endTime - startTime;

  // Output the load time
  console.log(`Element loaded in ${loadTime} milliseconds`);
}
