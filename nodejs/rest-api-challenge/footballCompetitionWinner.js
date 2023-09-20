// football competition winner
const axios = require("axios");

async function solver(competition, year) {
  let totalGoals = 0;
  let currPage1 = 1;
  let totalPages1 = 1;

  while (currPage1 <= totalPages1) {
    const response1 = await axios.get(
      `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&team1=Chelsea&page=${currPage1}`
    );

    const data1 = response1.data.data;

    for (let i = 0; i < data1.length; i++) {
      totalGoals += parseInt(data1[i].team1goals);
    }

    currPage1++;
    totalPages1 = response1.data.total_pages || 1;
  }

  // set total pages and currPage back to 1
  let currPage2 = 1;
  let totalPages2 = 1;

  while (currPage2 <= totalPages2) {
    const response2 = await axios.get(
      `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&team2=Chelsea&page=${currPage2}`
    );

    const data2 = response2.data.data;

    for (let i = 0; i < data2.length; i++) {
      totalGoals += parseInt(data2[i].team2goals);
    }

    currPage2++;
    totalPages2 = response2.data.total_pages || 1;
  }

  return totalGoals;
}

solver("UEFA Champions League", 2011).then((response) => {
  console.log("total goals UEFA : ", response);
});

solver("English Premier League", 2014).then((response) => {
  console.log("total goals EPL : ", response);
});

// when i try to fetch the data in postman, the data just empty
solver("La Liga", 2012).then((response) => {
  console.log("total goals La Liga : ", response);
});
