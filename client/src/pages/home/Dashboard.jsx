import "./index.css";
import { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Title from "../../components/Title/Title";


const Dashboard = ({ props }) => {
  const { data } = props;

  const [one, setOne] = useState(0);

  return (
    <div className="main-home">
      <div className="content-home">
        <Title data="DASHBOARD" stylesTitle={`${"title-dashboard"}`} />
        <div className="line-bottom" />
        <div className="container-cards_">
          <div className="item" id="item-1">
            {data?.map((items, index) => {
              if (items) {
                return (
                  <div className="card" key={items._id}>
                    <figure className="figure-student">
                      <FaUserGraduate className="icon-card" />
                    <h4 className="name-student">{items.name}</h4>
                    </figure>
                    <hr/>
                    <div className="container-info-students">
                      <div className="span-info">
                        Course: <span className="spn">{items.asignatura}</span>
                      </div>
                      <div className="span-info">
                        Score: <span className="spn">{items.calification}</span>
                      </div>
                      <div className="span-info">
                        Direction:{" "}
                        <span className="spn">{items.direction}</span>
                      </div>
                      <div className="span-info">
                        Phone: <span className="spn">{items.phone_number}</span>
                      </div>
                      <div className="span-info">
                        E-mail: <span className="spn">{items.email}</span>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            <div className="container-angles">
              <FaAngleLeft
                className="icons-pass"
                onClick={() => setOne(one - 1)}
              />
              <FaAngleRight
                className="icons-pass"
                onClick={() => setOne(one + 1)}
              />
            </div>
          </div>
        </div>
        <nav className="nav-base">
          <div className="container-points">
            <div className="point1"></div>
            <div className="point1"></div>
            <div className="point1"></div>
            <div className="point1"></div>
          </div>
        </nav>
      </div>
      {/* <figure className="figure-student">
                <FaUserGraduate className="icon-card" />
                <h4 className="name-student">{items.name}</h4>
              </figure> */}
      {/* <hr
                style={{
                  // width: "90%",
                  marginBottom: "15px",
                  // marginTop: "-10px",
                }}
              ></hr> */}
      {/* <div className="container-info-students"> */}
      {/* <div className="span-info">
                  Course: <span className="spn">{items.asignatura}</span>
                </div>
                <div className="span-info">
                  Score: <span className="spn">{items.calification}</span>
                </div>
                <div className="span-info">
                  Direction: <span className="spn">{items.direction}</span>
                </div>
                <div className="span-info">
                  Phone: <span className="spn">{items.phone_number}</span>
                </div>
                <div className="span-info">
                  E-mail: <span className="spn">{items.email}</span>
                </div> */}
      {/* </div>
            </div> */}
      {/* ))} */}
    </div>

    // <div className="content-home">
    //     <Title data="DASHBOARD" stylesTitle={`${"title-dashboard"}`} />
    //     <div className="line-bottom" />
    //     <div className="container-cards">
    //       {props?.data.map((items) => (
    //         <div className="card" key={items._id}>
    //           <figure className="figure-student">
    //             <FaUserGraduate className="icon-card" />
    //           </figure>
    //           <h4 className="name-student">{items.name}</h4>
    //           <hr
    //             style={{
    //               width: "90%",
    //               marginBottom: "15px",
    //               marginTop: "-10px",
    //             }}
    //           ></hr>
    //           <div className="container-info-students">
    //             <div className="span-info">
    //               Course: <span className="spn">{items.asignatura}</span>
    //             </div>
    //             <div className="span-info">
    //               Score: <span className="spn">{items.calification}</span>
    //             </div>
    //             <div className="span-info">
    //               Direction: <span className="spn">{items.direction}</span>
    //             </div>
    //             <div className="span-info">
    //               Phone: <span className="spn">{items.phone_number}</span>
    //             </div>
    //             <div className="span-info">
    //               E-mail: <span className="spn">{items.email}</span>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}


export default Dashboard;