# Tab Session Saver

Tab Session Saver is a lightweight, cross‑browser extension that helps you manage large numbers of open tabs without cluttering your bookmarks. With one click, you can capture all the URLs from your current browser window and save them into a custom folder. These folders act as temporary collections, making it easy to organize your browsing sessions by topic, project, or workflow.

## ✨ Features
- 🗂️ Save all open tabs into a named folder
- 🔗 Expand folders to view URLs and reopen them instantly
- ❌ Delete individual URLs or entire folders
- ⚡ Local storage only — no syncing or permanent bookmarks
- 🌍 Works on Chrome, Firefox, and Edge (WebExtensions API)

## 📦 Installation (Developer Mode)
1. Clone or download this repository.
2. Open your browser’s extension management page:
   - Chrome: `chrome://extensions`
   - Edge: `edge://extensions`
   - Firefox: `about:debugging#/runtime/this-firefox`
3. Enable **Developer Mode**.
4. Click **Load Unpacked** (or **Load Temporary Add‑on** in Firefox).
5. Select the project folder (`tab-session-saver`).
6. The extension icon should now appear in your toolbar.

## 🛠️ Usage
1. Open multiple tabs in your browser.
2. Click the **Tab Session Saver** icon.
3. Enter a folder name and click **Save Tabs**.
4. Expand the folder to view saved URLs.
5. Delete URLs or folders when no longer needed.

## 📂 Project Structure
tab-session-saver/ ├── manifest.json ├── background.js ├── popup.html ├── popup.js ├── styles.css ├── icons/ │   ├── icon16.png │   ├── icon48.png │   └── icon128.png
