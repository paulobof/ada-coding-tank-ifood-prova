//Função Desafio 001

function converterPara24Horas(horarioUSA) {
 
    let horas = horarioUSA.substring(0,2)*1;
    const minutos = horarioUSA.substring(3,5);
    const segundos = horarioUSA.substring(6,8);
    const AMPM = horarioUSA.substring(8,10);
  
    if (AMPM === 'PM' && horas < 12)
      horas += 12;
    else if (AMPM === 'AM' && horas === 12)
      horas = 0;
  
    return `${horas}:${minutos}:${segundos}`;
  }
  
  //Implemnatação para testar função

  const horarioUSA = '06:15:25PM';
  const horario24hs = converterPara24Horas(horarioUSA);

  console.log(horario24hs); 
  
  // Saída Console: 18:15:25