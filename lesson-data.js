window.LESSONS = {
  1: {
    title: "READEFINE - Lesson 1: Understanding Words and Vocabulary",
    subtitle: "Level 1 • Lesson 1",
    heading: "Understanding Words and Vocabulary",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    /* PINALAKI ANG MAX-WIDTH PARA MAWALA ANG MALAKING SPACE SA GILID */
    .lesson-container {
      width: 100%;
      max-width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 28px;
    }
    .pill-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.9);
      border-radius: 36px;
      padding: 40px 48px;
      box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06);
      width: 100%;
      box-sizing: border-box;
    }
    .hero-oblong-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%);
      color: #FFFFFF;
      padding: 12px 28px;
      border-radius: 30px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800;
      font-size: 1.15rem;
      margin-bottom: 24px;
      box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15);
    }
    .section-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--deep-blue, #174B85);
      font-size: 1.45rem;
      font-weight: 800;
      margin-top: 28px;
      margin-bottom: 14px;
    }
    .text-body {
      color: #1E293B;
      font-size: 1.1rem;
      line-height: 1.85;
      margin-bottom: 16px;
    }
    .aesthetic-box {
      background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%);
      border-left: 6px solid var(--soft-blue, #8DB8EE);
      border-radius: 20px;
      padding: 22px 28px;
      margin: 20px 0;
      box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03);
    }
    .grid-two-col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    .mini-pill-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 24px;
      padding: 24px 28px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.02);
    }
    .takeaway-pill-card {
      background: linear-gradient(135deg, #174B85 0%, #113866 100%);
      color: #FFFFFF;
      border-radius: 36px;
      padding: 40px 48px;
      box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15);
      width: 100%;
      box-sizing: border-box;
    }
    .takeaway-pill-card h3 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.5rem;
      margin-bottom: 16px;
      color: #F4D38A;
    }
    .takeaway-pill-card ul {
      padding-left: 20px;
      line-height: 1.9;
      font-size: 1.05rem;
    }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Explain what vocabulary means.</li>
              <li>Identify the importance of vocabulary in communication.</li>
              <li>Understand unfamiliar words through examples.</li>
              <li>Use appropriate words in sentences.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Words are an important part of everyday communication. We use words when speaking, reading, writing, sending messages, and expressing our thoughts.
            </p>
            <p class="text-body">
              Understanding words helps people communicate clearly and understand information. Learning new words also allows individuals to express their ideas more accurately.
            </p>

            <h3 class="section-title">📌 1. What Is Vocabulary?</h3>
            <p class="text-body">
              <strong>Vocabulary</strong> refers to the collection of words that a person knows, understands, and uses in communication. It develops through reading, listening, speaking, writing, and learning new information.
            </p>

            <div class="aesthetic-box">
              <strong style="color: var(--deep-blue);">✨ Example:</strong><br>
              <span class="text-body" style="margin: 0; display: block; margin-top: 6px;">A student who knows the words <em>"confident," "responsible,"</em> and <em>"determined"</em> can use these words to describe people, actions, and situations effectively.</span>
            </div>

            <h3 class="section-title">💬 2. Types of Vocabulary</h3>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.15rem; font-weight: 800; margin-bottom: 10px;">🎧 Receptive Vocabulary</h4>
                <p class="text-body" style="font-size: 1rem; margin-bottom: 12px;">Words that a person understands when reading or listening, but may not regularly use when speaking or writing.</p>
                <small style="color: var(--deep-blue); font-weight: 700; font-size: 0.95rem;">Example: Understanding "generous" while reading a story.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.15rem; font-weight: 800; margin-bottom: 10px;">✍️ Expressive Vocabulary</h4>
                <p class="text-body" style="font-size: 1rem; margin-bottom: 12px;">Words that a person can actively use when speaking or writing to communicate with others.</p>
                <small style="color: var(--deep-blue); font-weight: 700; font-size: 0.95rem;">Example: Using "generous" to describe a helpful friend.</small>
              </div>
            </div>

            <h3 class="section-title">⭐ 3. Importance of Vocabulary</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem;">
              <li>Improves reading comprehension.</li>
              <li>Helps people express ideas clearly.</li>
              <li>Supports effective communication.</li>
              <li>Makes writing more meaningful.</li>
              <li>Helps learners understand academic and everyday information.</li>
            </ul>

            <h3 class="section-title">🚀 4. How to Improve Vocabulary</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem;">
              <li>Read books, articles, and other written materials.</li>
              <li>Listen carefully to conversations and discussions.</li>
              <li>Look up unfamiliar words in a dictionary.</li>
              <li>Write down new words and their meanings.</li>
              <li>Practice using new words in sentences.</li>
            </ul>

            <h3 class="section-title">🔍 Word Examples</h3>
            <div class="aesthetic-box">
              <strong>Word:</strong> Responsible<br>
              <strong>Meaning:</strong> Able to be trusted to do what is expected or required.<br>
              <strong>Sentence:</strong> A responsible student submits assignments on time.
            </div>
            <div class="aesthetic-box">
              <strong>Word:</strong> Hesitant<br>
              <strong>Meaning:</strong> Uncertain or unsure about doing something.<br>
              <strong>Sentence:</strong> She was hesitant to answer because she was not confident.
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Vocabulary is a collection of words a person knows and uses.</li>
              <li>Receptive vocabulary involves understanding words; Expressive involves using them.</li>
              <li>A strong vocabulary improves both everyday communication and reading comprehension.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=1" class="btn-primary">Proceed to Lesson 1 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  2: {
    title: "READEFINE - Lesson 2: Using Context Clues",
    subtitle: "Level 1 • Lesson 2",
    heading: "Using Context Clues",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    /* PINALAKI ANG MAX-WIDTH PARA PUNO ANG BUONG LAKAD NG SCREEN */
    .lesson-container {
      width: 100%;
      max-width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 28px;
    }
    .pill-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.9);
      border-radius: 36px;
      padding: 40px 48px;
      box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06);
      width: 100%;
      box-sizing: border-box;
    }
    .hero-oblong-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%);
      color: #FFFFFF;
      padding: 12px 28px;
      border-radius: 30px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800;
      font-size: 1.15rem;
      margin-bottom: 24px;
      box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15);
    }
    .section-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--deep-blue, #174B85);
      font-size: 1.45rem;
      font-weight: 800;
      margin-top: 28px;
      margin-bottom: 14px;
    }
    .text-body {
      color: #1E293B;
      font-size: 1.1rem;
      line-height: 1.85;
      margin-bottom: 16px;
    }
    .aesthetic-box {
      background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%);
      border-left: 6px solid var(--soft-blue, #8DB8EE);
      border-radius: 20px;
      padding: 22px 28px;
      margin: 20px 0;
      box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03);
    }
    .type-pill-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 24px;
      padding: 24px 28px;
      margin-bottom: 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.02);
    }
    .type-pill-card h5 {
      color: var(--deep-blue, #174B85);
      font-size: 1.15rem;
      font-weight: 800;
      margin-bottom: 8px;
    }
    .takeaway-pill-card {
      background: linear-gradient(135deg, #174B85 0%, #113866 100%);
      color: #FFFFFF;
      border-radius: 36px;
      padding: 40px 48px;
      box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15);
      width: 100%;
      box-sizing: border-box;
    }
    .takeaway-pill-card h3 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.5rem;
      margin-bottom: 16px;
      color: #F4D38A;
    }
    .takeaway-pill-card ul {
      padding-left: 20px;
      line-height: 1.9;
      font-size: 1.05rem;
    }
  `,
    content: `
      
      

      <div id="lockedBanner" hidden style="background: #FEF2F2; border: 1px solid #FCA5A5; color: #991B1B; padding: 20px; border-radius: 16px; text-align: center; margin-bottom: 24px;">
        <h3 style="font-weight: 800; margin-bottom: 6px;">🔒 Lesson Locked</h3>
        <p>You must complete the Lesson 1 exam before proceeding to Lesson 2.</p>
        <a href="levels.html" class="btn-primary" style="display: inline-block; margin-top: 12px; background: #991B1B; color: #FFF;">Go back to Lessons</a>
      </div>

      <div class="section-box" id="lessonContent" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define context clues.</li>
              <li>Identify different types of context clues.</li>
              <li>Determine the possible meaning of unfamiliar words.</li>
              <li>Use surrounding information to understand a sentence.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Readers sometimes encounter unfamiliar words while reading. However, they do not always need a dictionary to understand them.
            </p>
            <p class="text-body">
              The words and sentences surrounding an unfamiliar word may provide clues to its meaning. These clues are called <strong>context clues</strong>.
            </p>

            <h3 class="section-title">🔍 1. What Are Context Clues?</h3>
            <p class="text-body">
              Context clues are hints or pieces of information found in the surrounding words, phrases, or sentences that help readers understand an unfamiliar word.
            </p>
            <div class="aesthetic-box">
              <strong style="color: var(--deep-blue);">✨ Example:</strong><br>
              <span class="text-body" style="margin: 0; display: block; margin-top: 6px;">"After walking for several hours under the hot sun, Mark felt <em>exhausted</em> and needed to rest."</span>
              <small style="color: #64748B; font-size: 0.95rem; display: block; margin-top: 4px;">The phrase "needed to rest" suggests that exhausted means very tired.</small>
            </div>

            <h3 class="section-title">📚 2. Types of Context Clues</h3>
            
            <div class="type-pill-card">
              <h5>A. Definition or Explanation Clues</h5>
              <p class="text-body" style="font-size: 1rem; margin-bottom: 6px;">The meaning of an unfamiliar word is directly explained in the sentence.</p>
              <small style="color: var(--deep-blue); font-weight: 700; font-size: 0.95rem;">Example: A habitat, the natural home of an animal, provides food and shelter.</small>
            </div>

            <div class="type-pill-card">
              <h5>B. Synonym Clues</h5>
              <p class="text-body" style="font-size: 1rem; margin-bottom: 6px;">A familiar word with a similar meaning helps explain the unfamiliar word.</p>
              <small style="color: var(--deep-blue); font-weight: 700; font-size: 0.95rem;">Example: The room was silent and quiet during the examination.</small>
            </div>

            <div class="type-pill-card">
              <h5>C. Antonym or Contrast Clues</h5>
              <p class="text-body" style="font-size: 1rem; margin-bottom: 6px;">An opposite word or contrasting idea provides a hint.</p>
              <small style="color: var(--deep-blue); font-weight: 700; font-size: 0.95rem;">Example: Unlike his outgoing sister, Daniel is shy and avoids large gatherings.</small>
            </div>

            <div class="type-pill-card">
              <h5>D. Example Clues</h5>
              <p class="text-body" style="font-size: 1rem; margin-bottom: 6px;">Examples in a sentence help explain an unfamiliar word.</p>
              <small style="color: var(--deep-blue); font-weight: 700; font-size: 0.95rem;">Example: Citrus fruits, such as oranges, lemons, and calamansi, contain vitamin C.</small>
            </div>

            <div class="type-pill-card">
              <h5>E. Inference Clues</h5>
              <p class="text-body" style="font-size: 1rem; margin-bottom: 6px;">Readers use details in the sentence and their understanding of the situation to determine meaning.</p>
              <small style="color: var(--deep-blue); font-weight: 700; font-size: 0.95rem;">Example: Mia grabbed her umbrella and wore her raincoat before leaving the house.</small>
            </div>

            <h3 class="section-title">🪜 3. Steps in Using Context Clues</h3>
            <ol style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem;">
              <li>Read the entire sentence.</li>
              <li>Identify the unfamiliar word.</li>
              <li>Examine the words around it.</li>
              <li>Look for definitions, examples, similarities, or contrasts.</li>
              <li>Determine the possible meaning.</li>
              <li>Read the sentence again to check whether the meaning makes sense.</li>
            </ol>

            <h3 class="section-title">💡 Additional Sentence Examples</h3>
            <div class="aesthetic-box">
              <span class="text-body" style="margin: 0; display: block;">"The athlete was <strong>determined</strong> to finish the race despite being tired."</span>
              <small style="color: var(--deep-blue); font-weight: 700; font-size: 0.95rem; display: block; margin-top: 4px;">Determined means strongly decided or committed to achieving something.</small>
            </div>
            <div class="aesthetic-box">
              <span class="text-body" style="margin: 0; display: block;">"The instructions were <strong>complicated</strong>, so the students asked for an explanation."</span>
              <small style="color: var(--deep-blue); font-weight: 700; font-size: 0.95rem; display: block; margin-top: 4px;">Complicated means difficult to understand or deal with.</small>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Context clues help readers understand unfamiliar words.</li>
              <li>Clues may appear in the same sentence or nearby sentences.</li>
              <li>Common types include definition, synonym, antonym, example, and inference clues.</li>
              <li>Always consider the entire sentence before deciding on a word's meaning.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=2" class="btn-primary">Proceed to Lesson 2 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    if (localStorage.getItem('readefine_lesson1_completed') !== 'true') {
      document.getElementById('lockedBanner').hidden = false;
      document.getElementById('lessonContent').hidden = true;
    }
  `,
  },
  3: {
    title: "READEFINE - Lesson 3: Synonyms and Antonyms",
    subtitle: "Level 1 • Lesson 3",
    heading: "Synonyms and Antonyms",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container {
      width: 100%;
      max-width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 28px;
    }
    .pill-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.9);
      border-radius: 36px;
      padding: 40px 48px;
      box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06);
      width: 100%;
      box-sizing: border-box;
    }
    .hero-oblong-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%);
      color: #FFFFFF;
      padding: 12px 28px;
      border-radius: 30px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800;
      font-size: 1.15rem;
      margin-bottom: 24px;
      box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15);
    }
    .section-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--deep-blue, #174B85);
      font-size: 1.45rem;
      font-weight: 800;
      margin-top: 28px;
      margin-bottom: 14px;
    }
    .text-body {
      color: #1E293B;
      font-size: 1.1rem;
      line-height: 1.85;
      margin-bottom: 16px;
    }
    .aesthetic-box {
      background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%);
      border-left: 6px solid var(--soft-blue, #8DB8EE);
      border-radius: 20px;
      padding: 22px 28px;
      margin: 20px 0;
      box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03);
    }
    .grid-two-col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    .mini-pill-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 24px;
      padding: 24px 28px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.02);
    }
    .takeaway-pill-card {
      background: linear-gradient(135deg, #174B85 0%, #113866 100%);
      color: #FFFFFF;
      border-radius: 36px;
      padding: 40px 48px;
      box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15);
      width: 100%;
      box-sizing: border-box;
    }
    .takeaway-pill-card h3 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.5rem;
      margin-bottom: 16px;
      color: #F4D38A;
    }
    .takeaway-pill-card ul {
      padding-left: 20px;
      line-height: 1.9;
      font-size: 1.05rem;
    }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define synonyms and antonyms.</li>
              <li>Identify words with similar and opposite meanings.</li>
              <li>Use synonyms and antonyms in sentences.</li>
              <li>Choose appropriate words based on context.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Words can have similar or opposite meanings. Understanding these relationships helps readers expand their vocabulary and avoid repeating the same words in writing.
            </p>
            <p class="text-body">
              Two important word relationships are synonyms and antonyms.
            </p>

            <h3 class="section-title">📌 1. What Are Synonyms?</h3>
            <p class="text-body">
              Synonyms are words that have the same or nearly the same meaning.
            </p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>Happy – Joyful</li>
              <li>Big – Large</li>
              <li>Begin – Start</li>
              <li>Difficult – Hard</li>
              <li>Smart – Intelligent</li>
            </ul>
            <div class="aesthetic-box">
              <strong style="color: var(--deep-blue);">✨ Example Sentence:</strong><br>
              <span class="text-body" style="margin: 0; display: block; margin-top: 6px;">Original: The examination was <em>difficult</em>.<br>Using a synonym: The examination was <em>challenging</em>.</span>
              <small style="color: #64748B; font-size: 0.95rem; display: block; margin-top: 4px;">Both difficult and challenging describe something that requires effort.</small>
            </div>

            <h3 class="section-title">📌 2. What Are Antonyms?</h3>
            <p class="text-body">
              Antonyms are words that have opposite meanings.
            </p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>Hot – Cold</li>
              <li>Early – Late</li>
              <li>Accept – Reject</li>
              <li>Strong – Weak</li>
              <li>Increase – Decrease</li>
            </ul>
            <div class="aesthetic-box">
              <strong style="color: var(--deep-blue);">✨ Example Sentence:</strong><br>
              <span class="text-body" style="margin: 0; display: block; margin-top: 6px;">Original: The room was <em>bright</em>.<br>Opposite: The room was <em>dark</em>.</span>
            </div>

            <h3 class="section-title">💬 3. Importance of Synonyms & Antonyms</h3>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.15rem; font-weight: 800; margin-bottom: 10px;">📈 Importance of Synonyms</h4>
                <ul style="padding-left: 18px; color: #334155; line-height: 1.7; font-size: 0.95rem;">
                  <li>Prevents unnecessary repetition.</li>
                  <li>Makes writing more interesting.</li>
                  <li>Helps readers understand different expressions.</li>
                  <li>Expands vocabulary.</li>
                </ul>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.15rem; font-weight: 800; margin-bottom: 10px;">📉 Importance of Antonyms</h4>
                <ul style="padding-left: 18px; color: #334155; line-height: 1.7; font-size: 0.95rem;">
                  <li>Helps explain differences.</li>
                  <li>Makes comparisons easier.</li>
                  <li>Improves understanding of word meanings.</li>
                  <li>Helps communicate contrasting ideas.</li>
                </ul>
              </div>
            </div>

            <h3 class="section-title">🎯 5. Choosing the Right Word</h3>
            <p class="text-body">
              Not all synonyms can be used interchangeably in every situation. Their meanings may be similar but their tone or usage may differ.
            </p>
            <div class="aesthetic-box">
              <strong>Example:</strong> "Childish" and "childlike" both relate to children, but they have different connotations.<br>
              • <em>Childish</em> often describes immature behavior.<br>
              • <em>Childlike</em> can describe innocent or playful qualities.
            </div>

            <h3 class="section-title">🔍 More Examples</h3>
            <div class="aesthetic-box">
              <strong>Synonym Example:</strong><br>
              • The student was brave.<br>
              • The student was courageous.
            </div>
            <div class="aesthetic-box">
              <strong>Antonym Example:</strong><br>
              • The road was narrow.<br>
              • The road was wide.
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Synonyms have similar meanings.</li>
              <li>Antonyms have opposite meanings.</li>
              <li>Choosing appropriate words improves communication.</li>
              <li>Similar words may still have different uses or tones.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=3" class="btn-primary">Proceed to Lesson 3 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  4: {
    title: "READEFINE - Lesson 4: Homophones and Commonly Confused Words",
    subtitle: "Level 1 • Lesson 4",
    heading: "Homophones and Commonly Confused Words",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container {
      width: 100%;
      max-width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 28px;
    }
    .pill-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.9);
      border-radius: 36px;
      padding: 40px 48px;
      box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06);
      width: 100%;
      box-sizing: border-box;
    }
    .hero-oblong-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%);
      color: #FFFFFF;
      padding: 12px 28px;
      border-radius: 30px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800;
      font-size: 1.15rem;
      margin-bottom: 24px;
      box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15);
    }
    .section-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--deep-blue, #174B85);
      font-size: 1.45rem;
      font-weight: 800;
      margin-top: 28px;
      margin-bottom: 14px;
    }
    .text-body {
      color: #1E293B;
      font-size: 1.1rem;
      line-height: 1.85;
      margin-bottom: 16px;
    }
    .aesthetic-box {
      background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%);
      border-left: 6px solid var(--soft-blue, #8DB8EE);
      border-radius: 20px;
      padding: 22px 28px;
      margin: 20px 0;
      box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03);
    }
    .grid-two-col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    .mini-pill-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 24px;
      padding: 24px 28px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.02);
    }
    .takeaway-pill-card {
      background: linear-gradient(135deg, #174B85 0%, #113866 100%);
      color: #FFFFFF;
      border-radius: 36px;
      padding: 40px 48px;
      box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15);
      width: 100%;
      box-sizing: border-box;
    }
    .takeaway-pill-card h3 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.5rem;
      margin-bottom: 16px;
      color: #F4D38A;
    }
    .takeaway-pill-card ul {
      padding-left: 20px;
      line-height: 1.9;
      font-size: 1.05rem;
    }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define homophones.</li>
              <li>Identify commonly confused English words.</li>
              <li>Distinguish words based on spelling and meaning.</li>
              <li>Use commonly confused words correctly in sentences.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Some English words sound alike but have different meanings and spellings. Other words look or sound similar but are used in different situations.
            </p>
            <p class="text-body">
              Understanding these differences helps prevent mistakes in reading and writing.
            </p>

            <h3 class="section-title">📌 1. What Are Homophones?</h3>
            <p class="text-body">
              Homophones are words that have the same pronunciation but different meanings and usually different spellings.
            </p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>Their – There</li>
              <li>To – Two</li>
              <li>See – Sea</li>
              <li>Right – Write</li>
              <li>Flower – Flour</li>
            </ul>

            <h3 class="section-title">📚 2. Common Homophones</h3>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.15rem; font-weight: 800; margin-bottom: 8px;">Their vs. There vs. They're</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 6px;">• <strong>Their:</strong> Shows ownership.<br><em>Ex:</em> Their classroom is clean.</p>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 6px;">• <strong>There:</strong> Refers to a place.<br><em>Ex:</em> The library is over there.</p>
                <p class="text-body" style="font-size: 0.95rem;">• <strong>They're:</strong> Short for "they are".<br><em>Ex:</em> They're preparing for exams.</p>
              </div>

              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.15rem; font-weight: 800; margin-bottom: 8px;">To vs. Too vs. Two</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 6px;">• <strong>To:</strong> Preposition/infinitive.<br><em>Ex:</em> I want to study.</p>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 6px;">• <strong>Too:</strong> Means also or excessively.<br><em>Ex:</em> I want to join too.</p>
                <p class="text-body" style="font-size: 0.95rem;">• <strong>Two:</strong> The number 2.<br><em>Ex:</em> She has two notebooks.</p>
              </div>
            </div>

            <div class="aesthetic-box" style="margin-top: 16px;">
              <strong style="color: var(--deep-blue);">Your vs. You're:</strong><br>
              • <strong>Your:</strong> Shows ownership (<em>Ex:</em> Your answer is correct.)<br>
              • <strong>You're:</strong> Short form of "you are" (<em>Ex:</em> You're doing well.)
            </div>

            <h3 class="section-title">⚖️ 3. Commonly Confused Words</h3>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Affect vs. Effect</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 6px;">• <strong>Affect</strong> (Verb): To influence.<br><em>Ex:</em> Lack of sleep can affect concentration.</p>
                <p class="text-body" style="font-size: 0.95rem;">• <strong>Effect</strong> (Noun): A result.<br><em>Ex:</em> One effect is tiredness.</p>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Then vs. Than</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 6px;">• <strong>Then:</strong> Refers to time/sequence.<br><em>Ex:</em> Finish homework, then rest.</p>
                <p class="text-body" style="font-size: 0.95rem;">• <strong>Than:</strong> Used in comparisons.<br><em>Ex:</em> This book is longer than that.</p>
              </div>
            </div>

            <div class="grid-two-col" style="margin-top: 16px;">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Its vs. It's</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 6px;">• <strong>Its:</strong> Shows possession.<br><em>Ex:</em> The dog wagged its tail.</p>
                <p class="text-body" style="font-size: 0.95rem;">• <strong>It's:</strong> Short for "it is/has".<br><em>Ex:</em> It's a beautiful day.</p>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Lose vs. Loose</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 6px;">• <strong>Lose:</strong> Misplace/fail to win.<br><em>Ex:</em> Do not lose your ID.</p>
                <p class="text-body" style="font-size: 0.95rem;">• <strong>Loose:</strong> Not tight.<br><em>Ex:</em> This shirt is loose.</p>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Homophones sound alike but have different meanings.</li>
              <li>Correct spelling depends on the intended meaning.</li>
              <li>Some commonly confused words have different grammatical functions.</li>
              <li>Always check the meaning and sentence context.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=4" class="btn-primary">Proceed to Lesson 4 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  5: {
    title: "READEFINE - Lesson 5: Parts of Speech",
    subtitle: "Level 1 • Lesson 5",
    heading: "Parts of Speech",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container {
      width: 100%;
      max-width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 28px;
    }
    .pill-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.9);
      border-radius: 36px;
      padding: 40px 48px;
      box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06);
      width: 100%;
      box-sizing: border-box;
    }
    .hero-oblong-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%);
      color: #FFFFFF;
      padding: 12px 28px;
      border-radius: 30px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800;
      font-size: 1.15rem;
      margin-bottom: 24px;
      box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15);
    }
    .section-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--deep-blue, #174B85);
      font-size: 1.45rem;
      font-weight: 800;
      margin-top: 28px;
      margin-bottom: 14px;
    }
    .text-body {
      color: #1E293B;
      font-size: 1.1rem;
      line-height: 1.85;
      margin-bottom: 16px;
    }
    .aesthetic-box {
      background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%);
      border-left: 6px solid var(--soft-blue, #8DB8EE);
      border-radius: 20px;
      padding: 22px 28px;
      margin: 20px 0;
      box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03);
    }
    .grid-two-col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    .mini-pill-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 24px;
      padding: 24px 28px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.02);
    }
    .takeaway-pill-card {
      background: linear-gradient(135deg, #174B85 0%, #113866 100%);
      color: #FFFFFF;
      border-radius: 36px;
      padding: 40px 48px;
      box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15);
      width: 100%;
      box-sizing: border-box;
    }
    .takeaway-pill-card h3 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.5rem;
      margin-bottom: 16px;
      color: #F4D38A;
    }
    .takeaway-pill-card ul {
      padding-left: 20px;
      line-height: 1.9;
      font-size: 1.05rem;
    }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Identify the major parts of speech.</li>
              <li>Explain the function of each part of speech.</li>
              <li>Recognize parts of speech in sentences.</li>
              <li>Construct sentences using different parts of speech.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Every word in a sentence has a role. Some words name people, places, and things. Others describe actions, qualities, or relationships.<br>
              These roles are called <strong>parts of speech</strong>.
            </p>

            <h3 class="section-title">1. Noun</h3>
            <p class="text-body">A noun is a word that names a person, place, thing, or idea.</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 12px;">
              <li><strong>Person:</strong> teacher, student</li>
              <li><strong>Place:</strong> school, library</li>
              <li><strong>Thing:</strong> computer, notebook</li>
              <li><strong>Idea:</strong> freedom, honesty</li>
            </ul>
            <div class="aesthetic-box">
              <strong>Sentence:</strong> The student opened the computer.
            </div>

            <h3 class="section-title">2. Pronoun</h3>
            <p class="text-body">A pronoun is a word used in place of a noun (e.g., he, she, it, they, we, I, you).</p>
            <div class="aesthetic-box">
              <strong>Sentence:</strong> Maria is studying. <em>She</em> has an examination tomorrow.<br>
              <small style="color: #64748B;">The pronoun "she" replaces Maria.</small>
            </div>

            <h3 class="section-title">3. Verb</h3>
            <p class="text-body">A verb expresses an action, occurrence, or state of being (e.g., write, study, think, is, become).</p>
            <div class="aesthetic-box">
              <strong>Sentence:</strong> The students <em>study</em> every evening.
            </div>

            <h3 class="section-title">4. Adjective</h3>
            <p class="text-body">An adjective describes or modifies a noun or pronoun (e.g., beautiful, intelligent, tall, difficult).</p>
            <div class="aesthetic-box">
              <strong>Sentence:</strong> She submitted a <em>difficult</em> assignment.<br>
              <small style="color: #64748B;">The word "difficult" describes assignment.</small>
            </div>

            <h3 class="section-title">5. Adverb</h3>
            <p class="text-body">An adverb modifies a verb, adjective, or another adverb. It often explains how, when, where, or to what extent (e.g., quickly, carefully, yesterday, very).</p>
            <div class="aesthetic-box">
              <strong>Sentence:</strong> He answered the question <em>carefully</em>.<br>
              <small style="color: #64748B;">The word "carefully" describes how he answered.</small>
            </div>

            <h3 class="section-title">6. Preposition</h3>
            <p class="text-body">A preposition shows the relationship of a noun or pronoun to another word (e.g., in, on, at, under, beside, between).</p>
            <div class="aesthetic-box">
              <strong>Sentence:</strong> The notebook is <em>on</em> the table.
            </div>

            <h3 class="section-title">7. Conjunction</h3>
            <p class="text-body">A conjunction connects words, phrases, or clauses (e.g., and, but, or, because, although).</p>
            <div class="aesthetic-box">
              <strong>Sentence:</strong> I wanted to study, <em>but</em> I felt tired.
            </div>

            <h3 class="section-title">8. Interjection</h3>
            <p class="text-body">An interjection expresses a sudden emotion or reaction (e.g., Wow!, Ouch!, Oh!, Hurray!).</p>
            <div class="aesthetic-box">
              <strong>Sentence:</strong> <em>Wow!</em> Your presentation was excellent.
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <p style="margin-bottom: 12px; font-size: 1.05rem;">The eight major parts of speech are:</p>
            <ul>
              <li>1. Noun &nbsp;&bull;&nbsp; 2. Pronoun &nbsp;&bull;&nbsp; 3. Verb &nbsp;&bull;&nbsp; 4. Adjective</li>
              <li>5. Adverb &nbsp;&bull;&nbsp; 6. Preposition &nbsp;&bull;&nbsp; 7. Conjunction &nbsp;&bull;&nbsp; 8. Interjection</li>
              <li style="margin-top: 10px; color: #F4D38A; list-style: none;">Each part of speech has a specific function in sentence construction.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=5" class="btn-primary">Proceed to Lesson 5 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  6: {
    title: "READEFINE - Lesson 6: Basic Sentence Structure",
    subtitle: "Level 1 • Lesson 6",
    heading: "Basic Sentence Structure",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container {
      width: 100%;
      max-width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 28px;
    }
    .pill-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.9);
      border-radius: 36px;
      padding: 40px 48px;
      box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06);
      width: 100%;
      box-sizing: border-box;
    }
    .hero-oblong-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%);
      color: #FFFFFF;
      padding: 12px 28px;
      border-radius: 30px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800;
      font-size: 1.15rem;
      margin-bottom: 24px;
      box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15);
    }
    .section-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--deep-blue, #174B85);
      font-size: 1.45rem;
      font-weight: 800;
      margin-top: 28px;
      margin-bottom: 14px;
    }
    .text-body {
      color: #1E293B;
      font-size: 1.1rem;
      line-height: 1.85;
      margin-bottom: 16px;
    }
    .aesthetic-box {
      background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%);
      border-left: 6px solid var(--soft-blue, #8DB8EE);
      border-radius: 20px;
      padding: 22px 28px;
      margin: 20px 0;
      box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03);
    }
    .grid-two-col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    .mini-pill-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 24px;
      padding: 24px 28px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.02);
    }
    .takeaway-pill-card {
      background: linear-gradient(135deg, #174B85 0%, #113866 100%);
      color: #FFFFFF;
      border-radius: 36px;
      padding: 40px 48px;
      box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15);
      width: 100%;
      box-sizing: border-box;
    }
    .takeaway-pill-card h3 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.5rem;
      margin-bottom: 16px;
      color: #F4D38A;
    }
    .takeaway-pill-card ul {
      padding-left: 20px;
      line-height: 1.9;
      font-size: 1.05rem;
    }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define a sentence.</li>
              <li>Identify the basic parts of a sentence.</li>
              <li>Distinguish complete sentences from fragments.</li>
              <li>Construct clear and meaningful sentences.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              A sentence is a group of words that expresses a complete thought. Sentences allow people to share information, ask questions, give instructions, and express feelings.<br>
              A well-constructed sentence helps readers understand the intended message.
            </p>

            <h3 class="section-title">📌 1. What Is a Sentence?</h3>
            <p class="text-body">
              A sentence is a group of words that expresses a complete thought and follows grammatical rules.
            </p>
            <div class="aesthetic-box">
              <strong>Example:</strong> The students completed their project.<br>
              <small style="color: #64748B;">This is a complete sentence because it communicates a complete idea.</small>
            </div>

            <h3 class="section-title">🧩 2. Basic Sentence Elements</h3>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.15rem; font-weight: 800; margin-bottom: 8px;">Subject</h4>
                <p class="text-body" style="font-size: 1rem; margin-bottom: 8px;">The subject tells who or what the sentence is about.</p>
                <small style="color: var(--deep-blue); font-weight: 700;">Example: <em>The teacher</em> explained the lesson.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.15rem; font-weight: 800; margin-bottom: 8px;">Predicate</h4>
                <p class="text-body" style="font-size: 1rem; margin-bottom: 8px;">The predicate tells something about the subject. It usually contains a verb.</p>
                <small style="color: var(--deep-blue); font-weight: 700;">Example: The teacher <em>explained the lesson</em>.</small>
              </div>
            </div>

            <h3 class="section-title">📐 3. Basic Sentence Patterns</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; margin-bottom: 16px;">
              <li><strong>Subject + Verb (S–V):</strong> Birds fly.</li>
              <li><strong>Subject + Verb + Object (S–V–O):</strong> Maria reads books.</li>
              <li><strong>Subject + Linking Verb + Complement:</strong> John is intelligent. (The complement describes or identifies the subject.)</li>
            </ul>

            <h3 class="section-title">⚠️ 4. Complete Sentences and Sentence Fragments</h3>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Complete Sentence</h4>
                <p class="text-body" style="font-size: 0.95rem;">Contains a complete thought.<br><em>Ex:</em> The students attended the seminar.</p>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Sentence Fragment</h4>
                <p class="text-body" style="font-size: 0.95rem;">An incomplete group of words.<br><em>Ex:</em> Because the students were late. (Leaves reader wondering what happened).</p>
              </div>
            </div>

            <h3 class="section-title">📋 5. Basic Rules of Sentence Construction</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem;">
              <li>Begin a sentence with a capital letter.</li>
              <li>Use correct word order.</li>
              <li>Include a subject and a predicate in a basic complete sentence.</li>
              <li>Use appropriate punctuation.</li>
              <li>Make sure the sentence expresses a complete thought.</li>
            </ul>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>A sentence expresses a complete thought.</li>
              <li>The subject tells who or what the sentence is about, while the predicate tells something about it.</li>
              <li>Sentence fragments are incomplete thoughts that need revision.</li>
              <li>Correct sentence construction improves clarity and communication.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=6" class="btn-primary">Proceed to Lesson 6 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  7: {
    title: "READEFINE - Lesson 7: Subject and Predicate",
    subtitle: "Level 1 • Lesson 7",
    heading: "Subject and Predicate",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Identify the subject and predicate of a sentence.</li>
              <li>Distinguish simple and complete subjects.</li>
              <li>Distinguish simple and complete predicates.</li>
              <li>Analyze sentence structure.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              A sentence is made up of important parts that work together to express a complete thought. Two of its main components are the subject and predicate.<br>
              Understanding these components helps learners construct grammatically correct sentences.
            </p>

            <h3 class="section-title">1. What Is a Subject?</h3>
            <p class="text-body">The subject identifies the person, place, thing, or idea being discussed in a sentence.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> The young student answered the question.<br>
              • <em>Complete subject:</em> The young student<br>
              • <em>Simple subject:</em> student
            </div>

            <h3 class="section-title">2. What Is a Predicate?</h3>
            <p class="text-body">The predicate tells what the subject does or what is said about the subject.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> The young student answered the question.<br>
              • <em>Complete predicate:</em> answered the question<br>
              • <em>Simple predicate:</em> answered
            </div>

            <h3 class="section-title">3. Simple Subject</h3>
            <p class="text-body">The simple subject is the main noun or pronoun that the sentence is about.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> The hardworking teacher prepared the lesson.<br>
              • <em>Simple subject:</em> teacher
            </div>

            <h3 class="section-title">4. Complete Subject</h3>
            <p class="text-body">The complete subject includes the simple subject and all the words that describe or identify it.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> The hardworking teacher prepared the lesson.<br>
              • <em>Complete subject:</em> The hardworking teacher
            </div>

            <h3 class="section-title">5. Simple Predicate</h3>
            <p class="text-body">The simple predicate is the main verb or verb phrase that expresses what the subject does or is.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> The students have completed their assignments.<br>
              • <em>Simple predicate:</em> have completed
            </div>

            <h3 class="section-title">6. Complete Predicate</h3>
            <p class="text-body">The complete predicate includes the verb and all the words that complete the information about the subject.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> The students have completed their assignments.<br>
              • <em>Complete predicate:</em> have completed their assignments
            </div>

            <h3 class="section-title">✨ More Examples</h3>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 6px;"><em>The talented singer performed beautifully.</em></p>
                <p class="text-body" style="font-size: 0.9rem; color: #64748B;">• Comp. Subject: The talented singer<br>• Simple Subject: singer<br>• Comp. Predicate: performed beautifully<br>• Simple Predicate: performed</p>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 6px;"><em>My older brother plays basketball every weekend.</em></p>
                <p class="text-body" style="font-size: 0.9rem; color: #64748B;">• Comp. Subject: My older brother<br>• Simple Subject: brother<br>• Comp. Predicate: plays basketball every weekend<br>• Simple Predicate: plays</p>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>The subject tells who or what the sentence is about.</li>
              <li>The predicate tells what the subject does or what is said about it.</li>
              <li>The simple subject is the main noun or pronoun, while the complete subject includes its modifiers.</li>
              <li>The simple predicate is the main verb, while the complete predicate includes the verb and additional information.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=7" class="btn-primary">Proceed to Lesson 7 Exam →</a>
          </div>

        </div>
      </div>
    `,
    outsideContent: ``,
    script: `document.getElementById('menuToggleBtn').addEventListener('click', () => { document.getElementById('sidebar').classList.toggle('collapsed'); });`,
  },
  8: {
    title: "READEFINE - Lesson 8: Basic Grammar and Punctuation",
    subtitle: "Level 1 • Lesson 8",
    heading: "Basic Grammar and Punctuation",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Explain the importance of grammar and punctuation.</li>
              <li>Identify common punctuation marks.</li>
              <li>Apply basic capitalization rules.</li>
              <li>Correct simple grammatical and punctuation errors.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Grammar provides rules for organizing words into meaningful sentences. Punctuation marks help readers understand how sentences are structured and how ideas are connected.<br>
              Without proper grammar and punctuation, written messages may become confusing or difficult to understand.
            </p>

            <h3 class="section-title">1. What Is Grammar?</h3>
            <p class="text-body">Grammar refers to the rules and principles that guide how words are formed, arranged, and used in a language.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong><br>
              ❌ Incorrect: She go to school every day.<br>
              ✔️ Correct: She goes to school every day.
            </div>

            <h3 class="section-title">2. What Is Punctuation?</h3>
            <p class="text-body">Punctuation refers to marks used in writing to separate ideas, indicate pauses, and clarify meaning.</p>

            <h3 class="section-title">3. Common Punctuation Marks</h3>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Period (.) & Comma (,)</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 6px;">• <strong>Period:</strong> Used at the end of a declarative sentence (<em>Ex: I enjoy reading books.</em>)</p>
                <p class="text-body" style="font-size: 0.95rem;">• <strong>Comma:</strong> Used to separate items in a list and indicate pauses (<em>Ex: I bought a notebook, pen, and folder.</em>)</p>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Question Mark (?) & Exclamation (!)</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 6px;">• <strong>Question Mark:</strong> Used at the end of a direct question (<em>Ex: Where is your classroom?</em>)</p>
                <p class="text-body" style="font-size: 0.95rem;">• <strong>Exclamation Point:</strong> Used to express strong feelings (<em>Ex: That is amazing!</em>)</p>
              </div>
            </div>

            <div class="grid-two-col" style="margin-top: 16px;">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Apostrophe (') & Quotation Marks (" ")</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 6px;">• <strong>Apostrophe:</strong> Shows possession or contractions (<em>Ex: Maria's notebook, Don't, It's</em>)</p>
                <p class="text-body" style="font-size: 0.95rem;">• <strong>Quotation Marks:</strong> Shows direct speech or quotes (<em>Ex: She said, "I am ready."</em>)</p>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Colon (:)</h4>
                <p class="text-body" style="font-size: 0.95rem;">• <strong>Colon:</strong> Used to introduce a list, explanation, or example (<em>Ex: Bring the following items: paper, pen, and notebook.</em>)</p>
              </div>
            </div>

            <h3 class="section-title">4. Capitalization Rules</h3>
            <p class="text-body">Use capital letters:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>At the beginning of a sentence.</li>
              <li>For proper nouns such as names of people and places.</li>
              <li>For days and months.</li>
              <li>For the pronoun "I."</li>
              <li>In official titles when required.</li>
            </ul>
            <div class="aesthetic-box">
              <strong>Example:</strong><br>
              ❌ Incorrect: maria lives in batangas.<br>
              ✔️ Correct: Maria lives in Batangas.
            </div>

            <h3 class="section-title">5. Common Grammar Errors</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.05rem;">
              <li><strong>Subject-Verb Agreement:</strong> <em>He play basketball.</em> ➡️ <em>He plays basketball.</em></li>
              <li><strong>Incorrect Verb Form:</strong> <em>She have a new laptop.</em> ➡️ <em>She has a new laptop.</em></li>
              <li><strong>Sentence Fragment:</strong> <em>Because I was busy.</em> ➡️ <em>I could not attend because I was busy.</em></li>
            </ul>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Grammar organizes words correctly.</li>
              <li>Punctuation clarifies written messages.</li>
              <li>Capitalization follows specific writing rules.</li>
              <li>Correct grammar makes communication clearer.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=8" class="btn-primary">Proceed to Lesson 8 Exam →</a>
          </div>

        </div>
      </div>
    `,
    outsideContent: ``,
    script: `document.getElementById('menuToggleBtn').addEventListener('click', () => { document.getElementById('sidebar').classList.toggle('collapsed'); });`,
  },
  9: {
    title: "READEFINE - Lesson 9: Sentence Types and Functions",
    subtitle: "Level 1 • Lesson 9",
    heading: "Sentence Types and Functions",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Identify the four types of sentences according to function.</li>
              <li>Explain the purpose of each sentence type.</li>
              <li>Recognize appropriate punctuation for each type.</li>
              <li>Construct different types of sentences.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              People use sentences for different purposes. Sometimes they share information, ask questions, give instructions, or express strong emotions.<br>
              Understanding sentence types helps learners communicate their intentions clearly.
            </p>

            <h3 class="section-title">1. Declarative Sentence</h3>
            <p class="text-body">A declarative sentence makes a statement or gives information. It usually ends with a period.</p>
            <div class="aesthetic-box">
              <strong>Examples:</strong><br>
              • I am a college student.<br>
              • Reading improves vocabulary.<br>
              • The library closes at five o'clock.
            </div>

            <h3 class="section-title">2. Interrogative Sentence</h3>
            <p class="text-body">An interrogative sentence asks a question. It ends with a question mark.</p>
            <div class="aesthetic-box">
              <strong>Examples:</strong><br>
              • What time is the examination?<br>
              • Where did you put your notebook?<br>
              • Have you finished your assignment?
            </div>

            <h3 class="section-title">3. Imperative Sentence</h3>
            <p class="text-body">An imperative sentence gives a command, request, instruction, or direction. It usually ends with a period, but may end with an exclamation point when strong emphasis is intended. The subject "you" is usually understood rather than directly written.</p>
            <div class="aesthetic-box">
              <strong>Examples:</strong><br>
              • Please open your book.<br>
              • Submit your assignment tomorrow.<br>
              • Be careful!
            </div>

            <h3 class="section-title">4. Exclamatory Sentence</h3>
            <p class="text-body">An exclamatory sentence expresses strong emotions such as excitement, surprise, or frustration. It ends with an exclamation point.</p>
            <div class="aesthetic-box">
              <strong>Examples:</strong><br>
              • What a wonderful performance!<br>
              • I cannot believe we won!<br>
              • That is incredible!
            </div>

            <h3 class="section-title">5. Importance of Sentence Types</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem;">
              <li><strong>Declarative sentences</strong> communicate information.</li>
              <li><strong>Interrogative sentences</strong> gather information.</li>
              <li><strong>Imperative sentences</strong> communicate instructions or requests.</li>
              <li><strong>Exclamatory sentences</strong> express emotions.</li>
            </ul>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <p style="margin-bottom: 12px; font-size: 1.05rem;">There are four basic sentence types according to function:</p>
            <ul>
              <li>1. Declarative – makes a statement.</li>
              <li>2. Interrogative – asks a question.</li>
              <li>3. Imperative – gives a command or request.</li>
              <li>4. Exclamatory – expresses strong emotion.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=9" class="btn-primary">Proceed to Lesson 9 Exam →</a>
          </div>

        </div>
      </div>
    `,
    outsideContent: ``,
    script: `document.getElementById('menuToggleBtn').addEventListener('click', () => { document.getElementById('sidebar').classList.toggle('collapsed'); });`,
  },
  10: {
    title: "READEFINE - Lesson 10: Reading and Understanding Short Texts",
    subtitle: "Level 1 • Lesson 10",
    heading: "Reading and Understanding Short Texts",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Explain reading comprehension.</li>
              <li>Identify the main idea of a short passage.</li>
              <li>Recognize supporting details.</li>
              <li>Answer questions based on a text.</li>
              <li>Make simple conclusions from information presented.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Reading is not only about recognizing words. It also involves understanding the message, identifying important information, and connecting ideas.<br>
              Reading comprehension is an important skill because it helps individuals understand textbooks, instructions, news articles, online information, and everyday written communication.
            </p>

            <h3 class="section-title">1. What Is Reading Comprehension?</h3>
            <p class="text-body">Reading comprehension is the ability to read, understand, interpret, and gain meaning from written information. A reader with good comprehension can identify important ideas, recognize details, and explain what a text communicates.</p>

            <h3 class="section-title">2. Main Idea</h3>
            <p class="text-body">The main idea is the central point or most important message of a paragraph or passage. It answers the question: <em>"What is the text mainly about?"</em></p>
            <div class="aesthetic-box">
              <strong>Example Passage:</strong><br>
              "Reading regularly helps students improve their vocabulary. It also strengthens their understanding of different topics and develops their ability to express ideas."<br><br>
              🎯 <strong>Main Idea:</strong> Reading regularly helps students improve their learning and communication skills.
            </div>

            <h3 class="section-title">3. Supporting Details</h3>
            <p class="text-body">Supporting details are facts, examples, explanations, or information that develop and explain the main idea.</p>
            <div class="aesthetic-box">
              <strong>Supporting Details from the Example:</strong><br>
              • Reading improves vocabulary.<br>
              • Reading strengthens understanding of different topics.<br>
              • Reading develops communication skills.
            </div>

            <h3 class="section-title">4. Making Conclusions</h3>
            <p class="text-body">A conclusion is an idea or judgment reached after considering the information presented in a text.</p>
            <div class="aesthetic-box">
              <strong>Example Passage:</strong><br>
              "Anna reviewed her notes every night, completed practice exercises, and asked questions whenever she did not understand a topic."<br><br>
              🎯 <strong>Conclusion:</strong> Anna is actively preparing for her examination.
            </div>

            <h3 class="section-title">5. Reading Strategies</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 20px;">
              <li><strong>Preview the Text:</strong> Look at the title, headings, and other visible information before reading.</li>
              <li><strong>Identify Important Information:</strong> Pay attention to key words, repeated ideas, and important details.</li>
              <li><strong>Ask Questions:</strong> Ask yourself what the passage is about and why certain information is important.</li>
              <li><strong>Summarize:</strong> Restate the main points using your own words.</li>
              <li><strong>Reread When Necessary:</strong> Read difficult parts again to improve understanding.</li>
            </ul>

            <h3 class="section-title">6. Sample Reading Passage</h3>
            <div class="aesthetic-box">
              <strong>The Importance of Time Management</strong><br>
              Time management is an important skill for students. It helps them organize their activities, complete assignments, and prepare for examinations. Students who manage their time properly can balance academic responsibilities with personal activities. Creating a schedule and setting priorities are two useful ways to manage time effectively.<br><br>
              <strong>Comprehension Answers:</strong><br>
              • <strong>Main Idea:</strong> Time management is an important skill for students.<br>
              • <strong>Supporting Details:</strong> Helps complete assignments; helps prepare for exams.<br>
              • <strong>Ways to Manage Time:</strong> Creating a schedule; setting priorities.<br>
              • <strong>Conclusion:</strong> They can organize responsibilities and balance schoolwork with personal activities.
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Reading comprehension means understanding and interpreting written information.</li>
              <li>The main idea is the central message.</li>
              <li>Supporting details explain or develop the main idea.</li>
              <li>Conclusions are based on information presented in a text.</li>
              <li>Previewing, questioning, summarizing, and rereading improve comprehension.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=10" class="btn-primary">Proceed to Lesson 10 Exam →</a>
          </div>

        </div>
      </div>
    `,
    outsideContent: ``,
    script: `document.getElementById('menuToggleBtn').addEventListener('click', () => { document.getElementById('sidebar').classList.toggle('collapsed'); });`,
  },
  11: {
    title: "READEFINE - Lesson 11: Reading Comprehension Strategies",
    subtitle: "Level 2 • Lesson 11",
    heading: "Reading Comprehension Strategies",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define reading comprehension.</li>
              <li>Identify different reading comprehension strategies.</li>
              <li>Explain how reading strategies help readers understand a text.</li>
              <li>Apply appropriate reading strategies when reading different texts.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Reading is not only about recognizing words and reading sentences. It also involves understanding the meaning and information presented in a text.<br>
              Reading comprehension is the ability to understand, interpret, and remember what has been read.<br>
              Using reading comprehension strategies helps learners become better readers because these strategies guide them in understanding information, identifying important ideas, and remembering details.
            </p>

            <h3 class="section-title">1. What Is Reading Comprehension?</h3>
            <p class="text-body">Reading comprehension is the ability to understand the meaning of written words, sentences, and paragraphs. It allows readers to understand what the author wants to communicate.</p>
            <div class="aesthetic-box">
              <strong>Sentence:</strong> Maria brought an umbrella because dark clouds covered the sky.<br>
              <small style="color: #64748B;">Understanding the sentence means recognizing that Maria expected rain, so she brought an umbrella.</small>
            </div>

            <h3 class="section-title">2. Previewing</h3>
            <p class="text-body">Previewing is a reading strategy that involves looking at a text before reading it completely. Readers examine the title, headings, pictures, and other important features to get an idea of what the text is about.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> Before reading an article titled "The Importance of Exercise," a learner looks at its headings and pictures to understand its possible topic.
            </div>

            <h3 class="section-title">3. Predicting</h3>
            <p class="text-body">Predicting means making an educated guess about what may happen or what information may appear in a text based on title, pictures, and earlier clues.</p>
            <div class="aesthetic-box">
              <strong>Title:</strong> "A Day Without Electricity"<br>
              <strong>Prediction:</strong> The story may discuss the difficulties people experience when there is no electricity.
            </div>

            <h3 class="section-title">4. Skimming</h3>
            <p class="text-body">Skimming is reading a text quickly to get its general idea or main point by focusing on titles, headings, topic sentences, and key words instead of reading every word.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> A student quickly reads the headings and first sentences of an article to understand its general topic.
            </div>

            <h3 class="section-title">5. Scanning</h3>
            <p class="text-body">Scanning is reading quickly to find specific information, such as a name, date, number, or particular word without reading every sentence.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> A learner looks through a school announcement to find the date of an upcoming examination.
            </div>

            <h3 class="section-title">6. Asking Questions</h3>
            <p class="text-body">Asking questions is a strategy that helps readers check their understanding before, during, and after reading.</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 12px;">
              <li>What is the text about?</li>
              <li>Who are the main characters?</li>
              <li>Why did the event happen?</li>
              <li>What lesson can be learned from the text?</li>
            </ul>

            <h3 class="section-title">7. Visualizing</h3>
            <p class="text-body">Visualizing means creating mental pictures of the people, places, events, or situations described in a text.</p>
            <div class="aesthetic-box">
              <strong>Sentence:</strong> The children played happily under the tall trees while the cool wind blew.<br>
              <small style="color: #64748B;">A reader imagines children playing outside under trees with a gentle breeze.</small>
            </div>

            <h3 class="section-title">8. Making Connections</h3>
            <p class="text-body">Making connections means relating what is read to personal experiences, other texts, or events in the world.</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 12px;">
              <li><strong>Text-to-Self:</strong> Connecting the text to personal experiences.</li>
              <li><strong>Text-to-Text:</strong> Connecting the text to another story or reading material.</li>
              <li><strong>Text-to-World:</strong> Connecting the text to real-life events or situations.</li>
            </ul>

            <h3 class="section-title">9. Summarizing</h3>
            <p class="text-body">Summarizing means giving a shorter version of a text by including only its most important ideas.</p>
            <div class="aesthetic-box">
              <strong>Original:</strong> A student studies every night, completes assignments, and reviews lessons to prepare for an examination.<br>
              <strong>Summary:</strong> The student prepares for the examination by studying regularly.
            </div>

            <h3 class="section-title">10. Monitoring Understanding</h3>
            <p class="text-body">Monitoring understanding means checking whether the information being read is clear and understandable, and rereading or using context clues when confused.</p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Summary Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Skimming</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Reading titles and first sentences of "Healthy Eating Habits".</p>
                <small style="color: var(--deep-blue); font-weight: 700;">Purpose: Get the general idea.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Scanning</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Looking through an announcement for an exam date.</p>
                <small style="color: var(--deep-blue); font-weight: 700;">Purpose: Locate specific info.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Predicting</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Guessing "The Lost Puppy" is about a puppy finding its owner.</p>
                <small style="color: var(--deep-blue); font-weight: 700;">Purpose: Make an educated guess.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Visualizing</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Imagining a golden sun disappearing behind mountains.</p>
                <small style="color: var(--deep-blue); font-weight: 700;">Purpose: Create mental pictures.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Reading comprehension means understanding what you read.</li>
              <li>Previewing helps readers prepare before reading.</li>
              <li>Active reading helps improve understanding.</li>
              <li>Asking questions helps identify important information.</li>
              <li>Summarizing helps remember the main points.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=11" class="btn-primary">Proceed to Lesson 11 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  12: {
    title: "READEFINE - Lesson 12: Identifying Main Ideas",
    subtitle: "Level 2 • Lesson 12",
    heading: "Identifying Main Ideas",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define the main idea of a text.</li>
              <li>Distinguish the main idea from supporting details.</li>
              <li>Identify the main idea in a paragraph.</li>
              <li>Explain the importance of identifying the main idea when reading.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Every paragraph or passage communicates information about a particular topic. Some information explains the overall message, while other information provides examples and additional explanations.<br>
              The main idea is the most important point that the author wants readers to understand.<br>
              Learning how to identify the main idea helps readers understand the purpose of a paragraph and recognize the most important information.
            </p>

            <h3 class="section-title">1. What Is a Main Idea?</h3>
            <p class="text-body">The main idea is the central point or most important message of a paragraph or passage. It tells what the text is mostly about.</p>
            <div class="aesthetic-box">
              <strong>Paragraph:</strong> Reading books provides many benefits. It improves vocabulary, develops imagination, and helps people gain new knowledge.<br>
              🎯 <strong>Main Idea:</strong> Reading books provides many benefits.
            </div>

            <h3 class="section-title">2. What Is a Topic?</h3>
            <p class="text-body">The topic is the general subject being discussed in a paragraph or passage. It is usually expressed in a word or short phrase.</p>
            <div class="aesthetic-box">
              <strong>Paragraph:</strong> Regular exercise helps people maintain good health. It strengthens the body, improves energy, and supports overall wellness.<br>
              📌 <strong>Topic:</strong> Exercise<br>
              🎯 <strong>Main Idea:</strong> Regular exercise helps people maintain good health.
            </div>

            <h3 class="section-title">3. What Is a Supporting Detail?</h3>
            <p class="text-body">Supporting details are pieces of information that explain, describe, or provide evidence for the main idea. They help readers understand the central message more clearly.</p>
            <div class="aesthetic-box">
              🎯 <strong>Main Idea:</strong> Drinking enough water is important for the body.<br><br>
              <strong>Supporting Details:</strong><br>
              • Water helps prevent dehydration.<br>
              • Water supports normal body functions.<br>
              • Water helps regulate body temperature.
            </div>

            <h3 class="section-title">4. Stated Main Idea</h3>
            <p class="text-body">A stated main idea is directly expressed in the paragraph. Readers can identify it by looking for a sentence that clearly communicates the central point.</p>
            <div class="aesthetic-box">
              <strong>Paragraph:</strong> Exercise is important for maintaining a healthy body. It strengthens muscles, improves endurance, and supports overall health.<br>
              🎯 <strong>Stated Main Idea:</strong> Exercise is important for maintaining a healthy body.
            </div>

            <h3 class="section-title">5. Implied Main Idea</h3>
            <p class="text-body">An implied main idea is not directly written in one sentence. Readers must understand the supporting details and determine the central message.</p>
            <div class="aesthetic-box">
              <strong>Paragraph:</strong> Ana studies every evening. She reviews her notes, completes practice exercises, and asks questions when she does not understand a lesson.<br>
              🎯 <strong>Implied Main Idea:</strong> Ana works hard to improve her academic performance.
            </div>

            <h3 class="section-title">6. How to Identify the Main Idea</h3>
            <p class="text-body">Readers can use the following steps:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>Read the entire paragraph carefully.</li>
              <li>Identify the topic being discussed.</li>
              <li>Look for repeated words or related information.</li>
              <li>Determine what the author wants readers to understand.</li>
              <li>Separate the central point from supporting details.</li>
            </ul>
            <div class="aesthetic-box">
              <strong>Paragraph:</strong> Plants need sunlight, water, and nutrients to grow. Sunlight helps plants produce food, while water and nutrients support their development.<br>
              📌 <strong>Topic:</strong> Plants<br>
              🎯 <strong>Main Idea:</strong> Plants need certain things to grow.<br>
              <strong>Supporting Details:</strong> Sunlight, water, and nutrients help plants develop.
            </div>

            <h3 class="section-title">7. Main Idea in Different Texts</h3>
            <p class="text-body">The main idea can appear in different types of reading materials, including stories, articles, essays, and informational texts. In a story, it may describe the most important event or message. In an informational article, it explains the central subject presented by the author.</p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Sleep</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Topic:</strong> Sleep</p>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Main Idea:</strong> Proper sleep is important for students.</p>
                <small style="color: #64748B;">Details: Helps concentration, memory, and resting the body.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Transportation</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Topic:</strong> Public Transportation</p>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Main Idea:</strong> Public transportation helps people travel to different places.</p>
                <small style="color: #64748B;">Details: Buses and trains transport passengers to work, school, and destinations.</small>
              </div>
              <div class="mini-pill-card" style="grid-column: 1 / -1;">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Carlo's Preparation</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Topic:</strong> Carlo's Preparation</p>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Main Idea:</strong> Carlo prepares carefully for school.</p>
                <small style="color: #64748B;">Details: Arranges books, checks assignments, and prepares materials.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>1. The main idea is the central message of a text.</li>
              <li>2. Supporting details explain the main idea.</li>
              <li>3. The main idea may be stated directly or implied.</li>
              <li>4. Titles and repeated ideas can provide clues.</li>
              <li>5. Identifying the main idea helps readers understand a text.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=12" class="btn-primary">Proceed to Lesson 12 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  13: {
    title: "READEFINE - Lesson 13: Recognizing Supporting Details",
    subtitle: "Level 2 • Lesson 13",
    heading: "Recognizing Supporting Details",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define supporting details.</li>
              <li>Identify supporting details in a paragraph.</li>
              <li>Distinguish relevant details from unrelated information.</li>
              <li>Explain how supporting details develop the main idea.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              A paragraph usually contains a main idea and several supporting details. The main idea tells readers what the paragraph is mostly about, while supporting details provide information that explains or develops that idea.<br>
              Recognizing supporting details helps readers understand information more completely. It also allows them to identify examples, facts, explanations, and descriptions that make the main idea clearer.
            </p>

            <h3 class="section-title">1. What Are Supporting Details?</h3>
            <p class="text-body">Supporting details are pieces of information that explain, describe, or provide evidence for the main idea of a paragraph or passage. They help readers understand the central message by giving additional information.</p>
            <div class="aesthetic-box">
              🎯 <strong>Main Idea:</strong> Eating fruits is beneficial to health.<br><br>
              <strong>Supporting Details:</strong><br>
              • Fruits contain vitamins and minerals.<br>
              • Fruits provide dietary fiber.<br>
              • Fruits can be part of a balanced diet.
            </div>

            <h3 class="section-title">2. Types of Supporting Details</h3>
            <p class="text-body">Supporting details can appear in different forms:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Facts:</strong> Statements that can be checked or proven to be true. (e.g., <em>Water freezes at 0°C under standard atmospheric pressure.</em>)</li>
              <li><strong>Examples:</strong> Specific situations or items used to explain an idea. (e.g., <em>Fruits such as apples, bananas, and oranges can be included in a healthy diet.</em>)</li>
              <li><strong>Descriptions:</strong> Details about the characteristics or qualities of a person, place, object, or situation. (e.g., <em>The classroom is clean, bright, and well-organized.</em>)</li>
              <li><strong>Explanations:</strong> Reasons or information that make an idea easier to understand. (e.g., <em>Plants need sunlight because it helps them produce food.</em>)</li>
            </ul>

            <h3 class="section-title">3. Relevant Supporting Details</h3>
            <p class="text-body">Relevant supporting details are directly connected to the main idea. They help explain or develop the central message of the paragraph.</p>
            <div class="aesthetic-box">
              🎯 <strong>Main Idea:</strong> Reading improves learning.<br><br>
              <strong>Relevant Details:</strong><br>
              • Reading develops vocabulary.<br>
              • Reading provides new information.<br>
              • Reading improves comprehension.
            </div>

            <h3 class="section-title">4. Irrelevant Details</h3>
            <p class="text-body">Irrelevant details are pieces of information that do not directly support or explain the main idea. They may be true, but they do not contribute to the central topic.</p>
            <div class="aesthetic-box">
              🎯 <strong>Main Idea:</strong> Regular exercise supports physical health.<br><br>
              ✔ Exercise strengthens the body. <em>(Relevant)</em><br>
              ✔ Exercise improves endurance. <em>(Relevant)</em><br>
              ✖ My favorite color is blue. <em>(Irrelevant)</em>
            </div>

            <h3 class="section-title">5. How Supporting Details Develop the Main Idea</h3>
            <p class="text-body">Supporting details help develop the main idea by giving readers more information. They can explain why something happens, provide examples, describe a situation, or present evidence.</p>
            <div class="aesthetic-box">
              🎯 <strong>Main Idea:</strong> Saving money is a useful habit.<br><br>
              <strong>Supporting Details:</strong><br>
              • It helps people prepare for future needs.<br>
              • It can help pay for unexpected expenses.<br>
              • It teaches people to manage their money responsibly.<br><br>
              <small style="color: #64748B;">The details explain why saving money is useful.</small>
            </div>

            <h3 class="section-title">6. How to Identify Supporting Details</h3>
            <p class="text-body">Readers can follow these steps:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>Identify the main idea first.</li>
              <li>Read the sentences that provide additional information.</li>
              <li>Look for facts, examples, descriptions, and explanations.</li>
              <li>Determine whether each detail is connected to the main idea.</li>
              <li>Remove information that does not help explain the central point.</li>
            </ul>
            <div class="aesthetic-box">
              <strong>Paragraph:</strong> School libraries are useful places for students. They provide books, learning materials, and quiet spaces for studying. Students can also use library resources for research.<br><br>
              🎯 <strong>Main Idea:</strong> School libraries are useful places for students.<br>
              <strong>Supporting Details:</strong> They provide books and learning materials; they offer quiet spaces; they provide resources for research.
            </div>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Relevant vs. Irrelevant</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Main Idea:</strong> Drinking water is important for the body.</p>
                <small style="color: #64748B;">
                  1. Water helps prevent dehydration. (Relevant)<br>
                  2. Water supports normal body functions. (Relevant)<br>
                  3. Many people enjoy watching movies. (Irrelevant)
                </small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Examples as Details</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Main Idea:</strong> There are different ways to exercise.</p>
                <small style="color: #64748B;">
                  • Walking is a form of physical activity.<br>
                  • Cycling can improve endurance.<br>
                  • Swimming is another way to stay active.
                </small>
              </div>
              <div class="mini-pill-card" style="grid-column: 1 / -1;">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Explanations as Details</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Main Idea:</strong> Plants need sunlight to grow.</p>
                <small style="color: #64748B;">
                  <strong>Supporting Detail:</strong> Sunlight helps plants produce food through photosynthesis.<br>
                  <em>(Tells readers why sunlight is important to plants.)</em>
                </small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>1. Supporting details explain the main idea.</li>
              <li>2. They provide facts, examples, and explanations.</li>
              <li>3. Relevant details are connected to the main idea.</li>
              <li>4. Not all information in a paragraph is equally important.</li>
              <li>5. Supporting details make a text clearer and more meaningful.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=13" class="btn-primary">Proceed to Lesson 13 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  14: {
    title: "READEFINE - Lesson 14: Sequencing Events and Ideas",
    subtitle: "Level 2 • Lesson 14",
    heading: "Sequencing Events and Ideas",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define sequencing.</li>
              <li>Identify the correct order of events or ideas in a text.</li>
              <li>Recognize signal words used to show sequence.</li>
              <li>Explain the importance of arranging information in the correct order.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Information in stories, instructions, and paragraphs is often presented in a particular order. Events may happen one after another, while instructions may need to be followed step by step.<br>
              Sequencing is the process of arranging events or ideas in the order in which they happen or should be understood.<br>
              Understanding sequence helps readers follow a story, understand procedures, and recognize the relationship between events.
            </p>

            <h3 class="section-title">1. What Is Sequencing?</h3>
            <p class="text-body">Sequencing is the process of arranging events, actions, or ideas in a logical or correct order. It helps readers understand what happened first, what happened next, and what happened last.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> A student wakes up, eats breakfast, and goes to school.<br><br>
              <strong>Correct Sequence:</strong><br>
              1. Wakes up.<br>
              2. Eats breakfast.<br>
              3. Goes to school.
            </div>

            <h3 class="section-title">2. Chronological Order</h3>
            <p class="text-body">Chronological order is the arrangement of events according to the time they happened. It is commonly used in biographies, historical accounts, personal experiences, and stories.</p>
            <div class="aesthetic-box">
              • In the morning, Ana prepared for school.<br>
              • At noon, she ate lunch with her classmates.<br>
              • In the afternoon, she went home.<br><br>
              <small style="color: #64748B;">The events are arranged strictly according to time.</small>
            </div>

            <h3 class="section-title">3. Logical Order</h3>
            <p class="text-body">Logical order is the arrangement of ideas or information in a way that makes sense. It does not always depend on time. Instead, ideas are organized according to their relationship or importance.</p>
            <div class="aesthetic-box">
              <strong>Writing a School Essay:</strong><br>
              1. Choose a topic.<br>
              2. Gather information.<br>
              3. Organize the ideas.<br>
              4. Write the essay.<br>
              5. Review the final work.
            </div>

            <h3 class="section-title">4. Signal Words for Sequencing</h3>
            <p class="text-body">Signal words are words or phrases that show the order of events or ideas. Common sequence signal words include:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>First</li>
              <li>Next</li>
              <li>Then</li>
              <li>Afterward</li>
              <li>Before / After</li>
              <li>Finally</li>
              <li>Meanwhile / Later</li>
            </ul>
            <div class="aesthetic-box">
              <strong>Example:</strong> <em>First</em>, wash your hands. <em>Next</em>, prepare the ingredients. <em>Then</em>, mix them together. <em>Finally</em>, serve the food.
            </div>

            <h3 class="section-title">5. Beginning, Middle, and End</h3>
            <p class="text-body">Stories and narratives are commonly organized into three main parts:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Beginning:</strong> Introduces the characters, setting, or situation.</li>
              <li><strong>Middle:</strong> Presents the main events, problems, or actions.</li>
              <li><strong>End:</strong> Shows how the events finish or how the problem is resolved.</li>
            </ul>
            <div class="aesthetic-box">
              • <strong>Beginning:</strong> A boy finds an injured bird.<br>
              • <strong>Middle:</strong> He carefully takes the bird home and gives it food and water.<br>
              • <strong>End:</strong> The bird becomes stronger and returns to nature.
            </div>

            <h3 class="section-title">6. Why Is Sequencing Important?</h3>
            <p class="text-body">Sequencing helps readers understand the order of events, follow instructions correctly, recognize how one event leads to another, understand stories more clearly, and organize information when writing.</p>

            <h3 class="section-title">7. How to Identify the Correct Sequence</h3>
            <p class="text-body">Readers can follow these steps: Read all the events or instructions, look for time clues and signal words, identify what happened first, determine what happened next, and arrange the remaining events until the final step.</p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Summary Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Chronological Order</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">
                  1. The sun rose.<br>
                  2. The students arrived at school.<br>
                  3. The students went home.
                </p>
                <small style="color: var(--deep-blue); font-weight: 700;">Arranged by time of occurrence.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Signal Words</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"First, open the book. Next, read the instructions. Finally, answer the questions."</p>
                <small style="color: var(--deep-blue); font-weight: 700;">Signal words: First, Next, Finally.</small>
              </div>
              <div class="mini-pill-card" style="grid-column: 1 / -1;">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Beginning, Middle, End</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">
                  <strong>Beginning:</strong> A girl planted a seed.<br>
                  <strong>Middle:</strong> She watered it every day.<br>
                  <strong>End:</strong> The seed grew into a small plant.
                </p>
                <small style="color: var(--deep-blue); font-weight: 700;">Narrative progression from start to finish.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Sequencing means arranging events or ideas in the correct order.</li>
              <li>Chronological order arranges events according to time.</li>
              <li>Logical order arranges ideas in a way that makes sense.</li>
              <li>Signal words help readers recognize the order of information.</li>
              <li>Stories commonly have a beginning, middle, and end.</li>
              <li>Correct sequencing helps readers understand stories, instructions, and information.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=14" class="btn-primary">Proceed to Lesson 14 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  15: {
    title: "READEFINE - Lesson 15: Making Inferences",
    subtitle: "Level 2 • Lesson 15",
    heading: "Making Inferences",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define what an inference is.</li>
              <li>Identify textual clues and prior knowledge.</li>
              <li>Distinguish between explicit information and inferences.</li>
              <li>Make reasonable inferences about characters and situations.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Sometimes, authors do not directly explain everything in a story or text. They leave clues, and readers use these clues together with what they already know to understand something that is not directly explained.
            </p>

            <h3 class="section-title">1. What Is an Inference?</h3>
            <p class="text-body">An inference is a reasonable conclusion that readers make by combining textual clues with what they already know (prior knowledge).</p>
            <div class="aesthetic-box">
              <strong>Sentence:</strong> Mark entered the house with wet clothes and an umbrella.<br>
              🎯 <strong>Inference:</strong> It was probably raining outside.<br>
              <small style="color: #64748B;">The sentence does not directly say that it was raining, but the details provide clues.</small>
            </div>

            <h3 class="section-title">2. Textual Clues</h3>
            <p class="text-body">Textual clues are words, statements, and details in a text that help readers understand information and make inferences. These clues may describe actions, feelings, situations, or events.</p>
            <div class="aesthetic-box">
              <strong>Sentence:</strong> Lisa looked at the clock repeatedly and kept checking the door.<br>
              <strong>Clues:</strong> Repeatedly looked at the clock, kept checking the door.<br>
              🎯 <strong>Possible Inference:</strong> Lisa may be waiting for someone or something.
            </div>

            <h3 class="section-title">3. Prior Knowledge</h3>
            <p class="text-body">Prior knowledge refers to information, experiences, and understanding that readers already have before reading a text. Readers use prior knowledge together with textual clues to make reasonable inferences.</p>
            <div class="aesthetic-box">
              <strong>Text:</strong> The children wore thick jackets, gloves, and scarves.<br>
              <strong>Prior Knowledge:</strong> These clothes are commonly used in cold weather.<br>
              🎯 <strong>Inference:</strong> The children are probably in a cold place.
            </div>

            <h3 class="section-title">4. Inference and Explicit Information</h3>
            <p class="text-body">Explicit information is directly stated in the text, whereas an inference is a conclusion that readers make based on clues and prior knowledge.</p>
            <div class="aesthetic-box">
              <strong>Text:</strong> "John carried a birthday cake into the room. His friends shouted, 'Surprise!'"<br>
              • <strong>Explicit Information:</strong> John carried a birthday cake; his friends shouted "Surprise!"<br>
              • <strong>Inference:</strong> The friends prepared a surprise celebration.
            </div>

            <h3 class="section-title">5. Making Inferences About Characters and Situations</h3>
            <p class="text-body">Readers can make inferences about characters by examining their actions, words, expressions, and reactions, as well as understand situations that are not directly explained.</p>
            <div class="aesthetic-box">
              <strong>Example (Character):</strong> Mia smiled widely when she saw the high score on her examination. ➡️ <em>Mia was probably happy or proud.</em><br>
              <strong>Example (Situation):</strong> The streets were wet, people were carrying umbrellas, and cars moved slowly. ➡️ <em>It had probably rained recently.</em>
            </div>

            <h3 class="section-title">6. How to Make a Reasonable Inference</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>Read the text carefully.</li>
              <li>Identify important words and details.</li>
              <li>Use prior knowledge.</li>
              <li>Connect the clues with what is already known.</li>
              <li>Make a conclusion that is supported by the information.</li>
            </ul>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Inferring Feelings</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Anna received a gift and immediately smiled while thanking her friend.</p>
                <small style="color: #64748B;"><strong>Inference:</strong> Anna was happy or grateful.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Inferring Weather</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">People were holding umbrellas while walking along the street.</p>
                <small style="color: #64748B;"><strong>Inference:</strong> It may be raining.</small>
              </div>
              <div class="mini-pill-card" style="grid-column: 1 / -1;">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Inferring a Situation</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">The classroom was empty, the lights were off, and the chairs were arranged neatly.</p>
                <small style="color: #64748B;"><strong>Inference:</strong> Classes may have already ended or the room is not currently being used.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>An inference is a reasonable conclusion based on clues and prior knowledge.</li>
              <li>Textual clues are details that help readers understand information.</li>
              <li>Prior knowledge is what readers already know before reading.</li>
              <li>Explicit information is directly stated in a text.</li>
              <li>Inferences are not directly stated but are supported by clues.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=15" class="btn-primary">Proceed to Lesson 15 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  16: {
    title: "READEFINE - Lesson 16: Understanding Text Structure",
    subtitle: "Level 2 • Lesson 16",
    heading: "Understanding Text Structure",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define text structure.</li>
              <li>Identify common types of text structure.</li>
              <li>Recognize signal words that indicate different text structures.</li>
              <li>Explain how text structure helps readers understand information.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Writers organize information in different ways depending on the purpose of their writing. Some texts explain how events happen, while others compare ideas, describe problems, or present solutions.<br>
              Text structure refers to the way information and ideas are organized in a written text.<br>
              Understanding text structure helps readers recognize how ideas are connected and how the author presents information.
            </p>

            <h3 class="section-title">1. What Is Text Structure?</h3>
            <p class="text-body">Text structure is the organization or arrangement of information and ideas in a written text. It helps writers present information clearly and helps readers follow the message.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> A recipe presents instructions in a sequence, while a comparison article organizes information by discussing similarities and differences.
            </div>

            <h3 class="section-title">2. Description</h3>
            <p class="text-body">Description is a text structure that explains the characteristics, features, or qualities of a person, place, object, or idea.</p>
            <p class="text-body"><strong>Signal Words:</strong> For example, such as, including, specifically, characteristics include.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> The school library is a quiet and organized place. It contains shelves of books, reading tables, computers, and study areas.
            </div>

            <h3 class="section-title">3. Sequence or Chronological Order</h3>
            <p class="text-body">This structure presents events or steps in the order they happen. It is commonly used in stories, historical accounts, and instructions.</p>
            <p class="text-body"><strong>Signal Words:</strong> First, next, then, after, before, finally.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> First, prepare the materials. Next, follow the instructions. Finally, check your work.
            </div>

            <h3 class="section-title">4. Compare and Contrast</h3>
            <p class="text-body">Explains the similarities (compare) and differences (contrast) between two or more subjects.</p>
            <p class="text-body"><strong>Signal Words:</strong> Similarly, both, likewise, however, unlike, in contrast, on the other hand.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> Books and e-books are both sources of reading material. However, printed books use paper, while e-books are read using electronic devices.
            </div>

            <h3 class="section-title">5. Cause and Effect</h3>
            <p class="text-body">Explains why something happens (cause) and what happens as a result (effect).</p>
            <p class="text-body"><strong>Signal Words:</strong> Because, since, therefore, as a result, consequently, due to.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> It rained heavily throughout the night. As a result, some streets became flooded.<br>
              • <strong>Cause:</strong> Heavy rainfall.<br>
              • <strong>Effect:</strong> Some streets became flooded.
            </div>

            <h3 class="section-title">6. Problem and Solution</h3>
            <p class="text-body">Presents an issue (problem) and explains one or more ways to address it (solution).</p>
            <p class="text-body"><strong>Signal Words:</strong> Problem, issue, solution, to solve this, one way, to address the problem.</p>
            <div class="aesthetic-box">
              • <strong>Problem:</strong> Students often forget their assignment deadlines.<br>
              • <strong>Solution:</strong> They can use a planner or calendar to organize their tasks.
            </div>

            <h3 class="section-title">7. How to Identify Text Structure</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>Read the entire passage carefully.</li>
              <li>Identify the main topic.</li>
              <li>Observe how the information is organized.</li>
              <li>Look for signal words.</li>
              <li>Determine whether the author is describing, sequencing, comparing, explaining causes/effects, or presenting a problem/solution.</li>
            </ul>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Summary Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Description</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"The beach has soft sand, clear water, and tall coconut trees."</p>
                <small style="color: #64748B;">Reason: Explains the characteristics of a beach.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Compare & Contrast</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Both laptops and tablets can be used for studying. However, laptops have keyboards..."</p>
                <small style="color: #64748B;">Reason: Presents similarities and differences.</small>
              </div>
              <div class="mini-pill-card" style="grid-column: 1 / -1;">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Cause & Effect</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"The students practiced regularly; therefore, their performance improved."</p>
                <small style="color: #64748B;">Cause: Regular practice | Effect: Improved performance</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Text structure is the way information is organized in a text.</li>
              <li>Description explains characteristics of a subject.</li>
              <li>Sequence presents events or steps in order.</li>
              <li>Compare and contrast identifies similarities and differences.</li>
              <li>Cause and effect explains reasons and results.</li>
              <li>Problem and solution presents an issue and ways to address it.</li>
              <li>Signal words help readers recognize text structures.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=16" class="btn-primary">Proceed to Lesson 16 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  17: {
    title: "READEFINE - Lesson 17: Paragraph Structure and Organization",
    subtitle: "Level 2 • Lesson 17",
    heading: "Paragraph Structure and Organization",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define a paragraph.</li>
              <li>Identify the three main parts of a paragraph.</li>
              <li>Explain the purpose of a topic sentence, supporting sentences, and concluding sentence.</li>
              <li>Organize ideas into a clear and meaningful paragraph.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Writing is made up of sentences that communicate ideas. These sentences are grouped into paragraphs to organize information and make writing easier to understand.<br>
              A paragraph is a group of related sentences that develop one main idea.<br>
              Understanding paragraph structure helps learners arrange their thoughts, connect sentences, and communicate information clearly.
            </p>

            <h3 class="section-title">1. What Is a Paragraph?</h3>
            <p class="text-body">A paragraph is a group of related sentences that discuss one main idea or topic. It usually begins with a topic sentence, continues with supporting sentences, and may end with a concluding sentence.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> Reading is a useful habit for students. It helps improve vocabulary and reading comprehension. It also provides new information and develops imagination. Therefore, students should make time for reading every day.<br><br>
              <small style="color: #64748B;">The sentences work together to explain one main idea: reading is a useful habit for students.</small>
            </div>

            <h3 class="section-title">2. Topic Sentence</h3>
            <p class="text-body">The topic sentence introduces the main idea of a paragraph. It tells readers what the paragraph will discuss. It is commonly found at the beginning of a paragraph.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> "Regular exercise is important for maintaining good health."
            </div>

            <h3 class="section-title">3. Supporting Sentences</h3>
            <p class="text-body">Supporting sentences provide explanations, examples, facts, and other information that develop the topic sentence.</p>
            <div class="aesthetic-box">
              <strong>Topic Sentence:</strong> Regular exercise is important for maintaining good health.<br>
              <strong>Supporting Sentences:</strong><br>
              • Exercise strengthens the muscles.<br>
              • It helps improve endurance.<br>
              • It supports overall physical wellness.
            </div>

            <h3 class="section-title">4. Concluding Sentence</h3>
            <p class="text-body">A concluding sentence ends a paragraph by restating the main idea or providing a final thought. It gives the paragraph a sense of completion.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> "Because of these benefits, regular exercise should be part of a healthy lifestyle."
            </div>

            <h3 class="section-title">5. Unity in a Paragraph</h3>
            <p class="text-body">Unity means that all sentences in a paragraph are related to one main idea. Every sentence must contribute to the topic.</p>
            <div class="aesthetic-box">
              <strong>Topic Sentence:</strong> Online learning provides flexibility for students.<br>
              ✔ Students can access lessons from different locations. <em>(Related)</em><br>
              ✔ Recorded lessons can be reviewed when needed. <em>(Related)</em><br>
              ✖ My favorite food is fried chicken. <em>(Unrelated detail!)</em>
            </div>

            <h3 class="section-title">6. Coherence in a Paragraph</h3>
            <p class="text-body">Coherence means that ideas and sentences are connected in a logical and understandable way. Writers use transition words to connect sentences smoothly.</p>
            <p class="text-body"><strong>Transition Words:</strong> First, Next, Also, Furthermore, However, Therefore, Finally.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> First, students should identify their tasks. Next, they should organize them according to importance. Finally, they should complete each task based on their schedule.
            </div>

            <h3 class="section-title">7. How to Organize a Paragraph</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>Choose one clear topic.</li>
              <li>Identify the main idea.</li>
              <li>Write a topic sentence.</li>
              <li>Add supporting sentences.</li>
              <li>Arrange ideas in a logical order.</li>
              <li>Use transition words when needed.</li>
              <li>End with a concluding sentence when appropriate.</li>
            </ul>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Summary Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Paragraph Parts</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Time management is important for students..."</p>
                <small style="color: #64748B;">Contains: Topic Sentence, Supporting Sentences, and Concluding Sentence.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Identifying Unity</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Healthy eating topic ➡️ Fruits provide vitamins, veggies have nutrients, balanced diet supports functions.</p>
                <small style="color: #64748B;">All sentences support healthy eating.</small>
              </div>
              <div class="mini-pill-card" style="grid-column: 1 / -1;">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Identifying Coherence</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"First, prepare your notebook. Next, write the important information. Finally, review your notes."</p>
                <small style="color: #64748B;">Transitions connect the steps smoothly.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>A paragraph is a group of related sentences about one main idea.</li>
              <li>The topic sentence introduces the main idea.</li>
              <li>Supporting sentences explain and develop the topic sentence.</li>
              <li>The concluding sentence gives the paragraph a final thought.</li>
              <li>Unity means keeping all sentences focused on the main topic.</li>
              <li>Coherence means ideas are connected in a logical and understandable way.</li>
              <li>Transition words help connect sentences and ideas smoothly.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=17" class="btn-primary">Proceed to Lesson 17 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  18: {
    title: "READEFINE - Lesson 18: Writing Clear and Complete Sentences",
    subtitle: "Level 2 • Lesson 18",
    heading: "Writing Clear and Complete Sentences",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Explain what makes a sentence clear and complete.</li>
              <li>Identify the basic parts of a complete sentence.</li>
              <li>Recognize sentence fragments and run-on sentences.</li>
              <li>Construct clear and grammatically complete sentences.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Sentences are important because they allow people to express complete thoughts and communicate information.<br>
              A clear and complete sentence helps readers understand the message without confusion. However, some sentences may be incomplete or contain too many connected ideas without proper punctuation.<br>
              Learning how to write complete sentences helps learners communicate more effectively in academic and everyday situations.
            </p>

            <h3 class="section-title">1. What Is a Sentence?</h3>
            <p class="text-body">A sentence is a group of words that expresses a complete thought. It usually begins with a capital letter and ends with appropriate punctuation (period, question mark, or exclamation point).</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> "The students are preparing for their examination." <em>(Expresses a complete thought)</em>
            </div>

            <h3 class="section-title">2. Subject & Predicate of a Sentence</h3>
            <p class="text-body"><strong>Subject:</strong> Identifies the person, place, thing, or idea that the sentence is about.<br><strong>Predicate:</strong> Tells what the subject does or what is said about the subject.</p>
            <div class="aesthetic-box">
              <strong>Sentence:</strong> "The young girl reads a book."<br>
              • <strong>Subject:</strong> The young girl<br>
              • <strong>Predicate:</strong> reads a book
            </div>

            <h3 class="section-title">3. Complete Sentence vs. Sentence Fragment</h3>
            <p class="text-body">A complete sentence expresses a complete thought and contains both a subject and a predicate. A <strong>sentence fragment</strong> is a group of words that fails to express a complete thought because it is missing key parts.</p>
            <div class="aesthetic-box">
              ✖ <strong>Fragment:</strong> "Because it was raining." <em>(Incomplete thought)</em><br>
              ✔ <strong>Complete:</strong> "Because it was raining, the students stayed inside."<br><br>
              ✖ <strong>Fragment:</strong> "The boy in the classroom." <em>(Missing predicate action)</em><br>
              ✔ <strong>Complete:</strong> "The boy in the classroom is reading."
            </div>

            <h3 class="section-title">4. Run-On Sentences</h3>
            <p class="text-body">A run-on sentence occurs when two or more independent clauses are joined incorrectly without appropriate punctuation or connecting words.</p>
            <div class="aesthetic-box">
              ✖ <strong>Incorrect:</strong> "I studied for the examination I reviewed my notes."<br>
              ✔ <strong>Correct Version 1:</strong> "I studied for the examination, and I reviewed my notes."<br>
              ✔ <strong>Correct Version 2:</strong> "I studied for the examination. I reviewed my notes."
            </div>

            <h3 class="section-title">5. Writing Clear & Specific Sentences</h3>
            <p class="text-body">A clear sentence communicates an idea directly without unnecessary fluff or confusing arrangements. It should identify specific persons, objects, and situations.</p>
            <div class="aesthetic-box">
              ✖ <strong>Unclear:</strong> "The assignment that was given by the teacher yesterday needs to be done by the students."<br>
              ✔ <strong>Clearer:</strong> "Students need to complete the assignment given yesterday."<br><br>
              ✖ <strong>Vague:</strong> "She brought it."<br>
              ✔ <strong>Specific:</strong> "Mia brought her notebook to class."
            </div>

            <h3 class="section-title">6. How to Write Clear and Complete Sentences</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>Identify the subject.</li>
              <li>Make sure the sentence has a predicate.</li>
              <li>Express a complete thought.</li>
              <li>Use correct grammar and punctuation.</li>
              <li>Avoid sentence fragments and run-on sentences.</li>
              <li>Choose words that communicate the message directly.</li>
            </ul>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Summary Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Complete Sentence</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"The students completed their project."</p>
                <small style="color: #64748B;">Subject: The students | Predicate: completed their project.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Fragment Corrected</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"After finishing the activity." ➡️ "After finishing the activity, the students submitted their work."</p>
                <small style="color: #64748B;">Added independent clause to complete the thought.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Run-On Corrected</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Maria likes reading she visits the library every week." ➡️ "...likes reading, so she visits..."</p>
                <small style="color: #64748B;">Joined correctly with comma and coordinating conjunction.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Clear Expression</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"The thing was placed there by him." ➡️ "Mark placed the book on the table."</p>
                <small style="color: #64748B;">Direct, active, and specific vocabulary.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>A sentence is a group of words that expresses a complete thought.</li>
              <li>A sentence usually contains a subject and a predicate.</li>
              <li>The subject tells who or what the sentence is about; the predicate tells what it does.</li>
              <li>A complete sentence expresses a full thought; a fragment does not.</li>
              <li>A run-on sentence joins independent clauses incorrectly.</li>
              <li>Clear sentences communicate ideas directly and accurately.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=18" class="btn-primary">Proceed to Lesson 18 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  19: {
    title: "READEFINE - Lesson 19: Sentence Combining and Paragraph Development",
    subtitle: "Level 2 • Lesson 19",
    heading: "Sentence Combining and Paragraph Development",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Explain what sentence combining means.</li>
              <li>Identify different ways of combining sentences.</li>
              <li>Use conjunctions and appropriate punctuation when combining ideas.</li>
              <li>Develop a paragraph by connecting related sentences.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Writing becomes more organized when sentences are connected properly. Sometimes, two short sentences can be combined to create a smoother and more meaningful sentence.<br>
              Sentence combining helps writers avoid repetitive wording and improve the flow of their ideas.<br>
              Paragraph development also involves expanding a main idea by adding relevant explanations, examples, and supporting details.
            </p>

            <h3 class="section-title">1. What Is Sentence Combining?</h3>
            <p class="text-body">Sentence combining is the process of joining two or more related sentences to create a clear and meaningful sentence. It helps writers express connected ideas without repeating unnecessary words.</p>
            <div class="aesthetic-box">
              <strong>Separate:</strong> Ana likes reading. Ana visits the library every week.<br>
              ✔ <strong>Combined:</strong> "Ana likes reading, so she visits the library every week."
            </div>

            <h3 class="section-title">2. Combining Sentences Using Coordinating Conjunctions</h3>
            <p class="text-body">Coordinating conjunctions connect words, phrases, or independent clauses of equal grammatical importance. Remember them through <strong>FANBOYS</strong>:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>F</strong>or – introduces a reason.</li>
              <li><strong>A</strong>nd – adds information.</li>
              <li><strong>N</strong>or – connects negative ideas.</li>
              <li><strong>B</strong>ut – shows contrast.</li>
              <li><strong>O</strong>r – presents a choice.</li>
              <li><strong>Y</strong>et – shows contrast or an unexpected result.</li>
              <li><strong>S</strong>o – shows a result.</li>
            </ul>
            <div class="aesthetic-box">
              <strong>Example:</strong> "Mark was tired, but he finished his assignment."
            </div>

            <h3 class="section-title">3. Combining Sentences Using Subordinating Conjunctions</h3>
            <p class="text-body">Subordinating conjunctions connect a dependent clause to an independent clause, showing relationships like time, reason, condition, and contrast (e.g., <em>because, although, when, while, since, if, before, after</em>).</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> "The students stayed inside because it was raining."
            </div>

            <h3 class="section-title">4. Combining Sentences Using Relative Pronouns</h3>
            <p class="text-body">Relative pronouns (e.g., <em>who, whom, whose, which, that</em>) introduce clauses that provide additional information about a noun.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> "The girl who won the competition is my classmate."
            </div>

            <h3 class="section-title">5. Avoiding Repetition</h3>
            <p class="text-body">Sentence combining helps eliminate unnecessary repetition of subjects or ideas.</p>
            <div class="aesthetic-box">
              ✖ <strong>Repetitive:</strong> Carlo is a responsible student. Carlo completes his assignments. Carlo studies every night.<br>
              ✔ <strong>Combined:</strong> "Carlo is a responsible student who completes his assignments and studies every night."
            </div>

            <h3 class="section-title">6. What Is Paragraph Development & Ways to Develop It</h3>
            <p class="text-body">Paragraph development expands a main idea using details, examples, facts, or explanations.</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Giving Examples:</strong> Specific items or scenarios (e.g., apples, bananas, oranges).</li>
              <li><strong>Providing Facts:</strong> Information that can be checked or proven.</li>
              <li><strong>Giving Explanations:</strong> Explains how or why something happens.</li>
              <li><strong>Describing Details:</strong> Provides characteristics of the topic.</li>
            </ul>

            <h3 class="section-title">7. How to Develop a Clear Paragraph</h3>
            <p class="text-body">Choose one main idea ➡️ Write a clear topic sentence ➡️ Add related supporting details ➡️ Combine related sentences ➡️ Use transition words ➡️ Arrange logically ➡️ End with a concluding sentence.</p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Summary Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Using "And"</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"The students cleaned the room and arranged the chairs."</p>
                <small style="color: #64748B;">Combines two actions performed by the same subject.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Using "Although"</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Although the examination was difficult, Mia completed it."</p>
                <small style="color: #64748B;">Shows contrast using a subordinating conjunction.</small>
              </div>
              <div class="mini-pill-card" style="grid-column: 1 / -1;">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Developing a Paragraph</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Time management helps students become organized. It allows them to plan their schedules and complete tasks on time. It also helps them identify their most important responsibilities. Because of these benefits, students should develop good time management habits."</p>
                <small style="color: #64748B;">Topic sentence expanded with clear supporting details and concluding thought.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Coordinating conjunctions connect ideas of equal grammatical importance.</li>
              <li>FANBOYS stands for For, And, Nor, But, Or, Yet, and So.</li>
              <li>Subordinating conjunctions connect dependent clauses to independent clauses.</li>
              <li>Relative pronouns introduce clauses that provide information about nouns.</li>
              <li>Examples, facts, explanations, and descriptions can develop a paragraph effectively.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=19" class="btn-primary">Proceed to Lesson 19 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  20: {
    title: "READEFINE - Lesson 20: Summarizing and Paraphrasing",
    subtitle: "Level 2 • Lesson 20",
    heading: "Summarizing and Paraphrasing",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Differentiate between summarizing and paraphrasing.</li>
              <li>Identify the characteristics of a good summary.</li>
              <li>Apply techniques for effective paraphrasing.</li>
              <li>Avoid plagiarism by properly processing and acknowledging source ideas.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              A summary focuses on the central message and removes unnecessary details, repeated information, and minor examples.<br>
              Paraphrasing is expressing information from a text using different words and sentence structures while keeping its original meaning.
            </p>

            <h3 class="section-title">1. Characteristics of a Good Summary</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Shorter:</strong> Concise and brief compared to the original text.</li>
              <li><strong>Accurate:</strong> Preserves the authentic original meaning.</li>
              <li><strong>Relevant:</strong> Focuses only on the most crucial ideas.</li>
              <li><strong>Clear & Objective:</strong> Easy to understand without personal bias.</li>
            </ul>
            <div class="aesthetic-box">
              <strong>Original:</strong> "Exercise helps improve physical fitness. It strengthens muscles, supports heart health, and increases endurance."<br>
              ✔ <strong>Good Summary:</strong> "Exercise provides several benefits for physical health."
            </div>

            <h3 class="section-title">2. Steps in Summarizing</h3>
            <p class="text-body">Read carefully ➡️ Identify main idea ➡️ Extract key supporting details ➡️ Remove fluff ➡️ Write concise version ➡️ Verify accuracy.</p>
            <div class="aesthetic-box">
              <strong>Original:</strong> "Trees are important to the environment. They provide oxygen, give shelter to animals, and help reduce the amount of carbon dioxide in the atmosphere."<br>
              ✔ <strong>Summary:</strong> "Trees help the environment by providing oxygen, supporting wildlife, and absorbing carbon dioxide."
            </div>

            <h3 class="section-title">3. Paraphrasing & Its Techniques</h3>
            <p class="text-body">Unlike summarizing, paraphrasing keeps most detailed information while changing wording and sentence structure.</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Using Synonyms:</strong> Replace words with contextually correct equivalents (e.g., "happy" ➡️ "joyful").</li>
              <li><strong>Changing Sentence Structure:</strong> Rearrange active/passive voice or sentence order.</li>
              <li><strong>Changing Word Forms:</strong> Transition words between parts of speech (e.g., "made a decision" ➡️ "decided").</li>
              <li><strong>Combining/Separating Ideas:</strong> Restructure long or short sentences cleanly.</li>
            </ul>

            <h3 class="section-title">4. Summarizing vs. Paraphrasing</h3>
            <div class="aesthetic-box">
              <strong>Summarizing:</strong> Condenses overall central message into a much shorter form.<br>
              <strong>Paraphrasing:</strong> Restates a specific passage in full detail using fresh words.
            </div>

            <h3 class="section-title">5. Avoiding Plagiarism</h3>
            <p class="text-body">Plagiarism is presenting another person's words or ideas as one's own. Paraphrasing does not replace the requirement to cite original sources when credit is required.</p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Summary Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Summarizing</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Online learning allows students to attend lessons using electronic devices..."</p>
                <small style="color: #64748B;">Summary: "Online learning allows students to study and access educational resources through electronic devices."</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Paraphrasing</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Time management helps students complete their tasks efficiently."</p>
                <small style="color: #64748B;">Paraphrase: "Students can finish their responsibilities more effectively when they manage their time properly."</small>
              </div>
              <div class="mini-pill-card" style="grid-column: 1 / -1;">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Comparison</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Healthy eating supports body development, gives energy, and maintains wellness."</p>
                <small style="color: #64748B;">
                  • <strong>Summary:</strong> Healthy eating supports growth and overall health.<br>
                  • <strong>Paraphrase:</strong> Eating nutritious food helps the body develop, provides energy, and supports a person's general well-being.
                </small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Summarizing presents the most important ideas in a shorter form.</li>
              <li>Paraphrasing restates information using different words and structures.</li>
              <li>Synonyms, sentence restructuring, and word-form changes aid paraphrasing.</li>
              <li>Plagiarism is using others' ideas without proper attribution.</li>
              <li>Original sources must be acknowledged whenever citations are required.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=20" class="btn-primary">Proceed to Lesson 20 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  21: {
    title: "READEFINE - Lesson 21: Fact and Opinion",
    subtitle: "Level 3 • Lesson 21",
    heading: "Fact and Opinion",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Differentiate between a fact and an opinion.</li>
              <li>Identify signal words commonly used in opinion statements.</li>
              <li>Evaluate statements to determine whether they can be verified with evidence.</li>
              <li>Understand the importance of distinguishing facts from opinions when reading.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            
            <h3 class="section-title">1. What Is a Fact?</h3>
            <p class="text-body">A fact is a statement that can be proven true or verified using evidence, observation, research, or reliable records.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> "The Philippines is an archipelago."<br>
              <small style="color: #64748B;">Explanation: This statement is a fact because it can be verified through geographical information.</small>
            </div>

            <h3 class="section-title">2. What Is an Opinion?</h3>
            <p class="text-body">An opinion is a personal belief, feeling, judgment, or preference that may differ from one person to another.</p>
            <div class="aesthetic-box">
              <strong>Example:</strong> "The Philippines is the most beautiful country in the world."<br>
              <small style="color: #64748B;">Explanation: This is an opinion because beauty is based on personal preference.</small>
            </div>

            <h3 class="section-title">3. Key Differences Between Fact and Opinion</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>Facts can be verified using evidence; opinions express personal beliefs or judgments.</li>
              <li>Facts remain constant and supported by evidence; opinions vary based on experiences and preferences.</li>
            </ul>

            <h3 class="section-title">4. Signal Words of Opinion</h3>
            <p class="text-body">Certain words and expressions indicate that a statement expresses an opinion:</p>
            <p class="text-body" style="font-weight: 600; color: var(--deep-blue);">
              • I believe • I think • In my opinion • Best • Worst • Beautiful • Should • Probably
            </p>

            <h3 class="section-title">5. Importance of Identifying Facts and Opinions</h3>
            <p class="text-body">Distinguishing facts from opinions helps readers evaluate information carefully, avoid believing unsupported claims, make informed decisions, understand different perspectives, and recognize personal judgments in communication.</p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Summary Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1 (Fact)</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Water freezes at 0°C under standard atmospheric pressure."</p>
                <small style="color: #64748B;">Answer: Fact (Verified through scientific evidence)</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2 (Opinion)</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Mathematics is the most difficult subject."</p>
                <small style="color: #64748B;">Answer: Opinion (Based on individual learner experience)</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3 (Fact)</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Many students use smartphones for communication."</p>
                <small style="color: #64748B;">Answer: Fact (Supported by reliable data or observation)</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4 (Opinion)</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Students should have shorter school days."</p>
                <small style="color: #64748B;">Answer: Opinion (Expresses a recommendation or judgment)</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Facts can be verified through evidence.</li>
              <li>Opinions express personal beliefs, feelings, or judgments.</li>
              <li>Facts and opinions are fundamental types of statements.</li>
              <li>Opinion signal words help identify personal viewpoints.</li>
              <li>Identifying facts and opinions helps readers evaluate information critically.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=21" class="btn-primary">Proceed to Lesson 21 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  22: {
    title: "READEFINE - Lesson 22: Identifying Bias and Point of View",
    subtitle: "Level 3 • Lesson 22",
    heading: "Identifying Bias and Point of View",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define bias and point of view.</li>
              <li>Identify different types of bias in written information.</li>
              <li>Recognize the author's point of view.</li>
              <li>Explain how bias affects the presentation of information.</li>
              <li>Evaluate texts by considering the author's perspective and possible bias.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Writers communicate information based on their knowledge, experiences, beliefs, and perspectives. Sometimes, the way they present information may favor one side or show an unfair preference. This is known as bias.<br>
              Understanding bias and point of view helps readers examine how information is presented and recognize that different writers may describe the same event in different ways.
            </p>

            <h3 class="section-title">1. What Is Bias?</h3>
            <p class="text-body">Bias is a preference, prejudice, or tendency toward a particular person, group, idea, or side that may influence how information is presented in a one-sided manner.</p>

            <h3 class="section-title">2. Types of Bias</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Positive Bias:</strong> Focuses mainly on favorable qualities or achievements (e.g., mentioning only advantages in a review).</li>
              <li><strong>Negative Bias:</strong> Focuses mainly on unfavorable qualities or weaknesses while ignoring achievements.</li>
              <li><strong>Selection Bias:</strong> Occurs when examples or survey samples are chosen in a way that does not represent the entire situation.</li>
              <li><strong>Omission Bias:</strong> Happens when crucial information is left out, resulting in an incomplete presentation.</li>
            </ul>

            <h3 class="section-title">3. Point of View</h3>
            <p class="text-body">Point of view refers to the position or perspective from which a writer presents information.</p>
            <div class="aesthetic-box">
              • <strong>First Person:</strong> Uses <em>I, me, my, we, our</em>.<br>
              • <strong>Second Person:</strong> Uses <em>you, your</em>.<br>
              • <strong>Third Person:</strong> Uses <em>he, she, it, they, their</em>.
            </div>

            <h3 class="section-title">4. Difference Between Bias and Point of View</h3>
            <p class="text-body">Bias refers to a preference or tendency that may affect fairness. Point of view refers to the perspective from which information is told. A writer can have a point of view without showing unfair bias.</p>

            <h3 class="section-title">5. Importance of Recognizing Bias and POV</h3>
            <p class="text-body">Helps readers understand perspectives, identify one-sided claims, consider varied opinions, avoid blind acceptance of texts, and develop critical thinking skills.</p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Positive Bias</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"School A is the only school that provides excellent education."</p>
                <small style="color: #64748B;">Praises one school without evidence or considering others.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Negative Bias</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"The new school policy caused problems for every student."</p>
                <small style="color: #64748B;">Focuses solely on negative results with a broad unverified claim.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: 1st Person POV</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"I believe that reading every day improves my vocabulary."</p>
                <small style="color: #64748B;">Uses the pronoun "I".</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: 3rd Person POV</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"She explained the importance of responsible internet use."</p>
                <small style="color: #64748B;">Uses the pronoun "she".</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Bias is a preference or tendency that can affect fairness.</li>
              <li>Positive, negative, selection, and omission bias influence presentation.</li>
              <li>Point of view refers to the narrative perspective used by a writer.</li>
              <li>A point of view does not automatically mean a text is biased.</li>
              <li>Recognizing bias helps readers evaluate information fairly.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=22" class="btn-primary">Proceed to Lesson 22 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  23: {
    title: "READEFINE - Lesson 23: Evaluating Sources of Information",
    subtitle: "Level 3 • Lesson 23",
    heading: "Evaluating Sources of Information",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Identify different sources of information (Newspapers, Websites, Journals, Interviews, Government publications).</li>
              <li>Differentiate between primary and secondary sources.</li>
              <li>Explain the characteristics of reliable information sources.</li>
              <li>Evaluate online information for accuracy, authority, currency, relevance, and objectivity.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            
            <h3 class="section-title">1. Common Sources of Information</h3>
            <p class="text-body">Information can be found in various platforms such as newspapers, websites, academic journals, interviews, and government publications.</p>

            <h3 class="section-title">2. Primary Sources</h3>
            <p class="text-body">Primary sources provide original or firsthand information about an event, experience, or subject.</p>
            <div class="aesthetic-box">
              <strong>Examples:</strong> Diaries, letters, interviews, photographs, original documents, official records.<br>
              <em>Example:</em> A diary written by a person who experienced a historical event provides firsthand information from someone directly involved.
            </div>

            <h3 class="section-title">3. Secondary Sources</h3>
            <p class="text-body">Secondary sources discuss, explain, interpret, or analyze information from primary sources or other materials.</p>
            <div class="aesthetic-box">
              <strong>Examples:</strong> Textbooks, biographies, research reviews, historical analyses, documentaries.<br>
              <em>Example:</em> A history textbook explaining a revolution interprets and organizes information from primary records.
            </div>

            <h3 class="section-title">4. Characteristics of Reliable Sources</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Accuracy:</strong> Information is correct and supported by verifiable evidence.</li>
              <li><strong>Authority:</strong> The author or organization has relevant expertise or credentials.</li>
              <li><strong>Currency:</strong> Information is updated appropriately for current relevance.</li>
              <li><strong>Relevance:</strong> Information directly relates to the topic being studied.</li>
              <li><strong>Objectivity:</strong> Information is presented fairly and free from unnecessary bias.</li>
            </ul>

            <h3 class="section-title">5. Steps in Evaluating Online Information</h3>
            <ol style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>Check the author's name and qualifications.</li>
              <li>Examine the publishing website or organization.</li>
              <li>Look for supporting evidence and references.</li>
              <li>Check the publication or update date.</li>
              <li>Cross-check information with other reliable sources.</li>
            </ol>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Summary Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Primary Source</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"A signed letter written by a historical leader."</p>
                <small style="color: #64748B;">Answer: Primary Source (Original document from the author)</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Secondary Source</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"A textbook discussing the life of a historical leader."</p>
                <small style="color: #64748B;">Answer: Secondary Source (Explains and interprets primary data)</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Potentially Reliable</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"A government website publishes updated population statistics."</p>
                <small style="color: #64748B;">Official government data, but dates and details should still be checked.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Questionable Source</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"An anonymous social media post makes a health-related claim without evidence."</p>
                <small style="color: #64748B;">Lacks verifiable authorship and supporting proof.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Sources of information provide facts, ideas, and evidence.</li>
              <li>Primary sources contain original or firsthand information.</li>
              <li>Secondary sources interpret or analyze existing information.</li>
              <li>Reliable sources demonstrate accuracy, authority, currency, relevance, and objectivity.</li>
              <li>Information should always be checked and verified before being used or shared.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=23" class="btn-primary">Proceed to Lesson 23 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  24: {
    title: "READEFINE - Lesson 24: Understanding Tone and Author's Purpose",
    subtitle: "Level 3 • Lesson 24",
    heading: "Understanding Tone and Author's Purpose",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define tone and author's purpose.</li>
              <li>Identify different types of tone in written texts.</li>
              <li>Recognize the main purposes of writing.</li>
              <li>Examine word choice to understand a writer's tone.</li>
              <li>Explain how tone and purpose affect a reader's understanding.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Every written text communicates a message in a particular way. Some writers aim to inform readers, while others want to entertain, persuade, or explain something. The words and expressions they use also create a certain feeling or attitude.<br><br>
              Understanding tone and author's purpose allows readers to recognize not only what a text says but also how and why the writer communicates the message.
            </p>

            <h3 class="section-title">1. Tone</h3>
            <p class="text-body">Tone refers to the writer's attitude toward the subject, audience, or situation as expressed through word choice and writing style.</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Formal:</strong> Uses professional and respectful language.</li>
              <li><strong>Informal:</strong> Uses casual and conversational language.</li>
              <li><strong>Serious:</strong> Communicates an important or thoughtful message.</li>
              <li><strong>Humorous:</strong> Creates amusement or laughter.</li>
              <li><strong>Critical:</strong> Expresses judgment or points out weaknesses.</li>
              <li><strong>Optimistic:</strong> Shows hope or confidence.</li>
              <li><strong>Pessimistic:</strong> Shows doubt or lack of hope.</li>
              <li><strong>Sympathetic:</strong> Shows understanding and concern.</li>
            </ul>

            <h3 class="section-title">2. Author's Purpose</h3>
            <p class="text-body">Author's purpose refers to the main reason a writer creates a text.</p>
            <div class="aesthetic-box">
              • <strong>To Inform:</strong> The writer provides facts, explanations, or knowledge.<br>
              • <strong>To Persuade:</strong> The writer attempts to influence beliefs, opinions, or actions.<br>
              • <strong>To Entertain:</strong> The writer aims to provide enjoyment through stories or humor.<br>
              • <strong>To Explain:</strong> The writer describes how or why something happens or works.
            </div>

            <h3 class="section-title">3. Tone vs. Author's Purpose</h3>
            <p class="text-body">
              <strong>Tone</strong> refers to the writer's attitude and answers: <em>"How does the writer sound?"</em><br>
              <strong>Author's Purpose</strong> refers to the writer's reason for writing and answers: <em>"Why did the writer write this?"</em>
            </p>

            <h3 class="section-title">4. Identifying Tone</h3>
            <p class="text-body">Readers can identify tone by examining word choice, sentence structure, expressions, descriptions, and the overall message.</p>

            <h3 class="section-title">5. Importance of Understanding Tone and Purpose</h3>
            <p class="text-body">It helps readers recognize intention, understand the emotional message, interpret information accurately, identify persuasive language, and respond appropriately.</p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Summary Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Tone</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Please submit your completed requirements before the scheduled deadline."</p>
                <small style="color: #64748B;">Answer: Formal tone (Uses professional and respectful language).</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Tone</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Wow! That was the funniest performance I have ever watched!"</p>
                <small style="color: #64748B;">Answer: Humorous or excited tone (Shows amusement).</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Purpose</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Regular exercise supports physical health and overall well-being."</p>
                <small style="color: #64748B;">Answer: To inform (Provides facts about exercise).</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Purpose</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Join the reading program today and discover the benefits of reading!"</p>
                <small style="color: #64748B;">Answer: To persuade (Encourages readers to act).</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Tone is the writer's attitude toward the subject or audience.</li>
              <li>Author's purpose is the reason a text is written.</li>
              <li>Tone can be formal, informal, serious, humorous, and others.</li>
              <li>Common purposes include informing, persuading, entertaining, and explaining.</li>
              <li>Word choice and writing style help readers identify tone and purpose.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=24" class="btn-primary">Proceed to Lesson 24 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  25: {
    title: "READEFINE - Lesson 25: Drawing Conclusions",
    subtitle: "Level 3 • Lesson 25",
    heading: "Drawing Conclusions",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define what a conclusion is in reading comprehension.</li>
              <li>Explain the process of drawing conclusions using facts, details, and reasoning.</li>
              <li>Differentiate between a logical conclusion and an unsupported guess.</li>
              <li>Formulate well-supported conclusions based on given text evidence.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              When reading a report showing that many students improved their reading scores after regular practice, a reader may conclude that consistent reading practice can support reading development.
            </p>

            <h3 class="section-title">1. Drawing Conclusions</h3>
            <p class="text-body">
              Drawing conclusions is the process of using facts, details, observations, and reasoning to arrive at a logical understanding.<br>
              It involves examining available information, identifying important details, connecting related ideas, applying logical reasoning, and forming a conclusion supported by evidence.
            </p>

            <h3 class="section-title">2. Evidence & Reasoning</h3>
            <div class="aesthetic-box">
              • <strong>Evidence:</strong> Facts, details, examples, or observations that support a conclusion.<br>
              • <strong>Reasoning:</strong> The process of using logic to connect evidence to a conclusion.
            </div>

            <h3 class="section-title">3. Conclusion vs. Guess</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>A <strong>conclusion</strong> is grounded in concrete details and logical reasoning, allowing it to be explained through text evidence.</li>
              <li>A <strong>guess</strong> is made without sufficient supporting information and relies primarily on random assumptions.</li>
            </ul>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Weather Observation</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"The ground is wet, people carry umbrellas, and dark clouds cover the sky."</p>
                <small style="color: #64748B;">Conclusion: It may have rained recently or be raining. (Based on multiple observations)</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Reading Fluency</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Maria practices reading aloud every evening. Her reading becomes smoother over time."</p>
                <small style="color: #64748B;">Conclusion: Regular practice may improve reading fluency.</small>
              </div>
              <div class="mini-pill-card" style="grid-column: 1 / -1;">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Library Visits</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"A report shows that a school library increased its book collection and recorded more student visits."</p>
                <small style="color: #64748B;">Conclusion: The expanded book collection may have encouraged more students to visit the library.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>A conclusion is a judgment reached after examining information.</li>
              <li>Drawing conclusions requires evidence and logical reasoning.</li>
              <li>Important details help support a conclusion.</li>
              <li>Conclusions are different from unsupported guesses.</li>
              <li>Strong conclusions should be reasonable and supported by available information.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=25" class="btn-primary">Proceed to Lesson 25 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  26: {
    title: "READEFINE - Lesson 26: Comparing and Contrasting Texts",
    subtitle: "Lesson 26",
    heading: "Comparing and Contrasting Texts",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of this lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define comparing and contrasting.</li>
              <li>Identify similarities and differences between texts.</li>
              <li>Recognize signal words used in comparison and contrast.</li>
              <li>Organize information using appropriate comparison methods.</li>
              <li>Explain the importance of comparing and contrasting texts.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Different texts may discuss the same subject but present different information, ideas, or perspectives. Comparing and contrasting allows readers to examine how two or more texts are alike and how they differ.<br><br>
              This skill is useful in reading, research, decision-making, and evaluating different viewpoints. It helps readers understand information more completely by examining similarities and differences.
            </p>

            <h3 class="section-title">1. Comparing vs. Contrasting</h3>
            <div class="aesthetic-box">
              • <strong>Comparing:</strong> Identifying the similarities between two or more subjects, ideas, people, or texts.<br>
              <em>Example: Both printed books and electronic books provide written information.</em><br><br>
              • <strong>Contrasting:</strong> Identifying the differences between two or more subjects, ideas, people, or texts.<br>
              <em>Example: Printed books use physical pages, while electronic books are read using digital devices.</em>
            </div>

            <h3 class="section-title">2. Signal Words</h3>
            <p class="text-body">Writers use specific signal words to show relationships between ideas:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Comparison Signal Words:</strong> <em>Similarly, Likewise, Both, Also, In the same way, Alike</em></li>
              <li><strong>Contrast Signal Words:</strong> <em>However, Although, Unlike, On the other hand, In contrast, Whereas</em></li>
            </ul>

            <h3 class="section-title">3. Methods of Organizing Comparison and Contrast</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Point-by-Point Method:</strong> Discusses one feature at a time and compares the subjects using that same feature.</li>
              <li><strong>Block Method:</strong> Discusses all the important details of one subject first, followed by all the important details of the other subject.</li>
            </ul>

            <h3 class="section-title">4. Importance of Comparing and Contrasting</h3>
            <p class="text-body">Helps readers identify similarities and differences, understand varied perspectives, organize complex information, evaluate choices, and develop critical thinking.</p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Comparison</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Both online and face-to-face classes allow students to learn."</p>
                <small style="color: #64748B;">Identifies a similarity between two learning methods.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Contrast</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Online classes use digital platforms, while face-to-face classes take place in physical classrooms."</p>
                <small style="color: #64748B;">Identifies a distinction between the two methods.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Point-by-Point</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Comparing cost, accessibility, and convenience of physical and digital books feature by feature.</p>
                <small style="color: #64748B;">Compares subjects using identical attributes consecutively.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Block Method</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Discussing all features of printed books entirely before moving on to electronic books.</p>
                <small style="color: #64748B;">Each subject is fully explained separately.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Comparing identifies similarities between subjects or texts.</li>
              <li>Contrasting identifies differences between subjects or texts.</li>
              <li>Signal words help readers recognize comparison and contrast.</li>
              <li>Point-by-point and block methods organize comparisons differently.</li>
              <li>Comparing and contrasting improves understanding and decision-making.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=26" class="btn-primary">Proceed to Lesson 26 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  27: {
    title: "READEFINE - Lesson 27: Critical Reading and Analysis",
    subtitle: "Lesson 27",
    heading: "Critical Reading and Analysis",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of the lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define critical reading and critical analysis.</li>
              <li>Distinguish between claims and evidence in a text.</li>
              <li>Recognize underlying assumptions in arguments.</li>
              <li>Evaluate the validity and reliability of arguments.</li>
              <li>Explain the importance of critical reading in everyday life and academics.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Critical reading requires looking beyond the literal meaning of words to consider the quality, validity, and logic of a message.
            </p>

            <h3 class="section-title">1. Critical Analysis</h3>
            <p class="text-body">
              Critical analysis is the process of examining different parts of a text to understand how ideas are developed and supported. It includes examining main ideas, supporting evidence, arguments, word choice, purpose, and possible bias.
            </p>

            <h3 class="section-title">2. Claims and Evidence</h3>
            <div class="aesthetic-box">
              • <strong>Claim:</strong> A statement or position that a writer wants readers to accept.<br>
              <em>Example Claim: Reading regularly improves vocabulary.</em><br><br>
              • <strong>Evidence:</strong> Facts, examples, research findings, or information used to support a claim.<br>
              <em>Example Evidence: A study showing that students who read frequently learn more unfamiliar words.</em>
            </div>

            <h3 class="section-title">3. Assumptions</h3>
            <p class="text-body">
              An assumption is an idea accepted as true without sufficient proof or examination (e.g., assuming every student using a smartphone spends all their time playing games).
            </p>

            <h3 class="section-title">4. Evaluating Arguments</h3>
            <p class="text-body">When evaluating arguments, readers should ask:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li>Is the claim clear?</li>
              <li>Is there enough evidence?</li>
              <li>Are the sources reliable?</li>
              <li>Does the reasoning make sense?</li>
              <li>Are there possible biases or missing details?</li>
            </ul>

            <h3 class="section-title">5. Importance of Critical Reading</h3>
            <p class="text-body">Helps readers understand complex messages, identify reliable info, recognize weak arguments, avoid misinformation, and make informed decisions.</p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Claim</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Students should have access to a school library because reading materials support learning."</p>
                <small style="color: #64748B;">Presents a writer's position.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Evidence</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"According to the school's records, library visits increased during the reading program."</p>
                <small style="color: #64748B;">Provides data to support an argument.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Weak Assumption</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Everyone who disagrees with the policy does not care about education."</p>
                <small style="color: #64748B;">Unfair generalization and unsupported assumption.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Critical Reading</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Checking author qualifications and examining evidence before accepting claims.</p>
                <small style="color: #64748B;">Active evaluation of information.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Critical reading involves questioning and evaluating written information.</li>
              <li>Critical analysis examines how ideas are presented and supported.</li>
              <li>Claims express a writer's position, while evidence supports the claims.</li>
              <li>Assumptions are ideas accepted without sufficient proof.</li>
              <li>Evaluating arguments helps readers recognize reliable and misleading information.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=27" class="btn-primary">Proceed to Lesson 27 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  28: {
    title: "READEFINE - Lesson 28: Interpreting Graphs, Tables, and Visual Information",
    subtitle: "Lesson 28",
    heading: "Interpreting Graphs, Tables, and Visual Information",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); display: flex; flex-direction: column; justify-content: space-between; }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
    
    /* Visual Illustration Box Styling */
    .visual-demo-box { background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 16px; padding: 16px; margin: 12px 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; box-sizing: border-box; }
    .styled-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left; }
    .styled-table th { background-color: #174B85; color: #ffffff; padding: 8px 12px; border-radius: 4px 4px 0 0; }
    .styled-table td { padding: 8px 12px; border-bottom: 1px solid #E2E8F0; color: #334155; }
    .styled-table tr:nth-child(even) { background-color: #F1F5F9; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of the lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define visual information and data interpretation.</li>
              <li>Identify common types of graphs and tables.</li>
              <li>Read and interpret information presented visually.</li>
              <li>Recognize trends, comparisons, and patterns in data.</li>
              <li>Explain the importance of accurate data interpretation.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Information is not always presented through paragraphs and sentences. Writers often use graphs, tables, and charts to organize data so it is easier to digest and compare quickly.
            </p>

            <h3 class="section-title">1. Types of Visual Information</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Tables:</strong> Organize exact values and categories into structured rows and columns.</li>
              <li><strong>Bar Graphs:</strong> Use rectangular bars to compare quantities across separate categories.</li>
              <li><strong>Line Graphs:</strong> Use connected points to show continuous patterns or changes over time (trends).</li>
              <li><strong>Pie Charts:</strong> Circular graphs divided into sectors to display proportions or percentages of a whole.</li>
            </ul>

            <h3 class="section-title">2. Steps in Interpreting Visual Data</h3>
            <div class="aesthetic-box">
              1. Read the title to understand the main topic.<br>
              2. Examine labels and categories.<br>
              3. Check units and numerical values.<br>
              4. Identify highest/lowest points.<br>
              5. Look for patterns, trends, or comparisons before drawing conclusions.
            </div>

            <h3 class="section-title">3. Importance of Accurate Interpretation</h3>
            <p class="text-body">Accurate data interpretation helps readers understand information clearly, compare values objectively, spot trends, avoid miscalculations, and make evidence-based decisions.</p>
          </div>

          <!-- VISUAL ILLUSTRATIONS & EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📊 Visual Illustrations & Examples</div>
            <p class="text-body" style="font-size: 1rem; color: #64748B;">Surfacted below are actual visual representations to help you clearly identify and interpret each format:</p>
            
            <div class="grid-two-col">
              
              <!-- 1. TABLE ILLUSTRATION -->
              <div class="mini-pill-card">
                <div>
                  <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">1. Table (Structured Data)</h4>
                  <div class="visual-demo-box">
                    <table class="styled-table">
                      <thead>
                        <tr>
                          <th>Subject</th>
                          <th>Enrolled Students</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>English</td>
                          <td><strong>30</strong></td>
                        </tr>
                        <tr>
                          <td>Mathematics</td>
                          <td><strong>25</strong></td>
                        </tr>
                        <tr>
                          <td>Science</td>
                          <td><strong>20</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <small style="color: #64748B; margin-top: 10px;"><strong>Interpretation:</strong> Displays exact numbers clearly in rows and columns.</small>
              </div>

              <!-- 2. BAR GRAPH ILLUSTRATION -->
              <div class="mini-pill-card">
                <div>
                  <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">2. Bar Graph (Comparing Categories)</h4>
                  <div class="visual-demo-box">
                    <svg width="100%" height="130" viewBox="0 0 240 130">
                      <!-- Grid lines -->
                      <line x1="30" y1="20" x2="220" y2="20" stroke="#E2E8F0" stroke-dasharray="2"/>
                      <line x1="30" y1="60" x2="220" y2="60" stroke="#E2E8F0" stroke-dasharray="2"/>
                      <line x1="30" y1="100" x2="220" y2="100" stroke="#475569" stroke-width="1.5"/>
                      
                      <!-- Bars -->
                      <!-- English (30) -->
                      <rect x="45" y="25" width="35" height="75" rx="4" fill="#174B85"/>
                      <text x="62" y="115" font-size="10" text-anchor="middle" fill="#334155" font-weight="bold">ENG</text>
                      <text x="62" y="20" font-size="10" text-anchor="middle" fill="#174B85" font-weight="bold">30</text>
                      
                      <!-- Math (25) -->
                      <rect x="105" y="38" width="35" height="62" rx="4" fill="#4F83CC"/>
                      <text x="122" y="115" font-size="10" text-anchor="middle" fill="#334155" font-weight="bold">MATH</text>
                      <text x="122" y="33" font-size="10" text-anchor="middle" fill="#4F83CC" font-weight="bold">25</text>
                      
                      <!-- Science (20) -->
                      <rect x="165" y="50" width="35" height="50" rx="4" fill="#8DB8EE"/>
                      <text x="182" y="115" font-size="10" text-anchor="middle" fill="#334155" font-weight="bold">SCI</text>
                      <text x="182" y="45" font-size="10" text-anchor="middle" fill="#8DB8EE" font-weight="bold">20</text>
                    </svg>
                  </div>
                </div>
                <small style="color: #64748B; margin-top: 10px;"><strong>Interpretation:</strong> English has the tallest bar, showing the highest enrollment.</small>
              </div>

              <!-- 3. LINE GRAPH ILLUSTRATION -->
              <div class="mini-pill-card">
                <div>
                  <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">3. Line Graph (Trends Over Time)</h4>
                  <div class="visual-demo-box">
                    <svg width="100%" height="130" viewBox="0 0 240 130">
                      <!-- Grid lines -->
                      <line x1="30" y1="100" x2="220" y2="100" stroke="#475569" stroke-width="1.5"/>
                      <line x1="30" y1="20" x2="30" y2="100" stroke="#475569" stroke-width="1.5"/>
                      
                      <!-- Trend Line -->
                      <polyline points="50,85 125,50 200,25" fill="none" stroke="#174B85" stroke-width="3" stroke-linecap="round"/>
                      
                      <!-- Points -->
                      <circle cx="50" cy="85" r="5" fill="#4F83CC"/>
                      <circle cx="125" cy="50" r="5" fill="#4F83CC"/>
                      <circle cx="200" cy="25" r="5" fill="#4F83CC"/>
                      
                      <!-- Labels -->
                      <text x="50" y="115" font-size="10" text-anchor="middle" fill="#334155">Jan</text>
                      <text x="125" y="115" font-size="10" text-anchor="middle" fill="#334155">Feb</text>
                      <text x="200" y="115" font-size="10" text-anchor="middle" fill="#334155">Mar</text>
                    </svg>
                  </div>
                </div>
                <small style="color: #64748B; margin-top: 10px;"><strong>Interpretation:</strong> The line moves upward, indicating an increasing trend.</small>
              </div>

              <!-- 4. PIE CHART ILLUSTRATION -->
              <div class="mini-pill-card">
                <div>
                  <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">4. Pie Chart (Proportions of a Whole)</h4>
                  <div class="visual-demo-box">
                    <svg width="100%" height="130" viewBox="0 0 240 130">
                      <!-- Circle split 50% left / 50% right -->
                      <path d="M120,20 A45,45 0 0,1 120,110 Z" fill="#174B85" />
                      <path d="M120,110 A45,45 0 0,1 120,20 Z" fill="#8DB8EE" />
                      
                      <!-- Legend -->
                      <rect x="175" y="45" width="10" height="10" fill="#174B85" rx="2"/>
                      <text x="190" y="54" font-size="9" fill="#334155" font-weight="bold">50% Printed</text>
                      
                      <rect x="175" y="65" width="10" height="10" fill="#8DB8EE" rx="2"/>
                      <text x="190" y="74" font-size="9" fill="#334155" font-weight="bold">50% Digital</text>
                    </svg>
                  </div>
                </div>
                <small style="color: #64748B; margin-top: 10px;"><strong>Interpretation:</strong> Exactly half (50%) of students prefer printed books.</small>
              </div>

            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Visual information presents data through graphs, tables, and charts.</li>
              <li>Tables organize data into rows and columns for exact numerical lookup.</li>
              <li>Bar graphs compare categories, line graphs show temporal trends, and pie charts show proportions of a whole.</li>
              <li>Titles, axis labels, and units are essential for correct data reading.</li>
              <li>Accurate interpretation supports better, evidence-based decisions.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=28" class="btn-primary">Proceed to Lesson 28 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  29: {
    title: "READEFINE - Lesson 29: Understanding Informational and Argumentative Texts",
    subtitle: "Lesson 29",
    heading: "Understanding Informational and Argumentative Texts",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of the lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define informational and argumentative texts.</li>
              <li>Identify the characteristics and parts of both text types.</li>
              <li>Distinguish between informational and argumentative writing.</li>
              <li>Evaluate claims, reasons, counterarguments, and rebuttals.</li>
              <li>Explain the importance of recognizing different text types in reading.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            
            <h3 class="section-title">1. Informational Text</h3>
            <p class="text-body">
              An informational text provides facts, definitions, and logical explanations about a topic to inform or explain rather than persuade readers.
            </p>
            <div class="aesthetic-box">
              <strong>Characteristics:</strong> Factual data, clear explanations, logical organization, specific subject focus.<br>
              <strong>Examples:</strong> News reports, textbooks, encyclopedias, informational articles.
            </div>

            <h3 class="section-title">2. Argumentative Text</h3>
            <p class="text-body">
              An argumentative text presents a central claim or position and supports it using reasons and solid evidence to convince readers that the stance is reasonable.
            </p>

            <h3 class="section-title">3. Key Parts of an Argumentative Text</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Claim:</strong> The main position or statement the writer wants readers to accept.</li>
              <li><strong>Reasons:</strong> Explanations showing why the writer supports the claim.</li>
              <li><strong>Evidence:</strong> Facts, statistics, examples, or research validating the reasons.</li>
              <li><strong>Counterargument:</strong> An opposing viewpoint that challenges the main claim.</li>
              <li><strong>Rebuttal:</strong> A response explaining why the writer's position remains valid despite the counterargument.</li>
              <li><strong>Conclusion:</strong> The final section summarizing the argument and reinforcing the position.</li>
            </ul>

            <h3 class="section-title">4. Informational vs. Argumentative Texts</h3>
            <p class="text-body">
              • Informational texts aim to <strong>increase knowledge</strong> through facts.<br>
              • Argumentative texts aim to <strong>convince readers</strong> to accept a stance using reasons and evidence.
            </p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Summary Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Informational Text</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Plants need sunlight, water, and nutrients to grow."</p>
                <small style="color: #64748B;">Provides factual knowledge about plant development.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Argumentative Text</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Schools should establish more reading programs because they help students develop reading skills."</p>
                <small style="color: #64748B;">Presents a position supported by a clear reason.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Counterargument</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Some people believe that online learning is more convenient. However, others argue that face-to-face interaction is essential."</p>
                <small style="color: #64748B;">Presents opposing perspectives on an issue.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Argumentative Text</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Although printed books are useful, digital books should also be available because they offer convenient access."</p>
                <small style="color: #64748B;">Defends a recommendation using logical reasoning.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Informational texts provide facts and explanations about a topic.</li>
              <li>Argumentative texts present a claim supported by reasons and evidence.</li>
              <li>Claims, reasons, and evidence are core building blocks of arguments.</li>
              <li>Counterarguments acknowledge opposing viewpoints, while rebuttals counter them.</li>
              <li>Recognizing text types helps readers evaluate the writer's primary purpose.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=29" class="btn-primary">Proceed to Lesson 29 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  30: {
    title: "READEFINE - Lesson 30: Building Evidence-Based Arguments",
    subtitle: "Lesson 30 • Final Lesson",
    heading: "Building Evidence-Based Arguments",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of the lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define evidence-based arguments.</li>
              <li>Identify the main components of a strong argument.</li>
              <li>Recognize reliable evidence that supports a claim.</li>
              <li>Organize reasons and evidence into a logical argument.</li>
              <li>Construct a clear argument supported by relevant information.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              People often express opinions about issues in school, at home, and in society. However, a strong argument requires more than stating a belief—it must be backed by relevant evidence and logical explanations.
            </p>

            <h3 class="section-title">1. What Is an Evidence-Based Argument?</h3>
            <p class="text-body">
              An evidence-based argument is a position or claim supported by relevant facts, examples, research, or reliable data. It uses logical reasoning to explain why a position should be accepted.
            </p>

            <h3 class="section-title">2. Essential Components</h3>
            <div class="aesthetic-box">
              • <strong>Claim:</strong> Main position or statement to support.<br>
              • <strong>Reason:</strong> Explanation of why the claim is reasonable.<br>
              • <strong>Evidence:</strong> Verifiable facts/data supporting the reason.<br>
              • <strong>Explanation:</strong> Discussion connecting evidence to the claim.<br>
              • <strong>Counterargument & Rebuttal:</strong> Addressing and responding to opposing viewpoints.
            </div>

            <h3 class="section-title">3. Choosing Reliable Evidence</h3>
            <p class="text-body">Reliable evidence must be relevant, accurate, verifiable, taken from trustworthy sources, clear, and sufficient to justify the argument.</p>

            <h3 class="section-title">4. Common Logical Weaknesses to Avoid</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Unsupported Claim:</strong> Stating a belief without evidence.</li>
              <li><strong>Irrelevant Evidence:</strong> Information unrelated to the claim.</li>
              <li><strong>Overgeneralization:</strong> Making a broad claim based on limited instances.</li>
              <li><strong>Personal Attack:</strong> Insulting a person instead of evaluating their argument.</li>
            </ul>

            <h3 class="section-title">5. Importance of Evidence-Based Arguments</h3>
            <p class="text-body">Helps communicate ideas clearly, justify opinions responsibly, evaluate different viewpoints objectively, avoid misleading information, and make informed choices.</p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Strong Argument</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Claim:</strong> Schools should encourage daily reading.<br><strong>Reason:</strong> Reading expands vocabulary.<br><strong>Evidence:</strong> Studies show regular readers score higher in comprehension.</p>
                <small style="color: #64748B;">Logical structure with verifiable evidence.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Overgeneralization</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Every student dislikes group activities."</p>
                <small style="color: #64748B;">Faulty reasoning that makes a broad statement without proof.</small>
              </div>
              <div class="mini-pill-card" style="grid-column: 1 / -1;">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Personal Attack (Ad Hominem)</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"A school program is ineffective because the person who created it is not intelligent."</p>
                <small style="color: #64748B;">Attacks the individual's character instead of evaluating the actual results of the program.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Evidence-based arguments use facts and reliable information to support claims.</li>
              <li>Claims, reasons, evidence, and explanations strengthen arguments.</li>
              <li>Relevant and accurate evidence makes an argument convincing.</li>
              <li>Counterarguments and rebuttals strengthen an argument by addressing opposing views.</li>
              <li>Logical and evidence-supported arguments foster responsible communication.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=30" class="btn-primary">Proceed to Lesson 30 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  31: {
    title: "READEFINE - Lesson 31: Advanced Vocabulary in Context",
    subtitle: "Level 4 • Lesson 31",
    heading: "Advanced Vocabulary in Context",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of the lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define advanced vocabulary, denotation, and connotation.</li>
              <li>Identify meanings of unfamiliar words through context clues.</li>
              <li>Distinguish between positive, negative, and neutral connotations.</li>
              <li>Recognize relationships among words (synonyms, antonyms, homonyms, word families).</li>
              <li>Apply advanced vocabulary in formal and academic communication.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Advanced vocabulary refers to words commonly used in academic, professional, or formal contexts. Utilizing precise words helps express ideas more clearly and effectively.
            </p>

            <h3 class="section-title">1. Formal Vocabulary Pairs</h3>
            <div class="aesthetic-box">
              • <strong>Help</strong> → Assist<br>
              • <strong>Show</strong> → Demonstrate<br>
              • <strong>Begin</strong> → Commence<br>
              • <strong>Important</strong> → Significant<br>
              • <strong>Explain</strong> → Elaborate
            </div>

            <h3 class="section-title">2. Context-Based Word Meaning</h3>
            <p class="text-body">
              Context-based word meaning refers to understanding an unfamiliar word through surrounding words, sentences, or paragraphs.<br>
              <em>Example:</em> "The student was <strong>exhausted</strong> after completing several difficult activities, so she immediately rested." → The phrase "immediately rested" clarifies that <em>exhausted</em> means very tired.
            </p>

            <h3 class="section-title">3. Denotation vs. Connotation</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Denotation:</strong> The literal or dictionary definition of a word (e.g., <em>snake</em> = a legless reptile).</li>
              <li><strong>Connotation:</strong> The feelings, associations, or emotional weight connected to a word beyond its literal meaning.
                <br>• <em>Slim</em> (Positive association)
                <br>• <em>Skinny</em> (Negative association)
                <br>• <em>Thin</em> (Neutral association)
              </li>
            </ul>

            <h3 class="section-title">4. Word Relationships</h3>
            <div class="aesthetic-box">
              • <strong>Synonyms:</strong> Words with similar meanings (e.g., <em>Happy — Joyful</em>)<br>
              • <strong>Antonyms:</strong> Words with opposite meanings (e.g., <em>Ancient — Modern</em>)<br>
              • <strong>Homonyms:</strong> Words that share spelling or pronunciation but have different meanings (e.g., <em>Bat</em> = flying mammal vs. sports equipment)<br>
              • <strong>Word Families:</strong> Words derived from the same root word (e.g., <em>Create, Creative, Creation</em>)
            </div>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Commence</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"The manager decided to <strong>commence</strong> the meeting at exactly 9:00 AM."</p>
                <small style="color: #64748B;">Commence means to begin or start.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Concise</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"The instructions were clear and <strong>concise</strong>, making the activity easy to follow."</p>
                <small style="color: #64748B;">Concise means brief, direct, and complete.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Delighted</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"The little girl was <strong>delighted</strong> when she received her award."</p>
                <small style="color: #64748B;">Delighted means very happy or filled with joy.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Residence</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"The word 'residence' is a more formal term for 'home.'"</p>
                <small style="color: #64748B;">Demonstrates advanced formal vocabulary choice.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Advanced vocabulary helps communicate ideas more accurately and professionally.</li>
              <li>Context clues enable readers to decode unfamiliar vocabulary.</li>
              <li>Denotation is the literal meaning; connotation is the emotional association.</li>
              <li>Synonyms, antonyms, homonyms, and word families represent core word relationships.</li>
              <li>Expanding vocabulary strengthens critical reading and academic writing.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=31" class="btn-primary">Proceed to Lesson 31 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  32: {
    title: "READEFINE - Lesson 32: Complex Sentence Structures",
    subtitle: "Level 4 • Lesson 32",
    heading: "Complex Sentence Structures",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of the lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define clauses and complex sentence structures.</li>
              <li>Differentiate independent and dependent clauses.</li>
              <li>Identify simple, compound, complex, and compound-complex sentences.</li>
              <li>Use coordinating and subordinating conjunctions correctly.</li>
              <li>Construct sentences with different structures.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Sentences form the foundation of written and spoken communication. Understanding sentence structures helps writers connect thoughts, explain conditions, and express complex relationships between ideas.
            </p>

            <h3 class="section-title">1. Clauses</h3>
            <div class="aesthetic-box">
              • <strong>Independent Clause:</strong> Expresses a complete thought and can stand alone as a sentence.<br>
              <em>Example: "She finished her assignment."</em><br><br>
              • <strong>Dependent Clause:</strong> Contains a subject and verb but does not express a complete thought by itself.<br>
              <em>Example: "Because she finished her assignment..."</em>
            </div>

            <h3 class="section-title">2. Four Sentence Structures</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Simple Sentence:</strong> Contains one independent clause (e.g., <em>"The students studied."</em>).</li>
              <li><strong>Compound Sentence:</strong> Contains two or more independent clauses joined by coordinating conjunctions—<strong>FANBOYS</strong> (For, And, Nor, But, Or, Yet, So).<br>
              <em>Example: "She studied hard, and she passed the examination."</em></li>
              <li><strong>Complex Sentence:</strong> Contains one independent clause and at least one dependent clause joined by subordinating conjunctions (e.g., <em>Because, Although, Since, When, While, If</em>).<br>
              <em>Example: "She passed the examination because she studied hard."</em></li>
              <li><strong>Compound-Complex Sentence:</strong> Contains at least two independent clauses and at least one dependent clause.<br>
              <em>Example: "Although it was raining, the students attended class, and their teacher continued the lesson."</em></li>
            </ul>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Simple</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"The baby slept."</p>
                <small style="color: #64748B;">Contains one independent clause.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Compound</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"I wanted to study, but my internet connection stopped working."</p>
                <small style="color: #64748B;">Two independent clauses joined by "but".</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Complex</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Although she was nervous, she delivered her speech confidently."</p>
                <small style="color: #64748B;">One dependent clause and one independent clause.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Compound-Complex</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"After the class ended, the students packed their things, and the teacher arranged the chairs."</p>
                <small style="color: #64748B;">One dependent clause and two independent clauses.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>A clause always contains a subject and a verb.</li>
              <li>Independent clauses express complete thoughts; dependent clauses do not.</li>
              <li>Simple sentences contain a single independent clause.</li>
              <li>Compound and complex sentences connect related ideas using conjunctions (FANBOYS & subordinators).</li>
              <li>Compound-complex sentences combine multiple independent clauses with dependent clauses.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=32" class="btn-primary">Proceed to Lesson 32 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  33: {
    title: "READEFINE - Lesson 33: Advanced Grammar and Sentence Correction",
    subtitle: "Level 4 • Lesson 33",
    heading: "Advanced Grammar and Sentence Correction",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of the lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Identify common grammatical errors in sentences.</li>
              <li>Recognize subject-verb agreement rules.</li>
              <li>Correct pronoun, tense, and modifier errors.</li>
              <li>Identify sentence fragments and run-on sentences.</li>
              <li>Apply grammar rules when editing written work.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Grammar provides rules that help people communicate ideas clearly and correctly. Advanced grammar focuses on recognizing common errors, refining sentence structure, and polishing academic or professional writing.
            </p>

            <h3 class="section-title">1. Key Grammar Rules</h3>
            <div class="aesthetic-box">
              • <strong>Subject-Verb Agreement:</strong> Verbs must match their subjects in number and person (e.g., <em>"She writes"</em> vs. <em>"They write"</em>).<br><br>
              • <strong>Verb Tense Consistency:</strong> Maintain a logical time reference (e.g., <em>"Yesterday, she went to school."</em>).<br><br>
              • <strong>Pronoun Agreement:</strong> Pronouns must correctly match the nouns they replace (e.g., <em>"Maria forgot her notebook."</em>).<br><br>
              • <strong>Misplaced Modifiers:</strong> Modifiers must be placed near the words they describe to prevent confusion.
            </div>

            <h3 class="section-title">2. Structural Sentence Errors</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Sentence Fragments:</strong> Incomplete word groups lacking a subject, verb, or complete thought (e.g., <em>"Because the students were late."</em> → Corrected: <em>"Because the students were late, the teacher extended the activity."</em>).</li>
              <li><strong>Run-on Sentences:</strong> Independent clauses incorrectly joined without punctuation or proper conjunctions (e.g., <em>"I finished my homework I watched television."</em> → Corrected: <em>"I finished my homework, and I watched television."</em>).</li>
            </ul>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Subject-Verb Agreement</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Incorrect:</strong> "The students studies every night."<br><strong>Correct:</strong> "The students study every night."</p>
                <small style="color: #64748B;">Plural subject "students" requires the plural verb "study".</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Verb Tense</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Incorrect:</strong> "She visited her grandmother tomorrow."<br><strong>Correct:</strong> "She will visit her grandmother tomorrow."</p>
                <small style="color: #64748B;">Time marker "tomorrow" signals future tense.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Sentence Fragment</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Incorrect:</strong> "Although he was prepared."<br><strong>Correct:</strong> "Although he was prepared, he still reviewed his notes."</p>
                <small style="color: #64748B;">Adds an independent clause to complete the thought.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Run-on Sentence</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Incorrect:</strong> "The activity was difficult I asked for help."<br><strong>Correct:</strong> "The activity was difficult, so I asked for help."</p>
                <small style="color: #64748B;">Uses comma + conjunction "so" to connect clauses.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Subject-verb agreement ensures subjects and verbs match in number and person.</li>
              <li>Verb tense consistency maintains logical time continuity across sentences.</li>
              <li>Pronouns must agree clearly in number and gender with their antecedents.</li>
              <li>Modifiers should be placed directly next to the words they describe.</li>
              <li>Fixing fragments and run-ons prevents ambiguity and improves writing quality.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=33" class="btn-primary">Proceed to Lesson 33 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  34: {
    title: "READEFINE - Lesson 34: Writing Coherent and Unified Paragraphs",
    subtitle: "Level 4 • Lesson 34",
    heading: "Writing Coherent and Unified Paragraphs",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of the lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define coherence and unity in paragraph writing.</li>
              <li>Identify the essential parts of a well-developed paragraph.</li>
              <li>Recognize the importance of logical organization.</li>
              <li>Use transitions and appropriate connections between ideas.</li>
              <li>Write paragraphs with clear and connected sentences.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              A paragraph is a group of related sentences developing one central idea. However, a good paragraph requires more than putting random sentences together; its ideas must be logically organized and connected smoothly through unity and coherence.
            </p>

            <h3 class="section-title">1. Paragraph Unity and Coherence</h3>
            <div class="aesthetic-box">
              • <strong>Unity:</strong> Means all sentences in a paragraph directly support one central idea without unrelated details.<br><br>
              • <strong>Coherence:</strong> Refers to the logical and smooth connection of ideas so readers can follow how one sentence relates to another.
            </div>

            <h3 class="section-title">2. Essential Parts of a Paragraph</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Topic Sentence:</strong> Introduces the main idea of the paragraph.</li>
              <li><strong>Supporting Sentences:</strong> Explain, describe, or provide evidence related to the topic sentence.</li>
              <li><strong>Concluding Sentence:</strong> Provides closure by summarizing or reinforcing the main idea.</li>
            </ul>

            <h3 class="section-title">3. Transition Words and Phrases</h3>
            <p class="text-body">
              Transitions connect ideas and ensure smooth paragraph flow:<br>
              • <strong>Addition:</strong> Furthermore, moreover, also, in addition.<br>
              • <strong>Contrast:</strong> However, although, on the other hand.<br>
              • <strong>Cause and Effect:</strong> Therefore, consequently, as a result.<br>
              • <strong>Sequence:</strong> First, next, afterward, finally.<br>
              • <strong>Example:</strong> For example, for instance, such as.
            </p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Unified Paragraph</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Reading is an important learning habit. It helps students develop vocabulary and comprehension. Therefore, reading supports academic development."</p>
                <small style="color: #64748B;">Every sentence focuses strictly on the benefits of reading.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Lack of Unity</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Reading improves vocabulary. It helps students understand texts. My favorite food is pizza. Reading also develops knowledge."</p>
                <small style="color: #64748B;">The sentence about pizza is entirely unrelated.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Cause-and-Effect Transition</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"She studied regularly. <strong>Therefore</strong>, she performed well on the examination."</p>
                <small style="color: #64748B;">Connects study habits directly to the test outcome.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Topic Sentence</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Technology has changed the way people communicate."</p>
                <small style="color: #64748B;">Introduces the central idea of the paragraph.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Unity ensures all sentences within a paragraph support a single central idea.</li>
              <li>Coherence links ideas logically and smoothly for optimal readability.</li>
              <li>Topic sentences establish the main focus; supporting sentences elaborate on it.</li>
              <li>Concluding sentences tie thoughts together and wrap up the paragraph.</li>
              <li>Transition words guide readers through shifts in thought, addition, or contrast.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=34" class="btn-primary">Proceed to Lesson 34 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  35: {
    title: "READEFINE - Lesson 35: Essay Writing Fundamentals",
    subtitle: "Level 4 • Lesson 35",
    heading: "Essay Writing Fundamentals",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of the lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define an essay and identify its basic structure.</li>
              <li>Differentiate the introduction, body, and conclusion.</li>
              <li>Recognize common types of essays.</li>
              <li>Organize ideas before writing.</li>
              <li>Develop a clear and organized essay about a given topic.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              An essay is a structured piece of writing that discusses, explains, describes, or argues about a particular subject. Mastering essay fundamentals allows learners to present ideas logically and effectively across academic and professional domains.
            </p>

            <h3 class="section-title">1. Basic Essay Structure</h3>
            <div class="aesthetic-box">
              • <strong>Introduction:</strong> Opens the essay, presents background info, and provides a clear <strong>Thesis Statement</strong> expressing the central position.<br><br>
              • <strong>Body Paragraphs:</strong> The core section developing main points through explanations, examples, and evidence.<br><br>
              • <strong>Conclusion:</strong> Summarizes the main points and reinforces the central thesis without adding new topics.
            </div>

            <h3 class="section-title">2. Common Types of Essays</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Narrative Essay:</strong> Tells a story or describes a personal experience.</li>
              <li><strong>Descriptive Essay:</strong> Uses sensory details to paint a vivid picture of a person, place, or experience.</li>
              <li><strong>Expository Essay:</strong> Explains a topic logically using facts, information, and examples.</li>
              <li><strong>Argumentative Essay:</strong> Presents a position supported by logical reasons and evidence.</li>
              <li><strong>Persuasive Essay:</strong> Attempts to convince readers to adopt a specific belief or action.</li>
            </ul>

            <h3 class="section-title">3. The Essay Writing Process</h3>
            <div class="aesthetic-box">
              1. <strong>Prewriting:</strong> Brainstorming & topic selection.<br>
              2. <strong>Planning:</strong> Outlining structure.<br>
              3. <strong>Drafting:</strong> Writing the initial text.<br>
              4. <strong>Revising:</strong> Improving content, flow, & clarity.<br>
              5. <strong>Editing:</strong> Correcting grammar & mechanics.<br>
              6. <strong>Finalizing:</strong> Polishing the final submission version.
            </div>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Thesis Statement</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Technology has improved communication by making information easier to share and access."</p>
                <small style="color: #64748B;">Presents the core thesis statement of an essay.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Narrative Essay</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Last summer, I visited my grandparents and experienced an unforgettable family gathering."</p>
                <small style="color: #64748B;">Introduces a personal narrative story.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Expository Essay</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Photosynthesis is the process through which plants use sunlight to produce food."</p>
                <small style="color: #64748B;">Factual explanation of a natural process.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Conclusion</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"In conclusion, developing good study habits can help students become more prepared."</p>
                <small style="color: #64748B;">Provides closure and reinforces the essay's core point.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>An essay consists of an introduction, body paragraphs, and a conclusion.</li>
              <li>The introduction establishes the topic and contains the central thesis statement.</li>
              <li>Body paragraphs provide detailed reasoning, factual evidence, or examples.</li>
              <li>The conclusion summarizes the main arguments and offers final closure.</li>
              <li>Following a multi-stage process (Prewriting to Finalizing) ensures clear writing.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=35" class="btn-primary">Proceed to Lesson 35 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  36: {
    title: "READEFINE - Lesson 36: Writing Academic and Formal Texts",
    subtitle: "Level 4 • Lesson 36",
    heading: "Writing Academic and Formal Texts",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of the lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define academic and formal writing.</li>
              <li>Identify the core characteristics of academic and formal texts (clarity, objectivity, organization, accuracy).</li>
              <li>Distinguish between formal and informal language.</li>
              <li>Avoid common errors in formal communication.</li>
              <li>Apply professional writing standards in academic and professional contexts.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Academic and formal writing are essential communication styles used to present information, analyze topics, and report research findings professionally in educational and professional settings.
            </p>

            <h3 class="section-title">1. Characteristics of Academic and Formal Writing</h3>
            <div class="aesthetic-box">
              • <strong>Clarity:</strong> Expressing ideas in a straightforward, understandable way.<br><br>
              • <strong>Objectivity:</strong> Focusing on facts, evidence, and logical explanations rather than personal feelings.<br><br>
              • <strong>Formal Language:</strong> Utilizing professional vocabulary while avoiding slang or casual terms.<br><br>
              • <strong>Organization:</strong> Structuring ideas logically with clear headings and paragraphs.<br><br>
              • <strong>Accuracy:</strong> Ensuring spelling, grammar, and facts are correct and verifiable.
            </div>

            <h3 class="section-title">2. Formal vs. Informal Language</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><em>Informal:</em> "Kids need to study hard." → <em>Formal:</em> "Students should develop consistent study habits."</li>
              <li><em>Informal:</em> "A lot of people think this is good." → <em>Formal:</em> "Many individuals consider this beneficial."</li>
            </ul>

            <h3 class="section-title">3. Common Problems to Avoid</h3>
            <p class="text-body">
              Writers must actively avoid slang, unnecessary abbreviations, unsupported claims, repetitive expressions, unclear sentences, inappropriate personal language, and basic grammatical errors.
            </p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Tone Shift</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Informal:</strong> "The experiment was really cool."<br><strong>Formal:</strong> "The experiment produced interesting results."</p>
                <small style="color: #64748B;">Replaces casual slang with appropriate academic vocabulary.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Objective Phrasing</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;"><strong>Informal:</strong> "I think this is the best way..."<br><strong>Formal:</strong> "This approach may provide an effective solution..."</p>
                <small style="color: #64748B;">Presents arguments objectively without leaning purely on personal opinion.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Survey Data Integration</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"According to the survey results, 75% of the respondents preferred digital learning materials."</p>
                <small style="color: #64748B;">Academic-style factual reporting.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Formal Correspondence</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">"Dear Sir/Madam, I am writing to formally request information about the application requirements."</p>
                <small style="color: #64748B;">Respectful, professional business language.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Academic writing communicates information in educational and research environments.</li>
              <li>Formal writing relies on professional, polite, and respectful language conventions.</li>
              <li>Clarity, objectivity, organization, and accuracy form the pillars of formal texts.</li>
              <li>Formal texts steer clear of slang, casual contractions, and unsupported claims.</li>
              <li>Mastering these styles prepares learners for professional career communication.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=36" class="btn-primary">Proceed to Lesson 36 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  37: {
    title: "READEFINE - Lesson 37: Reading and Analyzing Longer Texts",
    subtitle: "Level 4 • Lesson 37",
    heading: "Reading and Analyzing Longer Texts",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of the lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Identify types and characteristics of longer texts.</li>
              <li>Determine the central idea across multiple paragraphs or sections.</li>
              <li>Track the development of ideas in extended materials.</li>
              <li>Apply reading strategies for longer texts (previewing, active reading, summarizing, annotating, rereading).</li>
              <li>Analyze complex messages and build reading endurance.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Longer texts (such as research articles, academic essays, reports, book chapters, and long-form informational articles) contain multiple sections that develop ideas in greater depth. Analyzing them requires specific strategies to track arguments and maintain comprehension.
            </p>

            <h3 class="section-title">1. Identifying the Central Idea</h3>
            <p class="text-body">
              The central idea is the main message developed throughout an extended text. Unlike a single paragraph's main idea, a central idea connects information across several sections or chapters.
            </p>

            <h3 class="section-title">2. Reading Strategies for Longer Texts</h3>
            <div class="aesthetic-box">
              • <strong>Previewing:</strong> Examining titles, headings, and introductions before reading.<br><br>
              • <strong>Active Reading:</strong> Questioning, highlighting, and note-taking while reading.<br><br>
              • <strong>Summarizing:</strong> Restating core ideas concisely in a shorter form.<br><br>
              • <strong>Annotating:</strong> Writing margin notes or comments to track key points.<br><br>
              • <strong>Rereading:</strong> Reviewing difficult sections to ensure full comprehension.
            </div>

            <h3 class="section-title">3. Analyzing and Tracking Ideas</h3>
            <p class="text-body">
              Extended texts develop ideas progressively: starting with an introduction, presenting supporting evidence, exploring perspectives, and culminating in conclusions. Analyzing them involves asking key questions about author purpose, evidence quality, and logical organization.
            </p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Research Article Analysis</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">A research article examines reading habits and academic performance across sections.</p>
                <small style="color: #64748B;">Requires identifying how each section supports the overall central idea.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Annotating</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">A student writes notes and comments beside key paragraphs in a book chapter.</p>
                <small style="color: #64748B;">Records important information to reinforce understanding.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Previewing</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Scanning titles, headings, and introductions before deep reading.</p>
                <small style="color: #64748B;">Builds a mental framework of the text structure beforehand.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Summarizing</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Condensing a ten-page report into a single comprehensive paragraph.</p>
                <small style="color: #64748B;">Presents essential points concisely.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Longer texts consist of multiple sections building up complex ideas.</li>
              <li>The central idea serves as the unifying message connecting the entire document.</li>
              <li>Previewing, annotating, summarizing, and rereading enhance comprehension.</li>
              <li>Tracking development helps readers follow the logical progression of arguments.</li>
              <li>Mastering extended reading builds vital analytical thinking and reading endurance.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=37" class="btn-primary">Proceed to Lesson 37 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  38: {
    title: "READEFINE - Lesson 38: Research and Information Literacy",
    subtitle: "Level 4 • Lesson 38",
    heading: "Research and Information Literacy",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of the lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define research and information literacy.</li>
              <li>Identify the fundamental steps in conducting structured research.</li>
              <li>Recognize the importance of evaluating information sources for accuracy and reliability.</li>
              <li>Understand plagiarism and apply proper citation practices (APA, MLA, Chicago).</li>
              <li>Demonstrate responsible information use in academic tasks.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Information literacy is the ability to recognize when information is needed and to locate, evaluate, and use it responsibly. In an era where information is instantly accessible online, these skills are crucial for academic success.
            </p>

            <h3 class="section-title">1. Research and Information Literacy</h3>
            <div class="aesthetic-box">
              • <strong>Research:</strong> A systematic process of gathering, examining, and analyzing information to answer questions or investigate a subject.<br><br>
              • <strong>Information Literacy:</strong> The ability to recognize, locate, evaluate, organize, and use information effectively and responsibly.
            </div>

            <h3 class="section-title">2. Basic Steps in Conducting Research</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Step 1:</strong> Identify the research topic.</li>
              <li><strong>Step 2:</strong> Formulate research questions.</li>
              <li><strong>Step 3:</strong> Gather information from appropriate sources.</li>
              <li><strong>Step 4:</strong> Evaluate sources for accuracy, authority, currency, and relevance.</li>
              <li><strong>Step 5:</strong> Organize and analyze information.</li>
              <li><strong>Step 6:</strong> Present findings through papers, reports, or presentations.</li>
            </ul>

            <h3 class="section-title">3. Avoiding Plagiarism and Using Citations</h3>
            <p class="text-body">
              <strong>Plagiarism</strong> involves presenting someone else's words or ideas as one's own without proper credit. To maintain academic honesty, writers must use <strong>citations</strong> (such as APA, MLA, or Chicago styles) to acknowledge original sources.
            </p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Information Gathering</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">A student searches for climate change data using peer-reviewed scientific publications.</p>
                <small style="color: #64748B;">Systematic collection of reliable information.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Plagiarism</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Copying an entire web paragraph into an essay without any acknowledgment.</p>
                <small style="color: #64748B;">Using another author's work without giving proper credit.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Proper Citation</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Including the author's name and publication year next to referenced text.</p>
                <small style="color: #64748B;">Giving direct credit to the original source.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Source Evaluation</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Checking writer qualifications and comparing findings across reliable publications.</p>
                <small style="color: #64748B;">Practicing core information literacy skills.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Research is a systematic process of investigating questions and analyzing data.</li>
              <li>Information literacy requires locating, evaluating, and using information responsibly.</li>
              <li>Structured research flows from topic selection and questions to evaluation and presentation.</li>
              <li>Plagiarism violates academic honesty; proper citations prevent it.</li>
              <li>Responsible information use supports evidence-based and reliable conclusions.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=38" class="btn-primary">Proceed to Lesson 38 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  39: {
    title: "READEFINE - Lesson 39: Effective Written and Verbal Communication",
    subtitle: "Level 4 • Lesson 39",
    heading: "Effective Written and Verbal Communication",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of the lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define written and verbal communication.</li>
              <li>Identify the essential elements of effective communication (Sender, Message, Channel, Receiver, Feedback).</li>
              <li>Recognize the importance of audience, purpose, and context.</li>
              <li>Practice active listening strategies.</li>
              <li>Apply clear, respectful, and effective communication skills.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Communication allows people to share information, express thoughts, and build relationships through writing, speaking, listening, and nonverbal expressions. Effective communication ensures messages are clear, appropriate, and suitable for the audience.
            </p>

            <h3 class="section-title">1. Written vs. Verbal Communication</h3>
            <div class="aesthetic-box">
              • <strong>Written Communication:</strong> Sharing information through written words and symbols (e.g., emails, reports, essays, text messages).<br><br>
              • <strong>Verbal Communication:</strong> Sharing information through spoken words (e.g., conversations, presentations, speeches, meetings).
            </div>

            <h3 class="section-title">2. Elements and Core Considerations</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Elements:</strong> Sender, Message, Channel, Receiver, and Feedback.</li>
              <li><strong>Key Factors:</strong> Audience (who receives it), Purpose (why it is sent), and Context (the situation or environment).</li>
            </ul>

            <h3 class="section-title">3. Active Listening</h3>
            <p class="text-body">
              Active listening means giving full attention to the speaker, avoiding interruptions, asking relevant questions, and confirming understanding to ensure successful message exchange.
            </p>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Written Communication</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">A student writes a formal email requesting information about an upcoming exam.</p>
                <small style="color: #64748B;">Information communicated through written text.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Verbal Communication</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">A student explains group activity results during a classroom presentation.</p>
                <small style="color: #64748B;">Information delivered via spoken language.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Active Listening</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Listening closely, asking questions, and repeating instructions during a meeting.</p>
                <small style="color: #64748B;">Demonstrates total engagement and comprehension.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Audience Awareness</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Using simpler language when explaining a difficult concept to younger learners.</p>
                <small style="color: #64748B;">Tailoring delivery to match the audience's needs.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Written communication transmits information via text and written symbols.</li>
              <li>Verbal communication relies on spoken words and interactive dialogue.</li>
              <li>Effective communication involves a sender, message, channel, receiver, and feedback.</li>
              <li>Audience, purpose, and context shape how messages should be framed.</li>
              <li>Clarity, courtesy, correctness, and active listening drive successful interactions.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=39" class="btn-primary">Proceed to Lesson 39 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
  40: {
    title: "READEFINE - Lesson 40: Practical Literacy in Everyday Situations",
    subtitle: "Level 4 • Lesson 40",
    heading: "Practical Literacy in Everyday Situations",
    backHref: "levels.html",
    backText: "← Back to Lessons",
    styles: `
    .lesson-container { width: 100%; max-width: 100%; margin: 0; display: flex; flex-direction: column; gap: 28px; }
    .pill-card { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.06); width: 100%; box-sizing: border-box; }
    .hero-oblong-badge { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #174B85 0%, #4F83CC 100%); color: #FFFFFF; padding: 12px 28px; border-radius: 30px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 24px; box-shadow: 0 8px 20px rgba(23, 75, 133, 0.15); }
    .section-title { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--deep-blue, #174B85); font-size: 1.45rem; font-weight: 800; margin-top: 28px; margin-bottom: 14px; }
    .text-body { color: #1E293B; font-size: 1.1rem; line-height: 1.85; margin-bottom: 16px; }
    .aesthetic-box { background: linear-gradient(135deg, #F8FBFF 0%, #EAF2FF 100%); border-left: 6px solid var(--soft-blue, #8DB8EE); border-radius: 20px; padding: 22px 28px; margin: 20px 0; box-shadow: 0 4px 15px rgba(23, 75, 133, 0.03); }
    .grid-two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 20px 0; }
    .mini-pill-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 24px; padding: 24px 28px; box-shadow: 0 6px 15px rgba(0,0,0,0.02); }
    .takeaway-pill-card { background: linear-gradient(135deg, #174B85 0%, #113866 100%); color: #FFFFFF; border-radius: 36px; padding: 40px 48px; box-shadow: 0 15px 35px rgba(23, 75, 133, 0.15); width: 100%; box-sizing: border-box; }
    .takeaway-pill-card h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.5rem; margin-bottom: 16px; color: #F4D38A; }
    .takeaway-pill-card ul { padding-left: 20px; line-height: 1.9; font-size: 1.05rem; }
  `,
    content: `
      
      

      <div class="section-box" style="flex: 1; overflow-y: auto; padding: 24px 32px;">
        <div class="lesson-container">
          
          <!-- OBJECTIVES -->
          <div class="pill-card">
            <div class="hero-oblong-badge">🎯 Learning Objectives</div>
            <p class="text-body" style="font-weight: 600; margin-bottom: 12px;">At the end of the lesson, learners should be able to:</p>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.9; font-size: 1.1rem; font-weight: 500;">
              <li>Define practical literacy and its importance in everyday life.</li>
              <li>Identify common situations that require literacy skills.</li>
              <li>Interpret everyday documents, instructions, and information.</li>
              <li>Apply reading, writing, and critical thinking skills when making decisions.</li>
              <li>Demonstrate responsible use of literacy skills in real-life situations.</li>
            </ul>
          </div>

          <!-- INTRODUCTION & DISCUSSION -->
          <div class="pill-card">
            <div class="hero-oblong-badge">💡 Introduction & Discussion</div>
            <p class="text-body">
              Practical literacy goes beyond academic tasks—it is the ability to apply reading, writing, comprehension, and critical thinking skills to complete daily responsibilities, foster personal independence, and navigate real-life situations.
            </p>

            <h3 class="section-title">1. Functional Reading and Writing</h3>
            <div class="aesthetic-box">
              • <strong>Functional Reading:</strong> Reading for a specific practical purpose (e.g., road signs, medication labels, schedules).<br><br>
              • <strong>Functional Writing:</strong> Writing information to complete everyday tasks (e.g., application forms, expense lists, emails).
            </div>

            <h3 class="section-title">2. Real-World Applications of Literacy</h3>
            <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 16px;">
              <li><strong>Digital Literacy:</strong> Using technology responsibly, evaluating online information, and protecting personal data.</li>
              <li><strong>Financial Literacy:</strong> Understanding prices, checking receipts, comparing costs, and budgeting.</li>
              <li><strong>Health and Safety Literacy:</strong> Following safety procedures, reading product warnings, and understanding medical information.</li>
              <li><strong>Workplace & Community Literacy:</strong> Interpreting job ads, workplace guidelines, and official announcements.</li>
            </ul>
          </div>

          <!-- EXAMPLES GRID -->
          <div class="pill-card">
            <div class="hero-oblong-badge">📌 Practical Examples</div>
            <div class="grid-two-col">
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 1: Scholarship Application Form</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">A student carefully reads instructions before completing a scholarship form.</p>
                <small style="color: #64748B;">Uses practical literacy to handle essential real-life paperwork.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 2: Checking Grocery Receipts</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Verifying items and price totals after buying groceries.</p>
                <small style="color: #64748B;">Applies financial literacy to verify transactions.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 3: Evaluating Unfamiliar Messages</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Checking the legitimacy of a text message before sharing personal data.</p>
                <small style="color: #64748B;">Practices digital literacy and cybersecurity.</small>
              </div>
              <div class="mini-pill-card">
                <h4 style="color: var(--deep-blue); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px;">Example 4: Emergency Procedures</h4>
                <p class="text-body" style="font-size: 0.95rem; margin-bottom: 4px;">Reading emergency exit plans inside a building.</p>
                <small style="color: #64748B;">Uses health and safety literacy for self-preservation.</small>
              </div>
            </div>
          </div>

          <!-- KEY TAKEAWAYS -->
          <div class="takeaway-pill-card">
            <h3>🔑 Key Takeaways</h3>
            <ul>
              <li>Practical literacy connects language skills directly to daily life responsibilities.</li>
              <li>Functional reading and writing empower individuals to complete everyday tasks.</li>
              <li>Digital literacy protects users online and filters misleading information.</li>
              <li>Financial, health, and safety literacy drive informed, responsible choices.</li>
              <li>Mastering practical literacy builds independence in school, work, and community life.</li>
            </ul>
          </div>

          <!-- NAVIGATION -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 0 5px;">
            <a href="levels.html" class="btn-primary" style="background: #F1F5F9; color: var(--text-dark); border: 1px solid var(--border-subtle);">← Lessons Hub</a>
            <a href="exam.html?id=40" class="btn-primary">Proceed to Lesson 40 Exam →</a>
          </div>

        </div>
      </div>

    `,
    outsideContent: ``,
    script: `
    document.getElementById('menuToggleBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
  `,
  },
};
