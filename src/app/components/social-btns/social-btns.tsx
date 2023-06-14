import { GitHub } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin";

import "./social-btns.scss"

interface SocialBtnsProps {

}
export function SocialBtns(props : SocialBtnsProps){
    return(
      <div className="social">
           <a href="https://www.instagram.com/lucasphribeiro/">
             <InstaIcon/>
            </a> 
           <a href="https://www.linkedin.com/in/lucas-ribeiro-a24657174/">
            <LinkedInIcon/>
           </a>
           <a href="https://github.com/LucasCastanh0">
            <GitHub/>
            </a>      
      </div>
    )
}