// Week 7: Migrating Your Interactive Portfolio to React
// This starter file guides you through migrating your Week 6 vanilla JavaScript portfolio to React

import './App.css'
import { useEffect } from 'react'

function App() {
  
  // ============================================
  // PART 1: EVENT HANDLER FUNCTIONS
  // ============================================
  // TODO: Move your Week 6 event handler functions here
  // In Week 6, you had functions like:
  // - handleNavClick (for smooth scroll)
  // - filterProjects (for project filtering)
  // - handleFormSubmit (for form validation)
  //
  // HINT: These will be regular JavaScript functions defined inside App component
  // Example from Week 6:
  //   const filterProjects = (category) => {
  //     // Your filtering logic here
  //   }
function App() {
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* ... */}
      <li><a href="#home" className="nav-link" onClick={handleNavClick}>Home</a></li>
      {/* every nav link gets onClick={handleNavClick} */}
    </>
  )
}

function App() {
  const handleFilterClick = (e) => {
    const filterValue = e.currentTarget.getAttribute('data-filter');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (filterValue === 'all' || cardCategory === filterValue) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });

    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn =>
      btn.classList.remove('active')
    );
    e.currentTarget.classList.add('active');
  };

  return (
    <>
      {/* ... */}
      <button className="filter-btn active" data-filter="all" onClick={handleFilterClick}>All Projects</button>
      {/* every filter button gets onClick={handleFilterClick} */}
    </>
  )
}

function App() {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    // Your validation logic here
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    let isValid = true;

    if (nameValue.length < 2) {
      // show error
      isValid = false;
    }

    // etc - all your Week 6 validation logic

    if (isValid) {
      console.log('Form submitted!');
      // Show success message
    }
  };

  return (
    <>
      {/* ... */}
      <form id="contact-form" className="contact-form" onSubmit={handleFormSubmit}>
        {/* your Week 6 form fields, with htmlFor on every label */}
      </form>
    </>
  )
}

function App() {
  // ... your handlers from Steps 1 to 3 ...

  // Scroll handler for active nav highlighting
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link =>
          link.classList.remove('active')
        );
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  };

  // Copy this block as is: attach the listener once on load, remove it on unload
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* All your JSX */}
    </>
  )
}

