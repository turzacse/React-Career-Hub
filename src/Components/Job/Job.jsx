import { Link } from "react-router-dom";
const Job = (job) => {
    const {id,logo, job_title, company_name,remote_or_onsite,location,job_type,salary,} = job.job;
    console.log(job);
    return (
        <div className="p-2">
            <img src={logo} alt="" />
            <h2>{job_title}</h2>
            <h2>{company_name}</h2>
            <div className="flex gap-2 ">
                <button className="btn capitalize">{remote_or_onsite}</button>
                <button className="btn capitalize">{job_type}</button>
            </div>
            <div className="flex gap-4">
                <h3>{location}</h3>
                <h3>{salary}</h3>
            </div>
         <Link to={`/job/${id}`}>
             <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] capitalize mb-10 mt-6">View Details</button>
         </Link>
        </div>
    );
};

export default Job;