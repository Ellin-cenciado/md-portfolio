/* eslint-disable react/prop-types */
import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { SideBarIcon, SideBarSocial } from "./SideBarIcon";


function NavBar() {
  return (
    <div>
      <nav className="navBar">
        <SideBarIcon icon={<GoHomeFill size="40%" />} render = 'home' text="Home" />

        <SideBarIcon icon={<GoPersonFill size="40%" />} render = 'about' text="About me" />

        <SideBarIcon
          icon={<HiMiniCodeBracketSquare size="40%"  />} render = 'examples' text="Examples"
        />
        <SideBarSocial
          icon={<PiGithubLogoFill size="40%" />}
          text="Github"
          link="https://github.com/Ellin-cenciado"
        />
        <SideBarSocial
          icon={<FaLinkedin size="40%" />}
          text="LinkedIn"
          link="https://www.linkedin.com/in/javier-benitez-773662246/"
        />
      </nav>
    </div>
  );
}

export default NavBar;
