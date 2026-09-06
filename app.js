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
{id:'coral-reef',fact:'Los arrecifes de coral ocupan una pequeña parte del océano, pero sostienen una enorme biodiversidad.',detail:'Los ecosistemas coralinos proporcionan refugio y alimento a una gran variedad de especies marinas.',source:'NOAA',url:'https://oceanservice.noaa.gov/education/tutorial_corals/coral07_importance.html'},
{id:'mercury-year',fact:'Un año en Mercurio dura solo 88 días terrestres.',detail:'Mercurio completa una vuelta alrededor del Sol en aproximadamente 88 días.',source:'NASA',url:'https://science.nasa.gov/mercury/mercury-facts/'},
{id:'mercury-day',fact:'En Mercurio, un día solar dura unos 176 días terrestres.',detail:'Su rotación y su órbita están relacionadas de una forma que hace que el ciclo de día y noche sea muy largo.',source:'NASA',url:'https://science.nasa.gov/mercury/mercury-facts/'},
{id:'mercury-sunrise',fact:'En Mercurio, el Sol puede parecer salir, detenerse y volver a moverse en el cielo.',detail:'La combinación entre su rotación y su movimiento orbital produce un movimiento solar aparente muy peculiar.',source:'NASA',url:'https://science.nasa.gov/mercury/mercury-facts/'},
{id:'venus-hottest',fact:'Venus es el planeta más caliente del sistema solar.',detail:'Su densa atmósfera provoca un efecto invernadero extremo que mantiene temperaturas superficiales de unos 467 °C.',source:'NASA',url:'https://science.nasa.gov/venus/venus-facts/'},
{id:'venus-pressure',fact:'La presión en la superficie de Venus es unas 93 veces la de la Tierra al nivel del mar.',detail:'La atmósfera venusiana es tan densa que la presión superficial es comparable a estar a gran profundidad bajo el agua en la Tierra.',source:'NASA',url:'https://science.nasa.gov/venus/venus-facts/'},
{id:'venus-no-moons',fact:'Venus no tiene ninguna luna.',detail:'Es uno de los dos planetas del sistema solar que no tienen satélites naturales conocidos.',source:'NASA',url:'https://science.nasa.gov/venus/venus-facts/'},
{id:'mars-olympus',fact:'Marte alberga Olympus Mons, el volcán más grande conocido del sistema solar.',detail:'Es un volcán gigantesco y mucho más ancho que cualquier volcán terrestre comparable.',source:'NASA',url:'https://science.nasa.gov/mars/'},
{id:'mars-valles',fact:'Marte tiene un sistema de cañones gigantes llamado Valles Marineris.',detail:'Se extiende miles de kilómetros por la superficie marciana y supera ampliamente en longitud a muchos sistemas de cañones terrestres.',source:'NASA',url:'https://science.nasa.gov/mars/'},
{id:'mars-atmosphere',fact:'La atmósfera de Marte está compuesta principalmente por dióxido de carbono.',detail:'La atmósfera marciana es muy delgada en comparación con la terrestre.',source:'NASA',url:'https://science.nasa.gov/mars/mars-facts/'},
{id:'mars-no-rings',fact:'Marte no tiene anillos.',detail:'Sus dos satélites naturales son Fobos y Deimos.',source:'NASA',url:'https://science.nasa.gov/mars/moons/'},
{id:'jupiter-mass',fact:'Júpiter tiene más masa que todos los demás planetas del sistema solar juntos.',detail:'Su enorme masa domina gran parte de la dinámica gravitatoria del sistema solar exterior.',source:'NASA',url:'https://science.nasa.gov/jupiter/jupiter-facts/'},
{id:'jupiter-moons',fact:'Júpiter tiene muchas lunas conocidas.',detail:'Las observaciones modernas han descubierto una gran población de satélites alrededor del planeta gigante.',source:'NASA',url:'https://science.nasa.gov/jupiter/jupiter-moons/'},
{id:'jupiter-great-spot',fact:'La Gran Mancha Roja de Júpiter lleva observándose durante siglos.',detail:'Es un enorme sistema tormentoso situado en la atmósfera del planeta.',source:'NASA',url:'https://science.nasa.gov/jupiter/jupiter-facts/'},
{id:'jupiter-rings',fact:'Júpiter también tiene anillos.',detail:'Son mucho más tenues que los de Saturno y fueron descubiertos por la Voyager 1.',source:'NASA',url:'https://science.nasa.gov/jupiter/jupiter-facts/'},
{id:'saturn-rings',fact:'Los anillos de Saturno están formados principalmente por partículas de hielo y roca.',detail:'El tamaño de las partículas va desde diminutos granos hasta bloques mucho mayores.',source:'NASA',url:'https://science.nasa.gov/saturn/saturn-facts/'},
{id:'saturn-rings-young',fact:'Los anillos de Saturno son relativamente jóvenes en términos astronómicos.',detail:'Los científicos siguen estudiando cuándo se formaron y cómo han evolucionado.',source:'NASA',url:'https://science.nasa.gov/saturn/saturn-facts/'},
{id:'saturn-moons',fact:'Saturno tiene una gran familia de lunas.',detail:'Entre ellas está Titán, un mundo con una atmósfera densa y lagos de hidrocarburos líquidos.',source:'NASA',url:'https://science.nasa.gov/saturn/moons/'},
{id:'titan-lakes',fact:'Titán tiene lagos y mares de metano y etano líquidos en su superficie.',detail:'Es el único mundo del sistema solar, aparte de la Tierra, con líquidos estables en grandes cantidades sobre su superficie.',source:'NASA',url:'https://science.nasa.gov/saturn/moons/titan/'},
{id:'titan-atmosphere',fact:'Titán tiene una atmósfera densa rica en nitrógeno.',detail:'Su atmósfera es más espesa que la de Marte y contiene hidrocarburos complejos.',source:'NASA',url:'https://science.nasa.gov/saturn/moons/titan/'},
{id:'enceladus-water',fact:'Encélado expulsa chorros de material desde su región polar.',detail:'Las observaciones de Cassini mostraron chorros de partículas de hielo y vapor de agua procedentes de un océano subterráneo.',source:'NASA',url:'https://science.nasa.gov/saturn/moons/enceladus/'},
{id:'uranus-rings',fact:'Urano tiene un sistema de anillos.',detail:'Sus anillos son oscuros y mucho menos visibles que los de Saturno.',source:'NASA',url:'https://science.nasa.gov/uranus/uranus-facts/'},
{id:'uranus-seasons',fact:'En Urano, una estación puede durar alrededor de 21 años terrestres.',detail:'Su enorme inclinación axial hace que cada hemisferio pase largos periodos orientado hacia el Sol.',source:'NASA',url:'https://science.nasa.gov/uranus/uranus-facts/'},
{id:'uranus-cold',fact:'Urano puede alcanzar temperaturas atmosféricas extremadamente bajas.',detail:'Aunque Neptuno está más lejos del Sol, Urano registra algunas de las temperaturas planetarias más frías medidas.',source:'NASA',url:'https://science.nasa.gov/uranus/uranus-facts/'},
{id:'neptune-year',fact:'Un año en Neptuno dura unos 165 años terrestres.',detail:'Debido a su enorme distancia del Sol, tarda muchísimo en completar una órbita.',source:'NASA',url:'https://science.nasa.gov/neptune/neptune-facts/'},
{id:'neptune-moons',fact:'Neptuno tiene una colección de lunas, incluida Tritón.',detail:'Tritón es la mayor luna de Neptuno y tiene una órbita retrógrada.',source:'NASA',url:'https://science.nasa.gov/neptune/moons/'},
{id:'neptune-discovery',fact:'Neptuno fue descubierto gracias a predicciones matemáticas.',detail:'Las perturbaciones observadas en la órbita de Urano llevaron a calcular la posición de un planeta desconocido.',source:'NASA',url:'https://science.nasa.gov/neptune/neptune-facts/'},
{id:'pluto-dwarf',fact:'Plutón está clasificado como planeta enano.',detail:'La Unión Astronómica Internacional lo reclasificó en 2006 dentro de una nueva definición de planeta.',source:'NASA',url:'https://science.nasa.gov/dwarf-planets/pluto/'},
{id:'pluto-heart',fact:'Plutón tiene una enorme región brillante con forma de corazón.',detail:'La región, conocida como Tombaugh Regio, fue observada con gran detalle por New Horizons.',source:'NASA',url:'https://science.nasa.gov/dwarf-planets/pluto/'},
{id:'pluto-charon',fact:'Plutón y Caronte orbitan un centro de masas situado fuera de Plutón.',detail:'Por eso el sistema se comporta de manera diferente a un planeta con una luna pequeña.',source:'NASA',url:'https://science.nasa.gov/dwarf-planets/pluto/'},
{id:'moon-no-atmosphere',fact:'La Luna prácticamente no tiene una atmósfera densa.',detail:'Posee una exosfera extremadamente tenue, insuficiente para producir clima como el terrestre.',source:'NASA',url:'https://science.nasa.gov/moon/'},
{id:'moon-water-ice',fact:'Hay hielo de agua en regiones permanentemente sombreadas de la Luna.',detail:'Misiones espaciales han detectado depósitos de hielo en cráteres polares donde la luz solar directa casi nunca llega.',source:'NASA',url:'https://science.nasa.gov/moon/'},
{id:'moon-earth-size',fact:'La Luna tiene aproximadamente una cuarta parte del diámetro de la Tierra.',detail:'Es excepcionalmente grande en relación con el planeta que orbita.',source:'NASA',url:'https://science.nasa.gov/moon/facts/'},
{id:'moon-eclipses',fact:'Los eclipses solares ocurren porque el Sol y la Luna tienen tamaños aparentes similares vistos desde la Tierra.',detail:'La coincidencia de distancias y tamaños permite que la Luna cubra el disco solar durante un eclipse total.',source:'NASA',url:'https://science.nasa.gov/moon/'},
{id:'earth-moon-tides',fact:'Las mareas terrestres están fuertemente influenciadas por la gravedad de la Luna.',detail:'La interacción gravitatoria entre la Tierra, la Luna y el Sol produce las mareas oceánicas.',source:'NASA',url:'https://science.nasa.gov/moon/'},
{id:'earth-magnetic-field',fact:'La Tierra tiene un campo magnético que ayuda a protegerla del viento solar.',detail:'El campo está generado principalmente por movimientos del hierro líquido del núcleo externo.',source:'NASA',url:'https://science.nasa.gov/earth/earth-facts/'},
{id:'earth-atmosphere',fact:'La atmósfera terrestre está compuesta aproximadamente por 78% de nitrógeno y 21% de oxígeno.',detail:'El resto está formado por argón, dióxido de carbono y otros gases en cantidades menores.',source:'NASA',url:'https://science.nasa.gov/earth/earth-facts/'},
{id:'earth-freshwater',fact:'La mayor parte del agua de la Tierra es salada.',detail:'La mayor reserva de agua del planeta está en los océanos, mientras que el agua dulce representa una fracción pequeña.',source:'USGS',url:'https://www.usgs.gov/special-topics/water-science-school/science/where-earths-water'},
{id:'earth-oceans',fact:'El océano global contiene alrededor del 97% del agua de la Tierra.',detail:'El resto se encuentra en hielo, aguas subterráneas, lagos, ríos, atmósfera y otros reservorios.',source:'NASA',url:'https://science.nasa.gov/earth/facts/'},
{id:'earth-longest-range',fact:'La cordillera más larga de la Tierra está bajo el océano.',detail:'Las dorsales mediooceánicas forman una red montañosa submarina que recorre enormes distancias.',source:'NOAA',url:'https://oceanservice.noaa.gov/facts/mid-ocean-ridge.html'},
{id:'earth-plates',fact:'La corteza terrestre está dividida en grandes placas tectónicas.',detail:'Estas placas se mueven lentamente y sus interacciones producen terremotos, volcanes y montañas.',source:'USGS',url:'https://www.usgs.gov/programs/earthquake-hazards/plate-tectonics'},
{id:'earth-core-solid',fact:'El núcleo interno de la Tierra es sólido.',detail:'Aunque está extremadamente caliente, la presión enorme mantiene el hierro y níquel del núcleo interno en estado sólido.',source:'USGS',url:'https://www.usgs.gov/programs/earthquake-hazards/science/earths-interior'},
{id:'earth-crust-ocean',fact:'La corteza oceánica es generalmente más delgada que la continental.',detail:'La corteza bajo los océanos tiene un espesor medio mucho menor que la corteza continental.',source:'USGS',url:'https://www.usgs.gov/programs/earthquake-hazards/science/earths-interior'},
{id:'earth-seasons',fact:'Las estaciones existen principalmente por la inclinación del eje terrestre.',detail:'La Tierra recibe diferente iluminación solar a lo largo de su órbita porque su eje está inclinado.',source:'NASA',url:'https://science.nasa.gov/earth/facts/'},
{id:'earth-leap-year',fact:'El año terrestre dura aproximadamente 365,25 días.',detail:'Por eso nuestro calendario necesita añadir un día aproximadamente cada cuatro años para mantenerse alineado con el ciclo orbital.',source:'NASA',url:'https://science.nasa.gov/earth/facts/'},
{id:'earth-light',fact:'La luz solar tarda unos ocho minutos en llegar a la Tierra.',detail:'La distancia media entre la Tierra y el Sol es de unos 150 millones de kilómetros.',source:'NASA',url:'https://science.nasa.gov/earth/facts/'},
{id:'sun-mass',fact:'El Sol contiene más del 99% de la masa del sistema solar.',detail:'Su enorme masa domina gravitacionalmente las órbitas de los planetas y otros objetos.',source:'NASA',url:'https://science.nasa.gov/sun/facts/'},
{id:'sun-hydrogen',fact:'El Sol obtiene su energía principalmente de la fusión de hidrógeno en su núcleo.',detail:'En la fusión, núcleos de hidrógeno se combinan para formar helio y liberar energía.',source:'NASA',url:'https://science.nasa.gov/sun/facts/'},
{id:'sun-core',fact:'El núcleo del Sol alcanza millones de grados.',detail:'Las condiciones de temperatura y presión del núcleo permiten que ocurra la fusión nuclear.',source:'NASA',url:'https://science.nasa.gov/sun/facts/'},
{id:'sun-wind',fact:'El Sol emite un flujo continuo de partículas llamado viento solar.',detail:'Ese flujo puede interactuar con los campos magnéticos de los planetas.',source:'NASA',url:'https://science.nasa.gov/sun/solar-wind/'},
{id:'sun-cycle',fact:'La actividad magnética del Sol sigue un ciclo aproximado de 11 años.',detail:'Durante el ciclo cambia la cantidad de manchas solares y otros fenómenos de actividad.',source:'NASA',url:'https://science.nasa.gov/sun/solar-cycle/'},
{id:'sun-spots',fact:'Las manchas solares son regiones de la superficie solar más frías que sus alrededores.',detail:'Su apariencia oscura se debe a que tienen menor temperatura que la fotosfera circundante.',source:'NASA',url:'https://science.nasa.gov/sun/sunspots/'},
{id:'space-silent',fact:'En el vacío espacial no hay un medio suficiente para transportar el sonido como en el aire.',detail:'Por eso una persona fuera de una nave no escucharía directamente una explosión cercana a través del vacío.',source:'NASA',url:'https://science.nasa.gov/ems/02_anatomy/'},
{id:'light-speed',fact:'La luz viaja en el vacío a unos 300.000 kilómetros por segundo.',detail:'Esta velocidad es una constante fundamental de la física.',source:'NASA',url:'https://science.nasa.gov/missions/webb/what-is-a-light-year/'},
{id:'black-hole-collisions',fact:'Las fusiones de agujeros negros pueden producir ondas gravitacionales.',detail:'Esas ondas son pequeñas deformaciones que viajan por el espacio-tiempo y pueden detectarse en la Tierra.',source:'NASA',url:'https://science.nasa.gov/universe/black-holes/'},
{id:'milky-way-black-hole',fact:'En el centro de la Vía Láctea hay un agujero negro supermasivo.',detail:'Se llama Sagitario A* y tiene una masa de unos cuatro millones de soles.',source:'NASA',url:'https://science.nasa.gov/universe/black-holes/'},
{id:'galaxies-many',fact:'El universo observable contiene una enorme cantidad de galaxias.',detail:'Las observaciones profundas del cielo muestran galaxias de distintas edades, tamaños y formas.',source:'NASA',url:'https://science.nasa.gov/universe/galaxies/'},
{id:'exoplanets-thousands',fact:'Se han confirmado miles de exoplanetas.',detail:'Son planetas que orbitan estrellas distintas del Sol y se detectan mediante varios métodos astronómicos.',source:'NASA',url:'https://science.nasa.gov/exoplanets/'},
{id:'exoplanet-transit',fact:'Una forma de descubrir exoplanetas es observar pequeñas disminuciones en el brillo de una estrella.',detail:'Cuando un planeta pasa delante de su estrella, bloquea una pequeña fracción de su luz.',source:'NASA',url:'https://science.nasa.gov/exoplanets/'},
{id:'jwst-infrared',fact:'El telescopio espacial James Webb observa principalmente luz infrarroja.',detail:'La radiación infrarroja permite estudiar objetos fríos, polvo y galaxias muy lejanas.',source:'NASA',url:'https://science.nasa.gov/mission/webb/'},
{id:'hubble-orbit',fact:'El telescopio Hubble orbita la Tierra.',detail:'Su ubicación fuera de la atmósfera evita que la turbulencia atmosférica distorsione sus observaciones ópticas.',source:'NASA',url:'https://science.nasa.gov/mission/hubble/'},
{id:'iss-microgravity',fact:'La Estación Espacial Internacional está en caída libre alrededor de la Tierra.',detail:'La sensación de ingravidez ocurre porque la estación y todo lo que está dentro caen continuamente mientras avanzan alrededor del planeta.',source:'NASA',url:'https://www.nasa.gov/international-space-station/'},
{id:'iss-sunrise',fact:'Los astronautas de la Estación Espacial Internacional pueden ver muchos amaneceres en un solo día.',detail:'La estación completa una órbita terrestre aproximadamente cada 90 minutos.',source:'NASA',url:'https://www.nasa.gov/international-space-station/'},
{id:'sharks-species',fact:'Existen más de 500 especies de tiburones.',detail:'Van desde especies pequeñas hasta el tiburón ballena, que puede superar los 12 metros.',source:'Smithsonian Ocean',url:'https://ocean.si.edu/ocean-life/sharks-rays/sharks'},
{id:'whale-blue',fact:'La ballena azul es el animal más grande conocido que ha vivido en la Tierra.',detail:'Los ejemplares pueden alcanzar longitudes de más de 25 metros.',source:'Smithsonian Ocean',url:'https://ocean.si.edu/ocean-life/marine-mammals/blue-whale'},
{id:'whale-heart',fact:'El corazón de una ballena azul es enorme.',detail:'Como el animal necesita mantener la circulación en un cuerpo gigantesco, su sistema cardiovascular también es de gran escala.',source:'Smithsonian Ocean',url:'https://ocean.si.edu/ocean-life/marine-mammals/blue-whale'},
{id:'dolphin-breath',fact:'Los delfines respiran aire y deben salir a la superficie para hacerlo.',detail:'Aunque viven en el agua, son mamíferos y no pueden extraer oxígeno del agua como los peces.',source:'NOAA Fisheries',url:'https://www.fisheries.noaa.gov/feature-story/how-do-dolphins-sleep'},
{id:'octopus-arms',fact:'Los pulpos tienen ocho brazos.',detail:'Sus brazos contienen una gran cantidad de neuronas y pueden realizar movimientos muy complejos.',source:'Smithsonian Ocean',url:'https://ocean.si.edu/ocean-life/invertebrates/octopus'},
{id:'octopus-suckers',fact:'Los pulpos tienen ventosas capaces de detectar sustancias químicas.',detail:'Sus ventosas participan tanto en el agarre como en la exploración del entorno.',source:'Smithsonian Ocean',url:'https://ocean.si.edu/ocean-life/invertebrates/octopus'},
{id:'jellyfish-no-brain',fact:'Las medusas no tienen cerebro.',detail:'Su sistema nervioso consiste en una red difusa de neuronas que coordina respuestas básicas.',source:'Smithsonian Ocean',url:'https://ocean.si.edu/ocean-life/invertebrates/jellyfish'},
{id:'coral-symbiosis',fact:'Muchos corales viven en asociación con algas microscópicas.',detail:'Estas algas proporcionan productos de la fotosíntesis al coral y son fundamentales para muchos arrecifes tropicales.',source:'NOAA',url:'https://oceanservice.noaa.gov/education/tutorial_corals/coral02_zooxanthellae.html'},
{id:'coral-skeleton',fact:'Los corales pétreos construyen esqueletos de carbonato de calcio.',detail:'Con el tiempo, esos esqueletos pueden formar grandes estructuras de arrecife.',source:'NOAA',url:'https://oceanservice.noaa.gov/education/tutorial_corals/coral01_intro.html'},
{id:'octopus-camouflage',fact:'Los pulpos pueden cambiar rápidamente el color y aspecto de su piel.',detail:'Utilizan células especializadas como cromatóforos para modificar su apariencia.',source:'Smithsonian Ocean',url:'https://ocean.si.edu/ocean-life/invertebrates/octopus'},
{id:'shark-cartilage',fact:'Los tiburones tienen un esqueleto formado principalmente por cartílago.',detail:'A diferencia de los peces óseos, no tienen un esqueleto interno compuesto principalmente por hueso.',source:'Smithsonian Ocean',url:'https://ocean.si.edu/ocean-life/sharks-rays/sharks'},
{id:'shark-teeth',fact:'Los tiburones reemplazan continuamente muchos de sus dientes.',detail:'La sustitución continua ayuda a compensar el desgaste y la pérdida de dientes durante la alimentación.',source:'Smithsonian Ocean',url:'https://ocean.si.edu/ocean-life/sharks-rays/sharks'},
{id:'penguin-flight',fact:'Los pingüinos son aves que no vuelan por el aire.',detail:'Sus alas evolucionaron como estructuras adaptadas para nadar bajo el agua.',source:'Smithsonian',url:'https://nationalzoo.si.edu/animals/penguin'},
{id:'ostrich-eggs',fact:'El avestruz pone los huevos más grandes entre las aves actuales.',detail:'Su tamaño está relacionado con el gran cuerpo de esta especie.',source:'Smithsonian National Zoo',url:'https://nationalzoo.si.edu/animals/ostrich'},
{id:'owl-neck',fact:'Los búhos pueden girar la cabeza hasta unos 270 grados.',detail:'No giran el cuello 360 grados; su anatomía cervical y vascular permite un giro muy amplio.',source:'Smithsonian National Zoo',url:'https://nationalzoo.si.edu/animals/owl'},
{id:'bee-dance',fact:'Las abejas melíferas pueden comunicar la dirección de una fuente de alimento mediante una danza.',detail:'La llamada danza de meneo transmite información espacial a otras abejas de la colonia.',source:'Smithsonian',url:'https://nationalzoo.si.edu/animals/honey-bee'},
{id:'bee-pollination',fact:'Las abejas son importantes polinizadoras de muchas plantas.',detail:'Al visitar flores para obtener alimento, transportan polen entre estructuras reproductivas de las plantas.',source:'Smithsonian',url:'https://nationalzoo.si.edu/animals/honey-bee'},
{id:'butterfly-wings',fact:'Las alas de las mariposas están cubiertas por diminutas escamas.',detail:'Las escamas contribuyen a sus patrones de color y pueden desprenderse con facilidad.',source:'Smithsonian',url:'https://www.si.edu/spotlight/buginfo/butterflies'},
{id:'spider-eight',fact:'Las arañas tienen ocho patas.',detail:'Son arácnidos, no insectos; los insectos tienen seis patas.',source:'Smithsonian',url:'https://www.si.edu/spotlight/spy-in-the-web'},
{id:'spider-web-protein',fact:'La seda de araña está formada por proteínas.',detail:'Sus propiedades dependen de la organización molecular de proteínas como la espidroína.',source:'Smithsonian',url:'https://www.si.edu/spotlight/spy-in-the-web'},
{id:'ant-colony',fact:'Las hormigas viven en sociedades organizadas con división del trabajo.',detail:'Diferentes individuos pueden especializarse en tareas como búsqueda de alimento, defensa o cuidado de la cría.',source:'Smithsonian',url:'https://www.si.edu/spotlight/ant'},
{id:'termite-mounds',fact:'Algunos termiteros pueden funcionar como sistemas de ventilación natural.',detail:'La arquitectura de ciertas colonias ayuda a regular temperatura y gases dentro de la estructura.',source:'Smithsonian',url:'https://www.si.edu/spotlight/termite'},
{id:'elephant-social',fact:'Los elefantes viven en sociedades complejas.',detail:'Las manadas de hembras suelen estar organizadas alrededor de grupos familiares relacionados.',source:'Smithsonian National Zoo',url:'https://nationalzoo.si.edu/animals/elephant'},
{id:'giraffe-heart',fact:'Las jirafas necesitan una presión arterial alta para llevar sangre hasta el cerebro.',detail:'Su cuello es muy largo y el sistema cardiovascular está adaptado para mantener el flujo sanguíneo.',source:'Smithsonian National Zoo',url:'https://nationalzoo.si.edu/animals/giraffe'},
{id:'cheetah-claws',fact:'Las garras del guepardo no se retraen completamente.',detail:'Esto ayuda a proporcionar tracción durante las aceleraciones rápidas.',source:'Smithsonian National Zoo',url:'https://nationalzoo.si.edu/animals/cheetah'},
{id:'axolotl-larva',fact:'El ajolote puede conservar características juveniles durante su vida adulta.',detail:'Este fenómeno se conoce como neotenia y permite que mantenga branquias externas en la etapa adulta.',source:'NIH',url:'https://www.nih.gov/news-events/nih-research-matters/axolotl-regeneration'},
{id:'tardigrade-tiny',fact:'Los tardígrados suelen medir menos de un milímetro.',detail:'Son animales microscópicos de ocho patas que viven en ambientes acuáticos o húmedos.',source:'NASA',url:'https://science.nasa.gov/biological-physical-sciences/space-biology/'},
{id:'dog-nose',fact:'El olfato de los perros está especializado para detectar y distinguir olores.',detail:'Su anatomía nasal y regiones cerebrales relacionadas con el olfato son mucho más desarrolladas que en humanos.',source:'AKC',url:'https://www.akc.org/expert-advice/health/dogs-have-amazing-sense-smell/'},
{id:'cat-whiskers',fact:'Los bigotes de los gatos son órganos sensoriales especializados.',detail:'Las vibrisas ayudan a detectar cambios en el entorno cercano y movimientos del aire.',source:'Smithsonian National Zoo',url:'https://nationalzoo.si.edu/animals/domestic-cat'},
{id:'cat-claws',fact:'Las garras de los gatos pueden retraerse.',detail:'Esto ayuda a mantenerlas afiladas y permite caminar sin desgastarlas constantemente.',source:'Smithsonian National Zoo',url:'https://nationalzoo.si.edu/animals/domestic-cat'},
{id:'koala-fingerprint',fact:'Las huellas dactilares de los koalas son muy parecidas a las humanas.',detail:'Sus patrones pueden resultar difíciles de distinguir de los humanos sin un análisis cuidadoso.',source:'Smithsonian National Zoo',url:'https://nationalzoo.si.edu/animals/koala'},
{id:'wombat-pouch',fact:'La bolsa de los wombats se abre hacia atrás.',detail:'Esta orientación ayuda a evitar que tierra y residuos entren en la bolsa mientras excavan.',source:'Smithsonian',url:'https://nationalzoo.si.edu/animals/wombat'},
{id:'banana-clone',fact:'Muchas variedades comerciales de plátano se propagan mediante clones vegetativos.',detail:'Esto permite mantener características deseadas, pero reduce la diversidad genética de los cultivos.',source:'FAO',url:'https://www.fao.org/3/y4890e/y4890e07.htm'},
{id:'potato-stem',fact:'La papa que comemos es un tallo modificado.',detail:'Los tubérculos de papa son tallos subterráneos especializados en almacenar nutrientes.',source:'Britannica',url:'https://www.britannica.com/plant/potato'},
{id:'onion-bulb',fact:'La cebolla forma un bulbo que almacena nutrientes.',detail:'Sus capas carnosas son hojas modificadas que almacenan reservas para el crecimiento de la planta.',source:'Britannica',url:'https://www.britannica.com/plant/onion-plant'},
{id:'bamboo-grass',fact:'El bambú pertenece a la familia de las gramíneas.',detail:'Aunque puede alcanzar tamaños enormes y parecer un árbol, botánicamente es una hierba.',source:'Britannica',url:'https://www.britannica.com/plant/bamboo'},
{id:'sunflower-head',fact:'Lo que parece una sola flor de girasol es en realidad una inflorescencia.',detail:'Está formada por muchas flores individuales agrupadas en una estructura llamada capítulo.',source:'Britannica',url:'https://www.britannica.com/plant/sunflower'},
{id:'pinecone-seeds',fact:'Las piñas de las coníferas protegen estructuras reproductivas.',detail:'En muchas especies, las semillas se desarrollan sobre las escamas de los conos.',source:'Britannica',url:'https://www.britannica.com/science/cone-plant-reproductive-structure'},
{id:'mushroom-not-plant',fact:'Los hongos no son plantas.',detail:'Forman un reino biológico propio y obtienen nutrientes de materia orgánica en lugar de realizar fotosíntesis.',source:'Britannica',url:'https://www.britannica.com/science/fungus'},
{id:'yeast-fungus',fact:'La levadura es un hongo.',detail:'Muchas levaduras son organismos unicelulares capaces de fermentar azúcares.',source:'Britannica',url:'https://www.britannica.com/science/yeast'},
{id:'lichen-partnership',fact:'Un liquen es una asociación entre un hongo y un organismo fotosintético.',detail:'El socio fotosintético suele ser un alga o una cianobacteria.',source:'Britannica',url:'https://www.britannica.com/science/lichen'},
{id:'rainfall-cycle',fact:'La lluvia devuelve agua desde la atmósfera a la superficie terrestre.',detail:'Es una parte esencial del ciclo hidrológico que conecta atmósfera, océanos y continentes.',source:'USGS',url:'https://www.usgs.gov/special-topics/water-science-school/science/water-cycle'},
{id:'groundwater',fact:'El agua subterránea ocupa espacios y fracturas dentro de rocas y sedimentos.',detail:'No forma necesariamente grandes lagos subterráneos; a menudo llena poros y grietas.',source:'USGS',url:'https://www.usgs.gov/special-topics/water-science-school/science/groundwater'},
{id:'aquifer',fact:'Un acuífero es una formación geológica que puede almacenar y transmitir agua.',detail:'El agua subterránea circula a través de espacios porosos o fracturas de materiales permeables.',source:'USGS',url:'https://www.usgs.gov/special-topics/water-science-school/science/aquifers-and-groundwater'},
{id:'snowflake-six',fact:'Los cristales de nieve comunes tienen simetría de seis lados.',detail:'La estructura molecular del hielo hace que los cristales de nieve desarrollen formas hexagonales.',source:'USGS',url:'https://www.usgs.gov/special-topics/water-science-school/science/snow'},
{id:'ice-density',fact:'El hielo flota porque es menos denso que el agua líquida.',detail:'La estructura cristalina del hielo ocupa más volumen que una cantidad equivalente de agua líquida.',source:'USGS',url:'https://www.usgs.gov/special-topics/water-science-school/science/water-density'},
{id:'thunder-lightning',fact:'El trueno se produce porque el aire se expande rápidamente al calentarse por un relámpago.',detail:'La expansión genera una onda de choque que percibimos como sonido.',source:'NOAA',url:'https://www.noaa.gov/jetstream/lightning/thunder'},
{id:'hurricane-eye',fact:'Los huracanes intensos pueden tener un ojo relativamente tranquilo en su centro.',detail:'El ojo está rodeado por la pared del ojo, donde suelen encontrarse algunos de los vientos más fuertes.',source:'NOAA',url:'https://www.noaa.gov/jetstream/hurricanes/hurricane-structure'},
{id:'hurricane-water',fact:'Los huracanes obtienen gran parte de su energía del calor del océano.',detail:'El agua cálida favorece la evaporación y proporciona energía al sistema tropical.',source:'NOAA',url:'https://www.noaa.gov/jetstream/hurricanes'},
{id:'tornado-pressure',fact:'Los tornados son columnas de aire en rotación intensa asociadas a tormentas.',detail:'No todos tienen la misma estructura ni alcanzan la misma intensidad.',source:'NOAA',url:'https://www.noaa.gov/jetstream/tornadoes'},
{id:'rain-freezing',fact:'La lluvia puede congelarse al tocar superficies frías.',detail:'Este fenómeno produce hielo transparente conocido como lluvia engelante.',source:'NOAA',url:'https://www.weather.gov/safety/winter-freezing-rain'},
{id:'rainbow-double',fact:'En ciertas condiciones pueden aparecer arcoíris dobles.',detail:'El segundo arco se produce por una reflexión adicional de la luz dentro de las gotas de agua.',source:'NOAA',url:'https://www.weather.gov/jetstream/rainbow'},
{id:'aurora-colors',fact:'Las auroras pueden presentar colores distintos.',detail:'El color depende de los gases atmosféricos implicados y de la altura donde ocurren las emisiones de luz.',source:'NASA',url:'https://science.nasa.gov/sun/auroras/'},
{id:'magnetosphere',fact:'La magnetosfera desvía gran parte de las partículas cargadas del viento solar.',detail:'El campo magnético terrestre crea una región protectora alrededor del planeta.',source:'NASA',url:'https://science.nasa.gov/earth/earths-magnetosphere/'},
{id:'ocean-pressure',fact:'La presión del agua aumenta con la profundidad.',detail:'Por eso explorar las zonas más profundas del océano requiere vehículos y equipos capaces de soportar enormes presiones.',source:'NOAA',url:'https://oceanservice.noaa.gov/facts/pressure.html'},
{id:'mariana-deep',fact:'El Challenger Deep se encuentra en la Fosa de las Marianas.',detail:'Es la región más profunda conocida de los océanos terrestres y supera los 10 kilómetros de profundidad.',source:'NOAA',url:'https://oceanservice.noaa.gov/facts/marianatrench.html'},
{id:'ocean-dark',fact:'La luz solar desaparece progresivamente con la profundidad del océano.',detail:'A partir de cierta profundidad ya no hay suficiente luz para la fotosíntesis.',source:'NOAA',url:'https://oceanservice.noaa.gov/facts/light_travel.html'},
{id:'ocean-sound',fact:'El sonido viaja más rápido en el agua que en el aire.',detail:'Las propiedades físicas del agua permiten una velocidad de propagación del sonido mayor que en la atmósfera.',source:'NOAA',url:'https://oceanservice.noaa.gov/education/tutorial_currents/04sound.html'},
{id:'ocean-current',fact:'Las corrientes oceánicas redistribuyen calor por el planeta.',detail:'El movimiento del agua influye en el clima y transporta energía y nutrientes.',source:'NOAA',url:'https://oceanservice.noaa.gov/education/tutorial_currents/'},
{id:'deep-sea-pressure',fact:'En las grandes profundidades marinas la presión es cientos de veces mayor que en la superficie.',detail:'La presión aumenta aproximadamente una atmósfera por cada 10 metros de profundidad de agua.',source:'NOAA',url:'https://oceanservice.noaa.gov/facts/pressure.html'},
{id:'coral-bleaching',fact:'El blanqueamiento de coral ocurre cuando los corales pierden muchas de sus algas simbióticas.',detail:'El estrés térmico es una causa importante de episodios de blanqueamiento.',source:'NOAA',url:'https://oceanservice.noaa.gov/education/tutorial_corals/coral07_importance.html'},
{id:'mangrove-roots',fact:'Los manglares pueden crecer en ambientes costeros salinos.',detail:'Sus adaptaciones permiten vivir en zonas donde el agua y el suelo tienen concentraciones elevadas de sal.',source:'NOAA',url:'https://oceanservice.noaa.gov/facts/mangroves.html'},
{id:'human-blood',fact:'La sangre humana transporta oxígeno principalmente mediante la hemoglobina.',detail:'La hemoglobina se encuentra dentro de los glóbulos rojos y se une reversiblemente al oxígeno.',source:'NIH',url:'https://www.nhlbi.nih.gov/health/blood'},
{id:'human-heart',fact:'El corazón humano tiene cuatro cavidades.',detail:'Dos aurículas reciben sangre y dos ventrículos la bombean hacia los pulmones y el resto del cuerpo.',source:'NIH',url:'https://www.nhlbi.nih.gov/health/heart'},
{id:'human-lungs',fact:'El pulmón derecho y el izquierdo no son exactamente iguales.',detail:'El pulmón izquierdo es algo más pequeño porque debe dejar espacio para el corazón.',source:'NIH',url:'https://www.nhlbi.nih.gov/health/lungs'},
{id:'human-skin',fact:'La piel es el órgano más grande del cuerpo humano.',detail:'Actúa como barrera y participa en la regulación de temperatura, sensibilidad y protección.',source:'NIH',url:'https://www.niams.nih.gov/health-topics/skin'},
{id:'human-bone-count',fact:'Un adulto humano suele tener 206 huesos.',detail:'Los bebés tienen más estructuras óseas porque algunos huesos se fusionan durante el crecimiento.',source:'NIH',url:'https://www.niams.nih.gov/health-topics/bone-health'},
{id:'human-muscles',fact:'El cuerpo humano tiene más de 600 músculos.',detail:'Los músculos permiten movimiento, mantienen la postura y participan en funciones internas.',source:'NIH',url:'https://www.niams.nih.gov/health-topics/muscle-disorders'},
{id:'human-dna',fact:'Casi todas las células humanas contienen el mismo ADN nuclear.',detail:'Lo que diferencia muchos tipos celulares es qué genes se activan y cómo se regulan.',source:'NHGRI',url:'https://www.genome.gov/about-genomics/fact-sheets/DNA-Fact-Sheet'},
{id:'human-red-cells',fact:'Los glóbulos rojos humanos maduros no tienen núcleo.',detail:'Esta adaptación deja más espacio para la hemoglobina y facilita su función de transporte de oxígeno.',source:'NIH',url:'https://www.nhlbi.nih.gov/health/blood'},
{id:'brain-neurons',fact:'El cerebro humano contiene decenas de miles de millones de neuronas.',detail:'Las neuronas forman redes de comunicación mediante señales eléctricas y químicas.',source:'NIH',url:'https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-understanding-sleep'},
{id:'brain-sleep',fact:'Dormir no significa que el cerebro deje de trabajar.',detail:'Durante el sueño ocurren procesos activos relacionados con memoria, regulación y mantenimiento cerebral.',source:'NIH',url:'https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-understanding-sleep'},
{id:'dna-chromosomes',fact:'El ADN humano está organizado en cromosomas dentro del núcleo celular.',detail:'Las células humanas normalmente tienen 23 pares de cromosomas.',source:'NHGRI',url:'https://www.genome.gov/about-genomics/fact-sheets/Chromosomes-Fact-Sheet'},
{id:'microbiome-gut',fact:'El intestino humano alberga una comunidad enorme de microorganismos.',detail:'La microbiota intestinal interactúa con la alimentación, el sistema inmunitario y el entorno del intestino.',source:'NIH',url:'https://commonfund.nih.gov/hmp'},
{id:'pain-brain',fact:'Sentir dolor no significa que el tejido cerebral en sí tenga receptores de dolor.',detail:'La señal dolorosa procede de estructuras sensibles alrededor del cerebro, no de las neuronas del tejido cerebral.',source:'NCBI',url:'https://www.ncbi.nlm.nih.gov/books/NBK539789/'},
{id:'skeleton-remodel',fact:'El tejido óseo se renueva durante toda la vida.',detail:'Células especializadas eliminan tejido viejo y otras forman tejido nuevo como parte del remodelado óseo.',source:'NIH',url:'https://www.niams.nih.gov/health-topics/bone-health'},
{id:'teeth-enamel',fact:'El esmalte dental es el tejido más duro del cuerpo humano.',detail:'Está altamente mineralizado y protege la parte externa de los dientes.',source:'NIH',url:'https://www.nidcr.nih.gov/health-info/tooth-decay'},
{id:'saliva-digestion',fact:'La digestión comienza en la boca.',detail:'La saliva humedece los alimentos y contiene enzimas que empiezan a descomponer algunos nutrientes.',source:'NIH',url:'https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works'},
{id:'stomach-acid',fact:'El estómago utiliza ácido para ayudar a digerir los alimentos.',detail:'El ácido gástrico contribuye a desnaturalizar proteínas y facilita la acción de enzimas digestivas.',source:'NIH',url:'https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works'},
{id:'liver-regeneration',fact:'El hígado tiene una capacidad notable de regeneración.',detail:'Puede recuperar gran parte de su masa después de ciertas lesiones o resecciones, aunque eso no significa que sea invulnerable.',source:'NIH',url:'https://www.niddk.nih.gov/health-information/liver-disease'},
{id:'blood-vessels',fact:'Los vasos sanguíneos forman una red extensa por todo el cuerpo.',detail:'Arterias, venas y capilares permiten transportar sangre entre el corazón y los tejidos.',source:'NIH',url:'https://www.nhlbi.nih.gov/health/blood-vessels'}
];

