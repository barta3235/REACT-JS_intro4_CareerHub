import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops..</h1>
            <br />
            <Link to="/"><button className="btn bg-[#7E90FE]">Return Back</button></Link>
        </div>
    );
};

export default ErrorPage;