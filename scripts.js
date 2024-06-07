document.addEventListener("DOMContentLoaded", function() {
    const cartCount = document.getElementById("cart-count");
    const productImages = document.querySelectorAll("#list-products .item img");

    // Kiểm tra xem có dữ liệu giỏ hàng đã được lưu trữ trong Local Storage chưa
    let cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];

    // Cập nhật số lượng sản phẩm trong giỏ hàng từ dữ liệu đã lưu
    cartCount.textContent = cartItems.length;

    // Đặt sự kiện click cho từng hình ảnh sản phẩm
    productImages.forEach(image => {
        image.addEventListener("click", function() {
            // Lấy thông tin sản phẩm từ thuộc tính data
            const productName = this.getAttribute("data-name");
            const productPrice = this.getAttribute("data-price");

            // Thêm thông tin sản phẩm vào mảng giỏ hàng
            cartItems.push({ name: productName, price: productPrice });

            // Cập nhật số lượng sản phẩm trong giỏ hàng
            cartCount.textContent = cartItems.length;

            // Lưu lại thông tin sản phẩm trong giỏ hàng vào Local Storage
            localStorage.setItem("cartItems", JSON.stringify(cartItems));

            // Hiển thị thông báo khi thêm sản phẩm vào giỏ hàng
            alert(`Đã thêm ${productName} vào giỏ hàng. Tổng giá: ${productPrice}`);

            // Ngăn chặn hành động mặc định của thẻ a
            event.preventDefault();
        });
    });
});
