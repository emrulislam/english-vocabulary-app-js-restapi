const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLessons(json.data));
};
const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
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
          <p class="text-3xl font-bold">${word.word ? word.word:"শব্দ পাওয়া যায়নি "}</p>
          <p class="my-6 text-xl">Meaning /Pronounciation</p>
          <p class="font-bangla text-2xl font-bold">${word.meaning ? word.meaning:"শব্দের অর্থ পাওয়া  যায়নি "}</p>
        </div>
        <div class="flex justify-around mt-8">
          <button class="btn btn-square bg-[#1A91FF1A]"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn btn-square bg-[#1A91FF1A]"><i class="fa-solid fa-volume-high"></i></button>
        </div>

        `;
    wordContainer.appendChild(cardDiv);
  }
};
const displayLessons = (lessons) => {
  const lessonContainer = document.getElementById("lesson-container");
  lessonContainer.innerHTML = "";
  for (let lesson of lessons) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
                <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
                <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
                </button>
    `;
    lessonContainer.appendChild(btnDiv);
  }
};
loadLessons();
