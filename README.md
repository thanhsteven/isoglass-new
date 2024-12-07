<!-- - Convert to HTML - -->

pug index.pug --watch --pretty --out html
pug ./page/gioi-thieu.pug --watch --pretty --out html
pug ./page/lien-he.pug --watch --pretty --out html
pug ./page/chai-thuy-tinh.pug --watch --pretty --out html
pug ./page/ly-thuy-tinh.pug --watch --pretty --out html
pug ./page/chai-thuy-tinh-dung-ruou.pug --watch --pretty --out html

pug ./page/bai-san-pham.pug --watch --pretty --out html

pug ./page/blog.pug --watch --pretty --out html
pug ./page/bai-viet-mau.pug --watch --pretty --out html

<!-- - Convert to CSS - -->

sass ./sass/main.scss ./style/main.css --watch
sass ./sass/main-cate.scss ./style/main-cate.css --watch
sass ./sass/sub-cate.scss ./style/sub-cate.css --watch
sass ./sass/post.scss ./style/post.css --watch
sass ./sass/product.scss ./style/product.css --watch

sass ./sass/page/home.scss ./style/home.css --watch
sass ./sass/page/about-us.scss ./style/about-us.css --watch
sass ./sass/page/contact-us.scss ./style/contact-us.css --watch
sass ./sass/page/chai-thuy-tinh-cat.scss ./style/chai-thuy-tinh-cat.css --watch
sass ./sass/page/ly-thuy-tinh-cat.scss ./style/ly-thuy-tinh-cat.css --watch
sass ./sass/page/chai-thuy-tinh-dung-ruou.scss ./style/chai-thuy-tinh-dung-ruou.css --watch

<!-- - Blog CSS - -->

sass ./sass/blog.scss ./style/blog.css --watch
sass ./sass/post.scss ./style/post.css --watch
