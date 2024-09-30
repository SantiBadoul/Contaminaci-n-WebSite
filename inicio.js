// Galería de imágenes
let currentIndex = 0;
const images = document.querySelectorAll('.gallery-slide img');
const totalImages = images.length;

function showImage(index) {
    const gallerySlide = document.querySelector('.gallery-slide');
    gallerySlide.style.transform = `translateX(-${index * 100}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
}

// Bot Responses
const botResponses = {
    "hola": "¡Hola!, ¿cómo puedo ayudarte hoy?",
    "quien sos": "Soy Wayih, creado para responder tus dudas.",
    "todo bien": "¡Genial! ¿En qué puedo asistirte?",
    "como estas": "Estoy funcionando correctamente, gracias por preguntar.",
    "chau": "¡Hasta luego! Que tengas un buen día.",
    "donde estas": "Estoy dentro de tu computadora.",
    "fecha": `Hoy es ${new Date().toLocaleDateString()}.`,
    "ayuda": "Estoy aquí para ayudarte. ¿En qué puedo asistirte?",
    "gracias": "¡De nada!",
    "que es un proyecto": "Un proyecto tecnológico es un conjunto de actividades organizadas para alcanzar objetivos específicos usando herramientas y técnicas tecnológicas.",
    "ecología": "La ecología es la rama de la biología que estudia las interacciones entre los organismos vivos y su entorno.",
    "ciencia": "Se refiere al conocimiento sistemático obtenido mediante la observación y experimentación.",
    "sociedad": "Según Max Weber, la sociedad es la convivencia organizada de individuos con un cierto grado de comunicación y cooperación.",
    "tecnología": "Es el conjunto de técnicas, habilidades, métodos y procesos utilizados para crear bienes o servicios.",
    "contaminación": "La contaminación es la presencia de sustancias nocivas en el medio ambiente que afectan la salud humana y el ecosistema.",
    "aire": "La contaminación del aire es la presencia de sustancias nocivas en la atmósfera que afectan la salud humana y el medio ambiente.",
    "contaminantes": "Los principales contaminantes del aire son el dióxido de carbono, dióxido de azufre, óxidos de nitrógeno y material particulado.",
    "smog": "El smog es una forma de contaminación del aire compuesta por humo y niebla, causado principalmente por la quema de combustibles fósiles.",
    "dióxido de carbono": "El CO₂ es un gas de efecto invernadero que contribuye al calentamiento global.",
    "salud": "La contaminación del aire puede causar problemas respiratorios y enfermedades graves.",
    "lluvia ácida": "Es la precipitación con niveles elevados de ácidos, provocada por la emisión de óxidos de azufre y nitrógeno en la atmósfera.",
    "agua": "La contaminación del agua es la presencia de sustancias nocivas en cuerpos de agua.",
    "fuentes de contaminación": "Las principales fuentes son residuos industriales, aguas residuales y la agricultura intensiva.",
    "mercado": "El mercurio es un metal tóxico que contamina el agua a través de la minería.",
    "plástico marino": "Son desechos plásticos que terminan en el mar, causando daño a la vida marina.",
    "eutrofización": "Es el exceso de nutrientes en el agua que provoca el crecimiento descontrolado de algas.",
    "suelo": "La contaminación del suelo es la presencia de sustancias químicas tóxicas en el suelo.",
    "desertificación": "Es la degradación del suelo en áreas secas debido a actividades humanas.",
    "metales pesados": "Son elementos como plomo y mercurio que pueden ser tóxicos para los organismos vivos.",
    "fertilizantes": "Pueden alterar la composición del suelo y contaminar las aguas subterráneas.",
    "cambio climático": "Es el cambio a largo plazo de las temperaturas y patrones climáticos en la Tierra.",
    "efecto invernadero": "Es el fenómeno por el cual ciertos gases en la atmósfera retienen el calor.",
    "huella ecológica": "Es una medida de la cantidad de recursos naturales que usamos y la cantidad de desechos que generamos.",
    "energía renovable": "Son fuentes de energía que se regeneran naturalmente, como la solar y la eólica.",
    "reciclaje": "Es el proceso de convertir residuos en nuevos productos para reducir la contaminación.",
    "sostenibilidad": "Es la capacidad de satisfacer nuestras necesidades actuales sin comprometer los recursos para futuras generaciones.",

    //Palabras comunes
    "árbol": "Hay alrededor de 25 millones de especies de árboles. ¿Te gustaría saber sobre alguna en particular?",
    "amor": "El amor tiene diferentes formas, como el amor romántico, familiar y platónico.",
    "agua": "El agua cubre aproximadamente el 71% de la superficie de la Tierra.",
    "amigo": "La amistad puede aumentar la longevidad y mejorar la salud mental.",
    "animal": "Existen aproximadamente 8.7 millones de especies de animales en el planeta.",
    
    "bicicleta": "La bicicleta es uno de los medios de transporte más sostenibles y saludables.",
    "bosque": "Los bosques son vitales para el ecosistema, proporcionando oxígeno y hábitat.",
    "bailar": "Bailar puede ser una forma efectiva de expresión y ejercicio físico.",
    "bebida": "Las bebidas pueden ser tanto saludables como indulgentes, dependiendo de sus ingredientes.",
    "belleza": "La percepción de la belleza varía significativamente entre diferentes culturas.",
    
    "casa": "Las casas reflejan la cultura y el estilo de vida de sus habitantes.",
    "comida": "La comida no solo nutre, sino que también une a las personas.",
    "cielo": "El cielo puede tener diferentes colores y patrones, dependiendo de la hora del día.",
    "ciencia": "La ciencia nos ayuda a entender el mundo y a desarrollar nuevas tecnologías.",
    "cultura": "La cultura incluye tradiciones, creencias y expresiones artísticas de una sociedad.",
    
    "día": "Un día tiene 24 horas, pero su percepción puede variar según la actividad.",
    "danza": "La danza es una forma antigua de comunicación y celebración en muchas culturas.",
    "dinero": "El dinero es una herramienta utilizada para intercambiar bienes y servicios.",
    "desarrollo": "El desarrollo humano se refiere a mejorar la calidad de vida de las personas.",
    "diversidad": "La diversidad en la naturaleza y en la sociedad es esencial para la resiliencia.",
    
    "energía": "La energía es esencial para todas las actividades y procesos en el universo.",
    "educación": "La educación es un derecho humano fundamental que abre oportunidades.",
    "esperanza": "La esperanza puede ser un motivador poderoso en tiempos difíciles.",
    "ética": "La ética se refiere a los principios que guían nuestras decisiones y comportamientos.",
    "emoción": "Las emociones influyen en nuestro comportamiento y decisiones diarias.",
    
    "familia": "La familia puede ser una fuente de apoyo y amor incondicional.",
    "felicidad": "La felicidad es subjetiva y puede ser influenciada por múltiples factores.",
    "florecer": "Las plantas florecen en respuesta a cambios en el ambiente y la luz.",
    "futuro": "El futuro es incierto, pero podemos influir en él con nuestras acciones.",
    "fuerza": "La fuerza no solo se refiere a lo físico, sino también a la resiliencia emocional.",
    
    "grupo": "Los grupos pueden proporcionar apoyo social y un sentido de pertenencia.",
    "gestos": "Los gestos pueden comunicar emociones y mensajes sin necesidad de palabras.",
    "gente": "Las interacciones humanas son fundamentales para el desarrollo social y emocional.",
    "guerra": "La guerra ha sido una constante en la historia humana, con consecuencias devastadoras.",
    "gratitud": "Practicar la gratitud puede aumentar la felicidad y reducir el estrés.",
    
    "hogar": "El hogar es donde se forjan los recuerdos y se construye la identidad.",
    "humor": "El humor es una herramienta poderosa para enfrentar desafíos y crear conexiones.",
    "héroe": "Los héroes pueden ser figuras históricas o personas comunes que hacen el bien.",
    "historia": "La historia nos ayuda a comprender nuestro pasado y aprender de él.",
    "humanidad": "La humanidad enfrenta desafíos globales que requieren colaboración y comprensión.",
    
    "idea": "Las ideas innovadoras pueden cambiar el mundo y resolver problemas complejos.",
    "interacción": "Las interacciones sociales son esenciales para nuestro bienestar emocional.",
    "inteligencia": "La inteligencia puede manifestarse de muchas formas, no solo en lo académico.",
    "identidad": "La identidad se forma a través de experiencias, creencias y relaciones.",
    "inspiración": "La inspiración puede venir de muchas fuentes, desde la naturaleza hasta otras personas.",
    
    "jardín": "Los jardines pueden ser espacios de paz y reflexión, además de ser bellos.",
    "juego": "El juego es fundamental para el desarrollo infantil y el aprendizaje.",
    "juntos": "Estar juntos en momentos difíciles fortalece los lazos humanos.",
    "jubilación": "La jubilación puede ser una nueva etapa de vida llena de oportunidades.",
    "justicia": "La justicia es un principio esencial en las sociedades para garantizar la equidad.",
    
    "kilómetro": "Un kilómetro equivale a mil metros y se utiliza para medir distancias.",
    "karma": "El karma se refiere a la ley de causa y efecto en la vida de las personas.",
    "kiosco": "Los kioscos son lugares comunes para comprar periódicos, golosinas y más.",
    "kinesiología": "La kinesiología es el estudio del movimiento humano y su aplicación terapéutica.",
    "karaoke": "El karaoke es una forma popular de entretenimiento social en muchos países.",
    
    "libertad": "La libertad es un derecho fundamental que todos deberíamos valorar.",
    "luz": "La luz solar es vital para la vida en la Tierra y afecta nuestro estado de ánimo.",
    "lectura": "La lectura puede enriquecer nuestra mente y expandir nuestro conocimiento.",
    "liderazgo": "El buen liderazgo inspira y motiva a otros a alcanzar sus metas.",
    "lealtad": "La lealtad es una cualidad importante en las amistades y relaciones.",
    
    "música": "La música puede evocar emociones y recuerdos, siendo un potente vínculo social.",
    "memoria": "La memoria es crucial para el aprendizaje y la construcción de nuestra identidad.",
    "miedo": "El miedo es una emoción natural que puede protegernos de peligros.",
    "motivación": "La motivación interna es clave para lograr objetivos y superar desafíos.",
    "meditación": "La meditación puede ayudar a reducir el estrés y mejorar la claridad mental.",
    
    "naturaleza": "La naturaleza es esencial para nuestra supervivencia y bienestar.",
    "nostalgia": "La nostalgia puede traer recuerdos felices, aunque a veces sea melancólica.",
    "noche": "La noche trae consigo un cambio en el ambiente y puede ser un momento de reflexión.",
    "necesidades": "Identificar y satisfacer nuestras necesidades es crucial para el bienestar.",
    "novedad": "La novedad puede estimular el cerebro y fomentar la curiosidad.",
    
    "ñandú": "El ñandú es un ave nativa de América del Sur, similar a un avestruz.",
    "ñu": "El ñu es conocido por sus migraciones masivas en África.",
    "ñame": "El ñame es un tubérculo comestible, rico en carbohidratos.",
    "ñoño": "El término 'ñoño' se usa a menudo para referirse a alguien que es excesivamente serio o aburrido.",
    "ñuñoa": "Ñuñoa es una comuna de Santiago de Chile, conocida por su vida cultural.",

    "oración": "Las oraciones pueden ser simples o complejas, dependiendo de su estructura.",
    "océano": "Los océanos cubren más del 70% de la superficie de la Tierra y son vitales para la vida.",
    "orquídea": "Las orquídeas son una de las familias de plantas más diversas y hermosas.",
    "objetivo": "Establecer objetivos claros puede ayudar a alcanzar metas personales.",
    "optimismo": "El optimismo está relacionado con una mejor salud mental y bienestar general.",
    
    "paz": "La paz es un estado deseado en las relaciones humanas y entre naciones.",
    "pasión": "La pasión por algo puede ser un gran motivador en la vida.",
    "perdón": "El perdón puede ser liberador y es esencial para la sanación emocional.",
    "progreso": "El progreso se mide a menudo en términos de avances sociales y tecnológicos.",
    "pregunta": "Las preguntas son clave para el aprendizaje y el descubrimiento.",
    
    "química": "La química es la ciencia que estudia la composición y propiedades de la materia.",
    "quiebre": "El quiebre puede referirse a un cambio significativo en la vida de una persona.",
    "quimera": "La quimera es un término que se utiliza en biología y mitología.",
    "quedarse": "Quedarse en el momento presente puede ayudar a reducir la ansiedad.",
    "quorum": "El quórum es el número mínimo de miembros necesarios para llevar a cabo una reunión.",
    
    "respeto": "El respeto es fundamental para construir relaciones saludables.",
    "relación": "Las relaciones se basan en la confianza, la comunicación y el respeto mutuo.",
    "reflejo": "El reflejo es una respuesta automática del cuerpo a estímulos externos.",
    "recuerdos": "Los recuerdos pueden ser tanto positivos como negativos, moldeando nuestra identidad.",
    "resiliencia": "La resiliencia es la capacidad de recuperarse de las adversidades.",
    
    "sueño": "Los sueños son una parte importante de nuestra vida, influyendo en nuestras metas.",
    "sabiduría": "La sabiduría se adquiere a través de experiencias y aprendizaje a lo largo de la vida.",
    "silencio": "El silencio puede ser reconfortante y una oportunidad para la reflexión.",
    "sonrisa": "Una sonrisa puede mejorar el estado de ánimo y crear conexiones positivas.",
    
    "tiempo": "El tiempo es un recurso valioso que debemos gestionar sabiamente.",
    "tolerancia": "La tolerancia es esencial para convivir en una sociedad diversa.",
    "transformación": "La transformación personal es un proceso continuo de crecimiento.",
    "trabajo": "El trabajo en equipo puede potenciar el rendimiento y la creatividad.",
    "tranquilidad": "La tranquilidad mental es clave para una vida equilibrada.",
    
    "universo": "El universo es vasto y en gran medida desconocido, lleno de misterios.",
    "unidad": "La unidad en un grupo puede ser fundamental para lograr objetivos comunes.",
    "urgente": "Las situaciones urgentes requieren atención y acción inmediata.",
    "utopía": "La utopía es un concepto ideal de sociedad perfecta que rara vez se alcanza.",
    "último": "El 'último' puede referirse a lo que queda o se presenta al final de un proceso.",
    
    "vacaciones": "Las vacaciones ofrecen una oportunidad para descansar y rejuvenecer.",
    "valores": "Los valores guían nuestras decisiones y comportamiento en la vida.",
    "vinculo": "Los vínculos entre personas son esenciales para el bienestar emocional.",
    "visibilidad": "La visibilidad es importante en la representación de grupos marginados.",
    "vitalidad": "La vitalidad se relaciona con la energía y la salud general de una persona.",
    
    "zapato": "Los zapatos son una parte importante de nuestra vestimenta y estilo personal.",
    "zoológico": "Los zoológicos permiten a las personas aprender sobre la vida silvestre y la conservación.",
    "zen": "El zen es una escuela de budismo que enfatiza la meditación y la atención plena.",
    "zambullida": "La zambullida es una forma de entrar al agua, ya sea en un deporte o recreativamente.",
    "zenith": "El zenith es el punto más alto, ya sea en términos de posición o logro.",


    // SUELO VARIABLES
    "ph": "El pH del suelo mide su acidez o alcalinidad, y es fundamental para la disponibilidad de nutrientes para las plantas.",
    "umg/m3": "La unidad de medida UMG/m³ se refiere a la concentración de materia orgánica en el suelo, lo que es vital para la fertilidad y la estructura del mismo.",
    "fertilidad": "La fertilidad del suelo es la capacidad del suelo para proporcionar nutrientes esenciales a las plantas y sustentar su crecimiento.",
    "humedad del suelo": "La humedad del suelo es la cantidad de agua presente en el suelo, y es crucial para el desarrollo de las plantas.",
    "estructura del suelo": "La estructura del suelo se refiere a cómo se agrupan las partículas del suelo, afectando la aireación, drenaje y disponibilidad de nutrientes.",
    "conductividad eléctrica": "La conductividad eléctrica del suelo es un indicador de la concentración de sales en el suelo, que puede afectar la salud de las plantas.",
    "capacidad de retención de agua": "La capacidad de retención de agua del suelo es la habilidad del suelo para retener agua, esencial para el crecimiento de las plantas durante períodos secos.",
    "textura del suelo": "La textura del suelo describe la proporción de arena, limo y arcilla en el suelo, lo que influye en sus propiedades físicas y químicas.",
    "materia orgánica": "La materia orgánica en el suelo es esencial para la fertilidad, ya que mejora la estructura del suelo y la disponibilidad de nutrientes.",
    "nutrientes del suelo": "Los nutrientes del suelo, como nitrógeno, fósforo y potasio, son esenciales para el crecimiento y desarrollo de las plantas.",

    //CONTAMINACION
    "contaminacion electronica": "El reciclaje inadecuado de electrónicos afecta el medio ambiente.",
    "basura electronica": "La acumulación de residuos electrónicos contamina los suelos y agua.",
    "componentes toxicos": "Los dispositivos contienen metales pesados que son peligrosos para la salud.",
    "reciclaje electronico": "Es esencial para reducir el impacto ambiental de la tecnología.",
    "tierras raras": "Se usan en electrónica y su extracción impacta gravemente el ecosistema.",
    "metales pesados": "Plomo y mercurio en dispositivos pueden contaminar aguas subterráneas.",
    "baterias usadas": "Las baterías contienen químicos tóxicos que se filtran en el suelo.",
    "desmontaje seguro": "El manejo seguro de electrónicos evita la exposición a sustancias nocivas.",
    "contaminacion del suelo": "El suelo contaminado afecta la biodiversidad y salud pública.",
    "fitoremediacion": "Uso de plantas para limpiar suelos contaminados.",
    "bioremediacion": "Microorganismos que degradan contaminantes en el suelo.",
    "dioxinas": "Tóxicos persistentes generados por la quema de residuos.",
    "derrames de aceite": "Contaminan suelos y afectan la vida de organismos del suelo.",
    "fertilizantes quimicos": "Pueden acidificar el suelo y dañar la biodiversidad.",
    "desechos industriales": "Contaminantes peligrosos que se filtran en la tierra.",
    "metales pesados en suelo": "Causan toxicidad en plantas y animales.",
    "compostaje": "Mejora la estructura del suelo y reduce residuos orgánicos.",
    "suelos contaminados": "Impactan la salud de plantas y microorganismos.",
    "erosion": "La pérdida de suelo fértil reduce la capacidad de cultivo.",
    "agroquimicos": "Uso excesivo lleva a la degradación del suelo.",
    "ecologia": "Estudia las interacciones entre organismos y su entorno.",
    "biodiversidad": "Variedad de especies en un ecosistema.",
    "ecosistemas": "Comunidades biológicas y su entorno físico.",
    "conservacion": "Protección y restauración de la biodiversidad.",
    "cambio climatico": "Impacto negativo en ecosistemas y especies.",
    "especies invasoras": "Compiten y desplazan a especies nativas.",
    "restauracion ecologica": "Recuperación de ecosistemas dañados.",
    "efecto invernadero": "Aumento de temperatura debido a gases en la atmósfera.",
    "desforestacion": "Pérdida de bosques afecta la biodiversidad.",
    "agricultura sostenible": "Métodos que protegen el suelo y el agua.",
    "corriente marina": "Afectan la distribución de nutrientes y organismos.",
    "sostenibilidad": "Uso responsable de recursos naturales.",
    "educacion ambiental": "Conciencia sobre la protección del entorno.",
    "cadena trofica": "Relaciones de alimentación en un ecosistema.",
    "metodo cientifico": "Proceso para investigar fenómenos y adquirir conocimientos.",
    "investigacion": "Proceso de indagar y descubrir información nueva.",
    "experimento": "Prueba controlada para investigar hipótesis.",
    "analisis de datos": "Interpretación de resultados para conclusiones.",
    "tecnologia": "Aplicación del conocimiento para solucionar problemas.",
    "sistema de monitoreo": "Herramientas para observar y medir variables ambientales.",
    "calidad del aire": "Indicador de contaminación atmosférica.",
    "modelos predictivos": "Predicen cambios en el ambiente basado en datos.",
    "sensores": "Dispositivos que detectan y miden información ambiental.",
    "internet de las cosas": "Conexión de dispositivos para intercambio de datos.",
    "tecnologias emergentes": "Innovaciones tecnológicas aplicadas a problemas ambientales.",
    "software ambiental": "Herramientas para analizar y gestionar datos ecológicos.",
    "satélites": "Monitoreo remoto de fenómenos ambientales globales.",
    "drones": "Recopilan datos en áreas de difícil acceso.",
    "calidad del agua": "Medida de contaminantes y salud del ecosistema acuático.",
    "ph del agua": "Indicador de acidez o alcalinidad del agua.",
    "contaminacion por nutrientes": "Causa eutrofización en cuerpos de agua.",
    "eutrofizacion": "Proliferación de algas que reduce el oxígeno en el agua.",
    "contaminacion termica": "Cambio en temperatura del agua afecta organismos.",
    "oxigeno disuelto": "Esencial para la vida acuática.",
    "metales pesados en agua": "Causan toxicidad en organismos acuáticos.",
    "desechos plasticos": "Impactan la vida marina y la calidad del agua.",
    "microplasticos": "Pequeñas partículas que contaminan el agua.",
    "biomonitorizacion": "Uso de organismos para evaluar la calidad del agua.",
    "tratamiento de aguas": "Procesos para remover contaminantes del agua.",
    "vertidos industriales": "Liberación de contaminantes en cuerpos de agua.",
    "aguas residuales": "Requieren tratamiento para evitar la contaminación.",
    "salinidad": "Afecta la distribución de especies acuáticas.",
    "contaminantes emergentes": "Nuevas sustancias que afectan el agua y salud.",
    "reutilizacion de agua": "Recuperar y tratar agua para usos secundarios.",
    "ciclo hidrologico": "Movimiento continuo de agua en la Tierra.",
    "humedales": "Ecosistemas que filtran contaminantes del agua.",
    "bioindicadores": "Especies que reflejan la salud del ambiente.",
    "agua subterranea": "Fuente de agua vulnerable a la contaminación.",
    "acuerdo de paris": "Compromiso global para reducir emisiones.",
    "agenda 2030": "Objetivos de desarrollo sostenible para proteger el planeta.",
    "residuos solidos urbanos": "Desafío de gestión para evitar la contaminación.",
    "zonas protegidas": "Áreas conservadas para preservar biodiversidad.",
    "educacion cientifica": "Desarrollo de habilidades de investigación y pensamiento crítico.",
    "observatorios ambientales": "Monitoreo constante de variables climáticas.",
    "biotecnologia": "Uso de organismos para soluciones ambientales.",
    "ingenieria ambiental": "Soluciones técnicas a problemas ecológicos.",
    "desechos radiactivos": "Altamente peligrosos para el medio ambiente y la salud.",
    "quimica verde": "Diseño de productos y procesos más seguros.",
    "consumo responsable": "Reducir el impacto ambiental a través de nuestras decisiones.",
    "reforestacion": "Restaurar áreas deforestadas para mejorar el ambiente.",
    "agroforesteria": "Integración de árboles y cultivos para uso sostenible del suelo.",
    "polinizacion": "Proceso esencial para la reproducción de plantas.",
    "eficiencia energetica": "Reducir consumo y emisiones en el uso de energía.",
    "movilidad sustentable": "Transporte que reduce emisiones contaminantes.",
    "huella de carbono": "Medición del impacto de nuestras actividades en el clima.",
    "degradacion de suelos": "Reducción de calidad del suelo afecta la producción agrícola.",
    "migracion de especies": "Cambio de hábitat debido a alteraciones ambientales.",
    "protocolo de kioto": "Acuerdo para reducir emisiones de gases de efecto invernadero.",
    "ciencias de la tierra": "Estudio de procesos y materiales del planeta.",
    "ecotoxicologia": "Efectos de contaminantes en los organismos y ecosistemas.",
    "zonas de amortiguamiento": "Protección adicional para áreas de conservación.",
    "gestion de residuos": "Control y tratamiento de desechos para minimizar su impacto.",
    "proceso de compostaje": "Transformación de residuos orgánicos en fertilizante natural.",
    "pesticidas": "Químicos que controlan plagas pero afectan el ecosistema.",
    "lluvia acida": "Contaminantes atmosféricos que alteran el pH del suelo y agua.",
    "proteccion de cuencas": "Conservación de áreas de captación de agua.",
    "redes troficas": "Interconexión de cadenas alimenticias en un ecosistema.",
    "genetica ambiental": "Estudio de la adaptación genética a cambios ecológicos.",
    "zonas costeras": "Ecosistemas vulnerables al cambio climático y contaminación.",
    "ecoturismo": "Turismo responsable que apoya la conservación.",
    "convenio de ramsar": "Protección de humedales de importancia internacional.",
    "proteccion de especies": "Estrategias para evitar la extinción de flora y fauna.",
    "acuicultura sostenible": "Cría de peces que minimiza el impacto ambiental.",
    "ciencias del mar": "Estudio de océanos y su biodiversidad.",
    "gestion del agua": "Uso eficiente y sostenible de recursos hídricos.",
    "aguas grises": "Agua doméstica usada que puede ser reciclada para riego.",
    "hidrologia": "Ciencia que estudia la distribución y circulación del agua.",
    "agricultura urbana": "Cultivo de alimentos en ciudades para sostenibilidad.",
    "carbono azul": "Almacenamiento de carbono en ecosistemas marinos y costeros.",
    "cinturon verde": "Áreas naturales alrededor de ciudades para reducir contaminación.",
    "ecologia urbana": "Estudio de ecosistemas en entornos urbanos.",
    "efecto borde": "Cambios en biodiversidad en el límite de ecosistemas.",
    "bosques nublados": "Ecosistemas biodiversos y vulnerables al cambio climático.",
    "permacultura": "Diseño agrícola sostenible que imita patrones naturales.",
    "desarrollo sustentable": "Satisfacer necesidades presentes sin comprometer futuras.",
    "energia renovable": "Fuentes de energía que no se agotan.",
    "cuenca hidrografica": "Área que drena agua hacia un cuerpo de agua común.",
    "deforestacion tropical": "Pérdida de biodiversidad y almacenamiento de carbono.",
    "zonas humedas": "Ecosistemas vitales para la biodiversidad y calidad del agua.",
    "conservacion de suelos": "Prácticas para prevenir erosión y degradación del suelo.",
    "calidad del agua potable": "Indicador de seguridad y potabilidad del agua.",
    "biorremediacion": "Uso de organismos vivos para descontaminar ambientes.",
    "monitoreo ambiental": "Vigilancia continua de variables ambientales para decisiones.",
    "comunidad biologica": "Conjunto de especies que interactúan en un ecosistema.",
    "teledeteccion": "Observación remota del medio ambiente usando satélites.",
    "macroinvertebrados": "Indicadores de calidad de agua en cuerpos acuáticos.",
    "gestión sostenible": "Manejo de recursos para beneficio actual y futuro.",
    "planificacion ecologica": "Diseño de espacios que consideran impactos ambientales.",
    "contaminacion acustica": "Ruido excesivo que afecta el entorno y salud.",
    "resiliencia ecologica": "Capacidad de ecosistemas para recuperarse de perturbaciones.",
    "reserva de la biosfera": "Áreas protegidas para conservar biodiversidad y cultura.",
    "especies en peligro": "Flora y fauna en riesgo de extinción.",
    "gestion de recursos": "Uso equilibrado de recursos naturales para sostenibilidad.",
    "comunidad sostenible": "Grupos que promueven prácticas ecológicas en su entorno.",
    "isla de calor urbana": "Aumento de temperatura en ciudades por actividad humana.",
    "adaptacion climatica": "Estrategias para enfrentar cambios en el clima.",
    "ecologia de paisaje": "Estudio de patrones y procesos en grandes escalas.",
    "biocapacidad": "Capacidad de un ecosistema para regenerar recursos.",
    "peaje ecologico": "Compensación por impacto ambiental de infraestructuras.",
    "energia solar": "Fuente de energía limpia y renovable del sol.",
    "conservacion de energia": "Reducción del uso de energía para proteger el ambiente.",
    "certificacion ambiental": "Reconocimiento a prácticas sostenibles en empresas y proyectos.",
    "practicas regenerativas": "Métodos que restauran la salud del suelo y ecosistemas.",
    "educacion para la sostenibilidad": "Formación para proteger recursos y promover equidad.",
    "zonificacion ecologica": "Planificación territorial que considera biodiversidad.",
    "ecologia de comunidades": "Estudio de especies que coexisten en un área.",
    "filtro verde": "Plantas que mejoran calidad del aire y reducen contaminación.",
    "ecoetiquetado": "Certificación de productos por su bajo impacto ambiental.",
    "huella ecologica": "Medición del impacto humano sobre el planeta.",
    "compost domestico": "Proceso casero para descomponer residuos orgánicos.",
    "huella hidrica": "Cantidad de agua utilizada para producir bienes y servicios.",
    "politicas ambientales": "Normativas para la protección y gestión del medio ambiente.",
    "biomimica": "Inspiración en la naturaleza para soluciones innovadoras.",
    "planeta sostenible": "Uso de recursos que permite equilibrio ecológico.",
    "calidad de aire interior": "Nivel de contaminación dentro de edificios.",
    "gestion de cuencas": "Planificación del uso del agua en áreas de captación.",
    "gestion de zonas verdes": "Mantenimiento de áreas naturales en ciudades.",
    "reforestacion urbana": "Plantación de árboles en áreas urbanas para mejorar el ambiente.",
    "energia eolica": "Energía obtenida del viento mediante aerogeneradores.",
    "pesca sostenible": "Métodos de pesca que conservan poblaciones de peces.",
    "turismo responsable": "Visitas que minimizan el impacto en ecosistemas.",
    "bancos de semillas": "Conservación de material genético para futuras generaciones.",
    "derechos ambientales": "Protección legal para recursos naturales y biodiversidad.",
    "mineria sostenible": "Extracción de recursos minimizando el daño ambiental.",
    "arquitectura verde": "Diseño de edificios que reduce el impacto ecológico.",
    "infraestructura verde": "Espacios que integran naturaleza y construcciones humanas.",
    "reduccion de residuos": "Minimizar generación de basura para proteger el ambiente.",
    "produccion limpia": "Procesos industriales que reducen emisiones y residuos.",
    "agricultura organica": "Cultivo sin uso de químicos sintéticos.",
    "innovacion ecologica": "Desarrollo de tecnologías que respetan el entorno.",
    "manejo de residuos": "Reciclaje y disposición adecuada de desechos.",
    "economia circular": "Reutilización de recursos para minimizar desperdicios.",
    "reciclaje de agua": "Tratamiento y reutilización de agua para reducir consumo.",
    "zonas de no pesca": "Áreas protegidas para recuperar poblaciones marinas.",
    "residuos quimicos": "Desechos industriales que contaminan suelo y agua.",
    "acuaponia": "Cultivo de peces y plantas en un sistema cerrado.",
    "agricultura vertical": "Cultivo en capas para optimizar espacio en ciudades.",
    "tecnologias limpias": "Innovaciones que reducen el impacto ambiental.",
    "silvicultura": "Manejo sostenible de bosques para producción de madera.",
    "agroecologia": "Integración de agricultura y ecología para sostenibilidad.",
    "saneamiento ambiental": "Procesos para mejorar la calidad del entorno.",
    "carbono neutral": "Equilibrio entre emisiones de CO2 y absorción.",
    "contaminacion visual": "Impacto negativo de la acumulación de objetos en paisajes.",
    "gestion del riesgo": "Preparación y respuesta ante desastres ambientales.",
    "ordenamiento territorial": "Planificación del uso de suelos para minimizar impactos.",
    "desechos peligrosos": "Residuos que requieren manejo especial por su toxicidad.",
    "microclima": "Condiciones climáticas específicas de áreas pequeñas.",
    "sistemas agroforestales": "Combinación de árboles y cultivos en una misma área.",
    "agricultura biodinamica": "Métodos agrícolas basados en ciclos naturales.",
    "soberania alimentaria": "Capacidad de un país para producir sus propios alimentos.",
    "mantenimiento preventivo": "Evitar fallos en equipos de monitoreo ambiental.",
    "procesos naturales": "Fenómenos que ocurren en la naturaleza sin intervención humana.",
    "contaminacion difusa": "Fuentes múltiples y dispersas de contaminación.",
    "polinizadores": "Organismos esenciales para la reproducción de plantas.",
    "gestion adaptativa": "Ajustes en la conservación basados en resultados.",
    "microorganismos beneficiosos": "Bacterias y hongos que mejoran la salud del suelo.",
    "captura de carbono": "Técnicas para absorber CO2 de la atmósfera.",
    "biodegradacion": "Proceso natural de descomposición de materiales orgánicos.",
    "fitorremediacion": "Uso de plantas para limpiar suelos y aguas contaminadas.",
    "ecosistema de bosque": "Comunidades de plantas y animales en áreas forestales.",
    "biomasa": "Material orgánico utilizado como fuente de energía.",
    "desarrollo verde": "Crecimiento económico que no compromete recursos naturales.",
    "limpieza de playas": "Acciones para remover basura y proteger vida marina.",
    "etnobotanica": "Estudio del uso tradicional de plantas en culturas.",
    "parques nacionales": "Áreas protegidas para la conservación de biodiversidad.",
    "zonas de amortiguamiento": "Áreas que protegen ecosistemas vulnerables.",
    "reintroduccion de especies": "Restaurar especies extintas en su hábitat natural.",
    "bioacumulacion": "Acumulación de sustancias tóxicas en organismos vivos.",
    "subproductos": "Materiales residuales de procesos industriales o agrícolas.",
    "desperdicio de alimentos": "Pérdida de recursos valiosos para el medio ambiente.",
    "gestion integrada del agua": "Enfoque coordinado para el uso sostenible del agua.",
    "seguridad alimentaria": "Acceso adecuado a alimentos seguros y nutritivos.",



    // SOBRE EL BOT //
    "como estas": "Estoy bien, gracias. Y tu",
    "cuantos años tienes": "Tengo 3 meses, he pasado por 3 modelos distintos.",
    "que haces": "Estoy aquí para ayudarte",
    "cual es tu nombre": "Mi nombre es WAI",
    "de donde eres": "Fui programado en Chilecito, para responder tus dudas",
    "reciclaje": "Proceso para reutilizar materiales desechados",
    "reciclar papel": "Separar papel limpio y llevarlo a un centro de reciclaje",
    "ahorrar energia": "Apagar luces y electrodomésticos cuando no se usan",
    "que es la contaminacion": "Presencia de sustancias dañinas en el medio ambiente",
    "importante el agua": "Es esencial para la vida",
    "calentamiento global": "Aumento de la temperatura promedio de la Tierra",
    "como funciona un sistema de monitoreo": "Recopila y analiza datos en tiempo real",
    "biodiversidad": "Variedad de vida en un ecosistema",
    "calidad del agua": "La calidad del agua se mide con pruebas de pH, turbidez y otros parámetros",
    "energia solar": "Energía obtenida del sol",
    "reducir la contaminacion del suelo": "Evitar el uso excesivo de químicos y reciclar",
    "residuos electronicos": "Desechos de dispositivos electrónicos",
    "reducir la huella de carbono": "Usar transporte público y reducir el consumo de energía",
    "especies en peligro de extincion": "Animales y plantas con riesgo de desaparecer",
    "como proteger el medio ambiente": "Reducir, reutilizar y reciclar",
    "por que son importantes los arboles": "Producen oxígeno y ayudan a regular el clima",
    "fotosintesis": "Proceso por el cual las plantas producen alimento usando luz",
    "como cuidar los recursos naturales": "Usándolos de manera responsable y sostenible",
    "energia eolica": "Energía obtenida del viento",
    "como se puede ahorrar agua": "Cerrar el grifo mientras te cepillas los dientes",
    "contaminacion del aire": "Presencia de sustancias nocivas en la atmósfera",
    "como se puede evitar la contaminacion del agua": "No arrojar residuos en cuerpos de agua",
    "que es el cambio climatico": "Cambios a largo plazo en los patrones del clima",
    "reciclaje de electronicos": "Proceso de recuperación de materiales valiosos de dispositivos electrónicos",
    "como se mide la contaminacion del aire": "Con dispositivos que miden partículas y gases contaminantes",
    "gases de efecto invernadero": "Gases que atrapan calor en la atmósfera",
    "como se puede cuidar el suelo": "No usar pesticidas y plantar árboles",
    "que es la energia hidroelectrica": "Energía obtenida del agua en movimiento",
    "como afecta la contaminacion al medio ambiente": "Daña ecosistemas y la salud de los seres vivos",
    "como se puede reducir el uso de plastico": "Usar bolsas reutilizables y evitar productos desechables",
    "compostaje": "Proceso de descomposición de materia orgánica para crear abono",
    "biotecnologia": "Uso de organismos vivos para desarrollar productos útiles",
    "economia circular": "Sistema que busca minimizar residuos reutilizando recursos",
    "reciclaje": "Proceso de convertir residuos en nuevos productos",
    "como afecta el cambio climatico a los animales": "Cambia sus hábitats y pone en riesgo su supervivencia",
    "como se puede reducir el consumo de energia": "Usar bombillas de bajo consumo y desenchufar aparatos no usados",
    "residuos toxicos": "Desechos peligrosos que pueden dañar la salud y el ambiente",
    "como funcionan los paneles solares": "Convierten la luz solar en electricidad",
    "parque eolico": "Conjunto de aerogeneradores que producen energía eólica",
    "como afecta la contaminacion del suelo a las plantas": "Reduce su capacidad de crecimiento y supervivencia",
    "como se pueden proteger los ecosistemas": "Conservar áreas naturales y reducir la contaminación",
    "ecosistema": "Conjunto de organismos y su entorno en una área determinada",
    "como se puede reducir la contaminacion acustica": "Usar materiales absorbentes de sonido y limitar el ruido",
    "efecto invernadero": "Proceso que calienta la atmósfera debido a gases que retienen el calor",
    "energia geotermica": "Energía obtenida del calor interno de la Tierra",
    "recursos renovables": "Recursos que se pueden regenerar de forma natural",
    "como se puede cuidar la biodiversidad": "Protegiendo hábitats y especies en peligro",
    "energia nuclear": "Energía liberada de átomos en reacciones nucleares",
    "deforestacion": "Pérdida de bosques debido a la tala o quema",
    "como afectan los residuos electronicos al medio ambiente": "Liberan sustancias tóxicas que contaminan el suelo y agua",
    "como se puede reducir la contaminacion del agua": "Tratando aguas residuales antes de liberarlas",
    "vertedero": "Lugar donde se depositan residuos de forma controlada",
    "como se puede reducir la huella ecologica": "Consumir de forma consciente y reducir el uso de recursos",
    "energia de las olas": "Energía obtenida del movimiento del mar",
    "como se puede reducir la contaminacion del aire": "Usar transporte público y energías renovables",
    "agricultura sostenible": "Métodos de cultivo que no agotan los recursos naturales",
    "como se puede cuidar el agua": "No desperdiciarla y evitar contaminarla",
    "como afecta la contaminacion acustica a las personas": "Puede causar estrés, insomnio y problemas de salud",
    "recurso natural": "Elementos de la naturaleza que usamos para vivir",
    "gestion de residuos": "Manejo adecuado de desechos para reducir su impacto",
    "como se puede reducir la cantidad de basura": "Reciclando, reutilizando y reduciendo el consumo",
    "gases contaminantes": "Sustancias en el aire que dañan la salud y el ambiente",
    "como afecta la deforestacion al clima": "Reduce la capacidad de los bosques para absorber CO2",
    "como se puede ahorrar energia en casa": "Usar electrodomésticos eficientes y apagar luces no usadas",
    "sistema de monitoreo ambiental": "Red que mide y analiza datos ambientales en tiempo real",
    "como se pueden proteger las especies en peligro": "Crear reservas naturales y prohibir su caza",
    "energia cinetica": "Energía que posee un objeto en movimiento",
    "como afecta la contaminacion del agua a los peces": "Puede causar enfermedades y reducir su población",
    "como se puede reducir la contaminacion luminica": "Usar iluminación eficiente y direccionada",
    "desarrollo sostenible": "Progreso que no agota los recursos para futuras generaciones",
    "que son los residuos biodegradables": "Desechos que se descomponen naturalmente sin dañar el ambiente",
    "como se puede reutilizar el agua": "Recoger aguas grises para riego o limpieza",
    "como se puede ahorrar agua en casa": "Arreglar fugas y usar duchas cortas",
    "la energia quimica": "Energía almacenada en los enlaces de las moléculas",
    "como afecta la contaminacion al cambio climatico": "Aumenta la cantidad de gases de efecto invernadero",
    "la gestion ambiental": "Planificación y manejo de recursos para proteger el entorno",
    "como se puede reducir el consumo de plastico": "Evitar productos desechables y optar por alternativas reutilizables",
    "energia termica": "Energía interna de un cuerpo debido a la temperatura",
    "como afecta la contaminacion al suelo": "Daña la fertilidad y reduce la capacidad de sustentar vida",
    "evitar la contaminacion del aire": "Usar menos vehículos y fomentar el uso de energías limpias",
    "energia hidraulica": "Energía obtenida del movimiento del agua",
    "como afecta la deforestacion a la biodiversidad": "Destruye hábitats y pone en peligro a las especies",
    "como se puede reducir la contaminacion por plastico": "Reciclar y evitar el uso de productos plásticos desechables",
    "energia mecanica": "Energía que tiene un cuerpo por su movimiento o posición",
    "como afecta la contaminacion al agua": "Deteriora la calidad del agua y afecta a los organismos acuáticos",
    "ecosistema marino": "Conjunto de organismos y su entorno en el mar",

    "basurales": "Los basurales a cielo abierto son una amenaza inmediata para la salud pública y el medio ambiente. Estos residuos mal gestionados contaminan el suelo, aire y agua, comprometiendo la biodiversidad local y afectando directamente la calidad de vida de nuestras comunidades. ¿Te gustaría saber más sobre sus efectos específicos?",
    
    "contaminación": "La contaminación ambiental, especialmente por basurales a cielo abierto, daña nuestro entorno y amenaza el bienestar y el futuro de la vida en nuestra localidad. Cada vez que descuidamos la disposición correcta de desechos, estamos perjudicando no solo el medio ambiente, sino también nuestra salud. ¿Te gustaría saber cómo podemos combatir este problema?",
    
    "Chilecito": "En Chilecito, los basurales a cielo abierto, como los ubicados en Río de Los Sarmientos, Av. La Mexicana (RP15) y Camino a Famatina (RN40), son un problema significativo que afecta la calidad del aire, agua y suelo. Este problema silencioso requiere atención urgente. ¿Te gustaría conocer más sobre las iniciativas que estamos llevando a cabo para abordar este problema?",
    
    "calidad del agua": "La calidad del agua es esencial para la vida. En 2022, creamos un sistema de monitoreo de calidad del agua para proteger este recurso vital. En 2023, mejoramos nuestro prototipo, haciéndolo independiente y con conectividad Bluetooth, lo que permite un monitoreo más eficiente. ¿Te gustaría saber cómo funciona este sistema?",
    
    "proyecto": "Nuestro proyecto se centra en enfrentar el desafío de la contaminación a cielo abierto en Chilecito. Somos estudiantes de 4° Año de la Escuela Privada Jean Piaget y creemos que el futuro se construye mediante la acción. A través de investigaciones en Ecología y CTyS, estamos buscando soluciones para mejorar nuestro entorno. ¿Te gustaría saber más sobre nuestras investigaciones específicas?",
    
    "futuro": "El futuro depende de nuestras acciones hoy. Creemos que no podemos quedarnos de brazos cruzados ante la contaminación. Estamos dedicados a buscar soluciones que no solo resuelvan los problemas actuales, sino que anticipen los desafíos del mañana. ¿Te gustaría unirte a nuestra misión o saber cómo puedes contribuir?",
    
    "investigaciones": "Nuestras investigaciones abarcan diferentes aspectos de la contaminación ambiental y su impacto en la salud pública y el ecosistema. A través de proyectos innovadores, como el monitoreo de calidad del agua, estamos trabajando para generar conciencia y promover acciones efectivas. ¿Te gustaría conocer más sobre un aspecto específico de nuestras investigaciones?",
    
    "salud pública": "La salud pública se ve gravemente afectada por los basurales a cielo abierto, ya que estos pueden propagar enfermedades y contaminar el agua potable. Proteger nuestro entorno es proteger nuestra salud y la de las futuras generaciones. ¿Quieres saber qué medidas podemos tomar para mejorar nuestra salud pública?",
    
    "biodiversidad": "La biodiversidad local es vital para nuestro ecosistema, y los residuos mal gestionados pueden comprometerla seriamente. La preservación de la biodiversidad no solo es crucial para el equilibrio ecológico, sino también para la calidad de vida de nuestras comunidades. ¿Te gustaría saber más sobre cómo proteger nuestra biodiversidad?",
    
    "sistema de monitoreo": "Nuestro sistema de monitoreo de calidad del agua es una herramienta diseñada para proteger uno de los recursos más esenciales para la vida. Permite supervisar la calidad del agua de manera eficiente, gracias a su conectividad Bluetooth. ¿Te gustaría saber cómo puedes acceder a los datos de este monitoreo?",



    "default": "No estoy autorizado a responder tu mensaje. ¿Querés preguntar otra cosa?"
};


function levenshteinDistance(a, b) {
    const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(null));

    for (let i = 0; i <= a.length; i++) {
        for (let j = 0; j <= b.length; j++) {
            if (i === 0) {
                dp[i][j] = j;
            } else if (j === 0) {
                dp[i][j] = i;
            } else if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + 1
                );
            }
        }
    }
    return dp[a.length][b.length];
}

function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function getResponse(userInput) {
    const normalizedInput = normalizeString(userInput.toLowerCase());

    for (const key in botResponses) {
        const normalizedKey = normalizeString(key);
        if (normalizedInput.includes(normalizedKey)) {
            return botResponses[key];
        }
    }

    return botResponses["default"];
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();

    if (userInput) {
        displayMessage(userInput, 'user');
        const botReply = getResponse(userInput);
        console.log(botReply);
        displayMessage(botReply, 'bot');
        document.getElementById('user-input').value = '';
    }
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    const chatbotSection = document.querySelector('.chatbot-sec');
    
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'flex'; // Muestra el chat
        chatbotSection.style.display = 'flex'; // Muestra la sección del chatbot
        chatbotSection.style.animation = 'slideIn 0.5s ease-out forwards'; // Aplica animación de entrada
    } else {
        // Aplica animación de salida
        chatbotSection.style.animation = 'slideOut 0.5s ease-out forwards';
        chatbotSection.addEventListener('animationend', () => {
            chatContainer.style.display = 'none'; // Oculta el chat después de la animación
            chatbotSection.style.display = 'none'; // Oculta la sección del chatbot
        }, { once: true }); // Asegura que el evento se ejecute solo una vez
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('chat-container').style.display = 'none';
});

// Funciones para la galería (puedes llamarlas desde botones o eventos)
document.getElementById('next-button').addEventListener('click', nextImage);
document.getElementById('prev-button').addEventListener('click', prevImage);