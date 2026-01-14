import Template from "./models/Template.js";

/* =====================
   ESTADO GLOBAL
===================== */
let templates = [];
let isGridView = false;

/* =====================
   DOM
===================== */
const container = document.getElementById("templatesContainer");
const addBtn = document.getElementById("addTemplateBtn");
const toggleViewBtn = document.getElementById("toggleViewBtn");

/* =====================
   FUNCIONES DE ESTADO
===================== */
function addTemplate(template) {
  templates.push(template);
  renderTemplates();
}

function removeTemplate(index) {
  templates.splice(index, 1);
  renderTemplates();
}

/* =====================
   RENDER GLOBAL
===================== */
function renderTemplates() {
  container.innerHTML = "";
  container.className = isGridView ? "grid" : "";

  templates.forEach((template, index) => {
    const card = template.render();

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.onclick = () => removeTemplate(index);

    card.appendChild(deleteBtn);
    container.appendChild(card);
  });
}

/* =====================
   EVENTOS
===================== */
addBtn.addEventListener("click", () => {
  const template = new Template(
    title.value,
    message.value,
    hashtag.value,
    category.value,
    author.value
  );

  addTemplate(template);
});

toggleViewBtn.addEventListener("click", () => {
  isGridView = !isGridView;
  renderTemplates();
});
