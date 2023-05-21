import { Injectable } from '@angular/core';
import { Trabajos } from '../interfaces/trabajos';

@Injectable({
  providedIn: 'root'
})
export class ExpLaboralService {

  private expLaboral:Trabajos[]=[
    {
      cargo:"Gestor Integral Siniestros Accidentes Personales",
      organizacion:"La Segunda Seguros - Seguros de Personas",
      sector:"Accidentes Personales",
      lugar:"Casa Central - La Segunda",
      descripcionTareas:	"Llevo adelante la gestión de siniestros de Accidentes Personales sobre la cartera comercial de la provincia de Córdoba. Esto implica: Apertura de Siniestros, Gestión de Prestaciones de Salud y Prestaciones Dinerarias (Indemnizaciones, Renta Diaria, etc), Gestión General del Siniestro, Liquidación de Pagos a Prestadores. Actualmente me encuentro realizando tareas de Data Analytics con Google Looker Studio para la revisión de datos de siniestralidad en todo el país.", 
      continuaTrab: true,
      anioInicio: 2022,
      anioFin: 0,
    },
    {
    cargo:"Analista Senior",
    organizacion:"La Segunda Seguros - ART",
    sector:"Salud",
    lugar:"Centro Médico Laboral -  Unidad Sanitaria Móvil",
    descripcionTareas:"Fui responsable de la coordinación en terreno de exámenes médicos periódicos y otros servicios relacionados con la salud laboral, dentro del ámbito de la provincia de Santa Fe, efectuados en la Unidad Sanitaria Móvil de La Segunda. Como miembro del equipo, atendí el seguimiento del circuito administrativo; la comunicación comercial con clientes asegurados, beneficiarios, servicios de HyS y Médicos. Mi tarea principal estaba orientada al contacto con el cliente para la concreción de la obligaciones legales vinculadas a la Res. SRT 37/10, aportando propuestas de valor customizadas que agreguen significación comercial al servicio. Desarrollé el proceso de organización de operativos atendiendo la peculiaridad de los perfiles de clientes asegurados y de los canales vinculados que actúan como intermediarios en la gestión preventiva, así como a las características de la organización. La tarea requiere conocimiento de la normativa(SRT, SSN, Decreto 1338/96, etc), las características del seguro de Riesgos del Trabajo, la cartera de clientes y ámbito general de la medicina laboral (prestadores, proveedores, etc)",
    continuaTrab: false,
    anioInicio: 2018,
    anioFin: 2022,
  },
  {
    cargo:"Lider de Proyecto",
    organizacion:"La Segunda Seguros - ART",
    sector:"Riesgos del Trabajo",
    lugar:"Casa Central - La Segunda",
    descripcionTareas:"Me desempeñé como Lider de Proyecto, la administración de tareas (seguimiento de gestión, análisis de prioridades, confección de planes de contingencia). Participé en la confección, seguimiento, revisión y actualización de Planificación Estratégica del Proyecto, así como del Análisis de Viabilidad FInanciera. Supervisé el desarrollo de procesos vinculados con el mantenimiento y administración de la base de datos y documentación. Capacité personal de la organización en lo referente a base de datos, normativa aplicable y marco legal.",
    continuaTrab: false,
    anioInicio: 2017,
    anioFin: 2018,
  },
  {
    cargo:"Analista de Compras y Contrataciones",
    organizacion:"La Segunda Seguros - ART",
    sector:"Riesgos del Trabajo",
    lugar:"Casa Central - La Segunda",
    descripcionTareas:"Me desarrolle como Analista de Contrataciones, gestionando específicamente la contratación de todos los servicios profesionales vinculados a Auditores Médicos, Auditores en Higiene y Seguridad y Peritos de La Segunda ART. Participé en la adecuación impositiva en la contratación, específicamente en lo relacionado al Impuesto al Valor Agregado y sus particularidades respecto a Riesgos del Trabajo. Participé en la confección, análisis y ejecución del proceso de vida de la contratación y las reglas de negocio para su administración, entendiendo esto como el alta, mantenimiento y baja de proveedores. Negocié acuerdos de valores con proveedores orientados a las exigencias de cada sector, intentando generar alianzas con prestadores que vinculen el resultado de su gestión (y su retribución) con los del negocio. Colaboré junto a un equipo de trabajo en la confección y análisis, en un nivel de prefactibilidad, del proyecto de Unidad Sanitaria Móvil, presentado a la Gerencia de ART y Gerencia General del Grupo Asegurador La Segunda, aprobado en el año 2015.",
    continuaTrab: false,
    anioInicio: 2015,
    anioFin: 2017,
  },
  {
    cargo:"Analista de Pagos a Proveedores",
    organizacion:"La Segunda Seguros - ART",
    sector:"Riesgos del Trabajo",
    lugar:"Casa Central - La Segunda",
    descripcionTareas:"Liquidé mensualmente pagos por honorarios profesionales a Proveedores del sector, a la vez que realizaba lo propio por distintos consumos vinculados a las obligaciones preventivas de la ART. Analicé y participé en la construcción de un nuevo del circuito de administración de documentos y facturación del sector. Realicé informes periódicos para Gerencias y Jefatura. Colaboré en la planificación y presupuesto de acuerdo a los objetivos de cumplimiento. Trabajé en equipo para la concreción de tareas periódicas. Di soporte a proveedores respecto a los cambios normativos respecto a facturación (factura electrónica) y temas impositivos básicos (ganancias, retenciones, etc)",
    continuaTrab: false,
    anioInicio: 2012,
    anioFin: 2015,
  },
  {
    cargo:"Operador de Ingreso de Datos",
    organizacion:"La Segunda Seguros - ART",
    sector:"Riesgos del Trabajo",
    lugar:"Casa Central - La Segunda",
    descripcionTareas:"Me incorporé al Sector de Prevención para el ingreso de datos (data entry), específicamente en salud ocupacional (Relevamiento de Agentes de Riesgo). Asesoramiento básico a clientes externos respecto a obligaciones legales inherentes a Res. SRT 37/2010.-",
    continuaTrab: false,
    anioInicio: 2011,
    anioFin: 2012,
  }];




  constructor() {

    console.log('el servicio está insertado!');
   }

   getExpLaboral(){
     return this.expLaboral;
   }

}