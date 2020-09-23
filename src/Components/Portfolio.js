import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            <div key="Dijkstra's Algorithm" className="columns portfolio-item">
           <div className="item-wrap">
            <a href="https://github.com/ThipparthiManasa/DesignAndAnalysisofAlgorithms" title="Dijkstra's Algorithm">
               <img alt="Dijkstra's Algorithm" src="images/portfolio/algorithms.png" />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>Dijkstra's Algorithm</h5>
                     <p>Shortest Uncertain Path Algorithm"</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>

        <div key="Logistic Regression" className="columns portfolio-item">
           <div className="item-wrap">
            <a href="https://github.com/ThipparthiManasa/NBAWinningPrediction-LogisticRegression" title="Logistic Regression">
               <img alt="Logistic Regression" src="images/portfolio/RProgramming.png" />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>Logistic Regression</h5>
                     <p>Data Analysis - NBA Winning Prediction</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>

        <div key="Bubble Smash - android app" className="columns portfolio-item">
           <div className="item-wrap">
            <a href="https://github.com/ThipparthiManasa/ASEProject-BubbleSmash" title="Bubble Smash - android app">
               <img alt="Bubble Smash - android app" src="images/portfolio/android.jpg" />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>Bubble Smash - android app</h5>
                     <p>A gaming application</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>

        <div key="Movie Genres" className="columns portfolio-item">
           <div className="item-wrap">
            <a href="https://github.com/ThipparthiManasa/PBProject-TwitterAnalysis" title="Movie Genres">
               <img alt="Movie Genres" src="images/portfolio/movie-genres.jpg"/>
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>Movie Genres</h5>
                     <p>Tweets Statistics Spark SQL</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>

        <div key="Hidden Hurdles" className="columns portfolio-item">
           <div className="item-wrap">
            <a href="https://github.com/ThipparthiManasa/BigDataProject-Spring2017" title="Hidden Hurdles">
               <img alt="Hidden Hurdles" src="images/portfolio/tensor-flow.png" />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>Hidden Hurdles</h5>
                     <p>Deep Learning - Image Classification</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>

        <div key="Anomoly Detection" className="columns portfolio-item">
           <div className="item-wrap">
            <a href="https://github.com/ThipparthiManasa/AnomolyDetection" title="Anomoly Detection">
               <img alt="Anomoly Detection" src="images/portfolio/anamoly-detection.jpg" />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>Anomoly Detection</h5>
                     <p>Data Mining Algorithm"</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>

        <div key="RealTime Twitter" className="columns portfolio-item">
           <div className="item-wrap">
            <a href="https://github.com/ThipparthiManasa/TwitterData-SentimentAnalysis-Hackathon2016" title="RealTime Twitter">
               <img alt="RealTime Twitter" src="images/portfolio/twitter.jpg" />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>RealTime Twitter</h5>
                     <p>Data Analysis - Real Time Tweets Statistics</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>

            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
