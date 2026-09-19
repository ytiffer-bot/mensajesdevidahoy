const CLOSING = "Recuerda: siempre hay un mensaje de vida para cada vida";

const messages = [
  { day: 1, topic: "Soledad", title: "No tienes que caminar sola", text: ["Aunque hoy el silencio parezca muy grande, tu vida sigue siendo vista, amada y sostenida. Hay temporadas en las que no vemos a nadie a nuestro lado, pero eso no significa que estemos abandonadas.", "Respira. Da un paso pequeño. Dios puede usar una llamada, una oración o un nuevo amanecer para recordarte que todavía hay compañía y propósito en tu camino."] },
  { day: 2, topic: "Duelo", title: "Tu tristeza también merece ternura", text: ["No tienes que apresurarte a estar bien. Extrañar a quien amas no es falta de fe; es la huella de un amor que fue real.", "Permítete llorar, descansar y recordar. El dolor no siempre desaparece de golpe, pero puede aprender a caminar junto a la esperanza sin apagarla."] },
  { day: 3, topic: "Preocupación", title: "Hoy solo carga lo de hoy", text: ["Tu mente quiere resolver mañana, la próxima semana y todo lo que podría salir mal. Pero tu corazón no fue creado para cargar tantos días a la vez.", "Vuelve a este momento. Haz lo que sí está en tus manos y entrégale a Dios lo que todavía no puedes controlar."] },
  { day: 4, topic: "Espera", title: "La espera no está vacía", text: ["Aunque parezca que nada se mueve, también hay raíces creciendo donde tus ojos no alcanzan a ver. Lo invisible no es lo mismo que lo inexistente.", "Sigue cuidando tu fe. La espera puede estar formando en ti la fuerza que necesitarás para sostener aquello que has pedido."] },
  { day: 5, topic: "Nuevos comienzos", title: "Puedes comenzar otra vez", text: ["No importa cuántas veces hayas tenido que recoger tus pedazos. Volver a empezar no borra tu historia; demuestra que la historia todavía continúa.", "Hoy no necesitas tener todo resuelto. Solo necesitas valentía para dar el próximo paso."] },
  { day: 6, topic: "Ansiedad", title: "Respira antes de creerle al miedo", text: ["La ansiedad habla rápido y anuncia finales que todavía no han ocurrido. Haz una pausa antes de aceptar cada pensamiento como una verdad.", "Inhala calma, exhala tensión y repite: este momento pasará. No estás obligada a resolver tu vida completa en esta hora."] },
  { day: 7, topic: "Fortaleza", title: "También descansar es ser fuerte", text: ["La fortaleza no siempre se ve como seguir corriendo. A veces se parece a reconocer que estás cansada, pedir ayuda y permitirte parar.", "Descansar no te hace débil ni menos valiosa. Te devuelve espacio para sanar y continuar con un corazón más claro."] },
  { day: 8, topic: "Familia", title: "Ama sin cargarlo todo", text: ["Puedes amar profundamente a tu familia sin convertirte en la solución de cada problema. Hay cargas que te corresponden acompañar, pero no controlar.", "Ora, aconseja con amor y establece límites sanos. Dejar espacio para que otros crezcan también es una forma de amar."] },
  { day: 9, topic: "Propósito", title: "Tu vida todavía tiene propósito", text: ["Quizás una puerta se cerró y con ella parecía irse tu dirección. Pero tu propósito es más grande que un puesto, una etapa o la opinión de alguien.", "Tus dones siguen contigo. Empieza a usarlos donde estás y permite que el camino se revele paso a paso."] },
  { day: 10, topic: "Preocupación", title: "No todo depende de ti", text: ["Has hecho cuentas, imaginado soluciones y repasado cada posibilidad. Ahora es tiempo de reconocer que hay asuntos que solo Dios puede ordenar.", "Cumple tu parte con responsabilidad y suelta la culpa de no poder hacerlo todo. La paz también comienza cuando entregas el control."] },
  { day: 11, topic: "Soledad", title: "Tu presencia tiene valor", text: ["Tal vez te sientes olvidada porque no recibiste esa llamada, invitación o respuesta. Pero el silencio de otras personas no determina tu valor.", "Tu presencia trae algo único a este mundo. Trátate hoy con el mismo cuidado que ofrecerías a alguien que amas."] },
  { day: 12, topic: "Espera", title: "No confundas demora con rechazo", text: ["Una respuesta tardía puede hacerte pensar que la puerta se cerró para siempre. Sin embargo, algunos procesos necesitan tiempo para acomodar personas, lugares y corazones.", "Mientras esperas, prepárate. Que cuando llegue la oportunidad te encuentre creciendo y lista para recibirla."] },
  { day: 13, topic: "Duelo", title: "Los recuerdos pueden volverse abrigo", text: ["Hoy un recuerdo puede doler más que ayer. No luches contra él; míralo con ternura y agradece lo bueno que dejó en tu vida.", "Con el tiempo, lo que hoy aprieta tu pecho también podrá convertirse en un lugar de gratitud. El amor vivido no se pierde."] },
  { day: 14, topic: "Nuevos comienzos", title: "Haz espacio para lo nuevo", text: ["A veces pedimos una nueva temporada mientras seguimos abrazadas a lo que ya terminó. Soltar no significa que aquello no importó; significa que reconoces que cumplió su tiempo.", "Abre tus manos. Lo nuevo necesita espacio para llegar y libertad para crecer."] },
  { day: 15, topic: "Fe", title: "Una fe pequeña también sostiene", text: ["No necesitas sentirte invencible para seguir creyendo. Hay días en los que la fe es apenas una oración entrecortada: ‘Dios, ayúdame’. Y eso basta para comenzar.", "Entrégale lo poco que tienes hoy. En manos de Dios, una semilla de fe puede sostener un camino entero."] },
  { day: 16, topic: "Ansiedad", title: "Regresa al lugar seguro", text: ["Cuando tus pensamientos corran sin descanso, vuelve a lo sencillo: siente tus pies en el suelo, nombra lo que ves y escucha tu respiración.", "Luego recuerda una verdad que te sostenga. No eres el ruido de tu mente; eres una vida amada que puede volver poco a poco a la calma."] },
  { day: 17, topic: "Familia", title: "Tus oraciones dejan semillas", text: ["Puede que todavía no veas cambios en tus hijos o en tu familia, pero cada palabra dicha con amor y cada oración sincera deja una semilla.", "No intentes forzar el fruto. Sigue sembrando con paciencia, coherencia y esperanza; Dios conoce el tiempo de cada corazón."] },
  { day: 18, topic: "Fortaleza", title: "Has sobrevivido días difíciles", text: ["Mira hacia atrás con compasión: hubo momentos que pensaste que no podrías soportar, y aun así llegaste hasta aquí.", "No minimices tu recorrido. La misma gracia que te sostuvo entonces puede darte fuerza para atravesar este día."] },
  { day: 19, topic: "Propósito", title: "Lo pequeño también transforma", text: ["No esperes una gran plataforma para hacer el bien. Un mensaje, una visita, una comida compartida o una oración pueden cambiar el día de alguien.", "Tu propósito también vive en los actos sencillos. Haz hoy con amor lo que tienes delante."] },
  { day: 20, topic: "Preocupación", title: "La respuesta no tiene que llegar hoy", text: ["Querer una respuesta inmediata es humano, especialmente cuando hay mucho en juego. Pero exigir certeza puede robarte la paz que necesitas para pensar con claridad.", "Permite que hoy sea un día de proceso. Puedes avanzar aun sin conocer todo el camino."] },
  { day: 21, topic: "Soledad", title: "Atrévete a abrir una ventana", text: ["La soledad puede convencernos de cerrar puertas para no volver a sentir rechazo. Sin embargo, la conexión comienza con un gesto pequeño y valiente.", "Escribe a alguien seguro, sal a un lugar donde haya vida o comparte cómo te sientes. Abrir una ventana puede dejar entrar la luz."] },
  { day: 22, topic: "Espera", title: "Sigue floreciendo mientras esperas", text: ["Tu vida no está en pausa porque algo todavía no llega. Hay conversaciones, aprendizajes y momentos hermosos que merecen ser vividos ahora.", "No entregues todo tu presente a una respuesta futura. Florece donde estás, incluso mientras esperas."] },
  { day: 23, topic: "Duelo", title: "Está bien sonreír otra vez", text: ["A veces la alegría regresa y trae consigo culpa. Pero sonreír no traiciona a quien extrañas ni borra lo que viviste.", "Permitir que la luz vuelva también honra el amor recibido. Puedes recordar y, al mismo tiempo, volver a vivir."] },
  { day: 24, topic: "Nuevos comienzos", title: "No llegas tarde a tu vida", text: ["Tal vez comparas tu camino con el de otros y sientes que perdiste tiempo. Pero tu historia no tiene que seguir el calendario de nadie más.", "Hoy sigue siendo una buena fecha para aprender, sanar, intentar y comenzar. Tu próximo capítulo no necesita permiso del pasado."] },
  { day: 25, topic: "Gratitud", title: "Busca una luz pequeña", text: ["No todos los días traen grandes noticias, pero casi todos guardan una luz pequeña: una conversación, un techo, un café caliente o una fuerza que apareció a tiempo.", "Nombrar esa luz no niega tus dificultades. Solo recuerda a tu corazón que la oscuridad nunca ocupa todo el espacio."] },
  { day: 26, topic: "Fe", title: "Dios también obra en el silencio", text: ["Hay momentos en los que oras y no sientes nada. No tomes el silencio como señal de ausencia.", "La fe aprende a descansar aun cuando no recibe explicaciones. Sigue hablando con Dios con honestidad; tu oración no se pierde."] },
  { day: 27, topic: "Familia", title: "Tu casa puede volver a respirar paz", text: ["Los conflictos pueden llenar cada rincón de tensión, pero una conversación humilde puede comenzar a cambiar el ambiente.", "Escucha antes de responder, habla sin herir y reconoce lo que te corresponde. La paz se construye con decisiones pequeñas y repetidas."] },
  { day: 28, topic: "Fortaleza", title: "No estás rota; estás sanando", text: ["Lo que viviste dejó marcas, pero las marcas no significan que quedaste destruida. Hablan de una herida que está aprendiendo a cerrar.", "Sé paciente con tus días sensibles. Sanar no es una línea recta, y cada paso cuenta, incluso cuando parece pequeño."] },
  { day: 29, topic: "Propósito", title: "Tu testimonio puede encender otra vida", text: ["Aquello que superaste no tiene que quedarse escondido por vergüenza. Contado con sabiduría, puede convertirse en una lámpara para alguien que todavía atraviesa la noche.", "Tu historia no termina en el dolor. También puede hablar de gracia, aprendizaje y esperanza."] },
  { day: 30, topic: "Nuevos comienzos", title: "Lo mejor no tiene que quedar atrás", text: ["Has llegado al final de estos treinta días, pero no al final de lo que Dios puede hacer contigo. Cada mañana trae una invitación a vivir con intención.", "Lleva contigo lo aprendido, comparte la esperanza y recibe el futuro con las manos abiertas. Todavía hay vida por descubrir."] }
];

