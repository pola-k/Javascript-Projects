const listen_btn = document.getElementById("listen_btn")
const input_area = document.getElementById("input_area")
const dropdown_menu = document.getElementById("dropdown_menu")

let voices = [];

function populateVoices()
{
    voices = window.speechSynthesis.getVoices();
    dropdown_menu.innerHTML = ""
    
    voices.forEach((voice, i) => {
        const option = document.createElement("option");
        option.textContent = `${voice.name} (${voice.lang})`;
        option.value = i;
        dropdown_menu.appendChild(option);
    });
}

window.speechSynthesis.onvoiceschanged = populateVoices;

listen_btn.addEventListener("click", function()
{
    let speech = new SpeechSynthesisUtterance();
    speech.text = input_area.value
    speech.voice = voices[dropdown_menu.value];
    window.speechSynthesis.speak(speech)
})