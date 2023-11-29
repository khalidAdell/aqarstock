import React from 'react'
import {AiFillHeart, AiFillStar} from 'react-icons/ai'
import { BiCheckboxChecked, BiPhone } from 'react-icons/bi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Default from '../layouts/default'

const Product1 = () => {
  return (
    <Default>
        <div className="page-title-area style-pb-200 bg-7">
			<div className="container">
				<div className="page-title-content">
					<h2>Single Listing</h2>
					
					<ul>
						<li>
							<a href="index.html">
								Home 
							</a>
						</li>

						<li className="active">Single Listing</li>
					</ul>
				</div>
			</div>
		</div>
        <div className="single-listing-area pb-70">
			<div className="container">
				<div className="row">
					<div className="single-properties-item single-listing-warp">
						<div className="row">
							<div className="col-lg-4 col-md-4 pe-0">
								<div className="properties-bg-img"></div>
							</div>

							<div className="col-lg-8 col-md-8 ps-0">
								<div className="properties-content">
									<div className="d-flex justify-content-between">
										<a href="single-listing.html">
											<h3>House For Rent</h3>
										</a>
										<h3 className="price">$ 240,000</h3>
									</div>
									<p>
										<FaMapMarkerAlt />
										666 E. Hilldale Court Salem, MA 09990
									</p>
									<ul className="feature-list">
										<li>
											<i className="ri-hotel-bed-fill"></i>
											3 Bed
										</li>
										<li>
											<i className="ri-wheelchair-fill"></i>
											3 Bath
										</li>
										<li>
											<i className="ri-ruler-2-line"></i>
											950 Sqft
										</li>
									</ul>
									
									<ul className="user d-flex justify-content-between align-items-center">
										<li>
											<a href="agents.html" className="agent-user">
												<img src="/img/3.jpg" alt="Image" />
												<span>By Peggy Beatty</span>
											</a>
										</li>
										<li>
											<AiFillHeart />
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="properties-details-content">
							<div className="properties-about">
								<h3>Property Description</h3>
								<p>Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat accumsan id imperdiet et porttitor at sem.</p>
								<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus.</p>
							</div>

							<div className="gap-mb-50"></div>

							<div className="features-content">
								<h3>Features</h3>
								<div className="row">
									<div className="col-lg-3 col-sm-6">
										<ul>
											<li>
												<BiCheckboxChecked />
												Air Conditioned   
											</li>
											<li>
												<BiCheckboxChecked />
												Laundry
											</li>
											<li>
												<BiCheckboxChecked />
												Barbeque 
											</li>
										</ul>
									</div>
									<div className="col-lg-3 col-sm-6">
										<ul>
											<li>
												<BiCheckboxChecked />
												Refrigerator 
											</li>
											<li>
												<BiCheckboxChecked />
												Window Coverings
											</li>
											<li>
												<BiCheckboxChecked />
												Grage 
											</li>
										</ul>
									</div>
									<div className="col-lg-3 col-sm-6">
										<ul>
											<li>
												<BiCheckboxChecked />
												Parking   
											</li>
											<li>
												<BiCheckboxChecked />
												Fitness Gym
											</li>
											<li>
												<BiCheckboxChecked />
												Fireplace 
											</li>
										</ul>
									</div>
									<div className="col-lg-3 col-sm-6">
										<ul>
											<li>
												<BiCheckboxChecked />
												Swimming Pool  
											</li>
											<li>
												<BiCheckboxChecked />
												Security Garage 
											</li>
											<li>
												<BiCheckboxChecked />
												Basement 
											</li>
										</ul>
									</div>
								</div>
							</div>
							
							<div className="gap-mb-20"></div>

							<div className="video-img">
								<h3>Property Video</h3>
								<div className="video-wrap">
									<img src="/img/video-img.jpg" alt="Image" />

									<div className="video-button">
										<a href="https://www.youtube.com/watch?v=Qj59_LGUBvE" className="video-btn popup-youtube">
											<i className="ri-play-fill"></i>
										</a>
									</div>
								</div>
							</div>

							<div className="gap-mb-50"></div>

							<div className="video-img">
								<h3>Floor Plans</h3>
								<img src="/img/map-img.jpg" alt="Image" />
							</div>

							<div className="gap-mb-50"></div>

							<div className="mortgage-calculator">
								<div className="row">
									<div className="col-lg-8">
										<h3>Mortgage Calculator</h3>
										<form>
											<div className="row">
												<div className="col-lg-6 col-sm-6">
													<div className="form-group">
														<label>Total Amount</label>
														<input type="text" className="form-control" placeholder="$100000" />
													</div>
												</div>
												<div className="col-lg-6 col-sm-6">
													<div className="form-group">
														<label>Down Payment</label>
														<input type="text" className="form-control" placeholder="$90000"/>
													</div>
												</div>
												<div className="col-lg-6 col-sm-6">
													<div className="form-group">
														<label>Interest Rate</label>
														<input type="text" className="form-control" placeholder="2.5%"/>
													</div>
												</div>
												<div className="col-lg-6 col-sm-6">
													<div className="form-group">
														<label>Loan Terms (Years)</label>
														<select className="form-select form-control" aria-label="Default select example">
															<option selected>12</option>
															<option value="1">14</option>
															<option value="2">17</option>
															<option value="3">20</option>
														</select>
													</div>
												</div>
												<div className="col-lg-6 col-sm-6">
													<div className="form-group">
														<label>Property Tax</label>
														<input type="text" className="form-control" placeholder="$1000"/>
													</div>
												</div>
												<div className="col-lg-6 col-sm-6">
													<div className="form-group">
														<label>Home Insurance</label>
														<input type="text" className="form-control" placeholder="$100"/>
													</div>
												</div>
												<div className="col-lg-6 col-sm-6">
													<div className="form-group mb-0">
														<label>PMI</label>
														<input type="text" className="form-control" placeholder="$0"/>
													</div>
												</div>
												<div className="col-lg-6 col-sm-6">
													<button type="submit" className="default-btn">
														Calculate
													</button>
												</div>
											</div>
										</form>
									</div>

									<div className="col-lg-4">
										<div className="monthly-count">
											<h2>$171.66</h2>
											<p>Monthly Estimated Mortgage</p>
											<span className="bar"></span>
											<ul>
												<li>
													Principal & Interest
													<span>$80.00</span>
												</li>
												<li>
													Property Tax
													<span>$83.33</span>
												</li>
												<li>
													Home Insurance
													<span>$8.33</span>
												</li>
												<li>
													PMI
													<span>$0.00</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className="gap-mb-50"></div>

							<div className="map-location">
								<h3>Location Map</h3>
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14375.832948433375!2d-80.26409426900993!3d25.738894638352154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b7e816048625%3A0xce85b49262b93dfc!2s7755%20Grand%20Ave!5e0!3m2!1sen!2sbd!4v1644836559762!5m2!1sen!2sbd"></iframe>
							</div>

							<div className="gap-mb-50"></div>

							<div className="contact-form">
								<h2>Contact Information</h2>
	
								<form id="contactForm">
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Name*</label>
												<input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name"/>
												<div className="help-block with-errors"></div>
											</div>
										</div>
			
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Email*</label>
												<input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email"/>
												<div className="help-block with-errors"></div>
											</div>
										</div>
	
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Your Phone No</label>
												<input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control"/>
												<div className="help-block with-errors"></div>
											</div>
										</div>
			
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Your Subject</label>
												<input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject"/>
												<div className="help-block with-errors"></div>
											</div>
										</div>
			
										<div className="col-lg-12">
											<div className="form-group">
												<label>Your Message</label>
												<textarea name="message" className="form-control" id="message" cols="30" rows="6" required data-error="Write your message"></textarea>
												<div className="help-block with-errors"></div>
											</div>
										</div>
			
										<div className="col-lg-12 col-md-12">
											<button type="submit" className="default-btn">
												Request Information
											</button>
											<div id="msgSubmit" className="h3 text-center hidden"></div>
											<div className="clearfix"></div>
										</div>
									</div>
								</form>
							</div>

							<div className="gap-mb-50"></div>

							<form className="review-form">
								<h3>Add Your Review</h3>
								<ul>
									<li>
										Select your rating for this listing :
									</li>
									<li>
										<div className="star-rating">
											<input id="star-5" type="radio" name="rating" value="star-5" />
											<label for="star-5" title="5 stars">
											  <i className="active ri-star-fill" aria-hidden="true"></i>
											</label>
											<input id="star-4" type="radio" name="rating" value="star-4" />
											<label for="star-4" title="4 stars">
											  <i className="active ri-star-fill" aria-hidden="true"></i>
											</label>
											<input id="star-3" type="radio" name="rating" value="star-3" />
											<label for="star-3" title="3 stars">
											  <i className="active ri-star-fill" aria-hidden="true"></i>
											</label>
											<input id="star-2" type="radio" name="rating" value="star-2" />
											<label for="star-2" title="2 stars">
											  <i className="active ri-star-fill" aria-hidden="true"></i>
											</label>
											<input id="star-1" type="radio" name="rating" value="star-1" />
											<label for="star-1" title="1 star">
											  <i className="active ri-star-fill" aria-hidden="true"></i>
											</label>
										</div>
									</li>
								</ul>

								<div className="row">
									<div className="col-lg-6 col-sm-6">
										<div className="form-group">
											<label>Your Name</label>
											<input type="text" className="form-control" placeholder="Your Phone Number"/>
										</div>
									</div>
									<div className="col-lg-6 col-sm-6">
										<div className="form-group">
											<label>Your Email</label>
											<input type="text" className="form-control" placeholder="Your Email Address"/>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group">
											<label>Review</label>
											<textarea className="form-control" id="message" cols="30" rows="6" placeholder="Write A Review"></textarea>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group mb-0">
											<button type="submit" className="default-btn">
												Submit Review
											</button>
										</div>
									</div>
								</div>
							</form>

							<div className="gap-mb-50"></div>

						</div>
					</div>
					
					<div className="col-lg-4">
						<div className="widget-sidebar ml-15">
							<div className="sidebar-widget agent-contact">
								<div className="viewed-list">
									<img src="/img/agents/agent-1.jpg" alt="Image" />
									<h4>Darlene Small</h4>
									<div className="review">
										<AiFillStar />
										<AiFillStar />
										<AiFillStar />
										<AiFillStar />
										<AiFillStar />
									</div>
									<a href="single-agents.html" className="read-more">
										View Profile
									</a>
								</div>
								<div className="contact-form ps-0">
									<form id="contactForm">
										<div className="row">
											<div className="col-lg-12 col-sm-6">
												<div className="form-group">
													<label>Name*</label>
													<input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" />
													<div className="help-block with-errors"></div>
												</div>
											</div>
				
											<div className="col-lg-12 col-sm-6">
												<div className="form-group">
													<label>Email*</label>
													<input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email"/>
													<div className="help-block with-errors"></div>
												</div>
											</div>
		
											<div className="col-lg-12 col-sm-6">
												<div className="form-group">
													<label>Your Phone No</label>
													<input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control"/>
													<div className="help-block with-errors"></div>
												</div>
											</div>
				
											<div className="col-lg-12 col-sm-6">
												<div className="form-group">
													<label>Your Subject</label>
													<input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject"/>
													<div className="help-block with-errors"></div>
												</div>
											</div>
				
											<div className="col-lg-12">
												<div className="form-group">
													<label>Your Message</label>
													<textarea name="message" className="form-control" id="message" cols="30" rows="6" required data-error="Write your message"></textarea>
													<div className="help-block with-errors"></div>
												</div>
											</div>
				
											<div className="col-lg-12 col-md-12">
												<div className="d-flex justify-content-between align-items-center">
													<div className="">
														<button type="submit" className="default-btn">
															Request Information
														</button>
														<div id="msgSubmit" className="h3 text-center hidden"></div>
														<div className="clearfix"></div>
													</div>
													<div className="call">
														<a href="tell:+1-719-504-1984">
															<BiPhone />
														</a>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="sidebar-widget recent-post">
								<h3>Recent Posts</h3>
								
								<article className="item">
									<a href="single-blog.html" className="thumb">
										<span className="fullimage cover bg-1" role="img"></span>
									</a>
									<div className="info">
										<h4 className="title usmall">
											<a href="single-blog.html">House For Rent</a>
										</h4>
										<span className="date">
											<FaMapMarkerAlt />
											666 E. Hilldale Court, MA 0999
										</span>
										<h5>$24000</h5>
									</div>
								</article>

								<article className="item">
									<a href="single-blog.html" className="thumb">
										<span className="fullimage cover bg-2" role="img"></span>
									</a>
									<div className="info">
										<h4 className="title usmall">
											<a href="single-blog.html">House For Sale</a>
										</h4>
										<span className="date">
											<FaMapMarkerAlt />
											444 King Coachella, CA 22233
										</span>
										<h5>$90000</h5>
									</div>
								</article>
								<article className="item">
									<a href="single-blog.html" className="thumb">
										<span className="fullimage cover bg-3" role="img"></span>
									</a>
									<div className="info">
										<h4 className="title usmall">
											<a href="single-blog.html">House For Rent</a>
										</h4>
										<span className="date">
											<FaMapMarkerAlt />
											991 Hill St. Clemmons, NC 77711
										</span>
										<h5>$35000</h5>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </Default>
  )
}

export default Product1