import React from "react"
import axios from "axios"
import BodyP2 from "./BodyP2"

class BodyP2View extends React.Component { 
    state = {   
        countdowns: null
    }

    fetchCountdownItem = () => {
        let apiUrl = process.env.REACT_APP_URL + "/api/countdowns/1"
        axios.get(apiUrl).then(res => {
            this.setState({
                countdowns: res.data
            })
        })
    }

    componentDidMount() {
        this.fetchCountdownItem()
    }

    render() {
        if (!this.state.countdowns) {
            return <div/>
        }
        return (
            <BodyP2 data={this.state.countdowns}/>
        )
    }
}

export default BodyP2View