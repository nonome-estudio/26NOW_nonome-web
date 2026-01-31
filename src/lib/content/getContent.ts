import type { CardItem } from '../../types/content';

export function getArchitectureProjects(): CardItem[] {
  // Placeholder copy until content collections are implemented.
  // Uses the 6 architecture images copied into /public/images/projects.
  return [
    {
      kind: 'project',
      item: {
        id: 'arch-auditorio-ribeira',
        code: 'AR1',
        title: { es: 'Auditorio Ribeira', en: 'Ribeira Auditorium' },
        description: {
          es: 'Equipamiento cultural de escala urbana, sobrio y luminoso.\nUn interior flexible para música, actos y vida pública.',
          en: 'Urban cultural venue with a sober, luminous presence.\nA flexible interior for music, events, and civic life.'
        },
        image: {
          src: '/images/projects/auditorio-ribeira.png',
          alt: { es: 'Auditorio Ribeira', en: 'Ribeira Auditorium' }
        }
      }
    },
    {
      kind: 'project',
      item: {
        id: 'arch-centro-innovacion',
        code: 'CI1',
        title: { es: 'Centro de Innovación', en: 'Innovation Center' },
        description: {
          es: 'Espacios de trabajo y encuentro organizados con claridad.\nLuz natural y recorridos simples para facilitar colaboración.',
          en: 'Work and meeting spaces organized with clarity.\nNatural light and simple circulation to support collaboration.'
        },
        image: {
          src: '/images/projects/centro-innovacion.png',
          alt: { es: 'Centro de Innovación', en: 'Innovation Center' }
        }
      }
    },
    {
      kind: 'project',
      item: {
        id: 'arch-o-castro',
        code: 'OC1',
        title: { es: 'O Castro', en: 'O Castro' },
        description: {
          es: 'Intervención sensible en un entorno con identidad propia.\nVolúmenes contenidos y materialidad serena, sin ruido.',
          en: 'A sensitive intervention in a place with strong identity.\nRestrained volumes and calm materiality, without noise.'
        },
        image: {
          src: '/images/projects/o-castro.png',
          alt: { es: 'O Castro', en: 'O Castro' }
        }
      }
    },
    {
      kind: 'project',
      item: {
        id: 'arch-pazo-toubes',
        code: 'PT1',
        title: { es: 'Pazo Toubes', en: 'Pazo Toubes' },
        description: {
          es: 'Relectura contemporánea desde el respeto al patrimonio.\nEquilibrio entre memoria, uso y confort actual.',
          en: 'A contemporary re-reading rooted in respect for heritage.\nBalance between memory, use, and present-day comfort.'
        },
        image: {
          src: '/images/projects/pazo-toubes.png',
          alt: { es: 'Pazo Toubes', en: 'Pazo Toubes' }
        }
      }
    },
    {
      kind: 'project',
      item: {
        id: 'arch-rag-pardo-bazan',
        code: 'RB1',
        title: { es: 'RAG Pardo Bazán', en: 'RAG Pardo Bazán' },
        description: {
          es: 'Arquitectura institucional: orden, proporción y silencio.\nUna presencia clara que acompaña el espacio público.',
          en: 'Institutional architecture: order, proportion, and quietness.\nA clear presence that supports the public realm.'
        },
        image: {
          src: '/images/projects/rag-pardo-bazan.png',
          alt: { es: 'RAG Pardo Bazán', en: 'RAG Pardo Bazán' }
        }
      }
    },
    {
      kind: 'project',
      item: {
        id: 'arch-terras-almacen',
        code: 'TA1',
        title: { es: 'Terras Almacén', en: 'Terras Warehouse' },
        description: {
          es: 'Infraestructura funcional resuelta con precisión y economía.\nLógica constructiva clara para un uso eficiente.',
          en: 'Functional infrastructure solved with precision and economy.\nClear constructive logic for efficient use.'
        },
        image: {
          src: '/images/projects/terras-almacen.png',
          alt: { es: 'Terras Almacén', en: 'Terras Warehouse' }
        }
      }
    }
  ];
}

export function getDigitalServices(): CardItem[] {
  return [
    {
      kind: 'service',
      item: {
        id: 'srv-bim',
        code: 'SRV',
        title: { es: 'Consultoría BIM', en: 'BIM Consulting' },
        description: {
          es: 'Procesos, documentación, análisis y acompañamiento.',
          en: 'Processes, documentation, analysis, and advisory.'
        },
        image: { src: '/placeholder/card.svg', alt: { es: 'Imagen de ejemplo', en: 'Placeholder image' } }
      }
    },
    {
      kind: 'service',
      item: {
        id: 'srv-web',
        code: 'WEB',
        title: { es: 'Desarrollo web', en: 'Web Development' },
        description: {
          es: 'Apps, modelos y herramientas enfocadas a experiencia de usuario.',
          en: 'Apps, models, and tools focused on clean user experience.'
        },
        image: { src: '/placeholder/card.svg', alt: { es: 'Imagen de ejemplo', en: 'Placeholder image' } }
      }
    },
    {
      kind: 'service',
      item: {
        id: 'srv-custom',
        code: 'CST',
        title: { es: 'Desarrollos a medida', en: 'Custom Development' },
        description: {
          es: 'Revit, Navisworks, CAD, Civil 3D… automatización y plugins.',
          en: 'Revit, Navisworks, CAD, Civil 3D… automation and plugins.'
        },
        image: { src: '/placeholder/card.svg', alt: { es: 'Imagen de ejemplo', en: 'Placeholder image' } }
      }
    }
  ];
}

export function getDigitalCases(): CardItem[] {
  return [
    {
      kind: 'case',
      item: {
        id: 'case-001',
        code: 'C01',
        title: { es: 'Caso 01 (mockup)', en: 'Case 01 (mockup)' },
        description: {
          es: 'Ejemplo de caso con enfoque en impacto/beneficio.',
          en: 'Example case framed around outcome/benefit.'
        },
        image: { src: '/placeholder/card.svg', alt: { es: 'Imagen de ejemplo', en: 'Placeholder image' } }
      }
    }
  ];
}
