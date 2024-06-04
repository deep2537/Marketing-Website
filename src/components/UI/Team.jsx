import React from 'react';
import "../../styles/team.css";
import team01 from "../../images/team-01.png";
import team02 from "../../images/team-02.png";
import team03 from "../../images/team-03.png";
import team04 from "../../images/team-04.png";
const teamMembers=[{
    imgUrl:team01,
    name:"Deep Gada",
    position:"Managing Partner"
},{
    imgUrl:team02,
    name:"Jag Joshi",
    position:"Founder"
},{
    imgUrl:team03,
    name:"Aditya Tiwari",
    position:"Managing Partner"
},{
    imgUrl:team04,
    name:"Kunal",
    position:"Director"
}]
const Team = () => {
  return <section>
    <div className="container">
        <div className="team__content">
            <span className="subtitle">Our Team</span>
            <h2>Meet <span className="highlight">Our Team</span></h2>
        </div>
        <div className="team__wrapper">
           {
            teamMembers.map((item)=>(
                <div className="team__item">
                <div className="team__img">
                    <img src={item.imgUrl} alt="" />
                </div>
                <div className="team__details">
                    <h4>{item.name}</h4>
                    <p className="description">{item.position}</p>
                    <div className="team__member-social">
                        <span><i class="ri-linkedin-box-fill"></i></span>
                        <span><i class="ri-twitter-x-fill"></i></span>
                    </div>
                </div>
            </div>
            ))
           }
        </div>
    </div>
  </section>
}

export default Team
