function injectAssets(tabId) {
  chrome.tabs.get(tabId, (tab) => {
    if (tab.url && (tab.url.includes("scratch.mit.edu") || tab.url.includes("scratch.org"))) {
      chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: ["site-css/components.css"]
      }).catch((err) => console.log("css error:", err));

      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["site-js/components.js"]
      }).catch((err) => console.log("js error:", err));
    }
  });
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    injectAssets(tabId);
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  injectAssets(activeInfo.tabId);
});
