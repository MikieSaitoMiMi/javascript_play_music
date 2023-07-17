const audioSources = ["./digital-alarm-3-trial-151917.mp3", "./voice.wav"];
let index = 0;
let audioElement = document.getElementById("audio");

audioElement.addEventListener("ended", playAudio);

function playAudio() {
  if (audioElement.paused) {
    if (index === 0) {
      audioElement.src = audioSources[0];
      audioElement.loop = false;
    } else if (index === 1) {
      audioElement.src = audioSources[1];
      audioElement.loop = true;
    }
    audioElement.play();
    // 次の音声へ
    index = 1 - index;
  } else {
    audioElement.pause();
    // 停止ボタンが押されたらビーブー音に戻す
    index = 0;
  }
}
let play_element = document.getElementById("play");
let play_pause_checkbox = document.getElementById("play_pause_checkbox");
play_pause_checkbox.addEventListener("click", playAudio);
audioElement.src = audioSources[0];
