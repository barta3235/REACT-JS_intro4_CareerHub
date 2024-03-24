import { useEffect, useState } from "react";
import Category from "../category/Category";
const CategoryList = () => {

    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('../../../public/categories.json')
        .then(res=> res.json())
        .then(data=> setCategories(data));
    },[])

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-[48px] font-extrabold mb-[16px] mt-[100px]">Job Category List</h2>
            <p className="text-[16px] font-medium mt-[16px] mb-[32px]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex flex-col lg:flex-row justify-around w-[90%]">
            {
                 categories.map((category,idx)=><Category key={idx} category={category}></Category>)
            }
            </div>
            

        </div>
    );
};

export default CategoryList;