const button =  document.querySelector("button");

const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log("speech recognition started");
}

recognition.onresult = (event) => {
    console.log(event);

    const spokenWords = event.results[0][0].transcript;

    console.log("spoken words are", spokenWords);
	computerSpeech(spokenWords);
}

const computerSpeech = (words) => {
	const speech = new SpeechSynthesisUtterance();
	speech.lang = "en-US";
	speech.pitch = 0.9;
	speech.volume = 1;
	speech.rate = 1;

	determineWords(speech, words);

	window.speechSynthesis.speak(speech);
}

const determineWords = (speech, words) => {
	if (words.toLowerCase().includes("how are you")) {
		speech.text = "I am fine, thank you!";
	} else if (words.toLowerCase().includes("who am i")) {
		speech.text = "I don't care!";
	} else if (words.toLowerCase().includes("how is the weather")) {
		speech.text = "Why do you care about that? You never go out!";
	} else if (words.toLowerCase().includes("do you love me")) {
		speech.text = "Why should I love you?";
	} else if (words.toLowerCase().includes("open facebook for me")) {
		speech.text = "Opening Facebook for you now!";
		window.open("https://www.facebook.com/");
	} else if (words.toLowerCase().includes("open google for me")) {
		speech.text = "Opening Google for you now!";
		window.open("https://www.google.bg/");
	}
}

button.addEventListener("click", () => {
    recognition.start();
})