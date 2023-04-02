let sentence = document.getElementById("sentence");
let textArea = document.getElementById("textarea");
let startBtn = document.getElementById("start-btn");
let doneBtn = document.getElementById("done-btn");
let result = document.getElementById("result");
let startTime, endTime;
let actualwords;
let flag = true;
let arr = [
  "She was riding on a high-speed train.",
  "The chic gangster liked to start the day with a pink scarf.",
  "The lake is a long way from here.",
  "Her daily goal was to improve on yesterday.",
  "She says she has the ability to hear the soundtrack of your life.",
  "Garlic ice-cream was her favorite.",
  "She was too short to see over the fence.",
  "Success is the sum of small efforts repeated day in and day out over time.",
  "The only way to do great work is to love what you do and believe in your mission.",
  "A hero is someone who has given his or her life to something bigger than oneself.",
  "Happiness is not something ready made. It comes from your own actions.",
  "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  "If you want to be happy, practice gratitude and kindness every day.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "The best way to find yourself is to lose yourself in the service of others.",
];

startBtn.addEventListener("click", function () {
  let getSentence = Math.floor(Math.random() * arr.length);
  sentence.innerHTML = arr[getSentence];
  sentence.style.display = "block";
  actualwords = arr[getSentence].split(" ");
  let date = new Date();
  startTime = date.getTime();
  textArea.disabled = false;
  startBtn.style.display = "none";
  doneBtn.style.display = "block";
  textArea.value = "";
  result.innerHTML = "";
  textArea.focus();
});

doneBtn.addEventListener("click", function () {
  doneBtn.style.display = "none";
  startBtn.style.display = "block";
  sentence.style.display = "none";
  let date = new Date();
  endTime = date.getTime();
  let userword = textArea.value.trim().split(" ");
  textArea.disabled = true;
  let words = errorcheck();
  let actualtime = (endTime - startTime) / 1000;
  let speed = Math.round((words / actualtime) * 60);
  if (textArea.value == "") {
    result.innerHTML = `Your Typing Speed is 0 words per minutes & you wrote 0 words & time taken ${actualtime} sec`;
  } else {
    result.innerHTML = `Your Typing Speed is ${speed} words per minutes & you wrote ${words} Correct words out of ${userword.length} Words and time taken ${actualtime} sec`;
  }
  function errorcheck() {
    let num = 0;
    for (let i = 0; i < userword.length; i++) {
      if (userword[i] === actualwords[i]) {
        num++;
      }
    }
    return num;
  }
});
