<!-- - Convert to HTML - -->

pug index.pug --watch --pretty --out html
pug lythuytinh.pug --watch --pretty --out html
pug chaithuytinh.pug --watch --pretty --out html
pug about-us.pug --watch --pretty --out html
pug contact.pug --watch --pretty --out html
pug product-example.pug --watch --pretty --out html

<!-- - Convert to CSS - -->

sass ./sass/main.scss ./style/main.css --watch
sass ./sass/home.scss ./style/home.css --watch
sass ./sass/lythuytinh.scss ./style/lythuytinh.css --watch
sass ./sass/chaithuytinh.scss ./style/chaithuytinh.css --watch
sass ./sass/categories.scss ./style/categories.css --watch
sass ./sass/product.scss ./style/product.css --watch
