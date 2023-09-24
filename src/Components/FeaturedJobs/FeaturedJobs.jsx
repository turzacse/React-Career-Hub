import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
 
    const [jobs, setJobs] = useState([]);

    useEffect( ()=>
     {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
     }
    ,[])
    //console.log(jobs);
    const {logo} = jobs;

    return (
        <div>
           <h2 className="text-4xl text-center">Featured Jobs: {jobs.length}</h2> 
           <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
          {
            jobs.map(job => <Job key={job.id} job={job}></Job>)
          }
        </div>
    );
};

export default FeaturedJobs;