function App() {
  const handleMobileMenuToggle = () => {
    document.querySelector('.nav-menu').classList.toggle('active');
    document.querySelector('.nav-toggle').classList.toggle('active');
  };

  return (
    <>
      {/* ... */}
      <div className="nav-toggle" onClick={handleMobileMenuToggle}>
        <span></span><span></span><span></span>
      </div>
    </>
  )
}
  
  // TODO: Add smooth scroll handler
  // Replace: navLinks.forEach(link => link.addEventListener('click', ...))
  // With: const handleNavClick = (e) => { ... }
  
  // TODO: Add filter handler
  // Replace: filterButtons.forEach(button => button.addEventListener('click', ...))
  // With: const handleFilterClick = (category) => { ... }
  
  // TODO: Add form validation functions
  // You'll need: isValidEmail, showError, clearError, showSuccess
  // These can stay mostly the same!
  
  // TODO: Add form submit handler
  // Replace: contactForm.addEventListener('submit', ...)
  // With: const handleFormSubmit = (e) => { ... }


  // ============================================
  // PART 2: JSX RETURN STATEMENT
  // ============================================
  // TODO: Copy your Week 6 HTML structure here
  // Remember to convert HTML to JSX:
  // - class → className
  // - onclick → onClick
  // - onsubmit → onSubmit
  // - for → htmlFor
  // - All event attributes use camelCase
  //
  // IMPORTANT: Put EVERYTHING in this one return statement!
  // This week we're building a MONOLITHIC component (one big component)
  // Week 8 will teach you how to break this into smaller pieces

  return (
      <div className="portfolio">
      {/* <!-- Navigation Bar --> */}
      <nav id="navbar">
          <div className="nav-brand">
              <span>Alex Johnson</span>
          </div>
          <ul className="nav-menu">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#skills" className="nav-link">Skills</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          {/* <!-- Mobile menu toggle (for bonus implementation) --> */}
          <div className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
          </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <section id="home" className="hero">
          <div className="hero-content">
              <h1 className="hero-title">Alex Johnson</h1>
              <p className="hero-subtitle">Frontend Developer & UI Designer</p>
              <p className="hero-tagline">Creating beautiful, responsive web experiences with modern technologies</p>
              <div className="hero-buttons">
                  <a href="#projects" className="btn btn-primary">View Projects</a>
                  <a href="#contact" className="btn btn-secondary">Get In Touch</a>
              </div>
          </div>
      </section>

      {/* <!-- About Section --> */}
      <section id="about" className="section">
          <div className="container">
              <h2>About Me</h2>
              <div className="about-grid">
                  <div className="about-text">
                      <p>I'm a passionate frontend developer with 3 years of experience creating engaging digital experiences. I specialize in React, modern CSS, and responsive design patterns that work beautifully across all devices.</p>
                      <div className="about-details">
                          <div className="detail-item">
                              <span className="detail-icon">📍</span>
                              <span>San Francisco, CA</span>
                          </div>
                          <div className="detail-item">
                              <span className="detail-icon">✉️</span>
                              <a href="mailto:alex@example.com">alex@example.com</a>
                          </div>
                          <div className="detail-item">
                              <span className="detail-icon">📱</span>
                              <span>(555) 123-4567</span>
                          </div>
                      </div>
                  </div>
                  <div className="about-availability">
                      <h3>Currently Available For:</h3>
                      <div className="availability-tags">
                          <span className="tag tag-available">Freelance</span>
                          <span className="tag tag-available">Full-Time</span>
                          <span className="tag tag-available">Remote</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* <!-- Skills Section --> */}
      <section id="skills" className="section section-alt">
          <div className="container">
              <h2>Skills & Technologies</h2>
              <div className="skills-grid">
                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">⚛️</span>
                          <h3 className="skill-name">React</h3>
                      </div>
                      <div className="skill-category">Frontend Framework</div>
                      <div className="skill-level">
                        <div className="skill-progress" style={{'--skill-level': '90%' }}></div>
                      </div>
                      <span className="skill-percentage">90%</span>
                  </div>

                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">🎨</span>
                          <h3 className="skill-name">CSS3</h3>
                      </div>
                      <div className="skill-category">Styling</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{'--skill-level': '95%' }}></div>
                      </div>
                      <span className="skill-percentage">95%</span>
                  </div>

                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">📱</span>
                          <h3 className="skill-name">Responsive Design</h3>
                      </div>
                      <div className="skill-category">Design</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{'--skill-level': '88%' }}></div>
                      </div>
                      <span className="skill-percentage">88%</span>
                  </div>

                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">🚀</span>
                          <h3 className="skill-name">JavaScript</h3>
                      </div>
                      <div className="skill-category">Programming</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{'--skill-level': '85%' }}></div>
                      </div>
                      <span className="skill-percentage">85%</span>
                  </div>

                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">🎯</span>
                          <h3 className="skill-name">Figma</h3>
                      </div>
                      <div className="skill-category">Design Tools</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{'--skill-level': '80%' }}></div>
                      </div>
                      <span className="skill-percentage">80%</span>
                  </div>

                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">🌐</span>
                          <h3 className="skill-name">Node.js</h3>
                      </div>
                      <div className="skill-category">Backend</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{'--skill-level': '75%' }}></div>
                      </div>
                      <span className="skill-percentage">75%</span>
                  </div>
              </div>
          </div>
      </section>

      {/* <!-- Projects Section --> */}
      <section id="projects" className="section">
          <div className="container">
              <h2>Featured Projects</h2>

              {/* <!-- TODO: Add JavaScript to make these filter buttons interactive --> */}
              <div className="filter-buttons">
                  <button className="filter-btn active" data-filter="all">All Projects</button>
                  <button className="filter-btn" data-filter="frontend">Frontend</button>
                  <button className="filter-btn" data-filter="fullstack">Full-Stack</button>
                  <button className="filter-btn" data-filter="design">Design</button>
                  <button className="filter-btn" data-filter="webapp">Web App</button>
              </div>

              <div className="projects-grid">
                  {/* <!-- TODO: Add data-category attribute for filtering --> */}
                  <div className="project-card featured" data-category="fullstack">
                      <div className="project-image">
                          <img src="https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+App" alt="E-Commerce Platform"></img>
                          <div className="project-overlay">
                              <div className="project-links">
                                  <a href="#" className="project-link">
                                      <span>🔗</span> Live Demo
                                  </a>
                                  <a href="#" className="project-link">
                                      <span>💻</span> Code
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="project-content">
                          <div className="project-header">
                              <h3 className="project-title">E-Commerce Platform</h3>
                              <span className="project-category">Full-Stack</span>
                          </div>
                          <p className="project-description">A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.</p>
                          <div className="project-tags">
                              <span className="project-tag">React</span>
                              <span className="project-tag">Node.js</span>
                              <span className="project-tag">MongoDB</span>
                              <span className="project-tag">Stripe</span>
                          </div>
                      </div>
                  </div>

                  <div className="project-card" data-category="frontend">
                      <div className="project-image">
                          <img src="https://via.placeholder.com/400x250/059669/ffffff?text=Weather+App" alt="Weather Dashboard"></img>
                          <div className="project-overlay">
                              <div className="project-links">
                                  <a href="#" className="project-link">
                                      <span>🔗</span> Live Demo
                                  </a>
                                  <a href="#" className="project-link">
                                      <span>💻</span> Code
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="project-content">
                          <div className="project-header">
                              <h3 className="project-title">Weather Dashboard</h3>
                              <span className="project-category">Frontend</span>
                          </div>
                          <p className="project-description">Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.</p>
                          <div className="project-tags">
                              <span className="project-tag">JavaScript</span>
                              <span className="project-tag">CSS3</span>
                              <span className="project-tag">API</span>
                          </div>
                      </div>
                  </div>

                  <div className="project-card" data-category="webapp">
                      <div className="project-image">
                          <img src="https://via.placeholder.com/400x250/dc2626/ffffff?text=Task+Manager" alt="Task Management App"></img>
                          <div className="project-overlay">
                              <div className="project-links">
                                  <a href="#" className="project-link">
                                      <span>🔗</span> Live Demo
                                  </a>
                                  <a href="#" className="project-link">
                                      <span>💻</span> Code
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="project-content">
                          <div className="project-header">
                              <h3 className="project-title">Task Management App</h3>
                              <span className="project-category">Web App</span>
                          </div>
                          <p className="project-description">Productivity app with drag-and-drop functionality, project collaboration, and deadline tracking.</p>
                          <div className="project-tags">
                              <span className="project-tag">React</span>
                              <span className="project-tag">TypeScript</span>
                              <span className="project-tag">Firebase</span>
                          </div>
                      </div>
                  </div>

                  <div className="project-card" data-category="design">
                      <div className="project-image">
                          <img src="https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio+Site" alt="Portfolio Website"></img>
                          <div className="project-overlay">
                              <div className="project-links">
                                  <a href="#" className="project-link">
                                      <span>🔗</span> Live Demo
                                  </a>
                                  <a href="#" className="project-link">
                                      <span>💻</span> Code
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="project-content">
                          <div className="project-header">
                              <h3 className="project-title">Creative Portfolio</h3>
                              <span className="project-category">Design</span>
                          </div>
                          <p className="project-description">Responsive portfolio website for a graphic designer with interactive galleries and smooth animations.</p>
                          <div className="project-tags">
                              <span className="project-tag">HTML5</span>
                              <span className="project-tag">CSS3</span>
                              <span className="project-tag">GSAP</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section id="contact" className="section section-alt">
          <div className="container">
              <h2>Get In Touch</h2>
              <div className="contact-content">
                  <p>I'm always interested in hearing about new opportunities and projects. Feel free to reach out!</p>

                  {/* <!-- TODO: Add JavaScript to validate this form in real-time --> */}
                  <form id="contact-form" className="contact-form">
                      <div className="form-grid">
                          <div className="form-group">
                              <label for="name">Name *</label>
                              <input type="text" id="name" name="name" required></input>
                              {/* <!-- TODO: Add error message element here --> */}
                          </div>

                          <div className="form-group">
                              <label for="email">Email *</label>
                              <input type="email" id="email" name="email" required></input>
                              {/* <!-- TODO: Add error message element here --> */}
                          </div>

                          <div className="form-group form-group-full">
                              <label for="subject">Subject</label>
                              <input type="text" id="subject" name="subject"></input>
                          </div>

                          <div className="form-group form-group-full">
                              <label for="message">Message *</label>
                              <textarea id="message" name="message" rows="5" required></textarea>
                              {/* <!-- TODO: Add error message element here --> */}
                          </div>

                          <div className="form-group form-group-full">
                              <button type="submit" className="btn btn-primary">Send Message</button>
                          </div>
                      </div>
                      {/* <!-- TODO: Add success message element here --> */}
                  </form>
              </div>
          </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="footer">
          <div className="container">
              <div className="footer-content">
                  <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
                  <div className="social-links">
                      <a href="#" className="social-link">GitHub</a>
                      <a href="#" className="social-link">LinkedIn</a>
                      <a href="#" className="social-link">Twitter</a>
                      <a href="#" className="social-link">Dribbble</a>
                  </div>
              </div>
          </div>
      </footer>

      {/* <!-- TODO: Create script.js file and add JavaScript functionality --> */}
      <script src="script.js"></script>
    </div>
  )
}

export default App
