<!-- - Convert to HTML - -->

pug index.pug --watch --pretty --out html
pug ve-chung-toi.pug --watch --pretty --out html
pug lien-he.pug --watch --pretty --out html
pug ly-thuy-tinh.pug --watch --pretty --out html
pug chai-thuy-tinh.pug --watch --pretty --out html
pug trang-san-pham.pug --watch --pretty --out html
pug in-logo-ly-thuy-tinh.pug --watch --pretty --out html

<!-- - Convert to CSS - -->

sass ./sass/main.scss ./style/main.css --watch
sass ./sass/trang-chu.scss ./style/trang-chu.css --watch
sass ./sass/trang-gioi-thieu.scss ./style/trang-gioi-thieu.css --watch
sass ./sass/trang-lien-he.scss ./style/trang-lien-he.css --watch
sass ./sass/tran-san-pham.scss ./style/tran-san-pham.css --watch

sass ./sass/danh-muc-cha.scss ./style/danh-muc-cha.css --watch
sass ./sass/danh-muc-con.scss ./style/danh-muc-con.css --watch

sass ./sass/ly-thuy-tinh-cat.scss ./style/ly-thuy-tinh-cat.css --watch
sass ./sass/chai-thuy-tinh-cat.scss ./style/chai-thuy-tinh-cat.css --watch
