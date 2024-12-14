- Sửa lại CSS chỗ Danh mục nổi bật - Chai thuỷ tinh --> bị sai so với bản gốc
- Trường hợp nếu git pull bị lỗi thì cách tốt nhất là xoá hết các file trong source đi để clone lại từ trên git về từ đầu sẽ an toàn hơn
- Do cấu trúc thiết kế của git sẽ cần 1 thiết bị chính để kết nối và đẩy nó lên trên git, cho nên nếu 2 thiết bị chính thì sẽ dễ bị lỗi.
- Phím tắt hiển thị file ẩn .git là cmd + shift + .

- sidebar liên hệ --> là sidebar chung --> sử dụng cho danh mục cha và cả danh mục con --> để nó trong 1 file sidebar và use nó vào tất cả các trang danh mục (Cha và con).
  => Đã viết trong file sidebar.pug ở mục layout rồi -> include nó vào trong file layout danh mục cha đi.
  => CSS của sidebar này thì nằm trong sass/component vì là cái dùng đi dùng lại

- sidebar list --> chỉ sử dụng ở danh mục cha thôi, còn danh mục con thì không cần sử dụng --> viết thẳng CSS trong file danh-muc-cha là được.

- Nghiên cứu custome sitemap wordpress

# Ngày 9/12/204

- Trang quà tặng doanh nghiệp --> Gỡ xuống hết tất cả các hình trên url --> Xoá hẳn đi trong hosting -> xoá luôn
- Chỉ áp dụng các từ khoá này:

* quà tặng doanh nghiệp
* qua tang doanh nghiep

- Title, keyword: Quà tặng doanh nghiệp --> Ưu tiên: quà tặng doanh nghiệp, qua tang doanh nghiep, quà tặng doanh nghiệp bộ ly thuỷ tinh.
- Dscription: Quà tặng doanh nghiệp là bộ ly thuỷ tinh iSGOIFT, Địa chỉ 26 Số 12, Hiệp Bình Chánh, Thủ Đức, Hồ Chí Minh, Việt Nam, Hotline: 0963187517, website: isogift.vn
- comment : y chang description
- Tag: quatangdoanhnghiep
- Author: isogift.vn
- Copywrite: isogift.vn
- Tên hình (url hình): qua-tang-doanh-nghiep-1,...

- Bổ sung thêm trong sitemap-images tất cả các hình trong url qua-tang-doanh-nghiep đó
- url: https://isogift.vn/images-sitemap.xml
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
  <loc>https://isogift.vn/qua-tang-doanh-nghiep.html</loc>
  <image:image>
  <image:loc>https://isogift.vn/wp-content/uploads/2024/10/bo-qua-tang-ly-thuy-tinh-1.jpg</image:loc>
  <image:caption>Quà tặng doanh nghiệp</image:caption>
  <image:title>Quà tặng doanh nghiệp</image:title>
  <image:license>https://isogift.vn</image:license>
  <image:geo_location>26 Số 12, Hiệp Bình Chánh, Thủ Đức, Hồ Chí Minh, Việt Nam</image:geo_location>
  </image:image>

  <image:image>
  <image:loc>https://isogift.vn/wp-content/uploads/2024/10/bo-qua-tang-ly-thuy-tinh-1.jpg</image:loc>
  <image:caption>Quà tặng doanh nghiệp</image:caption>
  <image:title>Quà tặng doanh nghiệp</image:title>
  <image:license>https://isogift.vn</image:license>
  <image:geo_location>26 Số 12, Hiệp Bình Chánh, Thủ Đức, Hồ Chí Minh, Việt Nam</image:geo_location>
  </image:image>  
  </url>
  </urlset>

# Ngày 14/12/2024

- Url: qua-tang-doanh-nghiep.html
- Layout trang sản phẩm isogift giống với sản phẩm isoglass
- H1 của sản phẩm và title y chang nhau trong trang sản phẩm. Phần mô tả sản phẩm phải có chứa từ khoá "quà tặng doanh nghiệp" đầu tiên. Phần sapo cũng vậy, phần content dài -> đoạn text đầu tiên phải có từ khoá quà tặng doanh nghiệp đầu tiên vào luôn.
- Phần hình ảnh bên dưới Bộ ly thuỷ tinh làm quà tặng --> thay thành block SKU của sản phẩm (cần 20 SKU).
- Hình SKU sản phẩm là hình thumbnail của chính sản phẩm đó. Trong hình thumbnail sản phẩm phải có đủ 3 thành phần: url hình (tên file hình), alt, title -> hiện tại đang thiếu "title" trong hình.
- Trong url quà tặng doanh nghiệp --> trong thẻ head --> chèn thêm 20 dòng code hình thumbnail tương ứng với hình thumbnail của 20 SKU trên.
- Ví dụ: chèn đoạn code này vào thẻ head:
<meta property="og:image" content="https://isogift.vn/wp-content/uploads/2024/09/qua-tang-doanh-nghiep-isogift.vn_.jpg" />
<meta property="og:image" content="https://isogift.vn/wp-content/uploads/2024/09/qua-tang-doanh-nghiep-2.jpg" />

# lưu ý: Tên hình ảnh trong thumbnail phải có từ khoá "qua-tang-doanh-nghiep" đứng đầu --> tấm hình thumbnail của sản phẩm cũng phải có từ đó --> và phải là 1 hình duy nhất --> không tách ra làm 2 hình khác nhau nhé !

# Lưu ý: khi đặt url cho SKU --> phải có từ khoá "qua-tang-doanh-nghiep" đứng đầu tiên.

- ví dụ: Tên sản phẩm (h1) phải có từ khoá đứng đầu, vd: Quà tặng doanh nghiệp - Bộ ly thuỷ tinh 6 cái

- SKU cho những sản phẩm như sau:

* Quà tặng doanh nghiệp cuối năm - Bộ ly ....
* Quà tặn doanh nghiệp 20/10 - Bộ ly...
* Quà tặn doanh nghiệp Year end Party - Bộ ly...
* Quà tặn doanh nghiệp cho khách hàng - Bộ ly...
* Quà tặn doanh nghiệp VIP - Bộ ly...

* Lấy lại các h2 của tab quà tặng cũ --> đem vô đặt làm tên sản phẩm
