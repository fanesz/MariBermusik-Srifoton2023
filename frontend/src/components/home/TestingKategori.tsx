import drum from "../../assets/drum.jpg";
import gitar from "../../assets/gitar.jpg";
import piano from "../../assets/piano.jpg";

const TestingKategori = () => {
  const imgStyle = {
    width: "334px",
    height: "486px",
    margin: "0 10px", // Adjust the margin as needed for spacing
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1 style={{ fontSize: "40px" }}>Category List</h1>
      <p style={{ fontSize: "32px", fontWeight: "normal !important" }}>Here is the list of services category we have, look it up!</p>

      {/* Images and green elements */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* hijau kiri */}
        <svg width={94} height={94} viewBox="0 0 94 94" fill="#618264" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "10px" }}>
          <ellipse cx="46.7656" cy="47" rx="46.7656" ry="46.4559" />
          <path d="M42.942 56.3864L33.5154 46.9542L43.0132 37.5874" stroke="#F7F7F7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M60.0158 47.0458L33.7804 46.9552" stroke="#F7F7F7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        {/* Images side by side */}
        <img src={gitar} alt="Gitar" style={imgStyle} />
        <img src={piano} alt="Piano" style={imgStyle} />
        <img src={drum} alt="Drum" style={imgStyle} />

        {/* hijau kanan */}
        <svg width={94} height={94} viewBox="0 0 94 94" fill="#618264" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "10px" }}>
          <ellipse cx="47.2343" cy="47" rx="46.7656" ry="46.4559" />
          <path d="M51.0224 37.6004L60.4846 47L51.0224 56.3996" stroke="#F7F7F7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M33.9841 47H60.2196" stroke="#F7F7F7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default TestingKategori;
