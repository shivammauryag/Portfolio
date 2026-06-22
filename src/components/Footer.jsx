function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(135deg, #0f172a, #111827);
          padding: 40px 20px;
          text-align: center;
          color: white;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-logo {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .footer-text {
          color: #cbd5e1;
          font-size: 15px;
          max-width: 600px;
          margin: 0 auto 20px;
          line-height: 1.6;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
          transition: 0.3s;
          font-size: 15px;
        }

        .footer-links a:hover {
          color: #38bdf8;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .social-icons a {
          text-decoration: none;
          color: white;
          padding: 10px 18px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .social-icons a:hover {
          transform: translateY(-4px);
          background: #38bdf8;
        }

        .copyright {
          color: #94a3b8;
          font-size: 14px;
          margin-top: 15px;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .footer {
            padding: 35px 18px;
          }

          .footer-logo {
            font-size: 24px;
          }

          .footer-links {
            gap: 15px;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .footer {
            padding: 30px 15px;
          }

          .footer-logo {
            font-size: 22px;
          }

          .footer-text {
            font-size: 14px;
          }

          .footer-links {
            flex-direction: column;
            gap: 12px;
          }

          .footer-links a {
            width: 100%;
            max-width: 200px;
            padding: 8px;
          }

          .social-icons {
            flex-direction: column;
            gap: 12px;
          }

          .social-icons a {
            width: 160px;
            text-align: center;
          }

          .copyright {
            font-size: 12px;
            line-height: 1.5;
          }
        }
      `}</style>

      <footer className="footer">
        <h2 className="footer-logo">Saumya Maurya</h2>

        <p className="footer-text">
          MERN Stack Developer passionate about building responsive,
          user-friendly, and modern web applications.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/shivammauryag"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shivam-maurya-aab194326/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="copyright">
          © 2026 Shivam Maurya | All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
