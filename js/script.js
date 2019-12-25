$(document).ready(function () {

    // Load JSON file
    let openingAnimWindow = document.querySelector('#openingLottie');
    let openingAnimData = {
      container: openingAnimWindow,
      animType: 'svg',
      loop: true,
      prerender: true,
      autoplay: true,
      // path: 'json/download-icon.json'
      path: 'https://assets8.lottiefiles.com/packages/lf20_HLR54R.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);
  
  
    $('#lottie-start').click(function () {
      openingAnim.play();
    });
  
    $('#lottie-pause').click(function () {
      openingAnim.pause();
    });
  
    $('#lottie-stop').click(function () {
      openingAnim.stop();
    });
  
  });