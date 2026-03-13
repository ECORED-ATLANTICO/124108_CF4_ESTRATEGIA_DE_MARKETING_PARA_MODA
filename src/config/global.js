export default {
  global: {
    Name: 'Servicio y atención al cliente',
    Description:
      'Este componente busca realizar un recorrido por los fundamentos básicos del servicio y atención al cliente, enfocados en el sector moda, con el objetivo de desarrollar en los aprendices las competencias necesarias para estructurar los sistemas de medición continua de la experiencia del cliente, y así liderar decisiones, acciones y estrategias que maximicen la atención y satisfacción del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición de cliente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de cliente',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos y técnicas de servicio al cliente',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Calidad y cultura de servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Tipos de canales para el servicio al cliente en redes sociales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Nuevas tendencias en servicio al cliente en redes sociales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Proceso de servicio al cliente en redes sociales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Etiqueta empresarial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Normativa legal vigente y ética en el manejo de datos (protección de datos)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Alcance',
      significado: 'Determinar hasta qué punto se puede llegar.',
    },
    {
      termino: 'Banners',
      significado: 'Formato publicitario en Internet.',
    },
    {
      termino: 'Business',
      significado: 'Traducción al inglés de ‘negocio’.',
    },
    {
      termino: 'Consumer',
      significado: 'Traducción al inglés de ‘consumidor’.',
    },
    {
      termino: 'Fidelización de clientes',
      significado:
        'Proceso para retener consumidores, con el objetivo de que se conviertan en clientes habituales.',
    },
    {
      termino: 'Intrusivo',
      significado: 'Que se impone sin autorización.',
    },
    {
      termino: 'Jingle',
      significado:
        'Canción publicitaria para promocionar un producto o servicio.',
    },
    {
      termino: 'KPI (Key Performance Indicators)',
      significado:
        'Indicadores clave de desempeño para el despliegue de una estrategia de marketing.',
    },
    {
      termino: 'Sitio web',
      significado: 'Conjunto de archivos digitales referentes a un tema.',
    },
    {
      termino: 'Tráfico de usuarios',
      significado: 'Flujo de información de usuarios en una página web.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boada, N. (Julio 26 de 2009). <em>Los 8 pasos de un plan de marketing en redes sociales.</em> Cyberclick.',
      link:
        'https://www.cyberclick.es/numerical-blog/los-8-pasos-de-un-plan-de-marketing-en-redes-sociales',
    },
    {
      referencia:
        'Cibrián, I. (2018). <em>Marketing digital: Mide, analiza y mejora.</em> ESIC.',
    },
    {
      referencia:
        'Cyberclick Academy. (Abril de 2020). <em>¿Qué es el SEM o Search Engine Marketing?</em> (2021).',
      link: 'https://www.cyberclick.es/sem',
    },
    {
      referencia:
        'Decisión Andina 351 de 1993. {Comisión del Acuerdo de Cartagena}. <em>Régimen común sobre derecho de autor y derechos conexos.</em> Diciembre 17 de 1993.',
      link: 'https://www.wipo.int/edocs/lexdocs/laws/es/can/can010es.pdf',
    },
    {
      referencia:
        'De Castro, I. (Septiembre 30 de 2019). <em>¿Qué son herramientas de marketing y por qué debo contar con ellas? Innovacode - Resolución de problemas.</em>',
    },
    {
      referencia:
        'De Paul, V. (Diciembre 18 de 2020). <em>20 ideas de redes sociales para mantener el feed de tu marca al día. Sprout Social.</em>',
      link: 'https://sproutsocial.com/insights/ideas-de-redes-sociales/',
    },
    {
      referencia:
        'Dotras, A. (2018). <em>Social Media. Herramientas y estrategias empresariales.</em> Ediciones de la U.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8001',
    },
    {
      referencia:
        'Giraldo, V. (Febrero 14 de 2019). <em>Plataformas digitales: ¿qué son y qué tipos existen?</em> Rock Content - ES.',
      link: 'https://rockcontent.com/es/blog/plataformas-digitales/',
    },
    {
      referencia:
        'Giu, W. (Julio 18 de 2018). <em>Qué es una Estrategia Digital.</em> WalterGiu.',
      link: 'https://waltergiu.com/blog/que-es-una-estrategia-digital',
    },
    {
      referencia:
        'Laudon, K., y Laudon, J. (2012). <em>Sistemas de información gerencial.</em> Pearson.',
      link: 'https://es.calameo.com/read/0045399238b63175162a6',
    },
    {
      referencia:
        'Ley 23 de 1982. <em>Sobre derechos de autor.</em> Enero 28 de 1982.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=3431&dt=S',
    },
    {
      referencia:
        'Ley 241 del 2011. <em>Por la cual se regula la responsabilidad por las infracciones al derecho de autor y los derechos conexos en Internet.</em> Abril de 2011.',
      link:
        'http://www.informatica-juridica.com/proyecto-de-ley/proyecto-ley-241-derecho-autor-los-derechos-conexos-internet/',
    },
    {
      referencia:
        'Ley 1834 del 2017. <em>Por medio de la cual se fomenta la economía creativa.</em> Mayo 23 de 2017.',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30030647',
    },
    {
      referencia:
        'Ley 1915 del 2018. <em>Por la cual se modifica la ley 23 del 1982 y se establecen otras disposiciones en materia de derecho de autor y derechos conexos.</em> Julio 12 de 2018.',
      link:
        'http://es.presidencia.gov.co/normativa/normativa/LEY%201915%20DEL%2012%20DE%20JULIO%20DE%202018.pdf',
    },
    {
      referencia:
        'MinTIC. (Septiembre 12 de 2015). <em>Redes sociales: Leyes para tener en cuenta.</em> En TIC confío.',
      link:
        'https://www.enticconfio.gov.co/redes-sociales-leyes-para-tener-en-cuenta',
    },
    {
      referencia:
        'Newberry, C. (Julio 17 de 2020). <em>Análisis de redes sociales: Una guía para principiantes. Social Media Marketing & Management Dashboard.</em>',
      link: 'https://blog.hootsuite.com/es/analisis-de-redes-sociales/',
    },
    {
      referencia: 'OMPI. (2020). <em>¿Qué es la propiedad intelectual?</em>',
      link: 'https://www.wipo.int/publications/es/details.jsp?id=4528',
    },
    {
      referencia:
        'Pérez, A. y Acosta, H. (2003). <em>La convergencia mediática: un nuevo escenario para la gestión de información.</em> Revista Cubana de Información en Ciencias de la Salud, 11(1).',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1024-94352003000500003',
    },
    {
      referencia:
        'Pino, C. (2009). <em>El entorno digital en la nueva era de los medios y la publicidad: la metamorfosis del consumidor.</em> Razón y Palabra, (66).',
      link: 'https://www.redalyc.org/articulo.oa?id=199520908015',
    },
    {
      referencia: 'SENA, (1989). <em>Hablemos de marketing.</em> 11-13.',
      link: 'https://hdl.handle.net/11404/876',
    },
    {
      referencia:
        'Silva, R. (2009). <em>Beneficios del comercio electrónico.</em> Perspectivas, (24), 151-164.',
      link: 'https://www.redalyc.org/articulo.oa?id=425942160008',
    },
    {
      referencia:
        'Socialmood. (Marzo 13 de 2020). <em>¿Qué es el SEO y por qué lo necesito?</em> 40deFiebre.',
      link: 'https://www.40defiebre.com/guia-seo/que-es-seo-por-que-necesito',
    },
    {
      referencia:
        'Thompson, I. (Octubre de 2006). <em>Definición de Marketing. Portal de marketing - Marketing-free.com.</em>',
      link:
        'https://www.marketing-free.com/marketing/definicion-marketing.html',
    },
    {
      referencia:
        'Xie, Y. M. S. (2019). <em>Marketing digital: Navegando en aguas digitales, sumérgete conmigo.</em> Ediciones de la U.',
      link:
        'https://login.bdigital.sena.edu.co/login?url=http://www.ebooks7-24.com/?il=9100',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
