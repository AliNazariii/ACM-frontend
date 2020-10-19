import React from "react"
import "./../styles/body-style.css"
import "./../styles/countdown-style.css"
import { NavLink } from 'react-router-dom'
var FlipDown = require("./countdown")

class BodyP2 extends React.Component { 
    constructor() { 
        super() 
        this.data = {
            backgroundColor: "rgb(165 , 42 ,42)"
        }
        this.mouseExitHandler = this.mouseExitHandler.bind(this)
        this.mouseEnterHndler = this.mouseEnterHndler.bind(this)
    }
    
    componentDidMount () {
        var stopTime = this.props.data.stopTime.toString()
        var stopDate = new Date(stopTime).getTime() / 1000
        var flipdown = new FlipDown(stopDate).start()
    }

    mouseEnterHndler() {
        this.setState({
            backgroundColor: "rgb(191, 32, 32)",

        })
    }

    mouseExitHandler() {
        this.setState({
            backgroundColor: "rgb(165 , 42 ,42)",
        })
    }

    render() {
        return (
            <div>
                <div className="container2">
                    <img 
                        style={{ objectFit: "cover" }} 
                        className= "blur-image" 
                        src={ require("./../../img/bottomImage.JPG") } 
                        height="800" width="100%"
                    />
                    <div className = "dark-layer"/>
                    <p className = "timer-text">Contest starts in</p>
                    <NavLink exact to="/Register">
                        <p onClick={() => window.scrollTo(0, 0)}  
                        className = "timer-text2" 
                        onMouseEnter={this.mouseEnterHndler} 
                        onMouseLeave ={this.mouseExitHandler}
                        style = {this.state}
                        >      
                          REGISTER NOW!
                        </p>
                    </NavLink>
                    <div className ="timer">  
                        <div id="flipdown" className="flipdown"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BodyP2 