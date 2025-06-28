import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"
        } justify-end sm:flex-col`}
    >
      <div className="flex flex-col">
        <h2 className="md:text-3xl sm:text-2xl text-hover ">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${align === "left" ? "md:text-right" : "md:text-left"
            }`}
        >
          {year}
        </h2>
        {(name === "Soto Ayam Semarang" || name === "Indra Ruby Collection") && (<a
          href={link}
          className={`text-lg flex gap-2 items-center text-cyan hover:text-hover transition-all duration-500 cursor-pointer 
            ${align === "left" ? "md:self-end" : "md:self-start"} /* Use self-end/self-start instead of justify-self */
            sm:self-center
          `}
        >
          View Demo<BsFillArrowUpRightCircleFill />
        </a>)}
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border-4 border-white">
        <img src={image} alt="website image" className="w-full h-full" />
      </div>
    </motion.div>
  )
}

import PropTypes from "prop-types"

SingleProject.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  align: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default SingleProject
