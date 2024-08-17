const Footer = () => {
  return (
    <div>
      <footer className=" bg-base-200 text-base-content p-10">
        <div className="footer max-w-7xl mx-auto">
          <aside>
            <a className="text-xl font-bold">
              PM<span className="text-3xl text-yellow-500">S</span>hopping
            </a>
            <p>
              PM Industries Ltd.
              <br />
              Providing reliable tech since 1998
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
