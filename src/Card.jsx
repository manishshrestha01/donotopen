import profilepic from "./assets/manishnobg.png/"
function Card(props) {
  return (
    <div className="card">
       <img className="card-img" src={profilepic} alt="profile-pic" />
        <h2 className="card-h2">{props.h2}</h2>
        <p className="card-p">{props.p}</p>
    </div>
  )
}

export default Card