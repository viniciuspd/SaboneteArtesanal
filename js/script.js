let diaHoje = new Date();
let dia = diaHoje.getDate();
let mes = diaHoje.getMonth();

document.querySelector('.data-hoje').textContent = dia;
document.querySelector('.data-hoje2').textContent = dia;
document.querySelector('.data-hoje3').textContent = dia;

switch (mes) {
    case 0:
    document.querySelector('.mes').textContent = 'Janeiro';
    document.querySelector('.mes2').textContent = 'Janeiro';
    document.querySelector('.mes3').textContent = 'Janeiro';
    break;
    case 1:
    document.querySelector('.mes').textContent = 'Fevereiro';
    document.querySelector('.mes2').textContent = 'Fevereiro';
    document.querySelector('.mes3').textContent = 'Fevereiro';
    break;
    case 2:
    document.querySelector('.mes').textContent = 'Março';
    document.querySelector('.mes2').textContent = 'Março';
    document.querySelector('.mes3').textContent = 'Março';
    break;
    case 3:
    document.querySelector('.mes').textContent = 'Abril';
    document.querySelector('.mes2').textContent = 'Abril';
    document.querySelector('.mes3').textContent = 'Abril';
    break;
    case 4:
    document.querySelector('.mes').textContent = 'Maio';
    document.querySelector('.mes2').textContent = 'Maio';
    document.querySelector('.mes3').textContent = 'Maio';
    break;
    case 5:
    document.querySelector('.mes').textContent = 'Junho';
    document.querySelector('.mes2').textContent = 'Junho';
    document.querySelector('.mes3').textContent = 'Junho';
    break;
    case 6:
    document.querySelector('.mes').textContent = 'Julho';
    document.querySelector('.mes2').textContent = 'Julho';
    document.querySelector('.mes3').textContent = 'Julho';
    break;
    case 7:
    document.querySelector('.mes').textContent = 'Agosto';
    document.querySelector('.mes2').textContent = 'Agosto';
    document.querySelector('.mes3').textContent = 'Agosto';
    break;
    case 8:
    document.querySelector('.mes').textContent = 'Setembro';
    document.querySelector('.mes2').textContent = 'Setembro';
    document.querySelector('.mes3').textContent = 'Setembro';
    break;
    case 9:
    document.querySelector('.mes').textContent = 'Outubro';
    document.querySelector('.mes2').textContent = 'Outubro';
    document.querySelector('.mes3').textContent = 'Outubro';
    break;
    case 10:
    document.querySelector('.mes').textContent = 'Novembro';
    document.querySelector('.mes2').textContent = 'Novembro';
    document.querySelector('.mes3').textContent = 'Novembro';
    break;
    case 11:
    document.querySelector('.mes').textContent = 'Dezembro';
    document.querySelector('.mes2').textContent = 'Dezembro';
    document.querySelector('.mes3').textContent = 'Dezembro';
    break;

}

var hora = diaHoje.getHours();
var minuto = diaHoje.getMinutes();
var segundo = diaHoje.getSeconds();
var areaHora = document.querySelector('.tempo-hora');
var areaMinuto = document.querySelector('.tempo-minuto');
var areaSegundo = document.querySelector('.tempo-segundo');
var on = true;
var TimeSeconds,TimeMinutes,TimeHours;

function TemporizadorStart(){
        if(on == true){
        console.log('Start');
        var memoriaHora = ('00' + (23 - hora)).slice(-2);
        var memoriaMinuto =  ('00' + (59 - minuto)).slice(-2);
        var memoriaSegundo =  ('00' + (59 - segundo)).slice(-2);
        areaHora.textContent = memoriaHora;
        areaMinuto.textContent = memoriaMinuto;
        areaSegundo.textContent = memoriaSegundo;
        TemporizadorActually();
    }
    on = false;
}

