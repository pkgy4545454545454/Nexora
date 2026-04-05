const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
    alert("Votre navigateur ne supporte pas la reconnaissance vocale.");
} else {
    const recognition = new SpeechRecognition();
    recognition.lang = "fr-FR";
    recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        console.log("Vous avez dit :", text);
        parler("Vous avez dit " + text);
    };

    function parler(message) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(message);
        synth.speak(utterance);
    }

    document.getElementById("start").addEventListener("click", () => {
        recognition.start();
    });
}