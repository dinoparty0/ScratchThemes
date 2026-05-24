chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
        if (tab.url.includes("scratch.mit.edu") || tab.url.includes("scratch.org")) {
      
      chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: ["site-css/components.css"]
      })
      .then(() => {
        console.log(`done`);
      })
      .catch((err) => {
        console.error("error:", err);
      });
    }
  }
});
