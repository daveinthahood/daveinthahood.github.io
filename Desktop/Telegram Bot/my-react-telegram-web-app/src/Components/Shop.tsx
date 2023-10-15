import React from "react";

function Shop() {
  return (
    <div>
      <h2> Shop </h2>
      <div className="cards-box">
        <div className="items-cards">
          <div className="items-card-single">
            <h3> Discord Server</h3>
            <p> Posso creare il vostro server Discord per gestire la vostra community</p>
            <button className="first_button"> Chiedimi Informazioni </button>
          </div>
        </div>

        <div className="items-cards">
          <div className="items-card-single">
            <h3> Telegram Channel</h3>
            <p> Posso creare il vostro canale Telegram per gestire la vostra community</p>
            <button className="first_button"> Chiedimi Informazioni </button>
          </div>
        </div>

        

        <div className="items-cards">
          <div className="items-card-single">
            <h3> ServiceNow Developer </h3>
            <p> Accetto ogni tipo di task per Service Now </p>
            <button className="first_button"> Chiedimi Informazioni </button>
            
          </div>
        </div>

        <div className="items-cards">
          <div className="items-card-single">
            <h3> Full Stack Developer </h3>
            <p> Posso occuparmi del vostro sito web </p>
            <button className="first_button"> Chiedimi Informazioni </button>
          </div>
        </div>

        <div className="items-cards">
          <div className="items-card-single">
            <h3> Social Media Manager </h3>
            <p> Avete bisogno di un Social Media Manager? Sono quello che fa per voi</p>
            <button className="first_button"> Chiedimi Informazioni </button>
          </div>
        </div>

        <div className="items-cards">
          <div className="items-card-single">
            <h3> Graphic Designer </h3>
            <p> Posso disegnare ogni tipo di cosa </p>
            <button className="first_button"> Chiedimi Informazioni </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
