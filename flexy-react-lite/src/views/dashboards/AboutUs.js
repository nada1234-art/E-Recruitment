// import React from "react";

// const AboutUs = () => {
// return(
//   <div
//   class = "image"
//             style = {{
//                height: "350px",
//                width: "900px",
//                backgroundImage:
//                'url("https://media.istockphoto.com/id/1284691550/fr/vectoriel/bleu-abstrait-g%C3%A9om%C3%A9trique-dynamique-forme-papier-couches-subtile-de-fond-vecteur.jpg?s=612x612&w=0&k=20&c=Zd6Wun5gDTAI52yMkYRmPxHqKYQ9hpeMIg5vWfz2_Os=")',
//                backgroundSize: "cover",
//                backgroundRepeat: "no-repeat",
//             }} >
//     Welcome to our website !
//     </div>
// );
// };
// export default AboutUs;


import {Link} from "react-router-dom"
import Footer from "../../layouts/FullLayout/Footer/Footer";

function LandingPageButton() {
    return <Link to="/dashboards/dashboard2" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                Click Me!
            </span>
        </button>
       
        
    </Link>
    
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "90px"}}>
            Welcome to Khademni !
        </div>
        
        <div style={{"font-size": "36px"}}>
            If you want to discover the categories please click below
        </div>
        <br />
        <LandingPageButton />
    </div>
}
function LandingFrame() {
    const style = {
        "background-image": `url("https://media.istockphoto.com/id/1284691550/fr/vectoriel/bleu-abstrait-g%C3%A9om%C3%A9trique-dynamique-forme-papier-couches-subtile-de-fond-vecteur.jpg?s=612x612&w=0&k=20&c=Zd6Wun5gDTAI52yMkYRmPxHqKYQ9hpeMIg5vWfz2_Os=")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "80%",
        width: "100%"
    }
    return <div style={style}>
        <LandingFrameMessage />

    </div>
}
function AboutUs() {
    return <div>
        <LandingFrame />
        
  
    </div>
}
export default AboutUs