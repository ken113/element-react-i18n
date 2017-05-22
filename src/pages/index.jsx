import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Button,DatePicker } from 'element-react'
import { FormattedMessage  } from 'react-intl';
import { setCookie } from './../lib/common'
import {observer,inject } from 'mobx-react';

// 观察者
@inject('order') @observer
class Index extends React.Component {
	constructor( props ) {
		super( props );
	}
	zh(){
		setCookie('lang','zh-CN',30);
		window.location.reload();
	}
	en(){
		setCookie('lang','en-US',30);
		window.location.reload();
	}
	render(){

		return(
			<div>
				<FormattedMessage id='hello' description='say hello to Howard.' defaultMessage='Hello, Howard'/>
				<ul>
			        <li><Link to="/">Home</Link></li>
			        <li><Link to="/about">About</Link></li>
			      </ul>

				  <Button onClick={this.zh.bind(this)}>中文</Button>
			      <Button type="primary" onClick={this.en.bind(this)}>English</Button>
			      <Button type="text"><FormattedMessage id='btnText'/></Button>  
			      <DatePicker/>

			     <div>
			        <ul>
			          {this.props.order.todos.map(
			            (todo,index) => <li key={index}>{todo.title}</li>
			          )}
			        </ul>
			        <div>
			          <input type="button" onClick={() => {
			            // 直接修改仓库中的状态值
			            this.props.order.changeTodoTitle(0,"修改后的todo标题");
			          }} value="点我"/>
			        </div>
			      </div>

			</div>
		)
	}
}

export default Index;