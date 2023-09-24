
const Job = (job) => {
    const {logo, job_title} = job.job;
    console.log(job);
    return (
        <div>
            <img src={logo} alt="" />
            <h2>{job_title}</h2>
        </div>
    );
};

export default Job;