/* CurioScroll navigation engine
   The interaction is controlled by JavaScript. CSS is only responsible for layout/style.
*/
const stage = document.getElementById('stage');
const likeBtn = document.getElementById('like');
const likesEl = document.getElementById('likes');
const gesture = document.querySelector('.gesture');

let currentCard = document.getElementById('curiosity-current');
let incomingCard = document.getElementById('curiosity-incoming');

const liked = JSON.parse(localStorage.getItem('curioscroll-liked') || '{}');
const recentIds = [];
const history = [];
let current = null;
let target = null;
let drag = false;
let animating = false;
let pointerId = null;
let startY = 0;
let lastY = 0;
let dragDirection = 0;
let lastInteraction = 0;

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function remember(id) {
  recentIds.push(id);
  if (recentIds.length > 12) recentIds.shift();
}

function pickNext() {
  const pool = facts.filter(f => f.id !== current?.id && !recentIds.includes(f.id));
  const fallback = facts.filter(f => f.id !== current?.id);
  const source = pool.length ? pool : fallback;
  return source[Math.floor(Math.random() * source.length)];
}

function setCard(card, fact) {
  card.querySelector('.fact').textContent = fact.fact;
  card.querySelector('.detail').textContent = fact.detail;
  const source = card.querySelector('.source');
  source.textContent = `Fuente: ${fact.source}`;
  source.href = fact.url;
}

