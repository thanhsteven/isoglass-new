- Sửa lại CSS chỗ Danh mục nổi bật - Chai thuỷ tinh --> bị sai so với bản gốc
- Trường hợp nếu git pull bị lỗi thì cách tốt nhất là xoá hết các file trong source đi để clone lại từ trên git về từ đầu sẽ an toàn hơn
- Do cấu trúc thiết kế của git sẽ cần 1 thiết bị chính để kết nối và đẩy nó lên trên git, cho nên nếu 2 thiết bị chính thì sẽ dễ bị lỗi.
- Phím tắt hiển thị file ẩn .git là cmd + shift + .

- sidebar liên hệ --> là sidebar chung --> sử dụng cho danh mục cha và cả danh mục con --> để nó trong 1 file sidebar và use nó vào tất cả các trang danh mục (Cha và con).
  => Đã viết trong file sidebar.pug ở mục layout rồi -> include nó vào trong file layout danh mục cha đi.
  => CSS của sidebar này thì nằm trong sass/component vì là cái dùng đi dùng lại

- sidebar list --> chỉ sử dụng ở danh mục cha thôi, còn danh mục con thì không cần sử dụng --> viết thẳng CSS trong file danh-muc-cha là được.

