const facts = [
  {id:'venus-day',fact:'En Venus, un día dura más que un año.',detail:'Una rotación de Venus tarda unos 243 días terrestres, mientras que su órbita alrededor del Sol tarda unos 225.',source:'NASA',url:'https://science.nasa.gov/venus/venus-facts/'},
  {id:'venus-reverse',fact:'En Venus, el Sol saldría por el oeste.',detail:'Venus gira en sentido retrógrado respecto a la mayoría de los planetas del sistema solar.',source:'NASA',url:'https://spaceplace.nasa.gov/all-about-venus/sp/'},
  {id:'sound-vacuum',fact:'En el espacio vacío no puedes escuchar una explosión.',detail:'El sonido necesita un medio material, como aire, agua o un sólido, para propagarse.',source:'NASA',url:'https://science.nasa.gov/ems/02_anatomy/'},
  {id:'sharks-old',fact:'Los tiburones son más antiguos que los dinosaurios.',detail:'Los primeros tiburones conocidos aparecieron hace más de 400 millones de años, mucho antes de los dinosaurios.',source:'Smithsonian Ocean',url:'https://ocean.si.edu/ocean-life/sharks-rays/sharks'},
  {id:'vanilla-orchid',fact:'La vainilla es una orquídea.',detail:'Vanilla planifolia pertenece a la familia Orchidaceae, la misma familia de las orquídeas ornamentales.',source:'NCBI / PubChem',url:'https://pubchem.ncbi.nlm.nih.gov/taxonomy/51239'},
  {id:'earth-water',fact:'El agua cubre cerca del 71% de la superficie de la Tierra.',detail:'La mayor parte de esa superficie acuática corresponde a los océanos.',source:'NASA',url:'https://www.nasa.gov/learning-resources/for-kids-and-students/what-is-earth-grades-5-8/'},
  {id:'earth-shape',fact:'La Tierra no es una esfera perfecta.',detail:'Su rotación provoca un ligero abultamiento en el ecuador y un achatamiento en los polos.',source:'NASA',url:'https://science.nasa.gov/learn/basics-of-space-flight/chapter2-1/'},
  {id:'mauna-kea',fact:'Mauna Kea supera los 10 km desde su base submarina hasta la cima.',detail:'Desde el nivel del mar mide unos 4,2 km, pero gran parte de la montaña está bajo el océano.',source:'NASA',url:'https://www.nasa.gov/wp-content/uploads/2015/04/how_big_is_it_web_040920_hires.pdf'},
  {id:'moon-distance',fact:'La Luna se aleja lentamente de la Tierra.',detail:'Actualmente se aleja unos 3,8 centímetros por año debido a las interacciones de las mareas entre ambos cuerpos.',source:'NASA',url:'https://science.nasa.gov/moon/facts/'},
  {id:'moon-footprints',fact:'Las huellas dejadas en la Luna pueden durar muchísimo tiempo.',detail:'La Luna prácticamente no tiene atmósfera ni lluvia, así que no existe un proceso normal de erosión que las borre rápidamente.',source:'NASA',url:'https://science.nasa.gov/moon/'},
  {id:'jupiter-day',fact:'Un día en Júpiter dura menos de 10 horas.',detail:'Júpiter gira sobre su eje aproximadamente una vez cada 9,9 horas, pese a ser el planeta más grande del sistema solar.',source:'NASA',url:'https://science.nasa.gov/jupiter/jupiter-facts/'},
  {id:'jupiter-redspot',fact:'La Gran Mancha Roja de Júpiter es una tormenta enorme.',detail:'Es una tormenta atmosférica persistente observada durante siglos y suficientemente grande para envolver a la Tierra en sentido transversal.',source:'NASA',url:'https://science.nasa.gov/jupiter/jupiter-facts/'},
  {id:'saturn-float',fact:'Saturno tiene una densidad media menor que la del agua.',detail:'Si existiera un océano gigantesco capaz de contenerlo, su densidad media permitiría que flotara.',source:'NASA',url:'https://science.nasa.gov/saturn/saturn-facts/'},
  {id:'uranus-sideways',fact:'Urano gira prácticamente de lado.',detail:'Su eje está inclinado unos 98 grados, por lo que sus estaciones son extremadamente particulares.',source:'NASA',url:'https://science.nasa.gov/uranus/uranus-facts/'},
  {id:'neptune-wind',fact:'Neptuno tiene los vientos más rápidos del sistema solar.',detail:'Se han medido velocidades atmosféricas superiores a 2.000 km/h.',source:'NASA',url:'https://science.nasa.gov/neptune/neptune-facts/'},
  {id:'mercury-temp',fact:'Mercurio tiene temperaturas extremadamente distintas entre día y noche.',detail:'Sin una atmósfera densa que retenga el calor, su superficie puede pasar de unos 430 °C durante el día a cerca de −180 °C por la noche.',source:'NASA',url:'https://science.nasa.gov/mercury/mercury-facts/'},
  {id:'mars-sunset',fact:'Los atardeceres en Marte pueden verse azulados.',detail:'El polvo fino de la atmósfera marciana modifica la forma en que la luz se dispersa alrededor del Sol.',source:'NASA',url:'https://mars.nasa.gov/resources/7340/blue-sunset-on-mars/'},
  {id:'mars-day',fact:'Un día marciano dura aproximadamente 24 horas y 39 minutos.',detail:'Los científicos llaman sol a un día marciano.',source:'NASA',url:'https://science.nasa.gov/mars/facts/'},
  {id:'sun-light',fact:'La luz del Sol tarda unos 8 minutos y 20 segundos en llegar a la Tierra.',detail:'La distancia media entre la Tierra y el Sol es de unos 150 millones de kilómetros.',source:'NASA',url:'https://science.nasa.gov/sun/facts/'},
  {id:'sun-star',fact:'El Sol es una estrella.',detail:'Es una estrella de tipo G y contiene más del 99% de la masa del sistema solar.',source:'NASA',url:'https://science.nasa.gov/sun/facts/'},
  {id:'earth-rotation',fact:'La Tierra gira a más de 1.600 km/h en el ecuador.',detail:'La velocidad lineal depende de la latitud y es máxima en el ecuador.',source:'NASA',url:'https://science.nasa.gov/learn/basics-of-space-flight/chapter2-1/'},
  {id:'earth-oxygen',fact:'El oxígeno de la atmósfera terrestre procede en gran parte de organismos fotosintéticos.',detail:'Plantas, algas y cianobacterias producen oxígeno mediante la fotosíntesis.',source:'NASA Earth Observatory',url:'https://earthobservatory.nasa.gov/features/CarbonCycle'},
  {id:'antarctica-desert',fact:'La Antártida es un desierto.',detail:'Un desierto se define por la escasez de precipitaciones, no por el calor. Algunas zonas antárticas reciben poquísima precipitación.',source:'National Geographic',url:'https://education.nationalgeographic.org/resource/desert/'},
  {id:'octopus-hearts',fact:'Un pulpo tiene tres corazones.',detail:'Dos bombean sangre hacia las branquias y el tercero la bombea al resto del cuerpo.',source:'Smithsonian Ocean',url:'https://ocean.si.edu/ocean-life/invertebrates/octopus'},
  {id:'octopus-blue-blood',fact:'La sangre de los pulpos es azul.',detail:'Utilizan hemocianina, una molécula basada en cobre que transporta oxígeno y le da ese color.',source:'Smithsonian Ocean',url:'https://ocean.si.edu/ocean-life/invertebrates/octopus'},
  {id:'hummingbird-back',fact:'Los colibríes pueden volar hacia atrás.',detail:'Su anatomía de vuelo les permite generar sustentación durante el movimiento hacia atrás, algo excepcional entre las aves.',source:'Smithsonian',url:'https://nationalzoo.si.edu/animals/blue-throated-mountain-gem'},
  {id:'cheetah-speed',fact:'El guepardo es el animal terrestre más rápido.',detail:'Puede alcanzar aproximadamente 100 km/h en carreras muy cortas.',source:'Smithsonian National Zoo',url:'https://nationalzoo.si.edu/animals/cheetah'},
  {id:'elephant-trunk',fact:'La trompa de un elefante tiene decenas de miles de músculos.',detail:'La trompa combina funciones de nariz, mano y herramienta y está formada por una enorme cantidad de fibras musculares.',source:'Smithsonian National Zoo',url:'https://nationalzoo.si.edu/animals/african-elephant'},
  {id:'giraffe-neck',fact:'Las jirafas tienen siete vértebras en el cuello.',detail:'Tienen el mismo número de vértebras cervicales que los humanos, pero cada una puede ser muchísimo más larga.',source:'Smithsonian National Zoo',url:'https://nationalzoo.si.edu/animals/giraffe'},
  {id:'bee-five-eyes',fact:'Las abejas tienen cinco ojos.',detail:'Tienen dos ojos compuestos y tres ojos simples llamados ocelos.',source:'Smithsonian',url:'https://nationalzoo.si.edu/animals/honey-bee'},
  {id:'butterfly-taste',fact:'Las mariposas pueden saborear con los pies.',detail:'Sus patas tienen receptores químicos que les ayudan a detectar sustancias sobre las plantas donde se posan.',source:'Smithsonian',url:'https://www.si.edu/spotlight/buginfo/butterflies'},
  {id:'crows-tools',fact:'Algunos cuervos fabrican y usan herramientas.',detail:'Se han documentado especies capaces de modificar materiales para obtener alimento, una conducta asociada a una notable capacidad de resolución de problemas.',source:'Smithsonian',url:'https://nationalzoo.si.edu/animals/american-crow'},
  {id:'penguin-proposal',fact:'Los pingüinos pueden ofrecer piedras durante el cortejo.',detail:'En algunas especies, un macho puede presentar piedras a una pareja potencial y utilizarlas en la construcción del nido.',source:'Smithsonian',url:'https://nationalzoo.si.edu/animals/gentoo-penguin'},
  {id:'koala-fingerprints',fact:'Los koalas tienen huellas dactilares muy parecidas a las humanas.',detail:'Sus patrones pueden ser tan similares que distinguirlos a simple vista puede resultar difícil.',source:'Smithsonian National Zoo',url:'https://nationalzoo.si.edu/animals/koala'},
  {id:'banana-berry',fact:'Botánicamente, el plátano es una baya.',detail:'En botánica, una baya es un fruto carnoso desarrollado a partir de un solo ovario. El plátano cumple esa definición.',source:'Encyclopaedia Britannica',url:'https://www.britannica.com/science/berry-plant-reproductive-body'},
  {id:'strawberry-not-berry',fact:'La fresa no es una baya botánica.',detail:'Los pequeños puntos visibles en su superficie son frutos individuales; la parte roja carnosa es un tejido floral engrosado.',source:'Encyclopaedia Britannica',url:'https://www.britannica.com/science/berry-plant-reproductive-body'},
  {id:'pineapple-many-fruits',fact:'Una piña es en realidad un conjunto de muchos frutos fusionados.',detail:'Cada segmento de la piña procede de una flor individual que se integró con las demás durante el desarrollo.',source:'Encyclopaedia Britannica',url:'https://www.britannica.com/plant/pineapple'},
  {id:'carrot-color',fact:'Las zanahorias no siempre fueron principalmente naranjas.',detail:'Antes de que la zanahoria naranja se volviera dominante, existían variedades moradas, amarillas, blancas y otras.',source:'Smithsonian Magazine',url:'https://www.smithsonianmag.com/history/how-carrots-became-orange-180962649/'},
  {id:'water-different',fact:'El agua puede existir naturalmente como sólido, líquido y gas.',detail:'Hielo, agua líquida y vapor son tres estados de la misma sustancia, H₂O.',source:'USGS',url:'https://www.usgs.gov/special-topics/water-science-school/science/water-cycle'},
  {id:'ice-less-dense',fact:'El hielo es menos denso que el agua líquida.',detail:'Por eso el hielo flota. Al congelarse, las moléculas forman una estructura más abierta.',source:'USGS',url:'https://www.usgs.gov/special-topics/water-science-school/science/water-density'},
  {id:'lightning-hot',fact:'Un relámpago puede calentar el aire a unos 30.000 °C.',detail:'La descarga eléctrica calienta el aire de forma extremadamente rápida, provocando la expansión que genera el trueno.',source:'NOAA',url:'https://www.noaa.gov/jetstream/lightning/thunder'},
  {id:'rain-smell',fact:'El olor de la lluvia sobre tierra tiene nombre: petricor.',detail:'El término describe el olor característico que aparece cuando la lluvia cae sobre suelo seco.',source:'Britannica',url:'https://www.britannica.com/science/petrichor'},
  {id:'glass-liquid',fact:'El vidrio no es un líquido que fluye lentamente.',detail:'A temperatura ambiente se comporta como un sólido amorfo, aunque su estructura microscópica no sea la de un cristal ordenado.',source:'Encyclopaedia Britannica',url:'https://www.britannica.com/science/glass'},
  {id:'diamonds-carbon',fact:'El diamante y el grafito están hechos del mismo elemento.',detail:'Ambos están formados por carbono, pero sus átomos están organizados de maneras diferentes, lo que produce propiedades radicalmente distintas.',source:'Encyclopaedia Britannica',url:'https://www.britannica.com/science/carbon-chemical-element'},
  {id:'gold-space',fact:'El oro que existe en la Tierra se formó en procesos cósmicos extremos.',detail:'Los elementos pesados como el oro pueden formarse en eventos astrofísicos como las fusiones de estrellas de neutrones.',source:'NASA',url:'https://science.nasa.gov/universe/exoplanets/where-did-gold-come-from/'},
  {id:'radioactivity-bananas',fact:'Los plátanos contienen una pequeña cantidad de potasio-40 radiactivo.',detail:'Es un isótopo natural del potasio. La cantidad presente en un plátano es diminuta y no representa un riesgo para comerlo.',source:'US NRC',url:'https://www.nrc.gov/reading-rm/basic-ref/students/science-101/radiation.html'},
  {id:'egypt-pyramids',fact:'Cleopatra vivió más cerca de la llegada a la Luna que de la construcción de las pirámides de Guiza.',detail:'La Gran Pirámide se terminó milenios antes de Cleopatra. La diferencia temporal es enorme.',source:'Smithsonian',url:'https://www.si.edu/spotlight/ancient-egypt'},
  {id:'shakespeare-mayan',fact:'La civilización maya ya tenía ciudades mucho antes de Shakespeare.',detail:'Las grandes ciudades mayas florecieron siglos antes de que William Shakespeare naciera en 1564.',source:'Smithsonian',url:'https://www.si.edu/spotlight/maya'},
  {id:'antarctica-freshwater',fact:'La mayor parte del hielo de la Tierra está en la Antártida.',detail:'La capa de hielo antártica almacena una enorme reserva de agua dulce congelada.',source:'NASA Earth Observatory',url:'https://earthobservatory.nasa.gov/world-of-change/antarctica'},
  {id:'deep-ocean',fact:'El punto más profundo conocido del océano supera los 10 km de profundidad.',detail:'El Challenger Deep, en la Fosa de las Marianas, se encuentra a casi 11 km bajo el nivel del mar.',source:'NOAA',url:'https://oceanservice.noaa.gov/facts/marianatrench.html'},
  {id:'everest-not-tallest',fact:'El Everest no es la montaña más alta si mides desde la base.',detail:'Mauna Kea alcanza una altura total mayor desde su base submarina, aunque gran parte está bajo el océano.',source:'NASA',url:'https://www.nasa.gov/wp-content/uploads/2015/04/how_big_is_it_web_040920_hires.pdf'},
  {id:'trees-carbon',fact:'Los árboles almacenan carbono en su biomasa.',detail:'Durante la fotosíntesis, las plantas toman dióxido de carbono y convierten parte de ese carbono en materia orgánica.',source:'NASA Earth Observatory',url:'https://earthobservatory.nasa.gov/features/CarbonCycle'},
  {id:'coral-animal',fact:'Los corales son animales, no plantas.',detail:'Cada coral está formado por pequeños animales llamados pólipos, que viven en colonias.',source:'NOAA',url:'https://oceanservice.noaa.gov/education/tutorial_corals/coral01_intro.html'},
  {id:'jellyfish-old',fact:'Las medusas existen desde hace cientos de millones de años.',detail:'El registro fósil muestra que los cnidarios, el grupo al que pertenecen, tienen una historia evolutiva muy antigua.',source:'Smithsonian Ocean',url:'https://ocean.si.edu/ocean-life/invertebrates/jellyfish'},
  {id:'dolphin-sleep',fact:'Los delfines pueden dormir con una mitad del cerebro a la vez.',detail:'Este tipo de descanso les permite mantener funciones necesarias para respirar y permanecer atentos al entorno.',source:'NOAA Fisheries',url:'https://www.fisheries.noaa.gov/feature-story/how-do-dolphins-sleep'},
  {id:'owl-eyes',fact:'Los ojos de los búhos son tan grandes que ocupan una gran parte de sus órbitas.',detail:'Su tamaño ayuda a captar luz, y su posición frontal contribuye a una excelente percepción de profundidad.',source:'Smithsonian National Zoo',url:'https://nationalzoo.si.edu/animals/great-horned-owl'},
  {id:'woodpecker-tongue',fact:'La lengua de algunos pájaros carpinteros puede ser sorprendentemente larga.',detail:'En varias especies, estructuras especializadas del aparato hioideo permiten extender la lengua para alcanzar insectos dentro de la madera.',source:'Smithsonian National Zoo',url:'https://nationalzoo.si.edu/animals/woodpecker'},
  {id:'human-bone',fact:'El hueso es un tejido vivo.',detail:'El tejido óseo se remodela continuamente mediante células que forman y reabsorben hueso.',source:'NIH / NIDCR',url:'https://www.nidcr.nih.gov/health-info/bone'},
  {id:'brain-energy',fact:'El cerebro consume una parte importante de la energía del cuerpo.',detail:'Aunque representa una fracción del peso corporal, el cerebro humano utiliza una proporción considerable del gasto energético en reposo.',source:'NCBI',url:'https://www.ncbi.nlm.nih.gov/books/NBK279388/'},
  {id:'brain-no-nociceptors',fact:'El tejido del cerebro no tiene nociceptores.',detail:'Los nociceptores detectan estímulos potencialmente dañinos. El propio tejido cerebral carece de ellos.',source:'NCBI / StatPearls',url:'https://www.ncbi.nlm.nih.gov/books/NBK539789/'},
  {id:'dna-length',fact:'El ADN de una sola célula humana mide muchísimo si se estira.',detail:'El ADN de una célula humana puede alcanzar alrededor de dos metros de longitud cuando se desenrolla.',source:'National Human Genome Research Institute',url:'https://www.genome.gov/about-genomics/fact-sheets/DNA-Fact-Sheet'},
  {id:'cells-bacteria',fact:'Tu cuerpo alberga billones de microorganismos.',detail:'El microbioma humano incluye comunidades enormes de bacterias y otros microorganismos que viven en distintas partes del cuerpo.',source:'NIH',url:'https://commonfund.nih.gov/hmp'},
  {id:'cats-domestication',fact:'Los gatos domésticos conservan muchas características de sus antepasados salvajes.',detail:'La domesticación de los gatos fue relativamente reciente en comparación con la de algunos animales de granja.',source:'Smithsonian',url:'https://nationalzoo.si.edu/animals/domestic-cat'},
  {id:'dogs-smell',fact:'Los perros tienen un sentido del olfato extraordinariamente desarrollado.',detail:'Su sistema olfativo tiene muchas más células receptoras que el humano y una región cerebral dedicada al olor proporcionalmente mayor.',source:'AKC',url:'https://www.akc.org/expert-advice/health/dogs-have-amazing-sense-smell/'},
  {id:'wombat-cubes',fact:'Los wombats producen heces con forma aproximadamente cúbica.',detail:'La forma se produce durante el proceso digestivo y por la elasticidad variable de distintas partes del intestino.',source:'Smithsonian Magazine',url:'https://www.smithsonianmag.com/smart-news/wombats-have-cube-shaped-poop-180970930/'},
  {id:'axolotl-regenerate',fact:'El ajolote puede regenerar extremidades.',detail:'También puede regenerar partes de órganos y otros tejidos, por lo que es un importante organismo de estudio en regeneración.',source:'National Institutes of Health',url:'https://www.nih.gov/news-events/nih-research-matters/axolotl-regeneration'},
  {id:'tardigrade',fact:'Los tardígrados pueden sobrevivir a condiciones extremas.',detail:'Algunas especies pueden entrar en un estado de latencia llamado criptobiosis que les permite resistir desecación, frío y otros extremos.',source:'NASA',url:'https://science.nasa.gov/biological-physical-sciences/space-biology/'},
  {id:'spider-silk',fact:'La seda de araña combina ligereza y gran resistencia.',detail:'Sus propiedades mecánicas dependen de la estructura de las proteínas que forman la seda.',source:'Smithsonian',url:'https://www.si.edu/spotlight/spy-in-the-web'},
  {id:'ocean-blue',fact:'El océano no es azul simplemente porque refleje el cielo.',detail:'El agua absorbe mejor ciertas longitudes de onda y deja que la luz azul penetre y se disperse más en grandes masas de agua.',source:'NOAA',url:'https://oceanservice.noaa.gov/facts/ocean-color.html'},
  {id:'earth-core',fact:'El centro de la Tierra es extremadamente caliente.',detail:'Las temperaturas del núcleo son comparables a las de la superficie del Sol, aunque la presión allí es gigantesca.',source:'USGS',url:'https://www.usgs.gov/programs/earthquake-hazards/science/earths-interior'},
  {id:'plate-tectonics',fact:'Los continentes se mueven.',detail:'Las placas tectónicas se desplazan lentamente sobre la Tierra, normalmente unos pocos centímetros por año.',source:'USGS',url:'https://www.usgs.gov/programs/earthquake-hazards/plate-tectonics'},
  {id:'volcano-underwater',fact:'La mayoría de la actividad volcánica de la Tierra ocurre bajo el océano.',detail:'Las dorsales oceánicas forman una extensa red volcánica submarina donde se crea nueva corteza.',source:'NOAA',url:'https://oceanservice.noaa.gov/facts/mid-ocean-ridge.html'},
  {id:'aurora',fact:'Las auroras son causadas por partículas procedentes del Sol.',detail:'Partículas energéticas interactúan con la magnetosfera y la atmósfera terrestre, produciendo las luces polares.',source:'NASA',url:'https://science.nasa.gov/sun/auroras/'},
  {id:'black-hole-light',fact:'Un agujero negro puede tener un horizonte del que ni la luz escapa.',detail:'El horizonte de sucesos marca una región a partir de la cual escapar requeriría superar la velocidad de la luz.',source:'NASA',url:'https://science.nasa.gov/universe/black-holes/'},
  {id:'milky-way',fact:'Nuestro sistema solar está dentro de la Vía Láctea.',detail:'La Vía Láctea es una galaxia espiral barrada que contiene cientos de miles de millones de estrellas.',source:'NASA',url:'https://science.nasa.gov/universe/galaxies/milky-way/'},
  {id:'light-year',fact:'Un año luz mide distancia, no tiempo.',detail:'Es la distancia que recorre la luz en un año: aproximadamente 9,46 billones de kilómetros.',source:'NASA',url:'https://science.nasa.gov/missions/webb/what-is-a-light-year/'},
  {id:'space-suits',fact:'Los trajes espaciales también funcionan como pequeñas naves personales.',detail:'Proporcionan presión, oxígeno, regulación térmica y protección frente al entorno espacial.',source:'NASA',url:'https://www.nasa.gov/humans-in-space/spacesuits/'},
  {id:'iss-speed',fact:'La Estación Espacial Internacional viaja a unos 28.000 km/h.',detail:'A esa velocidad completa una órbita de la Tierra aproximadamente cada 90 minutos.',source:'NASA',url:'https://www.nasa.gov/international-space-station/'},
  {id:'venus-clouds',fact:'Las nubes de Venus contienen ácido sulfúrico.',detail:'La atmósfera superior del planeta contiene nubes densas formadas principalmente por gotas de ácido sulfúrico.',source:'NASA',url:'https://science.nasa.gov/venus/venus-facts/'},
  {id:'mars-moons',fact:'Marte tiene dos lunas pequeñas: Fobos y Deimos.',detail:'Ambas son mucho más pequeñas que nuestra Luna y tienen formas irregulares.',source:'NASA',url:'https://science.nasa.gov/mars/moons/'},
  {id:'pluto-day',fact:'Un día en Plutón dura unas 153 horas terrestres.',detail:'Plutón gira lentamente y su rotación está inclinada de una manera bastante peculiar.',source:'NASA',url:'https://science.nasa.gov/dwarf-planets/pluto/facts/'},
  {id:'sun-color',fact:'El Sol no es realmente amarillo desde el espacio.',detail:'Su luz contiene prácticamente todos los colores visibles y, vista desde fuera de la atmósfera terrestre, se percibe como blanca.',source:'NASA',url:'https://science.nasa.gov/sun/facts/'},
  {id:'water-cycle',fact:'El agua de la Tierra circula continuamente entre océanos, tierra y atmósfera.',detail:'Evaporación, condensación, precipitación, infiltración y escorrentía forman parte del ciclo del agua.',source:'USGS',url:'https://www.usgs.gov/special-topics/water-science-school/science/water-cycle'},
  {id:'cloud-weight',fact:'Una nube puede pesar cientos de toneladas.',detail:'Aunque parece ligera, una nube contiene una enorme cantidad de diminutas gotas de agua distribuidas en un gran volumen.',source:'USGS',url:'https://www.usgs.gov/special-topics/water-science-school/science/clouds'},
  {id:'rainbow',fact:'Un arcoíris es un fenómeno óptico, no un objeto que puedas tocar.',detail:'Se produce cuando la luz se refracta, refleja y dispersa dentro de gotas de agua.',source:'NOAA',url:'https://www.weather.gov/jetstream/rainbow'},
  {id:'fossil-shark',fact:'Los dientes son una de las mejores partes para estudiar tiburones antiguos.',detail:'Como los tiburones reemplazan dientes continuamente, el registro fósil conserva enormes cantidades de dientes.',source:'Smithsonian Ocean',url:'https://ocean.si.edu/ocean-life/sharks-rays/sharks'},
  {id:'coral-reef',fact:'Los arrecifes de coral ocupan una pequeña parte del océano, pero sostienen una enorme biodiversidad.',detail:'Los ecosistemas coralinos proporcionan refugio y alimento a una gran variedad de especies marinas.',source:'NOAA',url:'https://oceanservice.noaa.gov/education/tutorial_corals/coral07_importance.html'}
];

