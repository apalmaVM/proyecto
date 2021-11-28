import React from 'react';
import '../../styles/components/layout/Header.css';


const Header = (props) => {

    return (
        
        <header>
            <div className="holder">
                <img src="images/cakeicon.png" width="100" alt="Recetas"/>
                <h1>RECETAS</h1>
            </div>
        </header>
    )

}

export default Header;  