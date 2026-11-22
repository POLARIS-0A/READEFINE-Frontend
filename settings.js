(function () {
  const STORAGE_KEY = "readefine_settings";
  const fontClasses = [
    "readefine-font-small",
    "readefine-font-medium",
    "readefine-font-large",
    "readefine-font-extra-large",
  ];

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") || {};
    } catch {
      return {};
    }
  }

  function apply(settings) {
    const root = document.documentElement;
    const fontSize = settings["font-size"] || "Medium";
    root.classList.remove(...fontClasses);
    root.classList.add({
      Small: "readefine-font-small",
      Medium: "readefine-font-medium",
      Large: "readefine-font-large",
      "Extra large": "readefine-font-extra-large",
    }[fontSize] || "readefine-font-medium");

    let theme = settings.theme || "Light";
    if (theme === "System default") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "Dark" : "Light";
    }
    root.classList.toggle("readefine-dark", theme === "Dark");
    root.dataset.theme = theme.toLowerCase();

    const languageMap = {
      English: "en",
      Spanish: "es",
      French: "fr",
      German: "de",
    };
    root.lang = languageMap[settings.language] || "en";
  }

  function save(settings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    apply(settings);
  }

  apply(load());

  window.ReaDefineSettings = { load, save, apply };

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener?.("change", () => {
    const saved = load();
    if (saved.theme === "System default") apply(saved);
  });
})();
