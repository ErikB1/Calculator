import "./Screen.css"
import { text } from "../Text";
import { useRecoilState } from "recoil";

const Screen=()=>{
    let [print, setPrint]=useRecoilState(text)
    return(
        <p className="expression">{print}</p>
    )
}

export default Screen