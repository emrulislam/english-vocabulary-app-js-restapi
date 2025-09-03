const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLessons(json.data));
};
const loadLevelWord =(id)=>{
    const url =`https://openapi.programming-hero.com/api/level/${id}`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayLevelWord(data.data))
}
const displayLevelWord=(words)=>{
    const wordContainer=document.getElementById("word-container")
    wordContainer.innerHTML=""
    for(let word of words){
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("bg-white","h-full","w-full","rounded-xl","text-center","py-8")
        cardDiv.innerHTML=
        `
         <div>
          <p class="text-3xl font-bold">${word.word}</p>
          <p class="my-6 text-xl">Meaning /Pronounciation</p>
          <p class="font-bangla text-3xl font-bold">${word.meaning}</p>
        </div>
        <div class="flex justify-around mt-5">
          <button class="btn btn-square bg-[#1A91FF1A]"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn btn-square bg-[#1A91FF1A]"><i class="fa-solid fa-volume-high"></i></button>
        </div>

        `
        wordContainer.appendChild(cardDiv)
    }
}
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
