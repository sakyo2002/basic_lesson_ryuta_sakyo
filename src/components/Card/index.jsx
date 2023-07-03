import PropTypes from 'prop-types'
import './index.css'

export const Card = () => {
  return (
    <div className='card'></div>
  )
}

Card.propTypes = {
  children: PropTypes.node
}

Card.defaultProps = {
  children: null
}
