import React from 'react' 
// import { GoogleApiWrapper } from 'google-maps-react'
import "./../styles/footer-style.css"

class MapBox extends React.Component { 
    render() {
        return (
          <div>
            {/* <iframe 
                    className = "iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1145.48700563358!2d51.40774845630745!3d35.70342584247138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e010d1bda6451%3A0xb68840e07e8e513!2sComputer+Engineering+%26+IT+Department!5e0!3m2!1sen!2s!4v1557781039913!5m2!1sen!2s">
                </iframe> */}
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=51.40713214874268%2C35.703197380107085%2C51.40953540802002%2C35.70465233122385&amp;layer=mapnik&amp;marker=35.70392485898455%2C51.40833377838135"
              className = "iframe"
            ></iframe>
          </div>
        );
    }
}

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyABd51B9RqAgclU0GBwzmbF3HdexezCr18'
// })(MapBox);

export default MapBox;
