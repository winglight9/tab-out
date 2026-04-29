'use strict';

const toggle = document.getElementById('enabledToggle');
const openChromeNewtab = document.getElementById('openChromeNewtab');

async function loadState() {
  const { tabOutEnabled = true } = await chrome.storage.local.get('tabOutEnabled');
  toggle.checked = tabOutEnabled;
}

toggle.addEventListener('change', async () => {
  await chrome.storage.local.set({ tabOutEnabled: toggle.checked });
});

openChromeNewtab.addEventListener('click', () => {
  chrome.tabs.create({ url: 'chrome://newtab' });
});

loadState();
