/* import React from 'react';
import '../styles/components/pages/PersonalPage.css';


const PersonalPage = (props) => {

    return(

        <div id="personal" data-tab-content>
            <h2> Sobre mi</h2>
                <div className="about">
                    <img className="persona" src="images/person1.jpeg" width="200" alt="persona1"/>
                    <div className="info">
                        <p>¡Hola! ¿Cómo están? en esta sección pensé en contarles un poco de mi vida para que sepan por qué amo la pastelería. </p>
                        <p>Soy bioingeniera, me recibí hace unos años y hace poco empecé mi vida laboral como programadora. Amé la carrera que estudié no podría haber pedido otra cosa.</p>
                        <p>Pero adémas siempre me encantó la programación, asique haber conseguido un trabajo donde mezclo las dos cosas parece casi mentira. Pero dirán que tiene qué tiene que ver eso con la pastelería.</p>
                        <p>La verdad es que parte de crecer laboralmente es seguir capacitandose, asique una de mis tareas para crecer laboralmente fue crear un sitio web aplicando nuevas herramientas.</p>
                        <p>Y como no iba a hablar de mi pasión y cable a tierra que es la pastelería, hace unos años pude hacer un curso de capacitación en pastelería y quedé más enamorada, no quería cocinar para vivir pero si que la cocina me diera vida.</p>
                        <p>Por eso fue que decidí escribir y reflejar en este sitio web algunas de las recetas que he aprendido a lo largo de mi vida y algunos de lo secretos que me han ayudado muchísimo.</p>
                        <p>¡Espero que lo disfruten y que me enseñen algunos de los tips y secretos que ustedes tengan! ¡Nos vemos!</p>
                    </div>
                </div>
        </div>    
    );

}

export default PersonalPage; */

import { useState, useEffect } from "react";
import NovedadItem from "../components/novedades/NovedadItem";
import axios from "axios";


 const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() =>{
        const cargarNovedades = async() => { 
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <section className="holder">
            <h2>Novedades</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} />)
            )}
        </section>
    );
}

export default NovedadesPage;