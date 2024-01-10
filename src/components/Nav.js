import React, {useState, useEffect} from 'react';
import '../css/Nav.css'
import {useNavigate} from 'react-router-dom';

function Nav(){
    const [show, setShow] = useState(false);
    const navigate = useNavigate();


    const handleClickHome = e =>{
         e.preventDefault();
        navigate('/');
    }
    const handleClickProfile = e => {
        e.preventDefault();
        navigate('/profile');
    }
    const transitionNav = () =>{
        if(window.scrollY > 100){
            setShow(true);
        }
        else
            setShow(false);
    }

    useEffect(()=>{
        window.addEventListener('scroll', transitionNav);
        console.log(show);
        return ()=> window.removeEventListener('scroll', transitionNav);
    }, [])
    return(
        <div className={`nav ${show &&"nav-black"}`}>
            <div className="nav-content">
                <img onClick={handleClickHome} className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
                <img onClick={handleClickProfile} className="nav-avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />

            </div>


        </div>
    )

}

export default  Nav;