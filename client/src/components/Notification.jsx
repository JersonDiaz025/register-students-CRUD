import React from 'react';
import { BiError } from 'react-icons/bi';
import { VscPassFilled } from 'react-icons/vsc';

const Notification = (props) => {
  const { styles_text, styles_icon, msg } = props;
  console.log(msg);
    return (
      <div className="container-header-notification">
        <div className="container-notifi">
          {msg && (
            <>
                {styles_icon === 'icon-error' ? <BiError className={styles_icon} />
                    : <VscPassFilled className={styles_icon} />
                }
              <p className={styles_text}>{msg?.response}</p>
            </>
          )}
        </div>
      </div>
    );
}

export default Notification;
