
import { useState } from "react";

const ReactOne = () =>
{
    const [name,setName] = useState(0);
    return(
        <div>
            <center>
                <div >{name}</div>
                <button onClick ={() => setName(name +1 )}> Pagination</button>
            </center>                
        </div>
    )
}
export default ReactOne;