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
  
    window.deleteBookmark = (index) => {
      bookmarks.splice(index, 1);
      renderBookmarks();
    };
  
    renderBookmarks();
  });
  const products = [
    {
      id: 1,
      name: "Laptop Dell XPS 15",
      price: 35990000,
      image:
        "https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=Ileg6QdLFs2iTA&pid=ImgRaw&r=0",
      description:
        "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.",
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      price: 32990000,
      image:
        "https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain",
      description:
        "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.",
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      price: 28990000,
      image:
        "https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain",
      description:
        "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.",
    },
    {
      id: 4,
      name: "Tai nghe Sony WH-1000XM5",
      price: 7990000,
      image:
        "https://sony.scene7.com/is/image/sonyglobalsolutions/17-12?$large360ViewerImage$",
      description:
        "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.",
    },
    {
      id: 5,
      name: "Apple Watch Series 9",
      price: 11990000,
      image:
        "https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all",
      description:
        "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
    },
    {
      id: 6,
      name: "Loa JBL Charge 5",
      price: 3990000,
      image:
        "https://hdradio.vn/upload/hinhanh/loa-di-dong/jbl/boombox/loa-jbl-boombox-mau-xanh-reu-tai-hdradio-2ccc.jpg",
      description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.",
    },
  ];
  
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  
  function displayProducts(filteredProducts) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    if (filteredProducts.length === 0) {
      productList.innerHTML = "<p>Không tìm thấy sản phẩm nào!</p>";
      return;
    }
    filteredProducts.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="product-info">
            <h5>${product.name}</h5>
            <p>${product.description}</p>
            <p><strong>${product.price.toLocaleString()} VNĐ</strong></p>
            <button class="buy-btn">Mua ngay</button>
          </div>
        `;
      productList.appendChild(productDiv);
    });
  }
  
  function searchProduct() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    const filtered = storedProducts.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    displayProducts(filtered);
  }
  
  displayProducts(JSON.parse(localStorage.getItem("products")));
  