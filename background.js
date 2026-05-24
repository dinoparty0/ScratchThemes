chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    if (tab.url.includes("scratch.mit.edu") || tab.url.includes("scratch.org")) {
      
      chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: ["site-css/components.css"]
      })
      .then(() => console.log("done css"))
      .catch((err) => console.error("error with css:", err));

      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["site-js/components.js"]
      })
      .then(() => console.log("done js"))
      .catch((err) => console.error("error with js:", err));
      
    }
  }
});
