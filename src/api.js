const BASE = "";

export const getEntries = (date) =>
  fetch(`${BASE}/api/entries?date=${date}`).then(r => r.json());

export const createEntry = (data) =>
  fetch(`${BASE}/api/entries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(r => r.json());

export const updateEntry = (id, data) =>
  fetch(`${BASE}/api/entries/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(r => r.json());

export const deleteEntry = (id) =>
  fetch(`${BASE}/api/entries/${id}`, { method: "DELETE" }).then(r => r.json());

export const getSummary = (from, to) =>
  fetch(`${BASE}/api/summary?from=${from}&to=${to}`).then(r => r.json());
