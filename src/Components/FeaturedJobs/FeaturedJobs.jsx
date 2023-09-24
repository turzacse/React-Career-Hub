import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
 
    const [jobs, setJobs] = useState([]);
    const [dataLen, setDataLen] = useState(4);

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

          <div className="grid grid-cols-2 mx-80 mt-10">
              {
                jobs.slice(0,dataLen).map(job => <Job key={job.id} job={job}></Job>)
              }
          </div>
          <div className= {dataLen === jobs.length && 'hidden'}>
             <button onClick={() => setDataLen(jobs.length)}
             className="btn btn-primary ml-80 mb-10">
              Show All</button>
          </div>
        </div>
    );
};

export default FeaturedJobs;