const API_URL = "https://readifine-backend.vercel.app";
fetch(`${API_URL}/api/chapters`)
function authHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
  };
}

async function saveProgress(lessonId, completed, score) {
  const res = await fetch(API + "/progress", {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ lessonId, completed, score }),
  });
  return res.json();
}

async function loadProgress() {
  const res = await fetch(API + "/progress", { headers: authHeaders() });
  const data = await res.json();
  return data.progress || [];
}