document.addEventListener("DOMContentLoaded", () => {
    const addBookmarkBtn = document.getElementById("addBookmarkBtn");
    const modal = document.getElementById("bookmarkModal");
    const closeModal = document.querySelector(".close");
    const saveBookmarkBtn = document.getElementById("saveBookmark");
    const bookmarkNameInput = document.getElementById("bookmarkName");
    const bookmarkURLInput = document.getElementById("bookmarkURL");
    const bookmarkList = document.getElementById("bookmarkList");

    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    function renderBookmarks() {
        bookmarkList.innerHTML = "";
        bookmarks.forEach((bookmark, index) => {
            const div = document.createElement("div");
            div.classList.add("bookmark");
            div.innerHTML = `
                <a href="${bookmark.url}" target="_blank">🌐 ${bookmark.name}</a>
                <button class="delete-btn" onclick="deleteBookmark(${index})">✖</button>
            `;
            bookmarkList.appendChild(div);
        });
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }

    addBookmarkBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    saveBookmarkBtn.addEventListener("click", () => {
        const name = bookmarkNameInput.value.trim();
        const url = bookmarkURLInput.value.trim();

        if (name && url) {
            bookmarks.push({ name, url });
            renderBookmarks();
            modal.style.display = "none";
            bookmarkNameInput.value = "";
            bookmarkURLInput.value = "";
        }
    });

    function renderBookmarks() {
        bookmarkList.innerHTML = "";
        bookmarks.forEach((bookmark, index) => {
            const div = document.createElement("div");
            div.classList.add("bookmark");
    
            const link = document.createElement("a");
            link.href = bookmark.url;
            link.target = "_blank";
            link.textContent = `🌐 ${bookmark.name}`;
    
            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete-btn");
            deleteBtn.textContent = "✖";
            deleteBtn.addEventListener("click", () => {
                deleteBookmark(index);
            });
    
            div.appendChild(link);
            div.appendChild(deleteBtn);
            bookmarkList.appendChild(div);
        });
    
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
    
    function deleteBookmark(index) {
        bookmarks.splice(index, 1);
        renderBookmarks();
    }
    
    renderBookmarks();
});

