
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
    "proyecto": "Un proyecto tecnológico es un conjunto de actividades organizadas para alcanzar objetivos específicos usando herramientas y técnicas tecnológicas.",
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
    "sociedad": "La sociedad está compuesta por individuos que interactúan y forman comunidades.",
    
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

    "default": "No estoy autorizado a responder tu mensaje. ¿Querés preguntar otra cosa?"
};

// Función para calcular la distancia de Levenshtein
function levenshteinDistance(a, b) {
    const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(null));

    for (let i = 0; i <= a.length; i++) {
        for (let j = 0; j <= b.length; j++) {
            if (i === 0) {
                dp[i][j] = j; // Distancia de insertar j caracteres
            } else if (j === 0) {
                dp[i][j] = i; // Distancia de eliminar i caracteres
            } else if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // No hay costo
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1, // Eliminación
                    dp[i][j - 1] + 1, // Inserción
                    dp[i - 1][j - 1] + 1 // Sustitución
                );
            }
        }
    }
    return dp[a.length][b.length];
}

// Función para normalizar texto eliminando acentos
function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Normaliza y elimina acentos
}

// Función para encontrar la respuesta adecuada
function getResponse(userInput) {
    const normalizedInput = normalizeString(userInput.toLowerCase()); // Normaliza la entrada del usuario

    // Buscar palabras clave en el input del usuario
    for (const key in botResponses) {
        const normalizedKey = normalizeString(key); // Normaliza la clave
        if (normalizedInput.includes(normalizedKey)) {
            return botResponses[key]; // Retorna la definición correspondiente
        }
    }

    return botResponses["default"]; // Respuesta por defecto si no se encuentra ninguna palabra clave
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();

    if (userInput) {
        // Mostrar el mensaje del usuario en el chat.
        displayMessage(userInput, 'user');

        // Responder basado en la lógica del bot.
        const botReply = getResponse(userInput);
        console.log(botReply); // Verifica la salida aquí.

        // Mostrar la respuesta del bot en el chat.
        displayMessage(botReply, 'bot');

        // Limpiar el input.
        document.getElementById('user-input').value = '';
    }
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll hacia abajo.
}

// Detectar la tecla "Enter" para enviar el mensaje
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Función para mostrar/ocultar el chat
function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'flex'; // Muestra el chat
    } else {
        chatContainer.style.display = 'none'; // Oculta el chat
    }
}

// Asegúrate de que el chat esté oculto al inicio
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('chat-container').style.display = 'none'; // Oculta el chat al cargar la página
});