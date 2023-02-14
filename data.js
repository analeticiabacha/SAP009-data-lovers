//Filtrar por nome
export const filtroNomes = (dados, nomePesquisado) => {
  return dados.filter(campeao => campeao.name.toUpperCase().includes(nomePesquisado)); //poderia ser id ou name  
};

//Ordenar por Z-A. De A-Z está no js usando reverse().
export const ordenarCampeoes = (dados) => dados.sort((campeao_x, campeao_y) => { 
  if (campeao_x.name > campeao_y.name) { //poderia ser id tbm
    return -1; //requisitos do método sort() decrescente
  } if (campeao_x.name < campeao_y.name){
    return 1;
  } else {
    return 0;
  } 
}); 

//Filtrar por função do campeão
export const funcaoDosCampeoes = (dados, tipo) => { 
  return dados.filter(campeao => campeao.tags.includes(tipo));
};
  

//Filtro por dificuldade do campeão
export const dificuldadeCampeao = (dados, dificuldadeCampeao) => {
  const ordem = dados.sort((a,b) => (a.info.difficulty - b.info.difficulty));
  switch (dificuldadeCampeao) {
  case '1':
    return ordem.filter(campeao => campeao.info.difficulty <= 4);
  case '2':
    return ordem.filter(campeao => campeao.info.difficulty > 4 && campeao.info.difficulty <= 7);
  case '3':
    return ordem.filter(campeao => campeao.info.difficulty > 7);
  }
}

//Calculo agregado de porcentagem dos campeões
export const porcentagemCampeoes = (dados, filtroCampeoes) => {
  return (((filtroCampeoes.length) / (dados.length)*100)).toFixed(2);
}