import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './2017/styles-2017.scss';
import '../styles/main.scss';
import favicon from '../assets/images/faviconPurple.png';


const TemplateWrapper = ({children}) => (
  <div className = 'dotGrid-background body-container--padding-top' >
    <Helmet
      title="Thought At Work 2018"
      link = {
        [{
          rel: 'icon',
          type: 'image/ico',
          href: `${favicon}`
        }]
      }
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'format-detection', content: 'telephone=no' },
        { charset: 'utf-8' },
        { name: 'viewport',
          content: 'user-scalable=0, initial-scale=1.0, width=device-width, maximum-scale=1, minimum-scale=1'},
        { name: 'format-detection',
          content: 'telephone=no' },
        { name: 'apple-mobile-web-app-capable',
          content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style',
          content: 'black' },
        {
          property: 'og:type',
          content: 'article'
        }, {
          property: 'og:title',
          content: 'Thought At Work, a student-run design conference'
        }, {
          property: 'og:description',
          content: 'Thought At Work is a three-day, student-run, student-focused design conference that takes place every October at Rochester Institute of Technology.'
        }, {
          property: 'og:image',
          content: 'http://thoughtatwork.cias.rit.edu/assets/graphics/WebBanner_TAW2018.jpg'
        }, {
          property: 'fb:app_id',
          content: '486507185043060'
        },
        {
          name: 'twitter:card',
          content: 'product'
        }, {
          name: 'twitter:site',
          content: '@TAW_RIT'
        }, {
          name: 'twitter:title',
          content: 'Thought At Work, a student-run design conference'
        }, {
          name: 'twitter:description',
          content: 'Thought At Work is a three-day, student-run, student-focused design conference that takes place every October at Rochester Institute of Technology.'
        }, {
          name: 'twitter:creator',
          content: '@TAW_RIT'
        }, {
          name: 'twitter:image',
          content: 'http://thoughtatwork.cias.rit.edu/assets/graphics/WebBanner_TAW2018.jpg'
        }, {
          name: 'description',
          content: 'Student-Run Design Conference'
        }, {
          name: 'title',
          content: 'Thought at Work'
        },
      ]}
    />
    <Navigation/>
    {children()}
    <Footer/>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
