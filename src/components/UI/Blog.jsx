import React from 'react';
import "../../styles/blog.css";
import videoImg from "../../images/video.png";
import articleImg from "../../images/article.png";
import caseStudy from "../../images/case-study.png"
const blogData=[
    {
        imgUrl:videoImg,
        title:"Video",
        desc:"To know more about us,Do give a look at ..",
        linkUrl:"#"
    },
    { 
        imgUrl:articleImg,
        title:"Articles",
        desc:"To know more about us,Do give a look at ..",
        linkUrl:"#"
    },
    { 
        imgUrl:caseStudy,
        title:"Case Study",
        desc:"To know more about us,Do give a look at ..",
        linkUrl:"#"
    }
]
const Blog = () => {
  return (
  <section id='blog'className='blog'>
    <div className="container">
        <div className="blog__top-content">
            <h6 className="subtitle">Our Blog</h6>
            <h2>Let's have a look from our <span className="highlight">recent Blog</span></h2>
        </div>
        <div className="blog__wrapper">
            {
                blogData.map((item)=>(
                    <div className="blog__item">
                <h3>{item.title}</h3>
                <div className="blog__img">
                    <img src={item.imgUrl} alt="" />
                </div>
                <p className="description blog__desc">
                  {item.desc}
                </p>
                <div>
                    <a href={item.linkUrl} className="learn__more"><i class="ri-arrow-right-line"></i></a>
                </div>
            </div>
                ))
            }
        </div>
    </div>
  </section>
  )
}

export default Blog
