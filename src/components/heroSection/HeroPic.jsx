import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="../../public/images/HexaPic.png"
        alt="Ilham Mahfuri"
        className="max-h-[450px] w-auto"
      />
    </motion.div>
  );
};

export default HeroPic;
