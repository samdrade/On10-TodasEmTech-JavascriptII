const books = [
    {
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Second Edition",
        subtitle: "A Modern Introduction to Programming",
        author: "Marijn Haverbeke",
        published: "2014-12-14T00:00:00.000Z",
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        subtitle: "A JavaScript and jQuery Developer's Guide",
        author: "Addy Osmani",
        published: "2012-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781449365035",
        title: "Speaking JavaScript",
        subtitle: "An In-Depth Guide for Programmers",
        author: "Axel Rauschmayer",
        published: "2014-02-01T00:00:00.000Z",
    },
    {
        isbn: "9781491950296",
        title: "Programming JavaScript Applications",
        subtitle: "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
        author: "Eric Elliott",
        published: "2014-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        subtitle: "The Definitive Guide for JavaScript Developers",
        author: "Nicholas C. Zakas",
        published: "2016-09-03T00:00:00.000Z",
    },
    {
        isbn: "9781491904244",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        published: "2015-12-27T00:00:00.000Z",
    },
    {
        isbn: "9781449325862",
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        published: "2013-08-02T00:00:00.000Z",
    },
    {
        isbn: "9781449337711",
        title: "Designing Evolvable Web APIs with ASP.NET",
        author: "Glenn Block, et al.",
        published: "2014-04-07T00:00:00.000Z",
    }
]


function books(isbn, title, author, published) {

    var tb = document.getElementById("tbTitle");
    var qtdLinhas = tb.rows.length;
    var linha = tb.inserRow(qtdLinhas);

    var cellIsbn = linha.insertCell(0);
    var cellTitle = linha.insertCell(1);
    var cellAuthor = linha.insertCell(2);
    var cellPublished = linha.insertCell(3);

    cellCodigo.innerHTML = qtdLinhas;
    cellIsbn.innerHTML = isbn;
    cellTitle.innerHTML = title;
    cellAuthor.innerHTML = autor;
    cellPublished.innerHTML = published;
} 

const books = published.map((item) => {
    return item.isbn;
})

function exibirDados(event) {
    event.preventDefault();

    let pegaAutor = document.getElementById('autor').value;
    let pegaTitulo = document.querySelector('#titulo').value;
    let pegaISBN = document.querySelector('#isbn').value;
    let pegaDataPublicacao = document.getElementById('dataPublicacao').value;
    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horarioInsercao = new Date().toLocaleTimeString('pt-br');

    document.getElementById('resposta').innerHTML += '
        <ul>
            <li>
                <strong>Autor: </strong> ${pegaAutor}, <strong>Título: </strong> ${pegaTitulo},
                <strong>ISBN: </strong> ${pegaISBN}, <strong> Data de Publicação:</strong> ${pegaDataPublicacao},
                <strong>Data de Ingresso no Sistema: </strong> ${dataInsercao}, ${horarioInsercao},
            </li>
        </ul>
        '
    limparDados();

    function limparDados() : void
    function limparDados() {
        document.getElementById('author').value = "";
        document.querySelector('#titulo').value = "";
        document.querySelector('#isbn').value = "";
        document.getElementById('dataPublicacao').value ="";
    }
}


funciton criarTabela(event) {
    event.preventDefault();

    let pegaTitulo = document.getElementById('titulo').value; 
    let pegaSubtitulo = document.getElementById('subtitulo').value;
    let pegaISBN = document.getElementById('isbn').value;
    let pegaAutor = document.getElementById('autor').value;
    let pegaPagina = document.getElementById('pages').value;
    let pegaDataPublicacao = document.getElementById('data').value;
    let dataInsercao = new Date().toLocaleString('pt-br');
    let horarioInsercao = new Date().toLocaleTimeString('pt-br');

    let lista = document.getElementById('corpoTabela');

    let lista = document.getElementById('corpoTabela');
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = pegaTitulo;
    tr.appendChild(td);
    let tdSubtitulo = document.createElement('td');
    tdSubtitulo.textContent = pegaSubtitulo;
    tr.appendChild(tdSubtitulo);
    let tdIsbn = document.createElement('td');
    tdIsbn.textContent = pegaIsbn;
    tr.appendChild(tdIsbn);
    let tdAutor = document.createElement('td');
    tdAutor.textContent = pegaAutor;
    tr.appendChild(tdAutor);
    let tdPagina = document.createElement('td');
    tdPagina.textContent = pegaPagina;
    tr.appendChild(tdPagina);
    let tdDataDePublicacao = document.createElement('td');
    tdDataDePublicacao.textContent = pegaDataPublicacao;
    tr.appendChild(tdDataDePublicacao);
    let tempoInsercao = document.createElement('td');
    tempoInsercao.textContent = (`${dataInsercao}, ${horarioInsercao}`)
    tr.appendChild(tempoInsercao);
    let tdButton = document.createElement('td');
    tdButton.appendChild(criarBotao());
    tr.appendChild(tdButton);

    lista.appendChild(tr);


    document.getElementById('corpoTabela').innerHTML += `
        <tr>
            <td>${pegaTitulo}</td>
            <td>${pegaSubtitulo}</td>
            <td>${pegaIsbn}</td>
            <td>${pegaAutor}</td>
            <td>${pegaPagina}</td>
            <td>${pegaDataPublicacao}</td>
            <td>${dataInsercao}, ${horarioInsercao}</td>
        </tr>

    `
    */

}

