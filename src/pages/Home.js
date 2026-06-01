function Home() {
  return (
    <div style={{
      background: "linear-gradient(160deg, #fdf6f0 0%, #f5e6d3 50%, #ede0d0 100%)",
      border: "1px solid #d4a97a",
      borderRadius: "20px",
      padding: "30px",
      textAlign: "center",
      maxWidth: "480px",
      margin: "1rem auto",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", top: "-50px", right: "-50px",
        width: "160px", height: "160px",
        background: "radial-gradient(circle, #e8c99a 0%, transparent 70%)",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "-40px", left: "-40px",
        width: "130px", height: "130px",
        background: "radial-gradient(circle, #c9956a 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <h1 style={{
        background: "linear-gradient(135deg, #8b5e3c, #c97c3a)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontSize: "26px",
        fontWeight: "600",
        marginBottom: "1.5rem"
      }}>
        Página Inicial
      </h1>

      <div style={{
        display: "inline-block",
        padding: "4px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #c97c3a, #e8b87a, #f5d9b0)",
        marginBottom: "1.2rem"
      }}>
        <img
          src="/zoibe.jpg"
          alt="Zoibe"
          style={{
            width: "168px",
            height: "168px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #fdf6f0",
            display: "block"
          }}
        />
      </div>

      <h2 style={{ color: "#6b3f1f", fontWeight: "600", margin: "0 0 6px" }}>
        Zoibe Mesa Gonzalez
      </h2>

      <div style={{
        display: "inline-block",
        background: "linear-gradient(135deg, #f5e6d3, #e8c99a)",
        border: "1px solid #d4a97a",
        borderRadius: "999px",
        padding: "4px 16px",
        marginBottom: "10px"
      }}>
        <h3 style={{ fontSize: "13px", color: "#8b5e3c", fontWeight: "500", margin: 0 }}>
          Matrícula: 2024-1831
        </h3>
      </div>

      <p style={{ fontSize: "15px", color: "#a0622a", marginTop: "4px" }}>
        20241831@itla.edu.do
      </p>

      <div style={{
        marginTop: "1.5rem",
        height: "3px",
        background: "linear-gradient(90deg, transparent, #d4a97a, #c97c3a, #d4a97a, transparent)",
        borderRadius: "999px"
      }} />
    </div>
  );
}
export default Home;