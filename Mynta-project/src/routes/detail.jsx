import { useSelector } from "react-redux"

function Detail(){
     let auth = useSelector(store => store.auth)
     let image = auth.details[10]

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`http://localhost:3000/${image}`}
                        alt={auth.details[1]}
                        className="img-fluid"
                        style={{ maxHeight: '500px', width: '100%', objectFit: 'contain' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2>{auth.details[1]}</h2>
                    <p className="text-muted">{auth.details[2]}</p>
                    <div className="rating mb-2">
                        {auth.details[6]} ⭐ | {auth.details[7]} reviews
                    </div>
                    <div className="price mb-3">
                        <span className="h4 text-success">Rs {auth.details[4]}</span>
                        <span className="text-muted ms-2"><s>Rs {auth.details[3]}</s></span>
                        <span className="text-danger ms-2">({auth.details[5]}% OFF)</span>
                    </div>
                    <p><strong>Return Period:</strong> {auth.details[8]} days</p>
                    <p><strong>Delivery Date:</strong> {new Date(auth.details[9]).toLocaleDateString()}</p>
                    <div className="mt-4">
                        <button type="button" className="btn btn-success">
                            Add to Bag
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail