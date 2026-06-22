import myphoto from "../assets/myphoto.jpeg";

function Home() {
  return (
    <>
      <style>{`
        .home{
          min-height:100vh;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:80px 8%;
          background:linear-gradient(135deg,#0f172a,#1e293b,#111827);
          color:white;
          position:relative;
          overflow:hidden;
          gap:50px;
        }

        .home::before{
          content:"";
          position:absolute;
          width:350px;
          height:350px;
          background:rgba(56,189,248,0.15);
          border-radius:50%;
          top:-120px;
          left:-100px;
          filter:blur(80px);
        }

        .home::after{
          content:"";
          position:absolute;
          width:300px;
          height:300px;
          background:rgba(99,102,241,0.15);
          border-radius:50%;
          bottom:-100px;
          right:-100px;
          filter:blur(90px);
        }

        .home-content{
          flex:1;
          position:relative;
          z-index:2;
        }

        .home-content h3{
          font-size:24px;
          color:#cbd5e1;
        }

        .home-content h1{
          font-size:65px;
          margin:15px 0;
          line-height:1.1;
        }

        .highlight{
          background:linear-gradient(135deg,#38bdf8,#6366f1);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .role{
          font-size:28px;
          margin-bottom:20px;
          color:#38bdf8;
        }

        .home-content p{
          max-width:550px;
          color:#d1d5db;
          line-height:1.8;
          font-size:17px;
        }

        .btn-group{
          margin-top:30px;
          display:flex;
          gap:20px;
          flex-wrap:wrap;
        }

        .btn{
          padding:14px 28px;
          border:none;
          border-radius:30px;
          cursor:pointer;
          font-size:15px;
          font-weight:600;
          transition:0.3s;
        }

        .primary{
          background:linear-gradient(135deg,#38bdf8,#6366f1);
          color:white;
        }

        .btn:hover{
          transform:translateY(-3px);
        }

        .home-image{
          flex:1;
          display:flex;
          justify-content:center;
          position:relative;
          z-index:2;
        }

        .circle{
          width:340px;
          height:340px;
          border-radius:50%;
          background:rgba(255,255,255,0.08);
          backdrop-filter:blur(12px);
          border:2px solid rgba(255,255,255,0.1);
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
          box-shadow:0 0 50px rgba(56,189,248,0.2);
          animation:float 3s ease-in-out infinite;
        }

        .profile-img{
          width:100%;
          height:100%;
          object-fit:cover;
          border-radius:50%;
        }

        @keyframes float{
          0%,100%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-15px);
          }
        }

        @media(max-width:768px){
          .home{
            flex-direction:column-reverse;
            text-align:center;
            padding:60px 20px;
          }

          .home-content h1{
            font-size:45px;
          }

          .role{
            font-size:22px;
          }

          .circle{
            width:250px;
            height:250px;
          }
        }

        @media(max-width:480px){
          .home-content h1{
            font-size:36px;
          }

          .circle{
            width:210px;
            height:210px;
          }
        }
      `}</style>

      <section className="home" id="home">

        <div className="home-content">
          <h3>Hello, I'm</h3>

          <h1>
            <span className="highlight">Shivam Maurya</span>
          </h1>

          <h2 className="role">Full Stack Developer</h2>

          <p>
            Passionate Full Stack Developer creating modern,
            responsive and user-friendly web experiences.
          </p>

          <div className="btn-group">
            <button className="btn primary">
              View Projects
            </button>
          </div>
        </div>

        <div className="home-image">
          <div className="circle">
            <img
              src={myphoto}
              alt="Profile"
              className="profile-img"
            />
          </div>
        </div>

      </section>
    </>
  );
}

export default Home;