const grid = document.querySelector("#message-grid");
const filtersEl = document.querySelector("#filters");
const searchEl = document.querySelector("#search");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#message-dialog");
const copyStatus = document.querySelector("#copy-status");
let activeTopic = "Todos";
let activeIndex = 0;
let socialMode = "post";

const topics = ["Todos", ...new Set(messages.map((message) => message.topic))];

function cardTemplate(message) {
  return `
    <button class="message-card" type="button" data-day="${message.day}" aria-label="Abrir Día ${message.day}: ${message.title}">
      <span class="card-top">
        <span class="day-label">Día ${String(message.day).padStart(2, "0")}</span>
        <span class="topic-label">${message.topic}</span>
      </span>
      <h3>${message.title}</h3>
      <p>${message.text[0]}</p>
      <span class="card-open">Leer mensaje →</span>
    </button>`;
}

function createFilters() {
  filtersEl.innerHTML = topics.map((topic) => `
    <button class="filter-chip" type="button" data-topic="${topic}" aria-pressed="${topic === activeTopic}">${topic}</button>
  `).join("");
}

function renderMessages() {
  const query = searchEl.value.trim().toLocaleLowerCase("es");
  const visible = messages.filter((message) => {
    const inTopic = activeTopic === "Todos" || message.topic === activeTopic;
    const haystack = `${message.title} ${message.topic} ${message.text.join(" ")}`.toLocaleLowerCase("es");
    return inTopic && (!query || haystack.includes(query));
  });

  grid.innerHTML = visible.map(cardTemplate).join("");
  resultCount.textContent = visible.length;
  emptyState.hidden = visible.length !== 0;
}

