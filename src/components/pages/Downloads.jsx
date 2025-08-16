import React from "react";
import InfoIcon from "../../images/info-1.svg";
import LegalIcon from "../../images/legal-document-1.svg";
import StatutoryIcon from "../../images/folder-1.svg";
import AgreementsIcon from "../../images/contract-1.svg";
import TestimonialsIcon from "../../images/testimony-1.svg";
import ApprovalsIcon from "../../images/stamp-1-1.svg";
import Certificate from "../../images/certificate-1-1.svg";
import GovBuilding from "../../images/government-building-1.svg";
import sSateWise from "../../images/folders-1.svg";
import Footer from "../Footer";

const downloadsData = [
  { id: 1, text: "Manuals", imgSrc: InfoIcon },
  { id: 2, text: "Legal Documents", imgSrc: LegalIcon },
  { id: 3, text: "Statutory Documents", imgSrc: StatutoryIcon },
  { id: 4, text: "Agreements", imgSrc: AgreementsIcon },
  { id: 5, text: "Testimonials", imgSrc: TestimonialsIcon },
  { id: 6, text: "Approvals", imgSrc: ApprovalsIcon },
  { id: 7, text: "Certifications/Collaborations", imgSrc: Certificate },
  { id: 8, text: "Govt Orders", imgSrc: GovBuilding },
  { id: 9, text: "State Wise Documentation", imgSrc: sSateWise },
];

function Downloads() {
  return (
    <>
      <div style={styles.page}>
      <h2 style={styles.heading}>Downloads</h2>
      <div style={styles.container}>
        {downloadsData.map((item) => (
          <div
            key={item.id}
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img src={item.imgSrc} alt={item.text} style={styles.image} />
            <p style={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
    <section>
      <Footer />
    </section>
    </>
  );
}

const styles = {
  page: {
    backgroundColor: "#fff", // White background
    minHeight: "100vh",
    padding: "120px 50px",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#000", // Black
    marginBottom: "40px",
    fontWeight: "bold",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#000", // Black card
    borderRadius: "12px",
    padding: "30px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "200px",
    textAlign: "center",
    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    cursor: "pointer",
    border: "2px solid #FFD700", // Yellow border
  },
  image: {
    width: "70px",
    height: "70px",
    objectFit: "contain",
    marginBottom: "15px",
    // filter: "brightness(0) invert(1)", // Makes icons white
  },
  text: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#FFD700", // Yellow text
  },
};

export default Downloads;
