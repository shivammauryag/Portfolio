import myphoto from "../assets/myphoto.jpeg";

function About() {
  return (
    <>
      <style>{`
        .about{
          min-height:100vh;
          padding:100px 8%;
          background:linear-gradient(135deg,#0f172a,#1e293b,#111827);
          display:flex;
          align-items:center;
          justify-content:center;
          position:relative;
          overflow:hidden;
        }

        .about::before{
          content:"";
          position:absolute;
          width:350px;
          height:350px;
          background:rgba(56,189,248,0.12);
          border-radius:50%;
          top:-100px;
          left:-100px;
          filter:blur(90px);
        }

        .about-container{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:70px;
          width:100%;
          max-width:1200px;
          position:relative;
          z-index:2;
        }

        .about-image{
          flex:1;
          display:flex;
          justify-content:center;
        }

        .image-box{
          width:340px;
          height:340px;
          border-radius:30px;
          overflow:hidden;
          background:rgba(255,255,255,0.08);
          backdrop-filter:blur(12px);
          border:1px solid rgba(255,255,255,0.1);
          box-shadow:0 0 40px rgba(56,189,248,0.20);
          transition:0.4s;
        }

        .image-box:hover{
          transform:translateY(-8px);
        }

        .profile-img{
          width:100%;
          height:100%;
          object-fit:cover;
          border-radius:30px;
        }

        .about-content{
          flex:1;
          color:white;
        }

        .about-title{
          font-size:48px;
          margin-bottom:20px;
        }

        .highlight{
          color:#38bdf8;
        }

        .about-content p{
          color:#d1d5db;
          line-height:1.8;
          margin-bottom:18px;
          font-size:16px;
        }

        .info-box{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:15px;
          margin:30px 0;
        }

        .info-card{
          background:rgba(255,255,255,0.08);
          padding:18px;
          border-radius:16px;
          border:1px solid rgba(255,255,255,0.08);
          transition:0.3s;
        }

        .info-card:hover{
          transform:translateY(-5px);
        }

        .info-card h4{
          color:#38bdf8;
          margin-bottom:6px;
        }

        .skills{
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          margin-top:20px;
        }

        .skills span{
          background:rgba(255,255,255,0.08);
          padding:10px 16px;
          border-radius:20px;
          font-size:14px;
          border:1px solid rgba(255,255,255,0.1);
          transition:0.3s;
        }

        .skills span:hover{
          transform:translateY(-3px);
        }

        @media(max-width:900px){

          .about-container{
            flex-direction:column;
            text-align:center;
          }

          .about-title{
            font-size:38px;
          }

          .info-box{
            grid-template-columns:1fr;
          }

          .skills{
            justify-content:center;
          }
        }

        @media(max-width:480px){

          .about{
            padding:70px 20px;
          }

          .image-box{
            width:260px;
            height:260px;
          }

          .about-title{
            font-size:30px;
          }

          .about-content p{
            font-size:14px;
          }
        }

      `}</style>

      <section className="about" id="about">

        <div className="about-container">

          <div className="about-image">
            <div className="image-box">
              <img
                src={myphoto}
                alt="Profile"
                className="profile-img"
              />
            </div>
          </div>

          <div className="about-content">

            <h1 className="about-title">
              About <span className="highlight">Me</span>
            </h1>

            <p>
              Hello! I'm a passionate Full Stack Developer who enjoys
              building responsive and modern web applications using
              React and JavaScript.
            </p>

            <p>
              I love solving problems, learning new technologies,
              and creating user-friendly experiences.
            </p>

            <div className="info-box">

              <div className="info-card">
                <h4>Education</h4>
                <p>B.Tech Student</p>
              </div>

              <div className="info-card">
                <h4>Experience</h4>
                <p>Frontend Projects</p>
              </div>

              <div className="info-card">
                <h4>Location</h4>
                <p>Noida</p>
              </div>

              <div className="info-card">
                <h4>Interest</h4>
                <p>Full Stack Development</p>
              </div>

            </div>

            <div className="skills">
              <span>C++</span>
              <span>Java</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Git</span>
              <span>Responsive Design</span>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default About;