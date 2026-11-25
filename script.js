(() => {
  const link = document.getElementById("cargar-tablero");
  const template = document.getElementById("iframe-template");
  const reporte = document.getElementById("reporte");
  const poster = document.getElementById("poster");

  if (!link || !template || !reporte) return;

  link.addEventListener("click", (event) => {
    // Deja que Ctrl/Cmd/Shift/Alt + clic abran el tablero en otra pestaña.
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    if (poster && poster.classList.contains("hidden")) return;

    event.preventDefault();

    const iframe = template.content.cloneNode(true);
    reporte.appendChild(iframe);
    if (poster) poster.classList.add("hidden");
    link.setAttribute("aria-expanded", "true");

    // El enlace desaparece con el póster; mueve el foco al tablero.
    reporte.setAttribute("tabindex", "-1");
    reporte.focus({ preventScroll: true });
  });
})();
