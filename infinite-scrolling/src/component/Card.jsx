function Card({ key,d }){
    return(
        <>
            <div className="col-md-3 mt-5">
                <div className="card">
                    <div className="card-body">
                        <img src={d.download_url} alt="" width="100%" height="270px"/>
                        <p>{d.author}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card