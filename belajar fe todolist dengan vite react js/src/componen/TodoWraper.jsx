import { useState } from "react";
import FormTodo from "./FormTodo";
import Todo from "./Todo";

export default function TodoWraper(){
    const [todos,setTodos] = useState([]);


    const handleAddTodo = (newTodo)=>{
        const newArrayTodo = [];
        for(let i=0; i<todos.length;i++){
            newArrayTodo.push(todos[i])
        }
        newArrayTodo.push({
            key:todos.length,
            value:newTodo
        })
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
            <Todo todos={todos} handleDeleteTodo={handleDeleteTodo} />
        </div>
    )
}