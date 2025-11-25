# Tab Session Saver - Installation & Publishing Guide

## 📁 File Structure

Create the following folder structure:

```
tab-session-saver/
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## 🎨 Creating Icons

You need three icon sizes. You can:
1. **Use an online icon generator** like [favicon.io](https://favicon.io) or [icons8.com](https://icons8.com)
2. **Create simple icons** using any image editor
3. **Use placeholder icons** initially - simple colored squares with "TS" text

Quick icon creation with any image editor:
- Create a 128x128px image with a solid color background
- Add white text "TS" (Tab Saver) in the center
- Save as PNG
- Resize copies to 48x48px and 16x16px

## 🚀 Installation Methods

### Method 1: Developer Mode (Testing - Chrome/Edge)

**For Chrome:**
1. Download/create all files in a folder
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right)
4. Click "Load unpacked"
5. Select your `tab-session-saver` folder
6. Extension is now installed!

**For Edge:**
1. Go to `edge://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select your extension folder

### Method 2: Developer Mode (Testing - Firefox)

1. Open Firefox and go to `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. Navigate to your extension folder and select `manifest.json`
4. Extension is active until you restart Firefox

**Note:** For permanent Firefox installation, you need to sign it (see publishing section).

## 📦 Publishing to Stores

### Publishing to Chrome Web Store (Chrome & Edge)

**Requirements:**
- Google account
- One-time $5 developer registration fee
- ZIP file of your extension

**Steps:**

1. **Prepare Package:**
   ```bash
   # Create a ZIP of your extension folder (excluding hidden files)
   zip -r tab-session-saver.zip tab-session-saver/ -x "*/.*"
   ```

2. **Register as Developer:**
   - Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
   - Pay the $5 registration fee
   - Complete your developer profile

3. **Upload Extension:**
   - Click "New Item"
   - Upload your ZIP file
   - Fill in the required information:
     - **Title:** Tab Session Saver
     - **Description:** Save and organize your open browser tabs into folders. Perfect for managing multiple projects without losing your work. Save sessions temporarily, restore them anytime, and delete when done.
     - **Category:** Productivity
     - **Language:** English
     - **Screenshots:** Take 3-5 screenshots (1280x800 or 640x400)
     - **Icon:** Upload your 128x128 icon
     - **Privacy Policy:** If you're not collecting data, use: "This extension does not collect, store, or transmit any user data. All tab information is stored locally on your device."

4. **Submit for Review:**
   - Review takes 1-3 days typically
   - You'll receive email notification when approved

5. **Share Your Extension:**
   - After approval, you'll get a URL like: `https://chrome.google.com/webstore/detail/[extension-id]`
   - This works for both Chrome and Edge users!

### Publishing to Firefox Add-ons (AMO)

**Requirements:**
- Firefox account (free)
- No registration fee
- ZIP file of your extension

**Steps:**

1. **Create Account:**
   - Go to [Firefox Add-on Developer Hub](https://addons.mozilla.org/developers/)
   - Create a free account

2. **Prepare Package:**
   ```bash
   zip -r tab-session-saver-firefox.zip tab-session-saver/ -x "*/.*"
   ```

3. **Submit Add-on:**
   - Click "Submit a New Add-on"
   - Upload your ZIP file
   - Choose "On this site" for distribution
   - Fill in metadata (similar to Chrome Web Store)
   - Add screenshots (up to 10 images)

4. **Review Process:**
   - Automated review (instant for basic extensions)
   - Manual review if flagged (1-7 days)
   - You'll be notified via email

5. **Share Your Add-on:**
   - URL format: `https://addons.mozilla.org/firefox/addon/[addon-name]/`

## 🔧 Pre-Publishing Checklist

Before submitting to any store:

- [ ] Test extension thoroughly in target browser
- [ ] All icons are present and correct sizes
- [ ] manifest.json has no errors
- [ ] Privacy policy written (if required)
- [ ] Screenshots prepared (show key features)
- [ ] Description is clear and compelling
- [ ] Version number is 1.0.0 for initial release
- [ ] Test with multiple tabs/URLs
- [ ] Test delete functionality
- [ ] Test folder creation with special characters

## 📸 Screenshot Recommendations

Take screenshots showing:
1. Main popup with "Save Current Session" interface
2. Saved sessions list with folders
3. Expanded folder showing saved URLs
4. Opening saved tabs (multiple browser tabs)
5. Delete confirmation or management

## 🌐 Distribution URLs

Once published, users can install from:

**Chrome/Edge:**
```
https://chrome.google.com/webstore/detail/[your-extension-id]
```

**Firefox:**
```
https://addons.mozilla.org/firefox/addon/[your-addon-name]/
```

## 💡 Tips for Success

1. **Good Description:** Clearly explain the use case (managing temporary tabs)
2. **Keywords:** Include terms like "tab manager", "session saver", "tab organizer", "productivity"
3. **Screenshots:** Show the extension in action
4. **Privacy:** Emphasize that data stays local
5. **Updates:** Be responsive to user feedback
6. **Versioning:** Follow semantic versioning (1.0.0, 1.0.1, 1.1.0, etc.)

## 🆘 Troubleshooting

**"Manifest file is missing or unreadable"**
- Check JSON syntax in manifest.json
- Ensure no trailing commas

**"Icons not found"**
- Verify icon files exist in icons/ folder
- Check file paths in manifest.json match actual files

**Extension not loading tabs**
- Check permissions in manifest.json
- Verify tabs permission is granted

**Firefox temporary add-on disappears**
- This is normal - temporary add-ons only last until browser restart
- For permanent installation, publish to AMO

## 📝 Version Updates

When updating your extension:

1. Increment version number in manifest.json
2. Create new ZIP file
3. Upload to developer dashboard
4. Add changelog notes
5. Submit for review

## 🎉 Next Steps After Publishing

1. **Promote:** Share on social media, Reddit (r/chrome, r/firefox), ProductHunt
2. **Collect Feedback:** Monitor reviews and ratings
3. **Iterate:** Add features based on user requests
4. **Support:** Respond to user questions

## 📞 Support Resources

- **Chrome Web Store:** [Developer Support](https://developer.chrome.com/docs/webstore/)
- **Firefox Add-ons:** [Developer Hub](https://extensionworkshop.com/)
- **General:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)

---

## Quick Start Summary

1. **Create files** → Follow file structure above
2. **Add icons** → Three PNG files (16px, 48px, 128px)
3. **Test locally** → Load unpacked in browser
4. **ZIP files** → Package your extension
5. **Register** → Chrome ($5) or Firefox (free)
6. **Submit** → Upload ZIP and fill metadata
7. **Wait** → Review takes 1-3 days
8. **Share** → Get your extension URL and distribute!

Good luck with your extension! 🚀