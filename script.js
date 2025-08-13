const output = document.getElementById("output");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = window.speechSynthesis.getVoices()[0];
  speechSynthesis.speak(utterance);
}

function startListening() {
  recognition.start();
}

recognition.onresult = (event) => {
  const command = event.results[0][0].transcript.toLowerCase();
  output.textContent = "You said: " + command;
  processCommand(command);
};

function processCommand(command) {
  if (command.includes("hello")) {
    speak("Hello Sweetheart. I’m always here for you.");
  } else if (command.includes("time")) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    speak("The time is " + time);
  } else if (command.includes("date")) {
    const today = new Date();
    speak("Today is " + today.toDateString());
  } else if (command.includes("open google")) {
    speak("Opening Google now");
    window.open("https://www.google.com", "_blank");
  } else if (command.includes("who are you")) {
    speak("I am your personal assistant, JARVIS. Just like Iron Man.");
  } else {
    speak("Sorry, I didn't understand that.");
  }
}
