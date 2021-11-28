import React from 'react';
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {

    return(

        <div className={"content"}>
            <div id="inicio" data-tab-content className="active">
                <h2> Inicio</h2>
                <div>
                    <p>¡Hola! Mi nombre es Aldana! Pero todos me dicen Aldi. Desde que tengo memoria me encanta cocinar y especialmente postres. Asique desarrollé esta página para que juntos podamos disfrutar y conocer más sobre increibles recetas dulces. Haciendo Click en la imagen que más te guste podes empezar a endulzarte.</p>
                </div>
                <div className={"galeria"}>
                    <div className="foto">
                        <img src="images/medialuna.jpeg" width="200" alt="medialuna"/>
                    </div>
                    <div className="foto">
                        <img src="images/pavlova.jpeg" width="200" alt="pavlova"/>
                    </div>
                    <div className="foto">
                        <img src="images/cupcake.jpeg" width="200" alt="cupcake"/>
                    </div>
                    <div className="foto">
                        <img src="images/brownie1.jpeg" width="200" alt="brownie"/>
                    </div>
                    <div className="foto">
                        <img src="images/mouselim.jpeg" width="200" alt="mouselim"/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HomePage;