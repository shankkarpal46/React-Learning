import PropTypes from 'prop-types'

function UserGreetings(props){

    //through ternary operator
    // Type1:-
    /*return(props.isLoggedIn?<h2 className="welcome-message">Welcome {props.username}</h2>
                            :<h2 className="login-prompt">Please log in to continue!...</h2>)*/


    // Type2:-
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    
    const loginMessage = <h2 className="login-prompt">Please log in to continue!...</h2>
    
    return(props.isLoggedIn?welcomeMessage:loginMessage)
    /*    
    if(props.isLoggedIn){
        return(
        <>
            <h2>{props.username}</h2>            
        </>
    )
    }else{
        return(
            <h2>Please log in to continue!....</h2>
        )
    }*/    
}


UserGreetings.prototypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreetings.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}
export default UserGreetings