function openMessage(day) {
  activeIndex = messages.findIndex((message) => message.day === Number(day));
  if (activeIndex < 0) return;
  const message = messages[activeIndex];
  document.querySelector("#dialog-day").textContent = `Día ${message.day}`;
  document.querySelector("#dialog-topic").textContent = message.topic;
  document.querySelector("#dialog-title").textContent = message.title;
  document.querySelector("#dialog-text").innerHTML = message.text.map((paragraph) => `<p>${paragraph}</p>`).join("");
  document.querySelector("#dialog-position").textContent = `${message.day} / ${messages.length}`;
  copyStatus.textContent = "";
  document.querySelector("#social-status").textContent = "";
  updateSocialEditor();
  if (!dialog.open) dialog.showModal();
}

function moveMessage(direction) {
  activeIndex = (activeIndex + direction + messages.length) % messages.length;
  openMessage(messages[activeIndex].day);
}

function currentCopyText() {
  const message = messages[activeIndex];
  return `Día ${message.day} — ${message.title}\n\n${message.text.join("\n\n")}\n\n${CLOSING}`;
}

async function copyMessage() {
  const text = currentCopyText();
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  document.querySelector("#copy-message span").textContent = "¡Copiado!";
  copyStatus.textContent = "El mensaje está listo para pegar y compartir.";
  window.setTimeout(() => {
    document.querySelector("#copy-message span").textContent = "Copiar texto";
  }, 1800);
}

