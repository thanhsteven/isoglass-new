<!-- - Convert to HTML - -->

pug index.pug --watch --pretty --out html
pug gioi-thieu.pug --watch --pretty --out html
pug lien-he.pug --watch --pretty --out html
pug chai-thuy-tinh.pug --watch --pretty --out html
pug ly-thuy-tinh.pug --watch --pretty --out html
pug chai-thuy-tinh-dung-ruou.pug --watch --pretty --out html

pug bai-san-pham.pug --watch --pretty --out html
pug in-logo-ly-thuy-tinh.pug --watch --pretty --out html

pug blog.pug --watch --pretty --out html
pug bai-viet-mau.pug --watch --pretty --out html

<!-- - Convert to CSS - -->

sass ./sass/layout/main.scss ./style/main.css --watch
sass ./sass/layout/main-cate.scss ./style/main-cate.css --watch
sass ./sass/layout/sub-cate.scss ./style/sub-cate.css --watch
sass ./sass/layout/post.scss ./style/post.css --watch
sass ./sass/layout/product-main.scss ./style/product.css --watch

sass ./sass/home.scss ./style/home.css --watch
sass ./sass/about-us.scss ./style/about-us.css --watch
sass ./sass/contact.scss ./style/contact.css --watch
sass ./sass/chai-thuy-tinh-cat.scss ./style/chai-thuy-tinh-cat.css --watch
sass ./sass/ly-thuy-tinh-cat.scss ./style/ly-thuy-tinh-cat.css --watch
sass ./sass/chai-thuy-tinh-dung-ruou.scss ./style/chai-thuy-tinh-dung-ruou.css --watch

<!-- - Blog CSS - -->

sass ./sass/layout/blog.scss ./style/blog.css --watch
sass ./sass/layout/post.scss ./style/post.css --watch
