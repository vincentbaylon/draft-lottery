const headerStyle = {
  backgroundColor: "#0D1F2D",
  width: "100%",
  color: "white",
  padding: "10px",
  display: "flex",
  height: "100px",
  alignItems: "center",
  textAlign: "center",
};

const logoStyle = {
  flex: "1",
  fontFamily: "Impact",
  fontSize: "50px",
  letterSpacing: ".1rem",
};

const textStyle = {
  textAlign: "",
  fontSize: "50px",
};

function Header() {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <p>2022 FFL DRAFT LOTTERY</p>
      </div>
    </header>
  );
}

export default Header;
