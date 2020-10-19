import React from "react"
import "./../styles/body-style.css"

class BodyP1 extends React.Component { 
  
    render() {
        let height = 800; 
        if(window.innerHeight > 800) {
            height = window.innerHeight - 60;
        }
        if(window.innerWidth < 400)
        {
            height = window.innerHeight;
        }
        return(
            <div>
                <div className="container2">
                    <img 
                        className="blur-image" 
                        src ={require("./../../img/topImage.JPG")} 
                        width="100%" height={height}
                        alt="topImage"
                    />
                    <div className="dark-layer"/>
                    <div className="banner-container">
                        <img className="banner1" src ={require("./../../img/banner.png")} alt="banner1"/>
                    </div>
                    <div className="banner-container">
                        <img 
                            className="banner2" 
                            src={require("./../../img/banner2.png")}
                            alt="banner-container"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default BodyP1 