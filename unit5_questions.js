// unit5_questions.js
export const unit5Questions = [
    {
        id: 'u5q1',
        unit: 5,
        questionText: "¿Cómo se realiza generalmente el replanteo de elementos complejos como la planta de un edificio?",
        options: [
            "Se replantea el perímetro exterior de una sola vez.",
            "Se descompone en puntos geométricos clave que se replantean individualmente y luego se unen.",
            "Se utiliza exclusivamente un modelo 3D proyectado en el terreno.",
            "Se estima visualmente basándose en los planos."
        ],
        correctAnswerIndex: 1,
        explanation: "El replanteo de elementos complejos, como la planta de un edificio, se realiza descomponiéndolos en puntos geométricos característicos. Estos puntos se replantean individualmente y luego se unen para definir el elemento completo."
    },
    {
        id: 'u5q2',
        unit: 5,
        questionText: "¿Cuándo es necesaria la 'reposición de puntos' en una obra?",
        options: [
            "Al inicio de cada jornada laboral.",
            "Solo si el proyecto cambia significativamente.",
            "Cuando los puntos de replanteo iniciales se pierden o destruyen durante la obra.",
            "Únicamente en obras de gran envergadura."
        ],
        correctAnswerIndex: 2,
        explanation: "La reposición de puntos es necesaria cuando los puntos marcados inicialmente en el replanteo se han perdido o han sido destruidos debido al movimiento de maquinaria, excavaciones u otras actividades de la obra."
    },
    {
        id: 'u5q3',
        unit: 5,
        questionText: "Para definir una alineación recta en el terreno, ¿cuántos puntos extremos se recomiendan como mínimo para comprobación?",
        options: [
            "Un solo punto bien definido.",
            "Dos puntos extremos.",
            "Tres puntos extremos.",
            "Cuatro puntos formando un rectángulo."
        ],
        correctAnswerIndex: 2,
        explanation: "Una línea recta en el terreno se define por al menos dos puntos extremos, pero se recomienda utilizar un tercer punto para la comprobación de la alineación."
    },
    {
        id: 'u5q4',
        unit: 5,
        questionText: "El 'tiralíneas' o 'bota de trazar' se utiliza para marcar rectas sobre:",
        options: [
            "Terrenos con mucha vegetación.",
            "Superficies rugosas y blandas.",
            "Superficies relativamente lisas como suelos, paredes o techos.",
            "Agua o superficies mojadas."
        ],
        correctAnswerIndex: 2,
        explanation: "El tiralíneas es una herramienta que utiliza un cordel impregnado en polvo de tiza para marcar líneas rectas sobre superficies relativamente lisas y firmes, como hormigón, enfoscados, etc."
    },
    {
        id: 'u5q5',
        unit: 5,
        questionText: "El método del triángulo 3-4-5 para trazar perpendiculares se basa en el teorema de:",
        options: [
            "Tales",
            "Pitágoras",
            "Ruffini",
            "Gauss"
        ],
        correctAnswerIndex: 1,
        explanation: "El método del triángulo 3-4-5 es una aplicación directa del teorema de Pitágoras (a² + b² = c²), ya que un triángulo con lados de 3, 4 y 5 unidades (o múltiplos) es siempre un triángulo rectángulo."
    },
    {
        id: 'u5q6',
        unit: 5,
        questionText: "Para trazar una perpendicular a una alineación AB desde un punto P exterior usando cuerda y cinta métrica, ¿qué se busca?",
        options: [
            "El punto más cercano a P en la alineación.",
            "La intersección de dos arcos de igual radio desde A y B.",
            "El punto medio de un segmento A'B' creado por un arco con centro en P que corta a AB.",
            "Un ángulo de 45° respecto a la alineación."
        ],
        correctAnswerIndex: 2,
        explanation: "Se traza un arco con centro en P que corte la alineación AB en dos puntos (A' y B'). La mediatriz del segmento A'B' pasará por P y será perpendicular a AB. El pie de la perpendicular es el punto medio de A'B'."
    },
    {
        id: 'u5q7',
        unit: 5,
        questionText: "Para trazar una línea paralela a una alineación original a una distancia 'd' dada, un procedimiento común es:",
        options: [
            "Medir 'd' desde un solo punto y trazar a ojo.",
            "Levantar perpendiculares en dos puntos de la alineación original, medir 'd' sobre ellas y unir los nuevos puntos.",
            "Usar un teodolito para girar un ángulo igual a 'd'.",
            "Trazar una bisectriz."
        ],
        correctAnswerIndex: 1,
        explanation: "Un método común es elegir dos puntos en la alineación original, levantar perpendiculares en ellos, medir la distancia 'd' sobre cada perpendicular y luego unir los dos nuevos puntos obtenidos para formar la paralela."
    },
    {
        id: 'u5q8',
        unit: 5,
        questionText: "En el replanteo de una curva circular simple, ¿qué representa 'PC'?",
        options: [
            "Punto Central de la curva.",
            "Punto de Intersección de las tangentes.",
            "Principio de Curva (Punto de Comienzo).",
            "Punto Cualquiera de la curva."
        ],
        correctAnswerIndex: 2,
        explanation: "En la nomenclatura de curvas circulares, 'PC' significa Principio de Curva, es decir, el punto donde la alineación recta (tangente) comienza a convertirse en curva."
    },
    {
        id: 'u5q9',
        unit: 5,
        questionText: "La 'Tangente' (T) de una curva circular simple se calcula como:",
        options: [
            "T = R * sin(α/2)",
            "T = R * cos(α/2)",
            "T = R * tan(α/2)",
            "T = R / tan(α/2)"
        ],
        correctAnswerIndex: 2,
        explanation: "La longitud de la tangente (T) de una curva circular simple, desde el punto de intersección de las tangentes (PI) hasta el PC o el PT, se calcula con la fórmula T = R * tan(α/2), donde R es el radio y α es el ángulo de deflexión."
    },
    {
        id: 'u5q10',
        unit: 5,
        questionText: "El método de trazado de arcos 'por puntos' implica situar puntos aislados del arco y unirlos con:",
        options: [
            "Arcos de compás.",
            "Curvas de nivel.",
            "Rectas cortas.",
            "Líneas de rotura."
        ],
        correctAnswerIndex: 2,
        explanation: "En el trazado de arcos por puntos, se localizan varios puntos que pertenecen al arco y luego se unen mediante segmentos de recta cortos, que aproximan la curvatura."
    },
    {
        id: 'u5q11',
        unit: 5,
        questionText: "Para replantear una circunferencia completa, ¿cuántos puntos no alineados de la misma se requieren como mínimo conocer?",
        options: [
            "1 punto y el radio.",
            "2 puntos diametralmente opuestos.",
            "3 puntos no alineados.",
            "4 puntos formando un cuadrado inscrito."
        ],
        correctAnswerIndex: 2,
        explanation: "Una circunferencia queda unívocamente definida por tres puntos no alineados por los que pasa."
    },
    {
        id: 'u5q12',
        unit: 5,
        questionText: "El centro de una circunferencia se encuentra en la intersección de las _________ de cualquiera de sus cuerdas.",
        options: [
            "Tangentes",
            "Bisectrices",
            "Mediatrices",
            "Paralelas"
        ],
        correctAnswerIndex: 2,
        explanation: "El centro de una circunferencia es el punto donde se intersecan las mediatrices de dos o más cuerdas cualesquiera de dicha circunferencia."
    },
    {
        id: 'u5q13',
        unit: 5,
        questionText: "Si se pierden los puntos de replanteo iniciales pero se usaron referencias externas bien marcadas, la reposición es:",
        options: [
            "Imposible, hay que empezar de cero.",
            "Muy complicada y poco precisa.",
            "Relativamente sencilla, usando las mismas referencias y datos.",
            "Solo posible con GPS de alta precisión."
        ],
        correctAnswerIndex: 2,
        explanation: "Si se han establecido y protegido adecuadamente referencias externas (bases de replanteo), la reposición de puntos perdidos es más sencilla, ya que se pueden volver a medir desde esas referencias utilizando los datos originales."
    },
    {
        id: 'u5q14',
        unit: 5,
        questionText: "Al trazar una alineación recta entre dos puntos A y B muy alejados usando un taquímetro, ¿cómo se marcan los puntos intermedios?",
        options: [
            "Midiendo ángulos desde A y B simultáneamente.",
            "Estacionando en A, colimando a B, y basculando el anteojo para indicar posiciones intermedias.",
            "Calculando coordenadas polares desde un punto exterior.",
            "Proyectando un láser desde A hasta B."
        ],
        correctAnswerIndex: 1,
        explanation: "Se estaciona el taquímetro en un extremo (A), se visa al otro extremo (B) fijando la dirección horizontal, y luego se bascula el anteojo verticalmente para indicar al ayudante con un jalón dónde situarse en la línea."
    },
    {
        id: 'u5q15',
        unit: 5,
        questionText: "Para usar el método 3-4-5, si se mide 6m en un cateto, ¿cuánto deben medir el otro cateto y la hipotenusa para formar un ángulo recto?",
        options: [
            "Cateto 8m, Hipo. 12m",
            "Cateto 8m, Hipo. 10m",
            "Cateto 7m, Hipo. 9m",
            "Cateto 9m, Hipo. 12m"
        ],
        correctAnswerIndex: 1,
        explanation: "El método 3-4-5 utiliza múltiplos de estos números. Si un cateto es 6m (3x2), el otro debe ser 8m (4x2) y la hipotenusa 10m (5x2)."
    },
    {
        id: 'u5q16',
        unit: 5,
        questionText: "El 'PI' en el replanteo de curvas circulares simples es el:",
        options: [
            "Punto Inicial de la obra.",
            "Punto de Inflexión.",
            "Punto de Intersección de las tangentes.",
            "Perímetro Interior."
        ],
        correctAnswerIndex: 2,
        explanation: "PI es la abreviatura de Punto de Intersección, que es el vértice donde se cortarían las dos alineaciones rectas (tangentes) si no existiera la curva."
    },
    {
        id: 'u5q17',
        unit: 5,
        questionText: "La longitud de una curva circular simple (LC) se calcula con la fórmula:",
        options: [
            "LC = π * R * α(grados) / 360°",
            "LC = 2 * π * R",
            "LC = π * R * α(grados) / 180°",
            "LC = R * α(radianes)"
        ],
        correctAnswerIndex: 2,
        explanation: "La longitud del arco de una curva circular simple (LC) se calcula como LC = (π * R * α_grados) / 180°, o lo que es lo mismo, LC = R * α_radianes."
    },
    {
        id: 'u5q18',
        unit: 5,
        questionText: "El trazado continuo de un arco de circunferencia, fijando un extremo de cuerda en el centro O, es práctico principalmente para:",
        options: [
            "Radios muy grandes y terrenos accidentados.",
            "Radios pequeños y terrenos despejados.",
            "Curvas compuestas únicamente.",
            "Todas las situaciones de replanteo de curvas."
        ],
        correctAnswerIndex: 1,
        explanation: "El trazado continuo de un arco localizando el centro y usando una cuerda de longitud R es más factible y preciso para radios pequeños y cuando el centro es accesible y el terreno está despejado."
    },
    {
        id: 'u5q19',
        unit: 5,
        questionText: "Al trazar una circunferencia a partir de 3 puntos (A, B, C), ¿qué se traza primero para encontrar el centro?",
        options: [
            "Tangentes en A, B y C.",
            "Las mediatrices de las cuerdas AB y BC.",
            "Radios desde un punto estimado.",
            "Una elipse que pase por los tres puntos."
        ],
        correctAnswerIndex: 1,
        explanation: "Para encontrar el centro de una circunferencia que pasa por tres puntos A, B y C, se forman dos cuerdas (por ejemplo, AB y BC) y se trazan sus respectivas mediatrices. La intersección de estas mediatrices es el centro de la circunferencia."
    },
    {
        id: 'u5q20',
        unit: 5,
        questionText: "La 'Cuerda Larga' (C) de una curva circular simple es la distancia recta entre:",
        options: [
            "PI y el punto medio del arco.",
            "PC y PT.",
            "El centro O y PC.",
            "Dos puntos cualesquiera de la curva."
        ],
        correctAnswerIndex: 1,
        explanation: "La Cuerda Larga (C) de una curva circular simple es la distancia en línea recta que une el Principio de Curva (PC) con el Principio de Tangente o Fin de Curva (PT)."
    },
    {
        id: 'u5q21',
        unit: 5,
        questionText: "El ángulo de deflexión (α o Delta) entre las tangentes de una curva circular simple es igual al ángulo...",
        options: [
            "Recto (90°).",
            "Central que subtiende el arco.",
            "Formado por la cuerda larga y una tangente.",
            "Mitad del ángulo inscrito."
        ],
        correctAnswerIndex: 1,
        explanation: "El ángulo de deflexión (α) formado por las dos tangentes es igual al ángulo central que subtiende el arco de la curva circular simple."
    },
    {
        id: 'u5q22',
        unit: 5,
        questionText: "La 'Externa' (E) de una curva circular simple es la distancia desde:",
        options: [
            "PC al centro O.",
            "PT al centro O.",
            "PI al punto medio del arco.",
            "El punto medio de la cuerda larga al PI."
        ],
        correctAnswerIndex: 2,
        explanation: "La Externa (E) es la distancia medida desde el Punto de Intersección de las tangentes (PI) hasta el punto medio del arco de la curva."
    },
    {
        id: 'u5q23',
        unit: 5,
        questionText: "La 'Flecha' (F) de una curva circular simple es la distancia desde:",
        options: [
            "El centro O al PI.",
            "PC al PT medida sobre la tangente.",
            "El punto medio de la cuerda larga al punto medio del arco.",
            "PI a la tangente."
        ],
        correctAnswerIndex: 2,
        explanation: "La Flecha (F) es la distancia perpendicular desde el punto medio de la cuerda larga hasta el punto medio del arco de la curva."
    },
    {
        id: 'u5q24',
        unit: 5,
        questionText: "En el replanteo de curvas, si los puntos del arco se sitúan muy separados, la unión con rectas cortas puede:",
        options: [
            "Mejorar la precisión de la curva.",
            "No representar adecuadamente la curvatura deseada.",
            "Ser el método más rápido y exacto.",
            "Facilitar el cálculo del radio."
        ],
        correctAnswerIndex: 1,
        explanation: "Si los puntos replanteados sobre el arco están demasiado separados, la unión de estos mediante segmentos rectos no representará fielmente la curvatura suave del arco diseñado."
    },
    {
        id: 'u5q25',
        unit: 5,
        questionText: "Para trazar una perpendicular en un punto P de una alineación AB usando el método 3-4-5, si se mide 4m desde P a un punto M sobre AB, ¿qué distancias se usan para encontrar el tercer vértice N?",
        options: [
            "3m desde M y 5m desde P.",
            "5m desde M y 3m desde P.",
            "4m desde M y 5m desde P.",
            "3m desde M y 4m desde P."
        ],
        correctAnswerIndex: 1,
        explanation: "Si PM es el cateto de 4m, se mide una distancia de 3m con una cinta desde P (futuro cateto) y una distancia de 5m con otra cinta desde M (futura hipotenusa). El punto N donde se cruzan estas dos medidas forma el triángulo rectángulo PMN, siendo PN perpendicular a AB."
    },
    {
        id: 'u5q26',
        unit: 5,
        questionText: "Al trazar una paralela a una alineación AB por un punto P exterior usando un taquímetro, se mide un ángulo α entre A'P y AB (A' en AB). Luego, desde P, se traza un ángulo β igual a:",
        options: [
            "α",
            "90° - α",
            "180° - α",
            "α / 2"
        ],
        correctAnswerIndex: 2,
        explanation: "Para trazar una paralela, si α es el ángulo entre A'P y la alineación AB, al estacionar en P y visar a A', se debe trazar un ángulo β = 180° - α para obtener la dirección paralela."
    },
    {
        id: 'u5q27',
        unit: 5,
        questionText: "El replanteo de una curva circular simple comienza usualmente por calcular y marcar en terreno los puntos:",
        options: [
            "El centro O y el PI.",
            "PC y PT.",
            "Solo el punto medio del arco.",
            "Varios puntos aleatorios sobre las tangentes."
        ],
        correctAnswerIndex: 1,
        explanation: "Los primeros puntos que se calculan y se marcan en el terreno para una curva circular simple son el Principio de Curva (PC) y el Principio de Tangente (PT), midiendo la longitud de la tangente (T) desde el PI."
    },
    {
        id: 'u5q28',
        unit: 5,
        questionText: "Una 'curva compuesta' en trazados está formada por:",
        options: [
            "Un solo arco de radio variable.",
            "Dos o más arcos de radios diferentes, tangentes entre sí.",
            "Un arco y una recta tangente.",
            "Una espiral de transición únicamente."
        ],
        correctAnswerIndex: 1,
        explanation: "Una curva compuesta es aquella que está formada por la sucesión de dos o más arcos de circunferencia de radios diferentes, siendo tangentes entre sí en los puntos de unión."
    },
    {
        id: 'u5q29',
        unit: 5,
        questionText: "Una 'curva inversa' se caracteriza porque los dos arcos que la forman:",
        options: [
            "Tienen el mismo radio y el mismo centro.",
            "Son tangentes en un punto común pero sus centros están a lados opuestos de la tangente común.",
            "No son tangentes entre sí.",
            "Forman un ángulo agudo en su unión."
        ],
        correctAnswerIndex: 1,
        explanation: "Una curva inversa consta de dos arcos de circunferencia que son tangentes en un punto común, pero sus centros de curvatura se encuentran en lados opuestos respecto a la tangente común en dicho punto, haciendo que la curvatura cambie de sentido."
    },
    {
        id: 'u5q30',
        unit: 5,
        questionText: "¿Qué es una 'bisectriz' en geometría?",
        options: [
            "Una recta que corta a otra perpendicularmente.",
            "Una línea que divide un ángulo en dos ángulos iguales.",
            "El radio de una circunferencia inscrita.",
            "La cuerda más larga de un círculo."
        ],
        correctAnswerIndex: 1,
        explanation: "La bisectriz de un ángulo es la semirrecta que, partiendo del vértice del ángulo, lo divide en dos ángulos de igual medida."
    },
    {
        id: 'u5q31',
        unit: 5,
        questionText: "Si al replantear los cruces de ejes de un proyecto, se utiliza el método 3-4-5, se está asegurando la ________ de las esquinas.",
        options: [
            "Alineación",
            "Perpendicularidad (ortogonalidad)",
            "Paralelismo",
            "Curvatura"
        ],
        correctAnswerIndex: 1,
        explanation: "El método 3-4-5 se utiliza para trazar o comprobar ángulos rectos (90°), por lo que asegura la perpendicularidad u ortogonalidad de las esquinas o cruces de ejes."
    },
    {
        id: 'u5q32',
        unit: 5,
        questionText: "El uso de un cordel de albañil tensado entre estacas es un método común para materializar:",
        options: [
            "Curvas de nivel.",
            "Alineaciones rectas.",
            "Puntos de alta precisión.",
            "Ángulos verticales."
        ],
        correctAnswerIndex: 1,
        explanation: "Tensar un cordel de albañil (o hilo de marcar) entre dos estacas que definen los extremos de un segmento es una forma sencilla y habitual de materializar una alineación recta en el terreno."
    },
    {
        id: 'u5q33',
        unit: 5,
        questionText: "Al usar un tiralíneas, ¿qué material deja la marca sobre la superficie?",
        options: [
            "Tinta líquida.",
            "Pintura en spray.",
            "Polvo de tiza.",
            "Grafito."
        ],
        correctAnswerIndex: 2,
        explanation: "El tiralíneas contiene un depósito con polvo de tiza (generalmente de color azul o rojo). La cuerda se impregna de este polvo y, al tensarla y soltarla contra una superficie, deja una marca de tiza."
    },
    {
        id: 'u5q34',
        unit: 5,
        questionText: "El replanteo de una circunferencia conociendo su centro y radio es una operación:",
        options: [
            "Que requiere siempre 3 puntos conocidos adicionales.",
            "Directa, trazando el arco con una cuerda o cinta de longitud igual al radio desde el centro.",
            "Imposible sin un taquímetro.",
            "Que solo se puede hacer por coordenadas polares."
        ],
        correctAnswerIndex: 1,
        explanation: "Si se conoce el centro (O) y el radio (R) de una circunferencia, su replanteo es directo. Se materializa el centro O, y desde él, con una cuerda o cinta métrica de longitud R, se marcan puntos del perímetro o se traza el arco."
    },
    {
        id: 'u5q35',
        unit: 5,
        questionText: "La fórmula T = R * tan(α/2) para una curva circular simple, ¿qué elemento calcula?",
        options: [
            "La Longitud de la Curva (LC)",
            "La Cuerda Larga (C)",
            "La Tangente (T)",
            "La Externa (E)"
        ],
        correctAnswerIndex: 2,
        explanation: "Esta fórmula, T = R * tan(α/2), se utiliza para calcular la longitud de la Tangente (T) de una curva circular simple, donde R es el radio y α es el ángulo de deflexión."
    },
    {
        id: 'u5q36',
        unit: 5,
        questionText: "Un inconveniente del trazado continuo de arcos de radio grande localizando el centro es:",
        options: [
            "Su alta precisión inherente.",
            "La dificultad de localizar el centro si es inaccesible y la posible acumulación de errores.",
            "La rapidez del método.",
            "Que no requiere cálculos previos."
        ],
        correctAnswerIndex: 1,
        explanation: "Para arcos de radio grande, localizar el centro puede ser difícil o impracticable si cae fuera del terreno accesible. Además, cualquier error en la localización del centro o en el mantenimiento del radio durante el trazado puede acumularse."
    },
    {
        id: 'u5q37',
        unit: 5,
        questionText: "El replanteo de puntos se realiza siempre de forma:",
        options: [
            "Aproximada y luego se ajusta.",
            "Colectiva, marcando varios puntos a la vez.",
            "Individual, punto a punto.",
            "Virtual, sin marcar en terreno."
        ],
        correctAnswerIndex: 2,
        explanation: "El replanteo se realiza materializando cada punto de forma individual y secuencial, según los datos del proyecto."
    },
    {
        id: 'u5q38',
        unit: 5,
        questionText: "Para trazar una perpendicular en el extremo de una alineación usando el método 3-4-5, el punto donde se forma el ángulo recto es:",
        options: [
            "El punto a 3 unidades.",
            "El punto a 4 unidades.",
            "El punto a 5 unidades.",
            "El vértice común de los catetos de 3 y 4 unidades."
        ],
        correctAnswerIndex: 3,
        explanation: "En el método 3-4-5, el ángulo recto se forma en el vértice donde concurren los dos catetos (el de 3 unidades y el de 4 unidades)."
    },
    {
        id: 'u5q39',
        unit: 5,
        questionText: "Si se replantea una curva por el método de abscisas y ordenadas desde la tangente, se miden distancias:",
        options: [
            "Radiales desde el centro de la curva.",
            "A lo largo de la tangente (abscisas) y perpendiculares a ella hasta la curva (ordenadas).",
            "Angulares desde el PC.",
            "Siguiendo la cuerda larga."
        ],
        correctAnswerIndex: 1,
        explanation: "Este método consiste en tomar la tangente como eje de abscisas, medir distancias a lo largo de ella, y desde esos puntos, medir distancias perpendiculares (ordenadas) hasta alcanzar los puntos de la curva."
    },
    {
        id: 'u5q40',
        unit: 5,
        questionText: "El radio (R) de una circunferencia es la distancia desde el centro (O) a:",
        options: [
            "Cualquier punto exterior a la circunferencia.",
            "Cualquier punto de la circunferencia.",
            "El punto medio de cualquier cuerda.",
            "El punto de tangencia de una recta."
        ],
        correctAnswerIndex: 1,
        explanation: "El radio de una circunferencia es la distancia constante desde su centro hasta cualquier punto que pertenezca a la propia circunferencia."
    },
    {
        id: 'u5q41',
        unit: 5,
        questionText: "Al usar un taquímetro para trazar una perpendicular desde un punto P exterior a una alineación AB, ¿es necesario estacionar el equipo en P?",
        options: [
            "No, solo se estaciona en un punto de AB.",
            "Sí, se debe estacionar en P y también en un punto de AB.",
            "Sí, se estaciona en P para trazar el ángulo complementario o calculado.",
            "No, se usan solo cintas métricas."
        ],
        correctAnswerIndex: 2,
        explanation: "Un método implica estacionar en un punto C de AB, medir el ángulo α con P. Luego se estaciona en P, se visa a C y se traza el ángulo β = 90° - α para obtener la perpendicular. Por tanto, se estaciona en ambos."
    },
    {
        id: 'u5q42',
        unit: 5,
        questionText: "La longitud de la 'Cuerda Larga' (C) de una curva circular simple se calcula como:",
        options: [
            "C = 2R * tan(α/2)",
            "C = R * α (en radianes)",
            "C = 2R * sin(α/2)",
            "C = R * (1 - cos(α/2))"
        ],
        correctAnswerIndex: 2,
        explanation: "La Cuerda Larga (C) se calcula mediante la fórmula C = 2R * sin(α/2), donde R es el radio y α es el ángulo central (o de deflexión)."
    },
    {
        id: 'u5q43',
        unit: 5,
        questionText: "El punto 'PT' en una curva circular simple significa:",
        options: [
            "Punto Tangente cualquiera.",
            "Principio de Transición.",
            "Punto de Terminación o Fin de Curva (Principio de Tangente).",
            "Punto Trigonométrico."
        ],
        correctAnswerIndex: 2,
        explanation: "PT significa Principio de Tangente, indicando el punto donde la curva termina y comienza la siguiente alineación recta (tangente)."
    },
    {
        id: 'u5q44',
        unit: 5,
        questionText: "Para que la aproximación de unir puntos de un arco con rectas cortas sea buena, el ángulo central subtendido por cada cuerda debe ser:",
        options: [
            "Mayor a 30°",
            "Menor a 6°",
            "Exactamente 15°",
            "Cualquier valor es aceptable."
        ],
        correctAnswerIndex: 1,
        explanation: "Para que la cuerda entre dos puntos de un arco sea una buena aproximación del arco mismo, el ángulo central que subtienden esos dos puntos debe ser pequeño, generalmente menor a 6°."
    },
    {
        id: 'u5q45',
        unit: 5,
        questionText: "Si se conocen tres puntos no alineados A, B y C, ¿cuántas circunferencias únicas pasan por ellos?",
        options: [
            "Ninguna",
            "Una",
            "Dos",
            "Infinitas"
        ],
        correctAnswerIndex: 1,
        explanation: "Por tres puntos no alineados pasa una única circunferencia."
    },
    {
        id: 'u5q46',
        unit: 5,
        questionText: "La 'Externa' (E) de una curva circular simple se calcula como:",
        options: [
            "E = R * (1 - cos(α/2))",
            "E = R * (sec(α/2) - 1)  ó  R * (1/cos(α/2) - 1)",
            "E = R * sin(α/2)",
            "E = T / sin(α/2)"
        ],
        correctAnswerIndex: 1,
        explanation: "La Externa (E) se calcula con la fórmula E = R * (sec(α/2) - 1) o, lo que es lo mismo, E = R * (1/cos(α/2) - 1)."
    },
    {
        id: 'u5q47',
        unit: 5,
        questionText: "La 'Flecha' (F) de una curva circular simple se calcula como:",
        options: [
            "F = R * (1 - cos(α/2))",
            "F = R * tan(α/2)",
            "F = T - R",
            "F = C / 2"
        ],
        correctAnswerIndex: 0,
        explanation: "La Flecha (F) se calcula mediante la fórmula F = R * (1 - cos(α/2))."
    },
    {
        id: 'u5q48',
        unit: 5,
        questionText: "El procedimiento de ubicar primero los cruces de ejes del proyecto y a partir de ahí emplazar los demás es típico del:",
        options: [
            "Trazado de curvas compuestas.",
            "Replanteo y reposición de puntos para una edificación.",
            "Cálculo de volúmenes de tierra.",
            "Levantamiento topográfico inicial."
        ],
        correctAnswerIndex: 1,
        explanation: "Un procedimiento típico en el replanteo de edificaciones es ubicar primero los cruces de los ejes principales del proyecto, y desde estos, replantear el resto de los elementos."
    },
    {
        id: 'u5q49',
        unit: 5,
        questionText: "Al tensar la cuerda de un tiralíneas entre dos puntos y soltarla, ¿qué acción física produce la marca?",
        options: [
            "La fricción de la cuerda.",
            "El calor generado por la tensión.",
            "El golpe de la cuerda impregnada de tiza contra la superficie.",
            "Una reacción química del polvo de tiza."
        ],
        correctAnswerIndex: 2,
        explanation: "La marca se produce porque la cuerda, impregnada de polvo de tiza, golpea la superficie al ser soltada bruscamente después de tensarla, depositando así la tiza."
    },
    {
        id: 'u5q50',
        unit: 5,
        questionText: "Si se usa el método 3-4-5 con unidades en centímetros, ¿qué longitudes se usarían?",
        options: [
            "30cm, 40cm, 50cm",
            "0.3cm, 0.4cm, 0.5cm",
            "3cm, 40cm, 500cm",
            "Cualquier combinación que sume 12."
        ],
        correctAnswerIndex: 0,
        explanation: "Se pueden usar múltiplos de 3, 4 y 5. Si la unidad base es el centímetro, se usarían 30cm, 40cm y 50cm (o 3cm, 4cm, 5cm, etc., pero 30-40-50 es más práctico para trazados)."
    },
    {
        id: 'u5q51',
        unit: 5,
        questionText: "El radio de una curva es de 20m y el ángulo de deflexión es 60°. ¿Cuál es la longitud de la tangente (T)? (tan(30°) ≈ 0.577)",
        options: [
            "10.00 m",
            "11.54 m",
            "17.32 m",
            "20.00 m"
        ],
        correctAnswerIndex: 1,
        explanation: "T = R * tan(α/2) = 20m * tan(60°/2) = 20m * tan(30°) ≈ 20m * 0.577 ≈ 11.54 m."
    },
    {
        id: 'u5q52',
        unit: 5,
        questionText: "En el replanteo de curvas, ¿qué significa que los puntos deben estar 'suficientemente cerca'?",
        options: [
            "A menos de 1 metro de distancia.",
            "Que el ángulo central entre ellos sea pequeño (ej. < 6°) para que la cuerda aproxime bien el arco.",
            "Que se puedan ver todos desde el PI.",
            "Que el radio sea menor a 10 metros."
        ],
        correctAnswerIndex: 1,
        explanation: "Que los puntos estén 'suficientemente cerca' significa que la cuerda que los une sea una buena aproximación del arco. Esto se logra si el ángulo central que subtienden es pequeño (generalmente se recomienda < 6°)."
    },
    {
        id: 'u5q53',
        unit: 5,
        questionText: "El centro de una circunferencia es equidistante de:",
        options: [
            "Solo dos puntos de la circunferencia.",
            "Todos los puntos de la circunferencia.",
            "Solo los puntos de las tangentes.",
            "El punto de intersección de las tangentes."
        ],
        correctAnswerIndex: 1,
        explanation: "Por definición, el centro de una circunferencia equidista (está a la misma distancia, el radio) de todos los puntos que forman parte de dicha circunferencia."
    },
    {
        id: 'u5q54',
        unit: 5,
        questionText: "Si una alineación recta pasa por los puntos (0,0) y (4,0), una perpendicular a esta alineación en (0,0) podría ser la recta que pasa por (0,0) y:",
        options: [
            "(0,3)",
            "(3,0)",
            "(4,4)",
            "(-4,0)"
        ],
        correctAnswerIndex: 0,
        explanation: "La alineación dada es el eje X. Una perpendicular en el origen (0,0) sería el eje Y, por lo que cualquier punto sobre el eje Y, como (0,3), define una perpendicular."
    },
    {
        id: 'u5q55',
        unit: 5,
        questionText: "Al trazar una paralela a una distancia 'd', las perpendiculares levantadas desde la alineación original deben tener una longitud de:",
        options: [
            "d/2",
            "d",
            "2d",
            "Indefinida"
        ],
        correctAnswerIndex: 1,
        explanation: "Para trazar una paralela a una distancia 'd', las perpendiculares que se levantan desde la línea original deben medir exactamente esa distancia 'd'."
    },
    {
        id: 'u5q56',
        unit: 5,
        questionText: "El ángulo α (Delta) en una curva circular simple se mide entre:",
        options: [
            "El PC y el PT.",
            "Las dos tangentes que se cortan en el PI.",
            "El radio y la cuerda larga.",
            "La tangente y la cuerda larga."
        ],
        correctAnswerIndex: 1,
        explanation: "El ángulo de deflexión α (Delta) es el ángulo formado por la prolongación de una de las tangentes y la siguiente tangente, en el Punto de Intersección (PI)."
    },
    {
        id: 'u5q57',
        unit: 5,
        questionText: "Si el radio de una curva es muy grande, el método de trazado continuo localizando el centro O puede ser:",
        options: [
            "El más preciso y rápido.",
            "Impráctico o imposible si el centro es inaccesible.",
            "Recomendado por su sencillez.",
            "El único método válido."
        ],
        correctAnswerIndex: 1,
        explanation: "Para radios muy grandes, el centro O puede caer muy lejos o en un lugar inaccesible, haciendo que el método de trazado continuo desde el centro sea impracticable."
    },
    {
        id: 'u5q58',
        unit: 5,
        questionText: "La mediatriz de un segmento es una recta que es ________ al segmento y pasa por su ________.",
        options: [
            "paralela / extremo",
            "perpendicular / punto medio",
            "oblicua / vértice",
            "tangente / centro"
        ],
        correctAnswerIndex: 1,
        explanation: "La mediatriz de un segmento es la recta perpendicular a dicho segmento que pasa por su punto medio."
    },
    {
        id: 'u5q59',
        unit: 5,
        questionText: "El replanteo de los ejes de un edificio es un paso crucial ANTES de replantear:",
        options: [
            "Las curvas de nivel del terreno.",
            "Los elementos individuales como pilares o muros.",
            "El perímetro del solar.",
            "Las bases de replanteo externas."
        ],
        correctAnswerIndex: 1,
        explanation: "Una vez replanteados los ejes principales del edificio, estos sirven como referencia para ubicar y replantear los elementos constructivos individuales (pilares, muros, etc.) que se apoyan o relacionan con dichos ejes."
    },
    {
        id: 'u5q60',
        unit: 5,
        questionText: "Si se utiliza un taquímetro para el replanteo de puntos de una curva, ¿qué datos se suelen calcular para cada punto a replantear desde el PC (o una estación conocida)?",
        options: [
            "Solo la distancia al PI.",
            "Coordenadas cartesianas (X,Y) relativas al PC.",
            "Un ángulo de deflexión y una distancia (coordenadas polares).",
            "La cota del punto únicamente."
        ],
        correctAnswerIndex: 2,
        explanation: "Para replantear puntos de una curva con taquímetro desde el PC (o una estación en la tangente), se calculan para cada punto un ángulo de deflexión respecto a la tangente y una distancia (la cuerda desde el PC al punto, o la distancia radial si se estaciona en el centro)."
    }
];
