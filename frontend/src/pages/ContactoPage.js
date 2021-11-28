import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../styles/components/pages/ContactoPage.css';


const ContactoPage = (props) => {

    const initialForm = {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
        axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(initialForm)
        }
    }
    
    return(

        <div id="contacto" data-tab-content>
                    <div className="columna left">
                        <h2>Contacto</h2>
                        <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                            <p>
                                <label for="">Nombre</label>
                                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                            </p>
                            <p>
                                <label for="">Email</label>
                                <input type="text" name="email" value={formData.email} onChange={handleChange} />
                            </p>
                            <p>
                                <label for="">Teléfono</label>
                                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                            </p>
                            <p>
                                <label for=""> Comentario </label>
                                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                            </p>
                            <p className="acciones"><input type="submit" value="Enviar"/></p>
                            {sending ? <p>Enviando...</p> : null}
                            {msg ? <p>{msg}</p> : null}
                        </form>
                    </div>
                    <div className="columna right">
                        <h2>También buscame en:</h2>
                            <ul>
                                <li>Telefono: 2615321456</li>
                                <li>Email: apalma.visualmedica@gmail.com</li>
                                <li>Instagram: </li>
                                <li>Linkedin: </li>
                                <li>Facebook: </li>
                            </ul>
                    </div>
        </div>
            
    );

}

export default ContactoPage;