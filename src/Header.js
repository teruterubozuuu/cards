import "./Header.css"
function Header(props){
    return(
        <div className="header">
        <img src={props.nevermoreSym} alt={props.alt} className="logo"></img>
        <h1 className="title">{props.school}</h1>
        </div>
    );
}

export default Header