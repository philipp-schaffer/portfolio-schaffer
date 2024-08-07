import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg z-30">
      <Link
        href={"https://www.instagram.com/phips.design/"}
        className="hover:text-accent translate-all duration-100"
      >
        <RiInstagramLine></RiInstagramLine>
      </Link>
      <Link
        href={"https://www.youtube.com/@philippschaffer3722"}
        className="hover:text-accent translate-all duration-100"
      >
        {" "}
        <RiYoutubeLine></RiYoutubeLine>
      </Link>
      <Link
        href={"https://www.linkedin.com/in/philipp-schaffer-2a1323208/"}
        className="hover:text-accent translate-all duration-100"
      >
        {" "}
        <RiLinkedinLine></RiLinkedinLine>
      </Link>
    </div>
  );
};

export default Socials;
