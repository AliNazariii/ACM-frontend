import React from "react"
import { Button, Select, Grid, FormControl, Input, InputLabel, MenuItem } from '@material-ui/core';
import OnlinecontestantFields from "./OnlinecontestantFields"
import PeopleIcon from '@material-ui/icons/People';
import ReCAPTCHA from "react-google-recaptcha";
import "./../styles/register.css"
import axios from 'axios'

class OnlineRegister extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            team_name: "",
            institution: "",
            country: "",
            contestant1: {

            },
            contestant2: {

            },
            contestant3: {

            },
        }
        this.contestantChange = this.contestantChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    onChange(value) {
        console.log("Captcha value:", value);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    contestantChange(contestantNumber, contestant) {
        if (contestantNumber === '1') {
            this.setState({
                contestant1: contestant
            })
        }
        else if(contestantNumber === '2') {
            this.setState({
                contestant2: contestant
            })
        }
        else if(contestantNumber === '3') {
            this.setState({
                contestant3: contestant
            })
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (typeof this.state.contestant1.rules === 'undefined') {
            alert("Please check Rules!")
        }
        else if (typeof this.state.contestant2.rules === 'undefined') {
            alert("Please check Rules!")
        }
        else if (typeof this.state.contestant3.rules === 'undefined') {
            alert("Please check Rules!")
        }
        else if (!this.state.contestant1.rules === true &&  !this.state.contestant2.rules === true && !this.state.contestant3.rules === true) {
            const teamName = this.state.team_name;
            const [cont1, cont2, cont3] = [this.state.contestant1, this.state.contestant2, this.state.contestant3];
            const reqBody = {
                name: teamName,
                institution: this.state.institution,
                contestants : [
                    cont1, cont2, cont3
                ]
            }
            axios.post(process.env.REACT_APP_URL+'/api/register/team/online', reqBody).then(res => {
                if (res.status >= 400 && res.status < 500) {
                    console.log("Haji :_");
                }
                else if (res.status >= 200 && res.status < 300)
                {
                    console.log("successful");
                }
            })
        }
        else {
            alert("New Error!")
        }
    }

    render() {
        console.log(this.props.data)
        return(
            <form className="register_container" onSubmit={this.onSubmit}>                
                <h1 className="register_page_header">OnLine Contest Registration</h1>
                <h3 className="register_page_second_header">19th Amirkabir International Collegiate Programming Contest - 8th of November 2019</h3>
                <div className="register_page_p">
                    <p> 
                        If your team name was not in the registerd teams list 24 hours after regitration, please inform us by:<br/>
                        Email: <a href="mailto:ceit.ssc94@gmail.com">ceit.ssc94@gmail.com</a><br/>
                        Telegram: <a href="https://t.me/ceitssc">@ceitssc</a> <br/>
                    </p>
                </div>
                <div className="team_box">
                    <div className="team_header_box">
                        <PeopleIcon />
                        <h2 className="team_header">Team Information</h2>
                    </div>
                    <div>
                        <FormControl required>
                            <InputLabel htmlFor="team_name">Team Name</InputLabel>
                            <Input
                                className="text_box"
                                name="team_name"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormControl>                    
                        <FormControl required>
                            <InputLabel htmlFor="institution">Institution</InputLabel>
                            <Input
                                className="text_box"
                                name="institution"
                                type="text"
                                placeholder="Amirkabir University of Technology"
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor="country">Country</InputLabel>
                            <Select
                                className="text_box"
                                value={this.state.country}
                                name="country"
                                onChange={this.handleChange}
                            >
                                {/* {this.props.data.map(item => (
                                        <MenuItem value={item}>
                                            {item.name}
                                        </MenuItem>
                                    ))
                                } */}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <br/>
                <OnlinecontestantFields
                    memberNumber="1"
                    contestant={this.contestantChange}
                />
                <br/>
                <OnlinecontestantFields
                    memberNumber="2"
                    contestant={this.contestantChange}
                />
                <br/>
                <OnlinecontestantFields
                    memberNumber="3"
                    contestant={this.contestantChange}
                />
                <Grid align="center">
                    <ReCAPTCHA
                        className="recaptcha"
                        sitekey="telegram group :)"
                        onChange={this.onChange}
                    />
                </Grid>
                <Grid align="center">
                    <Button 
                        style={{fontFamily: "inherit", marginTop: "20px"}} 
                        color="primary" 
                        variant="contained" 
                        className="submit_button"
                        type="submit"
                        onClick={this.onSubmit}
                    >
                        submit
                    </Button>
                </Grid>
            </form>
        )
    }
}

export default OnlineRegister