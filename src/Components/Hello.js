import React from "react";

const Hello = (props) =>{

    console.log(props);

    return(
        <div>
            <h1>I am a Upcomming Software Developer</h1>
            <p>I am also a Founder of my own Componies</p>
            {props.children}
            <hr/>
        </div>
    )
}

export default Hello;