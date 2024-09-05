pug index.pug --watch --pretty
sass ./sass/main.scss ./style/main.css --watch
sass ./sass/home.scss ./style/home.css --watch

pug aboutus.pug --watch --pretty

- Viết code mới thì làm sao đồng bộ lên được ?
- có 2 đồng bộ: server và load về local

- Các bước update code từ Local lên github

* git add . --> Update toàn bộ source code lên github
* gid commit -m "Mô tả ngắn"
* git push origin main --> git push (tên remote) + (tên Branch)
