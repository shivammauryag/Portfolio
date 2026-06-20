function Footer() {
  return (
    <>
      <style>{`
        .footer{
          background: linear-gradient(135deg,#0f172a,#111827);
          padding:40px 20px;
          text-align:center;
          color:white;
          border-top:1px solid rgba(255,255,255,0.1);
        }

        .footer-logo{
          font-size:28px;
          font-weight:bold;
          margin-bottom:15px;
        }

        .footer-text{
          color:#cbd5e1;
          margin-bottom:20px;
          font-size:15px;
        }

        .footer-links{
          display:flex;
          justify-content:center;
          gap:25px;
          flex-wrap:wrap;
          margin-bottom:25px;
        }

        .footer-links a{
          color:white;
          text-decoration:none;
          transition:0.3s;
        }

        .footer-links a:hover{
          color:#38bdf8;
        }

        .social-icons{
          display:flex;
          justify-content:center;
          gap:20px;
          margin-bottom:20px;
          flex-wrap:wrap;
        }

        .social-icons a{
          text-decoration:none;
          color:white;
          padding:10px 14px;
          border-radius:50%;
          background:rgba(255,255,255,0.08);
          transition:0.3s;
        }

        .social-icons a:hover{
          transform:translateY(-4px);
          background:#38bdf8;
        }

        .copyright{
          color:#94a3b8;
          font-size:14px;
          margin-top:15px;
        }

        @media(max-width:768px){
          .footer-logo{
            font-size:24px;
          }

          .footer-links{
            gap:15px;
          }
        }

        @media(max-width:480px){
          .footer{
            padding:30px 15px;
          }

          .footer-logo{
            font-size:20px;
          }

          .footer-text{
            font-size:14px;
          }

          .footer-links{
            flex-direction:column;
            gap:10px;
          }
        }
      `}</style>

      <footer className="footer">
        <h2 className="footer-logo">Portfolio</h2>

        <p className="footer-text">
          Building responsive and modern web experiences.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-icons">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          
        </div>

        <p className="copyright">
          © 2026 Shivam Maurya | All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;