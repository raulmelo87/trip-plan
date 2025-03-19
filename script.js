document.getElementById('calcForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const distancia = parseFloat(document.getElementById("distancia").value);
  const precoGasolina = parseFloat(document.getElementById("precoGasolina").value);
  const consumoCarro = parseFloat(document.getElementById("consumoCarro").value);

  if (isNaN(distancia) || isNaN(precoGasolina) || isNaN(consumoCarro) || consumoCarro <= 0) {
    document.getElementById("resultado").textContent = "Por favor, preencha todos os campos com valores válidos.";
    return;
  }

  const custo = (distancia / consumoCarro) * precoGasolina;
  const custoFormatado = custo.toFixed(2);
  document.getElementById("resultado").textContent = `O valor total necessário para essa viagem é de: R$ ${custoFormatado}`;
});
