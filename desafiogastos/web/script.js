const analise = document.getElementById('analise');
analise.addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo ={
        data: analise.data.value,
        valor: analise.valor.value,
        descricao: analise.descricao.value
    }
    fetch('http://localhost:4000/gastos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    }) 
    .then(response => response.status)
    .then(status => {
        if(status === 201){
            msg3('Analise cadastrada com sucesso!')
        }else{
            msg3('Erro ao cadastrar analise!')
        }
    });
});


fetch('http://localhost:4000/gastos')
    .then(response => response.json())
    .then(gastos => {
        const tabela = document.getElementById('gastos');
        gastos.forEach(gasto => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
                <td>${gasto.gasto_id}</td>
                <td>${new Date(gasto.data).toLocaleDateString('pt-BR')}</td>
                <td>R$ ${parseFloat(gasto.valor).toFixed(2)}</td>
                <td>${gasto.descricao}</td>
                <td><button onclick="deletarDados(${gasto.gasto_id})">Deletar</button></td>
            `;
            tabela.appendChild(linha);
        });
    })

function msg3(mensagem) {
    msg = document.getElementById('msg');
    msg.innerHTML = mensagem;
    setTimeout(() => {
        window.location.reload();
    }, 3000)
}f




function deletarDados(id) {
    if (confirm("Tem certeza que deseja deletar este dado?")) {
        fetch(`http://localhost:4000/gastos/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.status)
        .then(status => {
            if(status === 200){
                msg3('Analise deletada com sucesso!');
            }else{
                msg3('Erro ao deletar analise!');
            }
        });
    }
}



function msg3(mensagem){
    msg = document.getElementById('msg');
    msg.innerHTML = mensagem;
    setTimeout(() => {
        window.location.reload();
    }, 3000);
}