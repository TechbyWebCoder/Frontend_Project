const urlInput = document.getElementById("urlInput");
const addBookmarkButton = document.getElementById("addBookmark");
const deleteAllButton = document.getElementById("deleteAll");
const bookmarkList = document.getElementById("bookmarkList");

// Function to validate URLs
function isValidURL(url) {
    const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    return pattern.test(url);
}

// Event listener for adding a bookmark
addBookmarkButton.addEventListener("click", () => {
    const url = urlInput.value.trim();
    if (isValidURL(url)) {
        const bookmarkItem = document.createElement("li");
        bookmarkItem.classList.add("bookmark-item");
        bookmarkItem.innerHTML = `
            <a href="${url}" target="_blank">${url}</a>
            <div class="buttons">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>`;
        bookmarkList.appendChild(bookmarkItem);
        urlInput.value = "";
        addEditBookmarkListener(bookmarkItem);
        addDeleteBookmarkListener(bookmarkItem);
    } else {
        alert("Please enter a valid URL (http:// or https://).");
    }
});

// Event listener for deleting all bookmarks
deleteAllButton.addEventListener("click", () => {
    while (bookmarkList.firstChild) {
        bookmarkList.removeChild(bookmarkList.firstChild);
    }
});

// Event listener for editing bookmarks
function addEditBookmarkListener(bookmarkItem) {
    const editButton = bookmarkItem.querySelector(".edit");
    const bookmarkLink = bookmarkItem.querySelector("a");
    editButton.addEventListener("click", () => {
        const newURL = prompt("Edit the URL:", bookmarkLink.getAttribute("href"));
        if (newURL && isValidURL(newURL)) {
            bookmarkLink.setAttribute("href", newURL);
            bookmarkLink.innerHTML = newURL;
        } else if (newURL) {
            alert("Please enter a valid URL (http:// or https://).");
        }
    });
}

// Event listener for deleting a bookmark
function addDeleteBookmarkListener(bookmarkItem) {
    const deleteButton = bookmarkItem.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        bookmarkItem.remove();
    });
}
