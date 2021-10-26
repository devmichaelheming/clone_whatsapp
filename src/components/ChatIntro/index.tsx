import React from "react";

import styles from "./styles.module.scss";

import introConnection from "../../assets/intro-connection.png";

export function ChatIntro() {
    return (
        <div className={styles.container}>
            <img src={introConnection} alt="whatsapp_conectado"/>
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.<br/>Para reduzir o uso de dados, conecte seu telefone a uma rede WI-FI.</h2>
        </div>
    )
}