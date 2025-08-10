function Card({d}){
    return(
        <>
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <img src={d.image} alt="" width="100%" height="240px" />
                        <h5 style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{d.title}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card