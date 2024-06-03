import React from "react";

const Card = () => {
    return (


        <div className="card" style={{ width: "18rem" }}>
            <img src="https://picsum.photos/500/325" className="card-img-top" alt="..." />
            <div className="card-body text-center py-4">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer text-body-secondary text-center py-3">
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
}

export default Card;