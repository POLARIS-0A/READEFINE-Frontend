(function () {
  const pageType = document.documentElement.dataset.page;
  const pages = pageType === "lesson" ? window.LESSONS : window.EXAMS;
  const lessonId = Number(new URLSearchParams(window.location.search).get("id"));
  const page = pages && pages[lessonId];
  const app = document.getElementById("app");

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function sidebar(activePage) {
    const lessonActive = activePage === "lesson" ? ' class="active"' : "";
    const examActive = activePage === "exam" ? ' class="active"' : "";

    return `
      <aside class="sidebar" id="sidebar">
        <div class="sidebar-top">
          <div class="landing-logo">📖 READEFINE</div>
          <ul class="sidebar-menu">
            <li><a href="index.html">🌐 Home Page</a></li>
            <li><a href="dashboard.html">🏠 Dashboard</a></li>
            <li><a href="levels.html"${lessonActive}>📚 Lessons</a></li>
            <li><a href="exams.html"${examActive}>📝 Exams Hub</a></li>
            <li><a href="#">📊 Progress</a></li>
            <li><a href="#">👤 Profile</a></li>
            <li><a href="#">⚙️ Settings</a></li>
          </ul>
        </div>
        <div class="sidebar-footer">
          <a href="index.html" class="logout-btn">🚪 Log Out</a>
        </div>
      </aside>`;
  }

  function header(page) {
    const titleSize = pageType === "lesson" ? "1.9rem" : "1.6rem";
    const subtitleSize = pageType === "lesson" ? "0.9rem" : "0.85rem";
    const subtitleStyle = pageType === "lesson"
      ? `font-size: ${subtitleSize}; font-weight: 700; color: var(--text-muted); text-transform: uppercase;`
      : `font-size: ${subtitleSize}; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;`;

    return `
      <div class="top-header-bar">
        <div class="header-left-group">
          <button class="menu-toggle-btn" id="menuToggleBtn" type="button">☰</button>
          <div class="welcome-text">
            <span style="${subtitleStyle}">${escapeHtml(page.subtitle)}</span>
            <h1 style="font-size: ${titleSize};">${escapeHtml(page.heading)}</h1>
          </div>
        </div>
        <a href="${escapeHtml(page.backHref)}" class="btn-primary" style="background: var(--white); color: var(--deep-blue); border: 1px solid var(--border-subtle);">${escapeHtml(page.backText)}</a>
      </div>`;
  }

  if (!page) {
    document.title = "READEFINE - Page not found";
    app.innerHTML = `
      <div class="app-frame dashboard-frame">
        ${sidebar(pageType)}
        <main class="main-content">
          <div class="section-box">
            <h1>Page not found</h1>
            <p>This lesson or exam does not exist.</p>
            <a href="${pageType === "exam" ? "exams.html" : "levels.html"}" class="btn-primary">Return to ${pageType === "exam" ? "Exams" : "Lessons"}</a>
          </div>
        </main>
      </div>`;
    document.getElementById("menuToggleBtn").addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("collapsed");
    });
    return;
  }

  document.title = page.title;
  const pageStyles = document.createElement("style");
  pageStyles.textContent = page.styles;
  document.head.appendChild(pageStyles);

  app.innerHTML = `
    <div class="app-frame dashboard-frame">
      ${sidebar(pageType)}
      <main class="main-content">
        ${header(page)}
        ${page.content}
      </main>
    </div>
    ${page.outsideContent}`;

  const pageScript = document.createElement("script");
  pageScript.textContent = page.script;
  document.body.appendChild(pageScript);
})();
