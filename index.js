const numberInput = document.querySelector("input#number");
const submitBtn = document.querySelector('button[type="submit"]');
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (numberInput.value === "") {
    alert("Enter a valid number please");
    return;
  }

  async function fetchFact() {
    const res = await (
      await fetch(`https://numbers-api.vercel.app/${numberInput.value}`)
    ).text();

    alert(res);
  }

  fetchFact()
    .then(() => {
      submitBtn.disabled = false;
      numberInput.value = "";
    })
    .catch((e) => {
      console.error(e);
      alert("An error occurred");
      submitBtn.disabled = false;
    });

  return;
});