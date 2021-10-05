import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList/index.jsx'
TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        }, 
    ]

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredTodo, setFilteredTodo] = useState('all');
    function clickTodoList(todo,index){
        console.log(todo,index);
        // Copy todoList ra 1 array list mới
        const newTodoList = [...todoList];

        //Toggle State
        const newTodo ={
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        }

        newTodoList[index] = newTodo;

        // Update TodoList

        setTodoList(newTodoList);
    }
    function HandleShowAll(){
        setFilteredTodo('all');
    }

    function HandleShowComplete(){
        setFilteredTodo('completed');
        
    }

    function HandleShowNew(){
        setFilteredTodo('new');
    }

    const renderTodoList = todoList.filter(todo => filteredTodo === 'all' || filteredTodo === todo.status)

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onClickTodoList={clickTodoList} />  

            <div>
                <button onClick={HandleShowAll}>Show All</button>
                <button onClick={HandleShowComplete}>Show Completed</button>
                <button onClick={HandleShowNew}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;

// rsfp