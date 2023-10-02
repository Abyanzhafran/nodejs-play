const axios = require("axios");

// async function solver(competition, year, team) {
//   let winTotalGoals = 0;

//   const response1 = await axios.get(
//     `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&team1=${team}`
//   );

//   const data1 = response1.data.data;

//   for (let i = 0; i < data1.length; i++) {
//     winTotalGoals += parseInt(data1[i].team1goals);
//     // if (parseInt(data1[i].team1goals) > parseInt(data1[i].team2goals)) {
//     //   winTotalGoals +=
//     // }
//   }

//   const response2 = await axios.get(
//     `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&team2=${team}`
//   );

//   const data2 = response2.data.data;

//   for (let i = 0; i < data2.length; i++) {
//     winTotalGoals += parseInt(data2[i].team2goals);
//     // if (parseInt(data1[i].team2goals) > parseInt(data1[i].team1goals)) {
//     //   winTotalGoals++;
//     // }
//   }

//   return winTotalGoals;
// }

// solver("UEFA Champions League", 2011, "Chelsea").then((response) => {
//   console.log(response);
// });

// first method, faster
// const axios = require("axios");

// const api = "https://jsonmock.hackerrank.com/api/";

// async function getCountFor(year, i) {
//   let count = 0;
//   const res = await axios.get(
//     api + "football_matches?year=" + year + "&page=" + i
//   );
//   const result = res.data;
//   const data = result.data;
//   if (Array.isArray(data)) {
//     data.forEach((d) => {
//       if (d.team1goals === d.team2goals) {
//         count++;
//       }
//     });
//   }
//   return count;
// }

// async function getNumDraws(year) {
//   let count = 0;

//   let res = await axios.get(api + "football_matches?year=" + year);
//   let result = res.data;
//   let total_pages = result.total_pages || 1;
//   const promises = [];
//   for (let i = 1; i <= total_pages; i++) {
//     promises.push(getCountFor(year, i));
//   }
//   const results = await Promise.all(promises);
//   results.forEach((c) => (count += c));
//   return count;
// }

// getNumDraws(2011).then((response) => {
//   console.log("total draw : ", response);
// });

// second method, good in simplicity and readibilty
async function solver(year) {
  console.log("Waiting...");

  let currPage = 1;
  let drawCount = 0;
  let totalPages = 1; // Default to 1 page

  while (currPage <= totalPages) {
    const response = await axios.get(
      `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&page=${currPage}`
    );

    const data = response.data.data;

    for (let i = 0; i < data.length; i++) {
      if (parseInt(data[i].team1goals) === parseInt(data[i].team2goals)) {
        drawCount++;
      }
    }

    currPage++;
    totalPages = response.data.total_pages || 1; // Update total pages from API response
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
