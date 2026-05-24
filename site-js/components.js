/* JS for components across the Scratch site (e.g. banners, world map) */

(function() {
  function removeComponents() {
    let studentBanners = document.querySelectorAll('.student-deactivation-banner');
    
    for (var i = 0; i < studentBanners.length; i++) {
      studentBanners[i].remove();
    }
  }

  removeComponents();

  var observer = new MutationObserver(function(mutations) {
    removeComponents();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
