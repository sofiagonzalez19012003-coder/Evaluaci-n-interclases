/**
 * Genera el formulario de evaluación del Evento Cultural
 * de la I.E. María Mediadora (Sabaneta) + la hoja donde se guardan TODAS las respuestas.
 *
 * Cómo usarlo:
 *  1. Entra a https://script.google.com  →  "Nuevo proyecto"
 *  2. Borra lo que aparezca y pega TODO este código.
 *  3. Clic en "Ejecutar" (▶). Acepta los permisos de tu cuenta Google.
 *  4. Abre "Registros de ejecución": ahí salen los 3 enlaces
 *     (formulario para los jurados, edición y hoja de resultados).
 *
 *  Para el estilo visual: en el editor del formulario, arriba a la derecha
 *  toca el ícono de paleta 🎨 → color del tema ROJO, y sube el escudo
 *  como imagen de encabezado. (El color/encabezado no se puede fijar por código.)
 */
function crearFormulario() {
  const form = FormApp.create('Evaluación · Evento Cultural y Deportivo Interclases — I.E. María Mediadora');
  form.setDescription('Formamos en valores para la vida.\n\nCalifica de 1 a 5 cada criterio. Llena un formulario por cada grado que evalúes.');
  form.setCollectEmail(false);
  form.setProgressBar(true);

  // --- Datos del jurado ---
  form.addTextItem().setTitle('Nombre del jurado').setRequired(true);

  form.addListItem()
      .setTitle('Grado que evalúas')
      .setChoiceValues(['Sexto', 'Séptimo', 'Octavo', 'Noveno', 'Décimo', 'Once'])
      .setRequired(true);

  // --- Criterios por categoría (tal cual la tabla) ---
  const categorias = {
    'Desfile':        ['Impacto', 'Vestuario', 'Organización'],
    'Punto sorpresa': ['Impacto', 'Creatividad'],
    'Baile grupal':   ['Impacto', 'Organización', 'Coordinación', 'Vestuario'],
    'Mascotas':       ['Impacto', 'Originalidad']
  };

  Object.keys(categorias).forEach(function (cat) {
    form.addSectionHeaderItem().setTitle('▸ ' + cat);
    categorias[cat].forEach(function (criterio) {
      form.addScaleItem()
          .setTitle(cat + ' — ' + criterio)
          .setBounds(1, 5)               // escala 1 a 5
          .setLabels('Bajo', 'Superior')
          .setRequired(true);
    });
  });

  form.addParagraphTextItem().setTitle('Observaciones (opcional)');

  // --- Hoja de cálculo vinculada (aquí se guardan las respuestas) ---
  const hoja = SpreadsheetApp.create('Resultados · Evento Cultural y Deportivo Interclases');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, hoja.getId());

  Logger.log('✅ FORMULARIO para los jurados:  ' + form.getPublishedUrl());
  Logger.log('✏️  EDITAR el formulario:        ' + form.getEditUrl());
  Logger.log('📊 RESULTADOS (hoja de cálculo): ' + hoja.getUrl());
}
