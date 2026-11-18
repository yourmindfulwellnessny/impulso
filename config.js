/* =====================================================
   CONFIGURACIÓN DE IMPULSO — solo cambia lo que está aquí
   ===================================================== */
window.CONFIG = {
  // PRECIO del programa completo (en dólares).
  // Si lo dejas en null, la página invita a reservar tiempo con Mónica en el Wellness Store.
  precio: 375,

  // PAGO EN CUOTAS (opcional). Si "activo" es false, la opción no aparece.
  cuotas: { activo: false, numero: 2, monto: 0 },

  // ENLACES DE PAGO DE STRIPE (Payment Links)
  // Si un enlace está vacío "", el botón de tarjeta abre WhatsApp para coordinar el pago.
  // En Stripe, en "After payment" pon esta dirección:
  //   https://www.mindfulbymonica.com/impulso/gracias.html?session_id={CHECKOUT_SESSION_ID}
  stripe: { completo: "https://book.stripe.com/fZu9AU4wN1BWck0e4SenS0t", cuotas: "" },

  // Zelle
  zelle: { nombre: "Mindful Wellness & Coaching LLC", numero: "201-679-9969" },

  // URL de Google Apps Script para registrar inscripciones (termina en /exec). Vacía = no se registra.
  sheetUrl: "",

  // WhatsApp de Mindful Wellness (solo números, con 1 al inicio)
  whatsapp: "12016799969",

  // Página del programa Evolución (para la comparación)
  evolucion: "https://www.mindfulbymonica.com/evolucion/"
};
