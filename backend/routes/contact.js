router.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${name}`,
      text: message,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.json({ message: "Message sent successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send message", error });
    }
  });
  