function Contact() {
  return (
    <>
      <style>{`
        .contact {
          padding: 100px 20px;
          background: linear-gradient(to bottom right, #0f172a, #1e293b);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .contact::before {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          background: rgba(56, 189, 248, 0.12);
          border-radius: 50%;
          top: -120px;
          left: -120px;
          filter: blur(90px);
        }

        .contact::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          background: rgba(236, 72, 153, 0.12);
          border-radius: 50%;
          bottom: -120px;
          right: -120px;
          filter: blur(90px);
        }

        .contact-container {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* LEFT SIDE */
        .contact-left h4 {
          color: #38bdf8;
          font-size: 18px;
          margin-bottom: 10px;
          letter-spacing: 1px;
        }

        .contact-left h1 {
          font-size: 48px;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .contact-left p {
          color: #cbd5e1;
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 35px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 18px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 18px 22px;
          border-radius: 18px;
          transition: 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .info-card:hover {
          transform: translateX(8px);
          background: rgba(56, 189, 248, 0.12);
        }

        .info-icon {
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #38bdf8, #6366f1);
          font-size: 24px;
        }

        .info-text h3 {
          font-size: 18px;
          margin-bottom: 4px;
        }

        .info-text a {
          color: #cbd5e1;
          text-decoration: none;
          transition: 0.3s;
        }

        .info-text a:hover {
          color: #38bdf8;
        }

        /* RIGHT SIDE CARD */
        .contact-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          padding: 40px;
          border-radius: 28px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.25);
          transition: 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-8px);
        }

        .contact-card h2 {
          font-size: 30px;
          margin-bottom: 18px;
        }

        .contact-card p {
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .social-links {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .social-links a {
          text-decoration: none;
          padding: 14px 24px;
          border-radius: 14px;
          background: linear-gradient(135deg, #38bdf8, #6366f1);
          color: white;
          font-weight: 600;
          transition: 0.3s ease;
        }

        .social-links a:hover {
          transform: scale(1.08);
          box-shadow: 0 10px 25px rgba(56,189,248,0.3);
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .contact-container {
            grid-template-columns: 1fr;
          }

          .contact-left {
            text-align: center;
          }

          .contact-left h1 {
            font-size: 38px;
          }

          .social-links {
            justify-content: center;
          }

          .contact-card {
            text-align: center;
          }
        }
      `}</style>

      <section id="contact" className="contact">
        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-left">
            <h4>GET IN TOUCH</h4>

            <h1>
              Let's Build Something Amazing Together
            </h1>

            <p>
              I’m a passionate Full Stack Developer open to internships,
              freelance opportunities, and software engineering roles.
              Feel free to connect with me anytime.
            </p>

            <div className="contact-info">

              <div className="info-card">
                <div className="info-icon">📧</div>

                <div className="info-text">
                  <h3>Email</h3>

                  <a href="mailto:saumyamaurya1808@gmail.com">
                    Shivammaurya361564@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>

                <div className="info-text">
                  <h3>Phone</h3>

                  <a href="+91 8840034091">
                    +91 8840034091
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">💻</div>

                <div className="info-text">
                  <h3>GitHub</h3>

                  <a
                    href="https://github.com/shivammauryag"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/shivammauryag
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-card">
            <h2>Connect With Me 🚀</h2>

            <p>
              Whether you have a project idea, internship opportunity,
              or just want to say hello — my inbox is always open.
            </p>

            <div className="social-links">

              <a
                href="mailto:Shivammaurya361564@gmail.com"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/shivam-maurya-aab194326?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/shivammauryag"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;