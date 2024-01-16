document.addEventListener('DOMContentLoaded', function () {
    var iframeAudio = document.getElementById('iframeAudio');
  
    // Function to restart the audio when it ends
    function restartAudio() {
      iframeAudio.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  
    // Event listener to restart the audio when it ends
    iframeAudio.addEventListener('ended', function () {
      restartAudio();
    });
  
    // Initial play to start the loop
    restartAudio();
  });
  