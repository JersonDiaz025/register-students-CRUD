import React,{useState} from 'react';


const Popup = (props) => {
    const { text, status } = props;

    const [open, setOpen] = useState(true);

    const handlePopup = () => {
        setOpen(!open);

    }
    return (
        <div className={open? 'container': 'not-container'}>
            <div className='container-popup'>
                <div className='popup'>
                    <h4>{text}</h4>
                    <div className='icon'>
                        <span className='span' onClick={handlePopup}>X</span>
                    </div>
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
