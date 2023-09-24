import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id, job_description} = useParams();
    console.log(id, job_description);
    return (
        <div>
            <h2 className="text-center text-3xl">Job Details </h2>
        </div>
    );
};
//error
export default JobDetails;