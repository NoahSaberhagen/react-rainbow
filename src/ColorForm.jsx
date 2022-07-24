import React, { useState } from 'react';

export default function ColorForm(props) {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        props.addColor(input)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}