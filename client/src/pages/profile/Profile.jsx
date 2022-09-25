import "./index.css";
import Title from "../../components/Title/Title";
import ImageUser from "../../components/ImageUser";

const Profile = ({props}) => {

  const { email, password, name_user, isLogged } = props;
    return (
      <div className="main-profile">
        <div className="container-title-profile">
          <Title data="Profile" stylesTitle={`title-profile`} />
          <div className="line-bottom-profile" />
        </div>
        <div className="container">
          <div className="container-photo">
            <ImageUser width="200px" height="auto" />
            <Title data={name_user} stylesTitle={`name-profile`} />
          </div>
          <div className="container-dates">
            <div className="card-body">
              <div className="row-profile">
                <div className="col-sm-3">
                  <p className="name">Username:</p>
                </div>
                <div className="content-date">
                  <p className="text-profi">{name_user && name_user}</p>
                </div>
              </div>
              <hr />
              <div className="row-profile">
                <div className="col-sm-3">
                  <p className="name">Email</p>
                </div>
                <div className="content-date">
                  <p className="text-profi">{email && email}</p>
                </div>
              </div>
              <hr />
              <div className="row-profile">
                <div className="col-sm-3">
                  <p className="name">Password</p>
                </div>
                <div className="content-date">
                  <p className="text-profi">*********</p>
                </div>
              </div>
              <hr/>
              <div className="row-profile">
                <div className="col-sm-3">
                  <p className="name">Phone</p>
                </div>
                <div className="content-date">
                  <p className="text-profi">(097) 234-5678</p>
                </div>
              </div>
              <hr />
              <div className="row-profile">
                <div className="col-sm-3">
                  <p className="name">Role:</p>
                </div>
                <div className="content-date">
                  <p className="text-profi">{isLogged && "Admin"}</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="container-btn-profile">
              <button type="submit" className="btn-profile">
                Edit user
              </button>
              <button type="submit" className="btn-profile-save">
                Save dates
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;
