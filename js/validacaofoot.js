			document.getElementById('newsletterForm').addEventListener('submit', function (event) {
			event.preventDefault();

			var emailInput = document.getElementById('email');
			var email = emailInput.value;

			// Verifica se o campo de e-mail está vazio ou não é um e-mail válido
			if (!email || !validateEmail(email)) {
			  alert('Por favor, insira um endereço de e-mail válido.');
			  return;
			}

			// Restante da lógica de envio do formulário...
			// Aqui você pode adicionar o código para enviar o formulário para o servidor

			// Exibe uma mensagem de sucesso
			alert('Você foi inscrito em nossa newsletter com sucesso!');
			
			// Limpa o campo de e-mail
			emailInput.value = '';
		  });

		  // Função para validar o formato do e-mail usando uma expressão regular
		  function validateEmail(email) {
			var re = /\S+@\S+\.\S+/;
			return re.test(email);
		  }