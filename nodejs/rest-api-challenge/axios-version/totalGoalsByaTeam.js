// total goals by a team
const axios = require("axios");

async function solver(year, team) {
  var counter = 0;

  const response1 = await axios.get(
    `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}`
  );

  const data1 = response1.data.data;

  for (let i = 0; i < data1.length; i++) {
    counter += parseInt(data1[i].team1goals);
  }

  const response2 = await axios.get(
    `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}`
  );

  const data2 = response2.data.data;

  for (let i = 0; i < data2.length; i++) {
    counter += parseInt(data2[i].team2goals);
  }

  return counter;
}

solver(2011, "Barcelona").then((response) => {
  console.log("Total goals : ", response);
});
