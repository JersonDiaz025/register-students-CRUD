import "./index.css";
import { VscError } from "react-icons/vsc";
import { VscPassFilled } from 'react-icons/vsc';

const PopupMsg = (props) => {
  const { msgResponse } = props;
  const { success, response } = msgResponse;
   return (
     <div className="container-header-notification">
       <div
         className="container-notifi"
         style={
           success
             ? { borderLeft: "5px solid green" }
             : { borderLeft: "5px solid red" }
         }
       >
         {success ? (
           <>
             {/* <div className="content-left" /> */}
             <VscPassFilled className="icon-popup-sucess" />
             {response && <p className="text-msg-popup-sucess">{response}</p>}
           </>
         ) : (
           <>
             {/* <div className="content-left-error" /> */}
             <VscError className="icon-popup-error" />
             {response && <p className="text-msg-popup-error">{response}</p>}
           </>
         )}
       </div>
     </div>
   );
}

export default PopupMsg;
