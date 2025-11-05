"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media (max-width: 1024px) {
        .footer-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 2rem !important;
        }
      }
      @media (max-width: 768px) {
        .footer-grid {
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
        }
        .footer-bottom {
          flex-direction: column !important;
          gap: 1rem !important;
          text-align: center !important;
        }
        .footer-logo-section {
          text-align: center !important;
        }
        .footer-social-container {
          justify-content: center !important;
        }
        .footer-column {
          text-align: center !important;
        }
        .footer-link-list {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const styles: { [key: string]: React.CSSProperties } = {
    footer: {
      backgroundColor: "#0B0C10",
      color: "#F1FAEE",
      padding: "3rem 1rem 2rem",
      marginTop: "auto",
      position: "relative",
      borderTop: "1px solid rgba(31, 40, 51, 0.5)",
    },
    topDivider: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "2px",
      background: "linear-gradient(90deg, transparent 0%, #1D3557 20%, #E63946 50%, #1D3557 80%, transparent 100%)",
      border: "none",
      margin: 0,
    },
    decorativeLine: {
      position: "absolute",
      top: "1px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "2px",
      background: "#E63946",
      boxShadow: "0 0 10px #E63946",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    topSection: {
      marginBottom: "2.5rem",
      paddingTop: "1rem",
    },
    logoSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "2rem",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1rem",
    },
    logoImage: {
      position: "relative",
      width: "60px",
      height: "60px",
    },
    logo: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#F1FAEE",
      letterSpacing: "0.1em",
      fontFamily: "var(--font-goldman)",
    },
    logoAccent: {
      color: "#E63946",
    },
    tagline: {
      fontSize: "1rem",
      color: "#C5C6C7",
      textAlign: "center",
      maxWidth: "500px",
      lineHeight: "1.6",
      fontFamily: "var(--font-inter)",
    },
    separator: {
      border: "none",
      height: "1px",
      background: "linear-gradient(90deg, transparent 0%, rgba(31, 40, 51, 0.8) 50%, transparent 100%)",
      margin: "2rem 0",
    },
    mainSection: {
      display: "grid",
      gridTemplateColumns: "2fr repeat(3, 1fr)",
      gap: "3rem",
      marginBottom: "2.5rem",
    },
    column: {
      display: "flex",
      flexDirection: "column",
    },
    columnTitle: {
      fontSize: "1.125rem",
      fontWeight: "600",
      color: "#F1FAEE",
      marginBottom: "1.25rem",
      fontFamily: "var(--font-goldman)",
      position: "relative",
      paddingLeft: "0.75rem",
    },
    columnTitleBar: {
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: "3px",
      height: "20px",
      background: "linear-gradient(180deg, #E63946 0%, #1D3557 100%)",
      borderRadius: "2px",
    },
    aboutText: {
      fontSize: "0.9rem",
      color: "#C5C6C7",
      lineHeight: "1.7",
      marginBottom: "1.5rem",
      fontFamily: "var(--font-inter)",
    },
    linkList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },
    linkItem: {
      marginBottom: 0,
    },
    link: {
      color: "#C5C6C7",
      textDecoration: "none",
      fontSize: "0.9rem",
      transition: "all 0.3s ease",
      fontFamily: "var(--font-inter)",
      display: "inline-block",
      position: "relative",
    },
    contactItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "0.75rem",
      marginBottom: "1rem",
      color: "#C5C6C7",
      fontSize: "0.9rem",
      fontFamily: "var(--font-inter)",
    },
    iconWrapper: {
      width: "36px",
      height: "36px",
      borderRadius: "8px",
      backgroundColor: "#1F2833",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transition: "all 0.3s ease",
    },
    socialContainer: {
      display: "flex",
      gap: "0.75rem",
      marginTop: "1.5rem",
    },
    socialLink: {
      width: "40px",
      height: "40px",
      borderRadius: "8px",
      backgroundColor: "#1F2833",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#C5C6C7",
      transition: "all 0.3s ease",
      border: "1px solid transparent",
    },
    bottomSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "0.875rem",
      color: "#C5C6C7",
      paddingTop: "2rem",
      fontFamily: "var(--font-inter)",
    },
    legalLinks: {
      display: "flex",
      gap: "2rem",
    },
    legalLink: {
      color: "#C5C6C7",
      textDecoration: "none",
      transition: "color 0.3s ease",
      fontSize: "0.875rem",
    },
    heartbeat: {
      display: "inline-block",
      animation: "heartbeat 1.5s ease-in-out infinite",
      color: "#E63946",
      fontSize: "1rem",
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.topDivider}></div>
      <div style={styles.decorativeLine}></div>

      <div style={styles.container}>
        {/* Top Section - Logo & Tagline */}
        <div style={styles.topSection}>
          <div style={styles.logoSection} className="footer-logo-section">
            <div style={styles.logoContainer}>
              <div style={styles.logoImage}>
                <Image
                  src="/altius-bg.png"
                  alt="Altius Logo"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div style={styles.logo}>
                ALTIUS <span style={styles.logoAccent}>2025</span>
              </div>
            </div>
            <p style={styles.tagline}>
              Soar Beyond Limits - Srinivas Institute of Technology's Premier Inter-Department Technical Fest. 
              Experience Innovation, Competition, and Collaboration.
            </p>
          </div>
          <hr style={styles.separator} />
        </div>

        {/* Main Columns Section */}
        <div style={styles.mainSection} className="footer-grid">
          {/* Column 1: About */}
          <div style={styles.column} className="footer-column">
            <h3 style={styles.columnTitle}>
              <span style={styles.columnTitleBar}></span>
              About Altius
            </h3>
            <p style={styles.aboutText}>
              Join us for an extraordinary inter-department technical fest at{" "}
              <strong style={{ color: "#F1FAEE" }}>Srinivas Institute of Technology</strong>, Mangalore. 
              With 20+ events, 13 departments, and 500+ participants, Altius 2025 is where innovation meets excellence.
            </p>
            <div style={styles.socialContainer} className="footer-social-container">
              <a
                href="https://facebook.com/altius2025"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1877F2";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1F2833";
                  e.currentTarget.style.color = "#C5C6C7";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/altius2025"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#E4405F";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1F2833";
                  e.currentTarget.style.color = "#C5C6C7";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/altius2025"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1DA1F2";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1F2833";
                  e.currentTarget.style.color = "#C5C6C7";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com/company/altius2025"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0A66C2";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1F2833";
                  e.currentTarget.style.color = "#C5C6C7";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com/@altius2025"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FF0000";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1F2833";
                  e.currentTarget.style.color = "#C5C6C7";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div style={styles.column} className="footer-column">
            <h3 style={styles.columnTitle}>
              <span style={styles.columnTitleBar}></span>
              Quick Links
            </h3>
            <ul style={styles.linkList} className="footer-link-list">
              <li style={styles.linkItem}>
                <Link
                  href="/"
                  style={styles.link}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#457B9D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C6C7")}
                >
                  Home
                </Link>
              </li>
              <li style={styles.linkItem}>
                <Link
                  href="/events"
                  style={styles.link}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#457B9D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C6C7")}
                >
                  Events
                </Link>
              </li>
              <li style={styles.linkItem}>
                <Link
                  href="/scoreboard"
                  style={styles.link}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#457B9D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C6C7")}
                >
                  Scoreboard
                </Link>
              </li>
              <li style={styles.linkItem}>
                <Link
                  href="/gallery"
                  style={styles.link}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#457B9D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C6C7")}
                >
                  Gallery
                </Link>
              </li>
              <li style={styles.linkItem}>
                <Link
                  href="/about"
                  style={styles.link}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#457B9D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C6C7")}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div style={styles.column} className="footer-column">
            <h3 style={styles.columnTitle}>
              <span style={styles.columnTitleBar}></span>
              Resources
            </h3>
            <ul style={styles.linkList} className="footer-link-list">
              <li style={styles.linkItem}>
                <Link
                  href="/contact"
                  style={styles.link}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#457B9D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C6C7")}
                >
                  Contact Us
                </Link>
              </li>
              <li style={styles.linkItem}>
                <Link
                  href="#"
                  style={styles.link}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#457B9D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C6C7")}
                >
                  FAQ
                </Link>
              </li>
              <li style={styles.linkItem}>
                <Link
                  href="#"
                  style={styles.link}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#457B9D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C6C7")}
                >
                  Schedule
                </Link>
              </li>
              <li style={styles.linkItem}>
                <Link
                  href="#"
                  style={styles.link}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#457B9D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C6C7")}
                >
                  Rules & Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div style={styles.column} className="footer-column">
            <h3 style={styles.columnTitle}>
              <span style={styles.columnTitleBar}></span>
              Get in Touch
            </h3>
            <div style={styles.contactItem}>
              <div
                style={styles.iconWrapper}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(230, 57, 70, 0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1F2833")}
              >
                <MapPin size={18} style={{ color: "#E63946" }} />
              </div>
              <div>
                <strong style={{ color: "#F1FAEE", display: "block", marginBottom: "0.25rem" }}>Location</strong>
                SIT, Mangalore,<br />Karnataka 574143
              </div>
            </div>
            <div style={styles.contactItem}>
              <div
                style={styles.iconWrapper}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(69, 123, 157, 0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1F2833")}
              >
                <Mail size={18} style={{ color: "#457B9D" }} />
              </div>
              <div>
                <strong style={{ color: "#F1FAEE", display: "block", marginBottom: "0.25rem" }}>Email</strong>
                <a
                  href="mailto:altius2025@sit.edu"
                  style={{ color: "#C5C6C7", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#457B9D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C6C7")}
                >
                  altius2025@sit.edu
                </a>
              </div>
            </div>
            <div style={styles.contactItem}>
              <div
                style={styles.iconWrapper}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(69, 123, 157, 0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1F2833")}
              >
                <Phone size={18} style={{ color: "#457B9D" }} />
              </div>
              <div>
                <strong style={{ color: "#F1FAEE", display: "block", marginBottom: "0.25rem" }}>Phone</strong>
                <a
                  href="tel:+911234567890"
                  style={{ color: "#C5C6C7", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#457B9D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C6C7")}
                >
                  +91 12345 67890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <hr style={styles.separator} />
        <div style={styles.bottomSection} className="footer-bottom">
          <div>
            © {currentYear} <strong style={{ color: "#F1FAEE" }}>Altius</strong>, Srinivas Institute of Technology. All rights reserved.
          </div>
          <div style={styles.legalLinks}>
            <Link
              href="#"
              style={styles.legalLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F1FAEE")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C6C7")}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              style={styles.legalLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F1FAEE")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C6C7")}
            >
              Terms of Service
            </Link>
            <span>
              Made with <span style={styles.heartbeat}>❤</span> by Team Altius
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
        }
      `}</style>
    </footer>
  );
}
