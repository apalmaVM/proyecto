import React from 'react';
import '../styles/components/pages/TipsPage.css';


const TipsPage = (props) => {

    return(

        <div id="tips" data-tab-content>
                    <div className="descripcion">
                        <h2>Descripción</h2>
                        <h5>En esta sección quería agregar tips y secretos que he aprendido con la práctica. También para que puedan agregar tips o secretos que ustedes tengan y podamos hacer una gran comunidad de recetas.</h5>
                    </div>
                    <div className="tips">
                        <h2>Tips</h2>
                        <div className="tip">
                            <h5>Huevos</h5>
                            <p>Para trabajar con huevos lo mejor es que esten a temperatura ambiente. Siempre chequear que esten frescos, se puede hacer la prueba de si flotan o no en agua. Si flota esta podrido. Si queres limpiarlos hacelo justo cuando vas a usarlos, no antes.</p>
                        </div>
                        <div className="tip">
                            <h5>Leche</h5>
                            <p>La leche se trabaja mejor con la descremada y ,al menos, que lo pida la receta mejor que este a temperatura ambiente. Se puede reemplazar por otros líquidos como leches vegetales o yogurt, le van a dar otra textura pero sirven.</p>
                        </div>
                        <div className="tip">
                            <h5>Azúcar</h5>
                            <p>El azúcar blanca se puede reemplezar por azúcar mascabo o negro, son las mismas proporciones y le da mucha más humedad a la preparación. Se puede usar miel también pero sería un 20% menos que el peso en azúcar.</p>
                        </div>
                        <div className="tip">
                            <h5>Harinas</h5>
                            <p>Hay varias harinas, en pastelería la que más se usa es la 0000 que es la más fina. También la leudante para bizcochuelos y demás, y la 000 es más para panes y pizzas. Si no se tiene harina leudante se puede usar 0000 con polvo de hornear.</p>
                        </div>
                        <div className="tip">
                            <h5>Levadura</h5>
                            <p>La levadura se puede reemplazar por bicarbonato de sodio y yogurt, 1/4 de bicarbonato y 110gr.de yogurt son una cdita. de levadura. La levadura fresca o seca son iguales, en algunas preparaciones queda mejor la fresca, las q usan fermento.</p>
                        </div>
                    </div>
                    <div className="comentarios">
                        <h2>Comentarios</h2>
                        <div className="comentario">
                            <div className="texto">
                                <span className="autor"> Maria Lopez</span>
                                <span className="coment"> Buenas recetas</span>
                            </div>
                        </div>
                        <div className="comentario">
                            <div className="texto">
                                <span className="autor"> Maria Lopez</span>
                                <span className="coment"> Buenas recetas</span>
                            </div>
                        </div>
                        <div className="comentario">
                            <div className="texto">
                                <span className="autor"> Maria Lopez</span>
                                <span className="coment"> Buenas recetas</span>
                            </div>
                        </div>
                        <div className="comentario">
                            <div className="texto">
                                <span className="autor"> Maria Lopez</span>
                                <span className="coment"> Buenas recetas</span>
                            </div>
                        </div>
                    </div>
                </div>
    );

}

export default TipsPage;