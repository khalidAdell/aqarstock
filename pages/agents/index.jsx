import React from "react";
import Default from "../../layouts/default";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import Link from "next/link";
import PageInfo from "../../components/Main/PageInfo";

const Agents = () => {
  return (
    <Default>
      <div className="agents-page">
        <div className="container-fluid">
          <PageInfo title="Our Agents" image="/img/breadcrumb-2.jpg">
            <ul>
              <li>
                <Link href="#">Home</Link>
                <span>/</span>
                <Link href="#" className="active">
                  Agents
                </Link>
              </li>
            </ul>
          </PageInfo>
        </div>
        <section className="agent-wrap ptb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                  <div className="agent-img">
                    <img src="/img/agents/agent-1.jpg" alt="Image" />
                  </div>
                  <div className="agent-info-wrap">
                    <div className="agent-info">
                      <h3>
                        <Link href="/agents/12">Erik Ondricka</Link>
                      </h3>
                      <span>Real Estate Agent</span>
                      <div className="card-bottom">
                        <button className="btn">CAll</button>
                        <button className="btn">Email</button>
                        <button className="btn">whatsapp</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                  <div className="agent-img">
                    <img src="/img/agents/agent-2.jpg" alt="Image" />
                  </div>
                  <div className="agent-info-wrap">
                    <div className="agent-info">
                      <h3>
                        <Link href="/agents/12">Mossie Ullrich</Link>
                      </h3>
                      <span>Property Consultant</span>
                      <div className="card-bottom">
                        <button className="btn">CAll</button>
                        <button className="btn">Email</button>
                        <button className="btn">whatsapp</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                  <div className="agent-img">
                    <img src="/img/agents/agent-3.jpg" alt="Image" />
                  </div>
                  <div className="agent-info-wrap">
                    <div className="agent-info">
                      <h3>
                        <Link href="/agents/12">Jackie Schmeler</Link>
                      </h3>
                      <span>Marketing Manager</span>
                      <div className="card-bottom">
                        <button className="btn">CAll</button>
                        <button className="btn">Email</button>
                        <button className="btn">whatsapp</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                  <div className="agent-img">
                    <img src="/img/agents/agent-1.jpg" alt="Image" />
                  </div>
                  <div className="agent-info-wrap">
                    <div className="agent-info">
                      <h3>
                        <Link href="/agents/12">Erik Ondricka</Link>
                      </h3>
                      <span>Real Estate Agent</span>
                      <div className="card-bottom">
                        <button className="btn">CAll</button>
                        <button className="btn">Email</button>
                        <button className="btn">whatsapp</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                  <div className="agent-img">
                    <img src="/img/agents/agent-4.jpg" alt="Image" />
                  </div>
                  <div className="agent-info-wrap">
                    <div className="agent-info">
                      <h3>
                        <Link href="/agents/12">Benett Watson</Link>
                      </h3>
                      <span>Real Estate Agent</span>
                      <div className="card-bottom">
                        <button className="btn">CAll</button>
                        <button className="btn">Email</button>
                        <button className="btn">whatsapp</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                  <div className="agent-img">
                    <img src="/img/agents/agent-5.jpg" alt="Image" />
                  </div>
                  <div className="agent-info-wrap">
                    <div className="agent-info">
                      <h3>
                        <Link href="/agents/12">Tom Ashley</Link>
                      </h3>
                      <span>Property Consultant</span>
                      <div className="card-bottom">
                        <button className="btn">CAll</button>
                        <button className="btn">Email</button>
                        <button className="btn">whatsapp</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                  <div className="agent-img">
                    <img src="/img/agents/agent-1.jpg" alt="Image" />
                  </div>
                  <div className="agent-info-wrap">
                    <div className="agent-info">
                      <h3>
                        <Link href="/agents/12">Erik Ondricka</Link>
                      </h3>
                      <span>Real Estate Agent</span>
                      <div className="card-bottom">
                        <button className="btn">CAll</button>
                        <button className="btn">Email</button>
                        <button className="btn">whatsapp</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                  <div className="agent-img">
                    <img src="/img/agents/agent-6.jpg" alt="Image" />
                  </div>
                  <div className="agent-info-wrap">
                    <div className="agent-info">
                      <h3>
                        <Link href="/agents/12">Joe Kinston</Link>
                      </h3>
                      <span>Senior Accountant</span>
                      <div className="card-bottom">
                        <button className="btn">CAll</button>
                        <button className="btn">Email</button>
                        <button className="btn">whatsapp</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="page-nav list-style mt-10">
              <li>
                <a href="agents">
                  <i>
                    <HiOutlineArrowLeft />
                  </i>
                </a>
              </li>
              <li>
                <a className="active" href="agents">
                  1
                </a>
              </li>
              <li>
                <a href="agents">2</a>
              </li>
              <li>
                <a href="agents">3</a>
              </li>
              <li>
                <a href="agents">
                  <i>
                    <HiOutlineArrowRight />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Default>
  );
};

export default Agents;
