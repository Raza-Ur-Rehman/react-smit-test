import Card from "../components/common/Card/Card.jsx"
import {profileData} from "../utils/constant/profile.js"
import "../index.css"
const Home = () => {
  return (
    <div>
      <div class="card-container">
        {profileData.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Home
