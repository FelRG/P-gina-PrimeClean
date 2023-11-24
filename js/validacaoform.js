			document.getElementById('formulario').addEventListener('submit', function (event) {
			event.preventDefault();

			var nome = document.getElementById('participanteNome').value;
			var email = document.getElementById('participanteEmail').value;
			var numero = document.getElementById('participanteNumero').value;
			var cep = document.getElementById('participanteCEP').value;
			var cidade = document.getElementById('participanteCidade').value;
			var uf = document.getElementById('participanteUF').value;
			var rua = document.getElementById('participanteRua').value;
			var numrua = document.getElementById('participanteNumeroRua').value;
			var complemento = document.getElementById('participanteComplemento').value;
			var opproduto = document.getElementById('participanteOpcaoProduto').value;
			var quantidade = document.getElementById('participanteQuantidade').value;

			if (!nome || !email || !numero || !cep || !cidade || !uf || !rua || !numrua || !complemento || !opproduto || !quantidade) {
			  alert('Por favor, preencha todos os campos.');
			  return;
			}

			// Restante da lógica de validação e envio do formulário...
			// Aqui você pode adicionar o código para enviar o formulário para o servidor

			var mensagemElemento = document.createElement('p');
			mensagemElemento.textContent = 'Seu pedido foi realizado com sucesso.';

			var formularioElemento = document.getElementById('formulario');
			formularioElemento.appendChild(mensagemElemento);
		  });