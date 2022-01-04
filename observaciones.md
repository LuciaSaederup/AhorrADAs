
Chicas, felicitaciones por la entrega de su trabajo. Sé que fue un TP muy, muy complejo y me alegra ver que mas alla de las dificultades hay un buen entendimiento de js y los temas principales que vimos en este modulo. 

Hay muchas consignas incumplidas en este trabajo, y lamento que no hayan escrito mas seguido para que pudiera guiarlas en algunas cosas. Hay cosas que están bien, pero son copias literales del modelo de Ada: no voy a insistir demasiado en algo que ya deberían saber, pero no hay ningún valor en copiar literalmente código. No están en este curso para hacer TPs solo por tenerlos entregados, eso es un desperdicio de su tiempo y el mío. Espero que estén en este curso para aprender a programar, y al copiar código ajeno están desperdiciando cualquier oportunidad de aprender. 

Hay aspectos mas importantes de su trabajo que estan olvidados: el uso de local storage por ejemplo. No puedo actualizar su pagina sin perder todas las operaciones que agregué - no puedo siguiera agregar una categoria o ir a la sección reportes sin perder las operaciones ya agregadas. Eso es por que estan leyendo del local storage una sola vez, apenas cargan la pagina, y despues nunca mas: cada vez que actualizan el html deberian estar leyendo del local storage, asi como cada vez que actualicen el html deberian estarv leyendo de las apis para el nuevo TP.  No se si puedo explicar este tema como se merece en una correccion, pero si tienen dudas sobre esto por favor escribanme. No tengo problema en repasar estos conceptos si les traen dudas. 

Tambien sufren de algunos momentos en donde se nota que el codigo está a las apuradas. Tomense el tiempo necesario para emprolijar su código, revisen si hay variables que declaran pero no usan, no dejen código comentado, no dejen console log. Todos estos son factores importantes, que van a determinar como les va en un challenge para entrar a una empresa, y es importante que vayan acostumbrandose desde ya a mantener la calidad de la entrega, mas allá de los desafíos específicos del código. Sean prolijas: es como corregir la gramática antes de un TP de la facu. 

En general creo que a este TP le faltó un golpe de horno. Se nota que trabajaron muy separadas, y esa desconexión es evidente en el codigo: si todas estuvieran permanentemente viendo el codigo de las demas no habriamos tenido tres variables distintas para las operaciones. Si esta decisión ocurrió por falta de tiempo es super comprensible: se que este trabajo les exigió muchisimo. Espero que en el proximo TP puedan demostrarme lo que son capaces de hacer con tiempo y ganas. Y que me escriban mas seguido si hay algo que no entienden - les juro que estoy para ustedes, y es un placer para mi ayudarlas con sus dudas antes de una entrega. 


Con respecto a los puntos de evaluación, 

- Respeta la consigna

Cumplido en general. Hay varios puntos que estan incompletos.

A nivel organización del código, que ya deberían manejar mejor:
- Las imagenes estan mal linkeadas en el html y no funcionan. El nombre de la carpeta de imagenes deberia ser assets o img, no settings
- La carpeta vscode no deberia estar. Borrenla de github si vscode la agrega automaticamente.
- El favicon deberia ser un archivo local, de tipo ico, y llamarse favicon.ico

- Estructura correcta de documento HTML

Cumplido. Ocasionalmente tienen etiquetas mal cerradas -un mal casi inevitable cuando trabajamos con tantos divs- y algunas otras cositas a mejorar que les dejo anotadas. Presten atención a los for de los label - no los usan bien. 

- Respeta el diseño dado

Cumplido. 

- Respeta el funcionamiento

Cumplido con excepciones. Las mas importantes, y que les recomiendo arreglar antes de publicar este codigo o agregarlo a sus portfolios: 

- Lo ya comentado: no usan local storage asi que es medio inusable esta web

- No encararon la sub-seccion Balance

- No encararon la diferencia de colores para las operaciones de tipo gasto y ganancia (verde y rojo)

- No funciona el boton cancelar nueva operacion

- La sección reportes no usa las operaciones que agregó el usuario, sino un array que ustedes declaran. 


- Respeta el flujo de pantallas

Cumplido. 

- Responsive funciona correctamente

No cumplido, no funciona para las operaciones agregadas

- Código bien indentado

Cumplido. 

- Buenos nombres de funciones y variables

Cumplido con algunas excepciones que les comento. 

- Funciones pequeñas

Cumplido

- Nombres de branchs adecuados

Cumplido con excepciones, como "desarrollo" o "makita". Sean mas especificas: qué estamos arreglando en esa rama?

Por otro lado, son poquisimas ramas para el trabajo que esperamos acá. queremos un PR por rama, y un PR por cada funcionalidad. Esto va a ser algo que les exijan en el trabajo, asi que practiquenlo lo antes posible. 

- Lógica clara y simple

En general muy bien lograda, aunque hay ocasiones en donde es difícil saber exactamente qué se ejecuta antes y después, y muchas funciones que se ejecutan en lugares erróneos. Tomense el trabajo de poner todas sus funciones axuliares arriba, y todo lo que es ejecución del código apenas carga la pagina debajo. Se van a sorprender. 

- Buen uso estructuras de datos (arrays y objetos)

Correcto el uso, me preocupa la fuente. No veo que haya un solo lugar en este codigo donde estén seguras de qué array de operaciones usar, por ejemplo. Siempre deberian usar los datos del local storage, pero eso no está pasando: o usan el array vacio o usan el array de operaciones con datos ya llenados. 

- Buen uso de estructuras de control (condicionales y bucles)

Correcto

- Buen uso de métodos funcionales de array (map, filter, reduce, etc)

Correcto salvo por muchas ocasiones (que les comento) donde usan map en lugar de reduce

- Reutilización de lógica / funciones

Bien

- Commits con mensajes adecuados

Cumplido en general, pero ojo, hay commits muy poco especificos. Hay tres que se llaman "segundo commit!". 

- Un PR por funcionalidad, fix o mejora

Incumplido. Por lo que veo trabajaron cada una en su rama y esa desconexión se nota mucho, mucho en el trabajo final. Hay variables repetidas, como operaciones, hay variables que se declaran y no se usan, el flujo del codigo no es facil de seguir. 

- PRs con buenos títulos

Cumplido!

### Nota final: 6
