import { FunctionComponent } from "react";
import s from './Footer.module.css'
import logoGithub from '../img/Octocat.png'
import logoRsSchool from '../img/rs_school_js.svg'

const imgRsSchool: any = {
  backgroundImage: `url(${logoRsSchool})` 
};

const imgGitHub: any = {
  'background-image': `url(${logoGithub})`
}

export const Footer: FunctionComponent = () => {



  return (
    <div className={s.footer}> 
      <a href="https://github.com/ratomsky/react-game/pulls" ><div className={s.link + ' dasd'} style={imgGitHub}> </div></a>
      <div className={s.link} style={imgRsSchool}> <a href="#" /></div>
    </div>
  );
};
