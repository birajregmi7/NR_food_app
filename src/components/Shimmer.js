import React from 'react'

const Shimmer = () => {
    return (
        <>

            <h1>Shimmer UI Loading ......</h1>
            <div style={{
                margin: '10px',
                display: 'flex  ',
                flexWrap: 'wrap',
                gap: '14px'
            }}>
                {Array(30).fill('hello').map((x) => (<div key={x.index} style={{ width: '300px', height: '350px', backgroundColor: '#EFEFEF' }}></div>))}
            </div>

        </>
    )
}

export default Shimmer
