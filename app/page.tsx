"use client";
import Image from "next/image";

export default function Home() {
  const openWhatsApp = () => {
    const phoneNumber = "919319649564";
    const message = "Hi, I visited your website and would like to give order of sweets.";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };
  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="whole">
      <main>
        <div className="hero-section" id="home">
          <div className="container">
            <div className="left-text">
              <h1>ABC Sweet Shop</h1>
              <h1>Pure & Traditional <strong>Indian Sweets</strong></h1>
              <h3>Freshly prepared mithai for festivals, weddings, and everyday joy.</h3>
              <button onClick={openWhatsApp}>Order on Whatsapp</button>

            </div>
            <div className="right-image">
              <img src="/images/hero-section.png" alt="" />
            </div>

          </div>
          <h3>⭐ 500+ happy customers</h3>
        </div>
        <div className="second-section" id="speciality">
          <div className="section2-header">
            <h1>Why Our Sweets Are Special</h1>
            <div className="flourish-divider1">
              <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <path d="M 15,30 Q 20,15 30,20 Q 40,25 45,30 Q 40,35 30,40 Q 20,45 15,30 Z"
                  fill="none" stroke="maroon" strokeWidth="2" />
                <path d="M 30,10 Q 35,25 30,30 Q 25,25 30,10 Z"
                  fill="none" stroke="maroon" strokeWidth="2" />
                <path d="M 30,50 Q 25,35 30,30 Q 35,35 30,50 Z"
                  fill="none" stroke="maroon" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="section2-container">
            <div className="left-side">
              <img src="/images/secondPage.png" alt="" />
            </div>
            <div className="right-side">
              <h2>Made the traditional way</h2>
              <h1>Crafted with Pure Milk
                and Traditional Recipes
              </h1>
              <p>Every batch of our mithai is prepared fresh using pure milk, slow cooking, and recipes passed down through generations. No shortcuts. No compromise. Just tradition</p>

            </div>
          </div>
        </div>
        <div className="third-section" id="specials">
          <div className="section3-header">
            <h1>Our Special Sweets</h1>
            <div className="flourish-divider2">
              <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <path d="M 15,30 Q 20,15 30,20 Q 40,25 45,30 Q 40,35 30,40 Q 20,45 15,30 Z"
                  fill="none" stroke="#ffefdb" strokeWidth="2" />
                <path d="M 30,10 Q 35,25 30,30 Q 25,25 30,10 Z"
                  fill="none" stroke="#ffefdb" strokeWidth="2" />
                <path d="M 30,50 Q 25,35 30,30 Q 35,35 30,50 Z"
                  fill="none" stroke="#ffefdb" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="section3-container">
            <div className="card">
              <div className="img">
                <img src="/images/kaju-katli.png" alt="" /></div>
              <h3>Kaju Katli</h3>
              <p>Pure cashew • Rich taste • Premium favourite</p>
              <button onClick={scrollToContact}>Order Now</button>
            </div>
            <div className="card">
              <div className="img">
                <img src="/images/Gulab-Jamun.png" alt="" /></div>
              <h3>Gulab Jamun</h3>
              <p>Soft center • Juicy syrup • Crowd favorite</p>
              <button onClick={scrollToContact}>Order Now</button>
            </div>
            <div className="card">
              <div className="img">
                <img src="/images/Rasgulla.png" alt="" /></div>
              <h3>Rasgulla</h3>
              <p>Spongy texture • Light syrup • Authentic classic</p>
              <button onClick={scrollToContact}>Order Now</button>
            </div>
            <div className="card">
              <div className="img">
                <img src="/images/besan-Ladoo.png" alt="" /></div>
              <h3>Besan Ladoo</h3>
              <p>Slow roasted • Handmade • Traditional delight</p>
              <button onClick={scrollToContact}>Order Now</button>
            </div>
          </div>
        </div>
        <div className="fourth-section" id="services">
          <div className="section4-header">
            <h1>Sweets for Every Occasion</h1>
            <div className="flourish-divider1">
              <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <path d="M 15,30 Q 20,15 30,20 Q 40,25 45,30 Q 40,35 30,40 Q 20,45 15,30 Z"
                  fill="none" stroke="maroon" strokeWidth="2" />
                <path d="M 30,10 Q 35,25 30,30 Q 25,25 30,10 Z"
                  fill="none" stroke="maroon" strokeWidth="2" />
                <path d="M 30,50 Q 25,35 30,30 Q 35,35 30,50 Z"
                  fill="none" stroke="maroon" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="section4_desktop-container">
            <div className="section4-card">
              <div className="img">
                <img src="/images/wedding.png" alt="" />
              </div>
              <div className="card-text">
                <h2>Wedding</h2>
                <p>Handcrafted mithai for weddings, engagements, and family celebrations — made to impress every guest.</p>
                <p>• Bulk orders available</p>
              </div>
            </div>
            <div className="section4-card">
              <div className="img">
                <img src="/images/birthday.png" alt="" />
              </div>
              <div className="card-text">
                <h2>Birthday</h2>
                <p>Fresh, joyful sweets that make birthdays sweeter, brighter, and memorable for all ages.</p>
                <p>• Custom boxes available</p>
              </div>
            </div>
            <div className="section4-card">
              <div className="img">
                <img src="/images/festival.png" alt="" />
              </div>
              <div className="card-text">
                <h2>Festival</h2>
                <p>Traditional sweets prepared for Diwali, Rakhi, Navratri, and every festive moment.</p>
                <p>• Seasonal specials</p>
              </div>
            </div>
            <div className="section4-card">
              <div className="img">
                <img src="/images/everyday.png" alt="" />
              </div>
              <div className="card-text">
                <h2>Everyday</h2>
                <p>Simple, fresh mithai made for everyday cravings, tea-time, and family moments.</p>
                <p>• Fresh daily</p>
              </div>
            </div>
          </div>
          <div className="section4_mobile-container">
            <div className="section4-card">
              <h2>Wedding</h2>
              <div className="img">
                <img src="/images/wedding.png" alt="" />
              </div>
              <div className="card-text">
                <p>Handcrafted mithai for weddings, engagements, and family celebrations — made to impress every guest.</p>
                <p>• Bulk orders available</p>
              </div>
            </div>
            <div className="section4-card">
              <h2>Birthday</h2>
              <div className="img">
                <img src="/images/birthday.png" alt="" />
              </div>
              <div className="card-text">
                <p>Fresh, joyful sweets that make birthdays sweeter, brighter, and memorable for all ages.</p>
                <p>• Custom boxes available</p>
              </div>
            </div>
            <div className="section4-card">
              <h2>Festival</h2>
              <div className="img">
                <img src="/images/festival.png" alt="" />
              </div>
              <div className="card-text">
                <p>Traditional sweets prepared for Diwali, Rakhi, Navratri, and every festive moment.</p>
                <p>• Seasonal specials</p>
              </div>
            </div>
            <div className="section4-card">
              <h2>Everyday</h2>
              <div className="img">
                <img src="/images/everyday.png" alt="" />
              </div>
              <div className="card-text">
                <p>Simple, fresh mithai made for everyday cravings, tea-time, and family moments.</p>
                <p>• Fresh daily</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fifth-section" id="contact">
          <div className="contact">
            <h1>Visit Us Today</h1>
            <div className="flourish-divider_fifth">
              <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <path d="M 15,30 Q 20,15 30,20 Q 40,25 45,30 Q 40,35 30,40 Q 20,45 15,30 Z"
                  fill="none" stroke="#ffefdb" strokeWidth="2" />
                <path d="M 30,10 Q 35,25 30,30 Q 25,25 30,10 Z"
                  fill="none" stroke="#ffefdb" strokeWidth="2" />
                <path d="M 30,50 Q 25,35 30,30 Q 35,35 30,50 Z"
                  fill="none" stroke="#ffefdb" strokeWidth="2" />
              </svg>
            </div>

            <div className="contact-info">
              <p><span className="contact-span">📞 Call:</span> 91+ 123456789</p>
              <p><span className="contact-span">✉️ Email:</span> owner's_gmailid.in</p>
              <p><span className="contact-span">🕘 Open:</span> 9 AM – 10 PM (All Days)</p>
              <p className="delivery">🚚 Home Delivery Available</p>

              <button onClick={openWhatsApp}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition">
                Order on WhatsApp
              </button>
            </div>
          </div>

          <div className="location">
            <h1>Location</h1>
            <div className="flourish-divider_fifth">
              <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <path d="M 15,30 Q 20,15 30,20 Q 40,25 45,30 Q 40,35 30,40 Q 20,45 15,30 Z"
                  fill="none" stroke="#ffefdb" strokeWidth="2" />
                <path d="M 30,10 Q 35,25 30,30 Q 25,25 30,10 Z"
                  fill="none" stroke="#ffefdb" strokeWidth="2" />
                <path d="M 30,50 Q 25,35 30,30 Q 35,35 30,50 Z"
                  fill="none" stroke="#ffefdb" strokeWidth="2" />
              </svg>
            </div>

            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.3515001332453!2d78.04802477535694!3d30.340958774775558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929d976b57665%3A0x3a615a544b5e4cba!2sGajendra%20Sweets%20and%20Dairy%20Products!5e0!3m2!1sen!2sin!4v1769747904545!5m2!1sen!2sin" style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

              <p className="address">
                <strong>📍 Abc Sweet shop</strong><br />
                Main Road, Near City Mall<br />
                Your City – 123456
              </p>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-container">

            {/* Brand */}
            <div className="footer-brand">
              <h2>Abc Sweet Shop</h2>
              <p>
                Trusted by 500+ happy customers in Dehradun
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#specials">Special Items</a>
              <a href="#speciality">Why Choose Us</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <h3>Contact</h3>
              <p>📞 +91 XXXXXXXXXX</p>
              <p>📧 owner@gmail.com</p>
              <button
                type="button"
                className="footer-whatsapp"
                onClick={openWhatsApp}
              >
                💬 Order on WhatsApp
              </button>
            </div>

          </div>

          <div className="footer-bottom">
            © 2026 Abc Sweet shop. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
