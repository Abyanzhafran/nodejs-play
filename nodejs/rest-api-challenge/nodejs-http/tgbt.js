// total goals by a team
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

async function solver(year, team) {
  var counter = 0;

  const response1 = await makeHttpsRequest(
    `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}`
  );

  const data1 = response1.data;

  for (let i = 0; i < data1.length; i++) {
    counter += parseInt(data1[i].team1goals);
  }

  const response2 = await makeHttpsRequest(
    `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}`
  );

  const data2 = response2.data;

  for (let i = 0; i < data2.length; i++) {
    counter += parseInt(data2[i].team2goals);
  }

  return counter;
}

solver(2011, "Barcelona").then((response) => {
  console.log("Total goals : ", response);
});
