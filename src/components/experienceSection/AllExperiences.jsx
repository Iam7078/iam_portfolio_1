import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full-Stack Developer Internship",
    company: "PT TIMW",
    date: "2023 - 2023",
    responsibilities: [
      "Building and maintaining web applications.",
      "Worked on both front-end and back-end tasks using modern frameworks.",
      "Helped fix bugs and improve application functionality.",
    ],
  },
  {
    job: "Front-End Developer Internship",
    company: "KPU Kota Salatiga",
    date: "2024 - 2024",
    responsibilities: [
      "Developed user interface for internal web system.",
      "Implemented responsive layouts using HTML, CSS, and JavaScript.",
      "Supported UI testing and performed minor design adjustments.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "PT Nagamas PE",
    date: "2025 - Present",
    responsibilities: [
      "Designing and developing user interfaces for web applications.",
      "Creating responsive layouts and reusable components.",
      "Maintaining the performance of front-end features.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-hover lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
