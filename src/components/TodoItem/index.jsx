import PropTypes from 'prop-types'
import './index.css'

export const TodoItem = ({ name, isToday, isCompoleted }) => {
  return <li className='todo-name'>{name}</li>
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  isCompoleted: PropTypes.bool.isRequired,
}