function cardTransform(y, scale = 1) {
  return `translate3d(-50%, calc(-50% + ${y}px), 0) scale(${scale})`;
}

function setCardPosition(card, y, scale = 1, opacity = 1) {
  card.style.transform = cardTransform(y, scale);
  card.style.opacity = opacity;
}

function syncLike() {
  const on = !!liked[current?.id];
  likeBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
  likesEl.textContent = on ? '1' : '0';
}

function prepareIncoming(dir) {
  if (dir > 0) {
    target = pickNext();
  } else {
    target = history.length ? history[history.length - 1] : null;
  }
  if (!target) return false;

  setCard(incomingCard, target);
  const h = window.innerHeight;
  incomingCard.style.transition = 'none';
  setCardPosition(incomingCard, dir > 0 ? h : -h, 0.985, 0.45);
  return true;
}

function swapCards(dir) {
  const oldCurrent = current;
  current = target;

  if (dir > 0) {
    history.push(oldCurrent);
    remember(current.id);
  } else if (history.length) {
    history.pop();
  }

  [currentCard, incomingCard] = [incomingCard, currentCard];
  setCardPosition(currentCard, 0, 1, 1);
  setCardPosition(incomingCard, dir > 0 ? window.innerHeight : -window.innerHeight, .985, 0);
  syncLike();
  target = null;
}

