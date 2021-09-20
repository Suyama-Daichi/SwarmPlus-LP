import React from "react"
import PropTypes from "prop-types"

import Button from "./button"
import headerImage from "../images/header.png"
import { StaticImage } from "gatsby-plugin-image"

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>Landing Page Starter</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      This landing page looks great on all devices and is minimal in design. Add
      what you want and deploy.
    </p>
    <Button>Get Early Access</Button>
    <div style={{ margin: 60, width: `250px`, position: "relative" }}>
      <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
        <StaticImage
          src={"../images/mockup-content.png"}
          alt="content "
          placeholder="blurred"
        />
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
        <StaticImage
          src={"../images/mockup-frame.png"}
          alt="outlines of shapes and confetti in the background "
          placeholder="blurred"
        />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
