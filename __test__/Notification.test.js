const {
  Notification,
  EmailNotification,
  SmsNotification,
} = require("../excersise/Notification");

describe("Notification", () => {
  test("should store recipient and message", () => {
    const notification = new Notification("user@example.com", "Hello");

    expect(notification.recipient).toBe("user@example.com");
    expect(notification.message).toBe("Hello");
  });

  test("should have a send method", () => {
    const notification = new Notification("user@example.com", "Hello");

    expect(typeof notification.send).toBe("function");
  });
});

describe("EmailNotification", () => {
  test("should inherit from Notification", () => {
    const email = new EmailNotification("user@example.com", "Welcome!");

    expect(email).toBeInstanceOf(Notification);
  });
});

describe("SmsNotification", () => {
  test("should inherit from Notification", () => {
    const sms = new SmsNotification("0791234567", "Your code is 1234");
    expect(sms).toBeInstanceOf(Notification);
  });
});
