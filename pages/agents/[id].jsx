import { useEffect } from "react";
import Default from "../../layouts/default";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { BiBed, BiBath } from "react-icons/bi";
import { MdSquareFoot } from "react-icons/md";
import PageInfo from "../../components/Main/PageInfo";

const Agents = () => {
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#f4f5f6";
  }, []);
  return (
    <Default>
      <div className="agents-page">
        <div className="container-fluid">
          <PageInfo title="Our Agents" image="/img/breadcrumb-1.jpg">
            <ul>
              <li>
                <a href="#">Home</a>
                <span>/</span>
                <a href="#">Agents</a>
                <span>/</span>
                <a href="#" className="active">
                  Agent Name
                </a>
              </li>
            </ul>
          </PageInfo>
        </div>
        <section
          className="agent-wrap "
          style={{ paddingBottom: "20px", marginTop: "20px" }}
        >
          <div className="container ">
            <div className="agent-details-wrap">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <div className="agent-img">
                    <img src="/img/agents/agent-1.jpg" alt="Image" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="agent-info-wrap">
                    <div className="agent-name">
                      <h2>Rocklaura Henry</h2>
                      <span>Real Estate Agent</span>
                    </div>
                    <ul className="agent-info list-style">
                      <li>
                        <b>Experience:</b>
                        <span>5 Years</span>
                      </li>
                      <li>
                        <b>Address:</b>
                        <span>77 Morris St. Ridgewood, NJ 67655 </span>
                      </li>
                      <li>
                        <b>Phone:</b>
                        <span>+1 719-504-1984 </span>
                      </li>
                      <li>
                        <b>Email:</b>
                        <span>
                          <a href="#" className="__cf_email__">
                            [email&#160;protected]
                          </a>
                        </span>
                      </li>
                      <li>
                        <b>Fax:</b>
                        <span>+2 329-504-1984</span>
                      </li>
                    </ul>
                    <div className="agent-social">
                      <span>Follow On:</span>
                      <ul className="social-profile list-style style1">
                        <li>
                          <a target="_blank" href="https://facebook.com/">
                            <i>
                              <FaFacebookF />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="https://twitter.com/">
                            <i>
                              <FaTwitter />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="https://instagram.com/">
                            <i>
                              <FaInstagram />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="https://linkedin.com/">
                            <i>
                              <FaLinkedin />
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="agent-desc">
                    <h4>About Rocklaura Henry</h4>
                    <p>
                      Curabitur non nulla sit amet nisl tempus convallis quis ac
                      lectus. Donec sollicitudin molestie malesuada. Nulla
                      porttitor accumsan tincidunt. Praesent sapien massa,
                      convallis a pellentesque nec, egestas non nisi. Curabitur
                      arcu erat, accumsan id imperdiet et, porttitor at sem.
                      Curabitur non nulla sit amet nisl tempus convallis quis ac
                      lectus. Proin eget tortor risus. Donec rutrum congue leo
                      eget malesuada. Pellentesque in ipsum id orci porta
                      dapibus.
                    </p>
                    <p>
                      Cras ultricies ligula sed magna dictum porta. Nulla quis
                      lorem ut libero malesuada feugiat. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Quisque velit nisi,
                      pretium ut lacinia in, elementum id enim. Vestibulum ante
                      ipsum primis in faucibus orci luctus et ultrices posuere
                      cubilia Curae; Donec velit neque,
                    </p>
                    <ul className="nav nav-tabs agent-tablist" role="tablist">
                      <li className="nav-item">
                        <button
                          className="nav-link active"
                          data-bs-toggle="tab"
                          data-bs-target="#tab_1"
                          type="button"
                          role="tab"
                        >
                          Listed Properties
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#tab_2"
                          type="button"
                          role="tab"
                        >
                          Customer Review
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content hw-tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="tab_1"
                        role="tabpanel"
                      >
                        <div className="row justify-content-center">
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style2">
                              <div className="property-img-slider">
                                <img
                                  src="/img/property/property-2.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="property-info">
                                <div className="property-status-wrap">
                                  <span className="property-status">
                                    For Sale
                                  </span>
                                  <p className="property-price">$21,400</p>
                                </div>
                                <h3>
                                  <a href="listing-details.html">
                                    Modern Apartment
                                  </a>
                                </h3>
                                <p>
                                  <i className="flaticon-location"></i>123/A,
                                  Miles Ave, North Canal
                                </p>
                                <ul className="property-metainfo list-style">
                                  <li>
                                    <i>
                                      <BiBed />
                                    </i>
                                    05
                                  </li>
                                  <li>
                                    <i>
                                      <BiBath />
                                    </i>
                                    03
                                  </li>
                                  <li>
                                    <i>
                                      <MdSquareFoot />
                                    </i>
                                    2500 sqft
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style2">
                              <div className="property-img-slider">
                                <img
                                  src="/img/property/property-3.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="property-info">
                                <div className="property-status-wrap">
                                  <span className="property-status">
                                    For Rent
                                  </span>
                                  <p className="property-price">
                                    $44,900/<span>month</span>
                                  </p>
                                </div>
                                <h3>
                                  <a href="listing-details.html">
                                    Apartment For Rent
                                  </a>
                                </h3>
                                <p>
                                  <i className="flaticon-location"></i>732
                                  Burwell Road, Houston
                                </p>
                                <ul className="property-metainfo list-style">
                                  <li>
                                    <i>
                                      <BiBed />
                                    </i>
                                    07
                                  </li>
                                  <li>
                                    <i>
                                      <BiBath />
                                    </i>
                                    04
                                  </li>
                                  <li>
                                    <i>
                                      <MdSquareFoot />
                                    </i>
                                    4110 sqft
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style2">
                              <div className="property-img-slider">
                                <img
                                  src="/img/property/property-4.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="property-info">
                                <div className="property-status-wrap">
                                  <span className="property-status">
                                    For Rent
                                  </span>
                                  <p className="property-price">
                                    $25,900/<span>month</span>
                                  </p>
                                </div>
                                <h3>
                                  <a href="listing-details.html">
                                    Dreamy Penthouse
                                  </a>
                                </h3>
                                <p>
                                  <i className="flaticon-location"></i>4890 Grey
                                  Fox Fam Road, Houston
                                </p>
                                <ul className="property-metainfo list-style">
                                  <li>
                                    <i>
                                      <BiBed />
                                    </i>
                                    05
                                  </li>
                                  <li>
                                    <i>
                                      <BiBath />
                                    </i>
                                    02
                                  </li>
                                  <li>
                                    <i>
                                      <MdSquareFoot />
                                    </i>
                                    2210 sqft
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab_2" role="tabpanel">
                        <div className="property-review comment-item-wrap">
                          <div className="comment-item">
                            <div className="comment-author-img">
                              <img src="/img/clients/client-1.jpg" alt="mage" />
                            </div>
                            <div className="comment-author-wrap">
                              <div className="comment-author-info">
                                <div className="row align-items-start">
                                  <div className="col-md-9 col-sm-12 col-12 order-md-1 order-sm-1 order-1">
                                    <div className="comment-author-name">
                                      <h5>Olivic Dsuza</h5>
                                      <span className="comment-date">
                                        22/04/2022
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-2">
                                    <ul className="ratings list-style">
                                      <li>
                                        <i className="ri-star-s-fill"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-s-fill"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-s-fill"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-s-fill"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-half-s-fill"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-3">
                                    <div className="comment-text">
                                      <p>
                                        Nulla porttitor accumsan tincidunt.
                                        Praesent sapien massa, convallis a
                                        pellentesque nec, egestas non nisi. Cras
                                        ultricies ligula sed magna dictum porta.
                                        Vestibulum ante ipsum primis in faucibus
                                        orci luctus et ultrices posuere cubilia
                                        Curae; Donec velit neque, auctor sit
                                        amet aliquam vel.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="comment-item">
                            <div className="comment-author-img">
                              <img src="/img/clients/client-2.jpg" alt="mage" />
                            </div>
                            <div className="comment-author-wrap">
                              <div className="comment-author-info">
                                <div className="row align-items-start">
                                  <div className="col-md-9 col-sm-12 col-12 order-md-1 order-sm-1 order-1">
                                    <div className="comment-author-name">
                                      <h5>Josef Haris</h5>
                                      <span className="comment-date">
                                        15/04/2022
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-2">
                                    <ul className="ratings list-style">
                                      <li>
                                        <i className="ri-star-s-fill"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-s-fill"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-s-fill"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-s-fill"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-half-s-fill"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-3">
                                    <div className="comment-text">
                                      <p>
                                        Nulla porttitor accumsan tincidunt.
                                        Praesent sapien massa, convallis a
                                        pellentesque nec, egestas non nisi. Cras
                                        ultricies ligula sed magna dictum porta.
                                        Vestibulum ante ipsum primis in faucibus
                                        orci luctus et ultrices posuere cubilia
                                        Curae; Donec velit neque, auctor sit
                                        amet aliquam vel.
                                      </p>
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="property-img mb-0 mt-25">
                                            <img
                                              src="/img/property/property-1.jpg"
                                              alt="Image"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="property-img mb-0 mt-25">
                                            <img
                                              src="/img/property/property-2.jpg"
                                              alt="Image"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="comment-item">
                            <div className="comment-author-img">
                              <img src="/img/clients/client-3.jpg" alt="mage" />
                            </div>
                            <div className="comment-author-wrap">
                              <div className="comment-author-info">
                                <div className="row align-items-start">
                                  <div className="col-md-9 col-sm-12 col-12 order-md-1 order-sm-1 order-1">
                                    <div className="comment-author-name">
                                      <h5>Boris jhonson</h5>
                                      <span className="comment-date">
                                        27/03/2022
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-2">
                                    <ul className="ratings list-style">
                                      <li>
                                        <i className="ri-star-s-fill"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-s-fill"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-s-fill"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-s-fill"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-half-s-fill"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-3">
                                    <div className="comment-text">
                                      <p>
                                        Nulla porttitor accumsan tincidunt.
                                        Praesent sapien massa, convallis a
                                        pellentesque nec, egestas non nisi. Cras
                                        ultricies ligula sed magna dictum porta.
                                        Vestibulum ante ipsum primis in faucibus
                                        orci luctus et ultrices posuere cubilia
                                        Curae; Donec velit neque, auctor sit
                                        amet aliquam vel.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <form className="review-form mb-25">
                          <div className="row">
                            <div className="col-md-8">
                              <div className="form-group">
                                <p>Your ratings for this property</p>
                                <div className="star-rating">
                                  <input
                                    id="star-5"
                                    type="radio"
                                    name="rating"
                                    value="star-5"
                                  />
                                  <label for="star-5" title="5 stars">
                                    <i
                                      className="active ri-star-fill"
                                      aria-hidden="true"
                                    ></i>
                                  </label>
                                  <input
                                    id="star-4"
                                    type="radio"
                                    name="rating"
                                    value="star-4"
                                  />
                                  <label for="star-4" title="4 stars">
                                    <i
                                      className="active ri-star-fill"
                                      aria-hidden="true"
                                    ></i>
                                  </label>
                                  <input
                                    id="star-3"
                                    type="radio"
                                    name="rating"
                                    value="star-3"
                                  />
                                  <label for="star-3" title="3 stars">
                                    <i
                                      className="active ri-star-fill"
                                      aria-hidden="true"
                                    ></i>
                                  </label>
                                  <input
                                    id="star-2"
                                    type="radio"
                                    name="rating"
                                    value="star-2"
                                  />
                                  <label for="star-2" title="2 stars">
                                    <i
                                      className="active ri-star-fill"
                                      aria-hidden="true"
                                    ></i>
                                  </label>
                                  <input
                                    id="star-1"
                                    type="radio"
                                    name="rating"
                                    value="star-1"
                                  />
                                  <label for="star-1" title="1 star">
                                    <i
                                      className="active ri-star-fill"
                                      aria-hidden="true"
                                    ></i>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 text-md-end">
                              <div className="file form-group">
                                <label for="input-file">Upload Image</label>
                                <input id="input-file" type="file" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" placeholder="First name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" placeholder="Last name" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  placeholder="Email Address"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group">
                                <textarea
                                  id="msg"
                                  cols="30"
                                  rows="6"
                                  placeholder="Write A Review"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <button type="submit" className="btn style2">
                                Submit Review
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Default>
  );
};

export default Agents;
