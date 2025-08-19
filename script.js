const mainContainer = document.querySelector("#card-container");
const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
// Drive link checker Function
function buildDriveImageUrl(link) {
  const match = link.match(/\/d\/(.+?)\//);
  if (match && match[1]) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  // if it's not a drive link, just return the link itself
  return link;
}

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  // Create fresh elements on every submit
  const card = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");

  // Add Tailwind classes
  card.className =
    "card text-slate-400 font-mono w-[320px] rounded-lg p-6 bg-slate-700 shadow-xl";
  imgContainer.className =
    "image-container w-10 h-10 rounded-full overflow-hidden";
  img.className = "w-full h-full object-cover";
  h2.className = "font-bold mt-3 text-xl";
  h4.className = "font-semibold my-2 text-[18px]";
  p.className = "font-semibold";

  // ✅ use the helper here

  img.src = buildDriveImageUrl(inputs[0].value);
  console.log((img.src = buildDriveImageUrl(inputs[0].value)));
  h2.textContent = inputs[1].value;
  h4.textContent = inputs[2].value;
  p.textContent = `Works At ${inputs[3].value}`;

  imgContainer.appendChild(img);
  card.appendChild(imgContainer);
  card.appendChild(h2);
  card.appendChild(h4);
  card.appendChild(p);

  mainContainer.appendChild(card);

  inputs.forEach((inp) => {
    if (inp.type !== "submit") inp.value = "";
  });
});