function TemporizadorActually(){
    TimeSeconds = areaSegundo.textContent;
    TimeMinutes = areaMinuto.textContent;
    TimeHours = areaHora.textContent;
    setTimeout(()=>{
    if(TimeSeconds > 0  && on == false){   
    TimeSeconds--;
    areaSegundo.textContent = ('0' + TimeSeconds).slice(-2);
    TemporizadorActually();
    }else if(TimeSeconds == 0  && on == false){
        TimeSeconds = 59;
        areaSegundo.textContent = ('0' + TimeSeconds).slice(-2);
        if(TimeMinutes > 0  && on == false){
            TimeMinutes--;
            areaMinuto.textContent = ('0' + TimeMinutes).slice(-2);
            TemporizadorActually();
        }else if(TimeMinutes == 0  && on == false){
            TimeMinutes = 59;
            areaMinuto.textContent = ('0' + TimeMinutes).slice(-2);
            if(TimeHours > 0  && on == false){
                TimeHours--;
                areaHora.textContent = ('0' + TimeHours).slice(-2);
                TemporizadorActually();
            }else if(TimeHours == 0  && on == false){
                TimeHours = 0;
                TimeMinutes = 0;
                TimeSeconds = 0;
                areaSegundo.textContent = ('0' + TimeSeconds).slice(-2);
                areaMinuto.textContent = ('0' + TimeMinutes).slice(-2);
                areaHora.textContent = ('0' + TimeHours).slice(-2);
                on = true;
            }
        }
    }
},1000);

}

function TemporizadorReset(){
    areaHora.textContent = ('0' + 0).slice(-2);
    areaMinuto.textContent = ('0' + 0).slice(-2);
    areaSegundo.textContent = ('0' + 0).slice(-2);
    TimeHours = 0;
    TimeMinutes = 0;
    TimeSeconds = 0;
    on = true;
}


TemporizadorStart();


let duvida1 = document.getElementById('1');

duvida1.addEventListener('click', ClickDuvida1);

function ClickDuvida1(){
    if(document.querySelector('.d1').style.opacity == 1){
        document.querySelector('.d1').style.display='none';
        document.querySelector('.d1').style.opacity=0;        
    }else{
    document.querySelector('.d1').style.display='flex';
    document.querySelector('.d1').style.opacity=1;
    document.querySelector('.d2').style.display='none';
    document.querySelector('.d2').style.opacity=0;
    document.querySelector('.d3').style.display='none';
    document.querySelector('.d3').style.opacity=0;
    document.querySelector('.d4').style.display='none';
    document.querySelector('.d4').style.opacity=0;
    document.querySelector('.d5').style.display='none';
    document.querySelector('.d5').style.opacity=0;
    document.querySelector('.d6').style.display='none';
    document.querySelector('.d6').style.opacity=0;
    }
}

let duvida2 = document.getElementById('2');

duvida2.addEventListener('click', ClickDuvida2);

function ClickDuvida2(){
    if(document.querySelector('.d2').style.opacity == 1){
        document.querySelector('.d2').style.display='none';
        document.querySelector('.d2').style.opacity=0;        
    }else{
    document.querySelector('.d1').style.display='none';
    document.querySelector('.d1').style.opacity=0;
    document.querySelector('.d2').style.display='flex';
    document.querySelector('.d2').style.opacity=1;
    document.querySelector('.d3').style.display='none';
    document.querySelector('.d3').style.opacity=0;
    document.querySelector('.d4').style.display='none';
    document.querySelector('.d4').style.opacity=0;
    document.querySelector('.d5').style.display='none';
    document.querySelector('.d5').style.opacity=0;
    document.querySelector('.d6').style.display='none';
    document.querySelector('.d6').style.opacity=0;
    }
}

let duvida3 = document.getElementById('3');

duvida3.addEventListener('click', ClickDuvida3);

