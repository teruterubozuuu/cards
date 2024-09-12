import "./UserProfile.css"



function UserProfile(props){
  
    return(
        <>

        <div className="card">
                <img src={props.img} alt={props.alt} className="img" />
                <h2>{props.name}</h2>
                <p>{props.age}</p>
                <p>{props.specie}</p>
            </div>
       


        </>
    );
}

export default UserProfile