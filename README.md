# Render chính

pug index.pug --watch --pretty --out html
sass ./sass/main.scss ./style/main.css --watch

# TRang chủ

sass ./sass/page/home.scss ./style/home.css --watch

# TRang danh mục chính

pug ./view/page/binh-thuy-tinh.pug --watch --pretty --out html

pug ./view/page/chai-thuy-tinh.pug --watch --pretty --out html
pug ./view/page/ly-thuy-tinh.pug --watch --pretty --out html

sass ./sass/page/ly-thuy-tinh-cat.scss ./style/ly-thuy-tinh-cat.css --watch
sass ./sass/page/chai-thuy-tinh-cat.scss ./style/chai-thuy-tinh-cat.css --watch

# TRang danh mục con

pug ./view/page/chai-thuy-tinh-dung-ruou.pug --watch --pretty --out html
sass ./sass/page/chai-thuy-tinh-dung-ruou.scss ./style/chai-thuy-tinh-dung-ruou.css --watch

# TRang danh mục blog

pug ./view/page/blog.pug --watch --pretty --out html
sass ./sass/blog.scss ./style/blog.css --watch

# TRang bài viết mẫu - post

pug ./view/page/bai-viet-mau.pug --watch --pretty --out html
sass ./sass/post.scss ./style/post.css --watch

# TRang sản phẩm - product

pug ./view/page/bai-san-pham.pug --watch --pretty --out html
sass ./sass/product.scss ./style/product.css --watch

# TRang giới thiệu

pug ./view/page/gioi-thieu.pug --watch --pretty --out html
sass ./sass/page/about-us.scss ./style/about-us.css --watch

# TRang liên hệ

pug ./view/page/lien-he.pug --watch --pretty --out html
sass ./sass/page/contact-us.scss ./style/contact-us.css --watch

# không sử dụng nữa

sass ./sass/sub-cate.scss ./style/sub-cate.css --watch
sass ./sass/main-cat.scss ./style/main-cat.css --watch