function ClickDuvida3(){
    if(document.querySelector('.d3').style.opacity == 1){
        document.querySelector('.d3').style.display='none';
        document.querySelector('.d3').style.opacity=0;        
    }else{
    document.querySelector('.d1').style.display='none';
    document.querySelector('.d1').style.opacity=0;
    document.querySelector('.d2').style.display='none';
    document.querySelector('.d2').style.opacity=0;
    document.querySelector('.d3').style.display='flex';
    document.querySelector('.d3').style.opacity=1;
    document.querySelector('.d4').style.display='none';
    document.querySelector('.d4').style.opacity=0;
    document.querySelector('.d5').style.display='none';
    document.querySelector('.d5').style.opacity=0;
    document.querySelector('.d6').style.display='none';
    document.querySelector('.d6').style.opacity=0;
    }
}

let duvida4 = document.getElementById('4');

duvida4.addEventListener('click', ClickDuvida4);

function ClickDuvida4(){
    if(document.querySelector('.d4').style.opacity == 1){
        document.querySelector('.d4').style.display='none';
        document.querySelector('.d4').style.opacity=0;        
    }else{
    document.querySelector('.d1').style.display='none';
    document.querySelector('.d1').style.opacity=0;
    document.querySelector('.d2').style.display='none';
    document.querySelector('.d2').style.opacity=0;
    document.querySelector('.d3').style.display='none';
    document.querySelector('.d3').style.opacity=0;
    document.querySelector('.d4').style.display='flex';
    document.querySelector('.d4').style.opacity=1;
    document.querySelector('.d5').style.display='none';
    document.querySelector('.d5').style.opacity=0;
    document.querySelector('.d6').style.display='none';
    document.querySelector('.d6').style.opacity=0;
    }
}

let duvida5 = document.getElementById('5');

duvida5.addEventListener('click', ClickDuvida5);

function ClickDuvida5(){
    if(document.querySelector('.d5').style.opacity == 1){
        document.querySelector('.d5').style.display='none';
        document.querySelector('.d5').style.opacity=0;        
    }else{
    document.querySelector('.d1').style.display='none';
    document.querySelector('.d1').style.opacity=0;
    document.querySelector('.d2').style.display='none';
    document.querySelector('.d2').style.opacity=0;
    document.querySelector('.d3').style.display='none';
    document.querySelector('.d3').style.opacity=0;
    document.querySelector('.d4').style.display='none';
    document.querySelector('.d4').style.opacity=0;
    document.querySelector('.d5').style.display='flex';
    document.querySelector('.d5').style.opacity=1;
    document.querySelector('.d6').style.display='none';
    document.querySelector('.d6').style.opacity=0;
    }
}

let duvida6 = document.getElementById('6');

duvida6.addEventListener('click', ClickDuvida6);

function ClickDuvida6(){
    if(document.querySelector('.d6').style.opacity == 1){
        document.querySelector('.d6').style.display='none';
        document.querySelector('.d6').style.opacity=0;        
    }else{
    document.querySelector('.d1').style.display='none';
    document.querySelector('.d1').style.opacity=0;
    document.querySelector('.d2').style.display='none';
    document.querySelector('.d2').style.opacity=0;
    document.querySelector('.d3').style.display='none';
    document.querySelector('.d3').style.opacity=0;
    document.querySelector('.d4').style.display='none';
    document.querySelector('.d4').style.opacity=0;
    document.querySelector('.d5').style.display='none';
    document.querySelector('.d5').style.opacity=0;
    document.querySelector('.d6').style.display='flex';
    document.querySelector('.d6').style.opacity=1;
}
}

let botao = document.querySelector('.botao1');


botao.addEventListener('click', BotaoAcao);

function BotaoAcao(event){
    event.preventDefault();
    console.log('Clicou');
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    smoothScrollTo(0, section,800);
}
let botao2 = document.querySelector('.botao2');


botao2.addEventListener('click', BotaoAcao2);

function BotaoAcao2(event){
    event.preventDefault();
    console.log('Clicou');
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    smoothScrollTo(0, section,800);
}

let botao3 = document.querySelector('.botao3');


botao3.addEventListener('click', BotaoAcao3);

