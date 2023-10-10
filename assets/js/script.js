const botaoConverter = document.querySelector(".btn-converter");
const moedaPrimariaSelecionada = document.querySelector("#seletor-primario");
const moedaSecundariaSelecionada = document.querySelector(
  "#seletor-secundario"
);
const valorConvertido = document.querySelector(".valor-convertido");
const valorDigitado = document.querySelector(".valor-digitado");

async function converterValor() {
  const inputValor = document.querySelector("#input-valor").value;
  
  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())

  const dolarDoDia = data.USDBRL.high;
  const euroDoDia = data.EURBRL.high;
  const libraDoDia = data.GBPBRL.high;

  //Conversão do real para as demais moedas
  if (
    moedaPrimariaSelecionada.value === "real" &&
    moedaSecundariaSelecionada.value === "dolar"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(inputValor / dolarDoDia);

    valorDigitado.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValor);

  } else if (
    moedaPrimariaSelecionada.value === "real" &&
    moedaSecundariaSelecionada.value === "euro"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(inputValor / euroDoDia);

    valorDigitado.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValor);

  } else if (
    moedaPrimariaSelecionada.value === "real" &&
    moedaSecundariaSelecionada.value === "libra"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(inputValor / libraDoDia);

    valorDigitado.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValor);

  } else if (
    moedaPrimariaSelecionada.value === "real" &&
    moedaSecundariaSelecionada.value === "real"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValor);

    valorDigitado.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValor);
  }

  //Conversão do dolar para as demais moedas
  if (
    moedaPrimariaSelecionada.value === "dolar" &&
    moedaSecundariaSelecionada.value === "dolar"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(inputValor);

    valorDigitado.innerHTML = new Intl.NumberFormat("en-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(inputValor);

  } else if (
    moedaPrimariaSelecionada.value === "dolar" &&
    moedaSecundariaSelecionada.value === "euro"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format((dolarDoDia / euroDoDia) * inputValor);

    valorDigitado.innerHTML = new Intl.NumberFormat("en-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(inputValor);

  } else if (
    moedaPrimariaSelecionada.value === "dolar" &&
    moedaSecundariaSelecionada.value === "libra"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(inputValor * (dolarDoDia / libraDoDia));

    valorDigitado.innerHTML = new Intl.NumberFormat("en-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(inputValor);

  } else if (
    moedaPrimariaSelecionada.value === "dolar" &&
    moedaSecundariaSelecionada.value === "real"
  ) {
    realDoDia = 4.92;

    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValor * dolarDoDia);

    valorDigitado.innerHTML = new Intl.NumberFormat("en-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(inputValor);

  }

  //Conversão do euro para as demais moedas
  if (
    moedaPrimariaSelecionada.value === "euro" &&
    moedaSecundariaSelecionada.value === "dolar"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format((euroDoDia / dolarDoDia) * inputValor);

    valorDigitado.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(inputValor);

  } else if (
    moedaPrimariaSelecionada.value === "euro" &&
    moedaSecundariaSelecionada.value === "euro"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(inputValor);
  } else if (
    moedaPrimariaSelecionada.value === "euro" &&
    moedaSecundariaSelecionada.value === "libra"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format((euroDoDia / libraDoDia) * inputValor);

    valorDigitado.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(inputValor);

  } else if (
    moedaPrimariaSelecionada.value === "euro" &&
    moedaSecundariaSelecionada.value === "real"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValor * euroDoDia);

    valorDigitado.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(inputValor);
  }

  //Conversão da libra para as demais moedas
  if (
    moedaPrimariaSelecionada.value === "libra" &&
    moedaSecundariaSelecionada.value === "dolar"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format((libraDoDia / dolarDoDia) * inputValor);

    valorDigitado.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(inputValor);
  } else if (
    moedaPrimariaSelecionada.value === "libra" &&
    moedaSecundariaSelecionada.value === "euro"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format((libraDoDia / euroDoDia) * inputValor);

    valorDigitado.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(inputValor);

  } else if (
    moedaPrimariaSelecionada.value === "libra" &&
    moedaSecundariaSelecionada.value === "libra"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(inputValor);
    
    valorDigitado.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(inputValor);
  } else if (
    moedaPrimariaSelecionada.value === "libra" &&
    moedaSecundariaSelecionada.value === "real"
  ) {
    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValor * libraDoDia);

    valorDigitado.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(inputValor);

  }
}


