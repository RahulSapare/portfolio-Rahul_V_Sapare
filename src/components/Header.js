import React from "react";
import Typed from "react-typed"
import Particles from "react-particles-js";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">

                <h1>Software Development</h1>
                <Typed
                className="typed-text"
                strings={["Web Design","Web Development","Android Application Development","Cross Platform Development(FLUTTER)","Java Application Development"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>

                

            </div>
            <Particles
            className="particles-canvas" 
             params={{
                particles:{
                   number:{
                     value: 20,
                     density:true, 
                     value_area:900
                   }
                },
                shape: {
                    type: "triangle",
                    stroke:{
                        width:10,
                    }
                }
             }}       
         />
        </div>
    )
}

export default Header