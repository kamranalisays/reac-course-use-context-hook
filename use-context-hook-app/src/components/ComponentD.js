import { useContext } from "react";

import {UserContext} from "./ComponentA";


const ComponentD = () => {

const user = useContext(UserContext);

    return(
        <div>
            <h1> This is the component D</h1>
            <h2> Hello again from fourth  nexted component : {user}</h2>
        </div>

    );

}

export default ComponentD ;