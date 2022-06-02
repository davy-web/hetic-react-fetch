import './App.css';

function App() {
  return (

    <div className="main">
      <div className="container a-container" id="a-container">
        <form className="form" id="a-form" method="POST" action="">
          <h2 className="form_title title">Créer un compte</h2>
          <input className="form__input" type="text" placeholder="Name" />
          <input className="form__input" type="text" placeholder="Email" />
          <input className="form__input" type="password" placeholder="Password" />
          <button className="form__button button submit">S'inscrire</button>
        </form>
      </div>
      <div className="container b-container" id="b-container">
        <form className="form" id="b-form" method="POST" action="">
          <h2 className="form_title title">Se connecter au site</h2>
          <input className="form__input" type="text" placeholder="Email" />
          <input className="form__input" type="password" placeholder="Password" />
          <button className="form__button button submit">Se connecter</button>
        </form>
      </div>
      <div className="switch" id="switch-cnt">
        <div className="switch__circle"></div>
        <div className="switch__circle switch__circle--t"></div>
        <div className="switch__container" id="switch-c1">
          <h2 className="switch__title title">Hello !</h2>
          <p className="switch__description description">Pour rester connecté avec nous, veuillez vous connecter avec vos informations personnelles</p>
          <button className="switch__button button switch-btn">Se connecter</button>
        </div>
        <div className="switch__container is-hidden" id="switch-c2">
          <h2 className="switch__title title">Bienvenue !</h2>
          <p className="switch__description description">Entrez vos données personnelles et commencez votre voyage avec nous</p>
          <button className="switch__button button switch-btn">S'inscrire</button>
        </div>
      </div>
    </div>

  );
}

export default App;
