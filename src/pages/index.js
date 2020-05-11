import React, { useEffect } from "react"
import { Link } from "gatsby"
import { Carousel, Button } from 'react-bootstrap';
import Layout from "../components/layout";
import SEO from "../components/seo";
import video1 from '../media/codehashi-home-office.mp4';
import video2 from '../media/codehashi-code.mp4';
import video3 from '../media/codehashi-team-planning.mp4';
import '../components/styles/carousel.css';

const IndexPage = ({ transitionStatus }) => {
  useEffect(() => {}, [transitionStatus]);
  return transitionStatus === "exiting" ? (
    <Layout></Layout>
  ) : (
    <Layout>
      <SEO title="Home" />
	  <Carousel 
      fade 
      autoPlay
		  indicators={false}
      keyboard={false}
      interval={4000}
		>
        <Carousel.Item>
			    <video loop muted autoPlay className="mw-100" >
            <source src={video1} type="video/mp4"/>
          </video>
          <Carousel.Caption>
            <div>
              <h2>Hello World!</h2>
              <p>CodeHashi is a <b>software house</b> based in Campinas-SP. We love
              to code!</p>
              <a href="mailto:codehashi@codehashi.com.br" target="_blank" className="btn btn-lg">Contact Us</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video loop muted autoPlay className="mw-100" >
            <source src={video2} type="video/mp4"/>
          </video>
          <Carousel.Caption>
            <div>
                <h2>More Than Software!</h2>
                <p>We turning <b>your dreams possible!</b></p>
                <a href="mailto:codehashi@codehashi.com.br" target="_blank" className="btn btn-lg">Contact Us</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item>
            <video loop muted autoPlay className="mw-100" >
              <source src={video3} type="video/mp4"/>
            </video>
            <Carousel.Caption>
              <div>
                  <h2>The Art Of Make Code!</h2>
                  <p>Through agile methodologies <b>we valuing the inclusion of our clients on all development process</b><br/>
                    We work this transparent way, excluding the lack of communication and bad understanding of solutions </p>
                  <a href="mailto:codehashi@codehashi.com.br" target="_blank" className="btn btn-lg">Contact Us</a>
              </div>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Layout>
  )
}

export default IndexPage
