import person1 from "../../../assets/images/person_1.jpg";
import person2 from "../../../assets/images/person_2.jpg";
import person3 from "../../../assets/images/person_3.jpg";

const Testimonial = ({ imageSrc, name, content }) => {
  return (
    <div className="p-8 bg-white shadow-md rounded-md">
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={imageSrc}
          alt= "Profile"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
      </div>
      <p className="text-gray-700 mb-6">{content}</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      imageSrc: person2,
      name: 'Emily Johnson',
      content:
        'I was apprehensive about learning a new language, but FluentLink Institute made it an incredible journey. Their patient instructors and interactive lessons helped me build a strong foundation in Spanish. I can now confidently hold conversations with native speakers. Thank you for making language learning such an enjoyable experience!'
    },
    {
      imageSrc: person1,
      name: 'David Smith',
      content:
        "As a language enthusiast, I've tried various language schools, but FluentLink Institute stands out. Their advanced courses like 'Conversational Fluency Development' pushed my language skills to new heights. The instructors fostered an environment where I could discuss complex topics and refine my fluency. I'm grateful for the enriching experience!"
    },
    {
      imageSrc: person3,
      name: 'Sarah Turner',
      content:
        "Fluent communication is essential in my line of work, and the 'Business Language Communication' course at FluentLink Institute was a game-changer. The focused training on business-specific language and cultural nuances transformed the way I interact with international clients. This school truly equips professionals for success in the global marketplace."
    }
  ];

  return (
    <div className="py-12 md:py-32">
        <h1 className="text-5xl font-bold text-center mb-16">Testimonials</h1>
        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
        ))}
        </div>
    </div>
  );
};

export default Testimonials;
