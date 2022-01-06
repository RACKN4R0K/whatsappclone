import React from 'react';
import './ChatIntro.css'
import Imagem from './whatsappInicio.jpg'


function ChatIntro(){
    return(
        <div className='chatintro'>
            <img src={Imagem} alt="Olá mundo"/>
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta o seu telefone para sincronizar suas mensagens.<br/>Para reduzir o uso de daos, conecte seu telefone a uma rede Wi-FI.</h2>
        </div>
    )
}

export default ChatIntro