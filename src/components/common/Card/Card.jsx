
import { useNavigate } from "react-router";
import "./card.css"
const Card = ({data}) => {
  const navigate = useNavigate();
  const defaultImg = "/public/assets/img/default.png" ;
  const {
    name,
    profession,
    description,
    background,
    profileImage,
    profileLink,
    id,
  } = data;
  return (
    <div className="card-wrapper ">
      <div className="img-wrapper">
        <img src={background} alt="" />
        <div className="profile-img">
          <img src={profileImage ? profileImage : defaultImg}  alt="" />
        </div>
      </div>
      <div className="heading-wrapper">
        <h1>{name}</h1>
        <h5>{profession}</h5>
        <p>{description.slice(0,60)+"..."}</p>
      </div>
      <div className="icon-wrapper">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
      <div className="button-wrapper">
      <button onClick={() => navigate(`/profile/${id}`)}>
        View Profile
      </button>
      </div>
    </div>
  )
}

export default Card
