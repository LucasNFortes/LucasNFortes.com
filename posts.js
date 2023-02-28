/*Posts*/
class Postagem {
	constructor(titulo, conteudo, data, tags, imagem, destaque) {
		this.titulo = titulo;
		this.conteudo = conteudo;
		this.data = data;
		this.tags = ('Tags: ' + tags);
		this.imagem = imagem;
		this.destaque = destaque;
		this.resumo = (conteudo.substring(0, 100) + '...');
    this.continuealer = 'Continue a ler »'
	}

	exibirResumo() {
		// criar elementos HTML para o resumo da postagem
		const postagemElement = document.createElement('div');
		const tituloElement = document.createElement('h3');
		const dataElement = document.createElement('h4');
    const imagemElement = document.createElement('img');
		const resumoElement = document.createElement('p');
    const tagsElement = document.createElement('ul');
    const continuealerElement = document.createElement('span');

		tituloElement.innerText = this.titulo;
    dataElement.innerText = this.data;
		imagemElement.src = this.destaque;
		resumoElement.innerText = this.resumo;
    tagsElement.innerText = this.tags;
    continuealerElement.innerText = this.continuealer;

		// adicionar o resumo da postagem à página
		postagemElement.appendChild(tituloElement);
		postagemElement.appendChild(dataElement);
		postagemElement.appendChild(imagemElement);
		postagemElement.appendChild(resumoElement);
    postagemElement.appendChild(continuealerElement);
    postagemElement.appendChild(tagsElement);

    // adicionar um evento de clique para abrir o conteúdo completo da postagem
		postagemElement.addEventListener('click', () => {

			const conteudoElement = document.createElement('div');
			const conteudoCompleto = document.createElement('p');
			const imagemCompleta = document.createElement('img');
			conteudoCompleto.innerText = this.conteudo;
			imagemCompleta.src = this.imagem;

			conteudoElement.appendChild(conteudoCompleto);
			conteudoElement.appendChild(imagemCompleta);

      // atualizar a página para exibir a div com o conteúdo completo
      const container = document.querySelector('#posts-container');
      container.innerHTML = '';
      container.appendChild(conteudoElement);
		});
    
		return postagemElement;
	}
}
// carregar os dados do arquivo JSON
fetch('./posts.json')
	.then(response => response.json())
	.then(posts => {
		// criar uma instância do construtor de postagens para cada postagem
		const postagens = posts.map(post => {
			return new Postagem(
				post.titulo,
				post.conteudo,
				post.data,
				post.tags,
				post.imagem,
				post.destaque,
				post.resumo
			);
		});

		// adicionar o resumo de cada postagem à página
		const postsContainer = document.querySelector('#posts-container');
		postagens.forEach(post => {
			postsContainer.appendChild(post.exibirResumo());
		});
	});

