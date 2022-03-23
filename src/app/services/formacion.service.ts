import { Injectable } from '@angular/core';
import { Carreras, Cursos } from '../interfaces/formacion';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  private educacionFormal: Carreras[]=[{
    institucion: "Escuela Superior de Comercio J.J. Urquiza",
    nivel: "Terciario",
    titulo: "Tecnico Superior en Desarrollo de Software",
    inicio: 2019,
    fin: 2021,
    estado: true,
    cursando: false
  },
  {
   institucion: "Universidad Nacional de Quilmes",
   nivel: "Universitario",
   titulo: "Contador Público Nacional",
   inicio: 2015,
   fin: 2015,
   estado: false,
   cursando: false
  },
  {
   institucion: "Universidad Nacional de Rosario",
   nivel: "Universitario",
   titulo: "Psicologo",
   inicio: 2008,
   fin: 2011,
   estado: false,
   cursando: false
  }
  ];
  
  private cursos:Cursos[]=[{
     titulo:"Cu.Ba.S – Curso Básico de Capacitación en Seguros",
     descripcion:"Organizado por la División Recursos Humanos – Área Gestión Humana (RRHH) del Grupo Asegurador La Segunda. Duración de 6 jornadas.",
     lugar:"Rosario",
     anio: 2012,
  },
  {  
    titulo:"XV Encuentro de Auditores Técnicos Externos, Organizador/Asistente",
    descripcion:"Responsable de la organización y logística para la realización del evento, sector Prevención. El encuentro tuvo como fin la puesta en común de problemáticas vinculadas al rol del profesional en Higiene y Seguridad y las obligaciones de las Aseguradoras de Riesgo del Trabajo.",
    lugar:"Rosario",
    anio: 2013,
  },
  {
    titulo:"XVI Encuentro de Auditores Técnicos Externos”, Organizador/Expositor",
    descripcion:"Organización y logística para la realización del evento, sector Prevención. El encuentro tuvo como fin la puesta en común de los cambios normativos en materia de higiene y seguridad en el trabajo, realicé una exposición del nuevo circuito para la organización de documentos y facturación",
    lugar:"Victoria, Entre Ríos",
    anio: 2014,
  },
  {
    titulo:"Laboratorio de Google for Work",
    descripcion:"Experiencia de un proceso completo de innovación, transformar problemas en ideas y luego en prototipos. Desarrollar las habilidades necesarias para convertir trabajo en soluciones. Duración de 4hs, dictado por Latinware (google partner)",
    lugar:"Buenos Aires",
    anio: 2015,
    },
    {
      titulo:"Aspectos subjetivos del accidente in itinere",
      descripcion:"Conceptualizar el Accidente In Itinere a fin de  reconocer los factores psicológicos y cognitivos que intervienen y reflexionar acerca de los procesos distractores sociales. Charla de sensibilización a fin de conceptualizar los distintos aspectos que intervienen en los Accidentes In Itinere.",
      lugar:"Rosario",
      anio: 2015,
    },
      {
        titulo:"Facturación Sanatorial",
        descripcion:"Solicitado por Jefatura Sector Contrataciones ART- Manejo del Nomenclador Nacional de Prestaciones Médicas, conocimientos teórico-prácticos sobre facturación; herramientas para facturar, liquidar o autorizar prestaciones realizadas en internación y/o en forma ambulatoria. Contenidos sobre admisión, informes, turnos, facturación, débitos , autorizaciones, atención al afiliado, etc. Incorporación de vocabulario específico sobre el tema de referencia, aprendizaje sobre los circuitos administrativos sanatoriales. Durante diez encuentros, organizada por el Instituto de Capacitación Rosario, de 1.5hs cada uno",
        lugar:"Rosario",
        anio: 2015,
      },
      {
        titulo:"Laboratorio de Ideas",
        descripcion:"Sensibilización sobre el concepto de innovación y espíritu emprendedor expresado hacia el interior de la Organización. Desarrollo y presentación de una propuesta de solución para la problemática asignada por facilitadores y lideres del negocio. Durante cinco encuentros, organizada por Gestión Humana - RRHH junto a la Asociación Civil Creando Futuro",
        lugar:"Rosario",
        anio: 2016,
      },
      {
        titulo:"Manejo Defensivo",
        descripcion:"Desarrollo de la conciencia preventiva respecto al manejo, tendiente a reducir el riesgo de accidentes viales. Dictado por instructores del CESVI, durante una jornada de 8hs.",
        lugar:"Pilar",
        anio: 2017,
      },
      {
        titulo:"Adecuación a la nueva Versión de la Norma ISO 9001:2015",
        descripcion:"Conocer los cambios y principales hitos del standard ISO 9001:2015. Interpretar los requisitos y su impacto en el Sistema de Gestión de Calidad. Identificar los riesgos de los procesos. Conocer cómo se deben gestionar los riesgos de los procesos. Dictado por Organización y Procesos, en un encuentro de 3hs",
        lugar:"Rosario",
        anio: 2017,
      },
      {
        titulo:"Programa de desarrollo de habilidades para el trabajo colaborativo y la gestión de proyectos",
        descripcion:"Potenciar un conjunto de habilidades blandas que pongan en valor el trabajo colaborativo y la gestión de proyectos, integrando los saberes con los que cuenta el grupo, dando así lugar al aprendizaje y facilitar el logro de las metas previstas. Dictado por la Asociación Civil Creando Futuro, coordinado por Gestión Humana (RRHH), en tres encuentros presenciales de 8hs de duración",
        lugar:"Rosario",
        anio: 2018,
      },
      {
        titulo:"Programa BGP",
        descripcion:"Programa de capacitación destinado a poder relacionarnos con pares de otras entidades, ampliando la percepción del negocio hacia una mirada de grupo (Capacitación conjunta de ACA Salud, ACA, Coovaeco, La Segunda), conocer fortalezas y oportunidades de desarrollo. Incorporar herramientas para mejorar la eficacia de las comunicaciones, logrando mejores y más claros acuerdos en pos de la mejora continua y el desarrollo de todos. Adquirir herramientas de gestión acordes a nuestros desafíos (reuniones y rutinas de seguimiento, feedback, análisis y seguimiento de resultados). Dictado por la Fundación Nodos, en cinco encuentros de 8hs",
        lugar:"Rosario",
        anio: 2018,
      },
];
  constructor() {}

  getCarreras(){
    return this.educacionFormal;
  }

  getCursos(){
    return this.cursos.reverse()
  }
  
}
