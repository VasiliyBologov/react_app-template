import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parrent</button>
        </div>
    )
}

export default ChildComponent
