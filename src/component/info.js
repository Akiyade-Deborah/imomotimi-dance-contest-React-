function Info (){
    return (
    <div>
      <section>
  <div className="contact-section" id="contact">
    <div className="contact-info">
      <h2>For More Information:</h2>
      <p>
        <strong>Hotlines:</strong> 07035973706 &amp; 08108112759
      </p>
      <p>
        <strong>Email:</strong> info@ijawdancecontest.ng
      </p>
      <p>
        <strong>Audition Location:</strong> Nitro Studio, Tamara Hall, Otiotio
        Road, Yenegoa, Bayelsa State.
      </p>
    </div>
    <div className="contact-form">
      <form action="" method="POST">
        <div className="form-group">
          <div className="inputicon">
            <i className="fas fa-user" />
            <input
              type="text"
              name="fname"
              placeholder="Name"
              className="fname"
            />
          </div>
          <div className="inputicon">
            <i className="fas fa-phone-volume" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="phone"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="inputicon">
            <i className="fas fa-envelope" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="email"
            />
          </div>
          <div className="inputicon">
            <i className="fas fa-info-circle" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="subject"
            />
          </div>
        </div>
        <div className="inputicon">
          <i className="fa-solid fa-pencil pencil" />
          <textarea
            name="message"
            id="message"
            placeholder="How can we help you? Feel free to get in touch!"
            defaultValue={""}
          />
        </div>
        <button type="submit">Get In Touch</button>
      </form>
    </div>
  </div>
</section>


    </div>

)
}
export default Info;