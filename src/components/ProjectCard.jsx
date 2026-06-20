function ProjectCard({ title, desc, tech = [], link }) {
  return (
    <>
      <style>{`
        .card {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 22px;
          padding: 25px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          overflow: hidden;
          position: relative;
        }

        .card::before{
          content:"";
          position:absolute;
          width:180px;
          height:180px;
          background: rgba(56,189,248,0.15);
          border-radius:50%;
          top:-60px;
          right:-60px;
          filter: blur(50px);
        }

        .card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }

        .card h3 {
          font-size: 24px;
          margin-bottom: 14px;
          color: white;
          position: relative;
          z-index: 2;
        }

        .card p {
          font-size: 15px;
          color: #d1d5db;
          line-height: 1.7;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }

        .tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 22px;
          position: relative;
          z-index: 2;
        }

        .tech span {
          background: rgba(255,255,255,0.12);
          color: #f1f5f9;
          padding: 7px 14px;
          border-radius: 20px;
          font-size: 13px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .btn {
          padding: 12px 20px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(135deg,#38bdf8,#6366f1);
          color: white;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          transition: 0.3s;
          width: fit-content;
          position: relative;
          z-index: 2;
        }

        .btn:hover {
          transform: scale(1.06);
        }

        a{
          text-decoration:none;
        }

        /* Tablet */
        @media(max-width:768px){
          .card{
            padding:22px;
          }

          .card h3{
            font-size:21px;
          }

          .card p{
            font-size:14px;
          }
        }

        /* Mobile */
        @media(max-width:480px){
          .card{
            padding:18px;
            border-radius:18px;
          }

          .card h3{
            font-size:18px;
          }

          .card p{
            font-size:13px;
          }

          .tech span{
            font-size:11px;
            padding:6px 10px;
          }

          .btn{
            width:100%;
            text-align:center;
            padding:10px;
          }
        }
      `}</style>

      <div className="card">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>

          <div className="tech">
            {tech.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        <a href={link} target="_blank" rel="noreferrer">
          <button className="btn">View Project →</button>
        </a>
      </div>
    </>
  );
}

export default ProjectCard;