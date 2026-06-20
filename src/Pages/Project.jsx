function Projects() {
  const projects = [
    {
      title: "My Restaurant Website",
      desc: "A comprehensive platform for conducting and managing online examinations.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://resturant-delivery-theta.vercel.app/",
    },
    
  ];

  return (
    <>
      <style>{`
        .projects{
          min-height:100vh;
          padding:100px 30px;
          background: linear-gradient(135deg,#0f172a,#1e293b,#111827);
          position:relative;
          overflow:hidden;
        }

        .projects::before{
          content:"";
          position:absolute;
          width:350px;
          height:350px;
          background:rgba(56,189,248,0.12);
          border-radius:50%;
          top:-120px;
          left:-100px;
          filter:blur(90px);
        }

        .projects::after{
          content:"";
          position:absolute;
          width:300px;
          height:300px;
          background:rgba(99,102,241,0.15);
          border-radius:50%;
          bottom:-100px;
          right:-100px;
          filter:blur(80px);
        }

        .heading{
          text-align:center;
          color:white;
          font-size:45px;
          margin-bottom:50px;
          position:relative;
          z-index:2;
        }

        .project-container{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
          gap:30px;
          max-width:1200px;
          margin:auto;
          position:relative;
          z-index:2;
        }

        .project-card{
          background:rgba(255,255,255,0.08);
          backdrop-filter:blur(12px);
          border:1px solid rgba(255,255,255,0.1);
          border-radius:25px;
          padding:28px;
          color:white;
          transition:0.4s;
          box-shadow:0 10px 25px rgba(0,0,0,0.2);
        }

        .project-card:hover{
          transform:translateY(-12px) scale(1.02);
          box-shadow:0 20px 40px rgba(0,0,0,0.3);
        }

        .project-card h2{
          margin-bottom:15px;
          font-size:26px;
        }

        .project-card p{
          color:#d1d5db;
          line-height:1.7;
          margin-bottom:20px;
        }

        .tech-stack{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-bottom:25px;
        }

        .tech-stack span{
          padding:8px 14px;
          border-radius:20px;
          background:rgba(255,255,255,0.1);
          font-size:13px;
        }

        .project-btn{
          display:inline-block;
          padding:12px 20px;
          border-radius:30px;
          text-decoration:none;
          color:white;
          background:linear-gradient(135deg,#38bdf8,#6366f1);
          transition:0.3s;
          font-weight:600;
        }

        .project-btn:hover{
          transform:scale(1.06);
        }

        @media(max-width:768px){
          .heading{
            font-size:36px;
          }

          .projects{
            padding:80px 20px;
          }
        }

        @media(max-width:480px){
          .heading{
            font-size:30px;
          }

          .project-card{
            padding:20px;
          }

          .project-card h2{
            font-size:22px;
          }

          .project-btn{
            width:100%;
            text-align:center;
          }
        }
      `}</style>

      <section id="projects" className="projects">
        <h1 className="heading">My Projects</h1>

        <div className="project-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h2>{project.title}</h2>
              <p>{project.desc}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <a href={project.link} className="project-btn">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;