function socialText(message, mode) {
  if (mode === "reel") {
    return `TEXTO EN PANTALLA:\nDía ${message.day} — ${message.title}\n\nNARRACIÓN:\n${message.text.join("\n\n")}\n\nCIERRE EN PANTALLA:\n${CLOSING}.\n\nLLAMADO A LA ACCIÓN:\nEncuentra los 30 mensajes en el enlace de mi perfil.`;
  }
  const topicTag = message.topic.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
  const pageUrl = window.location.href.split("#")[0].split("?")[0];
  return `${message.title}\n\n${message.text.join("\n\n")}\n\n${CLOSING}.\n\nEncuentra los 30 mensajes aquí:\n${pageUrl}\n\n#MensajesDeVida #PalabrasDeEsperanza #${topicTag}`;
}

function updateSocialEditor() {
  document.querySelector("#social-editor").value = socialText(messages[activeIndex], socialMode);
}

async function copySocialText() {
  const editor = document.querySelector("#social-editor");
  const status = document.querySelector("#social-status");
  try {
    await navigator.clipboard.writeText(editor.value);
  } catch {
    editor.focus();
    editor.select();
    document.execCommand("copy");
  }
  status.textContent = "¡Listo! Ya puedes pegarlo en Facebook o Instagram.";
}

async function shareSocialText() {
  const editor = document.querySelector("#social-editor");
  const status = document.querySelector("#social-status");
  if (navigator.share) {
    try {
      await navigator.share({ title: messages[activeIndex].title, text: editor.value });
      status.textContent = "Contenido preparado para compartir.";
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  await copySocialText();
  status.textContent = "Texto copiado. Abre Facebook o Instagram y pégalo allí.";
}

function roundedRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.roundRect(x, y, width, height, radius);
  context.fill();
}

function wrapCanvasText(context, text, x, y, maxWidth, lineHeight, maxY) {
  const paragraphs = text.split("\n");
  let currentY = y;
  for (const paragraph of paragraphs) {
    const words = paragraph.split(/\s+/).filter(Boolean);
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (context.measureText(test).width > maxWidth && line) {
        if (currentY + lineHeight > maxY) return currentY;
        context.fillText(line, x, currentY);
        currentY += lineHeight;
        line = word;
      } else {
        line = test;
      }
    }
    if (line && currentY + lineHeight <= maxY) {
      context.fillText(line, x, currentY);
      currentY += lineHeight;
    }
    currentY += Math.round(lineHeight * .38);
  }
  return currentY;
}

