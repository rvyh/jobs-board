import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import './App.css';
import Jobs from "./Jobs";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./Theme";

// see https://create-react-app.dev/docs/proxying-api-requests-in-development/
// const JOB_API_URL = "/api/jobs";
const JOB_API_URL = "http://localhost:3001/jobs";

// get data from API (array of jobs), then update state "jobList" with this data
async function fetchJobs(update) {
  const res = await fetch(JOB_API_URL);
  const data = await res.json();
  update(data);
}

function App() {
  const [ jobList, updateJobs ] = useState([]);

  useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Jobs jobs={jobList} />
      </ThemeProvider>
    </div>
  );
}

export default App;
