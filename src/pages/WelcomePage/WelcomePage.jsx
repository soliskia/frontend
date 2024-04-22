import {useState} from "react";
import logo from '../../assets/logo-ancora.png';
import style from './WelcomePage.module.css';
import {FaVideo} from 'react-icons/fa';

export default function WelcomePage() {
    const [showVideo, setShowVideo] = useState(false);
    return (
        <div className={style.background}>
            {!showVideo && <div className={`${style.overlay} flex-column justify-content-center h-100`}>
                <button className={`${style.button} btn btn-link m-3`} onClick={() => setShowVideo(true)}>
                    <FaVideo className="me-2"/>
                    Video Pitch
                </button>
                <img src={logo} alt="Ancora logo" className={style.logo}/>
                <p className={style.title}>FAÇA SEU PEDIDO AQUI</p>
                <p className={style.subtitle}>Toque na tela para iniciar</p>
            </div>}
            {showVideo && <div className={`${style.overlay} flex-column justify-content-center h-100`}>
                <iframe
                    src="https://www.youtube.com/embed/3i7OBEuRTtI?controls-0"
                    title="YouTube video player"
                    className={style.video}
                />
            </div>}
        </div>
    )
}