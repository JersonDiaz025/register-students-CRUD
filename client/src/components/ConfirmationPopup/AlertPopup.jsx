import "./index.css";

const AlertPopup = (props) => {
  const { text, button_text, handleAccept, dispatch } = props;

  return (
    <div className="container-alert-popup">
      <div className="container-popup">
        <div className="popup">
          <h4>{text ? text : ""}</h4>
          <div className="icon">
            <span className="span" onClick={() => { dispatch({ type: "POPUP_DELETE_USER" }) }}>
              X
            </span>
          </div>
          {button_text && (
            <div className="container-btn-popup">
              <button className="btn-popup" onClick={handleAccept}>
                {button_text}
              </button>
            </div>
          )}
          <div className="div">
            <div className="circle"></div>
            <div className="circle-two"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertPopup;
