const OutsBallsAndStrikes = ({ outs, balls, strikes }) => {
    return (
        <>
        <span>Strikes: {strikes}</span>
        <div>Balls: {balls}</div>
        <div>Outs: {outs}</div>
        </>
    )
}

export default OutsBallsAndStrikes