import React, {useRef} from 'react'
import'../01-useState/counter.css'
const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select()
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input 
            ref={inputRef}
            className='form-control'
            type="text"
            placeholder='Su Nombre' />

            <button 
            className='btn btn-outline-primary mt-5'
            onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}

export default FocusScreen