let queue=[];
let history=[];
let current=null;
let liked=JSON.parse(localStorage.getItem('curioscroll-liked')||'{}');
let animating=false;
let startX=0,startY=0,dragging=false,dragPointerId=null;

const factEl=document.getElementById('fact');
const detailEl=document.getElementById('detail');
const sourceEl=document.getElementById('source');
const likeBtn=document.getElementById('like');
const likesEl=document.getElementById('likes');
const curiosity=document.getElementById('curiosity');
const stage=document.querySelector('.stage');
const gesture=document.querySelector('.gesture');

function shuffle(a){
  const x=[...a];
  for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}
  return x;
}
function nextFact(){
  if(!queue.length) queue=shuffle(facts.filter(f=>f.id!==current?.id));
  let f=queue.pop();
  if(f?.id===current?.id) f=shuffle(facts.filter(x=>x.id!==current.id))[0];
  return f;
}
function formatCount(n){return n>=1000?(n/1000).toFixed(1).replace('.0','')+'K':String(n)}
function updateLike(){
  const v=Number(liked[current?.id]||0);
  likesEl.textContent=formatCount(v);
  likeBtn.setAttribute('aria-pressed',v?'true':'false');
}
function fill(f){
  current=f;
  factEl.textContent=f.fact;
  detailEl.textContent=f.detail;
  sourceEl.textContent=`Fuente: ${f.source}`;
  sourceEl.href=f.url;
  updateLike();
}
function initial(){
  fill(nextFact());
  curiosity.classList.add('is-ready');
}
function transitionTo(f,direction=1){
  if(animating||!f||f.id===current?.id)return;
  animating=true;
  history.push(current);
  curiosity.classList.remove('is-ready','enter-up','enter-down');
  curiosity.classList.add(direction>0?'exit-up':'exit-down');
  setTimeout(()=>{
    fill(f);
    curiosity.classList.remove('exit-up','exit-down');
    curiosity.classList.add(direction>0?'enter-up':'enter-down');
    requestAnimationFrame(()=>requestAnimationFrame(()=>curiosity.classList.add('is-ready')));
    setTimeout(()=>{curiosity.classList.remove('enter-up','enter-down');animating=false;},420);
  },220);
}
function go(direction){
  if(animating)return;
  if(direction<0 && history.length){
    const previous=history.pop();
    if(previous) transitionTo(previous,-1);
  }else transitionTo(nextFact(),1);
}
function dragMove(y){
  if(!dragging||animating)return;
  const dy=y-startY;
  if(Math.abs(dy)<4)return;
  const amount=Math.max(-145,Math.min(145,dy));
  const rotation=Math.max(-2.2,Math.min(2.2,amount/70));
  const opacity=1-Math.min(Math.abs(amount)/260,.45);
  curiosity.style.transform=`translate3d(0,${amount}px,0) rotate(${rotation}deg)`;
  curiosity.style.opacity=opacity;
  stage.classList.add('is-dragging');
}
function dragEnd(y){
  if(!dragging)return;
  dragging=false;
  stage.classList.remove('is-dragging');
  const dy=y-startY;
  curiosity.style.transform='';
  curiosity.style.opacity='';
  if(Math.abs(dy)>70 && Math.abs(dy)>Math.abs(startX-(window._lastX||startX))*1.05){
    go(dy<0?1:-1);
  }
}

