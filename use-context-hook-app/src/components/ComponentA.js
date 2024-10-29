import {useState , createContext , useContext} from "react" ;
import ComponentB from "./ComponentB";

export const UserContext = createContext();


const ComponentA = () => {

    const [user , setUser] = useState("Ali");



    return(
        <UserContext.Provider value={user}>
        <div>
            <h1> This is the component A</h1>
            <h2> Hello {user}</h2>
            <ComponentB/>
        </div>
        </UserContext.Provider>

    );

}


export default ComponentA