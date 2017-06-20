/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Grid, Panel, Row, Col,} from 'react-bootstrap';
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome';
import 'public/styles/homepage.css'


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <Grid>
          <Panel className="dashboard">
            <div className="dashboard-main">
              <div className="dashboard-left"><img alt="dashboard-logo" src="https://twemoji.b0.upaiyun.com/2/svg/1f381.svg" style={{width: '55px'}} /></div>
              <div className="dashboard-right">
                <div style={{fontSize: '15px'}}>Ruby China 官方 <a href="https://gems.ruby-china.org" target="_blank">RubyGems 镜像</a>、<Link to="/wiki/ruby-mirror">Ruby 镜像</Link> 正式上线！</div>
                <div><code style={{padding: '4px 10px'}}>gem source -a https://gems.ruby-china.org</code></div>
              </div>
            </div>
          </Panel>

          <Row className="dashboard-row">
              <Col md={3}>
                  <Link to="/topics">
                      <Panel footer={<div>Ruby Community<FontAwesome name='arrow-right' /></div>}>
                          <FontAwesome name="comments-o" style={{color: '#F86334'}}/>
                      </Panel>
                  </Link>
              </Col>
              <Col md={3}>
                  <Link to="/wiki">
                      <Panel footer={<div>Tech Doc<FontAwesome name='arrow-right'/></div>}>
                          <FontAwesome name="support" style={{color: '#FFD52F'}}/>
                      </Panel>
                  </Link>
              </Col>
              <Col md={3}>
                  <Link to="/jobs">
                      <Panel footer={<div>Careers<FontAwesome name='arrow-right'/></div>}>
                          <FontAwesome name="users" style={{color: '#317DDA'}}/>
                      </Panel>

                  </Link>
              </Col>
              <Col md={3}>
                  <Link to="/topics/popular">
                      <Panel footer={<div>Best Articles<FontAwesome name='arrow-right'/></div>}>
                          <FontAwesome name="diamond" style={{color: '#3BD54E'}}/>
                      </Panel>
                  </Link>
              </Col>
          </Row>

          <Panel header="讨论节点分类导航">
          </Panel>

          <Panel header="热门城市">
          </Panel>

        </Grid>
    );
  }
}
