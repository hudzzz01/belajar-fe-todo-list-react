import { useState } from "react";
import FormTodo from "./FormTodo";
import Todo from "./Todo";
import ModalEdit from "./ModalEdit";

export default function TodoWraper(){
    const [todos,setTodos] = useState([]);
    const [isEdit,setIsEdit] = useState(false);
    const [edititem,setEditItem] = useState({})

    const handleSetEdit = (key,value)=>{
        setIsEdit(true);
        const item = {
            ...edititem,
            key:key,
            value:value
        }
        setEditItem(item)
    }

    const handleSubmitEdit = (key,value)=>{
        setIsEdit(false);
        
        const items = [
            ...todos,
        ]

        for(let i = 0; i<items.length; i++){
            if(items[i].key === key){
                items[i].value = value;
            }
        }

        setTodos(items);
    }


    const handleAddTodo = (newTodo)=>{
        // const newArrayTodo = [];
        // for(let i=0; i<todos.length;i++){
        //     newArrayTodo.push(todos[i])
        // }
        // newArrayTodo.push({
        //     key:todos.length,
        //     value:newTodo
        // })

        const newArrayTodo = [...todos,{key:todos.length,value:newTodo}]

        setTodos(newArrayTodo)
        console.log(newArrayTodo)
        
    }

    const handleDeleteTodo = (key)=>{
        const newArrayTodo = [];
        for(let i=0; i<todos.length;i++){
            newArrayTodo.push(todos[i])
        }
        newArrayTodo.splice(key, 1)
        for(let i=0; i<newArrayTodo.length;i++){
            newArrayTodo[i].key = i;
        }
        setTodos(newArrayTodo)
        // console.log(newArrayTodo)

    }



    return(
        <div className="TodoWraper">
            <FormTodo handleAddTodo={handleAddTodo}/>
            {isEdit?
            <ModalEdit edititem={edititem} handleSubmitEdit={handleSubmitEdit} />
            :
            <Todo todos={todos} handleDeleteTodo={handleDeleteTodo} handleSetEdit={handleSetEdit}/>}
            
        </div>
    )
}