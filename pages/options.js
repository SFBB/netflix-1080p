const saveOptions = () => {
    const use6Channels = document.getElementById('use6Channels').checked;
    const setMaxBitrate = document.getElementById('setMaxBitrate').checked;
    const useVP9 = document.getElementById('useVP9').checked;

    chrome.storage.sync.set({
        use6Channels,
        setMaxBitrate,
        useVP9
    }, () => {
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
            status.textContent = '';
        }, 750);
    });
};

const restoreOptions = () => {
    chrome.storage.sync.get({
        use6Channels: false,
        setMaxBitrate: false,
        useVP9: false
    }, items => {
        document.getElementById('use6Channels').checked = items.use6Channels;
        document.getElementById('setMaxBitrate').checked = items.setMaxBitrate;
        document.getElementById('useVP9').checked = items.useVP9;
    });
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);