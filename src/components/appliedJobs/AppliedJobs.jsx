import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJob from "../appliedJob/AppliedJob";


const AppliedJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs,setDisplayJobs]= useState([]);

    const jobs = useLoaderData();

    useEffect(() => {
        const storedJobId = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter((job) => storedJobId.includes(job.id));
            console.log(jobs, storedJobId, jobsApplied);
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [])

    const handleJobsFilter=(filter)=>{
         if(filter==='all'){
            setDisplayJobs(appliedJobs);
         }else if(filter==='Remote'){
            const remoteJobs=appliedJobs.filter((job)=>job.remote_or_onsite==='Remote')
            setDisplayJobs(remoteJobs);
         }else if(filter==='Onsite'){
            const onSiteJobs=appliedJobs.filter((job)=>job.remote_or_onsite==='Onsite')
            setDisplayJobs(onSiteJobs);
         }
    }

    console.log('These are the applied Jobs: ', appliedJobs);



    return (
        <div className="mb-[100px] mx-[2px] lg:mx-[90px]">
            <h2 className="py-[100px] bg-[#f7fbfd] text-center text-[32px] font-extrabold mb-[100px]">Applied Jobs</h2>

            <div className="mb-[32px] flex justify-end">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={()=> handleJobsFilter('Remote')}><a>Remote</a></li>
                        <li onClick={()=> handleJobsFilter('Onsite')}><a>On Site</a></li>
                    </ul>
                </details>
            </div>

            <div>
                {
                    displayJobs.map((job) => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;