function Experiencia() {
  return (
    <div style={{
      background: "linear-gradient(160deg, #fdf6f0 0%, #f5e6d3 50%, #ede0d0 100%)",
      border: "1px solid #d4a97a",
      borderRadius: "20px",
      padding: "2rem",
      maxWidth: "620px",
      margin: "1rem auto",
      textAlign: "center"
    }}>
      <h2 style={{
        background: "linear-gradient(135deg, #8b5e3c, #c97c3a)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontWeight: "600",
        marginBottom: "1.5rem"
      }}>Mi Experiencia</h2>

      <div style={{
        borderRadius: "14px",
        overflow: "hidden",
        border: "2px solid #d4a97a",
        display: "inline-block"
      }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VK8TMg9fNgg"
          title="Tarea #3"
          allowFullScreen
          style={{ display: "block" }}
        />
      </div>

      <div style={{
        marginTop: "1.5rem",
        height: "3px",
        background: "linear-gradient(90deg, transparent, #d4a97a, #c97c3a, #d4a97a, transparent)",
        borderRadius: "999px"
      }} />
    </div>
  );
}
export default Experiencia;