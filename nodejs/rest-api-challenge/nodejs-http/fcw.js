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

async function solver(competition, year) {
  let totalGoals = 0;
  let currPage1 = 1;
  let totalPages1 = 1;

  while (currPage1 <= totalPages1) {
    const response1 = await makeHttpsRequest(
      `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&team1=Chelsea&page=${currPage1}`
    );

    const data1 = response1.data;

    for (let i = 0; i < data1.length; i++) {
      totalGoals += parseInt(data1[i].team1goals);
    }

    currPage1++;
    totalPages1 = response1.total_pages || 1;
  }

  let currPage2 = 1;
  let totalPages2 = 1;

  while (currPage2 <= totalPages2) {
    const response2 = await makeHttpsRequest(
      `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&team2=Chelsea&page=${currPage2}`
    );

    const data2 = response2.data;

    for (let i = 0; i < data2.length; i++) {
      totalGoals += parseInt(data2[i].team2goals);
    }

    currPage2++;
    totalPages2 = response2.total_pages || 1;
  }

  return totalGoals;
}

solver("UEFA Champions League", 2011).then((response) => {
  console.log("total goals UEFA : ", response);
});

solver("English Premier League", 2014).then((response) => {
  console.log("total goals EPL : ", response);
});

solver("La Liga", 2012).then((response) => {
  console.log("total goals La Liga : ", response);
});
