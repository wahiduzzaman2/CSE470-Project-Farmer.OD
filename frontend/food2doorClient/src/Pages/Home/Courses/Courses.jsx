import { Link } from "react-router-dom";
import CourseCard from "../../../Components/CourseCard/CourseCard";
import useCourses from "../../../Hooks/useCourses";

const Courses = () => {
    const [courses] = useCourses();
    const sortedCourses = courses.slice().sort((a, b) => a.available_seats - b.available_seats);
    const topCourses = sortedCourses.slice(0, 6);

      
    return (
        <div className="py-12 md:py-32">
            <h1 className="text-5xl font-bold text-center mb-16">Popular Courses</h1>
            <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {topCourses.map(course => (
                <CourseCard key={course._id} course={course} popular={true}/>
            ))}
            </div>
            <div className="text-center mt-10">
                    <Link to="/courses"><button className="btn btn-warning">See All Courses</button></Link>
            </div>
        </div>
    );
};

export default Courses;