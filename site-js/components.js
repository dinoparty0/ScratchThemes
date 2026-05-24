/* JS for components across the Scratch site (e.g. banners, world map) */

function removeComponents() {
const studentBanner = document.querySelectorAll('.student-deactivation-banner');

studentBanner.forEach(function(el) {
  el.remove('.student-deactivation-banner');
  });
  
}

removeComponents();

const observer = new MutationObserver(function() {
  removeComponents();
});

observer.observe(document.body, {
 childList: true,
 subtree: true
});
