import JobListing from "../components/JobListing";
import { useEffect, useState } from "react";

const apiUrl = 'http://localhost:4000/api/jobs';
const Home = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("All Jobs:", data);
        setJobs(data);
      }catch (err) {
        console.error("Failed to fetch", err);
      }
      };
       fetchJobs();
  });

  return (
    <div className="home">
      <div className="job-list">
        {jobs.length === 0 && <p>No jobs found</p>}
        {jobs.length !== 0 &&
          jobs.map((job) => <JobListing key={job.id} {...job} />)}
      </div>
    </div>
  );
};

export default Home;


