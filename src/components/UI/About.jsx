import React from "react";
import "../../styles/about.css";
import aboutImg from "../../images/about-us.jpg";
const chooseData=[
    {
        icon:"ri-wifi-line",
        title:"First Working Process",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Perferendis, laudantium? Expedita et odit voluptatibus iuredolores? Aspernatur placeat ducimus excepturi",
    },
    {
        icon:"ri-team-fill",
        title:"Dedicated Management",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Perferendis, laudantium? Expedita et odit voluptatibus iuredolores? Aspernatur placeat ducimus excepturi",
    },
    {
        icon:"ri-customer-service-2-fill",
        title:"24/7 Support",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Perferendis, laudantium? Expedita et odit voluptatibus iuredolores? Aspernatur placeat ducimus excepturi",
    },
]
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Why Choose Us</h6>
            <h2>Specialist in aviding clients on</h2>
            <h2 className="highlight">financial challenges</h2>
            <p className="description about__content-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              labore dolorem obcaecati quasi ipsum voluptates voluptatum
              dignissimos et, amet optio magni soluta aperiam quae consequuntur,
              doloremque, consequatur illum cupiditate sequi.
            </p>
            <div className="choose__item-wrapper">{chooseData.map((item)=>(
                <div className="choose__us-item">
                <span className="choose__us-icon">
                  <i class={item.icon}></i>
                </span>
                <div>
                  <h4 className="choose__us-title">{item.title}</h4>
                  <p className="description">
                   {item.desc}
                  </p>
                </div>
              </div>
            ))}</div>
          </div>
          <div className="about__img">
            <img src={aboutImg} alt="This is about us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
