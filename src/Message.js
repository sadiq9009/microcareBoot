import { useEffect } from "react";






const Message =({props}) => {

useEffect(()=>{
console.log('everytime component loads')

},[])

return(
<p>Hello  {props}</p>



);
}

export default Message;