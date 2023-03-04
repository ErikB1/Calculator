import "./Buttons.css"
import { text } from "../Text";
import { useRecoilState } from "recoil";



const Buttons=()=>{
    
    const [updatedText, setUpdatedText]=useRecoilState(text);

    const nshanner=["+","-","/","*","%"];
    const write=(a)=>{
        if(typeof(a)==="number"&&updatedText[updatedText.length-1]==="0")
        {
            setUpdatedText(updatedText.slice(0,updatedText.length-1)+a);
            return;
        }
        if(nshanner.includes(a)&&nshanner.includes(updatedText[updatedText.length-1]))
        {
            setUpdatedText(updatedText.slice(0,updatedText.length-1)+a)
        }
        else {
            setUpdatedText(updatedText+a)
        }

    }
    const result=()=>{
        if(nshanner.includes(updatedText[updatedText.length-1]))
        setUpdatedText(String(eval(updatedText.slice(0,updatedText.length-1))))
        else
        setUpdatedText(String(eval(updatedText)))
    }

    const erase=()=>{
        if(updatedText.length!==1)
        setUpdatedText(updatedText.slice(0,updatedText.length-1))
        else
        setUpdatedText("0")
    }
    const clear=()=>{
        setUpdatedText("0")
    }


    return(
        <section className="buttons">
            <button onClick={()=>write(7)}>7</button>
            <button onClick={()=>write(8)}>8</button>
            <button onClick={()=>write(9)}>9</button>
            <button onClick={()=>write("/")}>/</button>
            <button onClick={()=>write(4)}>4</button>
            <button onClick={()=>write(5)}>5</button>
            <button onClick={()=>write(6)}>6</button>
            <button onClick={()=>write("*")}>*</button>
            <button onClick={()=>write(1)}>1</button>
            <button onClick={()=>write(2)}>2</button>
            <button onClick={()=>write(3)}>3</button>
            <button onClick={()=>write("-")}>-</button>
            <button onClick={()=>write(0)}>0</button>
            <button onClick={()=>write(".")}>.</button>
            <button onClick={()=>write("+")}>+</button>
            <button onClick={()=>write("%")}>%</button>
            <button style={{"grid-column":"2"}} onClick={erase}>Erase</button>
            <button style={{"grid-column":"3"}} onClick={clear}>Clear</button>
            <button style={{"grid-column":"4"}} className="result" onClick={result}>=</button>
        </section>
    )
}

export default Buttons;