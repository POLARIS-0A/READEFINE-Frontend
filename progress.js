const API = "https://readefine-backend.vercel.app/api";

function authHeaders() {
  const token = localStorage.getItem("accessToken");
  if (!token) throw new Error("Please log in to save and view your progress.");

  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
}

async function progressResponse(res, fallbackMessage) {
  const data = await res.json();
  if (res.status === 401) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("readefine_logged_in");
    localStorage.removeItem("readefine_has_account");
    throw new Error("Your session expired. Please log in again.");
  }
  if (!res.ok) throw new Error(data.error || fallbackMessage);
  return data;
}

async function saveProgress(lessonId, completed, score) {
  const res = await fetch(API + "/progress", {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ lessonId, completed, score }),
  });
  return progressResponse(res, "Could not save progress.");
}

async function loadProgress() {
  const res = await fetch(API + "/progress", { headers: authHeaders() });
  const data = await progressResponse(res, "Could not load progress.");
  if (!Array.isArray(data.progress)) throw new Error("The progress response was invalid.");
  return data.progress;
}