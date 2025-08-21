
export default function Loading() {
  return (
    <div style={styles.container}>
      <h2>🌀 Loading Products...</h2>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    fontSize: "1.5rem",
  },
};
