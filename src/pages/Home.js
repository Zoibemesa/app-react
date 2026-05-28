function Home() {
  return (
    <div style={{
      background: "linear-gradient(160deg, #fff0f6 0%, #fce7f3 40%, #fdf2f8 100%)",
      border: "0.5px solid #f9a8d4",
      borderRadius: "24px",
      padding: "2.5rem 2rem",
      textAlign: "center",
      maxWidth: "480px",
      margin: "1rem auto",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* Destellos decorativos */}
      <div style={{
        position: "absolute", top: "-60px", right: "-60px",
        width: "180px", height: "180px",
        background: "radial-gradient(circle, #fbcfe8 0%, transparent 70%)",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "-40px", left: "-40px",
        width: "140px", height: "140px",
        background: "radial-gradient(circle, #f9a8d4 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <h1 style={{
        background: "linear-gradient(135deg, #ec4899, #db2777)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontSize: "26px",
        fontWeight: "500",
        marginBottom: "1.5rem"
      }}>
        Página Inicial
      </h1>

      <div style={{
        display: "inline-block",
        padding: "4px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #ec4899, #f472b6, #fbcfe8)",
        marginBottom: "1.5rem"
      }}>
        <img
          src="/zoibe.jpg"
          alt="Zoibe"
          style={{
            width: "168px",
            height: "168px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #fff0f6",
            display: "block"
          }}
        />
      </div>

      <h2 style={{
        fontSize: "22px",
        fontWeight: "500",
        color: "#9d174d",
        margin: "0 0 6px"
      }}>
        Zoibe Mesa Gonzalez
      </h2>

      <div style={{
        display: "inline-block",
        background: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
        border: "0.5px solid #f9a8d4",
        borderRadius: "999px",
        padding: "4px 16px",
        marginBottom: "12px"
      }}>
        <h3 style={{ fontSize: "13px", color: "#be185d", fontWeight: "500", margin: 0 }}>
          Matrícula: 2024-1831
        </h3>
      </div>

      <p style={{ fontSize: "15px", color: "#db2777", marginTop: "4px" }}>
        20241831@itla.edu.do
      </p>

      <div style={{
        marginTop: "1.5rem",
        height: "3px",
        background: "linear-gradient(90deg, transparent, #f9a8d4, #ec4899, #f9a8d4, transparent)",
        borderRadius: "999px"
      }} />
    </div>
  );
}
export default Home;