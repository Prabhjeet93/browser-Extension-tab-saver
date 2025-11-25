chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "saveTabs") {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      const urls = tabs.map(tab => tab.url);
      chrome.storage.local.get("folders", (data) => {
        const folders = data.folders || {};
        folders[request.folderName] = urls;
        chrome.storage.local.set({ folders }, () => {
          sendResponse({ success: true });
        });
      });
    });
    return true; // keep message channel open
  }
});