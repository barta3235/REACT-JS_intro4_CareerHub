import pic from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-[#f7fbfd] lg:px-[200px]">
            <div className="">
                <h1 className=" mb-[24px] text-[50px] font-semibold">One Step Closer To Your<br /><span className="text-[#7E90FE]">Dream Job</span></h1>
                <h1 className="text-[18px] mb-[30px]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</h1> 
                <button className="btn btn-primary">Get Started</button>
            </div> 
            <div className='mt-[41px]'>
                <img src={pic} alt="no Img" />
            </div>
        </div>
    );
};

export default Banner;