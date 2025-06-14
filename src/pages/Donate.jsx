import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import "./Donate.css";

export default function Donate() {
  return (
    <main className="our-story-page landing-page">
      <AnimatedSection className="hero ministry-title" delay={100}>
        <h3>
          "Each one must give as he has decided in his heart, not reluctantly or
          under compulsion, for God loves a cheerful giver." (2 Corinthians 9:7)
        </h3>
      </AnimatedSection>

      <div className="our-story-text">
        <AnimatedSection className="hero" delay={300}>
          <p>
            Thank you for considering a financial gift. Any of the payment
            methods below can be used to make an online donation.
          </p>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <div className="donation-card">
          <div className="donation-text">
            <p>
              1. Venmo to{" "}
              <a href="https://venmo.com/LGMAA" target="_blank">
                LGMAA
              </a>
            </p>
          </div>
          <div className="donation-qr zelle">
            <img src="/Venmo.png" alt="Venmo QR Code" />
          </div>
        </div>

        <div className="donation-card">
          <div className="donation-text">
            <p>2. Zelle to livinggraceministry@gmail.com</p>
          </div>
          <div className="donation-qr">
            <img src="/Zelle.jpg" className="qr zelle" alt="Zelle" />
          </div>
        </div>

        <div className="donation-card">
          <div className="donation-text">
            <p>3. Text "give" to (586) 239-0084</p>
          </div>
        </div>

        <div className="donation-card">
          <div className="donation-text">
            <p>
              4. Download tithe.ly app from app store (search for "Living Grace
              Ministry")
            </p>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
