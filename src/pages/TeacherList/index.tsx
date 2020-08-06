import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
             <form id="search-teachers">
                 <div className="input-block">
                     <label htmlFor="subject">Matéria</label>
                     <input type="text" id="subject"/>
                 </div>

                 <div className="input-block">
                     <label htmlFor="week_day">Dia da semana</label>
                     <input type="text" id="week_day"/>
                 </div>

                 <div className="input-block">
                     <label htmlFor="time">Hora</label>
                     <input type="text" id="time"/>
                 </div>
             </form>
            </PageHeader> 
            <main>
             <article className="teacher-item">
              <header>
                  <img src="https://avatars3.githubusercontent.com/u/22194173?s=460&u=6e726085b669c2ed1f5d543356ecf9b82ed71b3a&v=4" alt="Matheus Cândido"/>
                  <div>
                      <strong>Matheus Cândido</strong>
                      <span>Música</span>
                  </div>
              </header> 

              <p>
                  Apaixonado por música instrumental e sertanejo!
                  <br /> <br />
                  Começou com o violão da vó que estava parado em cima do guarda-roupa e hoje é um dos maiores músicos do país. Já compus e produziu músicas para Henrique e Juliano, Zé Neto e Cristiano e outros artistas.
              </p>

              <footer>
                  <p>
                      Preço/hora
                      <strong>R$ 120,00</strong>
                  </p>
                  <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                  </button>
              </footer>
             </article>
            </main>
       </div>
    )
}

export default TeacherList;