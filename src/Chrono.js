import React,{useState} from 'react'

const Chrono = () => {
    const [seconds,setSeconds]=useState({
        seconds:0,
        milseconds : 0,
        hours:0,
        minutes:0,
        start:false
    })

    setInterval(() => {
        if(seconds.start) {
            setSeconds({
                milseconds:seconds.milseconds + 1000,
                hours: seconds.milseconds / 3600000,
                minutes: ( seconds.milseconds % 3600000) / 60000,
                seconds :(( seconds.milseconds %3600000) %60000) /1000
            }, 1000)
        }
        
    }, 1000);

    const Clicked = ()=>{
        setSeconds ({
            start:!seconds.start
            
        })
    }
    
    return (
        <div>
            <h1>{seconds.milseconds}</h1>
            <h1>{seconds.seconds}</h1>
            <h1>{seconds.hours}</h1>
            <h1>{seconds.minutes}</h1>
            <button onClick={Clicked}>Start</button>
        </div>
    )
}

export default Chrono
