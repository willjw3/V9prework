import React from "react"


const StrikeCard = (props) => {
    
    return (
        <div className="table-row border-bottom text-light">
            <p className="d-inline-block text-center mt-4">{props.name}</p>
            <p className="d-inline-block text-center mt-4">{props.id}</p>
            <p className="d-inline-block text-center mt-4">{props.nametype}</p>
            <p className="d-inline-block text-center mt-4">{props.recclass}</p>
            <p className="d-inline-block text-center mt-4">{props.mass}</p>
            <p className="d-inline-block text-center mt-4">{props.fall}</p>
            <p className="d-inline-block text-center mt-2">{props.year}</p>
            <p className="d-inline-block text-center mt-4">{props.latitude}</p>
            <p className="d-inline-block text-center mt-4">{props.longitude}</p>
        </div>
    )
}

export default StrikeCard