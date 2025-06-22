
document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      img: "./assets/images/avatar-mark-webber.png",
      info: {
        name: "Mark Webber",
        action: "reacted to your recent post",
        postName: "My first tournament today!",
        time: "1m ago",
        privateMessage: "",
        picture: "",
      },
    },
    {
      img: "./assets/images/avatar-angela-gray.png",
      info: {
        name: "Angela Gray",
        action: "followed you",
        postName: "",
        time: "5m ago",
        privateMessage: "",
        picture: "",
      },
    },
    {
      img: "./assets/images/avatar-jacob-thompson.png",
      info: {
        name: "Jacob Thompson",
        action: "has joined your group",
        postName: "Chess Club",
        time: "1 day ago",
        privateMessage: "",
        picture: "",
      },
    },
    {
      img: "./assets/images/avatar-rizky-hasanuddin.png",
      info: {
        name: "Rizky Hasanuddin",
        action: "sent you a private message",
        postName: "",
        time: "5 days ago",
        privateMessage:
          "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        picture: "",
      },
    },
    {
      img: "./assets/images/avatar-kimberly-smith.png",
      info: {
        name: "Kimberly Smith",
        action: "commented on your picture",
        postName: "",
        time: "1 week ago",
        privateMessage: "",
        picture: "./assets/images/image-chess.png",
      },
    },
    {
      img: "./assets/images/avatar-nathan-peterson.png",
      info: {
        name: "Nathan Peterson",
        action: "reacted to your recent post",
        postName: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago",
        privateMessage: "",
        picture: "",
      },
    },
    {
      img: "./assets/images/avatar-anna-kim.png",
      info: {
        name: "Anna Kim",
        action: "left the group",
        postName: "Chess Club",
        time: "2 weeks ago",
        privateMessage: "",
        picture: "",
      },
    },
  ];

const notificationList = document.getElementById("notification-list");

  data.forEach((item) => {
    const { img, info } = item;
    const {
      name,
      action,
      postName,
      time,
      privateMessage,
      picture,
    } = info;

    // Create container div
    const wrapper = document.createElement("div");
    wrapper.classList.add("notification-wrapper");

    const notificationHTML = `
      <div class="notification">
        <img src="${img}" alt="${name}" class="avatar" />
        <div class="notification-content">
          <div class="notification-text">
            <strong>${name}</strong> ${action}
            ${postName ? `<strong class="highlight"> ${postName}</strong>` : ""}
            <span class="notification-dot" style="margin-left: 8px; cursor: ${privateMessage ? "pointer" : "default"};"></span>
          </div>
          <div class="notification-time">${time}</div>
        </div>
        ${picture ? `<img src="${picture}" alt="Attached preview" class="preview-image" />` : ""}
      </div>
      ${
        privateMessage
          ? `<div class="private-message-container" style="display: none; padding-left: 60px; margin-top: 8px; color: #444;">
              <em>${privateMessage}</em>
            </div>`
          : ""
      }
    `;

    wrapper.innerHTML = notificationHTML;
    notificationList.appendChild(wrapper);

    // Toggle message visibility
    if (privateMessage) {
      const dot = wrapper.querySelector(".notification-dot");
      const privateMsgBox = wrapper.querySelector(".private-message-container");
      dot.addEventListener("click", () => {
        privateMsgBox.style.display =
          privateMsgBox.style.display === "none" ? "block" : "none";
      });
    }
  });

  document.getElementById("mark-all-read").addEventListener("click", () => {
    alert("All notifications marked as read!");
    document.querySelectorAll(".notification-dot").forEach(dot => dot.style.display = "none");
  });
});
