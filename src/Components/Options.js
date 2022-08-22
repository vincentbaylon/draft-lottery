import { useState } from 'react'

function Options({ list, setList }) {
    const [name, setName] = useState('')

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleClick = () => {
        if (name !== '') {
            setList([...list, name])
            setName('')
        }
    }

    return (
        <div>
            <br></br>
            <br></br>
            <div className='ui two column centered grid'>
               
                <div className='ui input'>
                    <input value={name} type='text' placeholder='Enter Name' onChange={handleChange}></input>
                </div>
                <button className='huge ui green button' onClick={handleClick}>ADD NAME</button>

            </div>
            <br></br>
            <br></br>
        </div>

    )
}

export default Options