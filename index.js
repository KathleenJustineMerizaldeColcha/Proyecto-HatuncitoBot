const express = require('express');
const app = express();
const dfff = require('dialogflow-fulfillment');

app.get('/hatuncitobot', (req, res) => {
  res.send('Este es el servidor para el chatbot Hatuncito');
});

app.post("/", express.json(), (req, res) => {
  const agent = new dfff.WebhookClient({
    request: req,
    response: res

  });
  //Opción de consulta Nro. 1
  function InformacionGeneral(agent) {
    var payloadData = {
      "richContent": [
        [
          {
            "type": "description",
            "title": "Cursos ofertados y certificaciones:",
            "text": [
              "La escuela Hatun Yanuna oferta capacitaciones presenciales cortas y capacitaciones para certificación de chef panadero-pastelero; basados en procesos y técnicas modernas que permitirán desempeñarte como ayudante de pastelería y panadería en los diferentes restaurantes, hoteles, cruceros, empresas de alimentación industrial o empresas de banquetes, etc.",
            ],

          }
        ],

        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Certificaciones",
                "image": {
                  "src": {
                    "rawUrl": " https://i.ibb.co/vV1pGrM/icono-cert-chef.png"
                  }
                }
              },
              {
                "text": "Avales",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/FwKzz2Q/icono-calidad.png"
                  }
                }
              }
            ]
          }
        ],

      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }


  //Opcion subconsulta 1.1 Certificaciones
  function Certificaciones(agent) {
    var payloadData = {
      "richContent": [
        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/6F9DJRL/certificaci-n.jpg",
            "accessibilityText": "img. certificacion"
          }
        ],

        [
          {
            "type": "description",
            "title": "",
            "text": [
              "Puedes certificarte como chef panadero-pastelero inscribiéndote en nuestros cursos permanentes.",
            ]

          }
        ],

        [
          {
            "type": "description",
            "title": "¿Tienes otra consulta o deseas regresar al menú principal?",
            "text": [

            ]

          }
        ],

        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Si",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/hK8j82d/SI.png"
                  }
                }

              },
              {
                "text": "No",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/Ph6jhs0/no.png"
                  }
                }
              }
            ]
          }
        ],
      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }


  //Opción subconsulta 1.2 Avales
  function Avales(agent) {
    var payloadData = {
      "richContent": [
        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/dGw2V43/avales-opt.jpg",
            "accessibilityText": "img. avales",
            "width": "20px",
            "height": "20px"
          }
        ],
        [
          {
            "type": "description",
            "title": "Hatun Yanuna cuenta con los avales de:",
            "text": [
              "✅ La Asociación de Escuelas de gastronomía de Ecuador",
              "✅ Asociación de chefs pasteleros y chefs panaderos del Ecuador",
              "✅ Asociación de Chefs del Ecuador",
              "✅ World Association of Chefs Societies",
              "✅ Organization of Gastronomic Associations of the Americans and the Caribbean"
            ],

          }
        ],

        [
          {
            "type": "description",
            "title": "¿Tienes otra consulta o deseas regresar al menú principal?",
            "text": [

            ]

          }
        ],

        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Si",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/hK8j82d/SI.png"
                  }
                }

              },
              {
                "text": "No",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/Ph6jhs0/no.png"
                  }
                }
              }
            ]
          }
        ]

      ]
    }

    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }



  //Opción de Consulta de opción Nro. 2 
  function ConsultaContenidoCapacitaciones(agent) {
    var payloadData = {
      "richContent": [
        [
          {
            "type": "description",
            "title": "Contenidos de aprendizaje",
            "text": [
              "En Hatun Yanuna estamos comprometidos  a enseñar para el emprendimiento, aprendiendo más de 200 recetas para que marques tu propio estilo."
            ]

          }
        ],
        [
          {
            "type": "description",
            "title": "",
            "text": [
              "Los cursos comprenden 2 módulos de enseñanza:"
            ]

          }
        ],
        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Módulo Básico",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/ZYjsv4X/icono-mod-basico.png"
                  }
                }

              },
              {
                "text": "Módulo Avanzado",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/rQ5TC2z/icono-mod-avanzado.png"
                  }
                }

              }
            ]
          }
        ],

      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }

  //Opción de Consulta de opción Nro. 2.1 Modulo Básico
  function ModuloBasico(agent) {
    var payloadData = {
      "richContent": [
        [
          {
            "type": "description",
            "title": "Módulo de panadería y pastelería básica:",
            "text": [
              "En este nivel usted obtendrá los conocimientos para desempeñarse como ayudante de pastelería y panadería, basado en procesos y técnicas actuales."
            ]
          }
        ],  
        [
          {
            "type": "description",
            "title": "Usted aprenderá a elaborar:",
            "text": [
              "✅ Tiempos de panes: crocantes, semicrocantes, suaves y enriquecidos",
              "✅ Masas básicas y aireadas",
              "✅Merengues y chocolatería",
              "✅ Bizcochuelos y pasteles",
              "✅ Cubiertas para decoración",
              "✅ Modelado en azúcar",
              "✅ Masas laminadas, bocaditos y mucho más"
            ]
          }
        ],

        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/8cyJgKV/alumnas-modulo-basico.jpg",
            "accessibilityText": "alumnas-modulo-basico"
          },
          {
            "type": "info",
            "title": "",
            "subtitle": "Nuestras alumnas nos comparten parte de su trabajo durante su capacitación en pastelería básica , decoración sobre pasteles reales prácticas de manejo de manga y boquillas."
          },
        ],





        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/k89XN8Y/pan-modulo-basico.jpg",
            "accessibilityText": "pan-modulo-basico"
          },
          {
            "type": "info",
            "title": "",
            "subtitle": "Un delicioso pan elaborado por alumnos de Pastelería Básica."
          },
        ],
        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/KXYmCtf/pan-Pita-modulo-basico.jpg",
            "accessibilityText": "pan-Pita-modulo-basico"
          },
          {
            "type": "info",
            "title": "",
            "subtitle": "¿Te provoca un delicioso pan Pita con pollo?, aprende a hacerlo como nuestros alumnos de Panadería Básica porque ellos ya son Hatun."

          },
        ],

        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/vzJMw0z/wafles-modulo-basico.jpg",
            "accessibilityText": "wafles-modulo-basico"
          },
          {
            "type": "info",
            "title": "",
            "subtitle": "Waffles en Paletas con mucho chocolate y fruta, ideales para un desayuno con mucha energía 🤫🤔 "

          },
        ],

        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/F6DmPVm/figuras3d-modulo-avanzado.jpg",
            "accessibilityText": "figuras3d-modulo-avanzado"
          },
          {
            "type": "info",
            "title": "",
            "subtitle": "Figuras 3D en chocolate, para despertar la imaginación y las ganas por un delicioso chocolate."

          },
        ],

        [
          {
            "type": "description",
            "title": "¿Tienes otra consulta o deseas regresar al menú principal?",
            "text": [

            ]

          }
        ],


        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Si",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/hK8j82d/SI.png"
                  }
                }

              },
              {
                "text": "No",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/Ph6jhs0/no.png"
                  }
                }
              }
            ]
          }
        ]

      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }


  //Opción de Consulta de opción Nro. 2.2 Modulo avanzado
  function ModuloAvanzado(agent) {
    var payloadData = {
      "richContent": [

        [
          {
            "type": "description",
            "title": "Módulo de panadería y pastelería avanzado:",
            "text": [
              "En este nivel usted obtendrá los conocimientos para desempeñarse en restaurantes, hoteles, cruceros, empresas de alimentación industrial, empresas de banquetes, panaderías o pastelerías."
            ]
          }
        ]
        ,
        [
          {
            "type": "description",
            "title": "Usted aprenderá a elaborar:",
            "text": [
              "✅ Panadería tradicional ecuatoriana e internacional",
              "✅ Panes comerciales",
              "✅ Formulación y creación de panes desde cero",
              "✅ Elaboración de pre-fermentos naturales",
              "✅ Postres tradicionales y de cafetería ",
              "✅ Pastelería de vanguardia ",
              "✅ Clásicos de la pastelería",
              "✅ Fondant en torta real y bocaditos",
              "✅ Baños brillosos y pintura de chocolate",
              "✅ Helados, conservas y más"
            ]
          }
        ],
        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/2MHsWGw/alumnos-modulo-avanzado.jpg",
            "accessibilityText": "alumnos-modulo-avanzado"
          },
          {
            "type": "info",
            "title": " ",
            "subtitle": "Nuestros alumnos demuestran toda su habilidad con hermosos y deliciosos postres",

          },
        ],

        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/1Mgvdsr/brownie-modulo-avanzado.jpg",
            "accessibilityText": "brownie-modulo-avanzado"
          },
          {
            "type": "info",
            "title": " ",
            "subtitle": "Brownies y Blondies, elaborados por los alumnos de pastelería y panadería avanzada.",

          },
        ],

        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/5FxrWFS/muffin-panaderia-avanzada.jpg",
            "accessibilityText": "muffin-panaderia-avanzada"
          },
          {
            "type": "info",
            "title": "",
            "subtitle": "Muffin integrales de jamón y queso son una deliciosa receta que aprenderás en pastelería avanzada."

          },
        ],
        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/rMfXLch/conservas-modulo-avanzado.jpg",
            "accessibilityText": "conservas-modulo-avanzado"
          },
          {
            "type": "info",
            "title": "",
            "subtitle": "Aprenderás a realizar deliciosas conservas en base a frutas naturales."

          },
        ],

        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/hWD6XDK/pastel-helado-avanzada.jpg",
            "accessibilityText": "pastel-helado-avanzada"
          },
          {
            "type": "info",
            "title": "",
            "subtitle": "Pastel de Helado con salsa de Maracuyá simplemente delicioso, realizado por los alumnos de de Pastelería Avanzada"

          },
        ],

        [
          {
            "type": "description",
            "title": "¿Tienes otra consulta o deseas regresar al menú principal?",
            "text": [

            ]

          }
        ],

        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Si",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/hK8j82d/SI.png"
                  }
                }

              },
              {
                "text": "No",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/Ph6jhs0/no.png"
                  }
                }
              }
            ]
          }
        ]

      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }

  //Opción de consulta Nro. 3
  function Requisitos(agent) {

    var payloadData = {
      "richContent": [

        [
          {
            "type": "info",
            "title": "Requisitos de inscripción:",
            "subtitle": "La Edad ideal de ingreso ideal es a partir de los 15 años, para cual tienes que llenar la ficha de incripción y presentar la siguiente documentación:",
            "image": {
              "src": {
                "rawUrl": "http://www.akunta.org/centrodeconciliacion/wp-content/uploads/2019/12/requisitos-tecnicos.png"
              }
            },
            // "actionLink": "https://example.com"
          }
        ],
        [
          {
            "type": "image",
            "rawUrl": "data:image/png;base64,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",
            "accessibilityText": "Imagen de requisitos"
          }
        ],
        [
          {
            "type": "description",
            "title": "¿Tienes otra consulta o deseas regresar al menú principal?",
            "text": [

            ]

          }
        ],
        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Si",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/hK8j82d/SI.png"
                  }
                }

              },
              {
                "text": "No",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/Ph6jhs0/no.png"
                  }
                }
              }
            ]
          }
        ]
      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }




  //Opción de consulta Nro. 4
  function ConsultaCostosInscripcion(agent) {
    var payloadData = {
      "richContent": [
        [
          {
            "type": "info",
            "title": "Costos de Matrícula:",
            "subtitle": "El costo del semestre es de $645, este precio no incluye los ingredientes ni el uniforme.Una  vez terminada la capacitación diaria, los alumnos se llevan los productos elaborados en la clase.",
            "image": {
              "src": {
                "rawUrl": "https://static8.depositphotos.com/1050267/1065/i/600/depositphotos_10651439-stock-photo-dollar-sign-and-bundle-of.jpg"
              }
            }

          }
        ],
        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Formas de pago",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/X34K3HZ/icono-formas-pago.png"
                  }
                }

              },
              {
                "text": "Uniformes",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/rycdpCz/icono-uniformes.png"
                  }
                }
              }
            ],

          }

        ]
      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }
  //Opcion consulta opcion 5
  function FormasDePago(agent) {

    var payloadData = {
      "richContent": [
        [
          {
            "type": "info",
            "title": "Hatun Yanuna te brinda las mejores opciones de pago para que puedas acceder a nuestras capacitaciones:",
            "subtitle": "",
            "image": {
              "src": {
                "rawUrl": "https://www.radioonlinehd.com/assets/images/usapagos-530x397.png"
              }
            }

          }
        ],
        [
          {
            "type": "image",
            "rawUrl": "https://theshoppers.com/es/wp-content/uploads/sites/6/2019/04/imagen-medios-de-pago-def.jpg",
            "accessibilityText": "formasPago"
          }
        ],
        [
          {
            "type": "description",
            "title": "Formas de pago:",
            "text": [
              
              "✅ Efectivo",
              "✅ Transferencias interbancarias",
              "✅ Crédito Directo, mediante un abono de $135 al momento de la inscripción y $85 mensuales por seis meses hasta  completar el valor total, estos valores deben ser cancelados los primeros días de cada mes",
              "✅ Se aceptan todas las tarjetas de crédito y débito: Visa, MasterCard, Diners Club Internacional"

            ]

          }
        ],
        [
          {
            "type": "description",
            "title": "¿Tienes otra consulta o deseas regresar al menú principal?",
            "text": [
            ]

          }
        ],
        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Si",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/hK8j82d/SI.png"
                  }
                }

              },
              {
                "text": "No",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/Ph6jhs0/no.png"
                  }
                }
              }
            ]
          }
        ]
      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }

  //Opcion de consulta Nro. 6
  function Uniformes(agent) {
    var payloadData = {
      "richContent": [
        [
          {
            "type": "info",
            "title": "Uniformes",
            "subtitle": "El uniforme tiene un precio de $71.00, incluye chaqueta, pantalón, delantal  y zafari. Lo puedes adquirir en Chef City,  ubicado en CC Unicornio Local 309, Av. Río Amazonas, Quito.",
            "image": {
              "src": {
                "rawUrl": "https://www.mychefcity.com/wp-content/uploads/2019/10/box-img1c.jpg"
              }
            },
            "actionLink": "https://www.mychefcity.com/"
          }
        ],

        [
          {
            "type": "image",
            "rawUrl": "https://www.mychefcity.com/wp-content/uploads/2019/10/box-img1c.jpg",
            "accessibilityText": "Uniforme chef city"
          }
        ],
        [
          {
            "type": "description",
            "title": "¿Tienes otra consulta o deseas regresar al menú principal?",
            "text": [
            ]

          }
        ],

        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Si",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/hK8j82d/SI.png"
                  }
                }

              },
              {
                "text": "No",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/Ph6jhs0/no.png"
                  }
                }
              }
            ]
          }
        ]
      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }

  //Opcion de consulta Nro. 7

  function Duracion(agent) {
    var payloadData = {
      "richContent": [
        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/SRLDwYV/icono-duracion-curso.jpg",
            "accessibilityText": "duracion_curso"
          },
          {
            "type": "info",
            "title": "Duración de los cursos",
            "subtitle": "El curso tiene una duración de dos  semestres, con un total de 576 horas pedagógicas.",
          },

          {
            "type": "chips",
            "options": [
              {
                "text": "Fechas de inicio",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/drxLmT3/icono-fecha-inicio-clases.png"
                  }
                }
              },
              {
                "text": "Horarios",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/p23F2v9/icono-horario.png"
                  }
                }
              }
            ]
          }

        ]
      ]
    }

    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }


  // Opción de consulta Nro. 8
  function FechaInicio() {
    var payloadData = {
      "richContent": [
        [
          {
            "type": "list",
            "title": "Fechas de inicio",
            "subtitle": "Nuestros cursos generalmente inician los primeros días de marzo y septiembre.",
            "event": {
              "name": "",
              "languageCode": "",
              "parameters": {}
            }
          },
          {
            "type": "divider"
          }
        ],
        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/8n3p3qh/icono-fechas-inicio.jpg",
            "accessibilityText": "inicio-curso"
          }
        ],
        [
          {
            "type": "description",
            "title": "¿Tienes otra consulta o deseas regresar al menú principal?",
            "text": [
            ]
          }
        ],
        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Si",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/hK8j82d/SI.png"
                  }
                }

              },
              {
                "text": "No",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/Ph6jhs0/no.png"
                  }
                }
              }
            ]
          }
        ]
      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }

  function Horarios() {
    var payloadData = {
      "richContent": [
        [
          {
            "type": "list",
            "title": "Se puede seleccionar los siguientes horarios de capacitación:",
            "subtitle": "",
            "event": {
              "name": "",
              "languageCode": "",
              "parameters": {}
            }
          },
          {
            "type": "divider"
          },
        ],
        [
          {
            "type": "description",
            "title": "",
            "text": [
              "De lunes a  miércoles(07:00-10:00,10:30-13:30) ",
              "Los días sábados intensivos(08:00-15:00)"
            ]
          }
        ],
        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/2hsSDRG/motivacion-hatun.jpg",
            "accessibilityText": "motivacion_hatun"
          }
        ],

        [
          {
            "type": "description",
            "title": "¿Tienes otra consulta o deseas regresar al menú principal?",
            "text": [
            ]

          }
        ],
        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Si",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/hK8j82d/SI.png"
                  }
                }

              },
              {
                "text": "No",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/Ph6jhs0/no.png"
                  }
                }
              }
            ]
          }
        ]

      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }


  //Opcion de consulta Nro. 9
  function DireccionEscuela() {
    var payloadData = {
      "richContent": [
        [
          {
            "type": "image",
            "rawUrl": "https://guiauniversitaria.mx/wp-content/uploads/2020/02/Estas-son-las-5-nuevas-funciones-que-implemento%CC%81-Google-Maps.jpg",
            "accessibilityText": "Mapa.google"
          }
        ]
        ,

        [
          {
            "type": "button",
            "icon": {
              "type": "chevron_right",
              "color": "#FF9800"
            },
            "text": "Estamos ubicados en las calles Capitán Ramón  Borja E3-45 y  Galo Plaza Lasso, Sector de La  Kennedy Quito-Ecuador.",
            "link": "https://www.google.com/maps/place/Escuela+de+Pasteler%C3%ADa+y+Panader%C3%ADa+Hatun+Yanuna/@-0.1412729,-78.4845765,17z/data=!3m1!4b1!4m5!3m4!1s0x91d5856bf982c625:0x62c3560f4694bc9f!8m2!3d-0.1412729!4d-78.4823878?hl=es-419",
            "event": {
              "name": "",
              "languageCode": "",
              "parameters": {}
            }
          }
        ],
        [
          {
            "type": "description",
            "title": "¿Tienes otra consulta o deseas regresar al menú principal?",
            "text": [
            ]

          }
        ],
        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Si",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/hK8j82d/SI.png"
                  }
                }

              },
              {
                "text": "No",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/Ph6jhs0/no.png"
                  }
                }
              }
            ]
          }
        ]

      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }

  //Opcion de consulta Nro. 10
  function InformacionContacto() {
    var payloadData = {
      "richContent": [
        [
          {
            "type": "description",
            "title": "Información de contacto",
            "text": [
              "Para más información puedes contactarnos a nuestro número de teléfono 022402931, o seguirnos en nuestras redes sociales:  ",
            ]
          }
        ],
        [
          {
            "type": "button",
            "icon": {
              "type": "people",
              "color": "#FF9800"
            },
            "text": "WhatsApp: 0991263871",
            "link": "https://api.whatsapp.com/send?text=Hatun%20Yanuna%20%E2%80%93%20Escuela%20de%20Panader%C3%ADa%20y%20Pasteler%C3%ADa%20https%3A%2F%2Fhatunyanuna.com%2F",
            "event": {
              "name": "",
              "languageCode": "",
              "parameters": {}
            }
          }
        ],
        [
          {
            "type": "button",
            "icon": {
              "type": "facebook",
              "color": "#FF9800"
            },
            "text": "Facebook",
            "link": "https://m.facebook.com/escueladepasteleriaypanaderiahatunyanuna/",
            "event": {
              "name": "",
              "languageCode": "",
              "parameters": {}
            }
          }
        ],

        [
          {
            "type": "button",
            "icon": {
              "type": "party_mode",
              "color": "#FF9800"
            },
            "text": "Instagram",
            "link": "https://www.instagram.com/hatunyanuna/",
            "event": {
              "name": "",
              "languageCode": "",
              "parameters": {}
            }
          }
        ],
        [
          {
            "type": "description",
            "title": "¿Tienes otra consulta o deseas regresar al menú principal?",
            "text": [
            ]

          }
        ],
        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Si",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/hK8j82d/SI.png"
                  }
                }

              },
              {
                "text": "No",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/Ph6jhs0/no.png"
                  }
                }
              }
            ]
          }
        ]
      ]
    }

    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }




  //Opción menu opciones
  function MenuOpciones(agent) {

    var payloadData = {
      "richContent": [

        [
          {
            "type": "description",
            "title": "Selecciona la opción de consulta que te interesa:",
            "text": [
            ]
          }
        ],
        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Cursos Ofertados",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/yNYjnSW/icono-cursos.png"

                  }
                }
              },
              {
                "text": "Contenidos de aprendizaje",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/87RRscW/aprendizaje.png"

                  }
                }
              },
              {
                "text": "Requisitos",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/Q8687jJ/icono-requisitos.png"

                  }
                }
              },
              {
                "text": "Costos",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/HnRnpzj/icono-costo.png"

                  }
                }

              },
              {
                "text": "Duración",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/tmTqdyP/icono-duracion.png"
                  }
                }
              },
              {
                "text": "Dirección",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/XbfKFw3/icono-direccion.png"
                  }
                }

              },
              {
                "text": "Info de contacto",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/bbtmt4y/icono-info.png"
                  }
                }
              }
            ]
          }
        ]

      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }

  function ConsultaFinConversacion(agent) {
    var payloadData = {

      "richContent": [
        [
          {
            "type": "image",
            "rawUrl": "https://i.ibb.co/xYDzn6h/hatuncito.jpg",
            "accessibilityText": "hatuncito"
          },
          {
            "type": "info",
            "title": "¿Deseas terminar esta conversación con Hatuncito?",
            "subtitle": ""

          },
          {
            "type": "chips",
            "options": [
              {
                "text": "Si",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/hK8j82d/SI.png",
                  }
                  }
                },
              {
                "text": "No",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/Ph6jhs0/no.png",
                  }
                }
              },
            ]
          }
        ]
      ]
    }

    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))

  }

  function TerminarConversacion(agent) {
    var payloadData =
    {
      "richContent": [
        [
          {
            "rawUrl": "https://i.ibb.co/23VwmQP/se-hatun.jpg",
            "type": "image",
            "accessibilityText": "se-hatun"
          },
          {
            "subtitle": "",
            "title": "Gracias por visitar nuestra página web, te esperamos en Hatun Yanuna, la mejor escuela de panadería y pastelería  del centro del país.",
            "type": "info"
          }
        ]
      ]

    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }


  //Opción menu opciones
  function ReiniciarConversacion(agent) {

    var payloadData = {
      "richContent": [

        [
          {
            "type": "description",
            "title": "Selecciona la opción de consulta que te interesa:",
            "text": [
            ]
          }
        ],
        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Cursos Ofertados",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/yNYjnSW/icono-cursos.png"

                  }
                }
              },
              {
                "text": "Contenidos de aprendizaje",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/87RRscW/aprendizaje.png"

                  }
                }
              },
              {
                "text": "Requisitos",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/Q8687jJ/icono-requisitos.png"

                  }
                }
              },
              {
                "text": "Costos",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/HnRnpzj/icono-costo.png"

                  }
                }

              },
              {
                "text": "Duración",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/tmTqdyP/icono-duracion.png"
                  }
                }
              },
              {
                "text": "Dirección",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/XbfKFw3/icono-direccion.png"
                  }
                }

              },
              {
                "text": "Info de contacto",
                "image": {
                  "src": {
                    "rawUrl": "https://i.ibb.co/bbtmt4y/icono-info.png"
                  }
                }
              }
            ]
          }
        ]

      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, { sendAsMessage: true, rawPayload: true }))
  }

  //Mapeo de intenciones

  let intentMap = new Map();
  intentMap.set('InformacionGeneral', InformacionGeneral);
  intentMap.set('Avales', Avales);
  intentMap.set('Certificaciones', Certificaciones);

  intentMap.set('ConsultaContenidoCapacitaciones', ConsultaContenidoCapacitaciones);
  intentMap.set('ModuloBasico - custom', ModuloBasico);
  intentMap.set('ModuloAvanzado - custom', ModuloAvanzado);

  intentMap.set('ConsultaRequisitosInscripcion', Requisitos);

  intentMap.set('ConsultaCostosInscripcion', ConsultaCostosInscripcion);
  intentMap.set('ConsultaFormasPago', FormasDePago);
  intentMap.set('ConsultaAdquisicionUniformes', Uniformes);

  intentMap.set('ConsultaDuracionCursos', Duracion);
  intentMap.set('ConsultaFechaInicio', FechaInicio);
  intentMap.set('ConsultaHorarios', Horarios);
  intentMap.set('ConsultaDireccionEscuela', DireccionEscuela);
  intentMap.set('ConsultaInformacionContacto', InformacionContacto);

  intentMap.set('MostrarMenuOpciones', MenuOpciones);

  intentMap.set('ConsultaFinalizacionConversacion', ConsultaFinConversacion);
  intentMap.set('ConsultaFinalizacionConversacion - yes', TerminarConversacion);
  intentMap.set('ConsultaFinalizacionConversacion - no', ReiniciarConversacion);

  agent.handleRequest(intentMap);

});
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});