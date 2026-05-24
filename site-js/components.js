/* JS for components across the Scratch site (e.g. banners, world map) */

(function() {
  function removeComponents() {
    let studentBanners = document.querySelectorAll('.student-deactivation-banner');
    
    studentBanners.forEach(function(el) {
        el.remove('.student-deactivation-banner');
    }); 
  }

removeComponents();

  let observer = new MutationObserver(function() {
    removeComponents();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
