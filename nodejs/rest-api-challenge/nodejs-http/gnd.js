const https = require("https");

// i think it was axios.get() func
function makeHttpsRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        resolve(JSON.parse(data));
      });

      response.on("error", (error) => {
        reject(error);
      });
    });
  });
}

async function solver(year) {
  console.log("Waiting...");

  let currPage = 1;
  let drawCount = 0;
  let totalPages = 1; // Default to 1 page

  while (currPage <= totalPages) {
    const response = await makeHttpsRequest(
      `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&page=${currPage}`
    );

    // there is something different in here
    // in axios you need to call the data, response.data.data
    // but when u use the makeHttpsRequest func, it only response.data
    // it already get the data
    const data = response.data;

    for (let i = 0; i < data.length; i++) {
      if (parseInt(data[i].team1goals) === parseInt(data[i].team2goals)) {
        drawCount++;
      }
    }

    currPage++;
    totalPages = response.total_pages || 1; // Update total pages from API response
  }

  return drawCount;
}

solver(2011)
  .then((response) => {
    console.log("total draw : ", response);
  })
  .finally(() => {
    console.log("Process completed.");
  });