// altera a imagem, nome da moeda e simbolo do valor convertido
function changeMoedaConvertida() {
  const nomeMoedaConvertida = document.querySelector(".nome-moeda-convertida");
  const imagemMoedaConvertida = document.getElementById("img-moeda-convertida");

  if (moedaSecundariaSelecionada.value === "dolar") {
    nomeMoedaConvertida.innerHTML = "Dólar Americano";

    imagemMoedaConvertida.src = "./assets/img/bandeira-usa.png";
    imagemMoedaConvertida.alt = "bandeira dos estados unidos";

    valorConvertido.innerHTML = "US$ 0,00";
  } else if (moedaSecundariaSelecionada.value === "euro") {
    nomeMoedaConvertida.innerHTML = "Euro";

    imagemMoedaConvertida.src = "./assets/img/simbolo-euro.png";
    imagemMoedaConvertida.alt = "simbolo do euro";

    valorConvertido.innerHTML = "€ 0,00";
  } else if (moedaSecundariaSelecionada.value === "libra") {
    nomeMoedaConvertida.innerHTML = "Libra";

    imagemMoedaConvertida.src = "./assets/img/simbolo-libra.png";
    imagemMoedaConvertida.alt = "simbolo da libra";

    valorConvertido.innerHTML = "£0,00";
  } else if (moedaSecundariaSelecionada.value === "real") {
    nomeMoedaConvertida.innerHTML = "Real";

    imagemMoedaConvertida.src = "./assets/img/bandeira-brasil.png";
    imagemMoedaConvertida.alt = "bandeira do brasil";

    valorConvertido.innerHTML = "R$ 0,00";
  }
}

// altera a imagem, nome da moeda e simbolo do valor referente a moeda digitada
function changeMoedaSelecionada() {
  const valordigitado = document.querySelector(".valor-digitado");
  const imagemMoedaSelecionada = document.getElementById(
    "img-moeda-selecionada"
  );
  const nomeMoedaSelecionada = document.querySelector(
    ".nome-moeda-selecionada"
  );

  if (moedaPrimariaSelecionada.value === "dolar") {
    nomeMoedaSelecionada.innerHTML = "Dólar Americano";

    imagemMoedaSelecionada.src = "./assets/img/bandeira-usa.png";
    imagemMoedaSelecionada.alt = "bandeira dos estados unidos";

    valordigitado.innerHTML = "US$ 0,00";
  } else if (moedaPrimariaSelecionada.value === "euro") {
    nomeMoedaSelecionada.innerHTML = "Euro";

    imagemMoedaSelecionada.src = "./assets/img/simbolo-euro.png";
    imagemMoedaSelecionada.alt = "simbolo do euro";

    valordigitado.innerHTML = "€ 0,00";
  } else if (moedaPrimariaSelecionada.value === "libra") {
    nomeMoedaSelecionada.innerHTML = "Libra";

    imagemMoedaSelecionada.src = "./assets/img/simbolo-libra.png";
    imagemMoedaSelecionada.alt = "simbolo da libra";

    valordigitado.innerHTML = "£0,00";
  } else if (moedaPrimariaSelecionada.value === "real") {
    nomeMoedaSelecionada.innerHTML = "Real";

    imagemMoedaSelecionada.src = "./assets/img/bandeira-brasil.png";
    imagemMoedaSelecionada.alt = "bandeira do brasil";

    valordigitado.innerHTML = "R$ 0,00";
  }
}

moedaPrimariaSelecionada.addEventListener("change", changeMoedaSelecionada);
moedaSecundariaSelecionada.addEventListener("change", changeMoedaConvertida);
botaoConverter.addEventListener("click", converterValor);
