import { NavLink } from "react-router-dom";

export default function Menu () {
    return(

        <div className= "menu">
            <ul>
                <li><NavLink to = "/" className={({ isActive })=>( isActive ? "activelink" : undefined )}>Homme</NavLink></li>
                <li><NavLink to = "/add" className={({ isActive })=>( isActive ? "activelink" : undefined )}>Add techno</NavLink></li>
                <li><NavLink to = "/list" className={({ isActive })=>( isActive ? "activelink" : undefined )}>All technos</NavLink></li>
            </ul>   
        </div>
    )
}