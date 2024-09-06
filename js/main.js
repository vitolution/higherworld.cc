document.addEventListener("DOMContentLoaded", (event) => {
  let all_vids = document.querySelectorAll('video');

  all_vids.forEach(vid => {
      vid.addEventListener('click', () => {
          vid.play();
      });
  });
});