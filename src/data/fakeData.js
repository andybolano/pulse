export const alarmas = [
  { id: 1,  nombre: "Hidratación matutina",  categoria: "Salud",          frecuencia: "Diaria",      proximaVez: "Hoy 12:00",  estado: "Activa"  },
  { id: 2,  nombre: "Meditación",             categoria: "Bienestar",      frecuencia: "Diaria",      proximaVez: "Hoy 08:00",  estado: "Activa"  },
  { id: 3,  nombre: "Gym - Cardio",           categoria: "Ejercicio",      frecuencia: "Lu/Mié/Vie",  proximaVez: "Vie 6:00",   estado: "Activa"  },
  { id: 4,  nombre: "R. Semanal",             categoria: "Productividad",  frecuencia: "Semanal",     proximaVez: "Vie 17:00",  estado: "Activa"  },
  { id: 5,  nombre: "Vitaminas",              categoria: "Salud",          frecuencia: "Diaria",      proximaVez: "Ayer 8:00",  estado: "Pausada" },
  { id: 6,  nombre: "Lectura nocturna",       categoria: "Personal",       frecuencia: "Diaria",      proximaVez: "Hoy 21:30",  estado: "Pausada" },
  { id: 7,  nombre: "Revisión de correos",    categoria: "Trabajo",        frecuencia: "L-V",         proximaVez: "Hoy 09:00",  estado: "Activa"  },
  { id: 8,  nombre: "Pago de servicios",      categoria: "Finanzas",       frecuencia: "Mensual",     proximaVez: "15 Mar",     estado: "Vencida" },
  { id: 9,  nombre: "Llamada a familia",      categoria: "Personal",       frecuencia: "Semanal",     proximaVez: "Dom 18:00",  estado: "Pausada" },
  { id: 10, nombre: "Revisión metas",         categoria: "Personal",       frecuencia: "Mensual",     proximaVez: "01 Abr",     estado: "Activa"  },
];

export const eventosCalendario = [
  { dia: "Lun", hora: "07:00", titulo: "Meditación", tipo: "alarma" },
  { dia: "Lun", hora: "09:00", titulo: "Correos", tipo: "alarma" },
  { dia: "Lun", hora: "10:00", titulo: "Reunión equipo", tipo: "evento" },
  { dia: "Lun", hora: "12:00", titulo: "Hidratación", tipo: "alarma" },
  { dia: "Mar", hora: "07:00", titulo: "Meditación", tipo: "alarma" },
  { dia: "Mar", hora: "09:00", titulo: "Correos", tipo: "alarma" },
  { dia: "Mar", hora: "14:00", titulo: "Pausa activa", tipo: "alarma" },
  { dia: "Mié", hora: "07:00", titulo: "Meditación", tipo: "alarma" },
  { dia: "Mié", hora: "11:00", titulo: "Call cliente", tipo: "evento" },
  { dia: "Mié", hora: "12:00", titulo: "Hidratación", tipo: "alarma" },
  { dia: "Jue", hora: "09:00", titulo: "Correos", tipo: "alarma" },
  { dia: "Jue", hora: "16:00", titulo: "Review código", tipo: "evento" },
  { dia: "Vie", hora: "07:00", titulo: "Meditación", tipo: "alarma" },
  { dia: "Vie", hora: "09:00", titulo: "Correos", tipo: "alarma" },
  { dia: "Vie", hora: "17:00", titulo: "Retro sprint", tipo: "evento" },
];

export const sugerenciasPulse = [
  { titulo: "Pausa para estirar", razon: "Llevas 3h seguidas trabajando", hora: "15:30" },
  { titulo: "Hidratación vespertina", razon: "Tu próxima alarma de agua es tarde", hora: "16:00" },
  { titulo: "Revisar metas semanales", razon: "Es viernes — buen momento para reflexionar", hora: "17:00" },
];

export const historialStats = {
  alertasCompletadas: 29,
  tasaCumplimiento: 82,
  rachaActual: 6,
};

export const historialSemanas = [
  { semana: "Semana 1", pct: 75 },
  { semana: "Semana 2", pct: 80 },
  { semana: "Semana 3", pct: 78 },
  { semana: "Semana 4", pct: 78 },
];

export const historialDias = [
  { dia: "Lun", pct: 100 },
  { dia: "Mar", pct: 80 },
  { dia: "Mié", pct: 60 },
  { dia: "Jue", pct: 90 },
  { dia: "Vie", pct: 70 },
  { dia: "Sáb", pct: 50 },
  { dia: "Dom", pct: 85 },
];

export const categorias = ["Salud", "Bienestar", "Ejercicio", "Productividad", "Trabajo", "Personal", "Finanzas"];

export const frecuencias = ["Diaria", "Semanal", "Mensual", "L-V", "Cada 2h", "Personalizada"];
