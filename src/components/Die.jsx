function Die(props){
    // console.log(props)
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#fff",
    }
    return(
        <h3 
            className='die'
            onClick={props.handleClick}
            style={styles}
        >
            {props.value}
        </h3>
    )
}

export default Die