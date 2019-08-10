import React from 'react';
import l from './Index.less'
import Link from 'umi/navlink'
import LinkSmall from 'umi/link'
import cx from 'classnames'
import { connect } from 'dva'


@connect(({ user }) => ({
  user
}))
class BasicLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nav: [
				{name: 'Home', path: '/home'},
				{name: 'Production', path: '/production'},
				{name: 'Solution', path: '/solution'},
				{name: 'Case study', path: '/case'},
				{name: 'Service & Support', path: '/service'},
				{name: 'News', path: '/news'},
				{name: 'About us', path: '/about'},
			],
			footer: [
				{
					title: 'Production', 
					children: [
						{title: 'Narrow Pixel Pitch', path: '/home'},
						{title: 'Rental', path: '/home'},
						{title: 'Fixed', path: '/home'}
					]
				},{
					title: 'Solution', 
					children: [
						{title: 'LED Display', path: '/home'},
						{title: 'LED Lighting', path: '/home'}
					]
				},{
					title: 'Case study', 
					children: [
						{title: 'Application', path: '/home'},
						{title: 'Location', path: '/home'},
						{title: 'Pixel Pitch', path: '/home'}
					]
				},{
					title: 'Service&Support', 
					children: [
						{title: 'Online Service', path: '/home'},
						{title: 'Network', path: '/home'},
						{title: 'Warranty Policy', path: '/home'},
						{title: 'Download', path: '/home'},
						{title: 'FAQ', path: '/home'},
					]
				},{
					title: 'News', 
					children: [
						{title: 'Company News', path: '/home'},
						{title: 'Events', path: '/home'}
					]
				},{
					title: 'About us', 
					children: [
						{title: 'About Unilumin', path: '/home'},
						{title: 'Contact us', path: '/home'}
					]
				}
			]
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
	render() {
		const {
			// dispatch,
			user
		} = this.props;
		const {
			footer
		} = this.state;
		console.log(user)
		return (

			<div ref={node => this.node = node} className={l.layout}>
				<div className={l.headerBox}>
					<div className={l.header}>
						<div className={l.left}>
							<LinkSmall to="/"><img src="/img/yay.jpg" alt="logo"/></LinkSmall>
						</div>
						<div className={l.middle}>
							{
								this.state.nav.map( (item,index) => {
									return <Link to={item.path} key={index} className={cx(l.menuItems)} activeClassName={l.active}>
										{item.icon} {item.name}
									</Link>
								})
							}
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
		      	<div>Copyright © SU360, All Rights Reserved. </div>
		      	<div>京ICP备15014530号-6</div>
		      </div>
	      </div>
	    </div>
		);
	}
}

export default BasicLayout
