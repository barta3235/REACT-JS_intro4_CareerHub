import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedJobs = () => {

    const [jobs,setJobs]=useState([]);

    const [dataLength,setDataLength]=useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data));
    },[])

    return (
        <div className="mb-[100px]">
            <div className="text-center">
                <h2 className="text-[48px] font-extrabold mb-[16px] mt-[100px]">Featured Jobs</h2>
                <p className="text-[16px] font-medium mt-[16px] mb-[32px]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] mb-[40px]">
            {
                jobs.slice(0,dataLength).map((job)=> <Job key={job.id} job={job}></Job> )
            }

            </div>
            <div className={dataLength===jobs.length? 'hidden flex justify-center':'flex justify-center'}>
                <button onClick={()=> setDataLength(jobs.length)} className="btn btn-primary">Show all jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;