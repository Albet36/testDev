
import { useState } from "react"

export const Button = ({children}) => {
    const [handleComponent,setHandleComponent] = useState(false);
    /*const [active,setActive] = useState(false); */
    const changeComponent = () => {
        setHandleComponent(handleComponent => !handleComponent);
    }
    console.log(handleComponent);
    let toggleActive  = handleComponent ? "w-5 h-5  rounded-full m-2 transition bg-gray-400 " : "w-5 h-5  rounded-full m-2 transition bg-black"
    console.log(handleComponent);
    return(
      <div>
      <button onClick={changeComponent} type="button" className={`${toggleActive}`}></button>
      </div>  
    )
}