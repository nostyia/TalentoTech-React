function Contact() {
  return (
    <>
      <main className="contact">
        <h2>if you have any questions or concerns, please contact</h2>
        <p>
          Drop us a message below. Questions, feedback, or just a hello — it
          only takes a minute and it goes straight to us.
        </p>
        <form action="https://formspree.io/f/mljdrlgq" method="POST">
          <label>
            Your email:
            <input type="email" name="email" />
          </label>
          <label>
            Your message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </main>
    </>
  );
}

export default Contact;
