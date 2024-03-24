import { CiLocationOn } from "react-icons/ci";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Job = ({job}) => {

    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;

    return (
        <div className="border-2 p-[40px] rounded-xl">
            <img className="mb-[32px]" src={logo} alt="" />
            <h1 className="mb-2 text-[24px] font-bold">{job_title}</h1>
            <h1 className="mb-[16px] text-[20px] font-medium">{company_name}</h1>
            <div className="flex flex-col lg:flex-row gap-4">
                <button className="px-5 py-[10px] font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                <button className="px-5 py-[10px] font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
            </div>
            <div className="flex gap-7 mt-[16px]">
                <h2 className="flex"><CiLocationOn className="text-2xl"></CiLocationOn> {location}</h2>

                <h2 className="flex"><RiMoneyPoundCircleLine className="text-2xl"> </RiMoneyPoundCircleLine> {salary}</h2>

            </div>
            <Link to={`/job/${id}`}><button className="btn btn-primary mt-6">View Details</button></Link>
            
        </div>
    );
};

export default Job;