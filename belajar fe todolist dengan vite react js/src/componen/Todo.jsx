export default function Todo(promp){
    //console.log(todos.todos);
    return(
        <div>
            {
                promp.todos.map((e)=>{
                    //console.log(e)
                    return(

                        <div className="Todo" key={e.key} ><h1>{e.value}</h1>
                        <button className="TodoButton" onClick={
                            ()=>{
                               promp.handleSetEdit(e.key,e.value);
                            }
                        }>edit</button>
                        <button className="TodoButton" onClick={
                            ()=>{
                                promp.handleDeleteTodo(e.key);
                            }
                        } >del</button></div>
                    )
                })
            }
        </div>
    )
}