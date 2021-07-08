import './styles/style.scss';
import { renderTodos, todoHandler } from './dom-handlers/todosRender';

window.onload = () => {
    renderTodos();
    todoHandler();
};


