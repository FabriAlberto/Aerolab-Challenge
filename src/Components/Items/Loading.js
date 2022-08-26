import React from 'react'

const Loading = () => {
    return (
        <div className="text-center loading__container d-flex justify-content-center align-items-center">
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading