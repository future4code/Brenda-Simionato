import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://scontent.fppb1-1.fna.fbcdn.net/v/t1.6435-9/187041037_1604004526477481_3903060605116232441_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4AgpC-lUFJ0AX-A5Mpy&_nc_ht=scontent.fppb1-1.fna&oh=e602f3be1d034e1a7793e6949fcc936b&oe=60F22CC2"
          nome="Brenda Evellyn Tiba Simionato"
          descricao="Olá, meu nome é Brenda. Sou esteticista e aluna da Labenu, turma Lovelace."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
        
        <CardPequeno
          descricao="E-mail"
          dados="brendaevellyn97@gmail.com"
        />
        <CardPequeno
          descricao="Endereço"
          dados="Rua Cerata Donzeli Bongiovani, 36 - Jardim Novo Bongiovani"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://www.deardegree.com/images/15525813905c8a830e4961f.jpg"
          nome="Unoeste - Universidade do Oeste Paulista"
          descricao="Formanda em Estética e Cosmética."
        />

        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png"
          nome="Labenu"
          descricao="Cursando Web Full Stack - Integral."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
