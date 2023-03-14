import React, {  } from "react";

document.getElementById("year").innerHTML = new Date().getFullYear();

/*Formulário*/
class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nome: '',
      Email: '',
      Mensagem: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const endpoint = 'https://formsubmit.co/lucas.fortes5052@gmail.com';
    const data = new FormData();
    data.append('Nome', this.state.Nome);
    data.append('Email', this.state.Email);
    data.append('Mensagem', this.state.Mensagem);

    fetch(endpoint, {
      method: 'POST',
      body: data
    })
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div id="my-form">
        <div className="form">
          <h6>MENSAGEM DIRETA</h6>
          <h1>Mande uma mensagem</h1>
          <form onSubmit={this.handleSubmit}>
            <input className="nome" name="nome" placeholder="Nome" value={this.state.nome} onChange={this.handleChange} />
            <br />
            <input className="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
            <br />
            <input className="mensagem" name="mensagem" placeholder="Mensagem" value={this.state.mensagem} onChange={this.handleChange} />
            <br />
            <button id="send-msg" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Formulario;
/*End Formulário*/

// Verifica se o usuário está acessando o site por um dispositivo móvel
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Se o usuário estiver acessando o site por um dispositivo móvel, redireciona para a página mobile
if (isMobile) {
  window.location.href = "./mobile/index-mobile.html";
}
