import React from "react"

import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"
import { StaticImage } from "gatsby-plugin-image"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Minimal Features"
      description="Don't spend time ripping out unneeded plugins and bloat."
    />
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>What you need to Start</h3>
        <p style={{ color: COLORS.gray }}>
          Includes plugins for analytics, building sitemaps, and optimizing
          images
        </p>
      </div>
      <div>
        <StaticImage
          src={"../images/feature.png"}
          alt="content "
          placeholder="blurred"
        />
      </div>
    </div>
  </div>
)

export default Content
