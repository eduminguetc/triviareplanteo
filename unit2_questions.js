// unit2_questions.js
export const unit2Questions = [
    {
        id: 'u2q1',
        unit: 2,
        questionText: "¿Cuál es el objetivo principal del Replanteo según la Unidad 2?",
        options: [
            "Realizar el levantamiento topográfico inicial del terreno.",
            "Trasladar fielmente al terreno los componentes, dimensiones y formas indicados en los planos del proyecto.",
            "Diseñar la estructura del edificio.",
            "Calcular el movimiento de tierras necesario."
        ],
        correctAnswerIndex: 1,
        explanation: "El objetivo del Replanteo es trasladar fielmente al terreno los componentes, dimensiones y formas indicados en los planos del proyecto, basándose en la información del levantamiento topográfico previo."
    },
    {
        id: 'u2q2',
        unit: 2,
        questionText: "El replanteo topográfico, a diferencia del artesanal, se caracteriza por usar:",
        options: [
            "Solo herramientas manuales como cintas y escuadras.",
            "Mediciones electrónicas (estaciones totales, GPS) y trigonometría.",
            "Estimaciones visuales y experiencia del operario.",
            "Exclusivamente para interiores de edificaciones."
        ],
        correctAnswerIndex: 1,
        explanation: "El replanteo Topográfico utiliza mediciones electrónicas (estaciones totales, GPS) y trigonometría, siendo adecuado para grandes construcciones y requiriendo personal cualificado."
    },
    {
        id: 'u2q3',
        unit: 2,
        questionText: "En la interpretación de documentos para el replanteo, ¿qué son las 'medidas directas'?",
        options: [
            "Medidas obtenidas por cálculo a partir de otras.",
            "Medidas que implican contacto directo del instrumento con el objeto (ej. cinta métrica).",
            "Medidas tomadas exclusivamente con GPS.",
            "Medidas de ángulos únicamente."
        ],
        correctAnswerIndex: 1,
        explanation: "Las Medidas Directas son aquellas que implican el contacto directo del instrumento de medida con el objeto a medir, como cuando se usa una cinta métrica."
    },
    {
        id: 'u2q4',
        unit: 2,
        questionText: "Si la escala de un plano es 1/100, ¿qué significa?",
        options: [
            "1 cm en el plano representa 100 metros en la realidad.",
            "100 cm en el plano representan 1 cm en la realidad.",
            "1 unidad en el plano representa 100 unidades iguales en la realidad.",
            "El plano es 100 veces más grande que la realidad."
        ],
        correctAnswerIndex: 2,
        explanation: "Una escala 1/100 significa que una unidad de medida en el plano (ej. 1 cm) equivale a 100 de esas mismas unidades en el terreno real (ej. 100 cm, o 1 metro)."
    },
    {
        id: 'u2q5',
        unit: 2,
        questionText: "El 'error gráfico' en la interpretación de planos se refiere a:",
        options: [
            "Un error de cálculo en el diseño.",
            "La mínima medida apreciable por el ojo humano en un plano (aprox. 0.2 mm).",
            "Una mancha de tinta que oculta información.",
            "La deformación del papel del plano."
        ],
        correctAnswerIndex: 1,
        explanation: "El Error Gráfico es la mínima medida que el ojo humano puede apreciar en un plano, estimada en unos 0.2 mm. Determina qué elementos pequeños no se pueden representar."
    },
    {
        id: 'u2q6',
        unit: 2,
        questionText: "¿Cómo se define un punto en el sistema de representación de planos acotados?",
        options: [
            "Solo por sus coordenadas X e Y.",
            "Solo por su cota Z.",
            "Por su proyección horizontal (X,Y) y su cota (Z) entre paréntesis.",
            "Mediante una descripción textual de su ubicación."
        ],
        correctAnswerIndex: 2,
        explanation: "En el sistema de planos acotados, un punto se define por su proyección horizontal (coordenadas x, y) y su cota (z), la cual se indica entre paréntesis junto a la proyección del punto."
    },
    {
        id: 'u2q7',
        unit: 2,
        questionText: "Los 'puntos de replanteo' son aquellos puntos característicos necesarios para:",
        options: [
            "Establecer la escala del plano.",
            "Definir la situación y forma del elemento proyectado.",
            "Calcular el error de cierre.",
            "Orientar el norte geográfico."
        ],
        correctAnswerIndex: 1,
        explanation: "Los Puntos de Replanteo son los puntos característicos necesarios para definir la situación y la forma del elemento que se está proyectando en el terreno."
    },
    {
        id: 'u2q8',
        unit: 2,
        questionText: "¿Qué es una 'base de replanteo' en el contexto artesanal?",
        options: [
            "El punto donde se estaciona la estación total.",
            "Un punto de referencia conocido (lindero, esquina) desde donde se inicia el replanteo midiendo distancias del plano.",
            "La capa de hormigón sobre la que se construye.",
            "Un software para calcular coordenadas."
        ],
        correctAnswerIndex: 1,
        explanation: "En el replanteo artesanal, la Base de Replanteo es un punto de referencia conocido en el terreno (como un lindero o una esquina) desde el cual se miden distancias tomadas del plano para situar nuevos puntos."
    },
    {
        id: 'u2q9',
        unit: 2,
        questionText: "El método de replanteo planimétrico con Estación Total y Prisma determina principalmente:",
        options: [
            "Solo distancias horizontales.",
            "Solo ángulos verticales.",
            "Coordenadas polares (ángulo y distancia) de los puntos desde la base topográfica.",
            "Coordenadas geográficas directas."
        ],
        correctAnswerIndex: 2,
        explanation: "El replanteo con Estación Total y Prisma es el más usado y determina las coordenadas polares (ángulo horizontal y distancia) de los puntos a replantear desde la base topográfica donde se estaciona el aparato."
    },
    {
        id: 'u2q10',
        unit: 2,
        questionText: "En el método de replanteo con GPS, ¿qué tipo de coordenadas se utilizan principalmente?",
        options: [
            "Polares (ángulo y distancia)",
            "Geográficas (latitud y longitud)",
            "Cartesianas (X, Y, Z)",
            "Locales arbitrarias"
        ],
        correctAnswerIndex: 2,
        explanation: "El replanteo con GPS utiliza coordenadas cartesianas (X, Y, Z) obtenidas por satélite. La base fija emite correcciones al receptor móvil."
    },
    {
        id: 'u2q11',
        unit: 2,
        questionText: "El método de replanteo artesanal por 'Abscisas sobre una Recta' requiere trazar un eje de abscisas y medir:",
        options: [
            "Solo ángulos desde ese eje.",
            "Distancias sobre el eje y distancias perpendiculares al punto.",
            "Solo distancias radiales desde un punto del eje.",
            "Alturas respecto al eje."
        ],
        correctAnswerIndex: 1,
        explanation: "El método por Abscisas sobre una Recta implica trazar una alineación recta (eje de abscisas) y medir una distancia a lo largo de este eje y luego una distancia perpendicular desde ese punto hasta el punto a replantear."
    },
    {
        id: 'u2q12',
        unit: 2,
        questionText: "¿Para qué tipo de situaciones es adecuado el método de replanteo por 'Trilateración'?",
        options: [
            "Grandes extensiones y terrenos muy accidentados.",
            "Distancias cortas (<30m) y terrenos llanos, usando intersección de dos longitudes.",
            "Replanteo de alturas únicamente.",
            "Cuando solo se conocen ángulos."
        ],
        correctAnswerIndex: 1,
        explanation: "El método de Trilateración, que localiza un punto por la intersección de dos longitudes medidas desde dos puntos conocidos, es adecuado para distancias cortas (menores a 30m) y terrenos relativamente llanos."
    },
    {
        id: 'u2q13',
        unit: 2,
        questionText: "Si un proyecto de replanteo es 'analítico', significa que sus elementos están definidos:",
        options: [
            "Únicamente de forma gráfica en los planos.",
            "Numéricamente (coordenadas, acotaciones lineales/angulares).",
            "Mediante descripciones textuales detalladas.",
            "Por aproximaciones y estimaciones."
        ],
        correctAnswerIndex: 1,
        explanation: "Los proyectos Analíticos son aquellos donde los elementos están definidos numéricamente (con coordenadas, acotaciones precisas), lo que permite calcular directamente los datos de replanteo."
    },
    {
        id: 'u2q14',
        unit: 2,
        questionText: "Una ventaja de usar programas informáticos como AutoCAD o MAGNET Field en el replanteo es:",
        options: [
            "Eliminar la necesidad de ir al terreno.",
            "Reducir el coste de los equipos topográficos.",
            "Aumentar la velocidad, limpieza y facilidad de modificación de los datos.",
            "Que no requieren personal cualificado para su uso."
        ],
        correctAnswerIndex: 2,
        explanation: "El uso de software informático en el replanteo ofrece ventajas como mayor velocidad en los cálculos y preparación de datos, limpieza en la presentación y facilidad para realizar modificaciones."
    },
    {
        id: 'u2q15',
        unit: 2,
        questionText: "El 'Acta de Comprobación del Replanteo' es un acto formal necesario ANTES de:",
        options: [
            "Realizar el levantamiento topográfico.",
            "Diseñar el proyecto de ejecución.",
            "Iniciar la ejecución del contrato de obras.",
            "Finalizar la obra y entregarla."
        ],
        correctAnswerIndex: 2,
        explanation: "El Acta de Comprobación del Replanteo es un acto formal y bilateral que debe realizarse antes de iniciar la ejecución del contrato de obras, acreditando la idoneidad de los terrenos y la viabilidad del proyecto."
    },
    {
        id: 'u2q16',
        unit: 2,
        questionText: "¿Cuál es una consecuencia de NO realizar el Acta de Comprobación del Replanteo?",
        options: [
            "Se debe rediseñar todo el proyecto.",
            "El coste de la obra aumenta automáticamente.",
            "Impide el inicio de las obras y el cómputo del plazo de ejecución.",
            "El contratista recibe una bonificación."
        ],
        correctAnswerIndex: 2,
        explanation: "La no realización del Acta de Comprobación del Replanteo impide el inicio legal de las obras y, por tanto, el cómputo del plazo de ejecución."
    },
    {
        id: 'u2q17',
        unit: 2,
        questionText: "El 'Acta de Replanteo' es un documento que, entre otras cosas, certifica que:",
        options: [
            "El proyecto tiene todos los permisos urbanísticos.",
            "El replanteo se hizo correctamente, ocupando los terrenos indicados y ajustándose al solar.",
            "Se han completado todos los pagos al constructor.",
            "La estructura del edificio es segura."
        ],
        correctAnswerIndex: 1,
        explanation: "El Acta de Replanteo certifica que el replanteo se ha realizado correctamente, que la obra ocupa los terrenos previstos y que se ajusta al solar, según lo comprobado por la dirección facultativa."
    },
    {
        id: 'u2q18',
        unit: 2,
        questionText: "¿Quiénes suelen firmar el Acta de Replanteo?",
        options: [
            "Solo el promotor y el ayuntamiento.",
            "El Arquitecto, el Director de Obra y el Director de Ejecución de Obras.",
            "Únicamente el jefe de obra del constructor.",
            "Los operarios que realizaron el replanteo físico."
        ],
        correctAnswerIndex: 1,
        explanation: "El Acta de Replanteo es firmada típicamente por el Arquitecto (que da su conformidad con los resultados), el Director de Obra y el Director de Ejecución de Obras."
    },
    {
        id: 'u2q19',
        unit: 2,
        questionText: "El Texto Refundido de la Ley de Contratos del Sector Público regula, en relación con el replanteo:",
        options: [
            "Los tipos de instrumentos topográficos a utilizar.",
            "Las escalas mínimas para los planos de replanteo.",
            "El acta de comprobación del replanteo.",
            "Los honorarios de los topógrafos."
        ],
        correctAnswerIndex: 2,
        explanation: "El Texto Refundido de la Ley de Contratos del Sector Público es la normativa que regula, entre otros aspectos, el procedimiento del acta de comprobación del replanteo en obras públicas."
    },
    {
        id: 'u2q20',
        unit: 2,
        questionText: "La precisión de una medida directa con cinta métrica depende fundamentalmente de:",
        options: [
            "La temperatura ambiente.",
            "La apreciación del útil (cinta métrica) y el método.",
            "La velocidad del viento.",
            "El tipo de software utilizado para procesar datos."
        ],
        correctAnswerIndex: 1,
        explanation: "La precisión de una medida directa, como la realizada con una cinta métrica, depende de la apreciación del instrumento (la mínima división que se puede leer) y del cuidado y método con que se realice la medición."
    },
    {
        id: 'u2q21',
        unit: 2,
        questionText: "Una Hectárea (Ha) equivale a:",
        options: [
            "100 metros cuadrados (m²)",
            "1.000 metros cuadrados (m²)",
            "10.000 metros cuadrados (m²)",
            "100.000 metros cuadrados (m²)"
        ],
        correctAnswerIndex: 2,
        explanation: "Una Hectárea (Ha) es una unidad de superficie que equivale a 10.000 metros cuadrados."
    },
    {
        id: 'u2q22',
        unit: 2,
        questionText: "En el sistema de representación de planos acotados, la cota de un punto se indica:",
        options: [
            "Siempre con un color diferente.",
            "Al lado de su proyección horizontal y entre paréntesis.",
            "En una tabla anexa al plano.",
            "Solo si el punto está por debajo del plano de referencia."
        ],
        correctAnswerIndex: 1,
        explanation: "En los planos acotados, la cota (coordenada z) de un punto se escribe numéricamente al lado de su proyección horizontal, habitualmente entre paréntesis."
    },
    {
        id: 'u2q23',
        unit: 2,
        questionText: "Al descomponer la planta de una vivienda para su replanteo, ¿qué se replantea individualmente?",
        options: [
            "Solo los muros exteriores.",
            "Solo las esquinas del solar.",
            "Los puntos característicos que definen la planta.",
            "Únicamente los elementos estructurales."
        ],
        correctAnswerIndex: 2,
        explanation: "El proceso de replanteo de una planta compleja implica descomponerla en sus puntos característicos, replantear estos individualmente y luego unirlos."
    },
    {
        id: 'u2q24',
        unit: 2,
        questionText: "La 'Base Topográfica' se diferencia de la 'Base de Replanteo' (artesanal) en que la primera es donde:",
        options: [
            "Se almacenan los planos del proyecto.",
            "Se estaciona el equipo topográfico (teodolito, estación total).",
            "Se mezclan los materiales de construcción.",
            "Se ubica el punto más alto del terreno."
        ],
        correctAnswerIndex: 1,
        explanation: "La Base Topográfica es el punto físico donde se estaciona el aparato topográfico (como una estación total) para tomar datos o replantear, mientras que la base de replanteo artesanal es un punto de referencia para mediciones manuales."
    },
    {
        id: 'u2q25',
        unit: 2,
        questionText: "El método de replanteo artesanal por 'Retícula Ortogonal' consiste en:",
        options: [
            "Medir ángulos desde un solo punto.",
            "Trazar una malla cuadriculada en el terreno para facilitar la localización de puntos.",
            "Utilizar exclusivamente el método 3-4-5 para todas las esquinas.",
            "Proyectar líneas láser para definir los ejes."
        ],
        correctAnswerIndex: 1,
        explanation: "El método de Retícula Ortogonal implica trazar una malla o cuadrícula sobre el terreno, lo que facilita la localización de puntos mediante coordenadas relativas a dicha malla."
    },
    {
        id: 'u2q26',
        unit: 2,
        questionText: "El método de replanteo por 'Trazado Geométrico' busca:",
        options: [
            "Utilizar siempre las fórmulas trigonométricas más complejas.",
            "Simplificar los trazados a figuras geométricas elementales (rectas, ángulos, arcos).",
            "Digitalizar todos los elementos del plano antes de ir al terreno.",
            "Evitar el uso de cintas métricas."
        ],
        correctAnswerIndex: 1,
        explanation: "El Trazado Geométrico en replanteo artesanal consiste en simplificar los elementos del proyecto a figuras geométricas básicas como rectas, ángulos y arcos, para poder materializarlos con herramientas sencillas."
    },
    {
        id: 'u2q27',
        unit: 2,
        questionText: "Si un proyecto se define gráficamente y se necesita obtener datos para el replanteo por 'Medición a Puntos Fijos', ¿qué se requiere?",
        options: [
            "Que el plano esté georreferenciado con coordenadas UTM.",
            "Localizar en el plano puntos que sean reconocibles en el terreno para usarlos como referencia.",
            "Un software CAD avanzado para extraer coordenadas automáticamente.",
            "Que todos los ángulos del proyecto sean rectos."
        ],
        correctAnswerIndex: 1,
        explanation: "Cuando se obtienen datos de un proyecto gráfico por Medición a Puntos Fijos, es crucial localizar en el plano puntos que también sean claramente identificables y accesibles en el terreno (postes, arquetas, esquinas) para usarlos como base de las mediciones."
    },
    {
        id: 'u2q28',
        unit: 2,
        questionText: "El software QGIS y gvSIG Desktop son ejemplos de:",
        options: [
            "Programas de CAD para dibujo 2D exclusivamente.",
            "Software para control de maquinaria de construcción.",
            "Sistemas de Información Geográfica (SIG) para gestionar información geoespacial.",
            "Lenguajes de programación para cálculo estructural."
        ],
        correctAnswerIndex: 2,
        explanation: "QGIS y gvSIG Desktop son Sistemas de Información Geográfica (SIG), herramientas potentes para editar, visualizar y analizar información geoespacial."
    },
    {
        id: 'u2q29',
        unit: 2,
        questionText: "El propósito principal del 'Acta de Comprobación del Replanteo' es acreditar:",
        options: [
            "La calidad de los materiales a utilizar en la obra.",
            "La solvencia económica del constructor.",
            "La idoneidad de los terrenos y la viabilidad geométrica del proyecto sobre ellos.",
            "Que el proyecto cumple con la normativa de eficiencia energética."
        ],
        correctAnswerIndex: 2,
        explanation: "El propósito fundamental del Acta de Comprobación del Replanteo es acreditar la idoneidad de los terrenos donde se va a construir y la viabilidad del proyecto en cuanto a sus características geométricas y ocupación."
    },
    {
        id: 'u2q30',
        unit: 2,
        questionText: "Una de las declaraciones que debe incluir el Acta de Replanteo es que el constructor:",
        options: [
            "Ha contratado a todos los subcontratistas.",
            "Ha realizado el replanteo y este, comprobado por la dirección facultativa, se ajusta al solar.",
            "Tiene la maquinaria necesaria en el lugar de la obra.",
            "Ha presentado un presupuesto detallado."
        ],
        correctAnswerIndex: 1,
        explanation: "El Acta de Replanteo debe incluir una declaración de que el constructor ha realizado el replanteo y que este, tras ser comprobado por la dirección facultativa, se ajusta al solar y al proyecto."
    },
    {
        id: 'u2q31',
        unit: 2,
        questionText: "La apreciación de un instrumento de medida se refiere a:",
        options: [
            "Su resistencia a las condiciones climáticas.",
            "El grado de aproximación de la medida al valor real.",
            "La mínima división o valor que se puede leer en él.",
            "El coste de adquisición del instrumento."
        ],
        correctAnswerIndex: 2,
        explanation: "La apreciación de un instrumento es la menor fracción de la unidad que se puede leer o estimar con él."
    },
    {
        id: 'u2q32',
        unit: 2,
        questionText: "Un ángulo medido en el sistema centesimal se expresa en un rango de:",
        options: [
            "0° a 360°",
            "0ᵍ a 100ᵍ",
            "0ᵍ a 400ᵍ",
            "0 rad a 2π rad"
        ],
        correctAnswerIndex: 2,
        explanation: "En el sistema centesimal, una circunferencia completa se divide en 400 grados centesimales (ᵍ)."
    },
    {
        id: 'u2q33',
        unit: 2,
        questionText: "La escala 1/50 es comúnmente utilizada en planos de:",
        options: [
            "Mapas geográficos de grandes regiones.",
            "Planos de urbanismo a nivel municipal.",
            "Construcción, para representar detalles de edificaciones.",
            "Cartografía mundial."
        ],
        correctAnswerIndex: 2,
        explanation: "Escalas como 1/50 o 1/100 son habituales en planos de construcción para mostrar con suficiente detalle los elementos de una edificación."
    },
    {
        id: 'u2q34',
        unit: 2,
        questionText: "Si un punto en un plano acotado tiene la indicación P(15.75), el valor 15.75 representa:",
        options: [
            "Su coordenada X.",
            "Su coordenada Y.",
            "Su cota o altitud.",
            "El número de orden del punto."
        ],
        correctAnswerIndex: 2,
        explanation: "En la notación de planos acotados, el número entre paréntesis junto a la proyección del punto representa su cota o altitud respecto al plano de referencia."
    },
    {
        id: 'u2q35',
        unit: 2,
        questionText: "El número de puntos de replanteo necesarios para definir un elemento depende de:",
        options: [
            "El tipo de instrumento topográfico utilizado.",
            "La escala del plano únicamente.",
            "La complejidad geométrica del elemento a replantear.",
            "La distancia a la base de replanteo."
        ],
        correctAnswerIndex: 2,
        explanation: "El número de puntos de replanteo que se necesitan está directamente relacionado con la complejidad geométrica del elemento que se va a materializar en el terreno."
    },
    {
        id: 'u2q36',
        unit: 2,
        questionText: "¿Cuál de los siguientes NO es un método de replanteo artesanal mencionado en la Unidad 2?",
        options: [
            "Método por Abscisas sobre una Recta",
            "Método de Retícula Ortogonal",
            "Método con GPS Diferencial",
            "Método de Trilateración"
        ],
        correctAnswerIndex: 2,
        explanation: "El método con GPS Diferencial es un método topográfico que utiliza equipamiento avanzado, no se considera un método artesanal. Los otros tres sí son métodos manuales."
    },
    {
        id: 'u2q37',
        unit: 2,
        questionText: "Obtener datos de replanteo por 'Coordenadas Gráficas' desde un plano implica:",
        options: [
            "Realizar mediciones de campo muy precisas.",
            "Asignar coordenadas (UTM o particulares) a puntos principales del plano y vincularlas al terreno.",
            "No requiere comprobación en el terreno.",
            "Todas las anteriores son correctas."
        ],
        correctAnswerIndex: 1,
        explanation: "La obtención de datos por Coordenadas Gráficas implica asignar un sistema de coordenadas a puntos clave del plano (pueden ser UTM si existen referencias, o un sistema particular) y luego vincular este sistema al terreno. La afirmación 'No requiere comprobación' es incorrecta, siempre es recomendable verificar."
    },
    {
        id: 'u2q38',
        unit: 2,
        questionText: "El software 'Topocal' es una herramienta informática que se utiliza para:",
        options: [
            "Gestión de proyectos de obra en general.",
            "Cálculos estructurales avanzados.",
            "CAD y Topografía, incluyendo MDT y movimiento de tierras.",
            "Navegación GPS en tiempo real."
        ],
        correctAnswerIndex: 2,
        explanation: "Topocal es un software que combina funcionalidades de CAD con herramientas específicas para topografía, como la creación de Modelos Digitales del Terreno (MDT) y cálculos de movimiento de tierras."
    },
    {
        id: 'u2q39',
        unit: 2,
        questionText: "Una de las funciones del 'Acta de Replanteo' es dejar constancia del nombramiento del:",
        options: [
            "Coordinador de seguridad y salud.",
            "Arquitecto proyectista.",
            "Jefe de obra por parte del constructor.",
            "Representante del ayuntamiento."
        ],
        correctAnswerIndex: 2,
        explanation: "Entre el contenido mínimo del Acta de Replanteo se encuentra la constancia del nombramiento del jefe de obra por parte de la empresa constructora."
    },
    {
        id: 'u2q40',
        unit: 2,
        questionText: "La autorización para el inicio inmediato de los trabajos, según el Acta de Replanteo, la otorga:",
        options: [
            "El constructor.",
            "El promotor únicamente.",
            "La dirección facultativa, de acuerdo con el promotor.",
            "El ayuntamiento, tras revisar el acta."
        ],
        correctAnswerIndex: 2,
        explanation: "El Acta de Replanteo incluye la autorización de la dirección facultativa (arquitecto, director de obra, director de ejecución), actuando de acuerdo con el promotor, para el inicio inmediato de los trabajos."
    },
    {
        id: 'u2q41',
        unit: 2,
        questionText: "¿Qué información es crucial que contengan los planos de replanteo para una correcta ejecución?",
        options: [
            "Solo las dimensiones generales del edificio.",
            "Únicamente la ubicación de los puntos de luz.",
            "Ejes acotados, cotas parciales/acumuladas, cotas de nivel, y detalles de elementos clave.",
            "El presupuesto detallado de la obra."
        ],
        correctAnswerIndex: 2,
        explanation: "Los planos de replanteo deben ser precisos y contener información como ejes acotados, cotas parciales y acumuladas, cotas de nivel, y detalles de cimentaciones, estructura, etc."
    },
    {
        id: 'u2q42',
        unit: 2,
        questionText: "El método de replanteo con Estación Total requiere que el operario con el prisma se ubique guiado por:",
        options: [
            "Señales de humo desde la estación.",
            "Indicaciones verbales a larga distancia.",
            "Indicaciones del equipo Estación Total (distancia y ángulo o coordenadas).",
            "Un mapa del tesoro previamente dibujado."
        ],
        correctAnswerIndex: 2,
        explanation: "En el replanteo con Estación Total, el operario que porta el prisma se posiciona siguiendo las indicaciones que le proporciona el propio equipo (cuánto moverse en ángulo y/o distancia, o las coordenadas a alcanzar)."
    },
    {
        id: 'u2q43',
        unit: 2,
        questionText: "Python, en el contexto de la topografía y el replanteo, se menciona como:",
        options: [
            "Un tipo de instrumento topográfico antiguo.",
            "Un software CAD específico para replanteos.",
            "Un lenguaje de programación útil para cálculos geodésicos/topográficos.",
            "Una marca de estaciones totales."
        ],
        correctAnswerIndex: 2,
        explanation: "Python es un lenguaje de programación versátil que también puede utilizarse para realizar cálculos geodésicos y topográficos, complementando otras herramientas."
    },
    {
        id: 'u2q44',
        unit: 2,
        questionText: "¿Cuál es la principal diferencia entre un proyecto definido 'analíticamente' y uno 'gráficamente' para el replanteo?",
        options: [
            "El analítico es más barato de ejecutar.",
            "El gráfico no requiere planos.",
            "El analítico define elementos numéricamente (coordenadas), facilitando el cálculo de datos de replanteo; el gráfico requiere medición sobre planos.",
            "El analítico solo se usa para carreteras y el gráfico para edificios."
        ],
        correctAnswerIndex: 2,
        explanation: "Un proyecto analítico tiene sus elementos definidos por números (coordenadas, dimensiones exactas), lo que permite calcular directamente los datos para el replanteo. Un proyecto gráfico requiere medir sobre los planos para obtener esas dimensiones."
    },
    {
        id: 'u2q45',
        unit: 2,
        questionText: "El software 'Leica SmartWorx Viva' es una aplicación para:",
        options: [
            "Dibujo arquitectónico en 3D.",
            "Cálculo de estructuras de hormigón.",
            "Recopilación de datos y replanteo con equipos topográficos Leica.",
            "Gestión de la seguridad y salud en obra."
        ],
        correctAnswerIndex: 2,
        explanation: "Leica SmartWorx Viva es una aplicación de software diseñada para trabajar con equipos topográficos de la marca Leica, facilitando tareas de levantamiento y replanteo."
    },
    {
        id: 'u2q46',
        unit: 2,
        questionText: "El replanteo planimétrico del terreno consiste en situar y señalar en el terreno puntos cuya posición se conoce en:",
        options: [
            "Una fotografía aérea.",
            "Un modelo tridimensional.",
            "Un plano.",
            "La memoria descriptiva del proyecto."
        ],
        correctAnswerIndex: 2,
        explanation: "El replanteo planimétrico tiene como objetivo situar y materializar en el terreno los puntos cuya posición (coordenadas x,y) está definida en un plano."
    },
    {
        id: 'u2q47',
        unit: 2,
        questionText: "Una 'Centiárea' (ca) es una unidad de superficie que equivale a:",
        options: [
            "1 metro cuadrado (m²).",
            "10 metros cuadrados (m²).",
            "0.1 metros cuadrados (m²).",
            "100 metros cuadrados (m²)."
        ],
        correctAnswerIndex: 0,
        explanation: "Una Centiárea (ca) equivale a 1 metro cuadrado. Es la centésima parte de un Área (a), que son 100 m²."
    },
    {
        id: 'u2q48',
        unit: 2,
        questionText: "Si un plano tiene una escala de 1/200, 5 cm medidos en el plano representan en la realidad:",
        options: [
            "1 metro.",
            "10 metros.",
            "20 metros.",
            "100 metros."
        ],
        correctAnswerIndex: 1,
        explanation: "Con escala 1/200, 1 cm en el plano son 200 cm (o 2 metros) en la realidad. Por lo tanto, 5 cm en el plano son 5 * 200 cm = 1000 cm, que equivalen a 10 metros."
    },
    {
        id: 'u2q49',
        unit: 2,
        questionText: "El método 3-4-5 para trazar ángulos rectos se basa en el teorema de:",
        options: [
            "Tales",
            "Pitágoras",
            "Binomio de Newton",
            "Bernoulli"
        ],
        correctAnswerIndex: 1,
        explanation: "El método 3-4-5 es una aplicación práctica del teorema de Pitágoras (a² + b² = c²), donde 3² + 4² = 5² (9 + 16 = 25), formando un triángulo rectángulo."
    },
    {
        id: 'u2q50',
        unit: 2,
        questionText: "Al obtener datos de replanteo por 'Poligonal' desde una definición gráfica, se suele marcar un primer punto por otros métodos y el resto por:",
        options: [
            "Estimación visual.",
            "Coordenadas GPS directas.",
            "Ángulos y distancias de los ejes proyectados.",
            "Medición de desniveles."
        ],
        correctAnswerIndex: 2,
        explanation: "En el método por poligonal partiendo de una definición gráfica, una vez situado un primer punto, los siguientes se suelen replantear midiendo ángulos y distancias correspondientes a los ejes proyectados en el plano."
    },
    {
        id: 'u2q51',
        unit: 2,
        questionText: "El software 'Protopo' se caracteriza por estar integrado con qué conocido programa de CAD?",
        options: [
            "SketchUp",
            "Revit",
            "AutoCAD",
            "SolidWorks"
        ],
        correctAnswerIndex: 2,
        explanation: "Protopo es un software de topografía que se integra con AutoCAD, permitiendo importar/exportar datos y realizar cálculos topográficos dentro de ese entorno CAD."
    },
    {
        id: 'u2q52',
        unit: 2,
        questionText: "La aprobación del plan de seguridad y salud por el coordinador es un requisito que se menciona en el contexto del contenido del:",
        options: [
            "Plano de cimentación.",
            "Estudio geotécnico.",
            "Acta de Replanteo.",
            "Certificado final de obra."
        ],
        correctAnswerIndex: 2,
        explanation: "Dentro del contenido mínimo que debe tener el Acta de Replanteo, se incluye la constancia de la aprobación del plan de seguridad y salud por parte del coordinador de seguridad."
    },
    {
        id: 'u2q53',
        unit: 2,
        questionText: "La documentación técnica para el replanteo debe incluir planos de replanteo que sean:",
        options: [
            "Esquemáticos y generales.",
            "Precisos y detallados.",
            "Solo con información altimétrica.",
            "Dibujados a mano alzada."
        ],
        correctAnswerIndex: 1,
        explanation: "La documentación técnica para el replanteo, especialmente los planos de replanteo, deben ser precisos y detallados para permitir materializar correctamente el proyecto en el terreno."
    },
    {
        id: 'u2q54',
        unit: 2,
        questionText: "El replanteo artesanal es más adecuado para:",
        options: [
            "Grandes obras de infraestructura como autopistas.",
            "Pequeñas construcciones o elementos de obra.",
            "Levantamientos de alta precisión en terrenos extensos.",
            "Proyectos que requieren coordenadas geodésicas."
        ],
        correctAnswerIndex: 1,
        explanation: "El replanteo artesanal, que utiliza herramientas básicas y principios geométricos, es adecuado para pequeñas construcciones o para replantear elementos específicos dentro de una obra mayor."
    },
    {
        id: 'u2q55',
        unit: 2,
        questionText: "La 'precisión' de una medida en topografía se refiere al:",
        options: [
            "Coste del instrumento utilizado.",
            "Tiempo que se tarda en realizar la medida.",
            "Grado de aproximación de la medida al valor real.",
            "Número de decimales que muestra el aparato."
        ],
        correctAnswerIndex: 2,
        explanation: "La precisión de una medida indica cuán cerca está el valor medido del valor verdadero o real de la magnitud."
    },
    {
        id: 'u2q56',
        unit: 2,
        questionText: "Si en un plano de replanteo una distancia mide 2.5 cm y la escala es 1/200, la distancia real es de:",
        options: [
            "2.5 metros",
            "5 metros",
            "50 metros",
            "0.5 metros"
        ],
        correctAnswerIndex: 1,
        explanation: "A escala 1/200, 1 cm en el plano son 200 cm (2 metros) en la realidad. Por tanto, 2.5 cm * 200 cm/cm = 500 cm, que son 5 metros."
    },
    {
        id: 'u2q57',
        unit: 2,
        questionText: "¿Qué tipo de información NO se espera encontrar directamente en un plano acotado?",
        options: [
            "Proyección horizontal de un punto.",
            "Cota de un punto.",
            "Coordenadas X, Y de un punto.",
            "El tipo de material del suelo."
        ],
        correctAnswerIndex: 3,
        explanation: "Un plano acotado define puntos por su proyección horizontal (X,Y) y su cota (Z). El tipo de material del suelo es información geotécnica, no directamente del sistema de representación acotado."
    },
    {
        id: 'u2q58',
        unit: 2,
        questionText: "La 'Base de Replanteo' (artesanal) debe ser un punto:",
        options: [
            "Que se marca aleatoriamente al inicio.",
            "Siempre metálico y enterrado.",
            "Físico, conocido y preferiblemente inalterable durante la obra.",
            "Virtual, solo existente en el software CAD."
        ],
        correctAnswerIndex: 2,
        explanation: "La base de replanteo artesanal debe ser un punto físico, bien definido, de coordenadas conocidas (o referenciado) y que se espera permanezca inalterable para poder ser usado como referencia fiable."
    },
    {
        id: 'u2q59',
        unit: 2,
        questionText: "Al orientar una Estación Total para replantear, se suele visar a una referencia conocida para fijar:",
        options: [
            "La altura del instrumento.",
            "El ángulo horizontal de partida (azimut).",
            "La temperatura y presión atmosférica.",
            "El tipo de prisma a utilizar."
        ],
        correctAnswerIndex: 1,
        explanation: "Para orientar una Estación Total, se visa a un punto de coordenadas conocidas o a una referencia con un azimut conocido, lo que permite establecer el ángulo horizontal de partida para las mediciones posteriores."
    },
    {
        id: 'u2q60',
        unit: 2,
        questionText: "El software 'Topoligonar V3' se especializa en:",
        options: [
            "Modelado BIM de instalaciones.",
            "Cálculos topográficos como itinerarios y radiaciones.",
            "Diseño de interiores y renderizado.",
            "Análisis de imágenes satelitales."
        ],
        correctAnswerIndex: 1,
        explanation: "Topoligonar V3 es un software enfocado en la realización de cálculos topográficos, tales como itinerarios (poligonales), radiaciones, intersecciones, etc."
    }
];
