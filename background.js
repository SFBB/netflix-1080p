chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'injectScripts') {
        chrome.storage.sync.get(['use6Channels', 'setMaxBitrate', 'useVP9'], items => {
            chrome.scripting.executeScript({
                target: { tabId: sender.tab.id },
                func: (settings) => {
                    window.use6Channels = settings.use6Channels;
                    window.setMaxBitrate = settings.setMaxBitrate;
                    window.useVP9 = settings.useVP9;
                },
                args: [items]
            }).then(() => {
                chrome.scripting.executeScript({
                    target: { tabId: sender.tab.id },
                    files: ['netflix_max_bitrate.js']
                });
            });
        });
    }
});
