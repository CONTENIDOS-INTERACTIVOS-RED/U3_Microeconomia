export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Mercados y competencia',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tipos de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Competencia perfecta',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Monopolio',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Oligopolio',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Competencia monopolística',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Formación de precios y equilibrio de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Formación de precios',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Equilibrio de mercado',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fallos del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Externalidades',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Bienes públicos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Antelo-Suárez, M. (2015). Microeconomía intermedia en casos. Delta Publicaciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/170085',
    },
    {
      referencia:
        'Salas Velasco, M. (2018). Microeconomía: conceptos teóricos y aplicaciones. Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/105577',
    },
    {
      referencia:
        'Rodríguez Galván, J. Y. (2022). Microeconomía: teoría y ejercicios. Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/224089',
    },
    {
      referencia:
        'Vial Lira, B. (2012). Microeconomía. Editorial ebooks Patagonia - Ediciones Universidad Católica de Chile.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67738',
    },
    {
      referencia:
        'Núñez Sánchez, R. (s.f.). Tema 4. Externalidades y bienes públicos Microeconomía III.',
      link:
        'https://ocw.unican.es/pluginfile.php/1653/course/section/1144/tema_04.pdf',
    },
    {
      referencia:
        'González Tapia, E. (2015). LAS EXTERNALIDADES Y EL TEOREMA DE COASE.',
      link:
        'https://trilogia.utem.cl/wp-content/uploads/sites/9/2019/10/trilogia-utem-facultad-administracion-economia-vol28-n39-2016-nota-tecnica-1-Gonzalez.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ceteris Paribus',
      significado:
        'Principio económico que supone que todas las demás variables permanecen constantes, mientras se analiza el efecto de una en particular.',
    },
    {
      termino: 'Curva de la demanda',
      significado:
        'Representación gráfica que muestra la relación inversa entre el precio de un bien y la cantidad demandada por los consumidores, manteniendo constantes, otras variables.',
    },
    {
      termino: 'Curva de la oferta',
      significado:
        'Representación gráfica que ilustra la relación directa entre el precio de un bien y la cantidad ofrecida por los productores, manteniendo constantes, otras variables.',
    },
    {
      termino: 'Demanda',
      significado:
        'Cantidad de bienes o servicios que los consumidores están dispuestos a adquirir en el mercado a diferentes niveles de precio, considerando condiciones como ingreso, precios de bienes relacionados y preferencias.',
    },
    {
      termino: 'Elasticidad',
      significado:
        'Medida de la sensibilidad de una variable económica (como la cantidad demandada u ofrecida) ante cambios en otra variable (como el precio o ingreso).',
    },
    {
      termino: 'Intervención del gobierno',
      significado:
        'Acciones del estado para corregir fallas de mercado, regular precios, proporcionar bienes públicos o redistribuir recursos.',
    },
    {
      termino: 'Maximización de utilidad',
      significado:
        'Proceso por el cual los consumidores buscan obtener el mayor nivel de satisfacción posible, a partir de sus ingresos y las opciones disponibles.',
    },
    {
      termino: 'Mercado',
      significado:
        'Espacio físico o virtual donde interactúan oferentes y demandantes, para intercambiar bienes, servicios o factores productivos, bajo condiciones determinadas.',
    },
    {
      termino: 'Oferta',
      significado:
        'Cantidad de bienes o servicios que los productores están dispuestos a vender en el mercado, a diferentes niveles de precio, manteniendo constantes, otras variables.',
    },
  ],
}
