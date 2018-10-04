import React, { Component } from 'react';
import { subscribeToTimer } from './subscribeToTimer';
import { Button, Steps, Row, Col } from 'antd';
import { ChartCard, Field, MiniArea, MiniBar, MiniProgress } from 'ant-design-pro/lib/Charts'
import Trend from 'ant-design-pro/lib/Trend';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import numeral from 'numeral';
import moment from 'moment';


const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 100) + 10,
  });
}

class TestApp extends Component {

  constructor(props) {
    super(props);
    this.state = { timestamp: 'no timestamp yet' }
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
        This is the timer value: {this.state.timestamp}
        </p>
        <Steps current={1}>
          <Steps.Step title="Finished" description="This is a description." />
          <Steps.Step title="In Progress" description="This is a description." />
          <Steps.Step title="Waiting" description="This is a description." />
        </Steps>
        <Button type="primary">Primary</Button>
        <div>
          <Trend flag="up" >12%</Trend>
          <Trend flag="down" style={{ marginLeft: 8 }}>11%</Trend>
        </div>
        <Row>
          <Col span={24}>
            <ChartCard
              title="Kuch Bhi 1"
              total={numeral(8846).format('0,0')}
              contentHeight={134}
            >
              <NumberInfo
                subTitle={<span>Kuch Bhi 2</span>}
                total={numeral(12321).format('0,0')}
                status="up"
                subTotal={17.1}
              />
              <MiniArea
                line
                height={45}
                data={visitData}
              />
            </ChartCard>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TestApp
