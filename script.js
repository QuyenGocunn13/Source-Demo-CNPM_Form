// Thêm sự kiện lắng nghe cho form
document.getElementById("khao-sat-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định (gửi form)

    // Gửi form đến Netlify
    const form = event.target;
    const data = new FormData(form);
    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Ẩn form và hiển thị thông báo cảm ơn
            form.style.display = 'none';
            document.getElementById("thank-you-message").style.display = 'block';
        } else {
            throw new Error('Something went wrong');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});