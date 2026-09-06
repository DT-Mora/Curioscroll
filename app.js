const facts = [
  {
    id:"venus-day",
    fact:"En Venus, un día dura más que un año.",
    detail:"Venus tarda unos 243 días terrestres en completar una rotación, mientras que su órbita alrededor del Sol dura unos 225 días.",
    source:"NASA",
    url:"https://science.nasa.gov/venus/venus-facts/"
  },
  {
    id:"brain-pain",
    fact:"El tejido del cerebro no tiene nociceptores.",
    detail:"Los nociceptores son receptores relacionados con la detección de estímulos dañinos. Su ausencia en el tejido del sistema nervioso central ayuda a explicar por qué ciertas cirugías cerebrales pueden realizarse con el paciente despierto.",
    source:"NCBI / StatPearls",
    url:"https://www.ncbi.nlm.nih.gov/books/NBK539789/"
  },
  {
    id:"mauna-kea",
    fact:"Mauna Kea supera los 10 km desde el fondo oceánico hasta su cima.",
    detail:"Medido desde su base bajo el océano, alcanza alrededor de 10 km de altura. Desde el nivel del mar, su altura visible es mucho menor.",
    source:"NASA",
    url:"https://www.nasa.gov/wp-content/uploads/2015/04/how_big_is_it_web_040920_hires.pdf"
  },
  {
    id:"sound-space",
    fact:"En el vacío del espacio, el sonido no puede propagarse.",
    detail:"Las ondas sonoras necesitan un medio material, como aire, agua o un sólido. La radio, en cambio, sí puede viajar por el vacío.",
    source:"NASA Science",
    url:"https://science.nasa.gov/ems/02_anatomy/"
  },
  {
    id:"sharks",
    fact:"Los tiburones existen desde hace más de 400 millones de años.",
    detail:"El registro fósil sitúa a los primeros tiburones mucho antes de los dinosaurios. Sus dientes y dentículos ayudan a reconstruir su historia evolutiva.",
    source:"Smithsonian Ocean",
    url:"https://ocean.si.edu/ocean-life/sharks-rays/sharks"
  },
  {
    id:"vanilla",
    fact:"La vainilla pertenece a la familia de las orquídeas.",
    detail:"La vainilla cultivada, Vanilla planifolia, forma parte de Orchidaceae. Sus frutos son la fuente de la vainilla natural utilizada como saborizante.",
    source:"NCBI / PubChem",
    url:"https://pubchem.ncbi.nlm.nih.gov/taxonomy/51239"
  },
  {
    id:"earth-shape",
    fact:"La Tierra no es una esfera perfecta.",
    detail:"Su rotación produce un abultamiento en el ecuador y hace que los polos estén ligeramente achatados. En geodesia se modela como un esferoide oblato.",
    source:"NASA",
    url:"https://science.nasa.gov/learn/basics-of-space-flight/chapter2-1/"
  },
  {
    id:"earth-water",
    fact:"El agua cubre aproximadamente el 71% de la superficie terrestre.",
    detail:"La mayor parte está en los océanos. La cifra describe la superficie cubierta por agua, no el porcentaje de agua del planeta por volumen o masa.",
    source:"NASA",
    url:"https://www.nasa.gov/learning-resources/for-kids-and-students/what-is-earth-grades-5-8/"
  },
  {
    id:"venus-sunrise",
    fact:"En Venus, el Sol saldría por el oeste.",
    detail:"Venus gira en sentido retrógrado respecto a la mayoría de los planetas del sistema solar, por lo que el Sol saldría por el oeste y se pondría por el este.",
    source:"NASA",
    url:"https://spaceplace.nasa.gov/all-about-venus/sp/"
  },
  {
    id:"mauna-kea",
    fact:"Mauna Kea es más alto de lo que parece.",
    detail:"Desde el nivel del mar mide unos 4,2 km, pero desde el fondo oceánico hasta la cima alcanza alrededor de 10 km.",
    source:"NASA",
    url:"https://www.nasa.gov/wp-content/uploads/2015/04/how_big_is_it_web_040920_hires.pdf"
  },
  {
    id:"earth-rotation",
    fact:"La rotación de la Tierra ayuda a deformar su forma.",
    detail:"La rotación genera un abultamiento ecuatorial, por lo que nuestro planeta es ligeramente más ancho en el ecuador que de polo a polo.",
    source:"NASA",
    url:"https://science.nasa.gov/learn/basics-of-space-flight/chapter2-1/"
  },
  {
    id:"venus-year",
    fact:"Un año de Venus dura unos 225 días terrestres.",
    detail:"Su rotación es tan lenta que un giro completo sobre su eje tarda unos 243 días terrestres, más que una vuelta completa alrededor del Sol.",
    source:"NASA",
    url:"https://spaceplace.nasa.gov/all-about-venus/sp/"
  }
];

