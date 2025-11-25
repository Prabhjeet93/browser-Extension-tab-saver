document.getElementById("saveBtn").onclick = () => {
  const folderName = document.getElementById("folderName").value.trim();
  if (!folderName) return;

  chrome.runtime.sendMessage({ action: "saveTabs", folderName }, (response) => {
    if (response && response.success) {
      loadFolders(); // reload after saving
    } else {
      console.error("Save failed");
    }
  });
};

function loadFolders() {
  chrome.storage.local.get({ folders: {} }, (data) => {
    const container = document.getElementById("folders");
    container.innerHTML = "";

    for (const [name, urls] of Object.entries(data.folders)) {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${name}</strong> 
        <button onclick="deleteFolder('${name}')">Delete</button><br/>`;

      urls.forEach((url, index) => {
        const link = document.createElement("a");
        link.href = url;
        link.textContent = url;
        link.target = "_blank";

        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.onclick = () => deleteURL(name, index);

        div.appendChild(link);
        div.appendChild(delBtn);
        div.appendChild(document.createElement("br"));
      });

      container.appendChild(div);
    }
  });
}

function deleteFolder(name) {
  chrome.storage.local.get({ folders: {} }, (data) => {
    delete data.folders[name];
    chrome.storage.local.set({ folders: data.folders }, loadFolders);
  });
}

function deleteURL(folderName, index) {
  chrome.storage.local.get({ folders: {} }, (data) => {
    if (data.folders[folderName]) {
      data.folders[folderName].splice(index, 1);
      chrome.storage.local.set({ folders: data.folders }, loadFolders);
    }
  });
}

loadFolders();