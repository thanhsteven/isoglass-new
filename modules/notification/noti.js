const arrNoti = [
  {
    avatar: "../inc/modules/notification/images/khach-hang-1.jpg",
    name: "Nguyễn Văn An",
    title: "Sản phẩm rất tuyệt vời, giao hàng nhanh chóng!",
    time: "5 phút trước",
  },
  {
    avatar: "../inc/modules/notification/images/khach-hang-1.jpg",
    name: "Trần Thị Bích",
    title: "Dịch vụ chăm sóc khách hàng rất chuyên nghiệp.",
    time: "8 phút trước",
  },
  {
    avatar: "../inc/modules/notification/images/khach-hang-1.jpg",
    name: "Lê Minh Khôi",
    title: "Tôi sẽ giới thiệu bạn bè ủng hộ shop!",
    time: "12 phút trước",
  },
  {
    avatar: "../inc/modules/notification/images/khach-hang-1.jpg",
    name: "Phạm Thị Hoa",
    title: "Chất lượng sản phẩm đúng như quảng cáo, rất đáng tiền.",
    time: "15 phút trước",
  },
  {
    avatar: "../inc/modules/notification/images/khach-hang-1.jpg",
    name: "Hoàng Nam",
    title: "Shop giao hàng đúng hẹn, rất đáng tin cậy.",
    time: "20 phút trước",
  },
  {
    avatar: "../inc/modules/notification/images/khach-hang-1.jpg",
    name: "Nguyễn Thảo Linh",
    title: "Tôi rất hài lòng, sẽ tiếp tục ủng hộ shop lần sau!",
    time: "30 phút trước",
  },
];

// ! Gọi hàm điều khiển
// Gọi hàm controlNotification() ra
// Truyền biến vào: True là bật, Flase là tắt
// Truyền vị trí của noti: topleft (mặc định), topright, bottomleft, bottomright

controlNotification(true, "bottomright", 4000);

// * Xác định vị trí của Noti
const positionNoti = ["topleft", "topright", "bottomleft", "bottomright"];
// * Hàm điều khiển
function controlNotification(
  onOff = false,
  strPos = "topleft",
  timeNoti = 4000
) {
  if (onOff == false) {
    clearInterval(timer);
  } else {
    let lastRandomNoti;
    // * Hàm hoạt động cứ sau 4s chạy 1 lần
    const timer = setInterval(function () {
      let item = document.querySelector(".noti");
      if (item) {
        item.parentNode.removeChild(item);
      } else {
        // Lấy ngẫu nhiên 1 index trong array Noti
        let randomNoti = arrNoti[Math.floor(Math.random() * arrNoti.length)];
        if (lastRandomNoti !== randomNoti) {
          createNotification(
            randomNoti.avatar,
            randomNoti.name,
            randomNoti.title,
            randomNoti.time,
            strPos
          );
        }
        // Gán biến vừa chạy vào biến sắp chạy
        lastRandomNoti == randomNoti;
      }
    }, timeNoti);
  }
}

// * Hàm khởi tạo HTML Notification
function createNotification(avatar, name, title, time, position) {
  const tplNoti = `
    <div class="noti ${position}">
      <div class="noti-avatar">
        <img src="${avatar}" alt="${name}">
      </div>
      <div class="noti-content">
        <p class="noti-title">${name}</p>
        <p class="noti-paragraph">${title}</p>
        <span class="noti-time">${time}</span>
      </div>
    </div>`;
  document.body.insertAdjacentHTML("afterend", tplNoti);
}
