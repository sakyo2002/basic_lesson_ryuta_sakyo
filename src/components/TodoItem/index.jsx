import './index.css'

export const TodoItem = ({ name, isToday, isCompoleted }) => {
  return <li className='todo-name'>{name}</li>
}
