const form = document.getElementById("playerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const name1 = formData.get("name1");
  const name2 = formData.get("name2");

  const queryParams = new URLSearchParams({
    name1: name1,
    name2: name2,
  }).toString();

  window.location.href = `index.html?${queryParams}`;
});