function criarBotao() {
    let botao = document.createElement('button');
    botao.textContent = "Remover"
    botao.addEventListener('click', function remover(event) {
        let botaoRetornado = event.target;
        let colunaRetornada = botaoRetornado.parentNode;
        let linhaBotao = colunaRetornada.parentNode;
        linhaBotao.remove();
    })
    return botao;
}



// variáveis
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let date = document.querySelector("#date");
let pages = document.querySelector("#pages");
let button = document.querySelector(".button");

// prevenção do botão submit (impede de recarregar a página)
button.addEventListener("click", function (event) {
  event.preventDefault();
});

// função de máscara pro ISBN
function isbnMask() {
  let isbn = document.querySelector("#isbn");

  if (
    isbn.value.length == 3 ||
    isbn.value.length == 5 ||
    isbn.value.length == 8 ||
    isbn.value.length == 15
  ) {
    isbn.value += "-";
  }
}

// função de add livro
function addBook() {
  const containerTable = document.querySelector(".container-table");
  let table = document.querySelector(".tbody");
  let addTr = document.createElement("tr");
  addTr.classList.add("tr-on");
  let addTdTitle = document.createElement("td");
  let addTdAuthor = document.createElement("td");
  let addTdIsbn = document.createElement("td");
  let addTdDate = document.createElement("td");
  let addTdPages = document.createElement("td");
  let addTdDateI = document.createElement("td");
  let addRemove = document.createElement("td");

  if (
    title.value === "" ||
    author.value === "" ||
    isbn.value === "" ||
    date.value === ""
  ) {
    alert("Erro, insira todos os dados nos campos");
  } else {
    // add dados na tabela
    table.appendChild(addTr);
    addTdTitle.textContent = title.value;
    addTr.appendChild(addTdTitle);
    addTdAuthor.textContent = author.value;
    addTr.appendChild(addTdAuthor);
    addTdIsbn.textContent = isbn.value;
    addTr.appendChild(addTdIsbn);
    addTdDate.textContent = date.value;
    addTr.appendChild(addTdDate);
    addTdPages.innerHTML = pages.value;
    addTr.appendChild(addTdPages);

    // data de inserção
    addTdDateI.innerHTML = new Date();
    addTr.appendChild(addTdDateI);

    // remover livro
    addRemove.innerHTML = `<a href="#"><img src="https://freeiconshop.com/wp-content/uploads/edd/minus-flat.png" alt="remover livro" style="width: 1rem;"></a>`;
    addTr.appendChild(addRemove);
    addRemove.addEventListener("click", function () {
      addTr.remove();
    });

    containerTable.classList.add("on");
  }
}

function exibirDados(event) {
    event.preventDefault();

    let pegaTitulo = document.getElementById('title').value;
    let pegaSubtitulo = document.getElementById('subtitle').value;
    let pegaAuthor = document.getElementById('author').value;
    let pegaPages = document.getElementById('pages').value;
    let pegaDate = document.getElementById('date').value;
    let pegaIsbn = document.getElementById('isbn').value;
    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horaInsercao = new Date().toLocaleTimeString('pt-br');

    if (pegaTitulo === "" || pegaAuthor === "" || pegaPages === "" || pegaDate === "" || pegaIsbn === "") {
        alert("Campo obrigatório não preenchido")
    } else {
        document.getElementById('texto').innerHTML += `
    <tr >
        <td> ${pegaTitulo} </td>
        <td> ${pegaSubtitulo} </td>
        <td> ${pegaAuthor}</td>
        <td> ${pegaPages}</td>
        <td> ${pegaDate} </td>
        <td>${pegaIsbn}</td>
        <td> ${dataInsercao} - ${horaInsercao}</td>
        <td> <button class="delete">Remover</button></td>
    </tr>
    `
        limparCampo();

    }
}

function limparCampo() {

    document.getElementById('title').value = "";
    document.getElementById('subtitle').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";
    document.getElementById('date').value = "";
    document.getElementById('isbn').value = "";

}

document.getElementById('texto').addEventListener('click', function removerLinha(event) {
    if (event.target.className === "delete") {
        let botao = event.target.parentElement;
        botao.parentElement.remove();
    }
})
