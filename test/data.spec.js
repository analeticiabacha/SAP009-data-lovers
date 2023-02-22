import { filtroNomes, ordenarCampeoes, funcaoDosCampeoes, dificuldadeCampeao, porcentagemCampeoes } from '../src/data.js';

const aatrox = {
  name: "Aatrox",
  info: {
    difficulty: 4,
  },
  tags: ["Fighter", "Tank"]
};
const ahri =  {
  name: "Ahri",
  info: {
    difficulty: 5,
  },
  tags: ["Mage", "Assassin"]
};

const leona = {
  name: "Leona",
  info: {
    difficulty: 4,
  },
  tags: ["Tank", "Support"]
}

const zyra =  {
  name: "Zyra",
  info: {
    difficulty: 8,
  },
  tags: ["Mage", "Support"]
};

const testeCampeoes = [aatrox, ahri, leona, zyra];

//testando se nosso objeto é um objeto mesmo
describe("testeCampeoes", () => {
  it("deve ser um objeto", () => {
    expect(typeof testeCampeoes).toBe("object");
  });
});

//testando função filtro nomes
describe('filtroNomes' , () => {
  it('deve ser uma função', () => {
    expect(typeof filtroNomes).toBe("function");
  });

  it('deve retornar um array com os dados do nome do campeão que foi pesquisado', () => {
    const name = 'Aatrox';
    expect(filtroNomes(testeCampeoes, name)).toEqual([aatrox]);
  })
});

//testando função ordenar campeões
describe('ordenarCampeoes', () => {

  it('deve ser uma função', () => {
    expect(typeof ordenarCampeoes).toBe("function");
  }); 

  it('deve ordenar de Z-A', () => {
    const resultado = ordenarCampeoes(testeCampeoes, "Z-A");
    expect(resultado[0].name).toBe("Zyra");
  });

  it('deve ordenar de A-Z', () => {
    const resultado = ordenarCampeoes(testeCampeoes, "A-Z");
    expect(resultado[0].name).toBe("Aatrox");
  });
});

//testando função que verficiar a função dos campeões         
describe('funcaoDosCampeoes', () => {
  it('deve ser uma função', () => {
    expect(typeof funcaoDosCampeoes).toBe("function");
  }); 

  it('deve buscar por Lutadores ', () => {
    const resultado = funcaoDosCampeoes(testeCampeoes, "Fighter");
    expect(resultado).toEqual([aatrox]);
  });

  it('deve buscar por Assassinos ', () => {
    const resultado = funcaoDosCampeoes(testeCampeoes, "Assassin");
    expect(resultado).toEqual([ahri]);
  });
});

//testando a função dificuldade dos campeões
describe('dificuldadeCampeao', () => {
  it('deve ser uma função', () => {
    expect(typeof dificuldadeCampeao).toBe("function");
  });

  it('deve buscar por dificuldade baixa', () => {
    const resultado = dificuldadeCampeao(testeCampeoes, '1');
    expect(resultado).toEqual([aatrox, leona]);
  })

  it('deve buscar por dificuldade média', () => {
    const resultado = dificuldadeCampeao(testeCampeoes, '2');
    expect(resultado).toEqual([ahri]);
  })

  it('deve buscar por dificuldade alta', () => {
    const resultado = dificuldadeCampeao(testeCampeoes, '3');
    expect(resultado).toEqual([zyra]);
  })
});



//testando o cálculo de porcentagem
describe('porcentagemCampeoes', () => {
  it('deve ser uma função', () => {
    expect(typeof porcentagemCampeoes).toBe("function");
  });

  it('retorna a porcentagem da pesquisa do usuário', () => {
    expect(porcentagemCampeoes(4,1)).toBe("25.00");
  })
});

