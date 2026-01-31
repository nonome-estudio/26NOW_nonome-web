import type { CardItem } from '../../types/content';

export function getArchitectureProjects(): CardItem[] {
  return [
    {
      kind: 'project',
      item: {
        id: 'arch-001',
        code: 'A001',
        title: { es: 'Proyecto 01', en: 'Project 01' },
        description: {
          es: 'Descripción breve de ejemplo. Sustituir por contenido real.',
          en: 'Short placeholder description. Replace with real content.'
        },
        image: {
          src: '/placeholder/card.svg',
          alt: { es: 'Imagen de ejemplo', en: 'Placeholder image' }
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
