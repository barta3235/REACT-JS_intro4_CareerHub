import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1>Oops..</h1>
            <h1>Site under construction</h1>
            <br />
            <Link to="/"><button className="btn bg-[#7E90FE]">Return Back</button></Link>
        </div>
    );
};

export default ErrorPage;