// utils/theme.ts

export function toggleTheme() {
  const html = document.documentElement;
  const isLight = html.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

export function initTheme() {
  if (typeof window === "undefined") return;

  const saved = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const shouldBeLight = saved === "light" || (!saved && prefersLight);

  document.documentElement.classList.toggle("light", shouldBeLight);
}
