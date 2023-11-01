import { useState } from "react"


export default function FormTodo(handleAddTodo){
    const [newTodo,setNewTodo] = useState();

    //console.log(handleAddTodo.handleAddTodo)
    return(
        <div className="FormTodo">
            <input id="inputTodo" type="text" className="InputTodo" placeholder="masukan todo kamu" 
            onChange={(e)=>{
                setNewTodo(e.target.value)
            }}
            onKeyDown={(e)=> {
                if(e.key == "Enter"){
                    if(newTodo === "" || newTodo === undefined){
                        alert("kamu belum memasukan todo");
                        return
                    }
                    // console.log(newTodo)
                    setNewTodo(e.target.value)
                    handleAddTodo.handleAddTodo(newTodo)
                    document.getElementById("inputTodo").value = "";
                    setNewTodo("");
                }
            }}
            />
            <button className="ButtonAdd" onClick={
                ()=>{
                    // console.log(newTodo)
                    if(newTodo === "" || newTodo === undefined){
                        alert("kamu belum memasukan todo");
                        return
                    }
                    handleAddTodo.handleAddTodo(newTodo)
                    document.getElementById("inputTodo").value = "";
                    setNewTodo("");
                }
            } >Add Todo</button>
        </div>
    )
}