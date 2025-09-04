const createElements = (arr) => {
  const elements = arr.map((el) => `<span class="btn">${el}</span>`);
  return elements.join(" ");
};
const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("word-container").classList.add("hidden");
  } else {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("word-container").classList.remove("hidden");
  }
};
const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLessons(json.data));
};
const clearActive = () => {
  const lessonBtn = document.querySelectorAll(".lesson-btn");
  lessonBtn.forEach((btn) => btn.classList.remove("active"));
};
const loadLevelWord = (id) => {
  manageSpinner(true);
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickButton = document.getElementById(`lesson-btn-${id}`);
      clearActive();
      clickButton.classList.add("active");
      displayLevelWord(data.data);
    });
};
const loadWordDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayWordDetail(details.data);
};
const displayWordDetail = (word) => {
  const detailBox = document.getElementById("details-container");
  detailBox.innerHTML = `
<div>
  <div>
    <h3 class="text-3xl font-bold">${
      word.word
    } (<i class="fa-solid fa-microphone"></i>:${word.pronunciation})</h3>
  </div>
  <div class="my-8">
    <h3 class="font-bold mb-3">Meaning</h3>
    <p>${word.meaning}</p>
  </div>
  <div>
    <h3 class="font-bold mb-3">Example</h3>
    <p>${word.sentence}</p>
  </div>
  <div class="my-8">
    <h3 class="font-bold mb-3 font-bangla">সমার্থক শব্দ</h3>
    <div class="mt-4">
    ${createElements(word.synonyms)}
    </div>
  </div>
  <div>
    <button class="btn btn-primary">Complete Learning</button>
  </div>
</div>

`;
  document.getElementById("my_modal_5").showModal();
};
const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  if (words.length === 0) {
    wordContainer.innerHTML = `
        <div class="text-center col-span-full py-4 font-bangla flex flex-col justify-center items-center">
            <img src="./assets/alert-error.png" class="w-24" alt="">
            <h2 class="text-[#79716B] text-sm my-6"><span class="font-bangla">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h2>
            <p class="text-[#292524] font-bold text-4xl">নেক্সট Lesson এ যান</p>
        </div>

        `;
    manageSpinner(false);
    return;
  }
  for (let word of words) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add(
      "bg-white",
      "h-full",
      "w-full",
      "rounded-xl",
      "text-center",
      "py-8",
      "shadow-sm"
    );
    cardDiv.innerHTML = `
         <div>
          <p class="text-3xl font-bold">${
            word.word ? word.word : "শব্দ পাওয়া যায়নি "
          }</p>
          <p class="my-6 text-xl">Meaning /Pronounciation</p>
          <p class="font-bangla text-2xl font-bold">${
            word.meaning ? word.meaning : "শব্দের অর্থ পাওয়া  যায়নি "
          }</p>
        </div>
        <div class="flex justify-around mt-8">
          <button onclick="loadWordDetail(${
            word.id
          })" class="btn btn-square bg-[#1A91FF1A]"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn btn-square bg-[#1A91FF1A]"><i class="fa-solid fa-volume-high"></i></button>
        </div>

        `;
    wordContainer.appendChild(cardDiv);
  }
  manageSpinner(false);
};
const displayLessons = (lessons) => {
  const lessonContainer = document.getElementById("lesson-container");
  lessonContainer.innerHTML = "";
  for (let lesson of lessons) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
      <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
      <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
      </button>
    `;
    lessonContainer.appendChild(btnDiv);
  }
};
loadLessons();
