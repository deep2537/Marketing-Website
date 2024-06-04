import React from 'react'
import "../../styles/counter.css"
const counterData=[
    {
        number:"200",
        text:"Clients",
    },
    {
        number:"300",
        text:"Projects Running",
    },
    {
        number:"400",
        text:"Projects Completed",
    },
]
const Counter = () => {    
  return (
        <section className='counter' id="projects">
            <div className="container">
                <div className="counter__wrapper">
                    {
                        counterData.map((item)=>(
                            <div className="counter__item">
                        <h3 className="counter__number">
                         {item.number}+   
                        </h3>
                        <h4 className="counter__title">{item.text}</h4>
                    </div>
                        ))
                    }
                </div>
            </div>
        </section>
  )
}

export default Counter
