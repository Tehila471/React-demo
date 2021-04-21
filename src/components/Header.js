import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className = 'header'>
           <h1>{title}</h1> 
           <Button  color={showAdd ? 'crimson' : 'rgba(65, 2, 51, 0.829)'} 
           text={showAdd ? 'close' : 'Add Task'} 
           onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Tehila Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

export default Header
