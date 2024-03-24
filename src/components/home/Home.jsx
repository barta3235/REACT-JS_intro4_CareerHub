import Banner from '../banner/Banner'
import CategoryList from '../categoryList/CategoryList';
import FeaturedJobs from '../featuredJobs/FeaturedJobs';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div className='mx-[2px] lg:mx-[90px]'>
              <CategoryList></CategoryList>
              <FeaturedJobs></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;