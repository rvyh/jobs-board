var fetch = require("node-fetch");
// redis
const redis = require("redis");
const client = redis.createClient();
// wrap methods with promises using the built-in Node.js util.promisify
const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseURL = "https://jobs.github.com/positions.json";

async function fetchGithub() {
  let resultCount = 1, onPage = 0;
  const allJobs = [];

  // fetch all pages
  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    resultCount = jobs.length;
    // if jobs array has elements, add them
    if (resultCount > 0) {
      allJobs.push(...jobs);
    }

    console.log("got", resultCount, "jobs");
    onPage++;
  }
  
  // filter algo
  const jrJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();
    
    // algo logic
    if (
      jobTitle.includes("senior") ||
      jobTitle.includes("manager") ||
      jobTitle.includes("sr.") ||
      jobTitle.includes("architect")
    ) { 
      return false;
    }

    return true;
  })

  // set in redis
  console.log(allJobs.length);
  console.log(jrJobs.length);
  const success = await setAsync("github", JSON.stringify(jrJobs));
  console.log({ success });
}

// enable line below to test this module
// fetchGithub();

module.exports = fetchGithub;