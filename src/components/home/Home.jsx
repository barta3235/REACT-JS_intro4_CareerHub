import Banner from '../banner/Banner'
import CategoryList from '../categoryList/CategoryList';
import FeaturedJobs from '../featuredJobs/FeaturedJobs';

const Home = () => {
    return (
        <div className='mx-[2px] lg:mx-[90px]'>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;