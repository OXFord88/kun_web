import React from 'react';
import l from './Index.less'
import Link from 'umi/navlink'
import LinkSmall from 'umi/link'
import cx from 'classnames'
import { connect } from 'dva'

import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';


@connect(({ user }) => ({
  user
}))
class BasicLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nav: [
				// {name: 'Home', path: '/home'},
				{name: 'Production', path: '/production'},
				{name: 'Case study', path: '/case'},
				{name: 'Service & Support', path: '/service'},
				{name: 'News', path: '/news'},
				{name: 'About us', path: '/about'},
			],
			footer: [
				{
					title: 'Production', 
					children: [
						{title: 'Fine Pitch', path: '/production'},
						{title: 'Rental', path: '/production'},
						{title: 'Fixed', path: '/production'}
					]
				},{
					title: 'Case study', 
					children: [
						{title: 'Agentina P10', path: '/case'},
						{title: 'America P2.9', path: '/case'},
						{title: 'Brazil rental solution', path: '/case'}
					]
				},{
					title: 'Service&Support', 
					children: [
						{title: 'Warranty Policy', path: '/service'},
						{title: 'FAQ', path: '/service'},
					]
				},{
					title: 'News', 
					children: [
						{title: 'Further protection', path: '/news/detail?id=1'},
						{title: 'Future trend', path: '/news/detail?id=2'},
						{title: 'How to have a cool led', path: '/news/detail?id=3'},
						{title: 'How to install your LED Displays from Different Ways', path: '/news/detail?id=4'},
					]
				},{
					title: 'About us', 
					children: [
						{title: 'Company profile', path: '/about'},
						{title: 'Contact us', path: '/about'}
					]
				}
			],
			order: 0,
			height: 0
		}
	}
	componentDidMount() {
		if (this.node) {
			this.node.scrollIntoView();
		}

		this.props.dispatch({
			type: 'user/fetchCurrent',
			payload: {}
		})
	}

	handleOut = () => {
		const { dispatch } = this.props;
		dispatch({
			type: 'login/logout',
			payload: {}
		})
	}



	moveIn = (index, item, e) => {
		e.stopPropagation()
		this.setState({
			order: index, 
		})
		this.banner.slickGoTo(index)
	}


	renderContent = (order, index, item) => {
		console.log(order)
		if (order === 5) {
			// about us
			return(
				<div className={l.hd} key={index}>
	      	<div className={l.left}>
	      		<img src="/about/about-us4.jpg" alt="icon"/>
	      	</div>
	      	<div className={l.middle}>
        		<h2>About us</h2>
        		<p>Unilumin is a leading LED application products and integrated solutions provider dedicated in LED product development, manufacturing, as well as worldwide sales and after-sales services</p>
        	</div>
	      	<ul className={l.right}>
	      		<li><LinkSmall to="/about?type=company">Company profile</LinkSmall></li>
	      		<li><LinkSmall to="/about?type=contact">Contact us</LinkSmall></li>
	      	</ul>
	      </div>
      )
		}else if (order === 4) {
			return(
				<div className={l.hd} key={index}>
	      	<div className={l.left}>
	      		<img src="/news/news.jpg" alt="icon"/>
	      	</div>
	      	<div className={l.middle}>
        		<h2>News</h2>
        		<p>Keep up with the latest Unilumin news.If you want to know more about industry trends or get familiar with the most advanced products, you can click here for more information.</p>
        	</div>
	      	<ul className={l.right}>
	      	</ul>
	      </div>
      )
		}


		else{
			return(
				<div className={l.hd} key={index}>
        	<div className={l.left}>
        		<img src="/img/yay.jpg" alt="icon"/>
        	</div>
        	<div className={l.middle}>
        		<h2>About us</h2>
        		<p>Unilumin is a leading LED application products and integrated solutions provider dedicated in LED product development, manufacturing, as well as worldwide sales and after-sales services</p>
        	</div>
        	<ul className={l.right}>
	      		<li>123</li>
	      		<li>123</li>
	      		<li>123</li>
	      		<li>123</li>
	      	</ul>
        </div>
			)
		}
	}
	renderBtms = () => {
		const { order } = this.state;
		return(
			<BannerAnim
				thumb={false}
				arrow={false}
				initShow={1}
				ref={(c) => { this.banner = c; }}
				prefixCls={l['banner-user']}
				type="verticalOverlay"
			>
				{
					this.state.nav.map( (item, index) => {
						return(
							<Element prefixCls={l['banner-user-elem']} key={item.name} leaveChildHide={true} sync={true}>
								{this.renderContent(order,index, item)}
							</Element>
						)
					})
				}
			</BannerAnim>
		)
	}


	header = (type) => {
		if (type === 'in') {
			// this.setState({
			// 	height: 200
			// })
		}else if (type === 'out') {
			// this.setState({
			// 	height: 0
			// })
		}
	}
	render() {
		const {
			// dispatch,
			user
		} = this.props;
		const {
			footer,
			height
		} = this.state;
		return (

			<div ref={node => this.node = node} className={l.layout}>
				<div className={l.topHead}>
					<div className={l.first}>
						<div className={cx(l.cons, l.nav)}>
							<div className={l.left}>
								<LinkSmall to="/"><img src="/logo_tiny.png" alt="logo"/></LinkSmall>
							</div>
							<div onMouseEnter={this.header.bind(null, 'in')} onMouseLeave={this.header.bind(null, 'out')} className={l.middle}>
								{
									this.state.nav.map( (item,index) => {
										return <Link onMouseEnter={this.moveIn.bind(null, index, item)}  to={item.path} key={index} className={cx(l.menuItems)} activeClassName={l.active}>
											{item.icon} {item.name}
										</Link>
									})
								}
							</div>
						</div>
					</div>
					<div onMouseEnter={this.header.bind(null, 'in')} onMouseLeave={this.header.bind(null, 'out')} className={l.second} style={{height}}>
						<div className={cx(l.cons, l.bottom)}>
							{this.renderBtms()}
						</div>
					</div>
				</div>

	      <div className={l.contentBox}>
		      {this.props.children}
	      </div>
	      <div className={l.basic}>
	      	<div className={l.top}>
	      		{
	      			footer.map( (item,index) => {
	      				return(
	      					<div className={l.cell} key={index}>
	      						<div className={l.til}>{item.title}</div>
	      						<ul>
	      							{
	      								item.children.map( (k,j) => {
	      									return <li key={j}>
	      										<LinkSmall to={k.path}>{k.title}</LinkSmall>
	      									</li>
	      								})
	      							}
	      						</ul>
	      					</div>
								)
	      			})
	      		}
	      	</div>
		      <div className={l.copy}>
		      	<div>Copyright © CM30, All Rights Reserved. </div>
		      	<div>京ICP备15114130号-1</div>
		      </div>
	      </div>
	    </div>
		);
	}
}

export default BasicLayout
