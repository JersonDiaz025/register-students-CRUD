import React,{useState} from 'react';


const Popup = (props) => {
    const { text, status } = props;
    // console.log(props)
    // const [open, setOpen] = useState(status);
    // console.log(open)

    // const handlePopup = () => {
    //     setOpen(open);

    // }
    return (
        <div className='container'>
            <div className='container-popup'>
                <div className='popup'>
                    <h4>{text? text: 'none'}</h4>
                    <div className='icon'>
                        {/* <span className='span' onClick={handlePopup}>X</span> */}
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
