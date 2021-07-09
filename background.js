chrome.runtime.onInstalled.addListener(async () => {
    let url = chrome.runtime.getURL("Popup.html");
    let tab = await chrome.tabs.create({ url });
    console.log(`Created tab ${tab.id}`);
});
