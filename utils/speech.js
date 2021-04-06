// Speech RECOGNITIONnition stuff
class SpeechRecognition {
  RECOGNITION;
  KEYWORD = null;
  COMMANDS = {};
  STATE = {
    RUNNING: false,
    ACTIVATED: false,
    ROTATE: 0,
  };

  constructor(commands = {}, keyword = null) {
    this.COMMANDS = commands;
    this.KEYWORD = keyword;

    console.log(this.KEYWORD);

    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    this.RECOGNITION = new window.SpeechRecognition();
    this.RECOGNITION.lang = "en-US";
    // Continous results or not
    this.RECOGNITION.continuous = true;
    this.RECOGNITION.interimResults = false;
  }

  START = () => {
    if (!this.STATE.RUNNING) {
      this.STATE.RUNNING = true;
      this.RECOGNITION.start();
      this.RECOGNITION.onresult = this.listenForActivation;
      this.RECOGNITION.onend = () => {
        // console.info("restarting");
        // Shouldn't end, restart.
        // Only restart if state is still running.
        if (this.STATE.RUNNING) this.RECOGNITION.start();
      };
    }
  };

  STOP = () => {
    if (this.STATE.RUNNING) {
      this.STATE.RUNNING = false;
      this.RECOGNITION.stop();
    }
  };

  listenForActivation = (res) => {
    const transcript = res.results[res.results.length - 1][0].transcript
      .toLowerCase()
      .trim();

    if (this.KEYWORD === null || this.STATE.ACTIVATED) {
      if (transcript === this.COMMANDS.PARTY) {
        console.log("party");
      }
    }
    // Listen for a keyword that we can do something with??
    else if (transcript.trim() === this.KEYWORD) {
      // Go into active mode
      // On the fly change the listener???
      this.STATE.ACTIVATED = true;
      document.body.style.backgroundColor = "hsl(120, 50%, 50%)";
      setTimeout(() => {
        document.body.style.backgroundColor = "hsl(210, 50%, 50%)";
        this.STATE.ACTIVATED = false;
      }, 10000);
    }
  };
}

const useSpeechRecongition = (commands, keyword) =>
  new SpeechRecognition(commands, keyword);

export default useSpeechRecongition;
