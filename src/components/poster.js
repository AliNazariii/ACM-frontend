import React from 'react';
import "./styles/poster.css"
import { NavLink } from 'react-router-dom'




class Poster extends React.Component { 
    constructor(){
        super()
        this.state = { 
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler ()  {
        this.props.pastContestProvider(this.props.contest)

    }
    
    render(){
        
        
        return (
            <NavLink onClick={() => window.scrollTo(0, 0)}  exact to="/PastContest">
                <div className = "paper-container"  onClick={this.clickHandler} >
                    <div className = "paper">
                        <img
                        className= "poster-image" 
                        src = {this.props.contest.poster}
                        />
                        <div className= "darker-container">
                        <div className = "poster-darker"></div>
                        </div>
                        
                        <div className="poster-year">
                            {this.props.contest.year}
                        </div>
                    </div>
                </div>
            </NavLink>
           
         
        
        ) 

    }
}

export default Poster