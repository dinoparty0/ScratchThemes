chrome.action.onClicked.addListener((tab) => {
  if (tab.url?.startsWith('http')) {
    
    chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["imports.css"]
    })
    .then(() => console.log("done"))
    .catch((err) => console.error("failed:", err));

  }
});
