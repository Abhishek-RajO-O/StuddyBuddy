import React from "react";

const LeaderboardCard = (props) => {
  const { rank, title, category, rating, helpful, author, link } = props;

  const getMedal = () => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return "🏅";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(12px)",
        borderRadius: "16px",
        padding: "18px 24px",
        marginBottom: "20px",
        border: "1px solid rgba(100, 100, 255, 0.2)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.05)";
      }}
    >
      {/* Accent gradient stripe */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "4px",
          width: `${Math.min(rank, 5) * 20}%`, // progress style accent
          background: "linear-gradient(90deg, #6eafff, #a06eff)",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
        }}
      ></div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px", zIndex: 1 }}>
        <h3
          style={{
            margin: 0,
            fontWeight: "700",
            fontSize: "18px",
            color: "#1f1f2e",
            letterSpacing: "0.5px",
          }}
        >
          {getMedal()} {title}
        </h3>
        <p
          style={{
            margin: 0,
            color: "#6666aa",
            fontSize: "13px",
            fontStyle: "italic",
          }}
        >
          {category}
        </p>
        <div
          style={{
            display: "flex",
            gap: "14px",
            alignItems: "center",
            marginTop: "6px",
            fontSize: "13px",
            color: "#333",
          }}
        >
          <span>⭐ {rating}</span>
          <span>👍 {helpful} helpful</span>
          <span style={{ color: "#888" }}>Added by {author}</span>
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{
          background: "linear-gradient(135deg, #6eafff, #a06eff)",
          color: "#fff",
          borderRadius: "12px",
          padding: "10px 18px",
          textDecoration: "none",
          fontWeight: "600",
          fontFamily: "monospace",
          boxShadow: "0 6px 16px rgba(110, 175, 255, 0.5)",
          transition: "all 0.25s ease",
          zIndex: 1,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(110, 175, 255, 0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(110, 175, 255, 0.5)";
        }}
      >
        Visit →
      </a>
    </div>
  );
};

export default LeaderboardCard;
