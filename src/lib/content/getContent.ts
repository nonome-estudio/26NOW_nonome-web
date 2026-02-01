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
          src: '/images/projects/auditorio-ribeira.webp',
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
          src: '/images/projects/centro-innovacion.webp',
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
          src: '/images/projects/o-castro.webp',
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
          src: '/images/projects/pazo-toubes.webp',
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
          src: '/images/projects/rag-pardo-bazan.webp',
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
          src: '/images/projects/terras-almacen.webp',
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
        code: 'BIM',
        title: { es: 'Consultoría BIM', en: 'BIM Consulting' },
        description: {
          es: 'Procesos, documentación y estándares para equipos y proyectos.\nDiagnóstico, roadmap y acompañamiento en implantación.',
          en: 'Processes, documentation, and standards for teams and projects.\nAssessment, roadmap, and hands-on implementation support.'
        },
        image: { src: '/images/digital/services/bim-consulting.svg', alt: { es: 'Consultoría BIM', en: 'BIM Consulting' } }
      }
    },
    {
      kind: 'service',
      item: {
        id: 'srv-web',
        code: 'WEB',
        title: { es: 'Desarrollo web', en: 'Web Development' },
        description: {
          es: 'Sitios y herramientas a medida para comunicar y operar.\nInterfaces limpias, rápidas y orientadas a usuario.',
          en: 'Custom sites and tools to communicate and operate.\nClean, fast interfaces designed around user experience.'
        },
        image: { src: '/images/digital/services/web-development.svg', alt: { es: 'Desarrollo web', en: 'Web Development' } }
      }
    },
    {
      kind: 'service',
      item: {
        id: 'srv-custom',
        code: 'DEV',
        title: { es: 'Desarrollos a medida', en: 'Custom Development' },
        description: {
          es: 'Automatización y herramientas para Revit, Navisworks, CAD y Civil 3D.\nScripts, plugins y pipelines robustos para producción.',
          en: 'Automation and tools for Revit, Navisworks, CAD, and Civil 3D.\nScripts, plugins, and robust pipelines for production.'
        },
        image: { src: '/images/digital/services/custom-development.svg', alt: { es: 'Desarrollos a medida', en: 'Custom Development' } }
      }
    }
  ];
}

export function getDigitalCases(): CardItem[] {
  return [
    {
      kind: 'case',
      item: {
        id: 'case-navis-clash-ai',
        code: 'NCL',
        title: { es: 'Navisworks clash analysis (AI-assisted)', en: 'Navisworks clash analysis (AI-assisted)' },
        description: {
          es: 'Priorización de clashes y propuestas de resolución.\nMenos ruido, más decisiones rápidas y trazables.',
          en: 'Clash prioritization and resolution suggestions.\nLess noise, faster decisions, and traceable outcomes.'
        },
        image: { src: '/images/digital/cases/navisworks-clash-ai.svg', alt: { es: 'Navisworks clash analysis ai assisted', en: 'Navisworks clash analysis ai assisted' } }
      }
    },
    {
      kind: 'case',
      item: {
        id: 'case-navis-enrichment',
        code: 'NEN',
        title: { es: 'Navis model data enrichment', en: 'Navis model data enrichment' },
        description: {
          es: 'Zoning, parámetros y estructuración de datos del modelo.\nModelos más consultables, consistentes y reutilizables.',
          en: 'Zoning, parameters, and structured model metadata.\nMore queryable, consistent, and reusable models.'
        },
        image: { src: '/images/digital/cases/navis-data-enrichment.svg', alt: { es: 'Navis model data enrichment', en: 'Navis model data enrichment' } }
      }
    },
    {
      kind: 'case',
      item: {
        id: 'case-ifc-viewer-web',
        code: 'IFC',
        title: { es: 'IFC model viewer custom website', en: 'IFC model viewer custom website' },
        description: {
          es: 'Visualización web ligera para compartir modelos IFC.\nAcceso rápido, controlado y sin instalar software.',
          en: 'Lightweight web viewer to share IFC models.\nFast, controlled access without installing software.'
        },
        image: { src: '/images/digital/cases/ifc-viewer-website.svg', alt: { es: 'IFC model viewer custom website', en: 'IFC model viewer custom website' } }
      }
    },
    {
      kind: 'case',
      item: {
        id: 'case-model-qaqc',
        code: 'QA',
        title: { es: 'Model automated data QA/QC', en: 'Model automated data QA/QC' },
        description: {
          es: 'Chequeos automáticos de calidad y coherencia de datos.\nReportes claros para cerrar incidencias antes de emitir.',
          en: 'Automated checks for data quality and consistency.\nClear reports to close issues before issuing deliverables.'
        },
        image: { src: '/images/digital/cases/model-qaqc.svg', alt: { es: 'Model automated data QAQC', en: 'Model automated data QAQC' } }
      }
    }
  ];
}
