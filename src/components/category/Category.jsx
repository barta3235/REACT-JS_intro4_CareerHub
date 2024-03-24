
const Category = ({category}) => {
    console.log(category);
    return (
        <div className="bg-[#f7fbfd] p-[40px] rounded-xl">
            <img className="mb-[32px]" src={category.logo} alt="" />
            <h1 className="text-[20px] font-semibold">{category.category_name}</h1>
            <h1>{category.availability}</h1>

        </div>
    );
};

export default Category;