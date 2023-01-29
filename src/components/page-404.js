import React from "react";
import { useHistory } from "react-router-dom";


function Page_Not_Found(){
    const history=useHistory();
return(

<div>
<h1>Please go back to home</h1>
<button onClick={()=>history.push("/")}>home</button>
</div>
    
)


}


export default Page_Not_Found;