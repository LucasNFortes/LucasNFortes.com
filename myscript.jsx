import React from 'react';

document.getElementById("year").innerHTML = new Date().getFullYear();

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      mensagem: ''
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
    data.append('nome', this.state.nome);
    data.append('email', this.state.email);
    data.append('mensagem', this.state.mensagem);

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


