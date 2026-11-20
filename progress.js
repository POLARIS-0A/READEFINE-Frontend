const API = "https://readefine-backend.vercel.app/api";

function authHeaders() {
  const token = localStorage.getItem("accessToken");
  if (!token) throw new Error("Please log in to save and view your progress.");

  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
}

async function saveProgress(lessonId, completed, score) {
  const res = await fetch(API + "/progress", {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ lessonId, completed, score }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Could not save progress.");
  return data;
}

async function loadProgress() {
  const res = await fetch(API + "/progress", { headers: authHeaders() });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Could not load progress.");
  if (!Array.isArray(data.progress)) throw new Error("The progress response was invalid.");
  return data.progress;
}