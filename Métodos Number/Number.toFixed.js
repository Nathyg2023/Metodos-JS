//Formate un número usando notación de punto fijo, de acuerdo a la cantidad de decimales que deseo

const financial = (x) => {
    return (x).toFixed(2);
  }

  console.log(financial(2.1256))
  console.log(financial(0.0058))