function animateTo(dir) {
  if (!target || animating) return;
  animating = true;
  const h = window.innerHeight;
  const start = performance.now();
  const duration = 430;
  const fromCurrent = parseFloat(currentCard.dataset.y || '0');

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    const currentY = fromCurrent + ((dir > 0 ? -h : h) - fromCurrent) * eased;
    const incomingStart = dir > 0 ? h : -h;
    const incomingY = incomingStart * (1 - eased);
    const progress = Math.min(1, Math.abs(currentY) / h);

    setCardPosition(currentCard, currentY, 1 - progress * .025, 1 - progress * .42);
    setCardPosition(incomingCard, incomingY, .985 + progress * .015, .45 + progress * .55);

    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      currentCard.dataset.y = '0';
      incomingCard.dataset.y = '0';
      swapCards(dir);
      animating = false;
    }
  }

  requestAnimationFrame(frame);
}

function cancelDrag() {
  if (!target) return;
  const h = window.innerHeight;
  const dir = dragDirection || 1;
  const start = performance.now();
  const duration = 220;
  const currentY = parseFloat(currentCard.dataset.y || '0');

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const y = currentY * (1 - eased);
    const incomingStart = dir > 0 ? h : -h;
    const incomingY = incomingStart + (0 - incomingStart) * eased;
    setCardPosition(currentCard, y, 1 - Math.abs(y / h) * .025, 1 - Math.abs(y / h) * .42);
    setCardPosition(incomingCard, incomingY, .985, .45 + Math.min(1, Math.abs(y / h)) * .55);
    if (t < 1) requestAnimationFrame(frame);
    else {
      setCardPosition(currentCard, 0, 1, 1);
      setCardPosition(incomingCard, dir > 0 ? h : -h, .985, 0);
      currentCard.dataset.y = '0';
      target = null;
      dragDirection = 0;
    }
  }
  requestAnimationFrame(frame);
}

