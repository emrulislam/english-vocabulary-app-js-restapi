# 🌐 English Janala – Interactive English Learning Platform

**English Janala** is a modern, interactive platform designed to make learning English vocabulary engaging, fun, and accessible. It dynamically fetches lessons and words from a REST API, allowing learners to explore vocabulary, view detailed word meanings, examples, and synonyms, and listen to correct pronunciations in real time.  

**Key Features:**  
- Interactive lessons dynamically loaded via API  
- Word details modal with meaning, examples, synonyms, and pronunciation  
- Search functionality for quick word lookup  
- Real-time pronunciation using the browser's SpeechSynthesis API  
- Responsive and modern UI built with Tailwind CSS and DaisyUI  

**Target Audience:**  
Learners of all ages seeking to improve their English vocabulary in an engaging, self-paced way.  

**Tech Insights:**  
Built with HTML5, CSS3, JavaScript, Tailwind CSS, and DaisyUI. REST APIs power the dynamic content, while vanilla JavaScript handles UI interactions and real-time functionalities.

## 🔗 Live Demo

Check out the live version of **English Janala** here:  
[🌐 English Janala Live](https://emrulislam.github.io/english-vocabulary-app-js-restapi/)

## 🛠 Technologies Used

<p align="left">
  <table>
    <tr>
      <td align="center">
        <img src="https://img.icons8.com/color/48/html-5.png" alt="HTML5"/><br>
        HTML5
      </td>
      <td align="center">
        <img src="https://img.icons8.com/color/48/css3.png" alt="CSS3"/><br>
        CSS3
      </td>
      <td align="center">
        <img src="https://img.icons8.com/color/48/javascript.png" alt="JavaScript"/><br>
        JavaScript
      </td>
      <td align="center">
        <img src="https://img.icons8.com/color/48/tailwindcss.png" alt="Tailwind CSS"/><br>
        Tailwind CSS
      </td>
      <td align="center">
        <img src="https://img.icons8.com/ios/50/000000/flower.png" alt="DaisyUI"/><br>
        DaisyUI
      </td>
    </tr>
  </table>
</p>

## 🔗 API Links

- [All Lessons API](https://openapi.programming-hero.com/api/levels/all)  
- [Lesson Words API](https://openapi.programming-hero.com/api/level/{id})  
- [Word Details API](https://openapi.programming-hero.com/api/word/{id})  
- [All Words API](https://openapi.programming-hero.com/api/words/all)  

## 🧠 JavaScript Logic Overview

### 1️⃣ Lesson Loading
- On page load, `loadLessons()` fetches all lessons and displays them as buttons in `#lesson-container`.  
- `displayLessons()` generates dynamic buttons with unique IDs and click events for each lesson.  

### 2️⃣ Word Display per Lesson
- Clicking a lesson button calls `loadLevelWord(id)`.  
- Shows spinner using `manageSpinner(true)`.  
- Fetches lesson-specific words from API.  
- Highlights the active lesson button using `clearActive()` and `.active` class.  
- Calls `displayLevelWord()` to render word cards dynamically.  

### 3️⃣ Word Details Modal
- Clicking the info button on a word card triggers `loadWordDetail(id)`.  
- Fetches detailed word info from API.  
- Calls `displayWordDetail()` to populate modal content: meaning, example, synonyms, and pronunciation.  
- Displays modal using `#my_modal_5.showModal()`.  

### 4️⃣ Pronunciation
- Clicking the speaker button calls `pronounceWord(word)` to read the word aloud using `SpeechSynthesis`.  

### 5️⃣ Search Functionality
- Input in `#input-search` triggers a search via `#btn-search` click listener.  
- Fetches all words and filters them using `Array.filter()`.  
- Calls `displayLevelWord()` to show matched words.  

### 6️⃣ UI Helpers
- `manageSpinner(status)` handles spinner visibility during API calls for better UX.  
- `clearActive()` ensures only the selected lesson button is highlighted.  
- `createElements(arr)` converts synonyms arrays into clickable buttons for modal display.  

## 🗂 JavaScript Functions ↔ HTML DOM Mapping

| JS Function | Trigger / Event | HTML Element(s) | Purpose / Action |
|-------------|----------------|----------------|-----------------|
| `loadLessons()` | Page load | `#lesson-container` | Fetch all lessons from API and display lesson buttons dynamically. |
| `displayLessons(lessons)` | Called by `loadLessons()` | `#lesson-container` | Dynamically create lesson buttons `<button>` with `lesson-btn-{id}` IDs. |
| `loadLevelWord(id)` | OnClick of lesson button | `#word-container`, `#spinner`, `.lesson-btn` | Fetch words for a selected lesson, show spinner while loading, highlight active lesson, call `displayLevelWord()`. |
| `displayLevelWord(words)` | Called by `loadLevelWord()` | `#word-container`, `#spinner` | Render word cards dynamically; show message if no words; hide spinner after loading. |
| `loadWordDetail(id)` | OnClick of info button | `#details-container`, `#my_modal_5` | Fetch detailed word info from API, call `displayWordDetail()`, open modal. |
| `displayWordDetail(word)` | Called by `loadWordDetail()` | `#details-container`, `#my_modal_5` | Show word details: meaning, example, synonyms, pronunciation, Complete Learning button in modal. |
| `pronounceWord(word)` | OnClick of speaker button | `window.speechSynthesis` | Read the word aloud using browser's SpeechSynthesis API. |
| `manageSpinner(status)` | Called in multiple functions | `#spinner`, `#word-container` | Show or hide spinner while loading API data for better UX. |
| `clearActive()` | Before highlighting current lesson | `.lesson-btn` | Remove `active` class from all lesson buttons to highlight the current lesson. |
| Search Event Listener | OnClick of `#btn-search` | `#input-search`, `#word-container` | Fetch all words, filter by search input, display matching words in `#word-container`. |
| `createElements(arr)` | Called in `displayWordDetail()` | `<span class="btn">` inside modal | Convert synonyms array into clickable span buttons for display in modal. |
