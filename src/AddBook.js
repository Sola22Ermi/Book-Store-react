import {useState} from 'react'

const AddTask = ({onAdd, storeTask}) => {

    const[text, setText] = useState('')
    const[day, setDay] = useState('')
    const[reminder, setReminder] = useState(true)

        
    const onSubmit=(e) => {
        e.preventDefault()

        if(!text) {
            alert('please add a task')
            return
        }
        onAdd ({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)

    }
    return (
        <form className='add-form' onSubmit= {onSubmit}>
            <div className= 'form-control'>
                <label>add book title       </label>
                <input type = 'text' placeholder='Add task' 
                value = {text} onChange={(e)=> setText(e.target.value)}/>

            </div>
            <div className= 'form-control'>
                <label>Comment here...</label>
                <input type = 'text' placeholder='Add task' 
                value = {day} onChange={(e)=> setDay(e.target.value)}/>

            </div>
            <div className= 'form-control form-control-check'>
                <label>Set reminder</label>
                <input type = 'checkbox'
                value = {reminder} 
                onChange={(e)=> setReminder(e.currentTarget.checked)}/>
            </div>

            <input type= 'submit' value='submit book' 
            />
            
        </form>
    )
}

export default AddTask
