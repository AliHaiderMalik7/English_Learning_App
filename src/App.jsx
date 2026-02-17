import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isYearly, setIsYearly] = useState(false)
  
  // Scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          // Also animate child titles and subtitles
          const title = entry.target.querySelector('.section-title')
          const subtitle = entry.target.querySelector('.section-subtitle')
          if (title) title.classList.add('animate-in')
          if (subtitle) subtitle.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all sections and cards
    const sections = document.querySelectorAll('section, .benefit-card, .testimonial-card, .step-card, .preview-card, .pricing-card, .badge-item, .course-card')
    sections.forEach((section) => {
      observer.observe(section)
    })

    // Also observe section titles and subtitles
    const titles = document.querySelectorAll('.section-title, .section-subtitle')
    titles.forEach((title) => {
      observer.observe(title)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
      titles.forEach((title) => {
        observer.unobserve(title)
      })
    }
  }, [])

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <div className="app-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#0d1b2a"/>
                <circle cx="20" cy="16" r="6" fill="#f4a261"/>
                <ellipse cx="18" cy="15" rx="1" ry="1.5" fill="#0d1b2a"/>
                <ellipse cx="22" cy="15" rx="1" ry="1.5" fill="#0d1b2a"/>
                <path d="M 18 18 Q 20 19 22 18" stroke="#0d1b2a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M 12 24 Q 20 28 28 24" stroke="#f4a261" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <span className="app-name">EnglishMaster</span>
          </div>
          <div className="header-actions">
            <button className="btn-login">Login</button>
            <button className="btn-signup">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Learn English Confidently, Anytime, Anywhere.</h1>
            <p className="hero-subtitle">
              Master English fluency, boost your speaking confidence, and unlock career growth opportunities 
              with personalized lessons designed for real-world success.
            </p>
            <button className="btn-primary btn-hero pulse-button">Start Free Trial</button>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Active Learners</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.8★</span>
                <span className="stat-label">Average Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Countries</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="screen-content">
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                  <div className="lesson-card">
                    <h3>Daily Lesson</h3>
                    <p>Conversation Practice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Explore Our English Courses</h2>
          <p className="section-subtitle">From your first words to fluent conversations, Cresca helps you grow in confidence.</p>
          <div className="courses-grid">
            <div className="course-card" style={{ animationDelay: '0.1s' }}>
              <div className="course-icon">🌍</div>
              <h3>Virtual World Tour</h3>
              <p>An advanced, conversation-driven course for confident speakers who love global topics and deep discussions.</p>
              <button className="btn-course">Read More</button>
            </div>
            <div className="course-card" style={{ animationDelay: '0.2s' }}>
              <div className="course-icon">📖</div>
              <h3>English Basics</h3>
              <p>A simple, beginner-friendly course for learners who are still building confidence with English.</p>
              <button className="btn-course">Read More</button>
            </div>
            <div className="course-card" style={{ animationDelay: '0.3s' }}>
              <div className="course-icon">📰</div>
              <h3>The Weekly Brief</h3>
              <p>A news-based English course for anyone who wants to stay informed while improving their language skills.</p>
              <button className="btn-course">Read More</button>
            </div>
            {/* <div className="course-card" style={{ animationDelay: '0.4s' }}>
              <div className="course-icon">💬</div>
              <h3>Conversational English</h3>
              <p>A relaxed, discussion-based course for anyone who wants to speak more naturally and confidently in English.</p>
              <button className="btn-course">Read More</button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Transform Your English Skills</h2>
          <p className="section-subtitle">Focus on real outcomes that matter in your daily life and career</p>
          <div className="benefits-grid">
            <div className="benefit-card" style={{ animationDelay: '0.1s' }}>
              <div className="benefit-icon floating">🗣</div>
              <h3>Speak English Confidently</h3>
              <p>Engage in real conversations without hesitation. Build fluency through interactive speaking exercises.</p>
            </div>
            <div className="benefit-card" style={{ animationDelay: '0.2s' }}>
              <div className="benefit-icon floating" style={{ animationDelay: '0.5s' }}>📚</div>
              <h3>Practical Vocabulary</h3>
              <p>Learn words and phrases you'll actually use in business, travel, and everyday situations.</p>
            </div>
            <div className="benefit-card" style={{ animationDelay: '0.3s' }}>
              <div className="benefit-icon floating" style={{ animationDelay: '1s' }}>🎧</div>
              <h3>Listening Practice</h3>
              <p>Understand native speakers with confidence through immersive audio lessons and real-world scenarios.</p>
            </div>
            <div className="benefit-card" style={{ animationDelay: '0.4s' }}>
              <div className="benefit-icon floating" style={{ animationDelay: '1.5s' }}>📝</div>
              <h3>Real-Life Conversations</h3>
              <p>Practice with scenarios from job interviews, business meetings, and social interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="trust animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Trusted by Thousands of Learners</h2>
          <div className="trust-content">
            <div className="testimonials">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">
                  "This app transformed my confidence. I went from being afraid to speak to leading presentations in English at work!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">A</div>
                  <div>
                    <div className="author-name">Amina K.</div>
                    <div className="author-role">Business Professional, Nigeria</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">
                  "The personalized lessons are amazing. I can finally understand movies and podcasts without subtitles!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">K</div>
                  <div>
                    <div className="author-name">Kwame M.</div>
                    <div className="author-role">Student, Ghana</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">
                  "Best investment I've made. My English improved so much that I got promoted to an international role!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">Z</div>
                  <div>
                    <div className="author-name">Zara T.</div>
                    <div className="author-role">Marketing Manager, Kenya</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="trust-badges">
              <div className="badge-item">
                <div className="badge-number">10,000+</div>
                <div className="badge-label">Active Students</div>
              </div>
              <div className="badge-item">
                <div className="badge-number">4.8/5</div>
                <div className="badge-label">App Store Rating</div>
              </div>
              <div className="badge-item">
                <div className="badge-number">50+</div>
                <div className="badge-label">Countries</div>
              </div>
              <div className="badge-item">
                <div className="badge-number">Certified</div>
                <div className="badge-label">Expert Teachers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Process Section */}
      <section className="process animate-on-scroll">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Start your journey in four simple steps</p>
          <div className="process-steps">
            <div className="step-card" style={{ animationDelay: '0.1s' }}>
              <div className="step-number pulse">1</div>
              <h3>Take Placement Test</h3>
              <p>Assess your current level with our quick 5-minute test to get personalized recommendations.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card" style={{ animationDelay: '0.2s' }}>
              <div className="step-number pulse" style={{ animationDelay: '0.2s' }}>2</div>
              <h3>Get Personalized Lessons</h3>
              <p>Receive a custom learning path tailored to your goals, schedule, and current proficiency.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card" style={{ animationDelay: '0.3s' }}>
              <div className="step-number pulse" style={{ animationDelay: '0.4s' }}>3</div>
              <h3>Practice Daily</h3>
              <p>Engage with bite-sized lessons, speaking exercises, and interactive content every day.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card" style={{ animationDelay: '0.4s' }}>
              <div className="step-number pulse" style={{ animationDelay: '0.6s' }}>4</div>
              <h3>Track Your Progress</h3>
              <p>Monitor your improvement with detailed analytics and celebrate milestones along the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Preview Section */}
      <section className="preview animate-on-scroll">
        <div className="container">
          <h2 className="section-title">See What You'll Get</h2>
          <p className="section-subtitle">Experience our intuitive learning platform</p>
          <div className="preview-grid">
            <div className="preview-card" style={{ animationDelay: '0.1s' }}>
              <div className="preview-icon floating">📱</div>
              <h3>Lesson Interface</h3>
              <p>Clean, intuitive design that makes learning enjoyable and distraction-free.</p>
            </div>
            <div className="preview-card" style={{ animationDelay: '0.2s' }}>
              <div className="preview-icon floating" style={{ animationDelay: '0.5s' }}>📊</div>
              <h3>Progress Tracking</h3>
              <p>Visual dashboards show your improvement with detailed analytics and insights.</p>
            </div>
            <div className="preview-card" style={{ animationDelay: '0.3s' }}>
              <div className="preview-icon floating" style={{ animationDelay: '1s' }}>🎴</div>
              <h3>Vocabulary Cards</h3>
              <p>Interactive flashcards with audio pronunciation and example sentences.</p>
            </div>
            <div className="preview-card" style={{ animationDelay: '0.4s' }}>
              <div className="preview-icon floating" style={{ animationDelay: '1.5s' }}>🎤</div>
              <h3>Speaking Exercises</h3>
              <p>AI-powered pronunciation feedback helps you perfect your accent and fluency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">Choose the plan that works best for you</p>
          <div className="pricing-toggle">
            <span className={!isYearly ? "active" : ""}>Monthly</span>
            <button 
              className={`toggle-switch ${isYearly ? 'yearly' : ''}`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <div className="toggle-slider"></div>
            </button>
            <span className={isYearly ? "active" : ""}>Yearly <span className="save-badge">Save 20%</span></span>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Free</h3>
              <div className="price">
                <span className="price-amount">$0</span>
                <span className="price-period">/month</span>
              </div>
              <ul className="price-features">
                <li>✓ 5 lessons per week</li>
                <li>✓ Basic vocabulary</li>
                <li>✓ Limited speaking practice</li>
                <li>✓ Progress tracking</li>
              </ul>
              <button className="btn-outline">Get Started</button>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Premium</h3>
              <div className="price">
                <span className="price-amount">${isYearly ? '8' : '10'}</span>
                <span className="price-period">/month</span>
              </div>
              <ul className="price-features">
                <li>✓ Unlimited lessons</li>
                <li>✓ Advanced vocabulary</li>
                <li>✓ Unlimited speaking practice</li>
                <li>✓ AI pronunciation feedback</li>
                <li>✓ Personalized learning path</li>
                <li>✓ Priority support</li>
              </ul>
              <button className="btn-primary">Start Free Trial</button>
            </div>
            <div className="pricing-card">
              <h3>Pro</h3>
              <div className="price">
                <span className="price-amount">${isYearly ? '15' : '19'}</span>
                <span className="price-period">/month</span>
              </div>
              <ul className="price-features">
                <li>✓ Everything in Premium</li>
                <li>✓ 1-on-1 tutor sessions</li>
                <li>✓ Business English focus</li>
                <li>✓ Certificate of completion</li>
                <li>✓ Career coaching</li>
              </ul>
              <button className="btn-outline">Contact Sales</button>
            </div>
          </div>
          <div className="money-back">
            <span className="guarantee-badge">✓ 30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <h2 className="cta-title">Start Your English Journey Today</h2>
          <p className="cta-subtitle">Join thousands of learners who are transforming their English skills</p>
          <button className="btn-primary btn-large pulse-button">Get Started Free</button>
          <p className="cta-note">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section footer-brand">
              <div className="footer-logo">
                <div className="app-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#0d1b2a"/>
                    <circle cx="20" cy="16" r="6" fill="#f4a261"/>
                    <ellipse cx="18" cy="15" rx="1" ry="1.5" fill="#0d1b2a"/>
                    <ellipse cx="22" cy="15" rx="1" ry="1.5" fill="#0d1b2a"/>
                    <path d="M 18 18 Q 20 19 22 18" stroke="#0d1b2a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    <path d="M 12 24 Q 20 28 28 24" stroke="#f4a261" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span className="app-name">Cresca</span>
              </div>
              <p className="footer-tagline">Anytime, Anywhere Online English Learning</p>
            </div>

            <div className="footer-section footer-links">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#contacts">Contacts</a></li>
              </ul>
            </div>

            <div className="footer-section footer-contact">
              <h4 className="footer-heading">Contacts</h4>
              <ul className="footer-list">
                <li>
                  <span className="contact-icon">📞</span>
                  <a href="tel:+27729872345">+27 72 987 2345</a>
                </li>
                <li>
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:info@crescaenglish.com">info@crescaenglish.com</a>
                </li>
                <li>
                  <span className="contact-icon">📍</span>
                  <a href="#map">View Map</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">&copy; 2025 Cresca. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy policy</a>
              <span className="footer-separator">.</span>
              <a href="#terms">Terms of use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
