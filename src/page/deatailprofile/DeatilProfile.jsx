import "./DeatailProfile.css";
import { useParams } from "react-router";
import { profileData } from "../../utils/constant/profile";
const DeatilProfile = () => {
  const { id } = useParams();
  const profile = profileData.find((item) => item.id == id) ;
  const { name, profession, description, background, profileImage } = profile;
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="background"
    >
      <div className="profile-wrapper">
        <div className="gradient"></div>
        <div className="img-section">
        <img src={profileImage} alt={name} />
        </div>
        <div className="details-section">
          <div className="heading">
          <h1>{name}</h1>
          <h3>{profession}</h3>
          </div>
          <div className="discription">
          <p>{description}</p>
          </div>
        <div className="social-section">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="button-section">
          <button>Buy Me Coffee</button>
        </div>
        </div>
        {/* <div className="img-section">
          <img src={profileImage} alt={name} />
        </div>
        <div className="gradient">
        <div className="details-section">
          <h1>{name}</h1>
          <h3>{profession}</h3>
          <p>{description}</p>
        </div>
        <div className="social-section">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="button-section">
          <button>Buy Me Coffee</button>
        </div>
        </div> */}
      </div>
    </div>
  );
};

export default DeatilProfile;
