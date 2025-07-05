import Recent_2 from './assets/Recent_2.png'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={Recent_2} alt="Profile-Picture"></img>

            <h2 className='card-title'>Shankar</h2>

            <p className="card-text">I study Computer Science.</p>
        </div>
    )
}

export default Card