function beginDrag(y, id = null) {
  if (animating) return;
  drag = true;
  pointerId = id;
  startY = y;
  lastY = y;
  dragDirection = 0;
  target = null;
  stage.classList.add('is-dragging');
}

function updateDrag(y) {
  if (!drag || animating) return;
  const dy = y - startY;
  lastY = y;
  if (Math.abs(dy) < 3) return;

  const dir = dy < 0 ? 1 : -1;
  if (dir !== dragDirection || !target) {
    dragDirection = dir;
    if (!prepareIncoming(dir)) return;
  }

  const h = window.innerHeight;
  const offset = dy * .92;
  const progress = Math.min(1, Math.abs(offset) / h);
  const incomingStart = dir > 0 ? h : -h;
  const incomingY = incomingStart + offset;
  const currentOpacity = 1 - progress * .30;
  const incomingOpacity = .42 + progress * .58;

  currentCard.dataset.y = String(offset);
  setCardPosition(currentCard, offset, 1 - progress * .025, currentOpacity);
  setCardPosition(incomingCard, incomingY, .985 + progress * .015, incomingOpacity);
}

function endDrag(y) {
  if (!drag) return;
  drag = false;
  stage.classList.remove('is-dragging');

  const dy = y - startY;
  const velocity = Math.abs(dy) / Math.max(1, performance.now() - lastInteraction);
  const threshold = Math.min(120, window.innerHeight * .16);
  const shouldCommit = target && (Math.abs(dy) >= threshold || velocity > .65);

  if (shouldCommit) animateTo(dragDirection);
  else cancelDrag();
}

