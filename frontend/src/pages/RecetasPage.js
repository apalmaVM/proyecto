import React from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import '../styles/components/pages/RecetasPage.css';


const brownie =
  "Ingredientes: 270gr. azúcar, 120gr. manteca, 3 huevos, 60gr. chocolate, 20gr. cacao amargo, 60gr. harina 0000, 1 cdita. polvo para hornear. ¨Preparación: Derretir el chocolate junto con la manteca. Batir los huevos con el azúcar. Una vez que ya el chocolate y la manteca este integrados, unirlos con los huevos y la manteca. Tamizar los secos e incorporarlos de a poco con la mezcla previa. Unir con movimientos envolventes y llevar a horno a 180° por 40min. en una fuente previamente enmantecada y enharinada. "
const cupcake =
  "Ingredientes: 3 huevos, 2 tazas de harina leudante, 1/2 taza de cacao, 1/2 taza de leche, 1 taza de azúcar, 1 taza de aceite. ¨Preparación: Batir los huevos con el azúcar. Agregar una taza de harina y unir. Una vez integrado agregar la taza de aceite y unir. Luego agregar el cacao y la leche. Agregar la última taza de harina y unir. Llenar los moldes hasta 3/4 y llevar al horno medio por unos 45min.";
const limon =
  "Ingredientes: 2 limones, 250gr. queso mascarpone, 200ml. de crema de leche, 80gr. de azúcar, 3 claras de huevos. ¨Preparación: Rallar y exprimir los limones. Batir las claras e ir agregando el azúcar de a poco. Montar las claras a punto nieve. Aparte, batir la crema con el queso para conseguir una crema consistente. Incorporar ralladura y jugo de limones. Añadir la mitad de las claras con movimientos suaves y envolventes. Añadir el resto de las claras y repetir. Servir y llevar a refrigerador mínimo durante 3 horas.";
const medialunas =
  "Ingredientes: 1/2 Kg. de harina 0000, 225cc. de leche,25gr. de levadura, 1 huevo, 100gr. azúcar, 15gr. miel, 15gr. sal, 200gr. manteca, 25gr. más de harina. ¨Preparación: Colocar la levadura en la leche tibia y disolver. Volcar la harina en un bol con la sal, hacer una corona. En el medio, agregar a leche y el huevo. Amasar durante unos 10min. Dejar reposar. Colocar la manteca pomada con el resto del harina e integrar. Estirar la masa bien fina y agregar el empaste en el medio y envolverlo con la masa. Dejar reposar envuelvo en film por una hora. Y repetir los últimos 4 pasos 4 veces. Estirar por última vez y cortar triángulos. Armar las medialunas, doblando las puntas y envolviendo el triángulo. Dejar levar unos 40min. Llevar a horno fuerte unos 30min.";
const pavlova =
  "Ingredientes: 300gr. azúcar impalpable, 3 claras, pizca de sal, cdita. de vinagre blanco, cdita. de escencia de vainilla. ¨Preparación: Batir en un bol las claras por 4min. y agregar la sal. Agregar el azúcar de a poco. Agregar la esencia y el vinagre. Y seguir batiendo a velocidad máxima por 10min. Cocinar sobre papel manteca enmantecado. Hornear por 1 hora a 150°.";

const RecetasPage = (props) => {

    return(

        <div id="recetas" data-tab-content>
                    <h2>Recetas</h2>
                    <div className="receta">
                        <img src="images/brownie1.jpeg" alt="Brownie"/>
                        <div className="info">
                            <h5>Brownie</h5>
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Leer más ▼"}
                                readLessText={"Leer menos ▲"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                {brownie}
                            </ReactReadMoreReadLess>
                        </div>
                    </div>
                    <div className="receta">
                        <img  src="images/cupcake.jpeg" alt="cupcake"/>
                        <div className="info">
                            <h5>Cupcake de chocolate</h5>
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Leer más ▼"}
                                readLessText={"Leer menos ▲"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                {cupcake}
                            </ReactReadMoreReadLess>
                        </div>
                    </div>
                    <div className="receta">
                        <img src="images/mouselim.jpeg" alt="limon"/>
                        <div className="info">
                            <h5>Mouse de limón</h5>
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Leer más ▼"}
                                readLessText={"Leer menos ▲"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                {limon}
                            </ReactReadMoreReadLess>
                        </div>
                    </div>
                    <div className="receta">
                        <img src="images/medialuna.jpeg" alt="medialunas"/>
                        <div className="info">
                            <h5>Medialunas</h5>
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Leer más ▼"}
                                readLessText={"Leer menos ▲"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                {medialunas}
                            </ReactReadMoreReadLess>
                        </div>
                    </div>
                    <div className="receta">
                        <img src="images/pavlova.jpeg" alt="pavlova"/>
                        <div className="info">
                            <h5>Pavlova</h5>
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Leer más ▼"}
                                readLessText={"Leer menos ▲"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                {pavlova}
                            </ReactReadMoreReadLess>
                        </div>
                    </div>
                </div>
    );

}

export default RecetasPage;