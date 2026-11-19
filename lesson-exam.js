window.checkAnswer = async function (question, correctAnswer, userAnswer) {
  try {
    const res = await fetch("https://readefine-backend.vercel.app//api/exam/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, correctAnswer, userAnswer }),
    });
    if (!res.ok) throw new Error("Server error " + res.status);
    return await res.json(); // { correct, feedback }
  } catch (err) {
    console.error(err);
    return { correct: false, feedback: "Couldn't check your answer. Please try again." };
  }
};

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
    const examActive = activePage === "exam" ? ' class="active"' : "";

    const markup = `
      <aside class="sidebar" id="sidebar">
        <div class="sidebar-top">
          <div class="landing-logo">📖 READEFINE</div>
          <ul class="sidebar-menu">
            <li><a href="index.html">🌐 Home Page</a></li>
            <li><a href="dashboard.html">🏠 Dashboard</a></li>
            <li><a href="levels.html">📚 Lessons</a></li>
            <li><a href="exams.html"${examActive}>📝 Exams Hub</a></li>
            <li><a href="#">📊 Progress</a></li>
            <li><a href="profile.html">👤 Profile</a></li>
            <li><a href="#">⚙️ Settings</a></li>
          </ul>
        </div>
        <div class="sidebar-footer">
          <a href="index.html" class="logout-btn">🚪 Log Out</a>
        </div>
      </aside>`;
    return activePage === "lesson"
      ? markup.replace(/\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?(?:\p{Emoji_Modifier})?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?(?:\p{Emoji_Modifier})?)*/gu, "")
        .replace(/[\uFE0E\uFE0F\u200D]/g, "")
      : markup;
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

  function lessonReaderControls() {
    return `
      <div class="lesson-reader-controls" id="lessonReaderControls" role="group" aria-label="Lesson reader" hidden>
        <button type="button" class="btn-primary" id="readerToggle">Read lesson</button>
        <button type="button" class="reader-stop-btn" id="readerStop" disabled>Stop</button>
        <label class="reader-speed">
          Speed
          <select id="readerSpeed" aria-label="Reading speed">
            <option value="0.8">0.8×</option>
            <option value="1" selected>1×</option>
            <option value="1.2">1.2×</option>
            <option value="1.5">1.5×</option>
          </select>
        </label>
        <label class="reader-voice">
          Voice
          <select id="readerVoice" aria-label="Reading voice">
            <option value="">System default</option>
          </select>
        </label>
        <span class="reader-status" id="readerStatus" aria-live="polite"></span>
      </div>`;
  }

  function setupLessonReader() {
    const controls = document.getElementById("lessonReaderControls");
    const content = document.getElementById("lessonContent") || document.querySelector(".lesson-container");
    if (!controls || !content) return;
    if (content.closest("[hidden]")) return;

    controls.hidden = false;
    const toggleButton = document.getElementById("readerToggle");
    const stopButton = document.getElementById("readerStop");
    const speedSelect = document.getElementById("readerSpeed");
    const voiceSelect = document.getElementById("readerVoice");
    const status = document.getElementById("readerStatus");

    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      toggleButton.disabled = true;
      speedSelect.disabled = true;
      voiceSelect.disabled = true;
      status.textContent = "Audio reading is not supported in this browser.";
      return;
    }

    const lessonText = content.matches(".lesson-container")
      ? content
      : content.querySelector(".lesson-container");
    if (!lessonText) {
      controls.hidden = true;
      return;
    }

    const skippedElements = "a, button, input, textarea, select, [hidden], [aria-hidden='true'], script, style";
    const blockElements = new Set(["ADDRESS", "BLOCKQUOTE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "OL", "P", "UL"]);
    const textNodes = [];
    const wordWalker = document.createTreeWalker(lessonText, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement.closest(skippedElements)
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    });
    let textNode;
    while ((textNode = wordWalker.nextNode())) textNodes.push(textNode);

    textNodes.forEach((node) => {
      const value = node.nodeValue || "";
      const wordPattern = /\S+/g;
      const fragment = document.createDocumentFragment();
      let offset = 0;
      let match;
      while ((match = wordPattern.exec(value))) {
        if (match.index > offset) {
          fragment.appendChild(document.createTextNode(value.slice(offset, match.index)));
        }
        const word = document.createElement("span");
        word.className = "reader-word";
        word.textContent = match[0];
        fragment.appendChild(word);
        offset = wordPattern.lastIndex;
      }
      if (offset < value.length) {
        fragment.appendChild(document.createTextNode(value.slice(offset)));
      }
      if (fragment.childNodes.length) node.parentNode.replaceChild(fragment, node);
    });

    const textMap = [];
    let text = "";
    const walker = document.createTreeWalker(
      lessonText,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (node.nodeType === Node.ELEMENT_NODE && node.matches(skippedElements)) {
            return NodeFilter.FILTER_REJECT;
          }
          if (node.nodeType === Node.TEXT_NODE && node.parentElement.closest(skippedElements)) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    function appendSpace() {
      if (text && !text.endsWith(" ")) {
        text += " ";
        textMap.push(null);
      }
    }

    let currentNode;
    while ((currentNode = walker.nextNode())) {
      if (currentNode.nodeType === Node.ELEMENT_NODE) {
        if (currentNode.tagName === "BR" || blockElements.has(currentNode.tagName)) {
          appendSpace();
        }
        continue;
      }

      const value = currentNode.nodeValue || "";
      const word = currentNode.parentElement.closest(".reader-word");
      for (let offset = 0; offset < value.length; offset += 1) {
        if (/\s/.test(value[offset])) {
          appendSpace();
        } else {
          text += value[offset];
          textMap.push(word);
        }
      }
    }

    if (text.endsWith(" ")) {
      text = text.slice(0, -1);
      textMap.pop();
    }
    if (!text) {
      controls.hidden = true;
      return;
    }

    const chunks = [];
    let chunk = null;
    const sentencePattern = /[^.!?]+[.!?]+|[^.!?]+$/g;
    let sentenceMatch;
    while ((sentenceMatch = sentencePattern.exec(text))) {
      const sentence = sentenceMatch[0].trim();
      const sentenceStart = sentenceMatch.index + sentenceMatch[0].indexOf(sentence);
      if (sentence.length > 240) {
        if (chunk) chunks.push(chunk);
        chunk = null;

        let offset = 0;
        while (offset < sentence.length) {
          let end = Math.min(offset + 240, sentence.length);
          if (end < sentence.length) {
            const space = sentence.lastIndexOf(" ", end);
            if (space > offset) end = space;
          }
          const part = sentence.slice(offset, end).trim();
          if (part) chunks.push({ text: part, start: sentenceStart + offset });
          offset = end;
          while (sentence[offset] === " ") offset += 1;
        }
        continue;
      }

      if (chunk && chunk.text.length + sentence.length + 1 > 240) {
        chunks.push(chunk);
        chunk = null;
      }
      if (chunk) {
        chunk.text += ` ${sentence}`;
      } else {
        chunk = { text: sentence, start: sentenceStart };
      }
    }
    if (chunk) chunks.push(chunk);

    let session = 0;
    let chunkIndex = 0;
    let reading = false;
    let paused = false;
    let selectedVoiceURI = "";
    let userSelectedVoice = false;
    let activeWord = null;

    function clearWordHighlight() {
      if (activeWord) activeWord.classList.remove("reader-word-active");
      activeWord = null;
    }

    function highlightWord(index) {
      let wordIndex = Math.max(0, Math.min(index, text.length));
      while (wordIndex < text.length && /\s/.test(text[wordIndex])) wordIndex += 1;
      const word = textMap[wordIndex];
      if (!word || word === activeWord) return;
      clearWordHighlight();
      activeWord = word;
      activeWord.classList.add("reader-word-active");
    }

    function refreshVoices() {
      const voices = window.speechSynthesis.getVoices();
      const previousVoiceURI = voiceSelect.value || selectedVoiceURI;
      while (voiceSelect.firstChild) voiceSelect.removeChild(voiceSelect.firstChild);

      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "System default";
      voiceSelect.appendChild(defaultOption);

      voices.forEach((voice) => {
        const option = document.createElement("option");
        option.value = voice.voiceURI;
        option.textContent = `${voice.name} (${voice.lang})${voice.default ? " - Default" : ""}`;
        voiceSelect.appendChild(option);
      });

      if (previousVoiceURI && voices.some((voice) => voice.voiceURI === previousVoiceURI)) {
        voiceSelect.value = previousVoiceURI;
      } else if (!userSelectedVoice) {
        const preferredVoice = voices.find((voice) => voice.default && voice.lang.toLowerCase().startsWith("en"))
          || voices.find((voice) => voice.lang.toLowerCase().startsWith("en"));
        if (preferredVoice) {
          selectedVoiceURI = preferredVoice.voiceURI;
          voiceSelect.value = selectedVoiceURI;
        }
      }
    }

    refreshVoices();
    window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
    voiceSelect.addEventListener("change", () => {
      userSelectedVoice = true;
      selectedVoiceURI = voiceSelect.value;
    });

    function resetReader(message) {
      reading = false;
      paused = false;
      clearWordHighlight();
      toggleButton.textContent = "Read lesson";
      toggleButton.setAttribute("aria-label", "Read lesson aloud");
      stopButton.disabled = true;
      status.textContent = message;
    }

    function speakNext(activeSession) {
      if (activeSession !== session || !reading) return;
      if (chunkIndex >= chunks.length) {
        resetReader("Finished reading.");
        return;
      }

      const currentChunk = chunks[chunkIndex];
      const utterance = new SpeechSynthesisUtterance(currentChunk.text);
      utterance.lang = document.documentElement.lang || "en";
      utterance.rate = Number(speedSelect.value);
      utterance.voice = window.speechSynthesis.getVoices()
        .find((voice) => voice.voiceURI === voiceSelect.value) || null;
      utterance.onboundary = (event) => {
        if (activeSession !== session || (event.name && event.name !== "word")) return;
        highlightWord(currentChunk.start + event.charIndex);
      };
      utterance.onend = () => {
        if (activeSession !== session) return;
        chunkIndex += 1;
        speakNext(activeSession);
      };
      utterance.onerror = (event) => {
        if (activeSession !== session || event.error === "canceled" || event.error === "interrupted") return;
        session += 1;
        resetReader("Audio reading stopped unexpectedly.");
      };
      window.speechSynthesis.speak(utterance);
    }

    toggleButton.addEventListener("click", () => {
      if (reading && !paused) {
        window.speechSynthesis.pause();
        paused = true;
        toggleButton.textContent = "Resume";
        toggleButton.setAttribute("aria-label", "Resume reading");
        status.textContent = "Reading paused.";
        return;
      }

      if (reading && paused) {
        window.speechSynthesis.resume();
        paused = false;
        toggleButton.textContent = "Pause";
        toggleButton.setAttribute("aria-label", "Pause reading");
        status.textContent = "Reading lesson.";
        return;
      }

      session += 1;
      chunkIndex = 0;
      reading = true;
      paused = false;
      stopButton.disabled = false;
      toggleButton.textContent = "Pause";
      toggleButton.setAttribute("aria-label", "Pause reading");
      status.textContent = "Reading lesson.";
      speakNext(session);
    });

    stopButton.addEventListener("click", () => {
      session += 1;
      window.speechSynthesis.cancel();
      resetReader("Reading stopped.");
    });
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
        ${pageType === "lesson" ? lessonReaderControls() : ""}
        ${page.content}
      </main>
    </div>
    ${page.outsideContent}`;

  const pageScript = document.createElement("script");
  pageScript.textContent = page.script;
  document.body.appendChild(pageScript);

  if (pageType === "exam") {
    const originalValidateAndSubmitExam = window.validateAndSubmitExam;

    window.validateAndSubmitExam = async function () {
      const idInputs = [...document.querySelectorAll(".id-input")];
      const multipleChoiceAnswers = [];
      for (let i = 1; i <= 5; i++) {
        const checked = document.querySelector(`input[name="mc${i}"]:checked`);
        multipleChoiceAnswers.push(checked ? checked.value : "");
      }
      const essayInput = document.getElementById("essayInput");
      const essayQuestion = document.querySelector(".quiz-card:last-of-type .quiz-question")?.textContent?.trim();

      if (idInputs.some((input) => !input.value.trim()) ||
          multipleChoiceAnswers.some((answer) => !answer) ||
          !essayInput?.value.trim()) {
        if (typeof originalValidateAndSubmitExam === "function") {
          originalValidateAndSubmitExam();
        }
        return;
      }

      const statusModal = document.getElementById("statusModal");
      const modalIcon = document.getElementById("modalIcon");
      const modalTitle = document.getElementById("modalTitle");
      const modalDesc = document.getElementById("modalDesc");
      const modalBtn = document.getElementById("modalBtn");

      modalIcon.textContent = "⏳";
      modalTitle.textContent = "Checking Your Exam";
      modalDesc.textContent = "Checking identification, multiple choice, and essay responses...";
      modalBtn.textContent = "Please wait";
      statusModal.classList.add("active");

      try {
        const response = await fetch(`https://readefine-backend.vercel.app//api/exam/submit`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            lessonId,
            identificationAnswers: idInputs.map((input) => input.value),
            multipleChoiceAnswers,
            essayQuestion,
            essayAnswer: essayInput.value,
          }),
        });
        if (!response.ok) throw new Error("Exam check failed");
        const result = await response.json();

        if (result.passed) {
          if (typeof originalValidateAndSubmitExam === "function") {
            originalValidateAndSubmitExam();
          }
          modalIcon.textContent = "🎉";
          modalTitle.textContent = "Exam Submitted";
          modalDesc.textContent = `Score: ${result.score}/${result.total}. ${result.essay.feedback}`;
          modalBtn.textContent = "Go to Exams Hub";
        } else {
          isExamSubmitted = false;
          modalIcon.textContent = "📝";
          modalTitle.textContent = "Exam Submitted";
          modalDesc.textContent = `Score: ${result.score}/${result.total}. ${result.essay.feedback}`;
          modalBtn.textContent = "Review Answers";
          modalBtn.onclick = closeStatusModal;
        }
      } catch (error) {
        console.error(error);
        modalIcon.textContent = "⚠️";
        modalTitle.textContent = "Checking Failed";
        modalDesc.textContent = "The exam could not be checked. Please try submitting again.";
        modalBtn.textContent = "Return to Exam";
      }
    };
  }

  if (pageType === "lesson") {
    const completeBtn = document.createElement("button");
    completeBtn.type = "button";
    completeBtn.className = "btn-primary";
    completeBtn.style.marginTop = "24px";
    completeBtn.textContent = "Mark Lesson as Completed";

    completeBtn.addEventListener("click", async () => {
      completeBtn.disabled = true;
      completeBtn.textContent = "Saving...";
      try {
        const result = await saveProgress(lessonId, true, null);
        completeBtn.textContent = result.ok ? "✅ Completed!" : "Could not save. Log in again.";
      } catch (err) {
        completeBtn.textContent = "Cannot reach the server";
        completeBtn.disabled = false;
      }
    });

    document.querySelector(".main-content").appendChild(completeBtn);
    setupLessonReader();
  }

})();
