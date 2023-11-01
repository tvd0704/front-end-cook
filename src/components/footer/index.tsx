import "./footer.css";
import { CiPaperplane } from "react-icons/ci";

export function Footer() {
  return (
    <div className="container-footer">
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">FB.</h5>
              <p className="small text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="small text-white mb-0">
                &copy; Copyrights. All rights reserved.{" "}
                <a className="text-primary" href="#bootstrap">
                  Bootstrapious.com
                </a>
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#started">Get started</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#started">Get started</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Newsletter</h5>
              <p className="small text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <form action="#">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  ></input>
                  <button
                    className="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    <CiPaperplane />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
