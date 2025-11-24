import JobListing from "../components/JobListing";
import { useEffect, useState } from "react";

const apiUrl = '/api/jobs';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(apiUrl); 

        if (!response || !response.ok) {
          console.error("Failed to fetch. Status:", response && response.status);
          setJobs([]);
          return;
        }

        const data = await response.json();
        setJobs(Array.isArray(data) ? data : []);
        console.log("All Jobs:", data);
      } catch (err) {
        console.error("Failed to fetch", err);
        setJobs([]);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="home">
      <div className="job-list">
        {jobs.length === 0 ? (
          <p>No jobs found</p>
        ) : (
          jobs.map((job) => <JobListing key={job.id} {...job} />)
        )}
      </div>
    </div>
  );
};

export default Home;
