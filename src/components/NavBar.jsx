/* eslint-disable react/prop-types */
import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { PiGithubLogoFill } from "react-icons/pi";
import { SideBarIcon, SideBarSocial } from "./SideBarIcon";
import { FaLinkedin } from "react-icons/fa";

function NavBar() {
  return (
    <div>
      <nav className="navBar">
        <SideBarIcon icon={<GoHomeFill size="28" />} render = 'home' text="Home" />

        <SideBarIcon icon={<GoPersonFill size="28" />} render = 'about' text="About me" />

        <SideBarIcon
          icon={<HiMiniCodeBracketSquare size="28"  />} render = 'examples' text="Examples"
        />
        <hr />
        <SideBarSocial
          icon={<PiGithubLogoFill size="28" />}
          text="Github"
          link="https://github.com/Ellin-cenciado"
        />
        <SideBarSocial
          icon={<FaLinkedin size="28" />}
          text="Github"
          link="https://www.linkedin.com/in/javier-benitez-773662246/"
        />
      </nav>
    </div>
  );
}

export default NavBar;
