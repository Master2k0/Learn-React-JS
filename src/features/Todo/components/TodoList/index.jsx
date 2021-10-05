import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss'


// Kiểm tra kiểu dữ liệu đầu vào 
TodoList.propTypes = {
    todoList: PropTypes.array,
    onClickTodoList: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onClickTodoList: null,
};

function TodoList(props) {
    const {todoList, onClickTodoList} = props;

    function ClickTodo(todo,index){
        if(!onClickTodoList) return;
        onClickTodoList(todo,index);
    }
    return (
        <ul className="todo-list">
            {todoList.map((todo,index) =>(
                <li key={todo.id} 
                    className={classnames({
                        'todo-Item': true,
                        completed: todo.status === 'completed'
                    })}
                    onClick={
                        () => ClickTodo(todo,todo.id-1)
                        
                    }
                >
                    {todo.title}
                </li> 
            ))}
        </ul>
    );
}

export default TodoList;