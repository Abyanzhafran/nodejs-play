const https = require("https");

// Define the API endpoint URL
const apiUrl =
  "https://jsonmock.hackerrank.com/api/football_matches?year=2011&team1=Barcelona";

// Create an HTTPS GET request
const request = https.get(apiUrl, (response) => {
  let data = "";

  // Listen for the 'data' event to accumulate response data
  response.on("data", (chunk) => {
    data += chunk;
  });

  // Listen for the 'end' event to handle the completed response
  response.on("end", () => {
    if (response.statusCode === 200) {
      // Parse the JSON response
      const jsonData = JSON.parse(data);

      // Use the data as needed
      console.log("API Response:", jsonData);
    } else {
      console.error("Failed to fetch data. Status code:", response.statusCode);
    }
  });
});

// Handle errors
request.on("error", (error) => {
  console.error("Error:", error);
});

// End the request
request.end();

// still doesn't work
// const http = require("http");

// function fetchDataFromAPI(url, callback) {
//   http.get(url, (res) => {
//     let data = "";

//     res.on("data", (chunk) => {
//       data += chunk;
//     });

//     res.on("end", () => {
//       callback(null, JSON.parse(data));
//     });

//     res.on("error", (error) => {
//       callback(error, null);
//     });
//   });
// }

// function solver(year, team, callback) {
//   var counter = 0;

//   const url1 = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}`;

//   fetchDataFromAPI(url1, (error1, response1) => {
//     if (error1) {
//       callback(error1, null);
//       return;
//     }

//     const data1 = response1.data;

//     for (let i = 0; i < data1.length; i++) {
//       counter += data1[i].team1goals;
//     }

//     callback(null, counter);
//   });
// }

// solver(2011, "Barcelona", (error, response) => {
//   if (error) {
//     console.error("Error:", error);
//   } else {
//     console.log("Total goals:", response);
//   }
// });
