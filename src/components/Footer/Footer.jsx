import React from "react";
import "../../components/Footer/footer.css";
const quickLinks01=[
{
    path:"#",
    display:"Marketing"
},
{
    path:"#",
    display:"Analytics "
},
{
    path:"#",
    display:"Commerce"
},
];
const quickLinks02=[
    {
        path:"#",
        display:"Pricing"
    },
    {
        path:"#",
        display:"Documentation "
    },
    {
        path:"#",
        display:"Guides"
    },
    ];
    const quickLinks03=[
        {
            path:"#about",
            display:"About us"
        },
        {
            path:"#",
            display:"Jobs"
        },
        {
            path:"#blog",
            display:"Blogs"
        },
        ];
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__logo">
              <h2>Digency</h2>
              <p className="description">Grow with us</p>
              <p className="small__text description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                sunt voluptate deleniti impedit 
                reiciendis nam delectus odio, 
                voluptatibus iure, nulla vel omnis quam.!
              </p>
            </div>
            <div className="footer__quicker-links">
                <h3 className="quick__links-title">
                  Solutions
                </h3>
                <ul className="quick__links">
                    {
                        quickLinks01.map((item)=>(
                            <li className="quick__link-item"><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div className="footer__quicker-links">
                <h3 className="quick__links-title">
                  Support
                </h3>
                <ul className="quick__links">
                    {
                        quickLinks03.map((item)=>(
                            <li className="quick__link-item"><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div className="footer__quicker-links">
                <h3 className="quick__links-title">
                  Company
                </h3>
                <ul className="quick__links">
                    {
                        quickLinks02.map((item)=>(
                            <li className="quick__link-item"><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>
          </div>
        </div>
        <p className="copyright">Copyright {year},developed by Dev Gada.
        All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
