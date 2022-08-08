import React, { useState, useEffect } from "react";

const Countdown = (props) => {

    console.log(props.countDownTo)

    const [counter,setCounter] = useState(props.countDownTo) ;

    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1) , 1000) ;
        return () => clearInterval(timer) ;
    }, [ counter ])

    return (
        <span>
            {counter} seconds
        </span>
    )
}

export default Countdown ;