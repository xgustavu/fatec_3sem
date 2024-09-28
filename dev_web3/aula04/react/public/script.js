const form = document.getElementById('form-cliente');
const listaClientes = document.getElementById('clientes-lista');
let clienteSelecionado = null;

// Carregar clientes
async function carregarClientes() {
    const resposta = await fetch('/clientes');
    const clientes = await resposta.json();
    listaClientes.innerHTML = '';
    clientes.forEach(cliente => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${cliente.nome} - ${cliente.email} 
            <button onclick="editarCliente('${cliente._id}', '${cliente.nome}', '${cliente.email}')">Editar</button>
            <button onclick="excluirCliente('${cliente._id}')">Excluir</button>
        `;
        listaClientes.appendChild(li);
    });
}

// Adicionar cliente
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (clienteSelecionado) {
        // Atualizar cliente existente
        const resposta = await fetch(`/clientes/${clienteSelecionado}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email })
        });
        if (resposta.ok) {
            clienteSelecionado = null;
            document.getElementById('atualizar').style.display = 'none';
        }
    } else {
        // Criar novo cliente
        const resposta = await fetch('/clientes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email })
        });
    }

    form.reset();
    carregarClientes();
});

// Função para editar cliente
function editarCliente(id, nome, email) {
    document.getElementById('nome').value = nome;
    document.getElementById('email').value = email;
    clienteSelecionado = id;
    document.getElementById('atualizar').style.display = 'inline';
}

// Função para excluir cliente
async function excluirCliente(id) {
    const resposta = await fetch(`/clientes/${id}`, { method: 'DELETE' });
    if (resposta.ok) {
        carregarClientes();
    }
}

// Carregar clientes na inicialização
carregarClientes();
