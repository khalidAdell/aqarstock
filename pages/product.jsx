import React from 'react'
import Default from '../layouts/default'

const Product = () => {
  return (
    <Default>
        <section className="p-0 ratio3_2">
        <div className="container-fluid">
            <div className="zoom-image-box zoom-gallery-multiple">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <a href="img/property/4.jpg" className="bg-size">
                            <img src="img/property/4.jpg" className="bg-img" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3 col-6 p-0">
                        <a href="img/property/2.jpg" className="bg-size">
                            <img src="img/property/2.jpg" className="bg-img" alt="" />
                        </a>
                        <a href="img/property/1.jpg" className="bg-size" >
                            <img src="img/property/1.jpg" className="bg-img" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3 col-6 p-0">
                        <a href="img/property/5.jpg" className="bg-size" >
                            <img src="img/property/5.jpg" className="bg-img" alt="" />
                        </a>
                        <a href="img/property/3.jpg" className="bg-size">
                            <img src="img/property/3.jpg" className="bg-img" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="without-top property-main small-section">
        <div className="single-property-section">
            <div className="container">
                <div className="single-title">
                    <div className="left-single">
                        <div className="d-flex">
                            <h2 className="mb-0">Orchard House </h2>
                            <span><span className="label label-shadow ms-2">For
                                    Sale</span></span>
                        </div>
                        <p className="mt-1">Mina Road, Bur Dubai, Dubai, United
                            Arab
                            Emirates</p>
                        <ul>
                            <li>
                                <div>
                                    <img src="img/icon/double-bed.svg" className="img-fluid" alt="" />
                                    <span>4 Bedrooms</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src="img/icon/bathroom.svg" className="img-fluid" alt="" />
                                    <span>4 Bathrooms</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src="img/icon/sofa.svg" className="img-fluid" alt="" />
                                    <span>2 Halls</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src="img/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                                    <span>5000 Sq ft</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src="img/icon/garage.svg" className="img-fluid" alt="" />
                                    <span>1 Garage</span>
                                </div>
                            </li>
                        </ul>
                        <div className="share-buttons">
                            <div className="d-inline-block">
                                <a href="javascript:void(0)" className="btn btn-gradient btn-pill color-2"><i className="far fa-share-square"></i>
                                    share
                                </a>
                                <div className="share-hover">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" className="icon-facebook"><i data-feather="facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" className="icon-twitter"><i data-feather="twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" className="icon-instagram"><i data-feather="instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="javascript:void(0)" className="btn btn-dashed btn-pill color-2 ms-md-2 ms-1 save-btn"><i className="far fa-heart"></i>
                                Save</a>
                            <a href="javascript:void(0)" className="btn btn-dashed btn-pill color-2 ms-md-2 ms-1" onclick="myFunction()"><i data-feather="printer"></i>
                                Print</a>
                        </div>
                    </div>
                    <div className="right-single">
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <h2 className="price">$20,45,472 <span>/ start From</span></h2>
                        <div className="feature-label">
                            <span className="btn btn-dashed color-2 btn-pill">Wi-fi</span>
                            <span className="btn btn-dashed color-2 ms-1 btn-pill">Swimming Pool</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="single-property mt-0 pt-0">
        <div className="container">
            <div className="row ratio_55">
                <div className="col-xl-9 col-lg-8">
                    <div className="description-section tab-description">
                        <div className="description-details">
                            <div className="desc-box">
                                <ul className="nav nav-tabs line-tab" id="top-tab" role="tablist">
                                    <li className="nav-item"><a data-bs-toggle="tab" className="nav-link active"
                                            href="#about">about</a></li>
                                    <li className="nav-item"><a data-bs-toggle="tab" className="nav-link"
                                            href="#feature">feature</a></li>
                                    <li className="nav-item"><a data-bs-toggle="tab" className="nav-link"
                                            href="#gallery">gallery</a></li>
                                    <li className="nav-item"><a data-bs-toggle="tab" className="nav-link" href="#video">video</a>
                                    </li>
                                    <li className="nav-item"><a data-bs-toggle="tab" className="nav-link" href="#floor_plan">Floor
                                            plan</a></li>
                                    <li className="nav-item"><a data-bs-toggle="tab" className="nav-link"
                                            href="#location-map">location</a></li>
                                </ul>
                                <div className=" tab-content" id="top-tabContent">
                                    <div className="tab-pane fade show active about page-section" id="about">
                                        <h4 className="content-title">Property Details
                                            <a href="https://www.google.com/maps/place/New+York,+NY,+USA/@40.697488,-73.979681,8z/data=!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en"
                                                target="_blank">
                                                <i className="fa fa-map-marker-alt"></i> view on map</a>
                                        </h4>
                                        <div className="row">
                                            <div className="col-md-6 col-xl-4">
                                                <ul className="property-list-details">
                                                    <li><span>Property Type :</span> House</li>
                                                    <li><span>Property ID :</span> ZOEA245</li>
                                                    <li><span>Property status :</span> For sale</li>
                                                    <li><span>Operating Since :</span> 2008</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-xl-4">
                                                <ul className="property-list-details">
                                                    <li><span>Price :</span> $ 1,50,000</li>
                                                    <li><span>Property Size :</span> 1730 sq / ft</li>
                                                    <li><span>Balcony :</span> 2</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-xl-4">
                                                <ul className="property-list-details">
                                                    <li><span>City :</span> Newyork</li>
                                                    <li><span>Bedrooms :</span> 8</li>
                                                    <li><span>Bathrooms :</span> 4</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4 className="content-title mt-4">Attachments</h4>
                                        <a href="javascript:void(0)" className="attach-file"><i className="far fa-file-pdf"></i>Demo Property
                                            Document </a>
                                        <h4 className="mt-4">Property Brief</h4>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p className="font-roboto">Residences can be classified by and how they are connected residences and land. Different types 
                                                    of housing tenure can be used for the same physical type.</p>
                                            </div>
                                            <div className="col-sm-4">
                                                <p className="font-roboto">Connected residences owned by a single entity leased out, or owned separately with an agreement covering the relationship between units and common areas.</p>
                                            </div>
                                            <div className="col-sm-4">
                                                <p className="font-roboto">Residential real estate may contain either a single family or multifamily structure that is available for occupation or 
                                                    for non-business purposes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade page-section" id="feature">
                                        <h4 className="content-title">features</h4>
                                        <div className="single-feature row">
                                            <div className="col-xl-3 col-6">
                                                <ul>
                                                    <li>
                                                        <i className="fas fa-wifi"></i> Free Wi-Fi
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-hands"></i> Elevator Lift
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-power-off"></i> Power Backup
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-monument"></i> Laundry Service
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-xl-3 col-6">
                                                <ul>
                                                    <li>
                                                        <i className="fas fa-user-shield"></i> Security Guard
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-video"></i> CCTV
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-door-open"></i> Emergency Exit
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-first-aid"></i> Doctor On Call
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-xl-3 col-6">
                                                <ul>
                                                    <li>
                                                        <i className="fas fa-shower"></i> Shower
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-car"></i> free Parking in the area
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-fan"></i> Air Conditioning
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade page-section ratio3_2" id="gallery">
                                        <h4 className="content-title">gallery</h4>
                                        <div className="single-gallery">
                                            <div className="gallery-for">
                                                <div>
                                                    <div className="bg-size">
                                                        <img src="img/property/4.jpg" className="bg-img"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="bg-size">
                                                        <img src="img/property/3.jpg" className="bg-img"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="bg-size">
                                                        <img src="img/property/14.jpg" className="bg-img"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="bg-size">
                                                        <img src="img/property/11.jpg" className="bg-img"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="bg-size">
                                                        <img src="img/property/12.jpg" className="bg-img"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="bg-size">
                                                        <img src="img/property/4.jpg" className="bg-img"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="bg-size">
                                                        <img src="img/property/3.jpg" className="bg-img"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="bg-size">
                                                        <img src="img/property/11.jpg" className="bg-img"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="bg-size">
                                                        <img src="img/property/12.jpg" className="bg-img"
                                                            alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gallery-nav">
                                                <div>
                                                    <img src="img/property/4.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <div>
                                                    <img src="img/property/3.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <div>
                                                    <img src="img/property/14.jpg" className="img-fluid"
                                                        alt="" />
                                                </div>
                                                <div>
                                                    <img src="img/property/11.jpg" className="img-fluid"
                                                        alt="" />
                                                </div>
                                                <div>
                                                    <img src="img/property/12.jpg" className="img-fluid"
                                                        alt="" />
                                                </div>
                                                <div>
                                                    <img src="img/property/4.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <div>
                                                    <img src="img/property/3.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <div>
                                                    <img src="img/property/11.jpg" className="img-fluid"
                                                        alt="" />
                                                </div>
                                                <div>
                                                    <img src="img/property/12.jpg" className="img-fluid"
                                                        alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade page-section ratio_40" id="video">
                                        <h4 className="content-title">video</h4>
                                        <div className="play-bg-image">
                                            <div className="bg-size">
                                                <img src="img/property/11.jpg" className="bg-img" alt="" />
                                            </div>
                                            <div className="icon-video">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#videomodal">
                                                    <i className="fas fa-play"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade page-section" id="floor_plan">
                                        <h4 className="content-title">Floor plan</h4>
                                        <img src="img/single-property/floor-plan.png" alt=""
                                            className="img-fluid" />
                                    </div>
                                    <div className="tab-pane fade page-section" id="location-map">
                                        <h4 className="content-title">location</h4>
                                        <iframe title="realestate location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563449626439!5m2!1sen!2sin"
                                            allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="desc-box">
                                <div className="page-section">
                                    <h4 className="content-title">Reviews</h4>
                                    <div className="review">
                                        <div className="review-box">
                                            <div className="media">
                                                <img src="img/3.jpg" className="img-70" alt="" />
                                                <div className="media-body">
                                                    <h6>Olive Yew</h6>
                                                    <p>Sep 13, 2022</p>
                                                    <p className="mb-0">The location, view from the rooms are just awesome. Very cool landscaping has been done Around the hotel. 
                                                        There are small activities that you can indulge with your family.</p>
                                                </div>
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-box review-child">
                                            <div className="media">
                                                <img src="img/4.jpg" className="img-70" alt="" />
                                                <div className="media-body">
                                                    <h6>Allie Grater</h6>
                                                    <p>Sep 25, 2022</p>
                                                    <p className="mb-0">We were there for 3 nights and hotel was too good. Greenery was flaunting everywhere. There were games kept for our
                                                        entertainment.</p>
                                                </div>
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-box">
                                            <div className="media">
                                                <img src="img/2.jpg" className="img-70" alt="" />
                                                <div className="media-body">
                                                    <h6>Walter Melon</h6>
                                                    <p>Oct 20, 2022</p>
                                                    <p className="mb-0">There are small activities that you can indulge with your family. Very cool landscaping has been done Around the hotel. The location, view from the rooms are just awesome.</p>
                                                </div>
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <h4 className="content-title">Write a Review</h4>
                                    <form className="review-form">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" required />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Comment"></textarea>
                                        </div>
                                        <button type="submit" onclick="document.location='submit-property.html'" className="btn btn-gradient color-2 btn-pill">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-3 col-lg-4">
                    <div className="left-sidebar sticky-cls single-sidebar">
                        <div className="filter-cards">
                            <div className="advance-card">
                                <h6>Contact Info</h6>
                                <div className="category-property">
                                    <div className="agent-info">
                                        <div className="media">
                                            <img src="img/3.png" className="img-50" alt="" />
                                            <div className="media-body ms-2">
                                                <h6>Jonathan Scott</h6>
                                                <p>Contact@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <i data-feather="map-pin" className="me-2"></i>A-32, Albany, Newyork.
                                        </li>
                                        <li>
                                            <i data-feather="phone-call" className="me-2"></i>(+066) 518 - 457 - 5181
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="advance-card">
                                <h6>Request exploration</h6>
                                <div className="category-property">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email Address" required />
                                        </div>
                                        <div className="form-group">
                                            <input 
                                            placeholder="phone number"
                                            className="form-control" 
                                            name="mobnumber" 
                                            id="tbNumbers" 
                                            oninput="maxLengthCheck(this)"
                                            type = "tel"
                                            onkeypress="javascript:return isNumber(event)"
                                            maxlength = "9"
                                            required="" />
                                        </div>
                                        <div className="form-group">
                                            <textarea placeholder="Message" className="form-control" rows="3"></textarea>
                                        </div>
                                        <button type="submit" onclick="document.location='user-listing.html'" className="btn btn-gradient color-2 btn-block btn-pill">Submit
                                            Request</button>
                                    </form>
                                </div>
                            </div>
                           <div className="advance-card feature-card">
                                <h6>Featured</h6>
                                <div className="feature-slider">
                                    <div>
                                        <img src="img/property/4.jpg" className="bg-img" alt="" />
                                        <div className="bottom-feature">
                                            <h5>Neverland</h5>
                                            <h6>$13,000 <small>/ start from</small></h6>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="img/property/16.jpg" className="bg-img" alt="" />
                                        <div className="bottom-feature">
                                            <h5>Neverland</h5>
                                            <h6>$13,000 <small>/ start from</small></h6>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="img/property/14.jpg" className="bg-img" alt="" />
                                        <div className="bottom-feature">
                                            <h5>Neverland</h5>
                                            <h6>$13,000 <small>/ start from</small></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="labels-left">
                                    <span className="label label-success">featured</span>
                                </div>
                            </div>
                            <div className="advance-card">
                                <h6>Recently Added</h6>
                                <div className="recent-property">
                                    <ul>
                                        <li>
                                            <div className="media">
                                                <img src="img/property/9.jpg" className="img-fluid" alt="" />
                                                <div className="media-body">
                                                    <h5>Sea Breezes</h5>
                                                    <span>$9800 / <span>Month</span></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <img src="img/property/10.jpg" className="img-fluid" alt="" />
                                                <div className="media-body">
                                                    <h5>Orchard House</h5>
                                                    <span>$7500 / <span>Month</span></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <img src="img/property/11.jpg" className="img-fluid" alt="" />
                                                <div className="media-body">
                                                    <h5>Neverland</h5>
                                                    <span>$5000 / <span>Month</span></span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </Default>
  )
}

export default Product