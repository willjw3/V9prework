import React from "react"


const StrikeCard = (props) => {
    
    return (
        <div className="table-row">
            <p className="d-inline-block text-center">{props.name}</p>
            <p className="d-inline-block text-center">{props.id}</p>
            <p className="d-inline-block text-center">{props.nametype}</p>
            <p className="d-inline-block text-center">{props.recclass}</p>
            <p className="d-inline-block text-center">{props.mass}</p>
            <p className="d-inline-block text-center">{props.fall}</p>
            <p className="d-inline-block text-center">{props.year}</p>
            <p className="d-inline-block text-center">{props.latitude}</p>
            <p className="d-inline-block text-center">{props.longitude}</p>
        </div>
    )
}

export default StrikeCard