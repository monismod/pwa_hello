export function notify(title, body) {
  // Check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
    return;
  }

  // Check if permission is already granted
  if (Notification.permission === "granted") {
    // If granted, show the notification
    new Notification(title, {
        body: body,
        icon: "notificationIcon.png",
        tag: "hello",
      });
  } else if (Notification.permission !== "denied") {
    // Otherwise, request permission from the user
    Notification.requestPermission().then(permission => {
      // If the user accepts, show the notification
      if (permission === "granted") {
        new Notification(title, {
        body: body,
        icon: "notificationIcon.png",
        tag: "hello",
      });
      }
    });
  }
}