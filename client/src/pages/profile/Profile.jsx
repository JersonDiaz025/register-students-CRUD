import "./index.css";
import Title from "../../components/Title/Title";

const Profile = () => {
    return (
      <div className="main-profile">
        {/* <Title data="Profile" stylesTitle={`title-profile`} /> */}
        <div className="container">
          <div className="container-photo"></div>
          <div className="container-dates"></div>
        </div>
      </div>
    );
}

export default Profile;