function BotaoAcao3(event){
    event.preventDefault();
    console.log('Clicou');
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    smoothScrollTo(0, section,800);
}

let botao4 = document.querySelector('.botao4');


botao4.addEventListener('click', BotaoAcao4);

function BotaoAcao4(event){
    event.preventDefault();
    console.log('Clicou');
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    smoothScrollTo(0, section -400,800);
}


function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };


  let nomes = ['Helena'
  ,'Alice'
  ,'Laura'
  ,'Manuela'
  ,'Valentina'
  ,'Sophia'
  ,'Isabella'
  ,'Heloísa'
  ,'Luiza'
  ,'Júlia'
  ,'Lorena'
  ,'Lívia'
  ,'Maria'
  ,'Cecília'
  ,'Eloá'
  ,'Giovanna'
  ,'Maria'
  ,'Eduarda'
  ,'Mariana'
  ,'Lara'
  ,'Beatriz'
  ,'Antonella'
  ,'Maria Júlia'
  ,'Emanuelly'
  ,'Isadora'
  ,'Clara'
  ,'Melissa'
  ,'Luiza'
  ,'Júlia'
  ,'Esther'
  ,'Lavínia'
  ,'Maitê'
  ,'Cecília'
  ,'Alice'
  ,'Sarah'
  ,'Elisa'
  ,'Liz'
  ,'Yasmin'
  ,'Isabelly'
  ,'Alícia'
  ,'Clara'
  ,'Isis'
  ,'Rebeca'
  ,'Rafaela'
  ,'Marina'
  ,'Laura'
  ,'Helena'
  ,'Agatha'
  ,'Gabriela'
  ,'Catarina'
  ,'Letícia'
  ,'Mirella'
  ,'Nicole'
  ,'Luna'
  ,'Maria'
  ,'Olívia'
  ,'Vitória'
  ,'Maria'
  ,'Maria'
  ,'Ana'
  ,'Allana'
  ,'Maria'
  ,'Milena'
  ,'Emilly'
  ,'Ayla'
  ,'Maria'
  ,'Maya'
  ,'Bianca'
  ,'Clarice'
  ,'Aurora'
  ,'Larissa'
  ,'Mariah'
  ,'Pietra'
  ,'Laís'
  ,'Stella'
  ,'Eduarda'
  ,'Maria'
  ,'Ana'
  ,'Ana'
  ,'Maria'
  ,'Carolina'
  ,'Ana'
  ,'Malu'
  ,'Gabrielly'
  ,'Ana'
  ,'Analu'
  ,'Maria'
  ,'Ana'
  ,'Amanda'
  ,'Louise'
  ,'Heloise'
  ,'Fernanda'
  ,'Ana'
  ,'Melina'
  ,'Maria'
  ,'Bella'
  ,'Joana'
  ,'Isabel'
  ,'Melinda'
  ,'Pérola'
  ];

let TiposPagamentos = ['cartão de crédito','boleto']


let Pop = document.querySelector('.pop-vendas');

function NomeAleatorio(){
    let nomeAvulso = Math.floor(Math.random()*100);
    let Pagamento = Math.round(Math.random());
    let TempoSell = Math.floor(Math.random()*59);
    console.log(nomeAvulso);
    let NomePop = document.querySelector('.nome-aleatorio');
    let PagamentoPop = document.querySelector('.forma-vendas');
    let TempoPop = document.querySelector('.time-vendas');
    NomePop.textContent = nomes[nomeAvulso];
    PagamentoPop.textContent = TiposPagamentos[Pagamento];
    if((TempoSell == 0) || (TempoSell == 1)){
    TempoSell = 2
    TempoPop.textContent = TempoSell;
    }else{
    TempoPop.textContent = TempoSell; 
    }
}

setInterval(() => {
    NomeAleatorio();
    Pop.style.display = 'flex'
    setTimeout(() => {
        Pop.style.opacity = 1;
    }, 100);
    setTimeout(() => {
        Pop.style.opacity = 0;
    }, 4000);
}, 25000);