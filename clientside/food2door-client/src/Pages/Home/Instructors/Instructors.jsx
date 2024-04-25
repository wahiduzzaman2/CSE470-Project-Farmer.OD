import { Link } from "react-router-dom";
import InstructorCard from "../../../Components/InstructorCard/InstructorCard";
import useInstructors from "../../../Hooks/useInstructors";

const Instructors = () => {
    const [instructors] = useInstructors();
    const allInstructors = instructors.slice(0, 6);

      
    return (
        <div className="py-12 md:py-32">
            <h1 className="text-5xl font-bold text-center mb-16">Our Instructors</h1>
            <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2">
            {allInstructors.map(instructor => (
                <InstructorCard key={instructor._id} instructor={instructor} />
            ))}
            </div>
            <div className="text-center mt-10">
            <Link to="/instructors"><button className="btn btn-warning">See All Instructors</button></Link>
            </div>
        </div>
    );
};

export default Instructors;