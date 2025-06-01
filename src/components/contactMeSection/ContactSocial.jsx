import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="#" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Iam7078" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/iam_owh" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
