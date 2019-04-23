import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import AboutCards from './AboutCards.jsx';
import classnames from 'classnames';
import styles from '../../styles/components/about/aboutGrid.module.scss';

export default class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      end: true,
      used: -1,
      randomOrderLead: [],
    };
  }



  randomArray = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max));

  generateRan = (max) => {
    let random = [];
    let used = this.state.used;
    if (this.state.end) {
      for (let i = 0; i < max; i++) {
        let temp = Math.floor(Math.random() * max + 1);
        if (random.indexOf(temp) == -1) {
          random.push(temp);
        }
        else i--;
      }
      this.setState({ end: false, randomOrderLead: random });
    }
    used++;
    return this.state.randomOrderLead[used];
  }

  shuffleArray = (array) => {
    let i = array.length - 1;
    if (this.state.count != this.state.end) {
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    return array;
  }

  render() {
    return (
      <React.Fragment>
        <h3 className={classnames(
          'container gridish-container gridish-container--complete', styles.coolKids)}>The cool kids</h3>
        <div className={classnames('container flex gridish-container gridish-container--complete gridish-grid', styles.flexibleGrid)}>

          <StaticQuery
            query={TEAM_2018_QUERY}
            render={({ someEntries, someMoreEntries }) =>
              (
                <React.Fragment>
                  {
                    this.shuffleArray(someEntries.edges).map(person => (
                      <div className={classnames(styles.speakerSizing)} key={person.node.name}>
                        <AboutCards
                          name={person.node.name}
                          headshot={person.node.headshot.fluid}
                          role={person.node.role}
                          year={person.node.year}
                          major={person.node.major}
                          webpage={person.node.webpage}
                        // order={
                        //   this.generateRan(someEntries.edges.length)
                        // }
                        />
                      </div>
                    ))
                  }
                  {
                    this.shuffleArray(someMoreEntries.edges).map(person => (
                      <div className={classnames(styles.speakerSizing)} key={person.node.name}>
                        <AboutCards
                          name={person.node.name}
                          headshot={person.node.headshot.fluid}
                          role={person.node.role}
                          year={person.node.year}
                          major={person.node.major}
                          webpage={person.node.webpage}
                        // order={
                        //   this.generateRan(someEntries.edges.length)
                        // }
                        />
                      </div>
                    ))
                  }
                </React.Fragment>
              )
            }
          />
        </div>
      </React.Fragment>
    );
  }
}

const TEAM_2018_QUERY = graphql`
  query team2018 {
  someEntries: allContentful2018TeamMembers(filter: {lead: {ne: false}}) {
    totalCount
    edges {
			node
      {
        name
        lead
        year
        major
        role
        webpage
        headshot {
        fixed {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      }
    }
  }
  someMoreEntries: allContentful2018TeamMembers(filter: {lead: {ne: true}}) {
    totalCount
    edges {
			node
      {
        name
        lead
        year
        major
        role
        webpage
        headshot {
        fixed {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      }
    }
  }
}

`;