async function downloadSocialCard() {
  const message = messages[activeIndex];
  const isReel = socialMode === "reel";
  const width = 1080;
  const height = isReel ? 1920 : 1350;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");

  if (document.fonts?.ready) await document.fonts.ready;

  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#fffaf3");
  gradient.addColorStop(.55, "#f8e8e7");
  gradient.addColorStop(1, "#edced1");
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  context.globalAlpha = .2;
  context.fillStyle = "#d99aaa";
  context.beginPath();
  context.arc(960, 90, 240, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#b78a46";
  context.beginPath();
  context.arc(20, height - 30, 210, 0, Math.PI * 2);
  context.fill();
  context.globalAlpha = 1;

  context.fillStyle = "rgba(255,253,249,.94)";
  roundedRect(context, 70, 70, 940, height - 140, 46);

  context.fillStyle = "#7f3552";
  context.font = "700 30px 'DM Sans', sans-serif";
  context.letterSpacing = "3px";
  context.fillText(`DÍA ${String(message.day).padStart(2, "0")}  ·  ${message.topic.toUpperCase()}`, 130, 155);
  context.letterSpacing = "0px";

  context.fillStyle = "#5d243c";
  context.font = `${isReel ? 700 : 600} ${isReel ? 76 : 64}px 'Playfair Display', Georgia, serif`;
  const titleBottom = wrapCanvasText(context, message.title, 130, 260, 820, isReel ? 92 : 78, isReel ? 610 : 475);

  context.fillStyle = "#b78a46";
  context.fillRect(130, titleBottom + 8, 110, 6);

  context.fillStyle = "#4e4246";
  const bodySize = isReel ? 45 : (message.text.join(" ").length > 350 ? 35 : 39);
  context.font = `500 ${bodySize}px 'DM Sans', sans-serif`;
  const bodyStart = titleBottom + 78;
  const closingTop = height - (isReel ? 410 : 300);
  wrapCanvasText(context, message.text.join("\n"), 130, bodyStart, 820, Math.round(bodySize * 1.45), closingTop - 40);

  context.fillStyle = "#fbf3e7";
  roundedRect(context, 110, closingTop, 860, isReel ? 190 : 150, 26);
  context.fillStyle = "#b78a46";
  context.fillRect(110, closingTop, 8, isReel ? 190 : 150);
  context.fillStyle = "#5d243c";
  context.font = `italic 600 ${isReel ? 39 : 34}px 'Playfair Display', Georgia, serif`;
  wrapCanvasText(context, CLOSING, 150, closingTop + 55, 760, isReel ? 50 : 44, closingTop + (isReel ? 170 : 135));

  context.fillStyle = "#7f3552";
  context.font = "700 27px 'DM Sans', sans-serif";
  context.fillText("MENSAJES DE VIDA PARA CADA VIDA", 130, height - 115);

  const link = document.createElement("a");
  link.download = `mensaje-dia-${String(message.day).padStart(2, "0")}-${isReel ? "reel" : "publicacion"}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  document.querySelector("#social-status").textContent = "Tarjeta descargada. Ya puedes subirla a Facebook o Instagram.";
}

function setTodayMessage() {
  const day = ((new Date().getDate() - 1) % messages.length) + 1;
  const message = messages[day - 1];
  document.querySelector("#today-day").textContent = String(day).padStart(2, "0");
  document.querySelector("#today-title").textContent = message.title;
  document.querySelector("#today-preview").textContent = message.text[0];
  document.querySelector("#today-open").dataset.day = day;
}

filtersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-topic]");
  if (!button) return;
  activeTopic = button.dataset.topic;
  filtersEl.querySelectorAll("[data-topic]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
  renderMessages();
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-day]");
  if (card) openMessage(card.dataset.day);
});

searchEl.addEventListener("input", renderMessages);
document.querySelector("#clear-filters").addEventListener("click", () => {
  activeTopic = "Todos";
  searchEl.value = "";
  createFilters();
  renderMessages();
  searchEl.focus();
});
document.querySelector("#today-open").addEventListener("click", (event) => openMessage(event.currentTarget.dataset.day));
document.querySelector("[data-open-day]").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#mensajes").scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => openMessage(event.currentTarget.dataset.openDay), 350);
});
document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
document.querySelector("#prev-message").addEventListener("click", () => moveMessage(-1));
document.querySelector("#next-message").addEventListener("click", () => moveMessage(1));
document.querySelector("#copy-message").addEventListener("click", copyMessage);
document.querySelector(".format-switch").addEventListener("click", (event) => {
  const button = event.target.closest("[data-social-mode]");
  if (!button) return;
  socialMode = button.dataset.socialMode;
  document.querySelectorAll("[data-social-mode]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
  updateSocialEditor();
});
document.querySelector("#copy-social").addEventListener("click", copySocialText);
document.querySelector("#share-social").addEventListener("click", shareSocialText);
document.querySelector("#download-card").addEventListener("click", downloadSocialCard);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener("keydown", (event) => {
  if (!dialog.open) return;
  if (event.key === "ArrowLeft") moveMessage(-1);
  if (event.key === "ArrowRight") moveMessage(1);
});

createFilters();
renderMessages();
setTodayMessage();

window.MensajesDeVida = { messages, topics, renderMessages, openMessage, currentCopyText, socialText };
