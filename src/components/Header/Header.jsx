import React,{useRef,useEffect} from "react";
import "./Header.css"
const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#service",
    display: "Service",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];
const Header = ({theme,toggleTheme}) => {
  const headerRef=useRef(null);
  const headerFunc=()=>{
      if(document.body.scrollTop >80 || document.documentElement.scrollTop >80)
        {
          headerRef.current.classList.add("header__shrink");
        }
      else{
        headerRef.current.classList.remove("header__shrink");
      }
  }
  useEffect(()=>{
    window.addEventListener("scroll",headerFunc);
    return ()=>window.removeEventListener("scroll",headerFunc);
  },[]);
  const handleClick= e =>{
    e.preventDefault();
    const targetattr=e.target.getAttribute('href');
    const location=document.querySelector(targetattr).offsetTop;
    window.scrollTo({
      left:0,
      top:location-80,
    });
  }
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Digency</h2>
            {/* <p>Grow With Us</p> */}
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <li className="menu__item">
                  <a href={item.path} onClick={handleClick}className="menu__link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="light__mode">
            <span onClick={toggleTheme}>
              {
                theme==="light-theme"?(<span><i class="ri-moon-line"></i>Dark</span>):
                (<span><i class="ri-sun-line"></i>Light</span>)
              }
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
