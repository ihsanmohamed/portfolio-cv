import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">
        <Mail color="var(--accent-color)" /> Get In Touch
      </h2>

      <div className="contact-container">
        <motion.div
          className="contact-info glass"
          style={{ padding: '2rem' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Let's talk!
          </h3>
          <p>
            I am currently seeking a Software Engineering / Web Development Intern opportunity.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
              <Mail color="var(--accent-color)" />
              <span>moh.ihsanarif@gmail.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
              <Phone color="var(--accent-color)" />
              <span>+94 77 855 4082</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
              <MapPin color="var(--accent-color)" />
              <span>Kalubowila Road, Dehiwala</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form glass"
          action="https://formsubmit.co/moh.ihsanarif@gmail.com"
          method="POST"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" className="form-control" required></textarea>
          </div>

          <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
            <Send size={18} /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;