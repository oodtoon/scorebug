import "../App.css"

const OutsBallsAndStrikes = ({ outs, balls, strikes }) => {
    return (
        <>
        
        <div className="baseball-outs">
            <span>Strikes: {strikes}</span>
            <div>Balls: {balls}</div>
            <div>Outs: {outs}</div>
        </div>
        </>
    )
}

export default OutsBallsAndStrikes