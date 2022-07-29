import React,{useState} from 'react';


const Popup = (props) => {
    const { text, status, button_text, handleAccept, setOpenPopup } = props;
    // console.log(props)
    // const [open, setOpen] = useState(status);
    // console.log(open)

    const handleClose = () => {
        setOpenPopup(!Popup.open)
    }
    return (
        <div className='container'>
            <div className='container-popup'>
                <div className='popup'>
                    <h4>{text? text: 'none'}</h4>
                    <div className='icon'>
                        <span className='span' onClick={handleClose}>X</span>
                    </div>
                    {button_text &&
                        <div className='container-btn-popup'>
                            <button className='btn-popup' onClick={handleAccept}>{button_text}</button>
                        </div>
                    }
                    <div className='div'>
                        <div className='circle'></div>
                        <div className='circle-two'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
