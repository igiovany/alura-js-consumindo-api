async function searchAdress(cep) {
  var errorMessage = document.getElementById('erro')
  errorMessage.innerHTML = "";
  try {
    var checkCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var checkCEPconverted = await checkCEP.json()
    if (checkCEPconverted.erro) {
      throw Error('CEP não existente!')
    }
    var cidade = document.getElementById('cidade')
    var endereco = document.getElementById('endereco')
    var estado = document.getElementById('estado')
    var bairro = document.getElementById('bairro')


    cidade.value = checkCEPconverted.localidade
    endereco.value = checkCEPconverted.logradouro
    estado.value = checkCEPconverted.uf
    bairro.value = checkCEPconverted.bairro

    console.log(checkCEPconverted)
    return checkCEPconverted
  } catch (error) {
    errorMessage.innerHTML = `<p>CEP inválido</p>`
    console.log(error)
  }
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => searchAdress(cep.value))