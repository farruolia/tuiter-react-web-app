import todos from "./todos.json";
import TodoItem from "./todoItem";

const TodoList = () => {
    return(
        <>
            <h3>Todo List</h3>
            <ul>
                {
                    todos.map(todo => {
                        return(<TodoItem todo={todo}/>);
                    })
                }
            </ul>
        </>
    );
}
export default TodoList;