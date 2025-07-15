function ProfilePicture(){
    
    const imgURL = './src/assets/Recent_2.png'

    // const handleClick = () => console.log("Ouchh!....")
 
    const handleClick = (e) => e.target.style.display = "none" 

    return(<>
        <img onClick={(e)=>handleClick(e)} src={imgURL} alt="Profile Picture" />
    </>) 
}

export default ProfilePicture