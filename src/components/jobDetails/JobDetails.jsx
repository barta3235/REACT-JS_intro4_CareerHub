import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const job = jobs.find((job) => job.id == intId);
    console.log(job);


    const handleApplyJob=()=> {
        saveJobApplication(intId);
        toast("You have applied successfully");
    }


    return (
        <div className="mx-[2px] lg:mx-[90px] mb-[100px]">
            <h1 className="py-[100px] font-extrabold text-center text-[32px] bg-[#f7fbfd]">Job Details</h1>
            <div className="flex flex-col lg:flex-row gap-[30px] mt-[50px]">
                <div className="w-2/3">
                    <h1 className="mb-[24px]"><span className="font-bold">Job Description: <br /></span>{job.job_description}</h1>
                    <h1 className="mb-[24px]"><span className="font-bold">Job Responsibility: <br /></span>{job.job_responsibility}</h1>
                    <h1 className="mb-[24px]"><span className="font-bold">Educational Requirement: <br /></span>{job.educational_requirements} </h1>
                    <h1><span className="font-bold">Experience: </span><br />{job.experiences}</h1>
                </div>
                <div>
                    <div className="text-[20px] p-[30px] bg-[#9873FF]">
                        <h1 className="font-bold mb-[24px]">Job Details</h1>
                        <hr />
                        <h1 className="mt-[24px] mb-[16px]">Salary: {job.salary} Per Month</h1>
                        <h1 className="mb-[25px]">Job Title: {job.job_title}</h1>
                        <h1 className="font-bold mb-[24px]">Contact Information</h1>
                        <hr />
                        <h1 className="my-[16px]">Phone: {job.contact_information.phone}</h1>
                        <h1 className="mb-[16px]">Email: {job.contact_information.email}</h1>
                        <h1 className="">Address: {job.contact_information.address}</h1>
                    </div>
                    <div className="mt-[24px]">
                        <button onClick={handleApplyJob} className="font-extrabold text-white bg-[#9873FF] w-full py-[20px] rounded-lg">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;