document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      img: "./assets/images/avatar-mark-webber.png",
      name: "Mark Webber",
      action: "reacted to your recent post",
      postName: "My first tournament today!",
      time: "1m ago",
      privateMessage: "",
      isNew: true
    },
    {
      img: "./assets/images/avatar-angela-gray.png",
      name: "Angela Gray",
      action: "followed you",
      postName: "",
      time: "5m ago",
      privateMessage: "",
      isNew: true
    },
    {
      img: "./assets/images/avatar-jacob-thompson.png",
      name: "Jacob Thompson",
      action: "has joined your group",
      postName: "Chess Club",
      time: "1 day ago",
      privateMessage: "",
      isNew: true
    },
    {
      img: "./assets/images/avatar-rizky-hasanuddin.png",
      name: "Rizky Hasanuddin",
      action: "sent you a private message",
      postName: "",
      time: "5 days ago",
      privateMessage:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      isNew: false
    },
    {
      img: "./assets/images/avatar-kimberly-smith.png",
      name: "Kimberly Smith",
      action: "commented on your picture",
      postName: "",
      time: "1 week ago",
      privateMessage: "",
      isNew: false
    },
    {
      img: "./assets/images/avatar-nathan-peterson.png",
      name: "Nathan Peterson",
      action: "reacted to your recent post",
      postName: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
      privateMessage: "",
      isNew: false
    },
    {
      img: "./assets/images/avatar-anna-kim.png",
      name: "Anna Kim",
      action: "left the group",
      postName: "Chess Club",
      time: "2 weeks ago",
      privateMessage: "",
      isNew: false
    }
  ];

  const list = document.getElementById("list");
  const counter = document.querySelector(".notifications-counter");

  const renderNotifications = () => {
    list.innerHTML = "";
    let newCount = 0;

    data.forEach((item, idx) => {
      const li = document.createElement("li");
      li.className = "notification" + (item.isNew ? " new-notification" : "");
      li.innerHTML = `
        <img src="${item.img}" alt="${item.name}" />
        <div class="notification-infos">
          <div class="notification-text">
            <a href="#" class="profile-link">${item.name}</a> ${item.action}
            ${
              item.postName
                ? `<a href="#" class="notification-link-post"> ${item.postName}</a>`
                : ""
            }
            <span class="notification-dot" style="display: ${
              item.isNew ? "inline-block" : "none"
            };"></span>
          </div>
          <div class="notification-time">${item.time}</div>
          ${
            item.privateMessage
              ? `<div class="notification-text-private-message" style="display: none;">${item.privateMessage}</div>`
              : ""
          }
        </div>
      `;

      if (item.privateMessage) {
        li.addEventListener("click", () => {
          const msg = li.querySelector(".notification-text-private-message");
          msg.style.display =
            msg.style.display === "block" ? "none" : "block";
        });
      }

      list.appendChild(li);
      if (item.isNew) newCount++;
    });

    counter.textContent = newCount;
  };

  renderNotifications();

  document
    .getElementById("mark-all-read")
    .addEventListener("click", () => {
      data.forEach((item) => {
        item.isNew = false;
      });

      renderNotifications();

      document.querySelectorAll(".notification-dot").forEach(dot => {
        dot.style.display = "none";
      });

      document.querySelectorAll(".notification").forEach(notification => {
        notification.classList.remove("new-notification");
      });

      counter.textContent = "0";
    });
});
