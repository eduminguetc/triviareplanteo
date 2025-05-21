// unit1_questions.js
export const unit1Questions = [
    {
        id: 'u1q1',
        unit: 1,
        questionText: "¿Cuál es la definición principal de Topografía según la Unidad 1?",
        options: [
            "Estudio de mapas antiguos.",
            "Representación de la Tierra en globos terráqueos.",
            "Rama de la ingeniería que estudia la posición de puntos para representarlos en un plano o localizarlos en terreno.",
            "Diseño arquitectónico de edificaciones."
        ],
        correctAnswerIndex: 2,
        explanation: "La Topografía es la rama de la ingeniería que estudia la posición de puntos de interés en la superficie terrestre (o bajo ella) para representarlos en un plano o localizarlos en el terreno desde un plano."
    },
    {
        id: 'u1q2',
        unit: 1,
        questionText: "Según la Unidad 1, ¿cuáles son las dos vertientes principales de la topografía en edificación?",
        options: [
            "Diseño y construcción.",
            "Levantamiento topográfico y Replanteo.",
            "Cartografía y Geodesia.",
            "Planimetría y Modelado 3D."
        ],
        correctAnswerIndex: 1,
        explanation: "Las dos vertientes principales en edificación son el Levantamiento Topográfico (toma de datos del terreno para crear un plano) y el Replanteo (trasladar puntos del plano al terreno)."
    },
    {
        id: 'u1q3',
        unit: 1,
        questionText: "¿Qué tipo de proyección cartográfica mantiene los ángulos y es usada en navegación?",
        options: [
            "Equivalente",
            "Afiláctica",
            "Conforme",
            "Perspectiva Polar"
        ],
        correctAnswerIndex: 2,
        explanation: "Las proyecciones Conformes mantienen los ángulos y son utilizadas comúnmente en navegación."
    },
    {
        id: 'u1q4',
        unit: 1,
        questionText: "Un plano que solo muestra el valor superficial, sin incluir alturas, se denomina:",
        options: [
            "Plano Altimétrico",
            "Plano Catastral",
            "Plano Planimétrico",
            "Mapa Topográfico"
        ],
        correctAnswerIndex: 2,
        explanation: "Los Planos Planimétricos representan solo el valor superficial, mientras que los Altimétricos incluyen alturas."
    },
    {
        id: 'u1q5',
        unit: 1,
        questionText: "¿Qué tipo de coordenadas utilizan latitud y longitud referidas al ecuador y meridiano de Greenwich?",
        options: [
            "Polares",
            "Cartesianas",
            "Geográficas",
            "Locales"
        ],
        correctAnswerIndex: 2,
        explanation: "Las coordenadas Geográficas usan latitud y longitud (ángulos) referidas al ecuador y meridiano de Greenwich."
    },
    {
        id: 'u1q6',
        unit: 1,
        questionText: "En la conversión de coordenadas polares (r, θ) a cartesianas (x, y), ¿cómo se calcula 'x' si θ se mide desde el eje X?",
        options: [
            "x = r * sin(θ)",
            "x = r * tan(θ)",
            "x = r * cos(θ)",
            "x = y / tan(θ)"
        ],
        correctAnswerIndex: 2,
        explanation: "Para convertir de polares a cartesianas, x se calcula como r * cos(θ) y 'y' como r * sin(θ), asumiendo que θ es el ángulo con el eje X."
    },
    {
        id: 'u1q7',
        unit: 1,
        questionText: "La Planimetría, en el contexto del levantamiento topográfico, se refiere a:",
        options: [
            "La determinación de la cota (coordenada z) del punto.",
            "La proyección del punto sobre un plano de comparación, obteniendo coordenadas (x,y).",
            "La medición de ángulos verticales.",
            "El estudio de errores sistemáticos."
        ],
        correctAnswerIndex: 1,
        explanation: "La Planimetría es la proyección del punto sobre un plano de comparación, obteniendo coordenadas (x,y)."
    },
    {
        id: 'u1q8',
        unit: 1,
        questionText: "¿Cuál de los siguientes NO es un tipo de error general en las medidas topográficas mencionado en la Unidad 1?",
        options: [
            "Sistemáticos",
            "Accidentales",
            "Intencionales",
            "Humanos"
        ],
        correctAnswerIndex: 2,
        explanation: "Los tipos de errores generales mencionados son sistemáticos, accidentales, de lectura (apreciación, sistemáticos, casuales), humanos y atmosféricos. Los 'intencionales' no se listan como categoría de error de medición."
    },
    {
        id: 'u1q9',
        unit: 1,
        questionText: "La operación inversa al levantamiento, que consiste en trasladar puntos del plano al terreno real, se llama:",
        options: [
            "Nivelación",
            "Cartografía",
            "Replanteo",
            "Proyección"
        ],
        correctAnswerIndex: 2,
        explanation: "El Replanteo es la operación inversa al levantamiento, trasladando puntos, alineaciones y dimensiones del plano del proyecto al terreno real."
    },
    {
        id: 'u1q10',
        unit: 1,
        questionText: "Un ángulo vertical medido desde la línea horizontal hacia un objeto que está por encima se denomina:",
        options: [
            "Ángulo de Depresión",
            "Ángulo Acimutal",
            "Ángulo de Elevación",
            "Ángulo Cenital"
        ],
        correctAnswerIndex: 2,
        explanation: "Un ángulo de Elevación es aquel medido en un plano vertical, entre la línea horizontal y la línea visual hacia un objeto por encima de la horizontal."
    },
    {
        id: 'u1q11',
        unit: 1,
        questionText: "¿Qué objetivo persigue la Cartografía?",
        options: [
            "Medir distancias exactas entre ciudades.",
            "Representar gráficamente la superficie terrestre en un mapa.",
            "Estudiar la composición del suelo.",
            "Predecir fenómenos meteorológicos."
        ],
        correctAnswerIndex: 1,
        explanation: "La Cartografía es la ciencia que representa gráficamente la superficie terrestre (esférica e irregular) en un mapa (plano)."
    },
    {
        id: 'u1q12',
        unit: 1,
        questionText: "Las proyecciones cartográficas que conservan las áreas, aunque deformen ángulos o formas, son las:",
        options: [
            "Conformes",
            "Equivalentes",
            "Afilácticas",
            "Gnomónicas"
        ],
        correctAnswerIndex: 1,
        explanation: "Las proyecciones Equivalentes conservan las áreas y son usadas en mapas temáticos o parcelarios."
    },
    {
        id: 'u1q13',
        unit: 1,
        questionText: "¿Cuál es una característica de los mapas geográficos según su escala?",
        options: [
            "Escala menor a 1/100.000",
            "Escala mayor a 1/100.000",
            "Siempre escala 1/50.000",
            "No tienen escala definida"
        ],
        correctAnswerIndex: 1,
        explanation: "Los mapas Geográficos suelen tener una escala mayor a 1/100.000 (ej. 1/200.000, 1/1.000.000), representando grandes extensiones."
    },
    {
        id: 'u1q14',
        unit: 1,
        questionText: "En coordenadas polares, ¿qué elementos definen la posición de un punto?",
        options: [
            "Dos distancias (X, Y)",
            "Latitud, longitud y altitud",
            "Una distancia al origen y dos ángulos (horizontal y vertical)",
            "Un ángulo y una cota"
        ],
        correctAnswerIndex: 2,
        explanation: "Las coordenadas Polares definen un punto por su distancia al origen (Dg) y dos ángulos (H: horizontal/acimut, V: vertical)."
    },
    {
        id: 'u1q15',
        unit: 1,
        questionText: "¿Qué es la altimetría en el contexto de un levantamiento topográfico?",
        options: [
            "Dibujar los límites de una parcela.",
            "Medir ángulos horizontales.",
            "Determinar la cota (coordenada z) del punto respecto al plano de comparación.",
            "Calcular el área de una superficie."
        ],
        correctAnswerIndex: 2,
        explanation: "La Altimetría es la determinación de la cota (coordenada z) del punto respecto al plano de comparación."
    },
    {
        id: 'u1q16',
        unit: 1,
        questionText: "Un error sistemático en una medición topográfica es aquel que:",
        options: [
            "Ocurre de forma aleatoria y es inevitable.",
            "Es constante y debido a imperfecciones del instrumento o método.",
            "Es causado por una distracción del observador.",
            "Se debe a cambios bruscos en la atmósfera."
        ],
        correctAnswerIndex: 1,
        explanation: "Los errores Sistemáticos son constantes y se deben a imperfecciones o descalibraciones del instrumento, o al método empleado."
    },
    {
        id: 'u1q17',
        unit: 1,
        questionText: "¿Qué es la pendiente de un terreno?",
        options: [
            "La longitud total del terreno.",
            "La diferencia de cotas entre dos puntos.",
            "La tangente del ángulo entre el segmento y el plano horizontal.",
            "La distancia horizontal entre dos puntos."
        ],
        correctAnswerIndex: 2,
        explanation: "La Pendiente es la tangente del ángulo formado entre el segmento de terreno y el plano horizontal. Se expresa en %, ‰ o quebrado."
    },
    {
        id: 'u1q18',
        unit: 1,
        questionText: "La distancia medida siguiendo la orografía del terreno se conoce como:",
        options: [
            "Distancia Inclinada",
            "Distancia Geométrica",
            "Distancia Reducida",
            "Distancia Natural"
        ],
        correctAnswerIndex: 3,
        explanation: "La Distancia Natural es aquella que sigue la orografía o perfil real del terreno."
    },
    {
        id: 'u1q19',
        unit: 1,
        questionText: "Si un objeto está por debajo de la línea horizontal del observador, el ángulo vertical medido es un ángulo de:",
        options: [
            "Elevación",
            "Acimut",
            "Depresión",
            "Nadir"
        ],
        correctAnswerIndex: 2,
        explanation: "Un ángulo de Depresión se mide cuando el objeto observado está por debajo de la línea horizontal del punto de observación."
    },
    {
        id: 'u1q20',
        unit: 1,
        questionText: "Los ángulos horizontales o acimutales se miden usualmente respecto al:",
        options: [
            "Sur magnético",
            "Este geográfico",
            "Norte",
            "Oeste local"
        ],
        correctAnswerIndex: 2,
        explanation: "Los ángulos horizontales (Acimutales) se miden en un plano horizontal, usualmente respecto al Norte, y crecen en sentido horario (dextrorsum)."
    },
    {
        id: 'u1q21',
        unit: 1,
        questionText: "¿Cuál es el objetivo principal de una proyección cartográfica?",
        options: [
            "Aumentar el tamaño de los continentes en un mapa.",
            "Transformar matemáticamente la superficie esférica de la Tierra a un plano minimizando distorsiones.",
            "Crear mapas exclusivamente para uso militar.",
            "Mostrar únicamente las rutas de navegación marítima."
        ],
        correctAnswerIndex: 1,
        explanation: "Una Proyección Cartográfica es una transformación matemática para pasar de la esfera al plano, intentando minimizar las distorsiones que son inevitables."
    },
    {
        id: 'u1q22',
        unit: 1,
        questionText: "Los planos que incluyen alturas, representadas por cotas o curvas de nivel, se denominan:",
        options: [
            "Planos temáticos",
            "Planos planimétricos",
            "Planos altimétricos",
            "Planos de cultivo"
        ],
        correctAnswerIndex: 2,
        explanation: "Los Planos Altimétricos son aquellos que, además de la representación en planta, incluyen información sobre las alturas del terreno."
    },
    {
        id: 'u1q23',
        unit: 1,
        questionText: "En un sistema de coordenadas cartesianas, el eje 'X' corresponde a las:",
        options: [
            "Ordenadas",
            "Abscisas",
            "Cotas",
            "Latitudes"
        ],
        correctAnswerIndex: 1,
        explanation: "En coordenadas cartesianas, el eje X representa las abscisas y el eje Y las ordenadas."
    },
    {
        id: 'u1q24',
        unit: 1,
        questionText: "La nivelación trigonométrica, en comparación con la geométrica, generalmente es:",
        options: [
            "Más precisa",
            "Menos precisa",
            "Igual de precisa",
            "No se usa para desniveles"
        ],
        correctAnswerIndex: 1,
        explanation: "La Nivelación Trigonométrica, que determina el desnivel con una visual inclinada, es generalmente menos precisa que la Nivelación Geométrica."
    },
    {
        id: 'u1q25',
        unit: 1,
        questionText: "Un error de apreciación en una lectura está limitado por:",
        options: [
            "La habilidad del observador",
            "Las condiciones atmosféricas",
            "La mínima división del instrumento",
            "El tipo de terreno"
        ],
        correctAnswerIndex: 2,
        explanation: "El error Por Apreciación está limitado por la mínima división que se puede leer en el instrumento (ej. 1 mm en una regla)."
    },
    {
        id: 'u1q26',
        unit: 1,
        questionText: "¿Qué es un talud?",
        options: [
            "Un tipo de coordenada geográfica.",
            "Una superficie inclinada, natural o artificial.",
            "Un instrumento para medir ángulos.",
            "La primera red de un levantamiento planimétrico."
        ],
        correctAnswerIndex: 1,
        explanation: "Un Talud es una superficie inclinada, que puede ser natural (ladera de una montaña) o artificial (en un desmonte o terraplén)."
    },
    {
        id: 'u1q27',
        unit: 1,
        questionText: "La '1ª Red (Trigonométrica)' en planimetría se establece mediante:",
        options: [
            "Radiación desde un punto conocido.",
            "Poligonales interiores.",
            "Triangulación a partir de una base medida.",
            "Nivelación geométrica."
        ],
        correctAnswerIndex: 2,
        explanation: "La primera red en planimetría, o Red Trigonométrica, se establece mediante triangulación a partir de una base medida con precisión."
    },
    {
        id: 'u1q28',
        unit: 1,
        questionText: "Los errores casuales en las mediciones son aquellos debidos a:",
        options: [
            "Descalibración del instrumento.",
            "Un método de medición incorrecto.",
            "Causas no controladas o desconocidas.",
            "Distracciones del operador."
        ],
        correctAnswerIndex: 2,
        explanation: "Los errores Casuales (o accidentales) son aquellos que ocurren por causas no controladas o desconocidas, de forma fortuita."
    },
    {
        id: 'u1q29',
        unit: 1,
        questionText: "¿Cuál de estas NO es una forma de expresar la pendiente?",
        options: [
            "En porcentaje (%)",
            "En grados sexagesimales (°)",
            "En quebrado (ej. 1/5)",
            "En por mil (‰)"
        ],
        correctAnswerIndex: 1,
        explanation: "La pendiente se expresa comúnmente en porcentaje (%), por mil (‰) o como un quebrado (relación desnivel/distancia horizontal). No se expresa directamente en grados sexagesimales como una medida de pendiente en sí, aunque el ángulo que la define sí se mide en grados."
    },
    {
        id: 'u1q30',
        unit: 1,
        questionText: "El proceso de trasladar puntos, alineaciones y dimensiones del plano del proyecto al terreno real se conoce específicamente como:",
        options: [
            "Levantamiento Altimétrico",
            "Replanteo Topográfico",
            "Proyección Conforme",
            "Digitalización de Planos"
        ],
        correctAnswerIndex: 1,
        explanation: "El Replanteo Topográfico es la operación de trasladar fielmente al terreno los elementos definidos en los planos del proyecto."
    },
    {
        id: 'u1q31',
        unit: 1,
        questionText: "Las proyecciones cartográficas denominadas 'Afilácticas' se caracterizan por:",
        options: [
            "Conservar perfectamente los ángulos.",
            "Conservar perfectamente las áreas.",
            "No conservar ángulos, áreas ni distancias, pero minimizar deformaciones.",
            "Ser usadas exclusivamente para mapas de pequeña escala."
        ],
        correctAnswerIndex: 2,
        explanation: "Las proyecciones Afilácticas no conservan ángulos, áreas ni distancias, pero buscan minimizar las deformaciones generales."
    },
    {
        id: 'u1q32',
        unit: 1,
        questionText: "¿Qué tipo de plano topográfico se utiliza con fines recaudatorios y de propiedad?",
        options: [
            "Plano Hidrográfico",
            "Plano de Cultivos",
            "Plano Catastral",
            "Plano Geográfico"
        ],
        correctAnswerIndex: 2,
        explanation: "Los Planos Catastrales son planos taquimétricos con fines recaudatorios, enfocados en la delimitación de propiedades."
    },
    {
        id: 'u1q33',
        unit: 1,
        questionText: "Al convertir coordenadas cartesianas (x,y) a polares (r,θ), ¿cómo se calcula 'r'?",
        options: [
            "r = x + y",
            "r = √(x² + y²)",
            "r = x / cos(θ)",
            "r = y / sin(θ)"
        ],
        correctAnswerIndex: 1,
        explanation: "En la conversión de cartesianas a polares, la distancia al origen 'r' se calcula como la raíz cuadrada de (x² + y²)."
    },
    {
        id: 'u1q34',
        unit: 1,
        questionText: "La nivelación barométrica, para determinar la altimetría, es conocida por ser:",
        options: [
            "Muy precisa, ideal para obras de detalle.",
            "De precisión media, usada en replanteos.",
            "Poco precisa, adecuada para trabajos previos o de reconocimiento.",
            "El método más moderno y exacto disponible."
        ],
        correctAnswerIndex: 2,
        explanation: "La Nivelación Barométrica es un método de baja precisión, generalmente utilizado para trabajos previos o de reconocimiento general del terreno."
    },
    {
        id: 'u1q35',
        unit: 1,
        questionText: "¿Qué tipo de error se produce por la dilatación de una cinta métrica metálica en un día caluroso?",
        options: [
            "Error accidental",
            "Error de apreciación",
            "Error sistemático",
            "Error humano"
        ],
        correctAnswerIndex: 2,
        explanation: "La dilatación de una cinta métrica debido a la temperatura es un ejemplo de error sistemático, ya que afecta de manera constante y predecible a las mediciones."
    },
    {
        id: 'u1q36',
        unit: 1,
        questionText: "La 'distancia reducida' en topografía se refiere a:",
        options: [
            "La distancia más corta entre dos puntos.",
            "La proyección horizontal de la distancia inclinada o geométrica.",
            "La distancia medida con un instrumento defectuoso.",
            "La distancia vertical entre dos puntos."
        ],
        correctAnswerIndex: 1,
        explanation: "La Distancia Reducida es la proyección horizontal de la distancia inclinada o la distancia geométrica."
    },
    {
        id: 'u1q37',
        unit: 1,
        questionText: "Un ejemplo de 'replanteo interno' en edificación sería:",
        options: [
            "Marcar los límites de la parcela.",
            "Establecer la cota de la planta baja.",
            "Marcar la ubicación de la tabiquería interior.",
            "Realizar el levantamiento topográfico inicial."
        ],
        correctAnswerIndex: 2,
        explanation: "El replanteo de la distribución interior, como la tabiquería, es un ejemplo de replanteo interno."
    },
    {
        id: 'u1q38',
        unit: 1,
        questionText: "Los ángulos verticales se miden en un plano vertical, entre la línea visual y ¿qué otra línea de referencia?",
        options: [
            "La línea Norte-Sur",
            "La línea Este-Oeste",
            "La línea horizontal",
            "La vertical del lugar (plomada)"
        ],
        correctAnswerIndex: 2,
        explanation: "Los ángulos verticales se miden en un plano vertical, entre la línea horizontal que pasa por el instrumento y la línea visual al punto observado."
    },
    {
        id: 'u1q39',
        unit: 1,
        questionText: "El objetivo de la Topografía es codificar la posición de puntos mediante medidas de:",
        options: [
            "Solo distancias",
            "Solo elevaciones",
            "Solo direcciones",
            "Distancia, elevación y dirección"
        ],
        correctAnswerIndex: 3,
        explanation: "La topografía busca codificar la posición de puntos mediante la toma de medidas de distancia, elevación y dirección."
    },
    {
        id: 'u1q40',
        unit: 1,
        questionText: "¿Qué es una 'proyección perspectiva o plana' en cartografía?",
        options: [
            "Una proyección que usa un cilindro auxiliar.",
            "Una proyección que usa un cono auxiliar.",
            "Una proyección desde un punto (vértice) sobre un plano tangente a la esfera.",
            "Una proyección que no produce ninguna distorsión."
        ],
        correctAnswerIndex: 2,
        explanation: "Las proyecciones perspectivas o planas son aquellas que se realizan desde un punto (vértice) sobre un plano tangente a la esfera terrestre."
    },
    {
        id: 'u1q41',
        unit: 1,
        questionText: "Un mapa topográfico, según la clasificación por escala, tiene una escala:",
        options: [
            "Mayor a 1/10.000",
            "Menor a 1/100.000",
            "Exactamente 1/25.000",
            "Variable según la región"
        ],
        correctAnswerIndex: 1,
        explanation: "Los mapas topográficos suelen tener una escala menor a 1/100.000 (ej. 1/50.000, 1/25.000), representando extensiones de terreno con detalle."
    },
    {
        id: 'u1q42',
        unit: 1,
        questionText: "El sistema de coordenadas cartesianas define el espacio mediante ejes que son:",
        options: [
            "Paralelos entre sí",
            "Ortogonales (perpendiculares) entre sí",
            "Convergentes en un polo",
            "Curvos y adaptados a la superficie terrestre"
        ],
        correctAnswerIndex: 1,
        explanation: "El sistema de coordenadas cartesianas utiliza ejes ortogonales (X, Y, y Z en 3D) que se cortan en un origen."
    },
    {
        id: 'u1q43',
        unit: 1,
        questionText: "La 2ª Red Topográfica en planimetría se establece generalmente mediante:",
        options: [
            "Radiación directa desde la base.",
            "Triangulación avanzada.",
            "Poligonales interiores a la primera red.",
            "Mediciones GPS de alta precisión."
        ],
        correctAnswerIndex: 2,
        explanation: "La 2ª Red Topográfica se establece mediante poligonales que se desarrollan en el interior de la 1ª Red Trigonométrica."
    },
    {
        id: 'u1q44',
        unit: 1,
        questionText: "Un error humano en topografía podría ser:",
        options: [
            "Una imperfección en la graduación de una mira.",
            "Un cambio de temperatura que afecta al instrumento.",
            "Anotar incorrectamente una lectura por distracción.",
            "Una variación aleatoria en la refracción atmosférica."
        ],
        correctAnswerIndex: 2,
        explanation: "Anotar incorrectamente una lectura debido a una distracción es un claro ejemplo de error humano."
    },
    {
        id: 'u1q45',
        unit: 1,
        questionText: "El desnivel entre dos puntos se define como:",
        options: [
            "La distancia horizontal entre ellos.",
            "La distancia inclinada medida directamente.",
            "La diferencia de cotas (distancia vertical) entre ellos.",
            "El ángulo formado por la línea que los une y la horizontal."
        ],
        correctAnswerIndex: 2,
        explanation: "El desnivel es la diferencia de cotas, es decir, la distancia vertical, entre dos puntos."
    },
    {
        id: 'u1q46',
        unit: 1,
        questionText: "El replanteo de instalaciones en una obra se refiere a:",
        options: [
            "Marcar los límites exteriores del edificio.",
            "Definir la posición de los elementos estructurales.",
            "Trasladar al terreno la ubicación de tuberías, conductos, puntos de luz, etc.",
            "Comprobar la verticalidad de los muros."
        ],
        correctAnswerIndex: 2,
        explanation: "El replanteo de instalaciones implica marcar en la obra la ubicación de todos los componentes de las diferentes instalaciones (fontanería, electricidad, etc.)."
    },
    {
        id: 'u1q47',
        unit: 1,
        questionText: "Si un ángulo horizontal se mide en sentido horario desde el Norte, se dice que es:",
        options: [
            "Levógiro",
            "Negativo",
            "Dextrorsum",
            "Cenital"
        ],
        correctAnswerIndex: 2,
        explanation: "Los ángulos horizontales medidos en sentido horario (como las agujas del reloj) se denominan dextrorsum."
    },
    {
        id: 'u1q48',
        unit: 1,
        questionText: "Antes de construir una casa, un topógrafo mide el terreno para crear un plano detallado. Esta acción es un ejemplo de:",
        options: [
            "Replanteo",
            "Nivelación barométrica",
            "Levantamiento Topográfico",
            "Proyección conforme"
        ],
        correctAnswerIndex: 2,
        explanation: "La toma de datos del terreno para crear un plano es la definición de Levantamiento Topográfico."
    },
    {
        id: 'u1q49',
        unit: 1,
        questionText: "Las proyecciones cartográficas que utilizan una figura auxiliar como un cono o cilindro se clasifican como:",
        options: [
            "Perspectivas o Planas",
            "En Desarrollo",
            "Afilácticas puras",
            "Geográficas directas"
        ],
        correctAnswerIndex: 1,
        explanation: "Las proyecciones En Desarrollo son aquellas que utilizan una figura auxiliar (cono o cilindro) que luego se 'desarrolla' para formar el plano."
    },
    {
        id: 'u1q50',
        unit: 1,
        questionText: "Un plano temático podría representar:",
        options: [
            "Únicamente las curvas de nivel de una zona.",
            "Las divisiones parcelarias para el catastro.",
            "Información específica como redes hidrográficas o tipos de cultivo.",
            "La estructura interna de un edificio."
        ],
        correctAnswerIndex: 2,
        explanation: "Los planos temáticos se centran en representar información específica sobre un tema, como hidrografía, geología, tipos de cultivo, etc."
    },
    {
        id: 'u1q51',
        unit: 1,
        questionText: "¿En qué unidades se miden comúnmente las coordenadas geográficas (latitud y longitud)?",
        options: [
            "Metros y centímetros",
            "Grados (°), minutos (') y segundos (\")",
            "Radianes y esterradianes",
            "Porcentaje y por mil"
        ],
        correctAnswerIndex: 1,
        explanation: "La latitud y la longitud, que definen las coordenadas geográficas, se miden en unidades angulares: grados (°), minutos (') y segundos (\")."
    },
    {
        id: 'u1q52',
        unit: 1,
        questionText: "La 3ª Red en planimetría, o 'Radiación', consiste en:",
        options: [
            "Establecer una nueva base de triangulación.",
            "Crear poligonales de mayor precisión.",
            "El levantamiento de detalles desde vértices de la 2ª red.",
            "Medir únicamente desniveles."
        ],
        correctAnswerIndex: 2,
        explanation: "La 3ª Red, o Radiación, es el proceso de levantar los detalles del terreno tomando mediciones desde los vértices establecidos en la 2ª Red Topográfica."
    },
    {
        id: 'u1q53',
        unit: 1,
        questionText: "Los errores atmosféricos en topografía pueden ser causados por cambios en:",
        options: [
            "El magnetismo terrestre.",
            "La calibración del instrumento.",
            "La temperatura, presión y humedad.",
            "La habilidad del observador."
        ],
        correctAnswerIndex: 2,
        explanation: "Los errores atmosféricos son aquellos inducidos por variaciones en las condiciones ambientales como temperatura, presión y humedad, que afectan a las mediciones."
    },
    {
        id: 'u1q54',
        unit: 1,
        questionText: "La 'distancia geométrica' en topografía es:",
        options: [
            "Siempre igual a la distancia reducida.",
            "La recta que une la estación y el punto visado.",
            "La longitud de la curva de nivel.",
            "Una medida obtenida por barómetro."
        ],
        correctAnswerIndex: 1,
        explanation: "La Distancia Geométrica es la longitud de la línea recta que une la estación (punto donde se sitúa el aparato) y el punto visado."
    },
    {
        id: 'u1q55',
        unit: 1,
        questionText: "El replanteo puede ser de tipo 'Topográfico' o 'Artesanal'. El tipo 'Topográfico' se caracteriza por usar:",
        options: [
            "Solo cinta métrica y plomada.",
            "Equipos especializados como estaciones totales y GPS.",
            "Métodos basados en la observación de astros.",
            "Únicamente para interiores de edificios."
        ],
        correctAnswerIndex: 1,
        explanation: "El replanteo Topográfico se realiza con equipos especializados como estaciones totales o GPS, siendo adecuado para grandes construcciones y precisiones elevadas."
    },
    {
        id: 'u1q56',
        unit: 1,
        questionText: "Un ángulo de depresión se mide cuando el punto visado está:",
        options: [
            "Exactamente a la misma altura que el observador.",
            "Por encima de la horizontal del observador.",
            "Por debajo de la horizontal del observador.",
            "Directamente sobre la cabeza del observador (cenit)."
        ],
        correctAnswerIndex: 2,
        explanation: "Un ángulo de depresión se forma cuando la línea visual hacia el objeto está por debajo del plano horizontal que pasa por el punto de observación."
    },
    {
        id: 'u1q57',
        unit: 1,
        questionText: "El alcance de la topografía incluye:",
        options: [
            "Solo el manejo de instrumentos.",
            "Solo los procedimientos de campo.",
            "Solo la representación de terrenos.",
            "Procedimientos de campo, manejo de instrumentos y representación de terrenos."
        ],
        correctAnswerIndex: 3,
        explanation: "El alcance de la topografía es amplio e incluye los procedimientos de campo, el manejo de los instrumentos y las técnicas de representación de terrenos."
    },
    {
        id: 'u1q58',
        unit: 1,
        questionText: "Una proyección cartográfica 'Estereográfica' es un tipo de proyección:",
        options: [
            "Cilíndrica",
            "Cónica",
            "Perspectiva o Plana",
            "Equivalente pura"
        ],
        correctAnswerIndex: 2,
        explanation: "La proyección Estereográfica es un tipo de proyección perspectiva o plana, donde el vértice de proyección se sitúa en la superficie de la esfera, opuesto al plano de proyección."
    },
    {
        id: 'u1q59',
        unit: 1,
        questionText: "¿Cuál es la principal diferencia entre un mapa y un plano según la Unidad 1?",
        options: [
            "Los mapas siempre son a color y los planos en blanco y negro.",
            "Los mapas representan pequeñas extensiones y los planos grandes extensiones.",
            "Los mapas representan grandes extensiones (requieren proyección) y los planos superficies pequeñas (consideradas planas).",
            "Los mapas solo muestran relieve y los planos solo construcciones."
        ],
        correctAnswerIndex: 2,
        explanation: "La principal diferencia radica en la extensión representada: los mapas cubren grandes áreas y necesitan proyecciones cartográficas, mientras que los planos representan superficies más pequeñas que pueden considerarse planas."
    },
    {
        id: 'u1q60',
        unit: 1,
        questionText: "Convertir coordenadas polares a cartesianas y viceversa es posible mediante el uso de:",
        options: [
            "Cálculo integral",
            "Álgebra de matrices",
            "Trigonometría",
            "Estadística descriptiva"
        ],
        correctAnswerIndex: 2,
        explanation: "La conversión entre sistemas de coordenadas polares y cartesianas se realiza fundamentalmente aplicando principios de trigonometría."
    },
    {
        id: 'u1q61',
        unit: 1,
        questionText: "La nivelación geométrica se basa en obtener la diferencia de altura mediante una:",
        options: [
            "Visual inclinada y medición de ángulo.",
            "Visual horizontal y lectura en mira.",
            "Medición de presión atmosférica.",
            "Señales GPS."
        ],
        correctAnswerIndex: 1,
        explanation: "La Nivelación Geométrica, el método más preciso, se basa en establecer una visual horizontal con un nivel y realizar lecturas sobre una mira graduada."
    },
    {
        id: 'u1q62',
        unit: 1,
        questionText: "Un error que es aleatorio, asociado al observador y fortuito, se clasifica como:",
        options: [
            "Error sistemático del instrumento.",
            "Error de calibración.",
            "Error accidental.",
            "Error por método incorrecto."
        ],
        correctAnswerIndex: 2,
        explanation: "Los errores accidentales (o casuales) son aquellos aleatorios, asociados al observador o a causas fortuitas e impredecibles."
    },
    {
        id: 'u1q63',
        unit: 1,
        questionText: "La 'distancia inclinada' es la que se mide:",
        options: [
            "Siempre en horizontal.",
            "Siguiendo las curvas de nivel.",
            "Como una recta entre el eje del aparato y el prisma/punto.",
            "Solo con GPS."
        ],
        correctAnswerIndex: 2,
        explanation: "La Distancia Inclinada es la medida directa en línea recta entre el eje del instrumento topográfico y el prisma reflector o el punto visado."
    },
    {
        id: 'u1q64',
        unit: 1,
        questionText: "El replanteo de una vivienda unifamiliar pequeña se puede realizar mediante métodos:",
        options: [
            "Exclusivamente topográficos con GPS RTK.",
            "Artesanales, usando herramientas básicas de geometría.",
            "Solo con nivelación barométrica.",
            "A través de fotogrametría aérea."
        ],
        correctAnswerIndex: 1,
        explanation: "Para viviendas o pequeñas construcciones, a menudo se utilizan métodos de replanteo artesanales, basados en principios de geometría y herramientas como cintas métricas y escuadras."
    },
    {
        id: 'u1q65',
        unit: 1,
        questionText: "El ángulo horizontal medido desde el Norte en sentido antihorario se considera:",
        options: [
            "Acimut dextrorsum",
            "Ángulo de depresión positivo",
            "No es una forma estándar de medir acimutes",
            "Acimut levógiro (aunque menos común en topografía estándar)"
        ],
        correctAnswerIndex: 3,
        explanation: "Aunque el estándar es dextrorsum (sentido horario), un ángulo medido en sentido antihorario sería levógiro. En topografía, se suele convertir a la convención horaria."
    },
    {
        id: 'u1q66',
        unit: 1,
        questionText: "La ciencia de representar gráficamente la superficie terrestre esférica e irregular en un mapa plano se llama:",
        options: [
            "Geodesia",
            "Fotogrametría",
            "Cartografía",
            "Batimetría"
        ],
        correctAnswerIndex: 2,
        explanation: "La Cartografía es la ciencia dedicada a la representación gráfica de la superficie terrestre en mapas."
    },
    {
        id: 'u1q67',
        unit: 1,
        questionText: "Si un mapa conserva las áreas relativas de las regiones representadas, ¿qué tipo de proyección es probablemente?",
        options: [
            "Conforme",
            "Equivalente",
            "Afiláctica",
            "Estereográfica"
        ],
        correctAnswerIndex: 1,
        explanation: "Las proyecciones Equivalentes son aquellas que mantienen la proporcionalidad de las áreas."
    },
    {
        id: 'u1q68',
        unit: 1,
        questionText: "Los planos de 'Cultivos' son un ejemplo de planos:",
        options: [
            "Planimétricos puros",
            "Altimétricos exclusivamente",
            "Catastrales",
            "Temáticos"
        ],
        correctAnswerIndex: 3,
        explanation: "Los planos que muestran información específica como tipos de cultivos son un ejemplo de planos Temáticos."
    },
    {
        id: 'u1q69',
        unit: 1,
        questionText: "El origen (0,0) en un sistema de coordenadas cartesianas es el punto donde:",
        options: [
            "Solo se mide la coordenada Z.",
            "Se cortan los ejes X e Y (y Z si es 3D).",
            "Comienza la latitud cero.",
            "Se ubica siempre el Norte magnético."
        ],
        correctAnswerIndex: 1,
        explanation: "El origen en un sistema de coordenadas cartesianas es el punto de intersección de todos sus ejes (X, Y, Z)."
    },
    {
        id: 'u1q70',
        unit: 1,
        questionText: "La principal finalidad del 'levantamiento topográfico' en edificación es:",
        options: [
            "Marcar la posición exacta de los cimientos.",
            "Tomar datos del terreno para crear un plano.",
            "Comprobar la verticalidad de una estructura existente.",
            "Determinar el tipo de suelo para la cimentación."
        ],
        correctAnswerIndex: 1,
        explanation: "El levantamiento topográfico tiene como finalidad principal la toma de datos del terreno existente para poder elaborar un plano preciso del mismo."
    },
    {
        id: 'u1q71',
        unit: 1,
        questionText: "¿Qué información NO es esencial para definir un punto mediante coordenadas polares en topografía?",
        options: [
            "Distancia al origen (Dg)",
            "Ángulo horizontal (H o acimut)",
            "Ángulo vertical (V)",
            "Temperatura ambiente"
        ],
        correctAnswerIndex: 3,
        explanation: "Para definir un punto en coordenadas polares se necesita la distancia al origen y los ángulos horizontal y vertical. La temperatura ambiente puede afectar a la precisión de algunos instrumentos, pero no es un componente de la coordenada polar en sí."
    },
    {
        id: 'u1q72',
        unit: 1,
        questionText: "Las proyecciones cónicas utilizan un cono como figura auxiliar que es...",
        options: [
            "Siempre tangente a la esfera en el ecuador.",
            "Tangente o secante a la esfera.",
            "Siempre secante a la esfera en dos paralelos.",
            "Una figura plana, no un cono."
        ],
        correctAnswerIndex: 1,
        explanation: "En las proyecciones cónicas, el cono auxiliar puede ser tangente a la esfera a lo largo de un paralelo o secante, cortándola a lo largo de dos paralelos."
    },
    {
        id: 'u1q73',
        unit: 1,
        questionText: "Un 'mapa particular' se diferencia de un 'mapa general' en que:",
        options: [
            "Cubre una extensión mucho mayor.",
            "Tiene una escala más pequeña (ej. 1/1.000.000).",
            "Se enfoca en un área geográfica específica o tema concreto con más detalle.",
            "Siempre es planimétrico."
        ],
        correctAnswerIndex: 2,
        explanation: "Los mapas particulares se centran en representar con mayor detalle una zona geográfica específica o un tema concreto, a diferencia de los mapas generales que cubren áreas más amplias con menor nivel de detalle."
    },
    {
        id: 'u1q74',
        unit: 1,
        questionText: "Si las coordenadas cartesianas de un punto son (3, 4), ¿cuál es su distancia 'r' al origen en un sistema polar?",
        options: [
            "3",
            "4",
            "5",
            "7"
        ],
        correctAnswerIndex: 2,
        explanation: "Aplicando el teorema de Pitágoras, r = √(x² + y²) = √(3² + 4²) = √(9 + 16) = √25 = 5."
    },
    {
        id: 'u1q75',
        unit: 1,
        questionText: "La nivelación que se realiza para determinar la diferencia de altura con una visual horizontal es la:",
        options: [
            "Nivelación trigonométrica",
            "Nivelación barométrica",
            "Nivelación geométrica",
            "Nivelación por GPS"
        ],
        correctAnswerIndex: 2,
        explanation: "La nivelación geométrica es el método que utiliza una visual horizontal (proporcionada por un nivel topográfico) para determinar diferencias de altura."
    },
    {
        id: 'u1q76',
        unit: 1,
        questionText: "Un error debido a que el observador lee '1.5 m' en lugar de '1.05 m' es un error:",
        options: [
            "Sistemático del instrumento",
            "De apreciación",
            "Atmosférico",
            "Humano (por distracción)"
        ],
        correctAnswerIndex: 3,
        explanation: "Leer incorrectamente un valor por distracción o equivocación al anotar es un ejemplo de error humano."
    },
    {
        id: 'u1q77',
        unit: 1,
        questionText: "La 'distancia natural' es importante porque representa:",
        options: [
            "La distancia más fácil de medir.",
            "La distancia real a recorrer sobre el terreno.",
            "La proyección sobre el plano del mapa.",
            "Una constante en todos los tipos de terreno."
        ],
        correctAnswerIndex: 1,
        explanation: "La distancia natural es la que sigue la superficie real del terreno, por lo que representa la longitud que se recorrería al moverse sobre él."
    },
    {
        id: 'u1q78',
        unit: 1,
        questionText: "El replanteo de los límites de una gran finca se realizaría más eficientemente con métodos:",
        options: [
            "Artesanales con cuerda y estacas.",
            "Topográficos, posiblemente con GPS.",
            "Solo con nivelación geométrica.",
            "Mediante proyecciones gnomónicas."
        ],
        correctAnswerIndex: 1,
        explanation: "Para grandes extensiones como una finca, los métodos topográficos, especialmente con el uso de GPS, son más eficientes y precisos para el replanteo de límites."
    },
    {
        id: 'u1q79',
        unit: 1,
        questionText: "¿Cuál es el propósito de la '3ª Red (Radiación)' en un levantamiento planimétrico?",
        options: [
            "Establecer los puntos base de la triangulación.",
            "Definir las poligonales principales.",
            "Levantar los detalles y puntos de interés del terreno desde vértices conocidos.",
            "Corregir los errores de cierre de las redes anteriores."
        ],
        correctAnswerIndex: 2,
        explanation: "La 3ª Red o Radiación se utiliza para levantar los detalles específicos del terreno (edificios, caminos, árboles, etc.) midiendo desde los vértices de la 2ª Red."
    },
    {
        id: 'u1q80',
        unit: 1,
        questionText: "Los ángulos acimutales (horizontales) en topografía se miden generalmente en sentido:",
        options: [
            "Antihorario desde el Sur",
            "Horario desde el Este",
            "Antihorario desde el Oeste",
            "Horario (dextrorsum) desde el Norte"
        ],
        correctAnswerIndex: 3,
        explanation: "Por convención en topografía, los ángulos horizontales o acimutes se miden en sentido horario (dextrorsum) a partir de la dirección Norte."
    }
];
