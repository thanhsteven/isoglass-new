sass ./sass/main.scss ./style/main.css --watch
sass ./sass/home.scss ./style/home.css --watch
sass ./sass/categories.scss ./style/categories.css --watch

pug index.pug --watch --pretty --out HTML
pug about-us.pug --watch --pretty --out HTML
pug contact.pug --watch --pretty --out HTML
pug lythuytinh.pug --watch --pretty --out HTML

