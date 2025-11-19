import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


const apiUrl = 'http://localhost:4000/api/jobs';



const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${apiUrl}/${id}`);
        const data = await response.json();
        console.log("Job by ID:", data);
        setJob(data);
      } catch (err) {
        console.error("Failed to fetch", err);
      }
    };
    fetchJobs();
  });

  
  const deleteJob = async () => {
    try {
      const response = await fetch(`${apiUrl}/${id}`,{
        method:"DELETE",
      });
      
      if (response.ok) {
        console.log("Deleting successfully");
        navigate("/");
      } else {
        console.error("Failed to delete job");
      }

    } catch (error) {
      console.error("Error deleteing job:", error);
    }
  };
  if (!job) {
    return <div>Loading...</div>;
  }


  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p>Type: {job.type}</p>
      <p>Description: {job.description}</p>
      <p>Company: {job.company.name}</p>
      <p>Contact Email: {job.company.contactEmail}</p>
      <p>Contact Phone: {job.company.contactPhone}</p>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Posted Date: {job.postedDate}</p>
      <Link to={`/edit-job/${id}`}>
        <button>Edit Job</button>
      </Link>
      <button onClick={deleteJob}>Delete Job</button>
    </div>
  );
};

export default JobPage;
