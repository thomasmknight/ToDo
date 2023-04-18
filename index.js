function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Learn React',
      isCompleted: false,
    },
    {
      text: 'Walk Dog',
      isCompleted: false,
    },
    {
      text: 'Build ToDo App',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = e => {
    var index = Number(e.target.id);
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }
  const prioritize = e => {
    if(e.target.className === "todo-low"){
      e.target.className = "todo-high";
    } else{
      e.target.className = "todo-low";
    }
  }


  return(
  <div className="app" >
    <div className="todo-list" >
      {todos.map((todo, i) => 
         <div className="todo-low" id={i} key={i} property onClick={prioritize}>
          {todo.text}
          <button onClick={removeTodo}>Done!</button>
        </div>)}
      <TodoForm addTodo={addTodo} />
      </div>
      </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
