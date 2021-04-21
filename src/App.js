import{ useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'ZEMA Appointment',
        day:'March 30th at 09:00am',
        reminder:true,
    },

    {
        id: 2,
        text:'Collecting Requirements',
        day:'March 31st at 10:30am',
        reminder:true,
    },

    {
        id:3,
        text:'ZICTA meeting',
        day: 'April 1st at 08:00am',
        reminder:false,
    },
])

//Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id  !== id))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? 
  { ...task, reminder: !task.reminder} : task))
}

return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle = {toggleReminder} /> ): ( 'No Tasks To do')}
    
    </div>
  )
}


export default App;
