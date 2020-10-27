import React from 'react'

export default function Title({name,title}) {
    return (
        <div className="row-10">
            <div className="col-10 max-auto text-title">
                <h1 className="text-capitalize text-center font-weight-bold">
                     {name} <strong className="text-blue">{title}</strong>

                </h1>

            </div>
        </div>
    )
}