// Se mezcla una vez al iniciar la sesión y vuelve a mezclarse al agotar el conjunto.
// La interfaz nunca muestra categorías ni una lista.
let queue = [];
let current = null;
let liked = JSON.parse(localStorage.getItem("curioscroll-liked") || "{}");

const factEl = document.getElementById("fact");
const detailEl = document.getElementById("detail");
const sourceEl = document.getElementById("source");
const likeBtn = document.getElementById("like");
const likesEl = document.getElementById("likes");
const curiosity = document.getElementById("curiosity");
const stage = document.querySelector(".stage");
const edge = document.getElementById("edge");

function shuffle(items){
  const copy = [...items];
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}

function nextFact(){
  if(!queue.length) queue = shuffle(facts);
  let candidate = queue.pop();

  // Evita repetir exactamente el dato anterior cuando se reinicia el mazo.
  if(candidate.id === current?.id && facts.length > 1){
    const swapIndex = Math.floor(Math.random()*queue.length);
    if(queue.length){
      [candidate,queue[swapIndex]]=[queue[swapIndex],candidate];
    }
  }
  return candidate;
}

function render(fact, direction=1){
  current = fact;
  curiosity.classList.remove("entering");
  curiosity.classList.add("leaving");

  window.setTimeout(()=>{
    factEl.textContent = fact.fact;
    detailEl.textContent = fact.detail;
    sourceEl.textContent = `Fuente: ${fact.source}`;
    sourceEl.href = fact.url;

    const count = Number(liked[fact.id] || 0);
    likesEl.textContent = formatCount(count);
    likeBtn.setAttribute("aria-pressed", liked[fact.id] ? "true" : "false");

    curiosity.classList.remove("leaving");
    curiosity.classList.add("entering");
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      curiosity.classList.remove("entering");
    }));
    edge.classList.remove("flash");
    requestAnimationFrame(()=>edge.classList.add("flash"));
  },180);
}

function formatCount(n){
  if(n >= 1000000) return (n/1000000).toFixed(1).replace(".0","")+" M";
  if(n >= 1000) return (n/1000).toFixed(1).replace(".0","")+" K";
  return String(n);
}

function toggleLike(){
  if(!current) return;
  if(liked[current.id]){
    liked[current.id] = 0;
  }else{
    liked[current.id] = 1;
  }
  localStorage.setItem("curioscroll-liked", JSON.stringify(liked));
  const count = Number(liked[current.id] || 0);
  likesEl.textContent = formatCount(count);
  likeBtn.setAttribute("aria-pressed", liked[current.id] ? "true" : "false");
}

function go(direction){
  render(nextFact(), direction);
}

likeBtn.addEventListener("click", (e)=>{
  e.stopPropagation();
  toggleLike();
});

let startY = 0;
let startX = 0;
let locked = false;

stage.addEventListener("pointerdown",(e)=>{
  if(e.target.closest("button,a")) return;
  startY=e.clientY;
  startX=e.clientX;
  locked=false;
  stage.setPointerCapture?.(e.pointerId);
});

stage.addEventListener("pointerup",(e)=>{
  if(e.target.closest("button,a")) return;
  const dy=e.clientY-startY;
  const dx=e.clientX-startX;
  if(Math.abs(dy)<42 || Math.abs(dy)<Math.abs(dx)*1.15) return;
  if(locked) return;
  locked=true;
  go(dy<0 ? 1 : -1);
});

document.addEventListener("wheel",(e)=>{
  if(Math.abs(e.deltaY)<25) return;
  if(locked) return;
  locked=true;
  go(e.deltaY>0 ? 1 : -1);
  window.setTimeout(()=>locked=false,420);
},{passive:true});

document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowDown" || e.key===" "){
    e.preventDefault();
    go(1);
  }else if(e.key==="ArrowUp"){
    e.preventDefault();
    go(-1);
  }
});

// Para el botón de retroceso del ratón/trackpad no hay historial artificial.
// La navegación principal permanece deliberadamente simple.
render(nextFact());
