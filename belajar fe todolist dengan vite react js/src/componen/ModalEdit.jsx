import { useState } from "react";

export default function ModalEdit (promp){
    const [newItem,setNewItem] = useState(promp.edititem.value)

    return(
        <div className="ModalEdit Todo">
            <input type="text" value={newItem} className="InputTodo" onChange={(e)=>{
                //console.log(e.target.value)
                setNewItem(e.target.value)
            }}
            
            onKeyDown={(e)=> {
                if(e.key == "Enter"){
                    if(newItem === '' || newItem === undefined){
                        alert("kamu belum memasukan todo");
                        return
                    }
                    // console.log(newTodo)
                    console.log(newItem);
                    promp.handleSubmitEdit(promp.edititem.key,newItem)
                }
            }}
            
            />
            <button className="ButtonAdd" onClick={()=>{
                //console.log(newItem)
                promp.handleSubmitEdit(promp.edititem.key,newItem)
            }} >Edit todo</button>
        </div>
    )
}