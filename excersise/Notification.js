class Notification {
  constructor(recipient, message) {
    this.recipient = recipient;
    this.message = message;
  }

  send() {
    console.log("Sending notification...");
  }
}

class EmailNotification extends Notification {
  send() {
    console.log(`Sending Email to ${this.recipient}: ${this.message}`);
  }
}

class SmsNotification extends Notification {
  send() {
    console.log(`Sending SMS to ${this.recipient}: ${this.message}`);
  }
}

// Testing

const email = new EmailNotification("shahed@example.com", "Welcome!");

const sms = new SmsNotification("0791234567", "Your code is 1234");

email.send();
sms.send();
module.exports = {
  Notification,
  EmailNotification,
  SmsNotification,
};
/*
Inheritance vs. Simple Functions

Inheritance is useful when multiple classes share common properties and behaviors.

In this example, EmailNotification and SmsNotification inherit the recipient, message, and common structure from the Notification parent class. Each child class overrides the send() method to provide its own implementation.

Simple functions are more suitable for small and independent operations that do not require shared state or a class hierarchy.

Inheritance improves code organization, reduces duplication, and supports polymorphism. However, simple functions are often easier to understand and maintain when the logic is straightforward.

Conclusion: Inheritance is a suitable choice for this notification system because different notification types share common properties but have different sending behaviors.
*/
