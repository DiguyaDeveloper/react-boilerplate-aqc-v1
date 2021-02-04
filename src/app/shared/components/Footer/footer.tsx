import { Container, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer
        className={"footer footer-default"}
      >
        <Container fluid={false}>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="https://www.creative-tim.com" target="_blank">
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a href="https://blog.creative-tim.com" target="_blank">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/license"
                    target="_blank"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
						<nav className="footer-nav">
							<Row>
								<div className="container-footer">
									<div className="container-items">
										<div className="container-address">
											<div className="col-3"></div>
											<div className="col-3"></div>
											<div className="col-3"></div>
											<div className="col-3"></div>
										</div>
										<div className="container-map"></div>
									</div>
								</div>
							</Row>
            </nav>
            <div className="credits ml-auto">
              <div className="copyright">
                &copy; {1900 + new Date().getFullYear()}, made with{" "}
                <i className="fa fa-heart heart" /> by Creative Tim
              </div>
            </div>
          </Row>
        </Container>
      </footer>
	);
};
