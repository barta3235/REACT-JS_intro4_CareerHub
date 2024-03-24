import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { RiMoneyPoundCircleLine } from "react-icons/ri";


const AppliedJob = ({ job }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-[35px] p-[30px] items-center border mb-[24px]">
            <div>
                <img src={job.logo} alt="" />
            </div>
            <div className="flex flex-col lg:flex-row w-full items-center justify-between">
                <div>
                    <h1 className="mb-2 text-[24px] font-bold">{job.job_title}</h1>
                    <h1 className="mb-[16px] text-[20px] font-medium">{job.company_name}</h1>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <button className="px-5 py-[10px] font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job.remote_or_onsite}</button>
                        <button className="px-5 py-[10px] font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job.job_type}</button>
                    </div>
                    <div className="flex gap-7 mt-[16px]">
                        <h2 className="flex"><CiLocationOn className="text-2xl"></CiLocationOn> {job.location}</h2>

                        <h2 className="flex"><RiMoneyPoundCircleLine className="text-2xl"> </RiMoneyPoundCircleLine> {job.salary}</h2>

                    </div>
                </div>
                <div>
                    <Link to={`/job/${job.id}`}><button className="btn btn-primary mt-6">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;