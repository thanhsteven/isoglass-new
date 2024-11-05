<!-- - Convert to CSS - -->

sass ./sass/main.scss ./style/main.css --watch
sass ./sass/home.scss ./style/home.css --watch
sass ./sass/categories.scss ./style/categories.css --watch
sass ./sass/lythuytinh.scss ./style/lythuytinh.css --watch

<!-- - Convert to HTML - -->

pug index.pug --watch --pretty --out HTML
pug about-us.pug --watch --pretty --out HTML
pug contact.pug --watch --pretty --out HTML
pug lythuytinh.pug --watch --pretty --out HTML
