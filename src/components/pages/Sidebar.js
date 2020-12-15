import React,{useState} from "react";
// import Grid from "@material-ui/core/Grid";
import { Hidden } from "components/pages";
import Ship from "resources/wood_ship.svg";
import { Link } from "react-scroll";

function Sidebar({scrollToTop}) {
  const [isShow,setIsShow] = useState(false)
    function isShowHandler(show) {
      setIsShow(show)
    }
  return (
    <>
      {/* <sidebar className="sidebar-overlay" > Overlay</sidebar> */}
      {/* < className="sidebar__btn" > Avatar </section>  */}
      <Hidden mdUp >
        <div className="sidebar-btn txt-mid" onClick={()=>{isShowHandler(!isShow)}} >
            <img src={Ship} alt="AF" width="70px" height="55px" className="relative" style={{bottom:"0px",left:"2px"}} />
        </div>
        <nav className={isShow ? "sidebar sidebar--show" : "sidebar"}>
          <div to="home" className={isShow ? "sidebar__item sidebar__item--show" : "sidebar__item"} onClick={()=>scrollToTop()} > <i>Home</i> </div>
          <SidebarItem to="about"  isShow={isShow}> <i>About</i> </SidebarItem>
          <SidebarItem to="skills" isShow={isShow}> <i>Skills</i> </SidebarItem>
          <SidebarItem to="works"  isShow={isShow}> <i>Work</i> </SidebarItem>
          <SidebarItem to="contact"isShow={isShow} > <i>Contact</i> </SidebarItem>
        </nav>
      </Hidden>
    </>
  );
}

export default Sidebar;

function SidebarItem({to="",children,isShow}){
  //"sidebar__item"
  return (
      <Link
      className={isShow ? "sidebar__item sidebar__item--show" : "sidebar__item"} 
      // className="sidebar__item"
      activeClass="active" to={to}
      spy={true} smooth={true} duration={800}
      >
        {children}
      </Link>
  )
}
