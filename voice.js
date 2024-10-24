
const speech = new SpeechSynthesisUtterance();
const voiceSelect = document.querySelector("select");
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, index) => {
        voiceSelect.options[index] = new Option(voice.name, index);
    });

    speech.voice = voices[0];
};


voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});


document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});



// let speech = new SpeechSynthesisUtterance();
// let voices = [];
// let voiceSelect = document.querySelector("select");

// window.speechSynthesis.onvoiceschanged = () => {
//     voices = window.speechSynthesis.getVoices();
//     speech.voice = voices[0]; // Default voice

//     voices.forEach((voice, i) => {
//         voiceSelect.options[i] = new Option(voice.name, i);
//     });
// };

// voiceSelect.addEventListener("change", () => {
//     speech.voice = voices[voiceSelect.value];
// });

// document.querySelector("button").addEventListener("click", () => {
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// });