stage.addEventListener('pointerdown', e => {
  if (e.target.closest('button,a')) return;
  lastInteraction = performance.now();
  beginDrag(e.clientY, e.pointerId);
  stage.setPointerCapture?.(e.pointerId);
});

stage.addEventListener('pointermove', e => {
  if (pointerId === e.pointerId) updateDrag(e.clientY);
});

stage.addEventListener('pointerup', e => {
  if (pointerId === e.pointerId) endDrag(e.clientY);
  pointerId = null;
});

stage.addEventListener('pointercancel', e => {
  if (pointerId === e.pointerId) {
    drag = false;
    stage.classList.remove('is-dragging');
    cancelDrag();
  }
  pointerId = null;
});

// Touch fallback for older Android WebViews.
stage.addEventListener('touchstart', e => {
  if (e.target.closest('button,a')) return;
  lastInteraction = performance.now();
  beginDrag(e.changedTouches[0].clientY);
}, {passive: true});

stage.addEventListener('touchmove', e => {
  if (drag) updateDrag(e.changedTouches[0].clientY);
}, {passive: true});

stage.addEventListener('touchend', e => {
  if (drag) endDrag(e.changedTouches[0].clientY);
}, {passive: true});

let wheelLock = false;
window.addEventListener('wheel', e => {
  if (wheelLock || animating || Math.abs(e.deltaY) < 12) return;
  const dir = e.deltaY > 0 ? 1 : -1;
  if (prepareIncoming(dir)) {
    wheelLock = true;
    animateTo(dir);
    setTimeout(() => wheelLock = false, 470);
  }
}, {passive: true});