stage.addEventListener('pointerdown',e=>{
  if(e.target.closest('button,a')||animating)return;
  dragging=true;dragPointerId=e.pointerId;startX=e.clientX;startY=e.clientY;window._lastX=e.clientX;
  stage.setPointerCapture?.(e.pointerId);
});
stage.addEventListener('pointermove',e=>{if(e.pointerId===dragPointerId){window._lastX=e.clientX;dragMove(e.clientY)}});
stage.addEventListener('pointerup',e=>{if(e.pointerId===dragPointerId)dragEnd(e.clientY)});
stage.addEventListener('pointercancel',e=>{if(e.pointerId===dragPointerId){dragging=false;curiosity.style.transform='';curiosity.style.opacity='';stage.classList.remove('is-dragging')}});

let wheelLocked=false;
window.addEventListener('wheel',e=>{
  if(Math.abs(e.deltaY)<20||wheelLocked)return;
  wheelLocked=true;go(e.deltaY>0?1:-1);setTimeout(()=>wheelLocked=false,480);
},{passive:true});
window.addEventListener('keydown',e=>{
  if(e.key==='ArrowDown'||e.key===' '){e.preventDefault();go(1)}
  if(e.key==='ArrowUp'){e.preventDefault();go(-1)}
});
likeBtn.addEventListener('click',e=>{
  e.stopPropagation();if(!current)return;
  liked[current.id]=liked[current.id]?0:1;
  localStorage.setItem('curioscroll-liked',JSON.stringify(liked));updateLike();
  likeBtn.classList.remove('pop');requestAnimationFrame(()=>likeBtn.classList.add('pop'));
});
sourceEl.addEventListener('click',e=>e.stopPropagation());
setTimeout(()=>gesture?.classList.add('fade'),4500);
initial();
