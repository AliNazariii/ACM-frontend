import React from "react"
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'

class TimelineContainer extends React.Component{
    render() {
        return (
            <div>
                <Timeline lineColor={'#ddd'}>
                    <TimelineItem
                        key="001"
                        dateText="17th to 28th of October 2019"
                        style={{ color: '#4b82c3' }}
                        dateInnerStyle={{ background: '#4b82c3' }}
                    >
                        <h3>Registration Dates</h3>
                        <p>
                            The contest will be held both online and on-site.<br></br>
                            <strong>Registration period of On-Site contest for Iranian teams is from 17th to 28th of October 2019</strong>.<br></br>
                            Others can register until 4th of November 2019.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="002"
                        dateText="5th of November 2019"
                        style={{ color: '#ffd51e' }}
                        dateInnerStyle={{ background: '#ffd51e' }}
                    >
                        <h3>Orientation Day</h3>
                        <p>
                            All Iranian team members in on-site contest, are required to be present at the Orientation Day.                                
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="003"
                        dateText="8th of November 2019"
                        style={{ color: '#b12b1a' }}
                        dateInnerStyle={{ background: '#b12b1a' }}
                    >
                        <h3>On-Site Contest</h3>
                        <p>
                            07:00:00 (UTC)<br></br>
                            <strong>10:30:00 (GMT +3:30 - Tehran, Iran Standard Time)</strong><br></br>
                            The online contest will be held at least two hours after the on-site contest.
                        </p>
                    </TimelineItem>
                </Timeline>
            </div>
        )
    }
}

export default TimelineContainer
 