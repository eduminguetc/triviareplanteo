// unit4_questions.js
export const unit4Questions = [
    {
        id: 'u4q1',
        unit: 4,
        questionText: "¿Qué es el 'relleno altimétrico' en topografía?",
        options: [
            "Añadir tierra a una excavación.",
            "La toma de datos de campo para representar gráficamente el relieve del terreno.",
            "El proceso de dibujar curvas de nivel maestras.",
            "Un tipo de error en la nivelación."
        ],
        correctAnswerIndex: 1,
        explanation: "El relleno altimétrico es el conjunto de operaciones y toma de datos en campo necesarios para poder representar gráficamente el relieve del terreno, es decir, su altimetría."
    },
    {
        id: 'u4q2',
        unit: 4,
        questionText: "Una 'curva de nivel' es una línea en un plano que une puntos de:",
        options: [
            "Igual pendiente.",
            "Igual distancia al origen.",
            "Igual cota o altitud.",
            "Igual coordenada X."
        ],
        correctAnswerIndex: 2,
        explanation: "Una curva de nivel es una línea que se traza en un plano y que une todos los puntos del terreno que tienen la misma cota o altitud respecto a un plano de comparación."
    },
    {
        id: 'u4q3',
        unit: 4,
        questionText: "¿Qué es la 'equidistancia' entre curvas de nivel?",
        options: [
            "La distancia horizontal entre dos curvas consecutivas.",
            "El grosor con el que se dibujan las curvas.",
            "La diferencia de cota constante entre dos curvas de nivel consecutivas.",
            "El número total de curvas en un plano."
        ],
        correctAnswerIndex: 2,
        explanation: "La equidistancia es la diferencia de cota (altura) que existe, de forma constante, entre dos curvas de nivel consecutivas en un plano topográfico."
    },
    {
        id: 'u4q4',
        unit: 4,
        questionText: "Las 'curvas maestras' en un plano topográfico suelen representar:",
        options: [
            "Solo los puntos más bajos del terreno.",
            "Alturas características (cada 50m, 100m, etc.) y a menudo son más gruesas.",
            "Las líneas de máxima pendiente.",
            "Los límites de las parcelas."
        ],
        correctAnswerIndex: 1,
        explanation: "Las curvas maestras son curvas de nivel que representan alturas significativas o redondeadas (por ejemplo, cada 50 o 100 metros de cota) y suelen dibujarse con un trazo más grueso para facilitar la lectura del relieve."
    },
    {
        id: 'u4q5',
        unit: 4,
        questionText: "Las 'líneas de rotura' del terreno, importantes para trazar curvas de nivel, definen:",
        options: [
            "Zonas donde el terreno es inestable.",
            "Los límites de propiedad.",
            "El relieve (vaguadas, divisorias, cambios de pendiente).",
            "Áreas con el mismo tipo de vegetación."
        ],
        correctAnswerIndex: 2,
        explanation: "Las líneas de rotura son aquellas que definen la forma del relieve, como las vaguadas (líneas de recogida de aguas), las divisorias (líneas de separación de aguas) o los cambios bruscos de pendiente."
    },
    {
        id: 'u4q6',
        unit: 4,
        questionText: "¿Cuál es el método altimétrico considerado el más preciso y usado?",
        options: [
            "Nivelación Barométrica",
            "Nivelación Trigonométrica (por Pendientes)",
            "Nivelación Geométrica (por Alturas)",
            "Estimación visual con GPS"
        ],
        correctAnswerIndex: 2,
        explanation: "La Nivelación Geométrica, también llamada por alturas, que utiliza un nivel topográfico y una mira, es generalmente el método más preciso y el más utilizado para determinar desniveles."
    },
    {
        id: 'u4q7',
        unit: 4,
        questionText: "La nivelación trigonométrica utiliza un taquímetro/estación total y una mira/prisma para determinar desniveles basándose en:",
        options: [
            "Lecturas de presión atmosférica.",
            "Visuales estrictamente horizontales.",
            "Medición de ángulos verticales y distancias (visual inclinada).",
            "El principio de vasos comunicantes."
        ],
        correctAnswerIndex: 2,
        explanation: "La Nivelación Trigonométrica calcula los desniveles a partir de la medición de ángulos verticales y distancias (generalmente la distancia inclinada y la altura del instrumento/prisma), lo que implica una visual inclinada."
    },
    {
        id: 'u4q8',
        unit: 4,
        questionText: "En la nivelación geométrica simple por el 'método del punto medio', ¿dónde se estaciona el nivel?",
        options: [
            "Sobre el punto A (Espaldas).",
            "Sobre el punto B (Frente).",
            "Equidistante a los dos puntos a nivelar (A y B).",
            "En el punto más alto del terreno."
        ],
        correctAnswerIndex: 2,
        explanation: "En el método del punto medio de la nivelación geométrica, el nivel se estaciona en un punto aproximadamente equidistante a los dos puntos entre los cuales se quiere determinar el desnivel, para minimizar ciertos errores."
    },
    {
        id: 'u4q9',
        unit: 4,
        questionText: "En nivelación geométrica, si la lectura de espaldas (LA) es 1.500m y la lectura de frente (LB) es 1.200m, el desnivel ΔZAB (de B respecto a A) es:",
        options: [
            "0.300 m (B más alto)",
            "-0.300 m (B más bajo)",
            "2.700 m",
            "No se puede calcular con estos datos."
        ],
        correctAnswerIndex: 0,
        explanation: "El desnivel de B respecto a A (ΔZAB) se calcula como Lectura de Espaldas (LA) - Lectura de Frente (LB). En este caso, 1.500m - 1.200m = 0.300m. Un resultado positivo indica que B está más alto que A."
    },
    {
        id: 'u4q10',
        unit: 4,
        questionText: "Un 'itinerario altimétrico cerrado' es aquel que:",
        options: [
            "Solo mide alturas en un área circular.",
            "Empieza y termina en puntos distintos de cotas desconocidas.",
            "Empieza y termina en el mismo punto de cota conocida (o por conocer).",
            "No permite la compensación de errores."
        ],
        correctAnswerIndex: 2,
        explanation: "Un itinerario altimétrico cerrado es una nivelación compuesta que comienza y finaliza en el mismo punto, el cual puede tener una cota conocida o ser un punto cuya cota se quiere determinar y verificar."
    },
    {
        id: 'u4q11',
        unit: 4,
        questionText: "El 'error de cierre altimétrico' en un itinerario encuadrado se calcula como:",
        options: [
            "La suma de todas las lecturas de frente.",
            "La diferencia entre la cota inicial y final conocidas.",
            "ΣΔZ(Campo) - (Zfinal Conocida - Zinicial Conocida).",
            "El promedio de todos los desniveles medidos."
        ],
        correctAnswerIndex: 2,
        explanation: "El error de cierre altimétrico (Ez) en un itinerario encuadrado (entre dos puntos de cotas conocidas) es la suma de los desniveles medidos en campo menos la diferencia entre la cota conocida del punto final y la cota conocida del punto inicial."
    },
    {
        id: 'u4q12',
        unit: 4,
        questionText: "Si el error de cierre altimétrico es menor que la tolerancia admitida, ¿qué se hace con dicho error?",
        options: [
            "Se ignora completamente.",
            "Se repite todo el itinerario.",
            "Se reparte (compensa) entre los tramos del itinerario.",
            "Se suma íntegramente a la cota del último punto."
        ],
        correctAnswerIndex: 2,
        explanation: "Si el error de cierre altimétrico está dentro de la tolerancia permitida, se considera admisible y se procede a compensarlo, es decir, a repartirlo proporcionalmente entre los desniveles de los diferentes tramos del itinerario."
    },
    {
        id: 'u4q13',
        unit: 4,
        questionText: "Un 'perfil longitudinal' del terreno representa:",
        options: [
            "Una vista en planta del terreno.",
            "Una sección vertical del terreno a lo largo de una alineación principal.",
            "Varias secciones transversales juntas.",
            "Las curvas de nivel únicamente."
        ],
        correctAnswerIndex: 1,
        explanation: "Un perfil longitudinal es la representación gráfica de una sección vertical del terreno obtenida a lo largo de una alineación principal o eje del proyecto (por ejemplo, el eje de una carretera)."
    },
    {
        id: 'u4q14',
        unit: 4,
        questionText: "En el dibujo de un perfil longitudinal, es común usar diferentes escalas para la horizontal y la vertical. ¿Cuál es el propósito de esto?",
        options: [
            "Ahorrar espacio en el papel.",
            "Facilitar la medición de ángulos.",
            "Realzar o exagerar el relieve para una mejor visualización de las pendientes.",
            "Cumplir con normativas internacionales de dibujo."
        ],
        correctAnswerIndex: 2,
        explanation: "Al dibujar perfiles longitudinales, se suelen utilizar escalas diferentes para el eje horizontal y el vertical (típicamente la vertical es mayor, ej., H:1000, V:100). Esto se hace para realzar las diferencias de relieve y apreciar mejor las pendientes."
    },
    {
        id: 'u4q15',
        unit: 4,
        questionText: "La 'rasante' en un perfil longitudinal define:",
        options: [
            "El perfil original del terreno natural.",
            "La línea que une los puntos más altos del terreno.",
            "La línea que define la posición espacial final del proyecto (ej. superficie de una carretera).",
            "El plano de comparación utilizado para las cotas."
        ],
        correctAnswerIndex: 2,
        explanation: "La rasante es la línea que, sobre el perfil longitudinal, define la altura y forma final de la obra proyectada, como la superficie de rodadura de una carretera o el nivel de una explanada."
    },
    {
        id: 'u4q16',
        unit: 4,
        questionText: "La 'cota roja' en un punto de un perfil se calcula como:",
        options: [
            "Cota Terreno + Cota Rasante",
            "Cota Terreno / Cota Rasante",
            "Cota Terreno - Cota Rasante",
            "Cota Rasante - Cota Terreno"
        ],
        correctAnswerIndex: 2,
        explanation: "La cota roja en un punto determinado del perfil es la diferencia entre la cota del terreno natural y la cota de la rasante proyectada en ese mismo punto (Cota Roja = Cota Terreno - Cota Rasante)."
    },
    {
        id: 'u4q17',
        unit: 4,
        questionText: "Si la cota roja en un punto es positiva (+), indica que en ese punto hay:",
        options: [
            "Terraplén (falta de terreno).",
            "Desmonte (exceso de terreno).",
            "Equilibrio exacto entre terreno y rasante.",
            "Un error en el cálculo."
        ],
        correctAnswerIndex: 1,
        explanation: "Una cota roja positiva significa que la cota del terreno es mayor que la cota de la rasante, por lo que hay un exceso de terreno que se debe excavar (desmonte)."
    },
    {
        id: 'u4q18',
        unit: 4,
        questionText: "Un 'perfil transversal' es una sección vertical del terreno trazada:",
        options: [
            "Paralela al eje longitudinal.",
            "Perpendicular al eje longitudinal en un punto específico de este.",
            "Siguiendo una curva de nivel.",
            "Conectando los puntos más bajos del terreno."
        ],
        correctAnswerIndex: 1,
        explanation: "Un perfil transversal es una representación de la sección vertical del terreno tomada perpendicularmente al eje longitudinal del proyecto en un punto kilométrico (PK) o estaquillado específico."
    },
    {
        id: 'u4q19',
        unit: 4,
        questionText: "La operación de superponer la 'sección tipo' (forma final de la obra) sobre el perfil transversal del terreno se llama:",
        options: [
            "Nivelación",
            "Rasanteo",
            "Cajeado",
            "Equidistanciado"
        ],
        correctAnswerIndex: 2,
        explanation: "El cajeado es la operación que consiste en dibujar o superponer la sección tipo de la obra (la forma que tendrá la carretera, canal, etc., en ese punto) sobre el perfil transversal del terreno natural."
    },
    {
        id: 'u4q20',
        unit: 4,
        questionText: "El cálculo del volumen de movimiento de tierras entre dos secciones transversales (S1, S2) separadas una distancia (d) se basa comúnmente en la fórmula del:",
        options: [
            "Cilindro",
            "Cono truncado",
            "Prismoide (o sección media)",
            "Cubo"
        ],
        correctAnswerIndex: 2,
        explanation: "Para calcular el volumen de tierras entre dos secciones transversales, se utiliza frecuentemente la fórmula del prismoide, o su aproximación por el método de la sección media: V = ((S1 + S2) / 2) * d."
    },
    {
        id: 'u4q21',
        unit: 4,
        questionText: "Los 'Bancos de Nivel' (BN) son puntos de referencia altimétrica que deben ser:",
        options: [
            "Temporales y fáciles de mover.",
            "Fijos, firmes, duraderos y situados fuera de la zona de afección de la obra.",
            "Marcados únicamente con pintura.",
            "De cota desconocida inicialmente."
        ],
        correctAnswerIndex: 1,
        explanation: "Los Bancos de Nivel (BN) son puntos fijos y estables, materializados de forma duradera (ej. hitos de hormigón), con una cota muy precisa, situados fuera de la zona de trabajos para que sirvan de referencia altimétrica fiable durante toda la obra."
    },
    {
        id: 'u4q22',
        unit: 4,
        questionText: "En el control de rasantes por láser, ¿qué elemento indica si se está por encima, por debajo o a la cota del plano láser?",
        options: [
            "El emisor láser directamente.",
            "Un sensor óptico montado en la maquinaria o en un jalón.",
            "Una mira estadimétrica especial.",
            "Una brújula de precisión."
        ],
        correctAnswerIndex: 1,
        explanation: "En el control por láser, un emisor genera un plano de referencia. Sensores ópticos, instalados en la maquinaria de movimiento de tierras o en jalones portátiles, detectan este plano láser e indican al operario si está a la cota correcta, por encima o por debajo."
    },
    {
        id: 'u4q23',
        unit: 4,
        questionText: "El método de cuadrículas para el relleno altimétrico es más adecuado para:",
        options: [
            "Terrenos muy montañosos y con grandes desniveles.",
            "Terrenos llanos y obras pequeñas.",
            "Levantamientos de costas y fondos marinos.",
            "Trazado de túneles."
        ],
        correctAnswerIndex: 1,
        explanation: "El método de cuadrículas, donde se divide el área en una malla y se toma una cota representativa por cada celda, es especialmente útil para terrenos relativamente llanos y para obras de pequeña extensión."
    },
    {
        id: 'u4q24',
        unit: 4,
        questionText: "En la nivelación geométrica compuesta, el desnivel total se calcula como:",
        options: [
            "El promedio de todas las lecturas.",
            "La suma de las lecturas de espaldas menos la suma de las lecturas de frente.",
            "La diferencia entre la primera lectura de espaldas y la última de frente.",
            "El producto de todos los desniveles parciales."
        ],
        correctAnswerIndex: 1,
        explanation: "En una nivelación geométrica compuesta, el desnivel total entre el punto inicial y el final es igual a la sumatoria de todas las lecturas de espaldas menos la sumatoria de todas las lecturas de frente."
    },
    {
        id: 'u4q25',
        unit: 4,
        questionText: "La 'regla de nivelar' es un método altimétrico adecuado para:",
        options: [
            "Grandes distancias y alta precisión.",
            "Puntos muy cercanos, comúnmente en edificación.",
            "Terrenos con mucha vegetación.",
            "Determinar cotas absolutas referidas al nivel del mar."
        ],
        correctAnswerIndex: 1,
        explanation: "La regla de nivelar (o simplemente un nivel de burbuja sobre una regla) es un método sencillo para comprobar o trasladar niveles entre puntos muy cercanos, típico en trabajos de albañilería dentro de una edificación."
    },
    {
        id: 'u4q26',
        unit: 4,
        questionText: "Si en un itinerario altimétrico cerrado el error de cierre Ez = ΣΔZ(Campo), significa que:",
        options: [
            "El itinerario no tiene error.",
            "La cota inicial y final conocidas son diferentes.",
            "El error es igual a la suma de los desniveles medidos, ya que Zfinal Conocida = Zinicial Conocida.",
            "Se ha cometido un error grave en el cálculo."
        ],
        correctAnswerIndex: 2,
        explanation: "Para un itinerario cerrado, la cota conocida del punto final es la misma que la del punto inicial. Por lo tanto, la fórmula del error de cierre Ez = ΣΔZ(Campo) - (Zfinal - Zinicial) se simplifica a Ez = ΣΔZ(Campo), ya que (Zfinal - Zinicial) = 0."
    },
    {
        id: 'u4q27',
        unit: 4,
        questionText: "Al dibujar un perfil longitudinal, la 'guitarra' se refiere a:",
        options: [
            "Un instrumento musical usado para animar los trabajos.",
            "La forma curva que suele tener el perfil del terreno.",
            "Un conjunto de franjas ordenadas con información (cotas, distancias, PKs) bajo el plano de comparación.",
            "El software utilizado para dibujar el perfil."
        ],
        correctAnswerIndex: 2,
        explanation: "La 'guitarra' de un perfil longitudinal es el conjunto de casillas o franjas horizontales que se dibujan debajo del plano de comparación y que contienen información ordenada como cotas de terreno, cotas de rasante, cotas rojas, distancias al origen, PKs, etc."
    },
    {
        id: 'u4q28',
        unit: 4,
        questionText: "El criterio principal al establecer una rasante en un proyecto lineal es, idealmente:",
        options: [
            "Seguir exactamente el perfil del terreno natural.",
            "Maximizar el volumen de desmonte.",
            "Minimizar el movimiento de tierras, buscando compensar desmonte y terraplén.",
            "Crear la mayor pendiente posible."
        ],
        correctAnswerIndex: 2,
        explanation: "Al diseñar una rasante, un criterio fundamental es intentar minimizar el volumen total de movimiento de tierras, buscando si es posible una compensación entre los volúmenes de desmonte y los de terraplén para optimizar costes."
    },
    {
        id: 'u4q29',
        unit: 4,
        questionText: "Si la cota del terreno en un punto es 102.50m y la cota de la rasante es 103.00m, la cota roja es:",
        options: [
            "+0.50m (desmonte)",
            "-0.50m (terraplén)",
            "+1.00m (desmonte)",
            "-1.00m (terraplén)"
        ],
        correctAnswerIndex: 1,
        explanation: "Cota Roja = Cota Terreno - Cota Rasante = 102.50m - 103.00m = -0.50m. Un valor negativo indica que el terreno está por debajo de la rasante, por lo que se necesita rellenar (terraplén)."
    },
    {
        id: 'u4q30',
        unit: 4,
        questionText: "Las secciones transversales son útiles para determinar:",
        options: [
            "Solo la longitud total del proyecto.",
            "El ancho y superficie de ocupación, y calcular volúmenes de tierra.",
            "Únicamente las pendientes longitudinales.",
            "La ubicación de los Bancos de Nivel."
        ],
        correctAnswerIndex: 1,
        explanation: "Las secciones transversales, una vez realizado el cajeado con la sección tipo, permiten determinar el ancho de ocupación de la obra, las superficies de desmonte y terraplén en ese punto, y son la base para el cálculo de los volúmenes de movimiento de tierras."
    },
    {
        id: 'u4q31',
        unit: 4,
        questionText: "Para calcular el volumen de excavación de un solar con planta poligonal y paredes verticales, se necesita conocer las cotas de las esquinas y:",
        options: [
            "El tipo de maquinaria a utilizar.",
            "La pendiente media del solar.",
            "La cota de excavación deseada.",
            "La dirección del viento predominante."
        ],
        correctAnswerIndex: 2,
        explanation: "Para calcular el volumen de excavación de un solar, además de las cotas de sus esquinas (para definir la superficie en planta), es fundamental conocer la cota final a la que se va a excavar."
    },
    {
        id: 'u4q32',
        unit: 4,
        questionText: "Los puntos de referencia altimétrica auxiliares en obra se establecen para:",
        options: [
            "Reemplazar permanentemente a los Bancos de Nivel.",
            "Servir de apoyo a la red básica (BN) para comprobaciones continuas a pie de obra.",
            "Marcar únicamente los límites de la propiedad.",
            "Medir ángulos horizontales."
        ],
        correctAnswerIndex: 1,
        explanation: "Los puntos auxiliares de referencia altimétrica son menos permanentes que los BN y se establecen para facilitar las comprobaciones continuas de niveles a pie de obra, tomando su cota desde el BN más cercano."
    },
    {
        id: 'u4q33',
        unit: 4,
        questionText: "El plano de comparación en un perfil longitudinal es una línea base con cota:",
        options: [
            "Siempre igual a cero.",
            "Siempre superior a todas las cotas del perfil.",
            "Arbitraria, pero inferior a todas las cotas del perfil.",
            "Variable a lo largo del perfil."
        ],
        correctAnswerIndex: 2,
        explanation: "El plano de comparación para dibujar un perfil longitudinal es una línea horizontal de referencia con una cota arbitraria, elegida de forma que sea inferior a la cota más baja del terreno en el perfil, para que todo el dibujo quede por encima."
    },
    {
        id: 'u4q34',
        unit: 4,
        questionText: "¿Qué información NO suele incluirse en la 'guitarra' de un perfil longitudinal?",
        options: [
            "Cotas Terreno",
            "Cotas Rasante",
            "Distancias al Origen",
            "Tipo de suelo detallado"
        ],
        correctAnswerIndex: 3,
        explanation: "La 'guitarra' de un perfil incluye datos como cotas de terreno, cotas de rasante, cotas rojas, distancias al origen, PKs, alineaciones, etc. El tipo de suelo detallado es información geotécnica que no forma parte estándar de la guitarra."
    },
    {
        id: 'u4q35',
        unit: 4,
        questionText: "Si entre dos secciones S1 (desmonte) y S2 (terraplén) se calcula el volumen de tierra, ¿cómo se procede?",
        options: [
            "Se promedian las áreas y se multiplica por la distancia.",
            "Solo se calcula el volumen de desmonte.",
            "Se calculan por separado los volúmenes de las 'cuñas' de desmonte y terraplén que se forman.",
            "Se considera el área mayor y se multiplica por la distancia."
        ],
        correctAnswerIndex: 2,
        explanation: "Cuando una sección es de desmonte y la siguiente de terraplén (o viceversa), se forma un punto de paso (cota roja cero). Los volúmenes de la 'cuña' de desmonte y de la 'cuña' de terraplén se calculan por separado usando fórmulas específicas."
    },
    {
        id: 'u4q36',
        unit: 4,
        questionText: "La cota de los Bancos de Nivel (BN) permanentes se determina mediante:",
        options: [
            "Estimación visual.",
            "Nivelación trigonométrica aproximada.",
            "Nivelación geométrica de precisión una vez asentados.",
            "Lectura directa de un GPS de mano."
        ],
        correctAnswerIndex: 2,
        explanation: "La cota de un Banco de Nivel (BN) debe ser muy precisa. Una vez materializado y asegurado su asentamiento, su cota se determina mediante nivelación geométrica de alta precisión, referida a otros puntos de la red altimétrica oficial si es posible."
    },
    {
        id: 'u4q37',
        unit: 4,
        questionText: "En la nivelación trigonométrica con Estación Total, el desnivel (t) a menudo:",
        options: [
            "Debe calcularse manualmente siempre.",
            "Aparece directamente en la pantalla del instrumento.",
            "Se obtiene de tablas precalculadas.",
            "No es posible obtenerlo con este método."
        ],
        correctAnswerIndex: 1,
        explanation: "Las Estaciones Totales modernas, al realizar una nivelación trigonométrica (midiendo ángulo vertical y distancia), suelen calcular y mostrar directamente en pantalla el desnivel (t) entre la estación y el punto visado."
    },
    {
        id: 'u4q38',
        unit: 4,
        questionText: "La compensación del error de cierre altimétrico en un itinerario se realiza aplicando una corrección a:",
        options: [
            "Solo la primera lectura de espaldas.",
            "Solo la última lectura de frente.",
            "El desnivel de cada tramo del itinerario.",
            "La altura del instrumento en cada estación."
        ],
        correctAnswerIndex: 2,
        explanation: "La compensación del error de cierre se realiza repartiendo dicho error entre los desniveles calculados para cada uno de los tramos que componen el itinerario."
    },
    {
        id: 'u4q39',
        unit: 4,
        questionText: "Para tomar datos de campo para un perfil longitudinal con nivel y mira, el instrumento se estaciona preferiblemente:",
        options: [
            "Exactamente sobre el punto inicial de la alineación.",
            "Fuera de la traza o alineación, desde donde se puedan visar los puntos.",
            "En el punto más alto del perfil.",
            "Moviéndolo a cada punto del perfil."
        ],
        correctAnswerIndex: 1,
        explanation: "Cuando se toman datos para un perfil longitudinal usando nivel y mira, es conveniente estacionar el nivel fuera de la propia alineación, en un lugar desde el cual se puedan visar la mayor cantidad de puntos del perfil sin mover el instrumento innecesariamente."
    },
    {
        id: 'u4q40',
        unit: 4,
        questionText: "Al dibujar perfiles transversales, la escala horizontal y vertical suelen ser:",
        options: [
            "Siempre H:1000, V:100",
            "La vertical 10 veces mayor que la horizontal.",
            "Generalmente la misma (ej. 1:100 / 1:100).",
            "La horizontal siempre mayor que la vertical."
        ],
        correctAnswerIndex: 2,
        explanation: "A diferencia de los perfiles longitudinales, en los perfiles transversales se suele utilizar la misma escala para el eje horizontal y el vertical, para no distorsionar la forma de la sección."
    },
    {
        id: 'u4q41',
        unit: 4,
        questionText: "Las 'curvas intermedias' en un plano topográfico sirven para:",
        options: [
            "Indicar los límites de la propiedad.",
            "Señalar las curvas maestras.",
            "Detallar el relieve entre las curvas maestras.",
            "Marcar las zonas de excavación."
        ],
        correctAnswerIndex: 2,
        explanation: "Las curvas intermedias se intercalan entre las curvas maestras para proporcionar un mayor detalle de la forma del relieve del terreno."
    },
    {
        id: 'u4q42',
        unit: 4,
        questionText: "El método de nivelación por GPS, en comparación con la nivelación geométrica, suele ofrecer una precisión altimétrica:",
        options: [
            "Siempre superior.",
            "Generalmente inferior, aunque útil en obras extensas.",
            "Exactamente igual.",
            "Solo válida para terrenos planos."
        ],
        correctAnswerIndex: 1,
        explanation: "Aunque el GPS es muy útil para posicionamiento planimétrico, su precisión altimétrica suele ser inferior a la obtenida con nivelación geométrica, si bien es suficiente para muchas aplicaciones en obras extensas."
    },
    {
        id: 'u4q43',
        unit: 4,
        questionText: "En la nivelación geométrica, la lectura realizada sobre la mira colocada en un punto de cota conocida o ya calculada para determinar la altura del plano visual se llama:",
        options: [
            "Lectura de frente.",
            "Lectura de espaldas.",
            "Lectura intermedia.",
            "Lectura de mira."
        ],
        correctAnswerIndex: 1,
        explanation: "La lectura de espaldas (o lectura atrás) es la primera lectura que se realiza desde una estación del nivel, sobre una mira situada en un punto de cota conocida o previamente determinada. Sirve para calcular la cota del plano visual del instrumento."
    },
    {
        id: 'u4q44',
        unit: 4,
        questionText: "Un itinerario altimétrico 'encuadrado' es aquel que:",
        options: [
            "Forma una figura geométrica cerrada.",
            "Empieza y termina en puntos distintos, ambos de cotas conocidas y referidas al mismo plano.",
            "Solo se realiza dentro de los límites de una parcela.",
            "Utiliza exclusivamente nivelación trigonométrica."
        ],
        correctAnswerIndex: 1,
        explanation: "Un itinerario altimétrico encuadrado es el que se realiza entre dos puntos distintos (A y B), cuyas cotas son conocidas y están referidas al mismo plano de comparación. Permite una buena comprobación del cierre."
    },
    {
        id: 'u4q45',
        unit: 4,
        questionText: "La corrección que se aplica al desnivel de cada tramo para compensar el error de cierre altimétrico es, si se reparte equitativamente:",
        options: [
            "Igual al error de cierre total.",
            "Ci = - Ez / N (donde N es el número de tramos).",
            "Proporcional a la longitud del tramo.",
            "Siempre un valor positivo."
        ],
        correctAnswerIndex: 1,
        explanation: "Si el error de cierre (Ez) se reparte equitativamente entre N tramos, la corrección (Ci) para cada tramo es -Ez/N. El signo negativo indica que la corrección se aplica en sentido opuesto al error."
    },
    {
        id: 'u4q46',
        unit: 4,
        questionText: "Al tomar datos para un perfil, los puntos se estaquillan preferentemente en:",
        options: [
            "Intervalos fijos, independientemente del terreno.",
            "Cambios de pendiente y accidentes naturales/artificiales.",
            "Solo en los puntos más altos.",
            "Solo en los puntos más bajos."
        ],
        correctAnswerIndex: 1,
        explanation: "Para representar fielmente un perfil, es crucial tomar y estaquillar puntos en todos los cambios significativos de pendiente, así como en la ubicación de accidentes naturales ( vaguadas, divisorias) o artificiales (bordes de camino, muros)."
    },
    {
        id: 'u4q47',
        unit: 4,
        questionText: "Si la cota del terreno es 55.20m y la cota de la rasante es 54.80m, ¿qué tipo de actuación se requiere?",
        options: [
            "Terraplén de 0.40m",
            "Desmonte de 0.40m",
            "Terraplén de 1.00m",
            "Desmonte de 1.00m"
        ],
        correctAnswerIndex: 1,
        explanation: "Cota Roja = Cota Terreno - Cota Rasante = 55.20m - 54.80m = +0.40m. Una cota roja positiva indica que hay que realizar un desmonte (excavar) de 0.40m."
    },
    {
        id: 'u4q48',
        unit: 4,
        questionText: "El 'cajeado' de una sección transversal es fundamental para poder visualizar y calcular:",
        options: [
            "La pendiente longitudinal de la rasante.",
            "Las áreas de desmonte y terraplén en ese punto.",
            "La ubicación de las curvas de nivel.",
            "El error de cierre del itinerario."
        ],
        correctAnswerIndex: 1,
        explanation: "El cajeado, al superponer la sección tipo de la obra sobre el perfil del terreno, permite definir claramente las áreas que corresponden a desmonte (excavación) y a terraplén (relleno) en esa sección transversal."
    },
    {
        id: 'u4q49',
        unit: 4,
        questionText: "En el cálculo de volumen de excavación de un solar, si H_A, H_B, H_C, H_D son las profundidades en las esquinas, la profundidad media H_M es:",
        options: [
            "(H_A + H_D) / 2",
            "La mayor de las profundidades.",
            "(H_A + H_B + H_C + H_D) / 4",
            "√(H_A² + H_B² + H_C² + H_D²)"
        ],
        correctAnswerIndex: 2,
        explanation: "Para un solar de planta rectangular o poligonal simple donde se excava a profundidades variables en las esquinas (H_A, H_B, H_C, H_D), la profundidad media se calcula como el promedio aritmético de estas profundidades: (H_A + H_B + H_C + H_D) / 4."
    },
    {
        id: 'u4q50',
        unit: 4,
        questionText: "El control topográfico de rasantes durante el movimiento de tierras es necesario porque:",
        options: [
            "Los planos originales suelen tener errores.",
            "Las cotas originales del terreno cambian a medida que se trabaja.",
            "La maquinaria pesada descalibra los instrumentos.",
            "Solo se realiza al inicio y al final de la obra."
        ],
        correctAnswerIndex: 1,
        explanation: "Durante las operaciones de movimiento de tierras, el perfil del terreno se modifica constantemente. Por ello, es necesario un control topográfico continuo de las rasantes para asegurar que se alcanzan las cotas finales del proyecto."
    },
    {
        id: 'u4q51',
        unit: 4,
        questionText: "Un emisor láser rotatorio en el control de rasantes genera un:",
        options: [
            "Punto láser fijo.",
            "Plano de referencia láser (horizontal o inclinado).",
            "Conjunto de líneas láser aleatorias.",
            "Rayo láser que sigue al sensor."
        ],
        correctAnswerIndex: 1,
        explanation: "Un emisor láser rotatorio, utilizado en el control de explanaciones y nivelaciones, genera un plano de referencia láser que puede ser horizontal o tener una pendiente definida."
    },
    {
        id: 'u4q52',
        unit: 4,
        questionText: "Si las curvas de nivel en un plano están muy juntas, indica que el terreno tiene:",
        options: [
            "Poca pendiente (llano).",
            "Mucha vegetación.",
            "Fuerte pendiente.",
            "Un suelo rocoso."
        ],
        correctAnswerIndex: 2,
        explanation: "La proximidad de las curvas de nivel es directamente indicativa de la pendiente del terreno: si están muy juntas, la pendiente es fuerte; si están muy separadas, el terreno es más llano."
    },
    {
        id: 'u4q53',
        unit: 4,
        questionText: "En la nivelación geométrica, la lectura realizada sobre la mira colocada en un punto cuya cota se desea determinar se llama:",
        options: [
            "Lectura de espaldas.",
            "Lectura de frente.",
            "Lectura cenital.",
            "Lectura base."
        ],
        correctAnswerIndex: 1,
        explanation: "La lectura de frente (o lectura adelante) es la que se realiza sobre la mira situada en un punto cuya cota se quiere determinar, o en un punto de paso para continuar el itinerario."
    },
    {
        id: 'u4q54',
        unit: 4,
        questionText: "Para que un itinerario altimétrico sea válido, el error de cierre absoluto |Ez| debe ser:",
        options: [
            "Siempre cero.",
            "Mayor que la tolerancia admitida.",
            "Menor o igual que la tolerancia admitida.",
            "Un valor negativo."
        ],
        correctAnswerIndex: 2,
        explanation: "Un itinerario altimétrico se considera válido si el valor absoluto del error de cierre (|Ez|) es menor o igual que la tolerancia establecida para ese tipo de trabajo y precisión requerida."
    },
    {
        id: 'u4q55',
        unit: 4,
        questionText: "Los Puntos Kilométricos (PKs) en la 'guitarra' de un perfil longitudinal indican:",
        options: [
            "La cota del terreno en ese punto.",
            "La distancia acumulada desde el origen de la alineación.",
            "El número de orden del perfil transversal.",
            "La pendiente de la rasante."
        ],
        correctAnswerIndex: 1,
        explanation: "Los Puntos Kilométricos (PKs) o la identificación de puntos en la guitarra de un perfil longitudinal señalan la distancia acumulada de cada punto respecto al origen del trazado."
    },
    {
        id: 'u4q56',
        unit: 4,
        questionText: "Si la cota de la rasante en un PK es 120.50m y la pendiente de la rasante hacia el siguiente PK (a 100m) es del +2%, la cota de la rasante en el siguiente PK será:",
        options: [
            "120.70m",
            "122.50m",
            "118.50m",
            "120.52m"
        ],
        correctAnswerIndex: 1,
        explanation: "Una pendiente del +2% significa que la rasante sube 2 metros por cada 100 metros de distancia horizontal. Si el siguiente PK está a 100m, la cota aumentará 2m. Cota siguiente = 120.50m + 2.00m = 122.50m."
    },
    {
        id: 'u4q57',
        unit: 4,
        questionText: "El objetivo de intentar realizar 'explanaciones compensadas' es:",
        options: [
            "Asegurar que todo el material excavado se deseche.",
            "Que el volumen de desmonte sea aproximadamente igual al volumen de terraplén necesario.",
            "Minimizar el uso de maquinaria pesada.",
            "Realizar toda la obra en desmonte."
        ],
        correctAnswerIndex: 1,
        explanation: "Las explanaciones compensadas buscan un diseño donde el material excavado en las zonas de desmonte pueda ser utilizado para los rellenos en las zonas de terraplén, minimizando así la necesidad de traer material de préstamo o desechar excedentes, lo que optimiza costes."
    },
    {
        id: 'u4q58',
        unit: 4,
        questionText: "Los hitos de hormigón con un clavo o marca metálica son una forma común de materializar:",
        options: [
            "Puntos de replanteo temporales.",
            "Bancos de Nivel (BN) permanentes.",
            "Líneas de rotura del terreno.",
            "Vértices de una cuadrícula para MDT."
        ],
        correctAnswerIndex: 1,
        explanation: "Los Bancos de Nivel (BN) permanentes, que sirven como referencia altimétrica fundamental, suelen materializarse de forma robusta y duradera, como hitos de hormigón con una marca metálica (clavo, chapa) que define el punto exacto de la cota."
    },
    {
        id: 'u4q59',
        unit: 4,
        questionText: "El control de rasantes con láser es especialmente útil para:",
        options: [
            "Levantamientos topográficos de grandes extensiones.",
            "Trabajos de explanación y nivelación de superficies.",
            "Determinación de coordenadas geográficas.",
            "Trazado de curvas de nivel en planos."
        ],
        correctAnswerIndex: 1,
        explanation: "El sistema de control de rasantes mediante láser es muy eficiente para guiar la maquinaria en trabajos de explanación, nivelación de terrenos, extendido de capas de firme, etc., asegurando que se alcanzan las cotas proyectadas."
    },
    {
        id: 'u4q60',
        unit: 4,
        questionText: "Si la 'Cota Roja' es cero en un punto, significa que:",
        options: [
            "Hay un error en los datos.",
            "La cota del terreno coincide exactamente con la cota de la rasante.",
            "Se necesita un gran volumen de desmonte.",
            "Se necesita un gran volumen de terraplén."
        ],
        correctAnswerIndex: 1,
        explanation: "Una Cota Roja igual a cero indica que en ese punto no hay ni desmonte ni terraplén, es decir, la cota del terreno natural coincide con la cota de la rasante proyectada. Es un punto de 'paso'."
    }
];
