import React, {useState} from "react";

const Layout = () => {
    const [activeLight, setActiveLight] = useState("")
    const handleLight=(color)=>
    setActiveLight(color)
    return (
            <div className="container d-flex flex-column align-items-center">           
            <div className="semaforo d-flex flex-column align-items-center justify-content-around round py-1 mt-5">
                <div className={`light red ${activeLight==="red"? "active":""}`} onClick={()=>handleLight("red")}></div>
                <div className={`light yellow ${activeLight==="yellow"? "active":""}`}onClick={()=>handleLight("yellow")}></div>
                <div className={`light green ${activeLight==="green"? "active":""}`}onClick={()=>handleLight("green")}></div>                
            </div>
            <div className="poste"></div>
            <div className="floor"></div>
            </div>
    );
}
export default Layout