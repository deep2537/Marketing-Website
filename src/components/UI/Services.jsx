import React from "react";
import "../../styles/services.css";
const serviceData = [
  {
    icon: "ri-apps-line",
    title: "Application Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corruptisint praesentium quas in velit, ipsum, saepe tenetur dicta, itaque vel culpa nam cumque quia laboriosam enim similique illo obcaecati magnam.",
  },
  {
    icon: "ri-pages-line",
    title: "Website Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corruptisint praesentium quas in velit, ipsum, saepe tenetur dicta, itaque vel culpa nam cumque quia laboriosam enim similique illo obcaecati magnam.", 
  },
  {
    icon: "ri-clapperboard-fill",
    title: "Video & Content Production",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corruptisint praesentium quas in velit, ipsum, saepe tenetur dicta, itaque vel culpa nam cumque quia laboriosam enim similique illo obcaecati magnam.",  
  },
  {
    icon: "ri-advertisement-fill",
    title: "Performance Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corruptisint praesentium quas in velit, ipsum, saepe tenetur dicta, itaque vel culpa nam cumque quia laboriosam enim similique illo obcaecati magnam.",  
  }
];
const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services__topcontent">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save Time managing your Business with</h2>
          <h2 className="highlight">our best Services</h2>
        </div>
        <div className="services__item-wrapper">
          {
            serviceData.map((item)=>(
                <div className="services__item">
            <span className="service__icon">
              <i class={item.icon}></i>
            </span>
            <h3 className="service__title">{item.title}</h3>
            <p className="description">{item.desc}
            </p>
          </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Services;
