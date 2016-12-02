
import React, { Component } from 'react';
import { render } from "react-dom";

import './fonts/iconfont.css';
import './css/style.scss';

export class App extends React.Component {
	render() {
		return (
			<div className="app">
				<img src="./images/welcome.gif" alt="welcome" />
				<h1>@Bobby</h1>
				<div className="icon">
					<i className="iconfont icon-weixin"></i>
					<i className="iconfont icon-qq"></i>
					<i className="iconfont icon-sina"></i>
					<i className="iconfont icon-6"></i>
				</div>

			</div>
		);
	}
}

render(<App />, document.getElementById('app'));
