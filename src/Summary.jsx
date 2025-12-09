import data from './data.json'

export default function Result() {
    return(
        <div className='summary-card'>
            <h3>Summary</h3>
            {data.map(item=>(
                <div className='reports-container' style={
                    {
                        backgroundColor: item.bgColor,
                        color: item.color,
                        borderRadius: "15px",
                        padding: "0 10px",
                        margin: "10px 0"
                    }
                }>
                    <div className='group'>
                        <img src={item.icon} alt="" />
                        <p>{item.category}</p>
                    </div>
                    <p style={{color: "black"}}><b>{item.score}</b> / 100</p>
                </div>
            ))}
            <button>Continue</button>
        </div>
    )
}