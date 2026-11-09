window.EXAMS = {
  1: {
    title: "READEFINE - Exam Lesson 1: Understanding Words and Vocabulary",
    subtitle: "Exam-Lesson 1 Assessment",
    heading: "Understanding Words Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card {
      background: #FFFFFF;
      border: 1px solid var(--border-subtle);
      border-radius: 20px;
      padding: 28px;
      margin-bottom: 24px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    }
    .quiz-question {
      font-weight: 700;
      color: var(--deep-blue);
      margin-bottom: 16px;
      font-size: 1.1rem;
    }
    .quiz-options {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .quiz-option-label {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: #F8FBFF;
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      font-size: 0.95rem;
      color: var(--text-dark);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .quiz-option-label:hover {
      background: #EAF2FF;
      border-color: var(--soft-blue);
    }
    .quiz-input-text {
      width: 100%;
      padding: 14px 18px;
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      font-family: inherit;
      font-size: 0.95rem;
      outline: none;
      background: #FAFCFF;
      transition: border-color 0.2s;
    }
    .quiz-input-text:focus {
      border-color: var(--soft-blue);
      background: #FFFFFF;
    }
    .btn-disabled {
      background: #CBD5E1 !important;
      color: #64748B !important;
      border: none !important;
      cursor: not-allowed !important;
      opacity: 0.7;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(23, 75, 133, 0.4);
      backdrop-filter: blur(4px);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-overlay.active {
      display: flex;
    }
    .modal-card {
      background: var(--white);
      border-radius: 24px;
      width: 90%;
      max-width: 480px;
      padding: 32px;
      border: 1px solid var(--border-subtle);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      text-align: center;
      animation: popIn 0.25s ease-out;
    }
    @keyframes popIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson1ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Lesson 1 Official Assessment</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 1.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. The collection of words a person knows and uses.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. A word that has the same or nearly the same meaning as another word.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. A word that has the opposite meaning of another word.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. The meaning of a word.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The use of words when speaking or writing.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. A word that describes a person, place, thing, or idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. The process of learning and understanding new words.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A word used to name an action.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The ability to understand what words mean.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. A group of words used to communicate an idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What does vocabulary refer to?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. A collection of words a person knows</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. A collection of numbers</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. A list of punctuation marks</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. A set of mathematical symbols</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which word means the same as happy?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Angry</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Joyful</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Tired</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Afraid</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which word is the opposite of difficult?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Hard</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Complicated</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Easy</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Challenging</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Why is vocabulary important?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. It helps people understand and communicate ideas.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. It replaces the need to read.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. It removes the need for grammar.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. It makes every sentence longer.</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Which activity can help improve vocabulary?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Avoiding unfamiliar words</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Reading different kinds of texts</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Ignoring word meanings</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Using only familiar words</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain why having a good vocabulary is important in everyday communication. Give at least two examples of how it can help you as a student.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 1 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=1" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 1
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 2 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block; text-align: center;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const sidebar = document.getElementById('sidebar');

    menuToggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson1_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 1 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 1. You can now proceed to Lesson 2!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=2";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 2 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 1 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  2: {
    title: "READEFINE - Exam Lesson 2: Using Context Clues",
    subtitle: "Exam-Lesson 2 Assessment",
    heading: "Using Context Clues Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card {
      background: #FFFFFF;
      border: 1px solid var(--border-subtle);
      border-radius: 20px;
      padding: 28px;
      margin-bottom: 24px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    }
    .quiz-question {
      font-weight: 700;
      color: var(--deep-blue);
      margin-bottom: 16px;
      font-size: 1.1rem;
    }
    .quiz-options {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .quiz-option-label {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: #F8FBFF;
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      font-size: 0.95rem;
      color: var(--text-dark);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .quiz-option-label:hover {
      background: #EAF2FF;
      border-color: var(--soft-blue);
    }
    .quiz-input-text {
      width: 100%;
      padding: 14px 18px;
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      font-family: inherit;
      font-size: 0.95rem;
      outline: none;
      background: #FAFCFF;
      transition: border-color 0.2s;
    }
    .quiz-input-text:focus {
      border-color: var(--soft-blue);
      background: #FFFFFF;
    }
    .btn-disabled {
      background: #CBD5E1 !important;
      color: #64748B !important;
      border: none !important;
      cursor: not-allowed !important;
      opacity: 0.7;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(23, 75, 133, 0.4);
      backdrop-filter: blur(4px);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-overlay.active {
      display: flex;
    }
    .modal-card {
      background: var(--white);
      border-radius: 24px;
      width: 90%;
      max-width: 480px;
      padding: 32px;
      border: 1px solid var(--border-subtle);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      text-align: center;
      animation: popIn 0.25s ease-out;
    }
    @keyframes popIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .modal-icon {
      font-size: 3rem;
      margin-bottom: 12px;
      display: block;
    }
    .modal-title {
      font-size: 1.3rem;
      color: var(--deep-blue);
      font-weight: 800;
      margin-bottom: 10px;
    }
    .modal-desc {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 24px;
    }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson2ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Lesson 2 Official Assessment</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 2: Using Context Clues.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 items) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. Hints found within a sentence or passage that help readers understand unfamiliar words.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. Context clue that explains a word by giving its meaning directly.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. Context clue that gives examples of an unfamiliar word.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. Context clue that uses an opposite meaning to explain a word.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. Context clue that uses a similar word to explain an unfamiliar word.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The words or sentences surrounding an unfamiliar word.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. A word whose meaning is not familiar to the reader.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. The process of using surrounding information to understand a word.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. A type of context clue that describes what something looks like or how it behaves.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. Information in a passage that helps readers understand the meaning of a word.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 items) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What are context clues?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Hints that help explain unfamiliar words</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Words that have no meaning</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Rules for writing paragraphs</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Marks used at the end of sentences</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Read the sentence: "Mia was exhausted after running for two hours, so she rested." What does exhausted mean?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Excited</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Very tired</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Confused</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Hungry</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which sentence uses an example as a context clue?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Fruits, such as apples, bananas, and oranges, are nutritious.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. The room was quiet.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. He arrived early.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. The bag was heavy.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Read the sentence: "Unlike his outgoing sister, Mark is shy." What does outgoing most likely mean?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Friendly and sociable</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Quiet and nervous</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Angry and impatient</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Lazy and careless</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. What should a reader do when encountering an unfamiliar word?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Immediately stop reading</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Guess without looking at the sentence</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Examine the surrounding words and sentences</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Ignore the entire paragraph</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain how context clues help readers understand unfamiliar words. Give one example of a sentence and explain how its context reveals the meaning of an unfamiliar word.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 2 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=2" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 2
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 3 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card">
      <span class="modal-icon" id="modalIcon">⚠️</span>
      <h3 class="modal-title" id="modalTitle">Incomplete Submission</h3>
      <p class="modal-desc" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: 100%;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const sidebar = document.getElementById('sidebar');

    menuToggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson2_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 2 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 2: Using Context Clues. You can now proceed to Lesson 3!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=3";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 3 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 2 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  3: {
    title: "READEFINE - Exam Lesson 3: Synonyms and Antonyms",
    subtitle: "Exam-Lesson 3 Assessment",
    heading: "Synonyms and Antonyms Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card {
      background: #FFFFFF;
      border: 1px solid var(--border-subtle);
      border-radius: 24px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.03);
    }
    .quiz-question {
      font-weight: 700;
      color: var(--deep-blue);
      margin-bottom: 14px;
      font-size: 1.05rem;
    }
    .quiz-options {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .quiz-option-label {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 18px;
      background: #F8FBFF;
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      font-size: 0.95rem;
      color: var(--text-dark);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .quiz-option-label:hover {
      background: #EAF2FF;
      border-color: var(--soft-blue);
    }
    .quiz-input-text {
      width: 100%;
      padding: 14px 18px;
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      font-family: inherit;
      font-size: 0.95rem;
      outline: none;
      background: #FAFCFF;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }
    .quiz-input-text:focus {
      border-color: var(--soft-blue);
      background: #FFFFFF;
    }
    .btn-disabled {
      background: #CBD5E1 !important;
      color: #64748B !important;
      border: none !important;
      cursor: not-allowed !important;
      opacity: 0.7;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(23, 75, 133, 0.4);
      backdrop-filter: blur(4px);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-overlay.active {
      display: flex;
    }
    .modal-card {
      background: var(--white);
      border-radius: 24px;
      width: 90%;
      max-width: 480px;
      padding: 32px;
      border: 1px solid var(--border-subtle);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      text-align: center;
      animation: popIn 0.25s ease-out;
    }
    @keyframes popIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson3ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Lesson 3 Official Assessment</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 3: Synonyms and Antonyms.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. Words that have the same or nearly the same meaning.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. Words that have opposite meanings.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. A word that means nearly the same as beautiful.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A word that means the opposite of generous.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. A word that means nearly the same as begin.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. A word that means the opposite of ancient.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. The relationship between words with similar meanings.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. The relationship between words with opposite meanings.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. A word that means nearly the same as quick.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. A word that means the opposite of victory.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which pair contains synonyms?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Big – Small</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Happy – Joyful</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Hot – Cold</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Begin – End</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which word is an antonym of brave?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Courageous</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Fearless</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Cowardly</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Confident</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which word is a synonym of intelligent?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Clever</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Careless</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Weak</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Confused</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which pair contains antonyms?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Silent – Quiet</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Fast – Quick</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Honest – Truthful</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Increase – Decrease</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Why are synonyms useful in writing?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. They help avoid unnecessary repetition.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. They make every word opposite.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. They remove the meaning of sentences.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. They replace all punctuation marks.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain the difference between synonyms and antonyms. Give two examples of each and use them in sentences.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 3 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=3" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 3
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 4 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block; text-align: center;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const sidebar = document.getElementById('sidebar');

    menuToggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson3_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 3 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 3. You can now proceed to Lesson 4!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=4";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 4 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 3 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  4: {
    title: "READEFINE - Exam Lesson 4: Homophones and Commonly Confused Words",
    subtitle: "Exam-Lesson 4 Assessment",
    heading: "Homophones Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card {
      background: #FFFFFF;
      border: 1px solid var(--border-subtle);
      border-radius: 24px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.03);
    }
    .quiz-question {
      font-weight: 700;
      color: var(--deep-blue);
      margin-bottom: 14px;
      font-size: 1.05rem;
    }
    .quiz-options {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .quiz-option-label {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 18px;
      background: #F8FBFF;
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      font-size: 0.95rem;
      color: var(--text-dark);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .quiz-option-label:hover {
      background: #EAF2FF;
      border-color: var(--soft-blue);
    }
    .quiz-input-text {
      width: 100%;
      padding: 14px 18px;
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      font-family: inherit;
      font-size: 0.95rem;
      outline: none;
      background: #FAFCFF;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }
    .quiz-input-text:focus {
      border-color: var(--soft-blue);
      background: #FFFFFF;
    }
    .btn-disabled {
      background: #CBD5E1 !important;
      color: #64748B !important;
      border: none !important;
      cursor: not-allowed !important;
      opacity: 0.7;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(23, 75, 133, 0.4);
      backdrop-filter: blur(4px);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-overlay.active {
      display: flex;
    }
    .modal-card {
      background: var(--white);
      border-radius: 24px;
      width: 90%;
      max-width: 480px;
      padding: 32px;
      border: 1px solid var(--border-subtle);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      text-align: center;
      animation: popIn 0.25s ease-out;
    }
    @keyframes popIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson4ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Lesson 4 Official Assessment</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 4: Homophones and Commonly Confused Words.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the correct term or word.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. Words that sound alike but have different meanings and often different spellings.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The correct word to complete: "___ going to school today."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. The correct word to complete: "The book is over ___."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. The correct word to complete: "I can ___ the birds singing."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The correct word to complete: "Please ___ your name on the paper."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The correct word to complete: "The students left ___ bags in the classroom."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. The correct word to complete: "The dog wagged ___ tail."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. The correct word to complete: "___ is my favorite subject."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The correct word to complete: "I have ___ books than you."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The correct word to complete: "She is taller ___ her brother."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which pair consists of homophones?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Cat – Dog</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Sun – Son</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Book – Page</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Tall – Short</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which sentence uses their correctly?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Their going to the library.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Their is a new student.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. The students brought their notebooks.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. I saw their yesterday.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which word completes the sentence? "I ___ a beautiful painting."</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Sea</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. See</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Say</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Saw</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which sentence uses you're correctly?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. You're notebook is missing.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. You're a responsible student.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. You're books are new.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. I borrowed you're pen.</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Which sentence uses its correctly?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. The cat cleaned its paws.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Its going to rain.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Its a sunny day.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. The dog wagged it's tail.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why is it important to use the correct commonly confused words in writing? Explain your answer and give two examples.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 4 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=4" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 4
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 5 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block; text-align: center;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const sidebar = document.getElementById('sidebar');

    menuToggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson4_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 4 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 4. You can now proceed to Lesson 5!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=5";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 5 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 4 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  5: {
    title: "READEFINE - Exam Lesson 5: Parts of Speech",
    subtitle: "Exam-Lesson 5 Assessment",
    heading: "Parts of Speech Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card {
      background: #FFFFFF;
      border: 1px solid var(--border-subtle);
      border-radius: 24px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.03);
    }
    .quiz-question {
      font-weight: 700;
      color: var(--deep-blue);
      margin-bottom: 14px;
      font-size: 1.05rem;
    }
    .quiz-options {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .quiz-option-label {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 18px;
      background: #F8FBFF;
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      font-size: 0.95rem;
      color: var(--text-dark);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .quiz-option-label:hover {
      background: #EAF2FF;
      border-color: var(--soft-blue);
    }
    .quiz-input-text {
      width: 100%;
      padding: 14px 18px;
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      font-family: inherit;
      font-size: 0.95rem;
      outline: none;
      background: #FAFCFF;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }
    .quiz-input-text:focus {
      border-color: var(--soft-blue);
      background: #FFFFFF;
    }
    .btn-disabled {
      background: #CBD5E1 !important;
      color: #64748B !important;
      border: none !important;
      cursor: not-allowed !important;
      opacity: 0.7;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(23, 75, 133, 0.4);
      backdrop-filter: blur(4px);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-overlay.active {
      display: flex;
    }
    .modal-card {
      background: var(--white);
      border-radius: 24px;
      width: 90%;
      max-width: 480px;
      padding: 32px;
      border: 1px solid var(--border-subtle);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      text-align: center;
      animation: popIn 0.25s ease-out;
    }
    @keyframes popIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson5ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Lesson 5 Official Assessment</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 5: Parts of Speech.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the part of speech described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A word that names a person, place, thing, or idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. A word that expresses an action or state of being.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. A word that describes a noun or pronoun.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A word that describes a verb, adjective, or another adverb.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. A word that takes the place of a noun.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. A word that shows the relationship of a noun or pronoun to another word.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. A word that connects words, phrases, or clauses.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A word that expresses sudden emotion or feeling.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The part of speech of the word quickly.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The part of speech of the word beautiful.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which word is a noun?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Run</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Beautiful</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Teacher</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Quickly</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which word is a verb in the sentence "The students study every night"?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. The</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Students</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Study</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Every</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which word is an adjective?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Carefully</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Happy</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Write</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. They</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which word is a pronoun?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. School</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. She</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Beautiful</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Jump</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. What is the function of a conjunction?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. To name a person or thing</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. To connect words or groups of words</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. To describe an action</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. To express an emotion</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Choose five parts of speech and explain their functions. Give one example of each in a sentence.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 5 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=5" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 5
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 6 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block; text-align: center;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const sidebar = document.getElementById('sidebar');

    menuToggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson5_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 5 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 5. You can now proceed to Lesson 6!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=6";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 6 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 5 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  6: {
    title: "READEFINE - Exam Lesson 6: Basic Sentence Structure",
    subtitle: "Exam-Lesson 6 Assessment",
    heading: "Sentence Structure Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card {
      background: #FFFFFF;
      border: 1px solid var(--border-subtle);
      border-radius: 24px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.03);
    }
    .quiz-question {
      font-weight: 700;
      color: var(--deep-blue);
      margin-bottom: 14px;
      font-size: 1.05rem;
    }
    .quiz-options {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .quiz-option-label {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 18px;
      background: #F8FBFF;
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      font-size: 0.95rem;
      color: var(--text-dark);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .quiz-option-label:hover {
      background: #EAF2FF;
      border-color: var(--soft-blue);
    }
    .quiz-input-text {
      width: 100%;
      padding: 14px 18px;
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      font-family: inherit;
      font-size: 0.95rem;
      outline: none;
      background: #FAFCFF;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }
    .quiz-input-text:focus {
      border-color: var(--soft-blue);
      background: #FFFFFF;
    }
    .btn-disabled {
      background: #CBD5E1 !important;
      color: #64748B !important;
      border: none !important;
      cursor: not-allowed !important;
      opacity: 0.7;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(23, 75, 133, 0.4);
      backdrop-filter: blur(4px);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-overlay.active {
      display: flex;
    }
    .modal-card {
      background: var(--white);
      border-radius: 24px;
      width: 90%;
      max-width: 480px;
      padding: 32px;
      border: 1px solid var(--border-subtle);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      text-align: center;
      animation: popIn 0.25s ease-out;
    }
    @keyframes popIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson6ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Lesson 6 Official Assessment</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 6: Basic Sentence Structure.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A group of words that expresses a complete thought.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The person, place, thing, or idea that a sentence is about.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. The part of a sentence that tells something about the subject.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A sentence that expresses a complete thought.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. A group of words that does not express a complete thought.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. A sentence that has one independent clause.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. A sentence that contains two or more independent clauses.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A sentence that contains an independent clause and at least one dependent clause.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The person or thing performing the action in a sentence.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The word or group of words that completes the meaning of the subject.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which is a complete sentence?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Because it was raining.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. The students finished their activity.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. After the class.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Running in the hallway.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. What is the subject in "The young girl reads a book"?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Reads</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. A book</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. The young girl</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Young</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What is the predicate in "The teacher explains the lesson"?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. The teacher</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Explains the lesson</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. The lesson</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Teacher explains</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which sentence is a compound sentence?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. I studied for the quiz.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. The bell rang, and the students left.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. After the rain stopped.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Because she was tired.</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. What is the main requirement of a complete sentence?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. It must contain at least twenty words.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. It must express a complete thought.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. It must contain two adjectives.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. It must always begin with a verb.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain why a complete sentence is important in communication. Write two examples of complete sentences and identify their subjects and predicates.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 6 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=6" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 6
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 7 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block; text-align: center;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const sidebar = document.getElementById('sidebar');

    menuToggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson6_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 6 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 6. You can now proceed to Lesson 7!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=7";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 7 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 6 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  7: {
    title: "READEFINE - Exam Lesson 7: Subject and Predicate",
    subtitle: "Exam-Lesson 7 Assessment",
    heading: "Subject and Predicate Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        <form id="lesson7ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Lesson 7 Official Assessment</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 7: Subject and Predicate.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. The part of a sentence that tells who or what the sentence is about.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The part of a sentence that tells something about the subject.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. The main word or words in the subject.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. The main verb or verbs in the predicate.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The complete part of a sentence that includes the subject and its modifiers.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The complete part of a sentence that includes the verb and its modifiers or objects.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. The subject in the sentence "The little boy plays basketball."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. The predicate in the sentence "My classmates are preparing for the presentation."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The simple subject in the sentence "The hardworking students passed the examination."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The simple predicate in the sentence "The children happily played outside."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What is the subject in "The beautiful flowers bloom in spring"?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Bloom in spring</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. The beautiful flowers</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. In spring</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Beautiful</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. What is the predicate in "My mother prepares breakfast every morning"?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. My mother</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Breakfast</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Prepares breakfast every morning</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Every morning</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What is the simple subject in "The young athlete won the competition"?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Young athlete</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Competition</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Athlete</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Won</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. What is the simple predicate in "The students carefully answered the questions"?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Students</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Carefully</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Questions</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Answered</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Why are subjects and predicates important?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. They help organize the basic meaning of a sentence.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. They make sentences meaningless.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. They remove the need for verbs.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. They replace punctuation.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Write three original sentences. Identify the complete subject and complete predicate in each sentence.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 7 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=7" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 7
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 8 →
          </button>
        </div>

      </div>
    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => { document.getElementById('sidebar').classList.toggle('collapsed'); });
    const statusModal = document.getElementById('statusModal'), modalIcon = document.getElementById('modalIcon'), modalTitle = document.getElementById('modalTitle'), modalDesc = document.getElementById('modalDesc'), modalBtn = document.getElementById('modalBtn'), nextLessonBtn = document.getElementById('nextLessonBtn');
    let isExamSubmitted = false;
    
    function validateAndSubmitExam() {
      let allId = true; document.querySelectorAll('.id-input').forEach(i => { if (!i.value.trim()) allId = false; });
      let allMc = true; for (let i = 1; i <= 5; i++) { if (!document.querySelector(\`input[name="mc\${i}"]:checked\`)) allMc = false; }
      if (!allId || !allMc || !document.getElementById('essayInput').value.trim()) {
        isExamSubmitted = false; modalIcon.innerText = "⚠️"; modalTitle.innerText = "Incomplete Exam"; modalDesc.innerText = "Please answer all parts before submitting!"; modalBtn.innerText = "Return to Exam"; modalBtn.onclick = closeStatusModal; statusModal.classList.add('active');
      } else {
        isExamSubmitted = true; localStorage.setItem('readefine_lesson7_completed', 'true'); modalIcon.innerText = "🎉"; modalTitle.innerText = "Lesson 7 Passed!"; modalDesc.innerText = "Congratulations! You can now proceed to Lesson 8!"; modalBtn.innerText = "Go to Exams Hub"; nextLessonBtn.classList.remove('btn-disabled'); modalBtn.onclick = () => { window.location.href = "exams.html"; }; statusModal.classList.add('active');
      }
    }
    function handleNextLessonClick() { if (isExamSubmitted) window.location.href = "lesson.html?id=8"; else { modalIcon.innerText = "🔒"; modalTitle.innerText = "Lesson 8 Locked"; modalDesc.innerText = "Complete Lesson 7 first!"; modalBtn.innerText = "Got it"; modalBtn.onclick = closeStatusModal; statusModal.classList.add('active'); } }
    function closeStatusModal() { statusModal.classList.remove('active'); }
  `,
  },
  8: {
    title: "READEFINE - Exam Lesson 8: Basic Grammar and Punctuation",
    subtitle: "Exam-Lesson 8 Assessment",
    heading: "Grammar and Punctuation Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        <form id="lesson8ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Lesson 8 Official Assessment</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 8: Basic Grammar and Punctuation.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the correct term or punctuation mark.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. The set of rules that guides how words are used and arranged in sentences.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The punctuation mark used at the end of a statement.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. The punctuation mark used at the end of a direct question.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. The punctuation mark used to show strong emotion.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The punctuation mark used to separate items in a list.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The punctuation mark used to show possession or missing letters in contractions.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. The punctuation mark used to separate two closely related independent clauses in some sentences.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. The rule that requires the first word of a sentence to begin with a capital letter.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The rule that requires proper nouns to begin with capital letters.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The punctuation mark used to separate a direct quotation from the rest of a sentence in many writing situations.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which sentence uses correct capitalization?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. my friend lives in batangas.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. My friend lives in Batangas.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. My Friend lives in batangas.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. my Friend lives in Batangas.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which punctuation mark should end this sentence: "Where are you going"</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Period</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Comma</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Question mark</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Exclamation point</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which sentence uses a comma correctly?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. I bought apples, bananas, and oranges.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. I, bought apples bananas and oranges.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. I bought, apples bananas, and oranges.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. I bought apples bananas and, oranges.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which sentence uses an apostrophe correctly?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. The students book is new.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. The student's book is new.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. The students' book's is new.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. The student,s book is new.</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Which sentence has correct punctuation?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Wow that was amazing.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Wow! That was amazing.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Wow, That was amazing?</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Wow That was amazing,</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain how grammar, capitalization, and punctuation help make written communication clear. Give examples of two sentences that use punctuation correctly.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 8 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=8" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 8
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 9 →
          </button>
        </div>

      </div>
    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => { document.getElementById('sidebar').classList.toggle('collapsed'); });
    const statusModal = document.getElementById('statusModal'), modalIcon = document.getElementById('modalIcon'), modalTitle = document.getElementById('modalTitle'), modalDesc = document.getElementById('modalDesc'), modalBtn = document.getElementById('modalBtn'), nextLessonBtn = document.getElementById('nextLessonBtn');
    let isExamSubmitted = false;
    
    function validateAndSubmitExam() {
      let allId = true; document.querySelectorAll('.id-input').forEach(i => { if (!i.value.trim()) allId = false; });
      let allMc = true; for (let i = 1; i <= 5; i++) { if (!document.querySelector(\`input[name="mc\${i}"]:checked\`)) allMc = false; }
      if (!allId || !allMc || !document.getElementById('essayInput').value.trim()) {
        isExamSubmitted = false; modalIcon.innerText = "⚠️"; modalTitle.innerText = "Incomplete Exam"; modalDesc.innerText = "Please answer all parts before submitting!"; modalBtn.innerText = "Return to Exam"; modalBtn.onclick = closeStatusModal; statusModal.classList.add('active');
      } else {
        isExamSubmitted = true; localStorage.setItem('readefine_lesson8_completed', 'true'); modalIcon.innerText = "🎉"; modalTitle.innerText = "Lesson 8 Passed!"; modalDesc.innerText = "Congratulations! You can now proceed to Lesson 9!"; modalBtn.innerText = "Go to Exams Hub"; nextLessonBtn.classList.remove('btn-disabled'); modalBtn.onclick = () => { window.location.href = "exams.html"; }; statusModal.classList.add('active');
      }
    }
    function handleNextLessonClick() { if (isExamSubmitted) window.location.href = "lesson.html?id=9"; else { modalIcon.innerText = "🔒"; modalTitle.innerText = "Lesson 9 Locked"; modalDesc.innerText = "Complete Lesson 8 first!"; modalBtn.innerText = "Got it"; modalBtn.onclick = closeStatusModal; statusModal.classList.add('active'); } }
    function closeStatusModal() { statusModal.classList.remove('active'); }
  `,
  },
  9: {
    title: "READEFINE - Exam Lesson 9: Sentence Types and Functions",
    subtitle: "Exam-Lesson 9 Assessment",
    heading: "Sentence Types and Functions Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        <form id="lesson9ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Lesson 9 Official Assessment</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 9: Sentence Types and Functions.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the type of sentence being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A sentence that makes a statement.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. A sentence that asks a question.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. A sentence that gives a command or makes a request.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A sentence that expresses strong emotion.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The sentence type used to provide information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The sentence type that usually ends with a question mark.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. The sentence type that can end with a period or an exclamation point depending on its force.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. The sentence type that commonly ends with an exclamation point when expressing strong emotion.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. Identify the type: "Please close the door."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. Identify the type: "What a wonderful performance!"</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What type of sentence is "The library closes at six o'clock"?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Interrogative</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Declarative</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Imperative</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Exclamatory</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. What type of sentence is "Did you finish your homework?"?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Declarative</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Imperative</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Interrogative</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Exclamatory</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What type of sentence is "Please submit your project tomorrow"?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Imperative</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Interrogative</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Exclamatory</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Declarative</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. What type of sentence is "That was an incredible performance!"?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Interrogative</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Declarative</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Imperative</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Exclamatory</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Which sentence is used to ask for information?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. I enjoy reading books.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Turn off the lights.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Where is the classroom?</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. What a beautiful day!</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain the four types of sentences according to their functions. Write one original example for each type.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 9 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=9" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 9
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 10 →
          </button>
        </div>

      </div>
    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => { document.getElementById('sidebar').classList.toggle('collapsed'); });
    const statusModal = document.getElementById('statusModal'), modalIcon = document.getElementById('modalIcon'), modalTitle = document.getElementById('modalTitle'), modalDesc = document.getElementById('modalDesc'), modalBtn = document.getElementById('modalBtn'), nextLessonBtn = document.getElementById('nextLessonBtn');
    let isExamSubmitted = false;
    
    function validateAndSubmitExam() {
      let allId = true; document.querySelectorAll('.id-input').forEach(i => { if (!i.value.trim()) allId = false; });
      let allMc = true; for (let i = 1; i <= 5; i++) { if (!document.querySelector(\`input[name="mc\${i}"]:checked\`)) allMc = false; }
      if (!allId || !allMc || !document.getElementById('essayInput').value.trim()) {
        isExamSubmitted = false; modalIcon.innerText = "⚠️"; modalTitle.innerText = "Incomplete Exam"; modalDesc.innerText = "Please answer all parts before submitting!"; modalBtn.innerText = "Return to Exam"; modalBtn.onclick = closeStatusModal; statusModal.classList.add('active');
      } else {
        isExamSubmitted = true; localStorage.setItem('readefine_lesson9_completed', 'true'); modalIcon.innerText = "🎉"; modalTitle.innerText = "Lesson 9 Passed!"; modalDesc.innerText = "Congratulations! You can now proceed to Lesson 10!"; modalBtn.innerText = "Go to Exams Hub"; nextLessonBtn.classList.remove('btn-disabled'); modalBtn.onclick = () => { window.location.href = "exams.html"; }; statusModal.classList.add('active');
      }
    }
    function handleNextLessonClick() { if (isExamSubmitted) window.location.href = "lesson.html?id=10"; else { modalIcon.innerText = "🔒"; modalTitle.innerText = "Lesson 10 Locked"; modalDesc.innerText = "Complete Lesson 9 first!"; modalBtn.innerText = "Got it"; modalBtn.onclick = closeStatusModal; statusModal.classList.add('active'); } }
    function closeStatusModal() { statusModal.classList.remove('active'); }
  `,
  },
  10: {
    title: "READEFINE - Exam Lesson 10: Reading and Understanding Short Texts",
    subtitle: "Exam-Lesson 10 Assessment",
    heading: "Reading Short Texts Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        <form id="lesson10ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Lesson 10 Official Assessment</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 10: Reading and Understanding Short Texts.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. The central message or most important point of a text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. Information that explains or supports the main idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. A short written passage that communicates information or tells a story.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. The person, place, thing, or event being discussed in a text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The meaning or message that the author wants readers to understand.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The process of understanding and interpreting written information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. Information directly stated in a text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A conclusion reached by using clues and information from a text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. A brief explanation of the most important points of a text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The person who writes a text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Read each question carefully based on the passage below.</p>
            
            <div style="background: #F8FBFF; border-left: 4px solid var(--soft-blue); padding: 16px 20px; border-radius: 12px; margin-bottom: 20px; font-size: 0.95rem; line-height: 1.7; color: #334155;">
              <em>"Lara enjoys reading books during her free time. She visits the school library every Friday to borrow stories and informational books. Reading helps her learn new words, understand different ideas, and improve her communication skills. Because of her interest in reading, Lara encourages her classmates to visit the library too."</em>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What is the main idea of the passage?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Lara dislikes visiting the library.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Lara enjoys reading and sees its benefits.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Lara only reads books on weekends.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Lara wants to become a librarian.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. When does Lara visit the school library?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Every Monday</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Every Wednesday</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Every Friday</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Every Sunday</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which detail supports the idea that reading helps Lara learn?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. She visits the library every Friday.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. She borrows stories and informational books.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Reading helps her learn new words and understand ideas.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. She encourages her classmates.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. What can be inferred about Lara?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. She does not enjoy learning.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. She values reading and learning.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. She avoids her classmates.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. She dislikes informational books.</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. What is the author's main purpose in the passage?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. To describe Lara's interest in reading</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. To explain how to build a library</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. To advertise a bookstore</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. To tell readers to stop reading stories</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <div style="background: #F8FBFF; border-left: 4px solid var(--soft-blue); padding: 16px 20px; border-radius: 12px; margin-bottom: 16px; font-size: 0.95rem; line-height: 1.7; color: #334155;">
              <em>"Many students use the internet to help with their schoolwork. It allows them to search for information, watch educational videos, and access digital learning materials. However, students should check whether the information they find is reliable and accurate."</em>
            </div>
            <p class="quiz-question">Read the passage above and explain its main idea and two supporting details.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Level 1 Final Assessment 🏆
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=10" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 10
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Level 1 Complete! 🎉
          </button>
        </div>

      </div>
    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => { document.getElementById('sidebar').classList.toggle('collapsed'); });
    const statusModal = document.getElementById('statusModal'), modalIcon = document.getElementById('modalIcon'), modalTitle = document.getElementById('modalTitle'), modalDesc = document.getElementById('modalDesc'), modalBtn = document.getElementById('modalBtn'), nextLessonBtn = document.getElementById('nextLessonBtn');
    let isExamSubmitted = false;
    
    function validateAndSubmitExam() {
      let allId = true; document.querySelectorAll('.id-input').forEach(i => { if (!i.value.trim()) allId = false; });
      let allMc = true; for (let i = 1; i <= 5; i++) { if (!document.querySelector(\`input[name="mc\${i}"]:checked\`)) allMc = false; }
      if (!allId || !allMc || !document.getElementById('essayInput').value.trim()) {
        isExamSubmitted = false; modalIcon.innerText = "⚠️"; modalTitle.innerText = "Incomplete Exam"; modalDesc.innerText = "Please answer all parts before submitting!"; modalBtn.innerText = "Return to Exam"; modalBtn.onclick = closeStatusModal; statusModal.classList.add('active');
      } else {
        isExamSubmitted = true; localStorage.setItem('readefine_lesson10_completed', 'true'); modalIcon.innerText = "🏆"; modalTitle.innerText = "Level 1 Completed!"; modalDesc.innerText = "Amazing job! You successfully finished Level 1 of READEFINE!"; modalBtn.innerText = "Go to Exams Hub"; nextLessonBtn.classList.remove('btn-disabled'); modalBtn.onclick = () => { window.location.href = "exams.html"; }; statusModal.classList.add('active');
      }
    }
    function handleNextLessonClick() { if (isExamSubmitted) window.location.href = "levels.html"; else { modalIcon.innerText = "🔒"; modalTitle.innerText = "Level 1 Review"; modalDesc.innerText = "Complete this exam first!"; modalBtn.innerText = "Got it"; modalBtn.onclick = closeStatusModal; statusModal.classList.add('active'); } }
    function closeStatusModal() { statusModal.classList.remove('active'); }
  `,
  },
  11: {
    title: "READEFINE - Quiz 11: Reading Comprehension Strategies",
    subtitle: "Exam-Lesson 11 Assessment",
    heading: "Reading Comprehension Strategies Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson11ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 11: Reading Comprehension Strategies</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 11.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the reading comprehension strategy or term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. The ability to understand the meaning of written words, sentences, and paragraphs.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. A strategy that involves looking at the title, headings, and pictures before reading a text completely.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. Making an educated guess about what may happen or what information may appear in a text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. Reading a text quickly to understand its general idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. Looking quickly through a text to find specific information such as names, dates, and numbers.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. Creating mental pictures of the people, places, and events described in a text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. Relating a text to personal experiences, other texts, or real-world events.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. Giving a shorter version of a text using only its most important ideas.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. Checking whether the information being read is clear and understandable.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. A strategy that involves using questions before, during, and after reading.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the letter of the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What is the main purpose of reading comprehension?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. To memorize every word in a text</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. To understand the meaning of written information</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. To read as quickly as possible</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. To count the number of sentences</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. A learner examines the title, headings, and pictures before reading an article. What strategy is being used?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Scanning</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Summarizing</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Previewing</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Visualizing</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. A student looks through a school announcement to find the date of an event. Which strategy is used?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Scanning</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Predicting</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Making connections</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Skimming</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. A learner imagines a beautiful garden while reading its description in a story. What strategy is being applied?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Monitoring understanding</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Visualizing</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Previewing</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Summarizing</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. After reading a long passage, a learner writes only its most important ideas in a shorter form. What strategy is used?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Predicting</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Asking questions</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Skimming</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Summarizing</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why are reading comprehension strategies important when reading a text? Explain at least two strategies and how they can help you understand what you read.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 11 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=11" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 11
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 12 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson11_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 11 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 11. You can now proceed to Lesson 12!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=12";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 12 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 11 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  12: {
    title: "READEFINE - Quiz 12: Identifying Main Ideas",
    subtitle: "Exam-Lesson 12 Assessment",
    heading: "Identifying Main Ideas Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson12ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 12: Identifying Main Ideas</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 12.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. The central point or most important message of a paragraph.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The general subject being discussed in a text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. Information that explains or provides evidence for the central point.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A main idea that is directly expressed in a paragraph.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. A main idea that readers must determine from the supporting details.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The process of identifying the most important information in a paragraph.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. The information that explains, describes, or gives examples of the central point.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. The general subject that a paragraph focuses on.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. A sentence that directly communicates the central message of a paragraph.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The overall message that the author wants readers to understand.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the letter of the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What is the main idea of a paragraph?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. The least important information</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. The central point of the paragraph</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. The longest word in the paragraph</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. The title of the reading material</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Read the paragraph: "Dogs make wonderful pets. They can provide companionship, help protect homes, and bring happiness to families." What is the main idea?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Dogs need food every day.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Dogs make wonderful pets.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Families live in different houses.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Dogs enjoy playing outside.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What do supporting details do?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Explain and develop the main idea</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Replace the topic of the paragraph</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Make the paragraph unrelated</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Remove important information</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which statement describes an implied main idea?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. It is directly written in the title.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. It is always the first sentence.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. It must be understood from the supporting details.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. It is unrelated to the paragraph.</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. What should a reader do first when identifying the main idea?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Ignore the entire paragraph.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Read the paragraph carefully.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Focus only on the last word.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Count the number of sentences.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why is identifying the main idea important when reading? Explain how the main idea and supporting details work together to help readers understand a paragraph.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 12 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=12" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 12
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 13 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson12_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 12 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 12. You can now proceed to Lesson 13!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=13";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 13 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 12 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  13: {
    title: "READEFINE - Quiz 13: Recognizing Supporting Details",
    subtitle: "Exam-Lesson 13 Assessment",
    heading: "Recognizing Supporting Details Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson13ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 13: Recognizing Supporting Details</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 13.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. Pieces of information that explain or develop the main idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. Statements that can be checked or proven to be true.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. Specific situations or items used to explain an idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. Information that describes the characteristics of a person, place, or thing.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. Information that gives reasons or makes an idea easier to understand.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. Details that are directly connected to the main idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. Information that does not directly support the central message.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. The central point that supporting details help explain.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. Information that provides additional explanation about a topic.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The process of determining whether information is connected to the main idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the letter of the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What is the purpose of supporting details?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. To replace the main idea</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. To explain and develop the main idea</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. To change the topic</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. To make a paragraph confusing</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which of the following is an example of a fact?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Blue is the most beautiful color.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Everyone loves reading.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Water freezes at 0°C under standard atmospheric pressure.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Reading is always boring.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Read the main idea: "Exercise is beneficial to the body." Which detail is relevant?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Exercise can strengthen muscles.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. My favorite subject is mathematics.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. The classroom has many chairs.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Some people enjoy watching television.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which supporting detail provides a specific example?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Plants need water to grow.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Apples, bananas, and oranges are examples of fruits.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Water is important for life.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Reading improves understanding.</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. What should a reader identify first when recognizing supporting details?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. The longest sentence</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. The final word</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. The main idea</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. The number of paragraphs</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain why supporting details are important in a paragraph. Give an example of a main idea and at least two supporting details that explain it.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 13 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=13" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 13
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 14 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson13_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 13 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 13. You can now proceed to Lesson 14!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=14";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 14 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 13 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  14: {
    title: "READEFINE - Quiz 14: Sequencing Events and Ideas",
    subtitle: "Exam-Lesson 14 Assessment",
    heading: "Sequencing Events and Ideas Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson14ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 14: Sequencing Events and Ideas</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 14.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. The process of arranging events or ideas in the correct order.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. An arrangement of events according to the time they happened.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. An arrangement of ideas in a way that makes sense.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. Words or phrases that show the order of events or actions.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The first part of a story that introduces the characters or situation.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The part of a story where the main events or problems develop.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. The final part of a story where the events finish.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A signal word commonly used to introduce the first step.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. A signal word commonly used to introduce the last step.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The process of organizing events from the earliest to the latest.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the letter of the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What does sequencing mean?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Arranging events or ideas in order</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Identifying unfamiliar words</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Finding the meaning of a sentence</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Comparing two characters</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which arrangement follows chronological order?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Important, unimportant, and unrelated ideas</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Events arranged according to when they happened</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Words arranged alphabetically</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Sentences arranged according to length</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which word commonly signals the final step?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Before</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. First</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Finally</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Meanwhile</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which part of a story usually introduces the characters and setting?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Middle</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Ending</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Conclusion</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Beginning</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. What should a reader do when arranging events in the correct order?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Ignore the time clues.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Look for sequence words and clues.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Arrange events randomly.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Choose the longest event first.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why is sequencing important when reading stories and following instructions? Give an example of a situation where arranging events in the correct order is necessary.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 14 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=14" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 14
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 15 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson14_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 14 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 14. You can now proceed to Lesson 15!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=15";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 15 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 14 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  15: {
    title: "READEFINE - Quiz 15: Making Inferences",
    subtitle: "Exam-Lesson 15 Assessment",
    heading: "Making Inferences Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson15ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 15: Making Inferences</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 15.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A reasonable conclusion made using textual clues and prior knowledge.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. Words and details in a text that help readers understand information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. Information and experiences that readers already have before reading.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. Information that is directly stated in a text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. A conclusion that is not directly stated but is supported by details.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The process of combining textual clues with what a reader already knows.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. Details that help readers understand a character's actions or feelings.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A conclusion about a situation based on available information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The knowledge or experiences used to understand something new.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. Information from a text that helps support a conclusion.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the letter of the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What is an inference?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. A random guess without evidence</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. A conclusion based on clues and prior knowledge</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. A sentence copied from the text</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. A list of unfamiliar words</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Read the sentence: "Carlo wore a thick jacket and gloves before going outside." What can you reasonably infer?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. The weather may be cold.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Carlo is going swimming.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Carlo is preparing a meal.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Carlo is attending a birthday party.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which of the following is an example of explicit information?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Maria may be tired.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. The character probably feels sad.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. The text directly states that Pedro arrived at school at 7:00 a.m.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. The weather may become rainy.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. What should readers use together to make an inference?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Textual clues and prior knowledge</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Personal opinions only</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Random guesses and unrelated ideas</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Titles and page numbers only</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Read the sentence: "Ella kept looking at the entrance and checking her phone." What is a reasonable inference?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Ella may be waiting for someone.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Ella is cooking dinner.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Ella is cleaning the classroom.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Ella is sleeping.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain how making inferences helps readers understand a text. Give one example of a situation and show how clues can help you make a reasonable conclusion.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 15 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=15" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 15
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 16 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson15_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 15 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 15. You can now proceed to Lesson 16!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=16";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 16 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 15 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  16: {
    title: "READEFINE - Quiz 16: Understanding Text Structure",
    subtitle: "Exam-Lesson 16 Assessment",
    heading: "Understanding Text Structure Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson16ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 16: Understanding Text Structure</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 16.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the type of text structure or term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. The way information and ideas are organized in a written text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. A structure that explains the characteristics or qualities of a subject.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. A structure that presents events or steps in the order they happen.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A structure that identifies similarities between two or more subjects.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. A structure that identifies differences between two or more subjects.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. A structure that explains why something happens and what results from it.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. The reason something happens.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. The result or outcome of an event.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. A structure that presents an issue and explains possible ways to address it.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. Words or phrases that help readers recognize how information is organized.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the letter of the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What does text structure refer to?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. The number of words in a paragraph</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. The organization of information in a text</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. The spelling of difficult words</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. The number of characters in a story</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which text structure explains similarities and differences?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Description</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Sequence</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Compare and Contrast</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Problem and Solution</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Read the sentence: "The roads became slippery because it rained heavily." Which text structure is used?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Cause and Effect</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Description</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Compare and Contrast</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Sequence</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which signal word commonly indicates a sequence?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Unlike</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Because</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Finally</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. However</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. A passage explains that students have difficulty organizing their assignments and suggests using a planner. What structure is used?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Description</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Problem and Solution</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Compare and Contrast</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Chronological Order</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why is understanding text structure important when reading? Explain at least two types of text structure and provide an example of each.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 16 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=16" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 16
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 17 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson16_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 16 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 16. You can now proceed to Lesson 17!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=17";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 17 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 16 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  17: {
    title: "READEFINE - Quiz 17: Paragraph Structure and Organization",
    subtitle: "Exam-Lesson 17 Assessment",
    heading: "Paragraph Structure and Organization Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson17ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 17: Paragraph Structure and Organization</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 17.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A group of related sentences that develop one main idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The sentence that introduces the main idea of a paragraph.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. Sentences that explain or develop the topic sentence.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A sentence that ends a paragraph by restating the main idea or giving a final thought.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The quality of a paragraph in which all sentences support one main idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The quality of a paragraph in which ideas are connected logically and clearly.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. Words or phrases used to connect ideas and sentences.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. The central point discussed in a paragraph.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The process of arranging ideas in a clear and meaningful order.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The sentence that tells readers what a paragraph will discuss.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the letter of the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What is a paragraph?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. A group of unrelated words</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. A group of related sentences about one main idea</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. A list of punctuation marks</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. A single letter or symbol</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which part of a paragraph introduces its main idea?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Supporting Sentence</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Concluding Sentence</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Topic Sentence</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Transition Word</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What is the purpose of supporting sentences?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. To explain and develop the topic sentence</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. To introduce an unrelated topic</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. To replace every sentence</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. To end the paragraph immediately</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which term refers to keeping all sentences related to one main idea?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Coherence</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Unity</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Sequencing</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Prediction</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Which word can be used to show the final step in an organized paragraph?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. However</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Unlike</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Finally</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Because</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain the three main parts of a paragraph and describe how unity and coherence make a paragraph easier to understand.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 17 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=17" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 17
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 18 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson17_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 17 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 17. You can now proceed to Lesson 18!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=18";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 18 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 17 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  18: {
    title: "READEFINE - Quiz 18: Writing Clear and Complete Sentences",
    subtitle: "Exam-Lesson 18 Assessment",
    heading: "Writing Clear and Complete Sentences Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson18ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 18: Writing Clear and Complete Sentences</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 18.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A group of words that expresses a complete thought.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The part of a sentence that identifies who or what the sentence is about.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. The part of a sentence that tells what the subject does or what is said about it.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A quality of writing that makes a sentence easy to understand.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The process of expressing ideas directly and understandably through sentences.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the letter of the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which of the following is a complete sentence?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Because the teacher arrived</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. The students finished their activity.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. After the examination</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. While waiting for the bus</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. What is the subject in the sentence "The little boy kicked the ball"?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Kicked the ball</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. The little boy</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. The ball</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Kicked</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which sentence is a sentence fragment?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. The children played outside.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. My mother prepared dinner.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. After the class ended.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. The teacher checked the papers.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which sentence contains a run-on error?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. I studied, and I completed my assignment.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. I studied for the test I reviewed my notes.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. I studied for the test.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. I reviewed my notes carefully.</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Which sentence communicates information more clearly?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. The thing was put there.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. It was done by someone.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Mark placed the notebook on the desk.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. That one is over there.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why is it important to write clear and complete sentences? Explain the difference between a sentence fragment and a run-on sentence.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 18 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=18" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 18
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 19 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson18_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 18 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 18. You can now proceed to Lesson 19!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=19";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 19 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 18 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  19: {
    title: "READEFINE - Quiz 19: Sentence Combining and Paragraph Development",
    subtitle: "Exam-Lesson 19 Assessment",
    heading: "Sentence Combining and Paragraph Development Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson19ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 19: Sentence Combining and Paragraph Development</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 19.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. The process of joining two or more related sentences to form a clear sentence.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. Words used to connect words, phrases, or clauses.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. The group of seven coordinating conjunctions remembered through the word FANBOYS.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A conjunction that connects a dependent clause to an independent clause.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. A word such as "who," "which," or "that" used to introduce a clause about a noun.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The process of expanding a main idea using supporting information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. Information that provides specific situations or items to explain an idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. Information that can be checked or proven to support a topic.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The unnecessary use of the same words or ideas repeatedly in writing.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. A word or phrase that helps connect ideas and improve the flow of writing.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the letter of the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What is sentence combining?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Separating every word into letters</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Joining related sentences to create a clear sentence</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Removing all punctuation marks</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Changing a paragraph into a list of words</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which of the following is a coordinating conjunction?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Because</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Although</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. And</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. When</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which sentence correctly combines the ideas "It was raining" and "We stayed inside"?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. It was raining we stayed inside.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. We stayed inside because it was raining.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. It raining because inside.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Because we stayed inside it was raining and.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which word is a relative pronoun?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Although</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Because</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Who</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Finally</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. What is the purpose of paragraph development?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. To remove supporting details</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. To make a paragraph longer using unrelated ideas</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. To expand the main idea with relevant information</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. To repeat the same sentence many times</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain how sentence combining improves writing. Describe how supporting details and examples help develop a paragraph.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 19 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=19" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 19
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 20 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson19_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 19 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 19. You can now proceed to Lesson 20!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=20";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 20 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 19 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  20: {
    title: "READEFINE - Quiz 20: Summarizing and Paraphrasing",
    subtitle: "Exam-Lesson 20 Assessment",
    heading: "Summarizing and Paraphrasing Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson20ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 20: Summarizing and Paraphrasing</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 20.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. The process of presenting the most important ideas of a text in a shorter form.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The process of restating information using different words and sentence structures while keeping the original meaning.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. The central message or most important point of a text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A shorter version of a text that includes only its most important information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The use of different words with similar meanings when restating a sentence.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. Changing the arrangement of words and sentences while preserving the original meaning.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. Presenting another person's words or ideas as one's own without giving proper credit.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A quality of a good summary that means the information must keep the original meaning.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. A quality of writing that avoids adding personal opinions not found in the original text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The practice of acknowledging the original source of borrowed information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Direction: Choose the letter of the best answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What is summarizing?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Repeating every sentence in a text</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Presenting the most important ideas in a shorter form</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Changing the topic of a passage</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Adding personal opinions to an article</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. What is paraphrasing?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Copying a passage word for word</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Removing all important details</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Restating information using different words while keeping its meaning</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Writing an unrelated paragraph</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which statement best describes the difference between summarizing and paraphrasing?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Summarizing focuses on the main ideas, while paraphrasing restates information in different words.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Both require copying the original text exactly.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Summarizing adds new information, while paraphrasing removes the original meaning.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. There is no difference between the two.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which of the following is an example of plagiarism?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Giving credit to the original author</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Writing a summary in your own words and citing the source when required</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Presenting another person's ideas as your own without proper credit</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Using your own example to explain a lesson</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. What should a writer do when paraphrasing information from a source?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Change the meaning of the original information.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Use different words and sentence structures while keeping the meaning.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Copy every sentence without changes.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Remove all important information.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain the difference between summarizing and paraphrasing. Why are these two skills important for students when reading and writing academic work?</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Final Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=20" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 20
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Finish Level 2 🎓
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson20_completed', 'true');
        modalIcon.innerText = "🎓";
        modalTitle.innerText = "Level 2 Completed!";
        modalDesc.innerText = "Congratulations! You have completed Lesson 20 and finished the entirety of Level 2!";
        modalBtn.innerText = "Return to Lessons Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "levels.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "levels.html";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Level Completion Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 20 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  21: {
    title: "READEFINE - Quiz 21: Fact and Opinion",
    subtitle: "Exam-Lesson 21 Assessment",
    heading: "Fact and Opinion Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson21ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 21: Fact and Opinion</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 21.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A statement that can be proven through evidence.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. A statement that expresses a personal belief or judgment.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. Information used to verify whether a statement is true or false.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A word that expresses a person's personal belief, such as "I think."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. A statement that can be checked through reliable records.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. A personal preference that may differ among individuals.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. The process of determining whether information is factual or opinion-based.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A statement that expresses what someone believes should happen.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. Information that supports the truth of a statement.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. A personal judgment about a subject.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which statement is a fact?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Reading is boring.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. The Earth revolves around the Sun.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Blue is the prettiest color.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. English is the easiest subject.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which statement expresses an opinion?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. There are seven days in a week.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Water is composed of hydrogen and oxygen.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Everyone should read books every day.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. The Philippines is in Southeast Asia.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which expression commonly introduces an opinion?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. According to the record</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. I believe</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. The data shows</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Research confirms</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Why is it important to identify facts and opinions?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. To avoid reading long texts</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. To accept every statement</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. To evaluate information carefully</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. To memorize every sentence</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Which statement needs evidence to be verified?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Chocolate is the best dessert.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. The school has 500 enrolled students.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Dancing is more enjoyable than singing.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Summer is the most exciting season.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why is it important to distinguish facts from opinions when reading information online or on social media? Give one example.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 21 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=21" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 21
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 22 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson21_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 21 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully kicked off Level 3 with Lesson 21!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=22";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 22 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 21 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  22: {
    title: "READEFINE - Quiz 22: Identifying Bias and Point of View",
    subtitle: "Exam-Lesson 22 Assessment",
    heading: "Identifying Bias and Point of View Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson22ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 22: Identifying Bias and Point of View</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 22.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A preference or tendency that may influence how information is presented.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. A perspective from which a writer presents information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. Bias that focuses mainly on favorable qualities.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. Bias that focuses mainly on unfavorable qualities.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. Bias caused by choosing information that does not represent the whole group.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. Bias that happens when important information is left out.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. A point of view that commonly uses the pronoun "I."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A point of view that directly addresses the reader using "you."</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. A point of view that uses pronouns such as he, she, and they.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The ability to examine information fairly and consider different perspectives.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which situation demonstrates selection bias?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Interviewing students from different grade levels</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Surveying only students who dislike a school policy</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Including both advantages and disadvantages</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Presenting information from different sources</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which sentence uses first-person point of view?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. She enjoys reading novels.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. You should read the instructions.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. I learned something new today.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. They visited the library.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. A writer discusses only the negative effects of a program. What may be present?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Positive bias</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Negative bias</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Third-person point of view</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Chronological order</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. What is the main difference between bias and point of view?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Bias is always factual.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Point of view is always unfair.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Bias involves preference, while point of view is perspective.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. They have exactly the same meaning.</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Why should readers recognize bias?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. To believe everything they read</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. To avoid reading different opinions</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. To evaluate information more fairly</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. To ignore the author's message</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">How can bias affect the way readers understand information? Give an example of a biased statement and explain how a reader should evaluate it.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 22 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=22" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 22
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 23 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson22_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 22 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully completed Lesson 22!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=23";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 23 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 22 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  23: {
    title: "READEFINE - Quiz 23: Evaluating Sources of Information",
    subtitle: "Exam-Lesson 23 Assessment",
    heading: "Evaluating Sources of Information Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson23ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 23: Evaluating Sources of Information</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 23.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. Materials or individuals that provide information about a topic.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. Sources that provide original or firsthand information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. Sources that interpret or analyze information from other sources.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. The quality of information being correct and supported by evidence.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The quality of a source that shows the author's knowledge or qualifications.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The quality of information being updated and appropriate to the present time.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. The connection between information and the topic being studied.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. The quality of presenting information fairly.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. A written record of a person's personal experiences.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The process of checking whether an information source is trustworthy.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which is an example of a primary source?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. A textbook about World War II</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. A diary written by a soldier during World War II</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. A modern article analyzing World War II</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. A documentary explaining historical events</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which is an example of a secondary source?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. An original photograph</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. A personal diary</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. A textbook explaining historical events</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. An original government record</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What should readers check when evaluating a website?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. The color of the website</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. The number of advertisements only</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. The author's qualifications and supporting evidence</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. The length of the website address only</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which characteristic refers to information being updated?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Authority</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Currency</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Relevance</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Objectivity</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Why should information be compared with other reliable sources?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. To make the research longer</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. To avoid understanding the topic</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. To check consistency and accuracy</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. To copy information from different websites</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why is evaluating sources important when doing research or searching for information online? Mention at least two characteristics of a reliable source.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 23 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=23" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 23
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 24 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson23_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 23 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 23!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=24";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 24 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 23 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  24: {
    title: "READEFINE - Quiz 24: Understanding Tone and Author's Purpose",
    subtitle: "Exam-Lesson 24 Assessment",
    heading: "Understanding Tone and Author's Purpose Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson24ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 24: Understanding Tone and Author's Purpose</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 24.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. The writer's attitude toward the subject or audience.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The main reason a writer creates a text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. A tone that uses professional and respectful language.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A tone that uses casual and conversational expressions.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. A tone that creates amusement or laughter.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. A tone that expresses hope and confidence.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. A writing purpose that provides facts and knowledge.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A writing purpose that attempts to influence the reader.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. A writing purpose that aims to provide enjoyment.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The words and expressions selected by a writer to communicate a message.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What is the tone of this sentence? <br><em>"The results of the investigation must be examined carefully."</em></p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Humorous</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Serious</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Informal</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Excited</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. What is the author's purpose of a newspaper article reporting recent events?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. To entertain</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. To persuade</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. To inform</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. To confuse</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which statement is written to persuade?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. The Earth has one natural satellite.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Please support the community reading program.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Water is essential for life.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. The story happened in a small village.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. What should readers examine to identify the tone of a text?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Word choice</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Page number only</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Font size only</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Number of paragraphs only</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. What is the difference between tone and author's purpose?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Tone is the reason for writing, while purpose is the attitude.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Tone and purpose mean exactly the same thing.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Tone is the writer's attitude, while purpose is the reason for writing.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Tone refers only to emotions, while purpose refers only to facts.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why is it important to understand the tone and author's purpose of a text? Give an example.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 24 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=24" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 24
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 25 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson24_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 24 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 24!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=25";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 25 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 24 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  25: {
    title: "READEFINE - Quiz 25: Drawing Conclusions",
    subtitle: "Exam-Lesson 25 Assessment",
    heading: "Drawing Conclusions Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson25ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 25: Drawing Conclusions</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 25.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A judgment or understanding reached after examining information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The process of using details and reasoning to form a logical understanding.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. Facts, examples, or observations that support a judgment.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. The process of using logic to connect information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. An idea or judgment formed without enough supporting information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. Information that helps readers understand a situation.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. A final judgment supported by available details.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. The ability to examine information and form reasonable judgments.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. Details that help explain why a conclusion is reasonable.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. A statement that presents the result of examining evidence.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What is the best basis for drawing a conclusion?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Personal guesses only</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Evidence and reasoning</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Unrelated opinions</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Random information</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. A student practices spelling every day and makes fewer spelling mistakes. What is the most reasonable conclusion?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Practice may improve spelling skills.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Spelling is impossible to learn.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. The student should stop studying.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. All students learn in exactly the same way.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What makes a conclusion different from a guess?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. A conclusion is always short.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. A guess is always correct.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. A conclusion is supported by evidence.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. A conclusion does not need reasoning.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which of the following is evidence?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. "I think the library is beautiful."</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. A record showing increased library visits.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. "The library is probably boring."</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. An unsupported personal assumption.</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Why is drawing conclusions important?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. It helps readers make logical judgments.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. It removes the need to read.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. It encourages unsupported assumptions.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. It prevents readers from examining details.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain how you draw conclusions when reading a story or article. Why should your conclusion be supported by evidence?</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Final Level 3 Exam 🎓
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=25" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 25
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Finish Level 3 🏆
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson25_completed', 'true');
        modalIcon.innerText = "🎓";
        modalTitle.innerText = "Level 3 Completed!";
        modalDesc.innerText = "Congratulations! You have completed Lesson 25 and mastered all of Level 3!";
        modalBtn.innerText = "Return to Lessons Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "levels.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "levels.html";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Level Completion Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 25 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  26: {
    title: "READEFINE - Quiz 26: Comparing and Contrasting Texts",
    subtitle: "Exam-Lesson 26 Assessment",
    heading: "Comparing and Contrasting Texts Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson26ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 26: Comparing and Contrasting Texts</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 26.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. The process of identifying similarities between two or more subjects.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The process of identifying differences between two or more subjects.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. A signal word that indicates similarity.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A signal word that indicates contrast.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. A method that compares subjects one feature at a time.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. A method that discusses one subject completely before discussing another.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. A word that indicates two things share similar qualities.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A phrase that introduces a difference between ideas.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The process of examining two or more texts to identify their similarities and differences.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. Information that shows how two subjects are not alike.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which word commonly signals comparison?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. However</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Unlike</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Similarly</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Whereas</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which phrase commonly signals contrast?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Both</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Likewise</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Also</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. On the other hand</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What is the purpose of comparing texts?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. To identify similarities and differences</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. To remove important information</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. To avoid reading different texts</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. To make all texts identical</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which method discusses one feature at a time?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Block method</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Point-by-point method</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Chronological method</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Cause-and-effect method</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. "Both dogs and cats can be kept as household pets." What does the sentence show?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Contrast</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Comparison</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Cause and effect</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Problem and solution</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Compare and contrast online learning and face-to-face learning. Give at least one similarity and two differences.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 26 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=26" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 26
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 27 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson26_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 26 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 26!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=27";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 27 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 26 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  27: {
    title: "READEFINE - Quiz 27: Critical Reading and Analysis",
    subtitle: "Exam-Lesson 27 Assessment",
    heading: "Critical Reading and Analysis Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson27ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 27: Critical Reading and Analysis</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 27.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. An active process of questioning and evaluating written information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The process of examining parts of a text to understand how ideas are developed.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. A statement or position that a writer wants readers to accept.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. Facts or examples used to support a claim.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. An idea accepted as true without sufficient proof.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. A statement presented by a writer as something readers should believe.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. The process of examining whether an argument is reasonable and supported.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A source of information used to support an argument.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. A possible weakness in an argument caused by insufficient supporting information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The ability to think carefully and evaluate information before accepting it.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What should a critical reader do?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Accept every statement immediately</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Ignore the author's evidence</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Question and evaluate the information</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Read only the title</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which of the following is a claim?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. The school recorded 200 library visits.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Students should be encouraged to read daily.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. The report was published in June.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. The library contains 500 books.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which of the following is evidence?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. "Reading is the best hobby."</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. "I believe libraries are important."</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. A survey showing increased reading activity.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. "Everyone should agree with me."</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. What is an assumption?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. A conclusion supported by strong evidence</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. An idea accepted without sufficient proof</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. A verified research result</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. An official record</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Why should readers evaluate arguments?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. To identify whether claims are supported</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. To memorize every word</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. To avoid examining evidence</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. To accept all opinions</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain why critical reading is important when using social media, websites, and other sources of information. Give one example of how you can apply it.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 27 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=27" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 27
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 28 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson27_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 27 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 27!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=28";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 28 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 27 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  28: {
    title: "READEFINE - Quiz 28: Interpreting Graphs, Tables, and Visual Information",
    subtitle: "Exam-Lesson 28 Assessment",
    heading: "Interpreting Graphs and Tables Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson28ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 28: Interpreting Graphs, Tables, and Visual Information</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 28.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. Information presented through graphs, tables, charts, and images.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. A format that organizes information into rows and columns.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. A graph that uses rectangular bars to compare categories.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A graph that uses connected points to show changes over time.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. A circular graph divided into sections representing parts of a whole.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The words or information that identify the categories in a graph.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. The measurement or quantity represented by a value.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A general pattern or direction shown by data.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The process of examining and understanding information presented visually.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The information that identifies what a graph or table is about.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which graph is most suitable for comparing the number of students in different courses?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Line graph</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Bar graph</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Pie chart</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Flowchart</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which graph is commonly used to show changes over time?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Line graph</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Pie chart</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Table only</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Picture diagram</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What does a pie chart usually represent?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Steps in a process</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Parts of a whole</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Changes in temperature over time only</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Written paragraphs</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. What should readers examine first when interpreting a graph?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. The color only</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. The title and labels</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. The page decoration</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. The author's handwriting</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. A table shows 40 students in English, 30 in Science, and 20 in Mathematics. Which subject has the highest number?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Science</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Mathematics</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. English</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. All have equal numbers</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why is it important to understand graphs, tables, and other visual information? Give an example of how they can be useful in everyday life.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 28 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=28" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 28
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 29 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson28_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 28 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 28!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=29";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 29 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 28 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  29: {
    title: "READEFINE - Quiz 29: Understanding Informational and Argumentative Texts",
    subtitle: "Exam-Lesson 29 Assessment",
    heading: "Informational vs. Argumentative Texts Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson29ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 29: Informational and Argumentative Texts</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 29.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A type of text that provides facts and explanations about a topic.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. A type of text that presents a position supported by reasons and evidence.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. The main position that a writer wants readers to accept.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. Explanations that show why a writer supports a claim.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. Facts, statistics, and examples used to support an argument.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. An opposing viewpoint that challenges a writer's claim.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. A response that explains why the writer's position remains reasonable.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. The final part of an argumentative text that reinforces the main position.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The main purpose of informational writing.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The main purpose of argumentative writing.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which is an example of informational writing?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. An article explaining the water cycle</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. An essay convincing students to exercise</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. A letter asking for a school policy change</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. An editorial supporting a particular issue</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which is an example of argumentative writing?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. A textbook explaining photosynthesis</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. A dictionary defining vocabulary</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. An essay arguing that schools should provide reading programs</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. A report listing the parts of a plant</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What is the purpose of evidence in an argumentative text?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. To confuse readers</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. To support the writer's claim</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. To replace the conclusion</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. To remove the main idea</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. What is a counterargument?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. The writer's final sentence</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. An opposing viewpoint</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. A list of definitions</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. A supporting example only</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. What is the main difference between informational and argumentative texts?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Informational texts explain, while argumentative texts defend a position.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Informational texts are always longer.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Argumentative texts do not use evidence.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Both have exactly the same purpose.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain the difference between informational and argumentative texts. Give one example of each and describe their purposes.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 29 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=29" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 29
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 30 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson29_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 29 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully completed Lesson 29!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=30";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 30 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 29 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  30: {
    title: "READEFINE - Quiz 30: Building Evidence-Based Arguments",
    subtitle: "Exam-Lesson 30 Assessment",
    heading: "Building Evidence-Based Arguments Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson30ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 30: Building Evidence-Based Arguments</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 30.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. An argument supported by facts, information, and reliable evidence.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The main position that a writer wants to defend.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. An explanation of why a claim should be accepted.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. Information used to support a claim or reason.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. A discussion explaining how evidence supports an argument.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. An opposing viewpoint presented against a claim.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. A response that addresses an opposing viewpoint.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A claim that is presented without sufficient supporting information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. Making a broad statement based on limited information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. Attacking a person instead of addressing the person's argument.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What makes an argument strong?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Personal attacks</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Unsupported opinions</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Relevant evidence and logical reasoning</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Unrelated information</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which is an example of evidence?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. "I think reading is important."</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. A research report showing improved reading scores</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. "Everyone should agree with me."</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. "Reading is probably the best activity."</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What should a writer do after presenting a claim?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Provide reasons and supporting evidence.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Change the topic immediately.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Attack people who disagree.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Ignore opposing viewpoints.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which is an example of overgeneralization?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Some students prefer online learning.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. A survey included 100 students.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. All students dislike mathematics because one student said so.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. The report presents different opinions.</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. What is the purpose of a rebuttal?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. To introduce an unrelated topic</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. To respond to an opposing viewpoint</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. To remove all evidence</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. To attack the writer</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Create a short evidence-based argument about why students should develop good reading habits. Include a claim, at least one reason, and supporting evidence.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Complete READEFINE Course 🎓🏆
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=30" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 30
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Graduate Level 3 🎓
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson30_completed', 'true');
        localStorage.setItem('readefine_level3_graduated', 'true');
        modalIcon.innerText = "🏆🎓";
        modalTitle.innerText = "READEFINE Level 3 Completed!";
        modalDesc.innerText = "Congratulations! You have completed Lesson 30 and officially graduated Level 3!";
        modalBtn.innerText = "Go to Dashboard";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "dashboard.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "dashboard.html";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Graduation Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 30 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  31: {
    title: "READEFINE - Quiz 31: Advanced Vocabulary in Context",
    subtitle: "Exam-Lesson 31 Assessment",
    heading: "Advanced Vocabulary in Context Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson31ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 31: Advanced Vocabulary in Context</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 31.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. Words commonly used in academic, professional, or formal communication.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. Understanding an unfamiliar word through surrounding information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. The literal or dictionary meaning of a word.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. The feelings or associations connected to a word.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. Words that have similar meanings.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. Words that have opposite meanings.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. Words that share the same spelling or pronunciation but have different meanings.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. Words formed from the same root word.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. A type of connotation that creates a favorable impression.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. A type of connotation that creates an unfavorable impression.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What does the word "commence" mean?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Finish</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Begin</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Forget</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Remove</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which pair consists of synonyms?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Happy and joyful</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Hot and cold</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Begin and end</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Ancient and modern</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What does denotation refer to?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. A word's emotional meaning</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. A word's literal meaning</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. A person's opinion</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. A word's pronunciation only</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which word has a generally positive connotation?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Skinny</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Slender</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Weak</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Careless</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Why are context clues useful?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. They help readers guess without reading.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. They help readers understand unfamiliar words.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. They replace the need for vocabulary.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. They make every word have the same meaning.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why is developing advanced vocabulary important in academic and everyday communication? Give at least two examples of advanced vocabulary words and their meanings.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 31 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=31" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 31
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 32 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson31_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 31 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully started Level 4 with Lesson 31!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=32";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 32 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 31 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  32: {
    title: "READEFINE - Quiz 32: Complex Sentence Structures",
    subtitle: "Exam-Lesson 32 Assessment",
    heading: "Complex Sentence Structures Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson32ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 32: Complex Sentence Structures</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 32.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A group of words containing a subject and a verb.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. A clause that expresses a complete thought.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. A clause that does not express a complete thought by itself.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A sentence containing one independent clause.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. A sentence containing two or more independent clauses.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. A sentence containing one independent clause and at least one dependent clause.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. A sentence containing at least two independent clauses and one dependent clause.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A group of coordinating conjunctions represented by the acronym FANBOYS.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. A word that connects a dependent clause to an independent clause.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. A sentence structure that expresses a complete thought using only one independent clause.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which is an independent clause?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Because she was tired</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Although it was raining</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. The students completed their activity.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. When the teacher arrived</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. What type of sentence is this? <br><em>"I studied hard, and I passed the examination."</em></p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Simple</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Compound</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Complex</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Compound-complex</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What type of sentence is this? <br><em>"Because it was raining, we stayed inside."</em></p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Simple</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Compound</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Complex</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Compound-complex</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which of the following is a subordinating conjunction?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. And</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. But</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Because</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Or</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Which sentence is compound-complex?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. The students read books.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. She studied, and he reviewed.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Although it was late, she continued reading, and her brother prepared notes.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. When the bell rang.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain the importance of using different sentence structures in writing. Provide one example of a compound sentence and one example of a complex sentence.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 32 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=32" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 32
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 33 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson32_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 32 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 32!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=33";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 33 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 32 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  33: {
    title: "READEFINE - Quiz 33: Advanced Grammar and Sentence Correction",
    subtitle: "Exam-Lesson 33 Assessment",
    heading: "Advanced Grammar and Sentence Correction Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson33ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 33: Advanced Grammar and Sentence Correction</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 33.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A grammar rule requiring subjects and verbs to agree in number and person.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The correct and consistent use of verb tenses.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. A grammar rule requiring pronouns to correspond correctly to the nouns they refer to.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. A word or group of words that describes another word.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. An incomplete group of words presented as a sentence.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. A sentence containing independent clauses joined incorrectly.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. A verb form used to describe an action happening now or regularly.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A verb form used to describe an action completed in the past.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The process of identifying and correcting grammatical errors.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The process of improving a sentence by correcting its grammar and structure.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which sentence demonstrates correct subject-verb agreement?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. She walk to school.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. They walks to school.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. He walks to school.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. The students walks to school.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which sentence uses the correct past tense?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Yesterday, I go to the market.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Yesterday, I went to the market.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Yesterday, I will go to the market.</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Yesterday, I going to the market.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which is a sentence fragment?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. The students completed the activity.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. She reads books every night.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Because the weather was cold.</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. We attended the meeting.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which sentence correctly fixes the run-on sentence? <br><em>"I was hungry I prepared some food."</em></p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. I was hungry, I prepared some food.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. I was hungry and prepared some food.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. I was hungry, so I prepared some food.</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. I was hungry I, prepared some food.</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. What is the purpose of sentence correction?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. To make sentences more confusing</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. To improve clarity and grammatical accuracy</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. To remove all verbs</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. To make every sentence longer</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why is grammar important in academic and professional communication? Give at least two examples of grammatical errors and explain how they can be corrected.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your essay response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 33 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=33" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 33
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 34 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson33_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 33 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 33!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=34";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 34 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 33 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  34: {
    title: "READEFINE - Quiz 34: Writing Coherent and Unified Paragraphs",
    subtitle: "Exam-Lesson 34 Assessment",
    heading: "Writing Coherent and Unified Paragraphs Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson34ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 34: Writing Coherent and Unified Paragraphs</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 34.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. The quality of a paragraph in which all sentences support one central idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The quality of a paragraph in which ideas are connected logically and smoothly.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. A sentence that introduces the main idea of a paragraph.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. Sentences that explain or provide details about the main idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. A sentence that provides closure to a paragraph.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. Words or phrases used to connect ideas.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. A transition word commonly used to introduce an additional idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A transition word commonly used to show contrast.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The central idea developed throughout a paragraph.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The process of arranging ideas in a clear and logical order.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What does paragraph unity mean?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Every sentence discusses a different topic.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. All sentences support one central idea.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. A paragraph contains only one sentence.</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. A paragraph has no supporting details.</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. What does coherence refer to?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Logical and smooth connection of ideas</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Use of difficult vocabulary only</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Number of words in a paragraph</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Use of unrelated information</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which sentence is most likely a topic sentence?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. "For example, students can read books."</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. "Reading improves students' learning abilities."</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. "Finally, reading is helpful."</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. "Furthermore, it develops vocabulary."</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which transition word shows contrast?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Furthermore</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Therefore</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. However</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. First</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Which sentence is unrelated to a paragraph about healthy eating?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Fruits provide important nutrients.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Vegetables are part of a balanced diet.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Drinking enough water supports health.</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. My favorite television show is a comedy.</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Write a short paragraph about the importance of time management. Include a topic sentence, at least two supporting sentences, and a concluding sentence.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your paragraph here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 34 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=34" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 34
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 35 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson34_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 34 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 34!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=35";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 35 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 34 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  35: {
    title: "READEFINE - Quiz 35: Essay Writing Fundamentals",
    subtitle: "Exam-Lesson 35 Assessment",
    heading: "Essay Writing Fundamentals Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson35ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 35: Essay Writing Fundamentals</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 35.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A structured piece of writing that discusses a particular subject.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The opening part of an essay that introduces the topic.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. The central statement that presents the main idea of an essay.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. The main section that develops and explains the essay's ideas.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The final part that summarizes the main points.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. A type of essay that tells a story or personal experience.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. A type of essay that describes a person, place, object, or experience.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A type of essay that explains a topic using facts and information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. A type of essay that presents a position supported by reasons and evidence.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The process of improving the content and organization of a written draft.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which part of an essay introduces the topic?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Body</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Introduction</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Conclusion</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. References</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. What is the main purpose of a thesis statement?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. To list unrelated examples</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. To present the essay's central idea</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. To end the essay</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. To introduce a new topic in the conclusion</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which type of essay tells a story?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Narrative</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Expository</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Argumentative</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Descriptive</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. What is the purpose of revising?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. To improve ideas and organization</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. To change every word</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. To remove the introduction</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. To submit the first draft immediately</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Which is the correct general structure of an essay?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Body, conclusion, introduction</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Conclusion, introduction, body</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Introduction, body, conclusion</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Introduction, conclusion, title only</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why is essay writing an important skill for students? Explain how the introduction, body, and conclusion contribute to an effective essay.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 35 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=35" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 35
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 36 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson35_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 35 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 35!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=36";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 36 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 35 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  36: {
    title: "READEFINE - Quiz 36: Writing Academic and Formal Texts",
    subtitle: "Exam-Lesson 36 Assessment",
    heading: "Writing Academic and Formal Texts Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson36ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 36: Writing Academic and Formal Texts</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 36.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A writing style commonly used in educational and research settings.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. A writing style that uses professional and respectful language.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. The quality of expressing ideas in an understandable way.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. The quality of presenting information based on facts and evidence rather than unsupported personal feelings.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The quality of arranging ideas in a logical order.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The quality of presenting correct information and details.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. Language that is appropriate for official or professional communication.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A type of writing commonly used to communicate research findings.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. Words or expressions commonly used in casual conversations rather than formal documents.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The process of communicating ideas in a professional and organized manner.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which is an example of academic writing?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. A research paper</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. A casual chat message</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. A personal text message</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. An informal social media comment</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which sentence is more appropriate for formal writing?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. "The results were super nice."</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. "The results were impressive."</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. "The results were kinda cool."</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. "The results were awesome."</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What does objectivity mean in academic writing?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Using personal feelings as the only basis</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Presenting information using facts and evidence</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Avoiding all supporting information</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Making unsupported statements</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which should be avoided in formal writing?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Clear explanations</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Appropriate vocabulary</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Unnecessary slang</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. Logical organization</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Why is accuracy important in academic writing?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. To make information reliable and correct</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. To make paragraphs longer</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. To avoid using evidence</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. To make every statement an opinion</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why should students learn to write academic and formal texts? Give examples of situations where formal writing is necessary.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 36 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=36" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 36
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 37 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson36_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 36 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 36!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=37";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 37 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 36 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  37: {
    title: "READEFINE - Quiz 37: Reading and Analyzing Longer Texts",
    subtitle: "Exam-Lesson 37 Assessment",
    heading: "Reading and Analyzing Longer Texts Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson37ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 37: Reading and Analyzing Longer Texts</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 37.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. Written materials containing multiple paragraphs, sections, or chapters.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The overall message developed throughout a longer text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. Information that explains or supports the central idea.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. Examining the title, headings, and introduction before reading.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. Questioning, highlighting, and taking notes while reading.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. Writing comments or notes beside important parts of a text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. Restating the most important ideas in a shorter form.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. Reading a difficult section again to improve understanding.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The process of examining how ideas are presented and developed in a text.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The ability to remain focused while reading extended materials.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which is an example of a longer text?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. A single word</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. A short greeting</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. A research article</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. A one-word response</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. What should readers identify to understand the overall message of a longer text?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Central idea</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Page color</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Number of letters</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Font style only</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What reading strategy involves writing notes beside important information?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Previewing</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Annotating</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Guessing</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Skimming only</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. What is the purpose of summarizing?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. To repeat every sentence</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. To present the important ideas briefly</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. To remove the central idea</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. To add unrelated information</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Why should readers examine how ideas develop throughout a longer text?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. To understand how the information is connected</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. To avoid reading the entire text</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. To ignore supporting details</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. To memorize every word</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">What strategies can you use when reading a long article, research paper, or book chapter? Explain how at least three strategies help improve your understanding.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 37 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=37" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 37
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 38 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson37_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 37 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 37!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=38";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 38 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 37 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  38: {
    title: "READEFINE - Quiz 38: Research and Information Literacy",
    subtitle: "Exam-Lesson 38 Assessment",
    heading: "Research and Information Literacy Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson38ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 38: Research and Information Literacy</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 38.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. A systematic process of gathering and analyzing information about a topic.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. The ability to recognize, locate, evaluate, and use information responsibly.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. Questions that guide an investigation.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. The process of checking whether information sources are reliable.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. Presenting another person's words or ideas as one's own without proper acknowledgment.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The acknowledgment of sources used in a written work.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. A citation style developed by the American Psychological Association.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. The process of arranging and examining collected information.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The act of giving proper credit to the original author.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The responsible use of information without misleading others or violating academic honesty.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. What is the first important step in conducting research?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Presenting the findings</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Identifying the research topic</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Writing the conclusion immediately</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Copying information from websites</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which is an example of plagiarism?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Citing a research article</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Paraphrasing with proper acknowledgment</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Copying another person's work without giving credit</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Using information from a reliable source with citation</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Why is citation important?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. To make a paper longer</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. To acknowledge the original source</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. To avoid reading the source</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. To replace the research process</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Which is a common citation style?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. APA</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. HTML</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. PDF</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. JPEG</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. What should a student do before using information from a website?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Accept everything immediately</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Check the source's reliability and relevance</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Copy the entire page</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Ignore the author's identity</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why are research and information literacy important for students? Explain how students can avoid plagiarism and use information responsibly.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 38 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=38" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 38
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 39 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson38_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 38 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 38!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=39";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 39 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 38 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  39: {
    title: "READEFINE - Quiz 39: Effective Written and Verbal Communication",
    subtitle: "Exam-Lesson 39 Assessment",
    heading: "Effective Written and Verbal Communication Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson39ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 39: Effective Written and Verbal Communication</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 39.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. Communication that uses written words and symbols.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. Communication that uses spoken words.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. The person who creates and sends a message.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. The information or idea being communicated.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The method used to deliver a message.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. The person who receives the message.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. The response given by the receiver.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. Giving full attention and making an effort to understand a speaker.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. The person or group for whom a message is intended.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The situation or environment in which communication takes place.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which is an example of written communication?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. A classroom speech</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. A face-to-face conversation</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. A formal email</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. A group discussion</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which is an example of verbal communication?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. A printed report</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. A spoken presentation</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. A written letter</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. A text message</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. What is feedback in communication?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. The response given by the receiver</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. The person sending the message</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. The communication channel</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. The topic of the conversation</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. What should a speaker consider before delivering a message?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. Audience, purpose, and context</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. Personal preference only</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. Message length only</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. The number of words only</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Which action demonstrates active listening?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Interrupting the speaker repeatedly</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Ignoring the discussion</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Paying attention and asking relevant questions</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Using a phone during the conversation</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Why is effective communication important in school and everyday life? Explain how written communication, verbal communication, and active listening help people communicate successfully.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 39 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=39" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 39
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Proceed to Lesson 40 →
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson39_completed', 'true');
        modalIcon.innerText = "🎉";
        modalTitle.innerText = "Lesson 39 Assessment Passed!";
        modalDesc.innerText = "Congratulations! You successfully mastered Lesson 39!";
        modalBtn.innerText = "Go to Exams Hub";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "exams.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "lesson.html?id=40";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Lesson 40 Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 39 Assessment first!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
  40: {
    title: "READEFINE - Quiz 40: Practical Literacy in Everyday Situations",
    subtitle: "Exam-Lesson 40 Assessment",
    heading: "Practical Literacy in Everyday Situations Exam",
    backHref: "exams.html",
    backText: "← Back to Exams Hub",
    styles: `
    .quiz-card { background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 24px; padding: 32px; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    .quiz-question { font-weight: 700; color: var(--deep-blue); margin-bottom: 14px; font-size: 1.05rem; }
    .quiz-options { display: flex; flex-direction: column; gap: 12px; }
    .quiz-option-label { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #F8FBFF; border: 1px solid var(--border-subtle); border-radius: 14px; font-size: 0.95rem; color: var(--text-dark); cursor: pointer; transition: all 0.2s ease; }
    .quiz-option-label:hover { background: #EAF2FF; border-color: var(--soft-blue); }
    .quiz-input-text { width: 100%; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 14px; font-family: inherit; font-size: 0.95rem; outline: none; background: #FAFCFF; box-sizing: border-box; }
    .quiz-input-text:focus { border-color: var(--soft-blue); background: #FFFFFF; }
    .btn-disabled { background: #CBD5E1 !important; color: #64748B !important; border: none !important; cursor: not-allowed !important; opacity: 0.7; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(23, 75, 133, 0.4); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 1000; }
    .modal-overlay.active { display: flex; }
    .modal-card { background: var(--white); border-radius: 24px; width: 90%; max-width: 480px; padding: 32px; border: 1px solid var(--border-subtle); box-shadow: 0 20px 40px rgba(0,0,0,0.15); text-align: center; }
  `,
    content: `
      
      

      <!-- EXAM CONTAINER -->
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px; display: flex; flex-direction: column; gap: 28px;">
        
        <form id="lesson40ExamForm">
          <div style="margin-bottom: 24px;">
            <h2 style="color: var(--deep-blue); font-size: 1.5rem; margin-bottom: 6px;">📝 Quiz 40: Practical Literacy in Everyday Situations</h2>
            <p style="color: var(--text-muted);">Complete all test items below based on Lesson 40.</p>
          </div>

          <!-- PART I: IDENTIFICATION (10 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part I. Identification (10 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Identify the term being described.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <p class="quiz-question">1. The ability to apply reading, writing, and communication skills to everyday situations.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">2. Reading information for a specific practical purpose.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">3. Writing information needed to complete everyday tasks.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">4. The ability to use digital technologies and information responsibly.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">5. The ability to understand financial information and make informed money-related decisions.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">6. Understanding information related to personal health and safety.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">7. Reading information such as instructions, signs, and announcements to complete daily tasks.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">8. A written document that lists purchased items and their corresponding prices.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">9. Information that explains the qualifications and responsibilities of a job.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
              <div>
                <p class="quiz-question">10. The ability to understand and use information when participating in daily responsibilities.</p>
                <input type="text" class="quiz-input-text id-input" placeholder="Type your answer here...">
              </div>
            </div>
          </div>

          <!-- PART II: MULTIPLE CHOICE (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part II. Multiple Choice (5 points)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">Directions: Choose the letter of the correct answer.</p>
            
            <div style="margin-bottom: 20px;">
              <p class="quiz-question">1. Which is an example of practical literacy?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc1" value="A"> A. Reading a product's instructions before using it</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="B"> B. Memorizing unrelated words</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="C"> C. Ignoring public announcements</label>
                <label class="quiz-option-label"><input type="radio" name="mc1" value="D"> D. Avoiding written information</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">2. Which situation demonstrates digital literacy?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc2" value="A"> A. Sharing every online message immediately</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="B"> B. Checking the reliability of a website before using its information</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="C"> C. Giving personal information to unknown accounts</label>
                <label class="quiz-option-label"><input type="radio" name="mc2" value="D"> D. Ignoring online security warnings</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">3. Which situation demonstrates financial literacy?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc3" value="A"> A. Reading a fictional story</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="B"> B. Comparing prices before purchasing a product</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="C"> C. Writing a poem</label>
                <label class="quiz-option-label"><input type="radio" name="mc3" value="D"> D. Watching a television program</label>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <p class="quiz-question">4. Why is it important to understand safety instructions?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc4" value="A"> A. To avoid following directions</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="B"> B. To recognize appropriate actions during emergencies</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="C"> C. To make instructions longer</label>
                <label class="quiz-option-label"><input type="radio" name="mc4" value="D"> D. To ignore warning signs</label>
              </div>
            </div>

            <div>
              <p class="quiz-question">5. Which is an example of functional writing?</p>
              <div class="quiz-options">
                <label class="quiz-option-label"><input type="radio" name="mc5" value="A"> A. Completing an application form</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="B"> B. Watching a documentary</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="C"> C. Listening to music</label>
                <label class="quiz-option-label"><input type="radio" name="mc5" value="D"> D. Reading a novel</label>
              </div>
            </div>
          </div>

          <!-- PART III: ESSAY (5 points) -->
          <div class="quiz-card">
            <h4 style="color: var(--deep-blue); margin-bottom: 16px;">Part III. Essay (5 points)</h4>
            <p class="quiz-question">Explain why practical literacy is important in everyday life. Give at least three examples of situations where you can use literacy skills to make responsible decisions.</p>
            <textarea id="essayInput" class="quiz-input-text" rows="5" placeholder="Type your response here..."></textarea>
          </div>

          <!-- SUBMIT EXAM BUTTON -->
          <div style="text-align: center; margin-top: 30px;">
            <button type="button" onclick="validateAndSubmitExam()" class="btn-primary" style="padding: 14px 40px; font-size: 1.1rem; cursor: pointer;">
              Submit Lesson 40 Assessment 🚀
            </button>
          </div>
        </form>

        <!-- NAVIGATION FOOTER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <a href="lesson.html?id=40" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">
            ← Review Lesson 40
          </a>
          <button id="nextLessonBtn" onclick="handleNextLessonClick()" class="btn-primary btn-disabled">
            Finish Level 4 🎓
          </button>
        </div>

      </div>

    `,
    outsideContent: `<div class="modal-overlay" id="statusModal">
    <div class="modal-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <span style="font-size: 3rem; margin-bottom: 12px; display: block;" id="modalIcon">⚠️</span>
      <h3 style="font-size: 1.3rem; color: var(--deep-blue); font-weight: 800; margin-bottom: 10px;" id="modalTitle">Incomplete Submission</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;" id="modalDesc">Please complete all questions before submitting your assessment.</p>
      <button class="btn-primary" id="modalBtn" onclick="closeStatusModal()" style="width: auto; min-width: 200px; padding: 12px 30px; margin: 0 auto; display: block;">Return to Exam</button>
    </div>
  </div>`,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    const statusModal = document.getElementById('statusModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBtn = document.getElementById('modalBtn');
    const nextLessonBtn = document.getElementById('nextLessonBtn');

    let isExamSubmitted = false;

    function validateAndSubmitExam() {
      const idInputs = document.querySelectorAll('.id-input');
      let allIdAnswered = true;
      idInputs.forEach(input => {
        if (!input.value.trim()) {
          allIdAnswered = false;
        }
      });

      let allMcAnswered = true;
      for (let i = 1; i <= 5; i++) {
        const checkedOption = document.querySelector(\`input[name="mc\${i}"]:checked\`);
        if (!checkedOption) {
          allMcAnswered = false;
          break;
        }
      }

      const essayInput = document.getElementById('essayInput').value.trim();
      const isEssayAnswered = essayInput.length > 0;

      if (!allIdAnswered || !allMcAnswered || !isEssayAnswered) {
        isExamSubmitted = false;
        modalIcon.innerText = "⚠️";
        modalTitle.innerText = "Incomplete Exam Submission";
        modalDesc.innerText = "You still have unanswered questions. Please answer all parts before submitting!";
        modalBtn.innerText = "Return to Exam";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      } else {
        isExamSubmitted = true;
        localStorage.setItem('readefine_lesson40_completed', 'true');
        localStorage.setItem('readefine_level4_completed', 'true');
        modalIcon.innerText = "🎓";
        modalTitle.innerText = "Level 4 Completed!";
        modalDesc.innerText = "Congratulations! You have successfully completed Lesson 40 and finished Level 4!";
        modalBtn.innerText = "Return to Dashboard";
        
        nextLessonBtn.classList.remove('btn-disabled');
        
        modalBtn.onclick = () => {
          window.location.href = "dashboard.html";
        };
        statusModal.classList.add('active');
      }
    }

    function handleNextLessonClick() {
      if (isExamSubmitted) {
        window.location.href = "dashboard.html";
      } else {
        modalIcon.innerText = "🔒";
        modalTitle.innerText = "Assessment Locked";
        modalDesc.innerText = "Please complete and submit your Lesson 40 Assessment first to complete Level 4!";
        modalBtn.innerText = "Got it";
        modalBtn.onclick = closeStatusModal;
        statusModal.classList.add('active');
      }
    }

    function closeStatusModal() {
      statusModal.classList.remove('active');
    }
  `,
  },
};
