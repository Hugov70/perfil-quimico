export default class Carta {
    constructor (nome, dica1, dica2, dica3, dica4, dica5) {
        this.nome = nome;
        this.d1 = dica1;
        this.d2 = dica2;
        this.d3 = dica3;
        this.d4 = dica4;
        this.d5 = dica5;
        
    }
}; 

const carta1 = new Carta('petroleo', 'Já houve guerra por conta dele(a)', 'É a principal fonte de renda da economia do Oriente Médio', 'É inflamável', 'Perca sua vez ', 'Está associado a debates sobre poluição ambiental e mudanças climáticas.');

const carta2 = new Carta('oxigenio', 'Faz parte dos calcogênios na tabela periódica', 'Elemento mais abundante da superfície da Terra.', 'Foi descoberto pelos cientistas Priestley e Scheele e nomeado por Lavoisier.', 'Perca sua vez', 'É liberado pela natureza');

const carta3 = new Carta('saponificacao', 'Ocorre entre um éster e uma base inorgânica', 'A última letra do seu nome é O', 'Perca sua vez',  'É utilizada principalmente para fabricaçao de sabão', 'Desde antes de Cristo, fenícios e romanos já a realizavam');

const carta4 = new Carta('hidrogenio', 'Não possui família periódica', 'Combustível para foguetes espaciais ou carros', 'Avance 1 casa', 'Em temperatura ambiente, é um gás', 'Compõe a substância H2O'); 

const carta5 = new Carta('vinagre', 'Em substâncias como água se dissolve', 'Se coloca em salada', 'Elimina manchas e sedimentos resistentes.', 'Atribui gosto e traz aroma aos alimentos', 'Pode ser usado como produto de limpeza');

const carta6 = new Carta('butano', 'Altamente inflamável', ' Seu uso mais famoso no dia a dia é no botijão de gás', 'Caso seja inalado, pode levar até a morte', 'Possui 4 carbonos em sua composição', 'Avance 1 casa');

const carta7 = new Carta('etanol', 'É o álcool encontrado em bebidas alcoólicas.', 'Fórmula química é C2H5OH.', 'Pode ser produzido através da fermentação de açúcares.', 'Possui efeito desinibidor em baixas concentrações.', 'É utilizado como biocombustível.')

const carta8 = new Carta('acetona', 'É um solvente orgânico.', 'É volátil e possui odor característico.', 'Utilizada como removedor de esmalte e em processos industriais.', 'Seu ponto de ebulição é relativamente baixo.', 'Fórmula química é CH3COCH3.')

const carta9 = new Carta('fenol', 'É um composto orgânico com um grupo hidroxila ligado a um anel aromático.', 'Possui propriedades antissépticas.', 'Utilizado na produção de plásticos, resinas e medicamentos', 'Avance 1 casa.', 'É tóxico se ingerido ou inalado em grandes quantidades.')

const carta10 = new Carta('aspirina', 'É um medicamento analgésico, anti-inflamatório e antipirético.', 'Seu princípio ativo é o ácido acetilsalicílico.', 'Desenvolvida pela primeira vez pela Bayer.', 'Utilizada para alívio de dores, febres e inflamações.', 'Pode causar irritação gástrica se consumida em excesso.')

const carta11 = new Carta('eteno', 'Também conhecido como etileno.', 'É um gás incolor e inflamável.', 'Utilizado na maturação de frutas.', 'Importante na indústria petroquímica para a produção de polímeros.', 'É o hormônio vegetal responsável pelo amadurecimento dos frutos.')

const carta12 = new Carta('aminoacido', 'São os blocos construtores das proteínas.', 'São compostos por um grupo amino e um grupo carboxila.', 'Existem 20 tipos comuns em organismos vivos.', 'Importantes para o crescimento e reparo do tecido muscular.', 'Podem ser classificados como essenciais ou não essenciais.')

const carta13 = new Carta('metano', 'É o principal componente do gás natural.', 'Presente em flatulências.', 'Utilizado como combustível doméstico.', 'Encontrado em reservatórios subterrâneos.', 'Fórmula química é CH4.')

const carta14 = new Carta('glicose', 'É uma importante fonte de energia para os seres vivos.', 'Encontrada em alimentos como frutas e mel.', 'É absorvida pelo intestino delgado.', 'Fórmula química é C6H12O6.', 'É um monossacarídeo.')

const carta15 = new Carta('amonia', 'É um composto inorgânico de nitrogênio e hidrogênio.', 'avance 1 casa', 'Utilizada na produção de fertilizantes.', 'Possui odor característico e irritante.', 'Usada como agente de limpeza em alguns produtos domésticos.')

const carta16 = new Carta('benzeno', 'É um hidrocarboneto aromático.', 'Utilizado na produção de plásticos e pesticidas.', 'Altamente inflamável.', 'Presente na fumaça do cigarro.', 'Fórmula química é C6H6.')

const carta17 = new Carta('propano', 'Perca sua vez', 'É um hidrocarboneto saturado.', 'Utilizado como combustível em aquecedores e fogões.', 'Usado como gás de cozinha em botijões.', 'Presente em alguns aerossóis como propelente.')

export { carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14, carta15, carta16, carta17}