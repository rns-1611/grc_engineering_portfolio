import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState({})
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section')
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.85) {
          setIsVisible(prev => ({ ...prev, [section.id]: true }))
        }
      })
      
      // Add scroll effect for navbar
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      name: "AWS Automated Access Review",
      description: "A comprehensive tool for automating AWS IAM security reviews.",
      technologies: "AWS Lambda, Python, CloudFormation, Security Hub, CloudTrail, IAM Access Analyzer",
      github: "https://github.com/rns-1611/automated_aws_access_review/",
      achievements: [
        "Automated tool that provides a report IAM Users outside the scope of compliance guidelines",
        "Leverage the power of Lambda for automation and Bedrock AI to build human readable reports",
        "Systematically identify and remediate IAM security risks"
      ]
    },
    {
      name: "Password Policy Verification",
      description: "Validate AWS account password policies using Python to ensure compliance with identity management requirements.",
      technologies: "IAM Access, AWS Identity Center, Python",
      github: "https://github.com/rns-1611/AWS_Password_Lab",
      achievements: [
        "Maps to the following Controls: SOC 2 CC6.2 Logical access security",
        "Maps to the following Controls: NIST 800-53 IA-5 Authenticator management",
        "Intelligent detection of both traditional IAM and AWS Identity Center authentication"
      ]
    }
  ]

  const skills = {
    "Infrastructure Platforms": ["AWS", "VMware", "Nutanix"],
    "Security & Compliance": ["NIST CSF", "NIST 800-53"],
    "Tools & Technologies": ["CloudFormation", "Terraform", "Ansible", "Cisco", "Fortigate", "SolarWinds"],
    "Programming/Scripting": ["Python", "Bash", "JavaScript", "SQL", "Git"],
    "GRC Frameworks": ["NIST RMF", "ISO 27001"],
    "Other Skills": ["Network Hardening", "Network Automation", "Risk Assessment", "Security Auditing", "Policy Development"]
  }

  const certifications = ["Security +"]

  return (
    <div className="app">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <span className="nav-logo">LevelupGRC</span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Ron Seawood</h1>
          <p className="hero-subtitle">Senior Network Engineer | GRC Engineer | AWS Specialist</p>
          <p className="hero-location">Fuquay Varina, NC | Open to Remote</p>
          <div className="hero-social">
            <a href="https://www.linkedin.com/in/ronaldnseawoodjr/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/rns-1611" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:rj@levelupgrc.com">
              Email
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        <section id="about" className={`section ${isVisible.about ? 'visible' : ''}`}>
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <p>
                I'm a Senior Network/GRC Engineer with 10+ years of experience helping organizations 
                build secure, IT infrastructure both on prem and in the cloud. I specialize in Network and AWS security 
                architecture, compliance automation, and risk management frameworks.
              </p>
              <p>
                I'm passionate about making networking infrastructure and security accessible and practical. I believe in doing it right the first time and making room for innovation.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className={`section ${isVisible.skills ? 'visible' : ''}`}>
          <div className="container">
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="skill-category">
                  <h3 className="skill-category-title">{category}</h3>
                  <div className="skill-tags">
                    {skillList.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={`section ${isVisible.projects ? 'visible' : ''}`}>
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    <strong>Technologies:</strong> {project.technologies}
                  </div>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      View on GitHub →
                    </a>
                  )}
                  <ul className="project-achievements">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className={`section ${isVisible.certifications ? 'visible' : ''}`}>
          <div className="container">
            <h2 className="section-title">Certifications</h2>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <span className="certification-icon">🏆</span>
                  <span className="certification-name">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={`section ${isVisible.contact ? 'visible' : ''}`}>
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <p className="contact-text">
                I'm always interested in hearing about new opportunities and challenges in network security, 
                GRC, and cloud architecture.
              </p>
              <div className="contact-links">
                <a href="mailto:rj@levelupgrc.com" className="contact-button primary">
                  Email Me
                </a>
                <a href="https://www.linkedin.com/in/ronaldnseawoodjr/" target="_blank" rel="noopener noreferrer" className="contact-button secondary">
                  LinkedIn
                </a>
                <a href="https://github.com/rns-1611" target="_blank" rel="noopener noreferrer" className="contact-button secondary">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2024 Ron Seawood. Built with React & deployed on AWS</p>
        </div>
      </footer>
    </div>
  )
}

export default App