window.addEventListener('keydown', e => {
  if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== ' ') return;
  e.preventDefault();
  if (animating) return;
  const dir = e.key === 'ArrowUp' ? -1 : 1;
  if (prepareIncoming(dir)) animateTo(dir);
});

likeBtn.addEventListener('click', e => {
  e.stopPropagation();
  if (!current) return;
  liked[current.id] = liked[current.id] ? 0 : 1;
  localStorage.setItem('curioscroll-liked', JSON.stringify(liked));
  syncLike();
  likeBtn.animate([
    {transform:'scale(.88)'},
    {transform:'scale(1.08)'},
    {transform:'scale(1)'}
  ], {duration:280, easing:'cubic-bezier(.2,.8,.2,1)'});
});

window.addEventListener('resize', () => {
  if (!drag && !animating) {
    setCardPosition(currentCard, 0, 1, 1);
    if (target) setCardPosition(incomingCard, dragDirection > 0 ? window.innerHeight : -window.innerHeight, .985, .45);
  }
});

function init() {
  current = shuffle(facts)[0];
  remember(current.id);
  setCard(currentCard, current);
  setCardPosition(currentCard, 0, 1, 1);
  setCardPosition(incomingCard, window.innerHeight, .985, 0);
  syncLike();
  setTimeout(() => gesture?.classList.add('fade'), 3200);
}

init();
