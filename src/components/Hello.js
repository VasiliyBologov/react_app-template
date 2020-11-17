import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Vaso</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {
            id: 'hello',
            className: 'hello world'

        },
        React.createElement('h1', null, 'Hello Vaso'))
}

export default Hello
