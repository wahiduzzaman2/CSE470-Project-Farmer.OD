
import Testimonials from "../Testimonial/Testimonial";
import Offer from "../Offer/Offer";
import Slides from "../Slides/Slides";
// import Courses from "../Courses/Courses";
// import Instructors from "../Instructors/Instructors";


const Home = () => {

    return (
        <div  >
            <Slides></Slides>
            {/* <Courses></Courses> */}
            <Offer></Offer>
            {/* <Instructors></Instructors> */}
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;