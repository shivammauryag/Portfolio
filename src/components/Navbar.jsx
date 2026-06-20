function Navbar() {
  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          scroll-behavior:smooth;
        }

        .navbar{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:18px 60px;
          background:rgba(15,23,42,0.85);
          backdrop-filter:blur(12px);
          color:white;
          position:sticky;
          top:0;
          z-index:1000;
          box-shadow:0 4px 20px rgba(0,0,0,0.2);
        }

        .logo{
          font-size:30px;
          font-weight:700;
          background:linear-gradient(135deg,#38bdf8,#6366f1);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          cursor:pointer;
        }

        .nav-links{
          display:flex;
          list-style:none;
          gap:35px;
          align-items:center;
        }

        .nav-links a{
          text-decoration:none;
          color:#f8fafc;
          font-size:17px;
          font-weight:500;
          position:relative;
          transition:0.3s;
        }

        .nav-links a::after{
          content:"";
          position:absolute;
          width:0;
          height:2px;
          left:0;
          bottom:-6px;
          background:#38bdf8;
          transition:0.3s;
        }

        .nav-links a:hover::after{
          width:100%;
        }

        .nav-links a:hover{
          color:#38bdf8;
        }

        /* Tablet */
        @media(max-width:768px){
          .navbar{
            flex-direction:column;
            padding:18px 25px;
            gap:18px;
          }

          .nav-links{
            gap:20px;
            flex-wrap:wrap;
            justify-content:center;
          }

          .logo{
            font-size:26px;
          }
        }

        /* Mobile */
        @media(max-width:480px){
          .navbar{
            padding:15px;
          }

          .logo{
            font-size:22px;
          }

          .nav-links{
            flex-direction:column;
            gap:14px;
          }

          .nav-links a{
            font-size:15px;
          }
        }
      `}</style>

      <nav className="navbar">
        <h2 className="logo">Portfolio</h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;