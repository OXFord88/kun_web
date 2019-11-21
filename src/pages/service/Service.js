import React, { Fragment } from 'react';
import l from './Service.less';
import { connect } from 'dva';
import cx from 'classnames';

@connect(({ services }) => ({
	warrantyData: services.warranty,
	banner: services.banner,
	title: services.title,
	six: services.six,
}))
class Service extends React.Component {
	state = {
		active: 'warranty',
	};
	handle = type => {
		this.setState({
			active: type,
		});
	};
	render() {
		const { active } = this.state;
		const {
			warrantyData,
			banner,
			title,
			six
		} = this.props;
		return (
			<div className={l.box}>
				<div className={l.insideBanner} style={{backgroundImage: `url(${banner})`}}/>
				<div className={l.content}>
					<div className={l.title}>
						<h3>
							<span>Service & Support</span>
						</h3>
					</div>
					<div className={l.text}>
						<span
							onClick={this.handle.bind(null, 'warranty')}
							className={l[active === 'warranty' ? 'active' : null]}
						>
							Warranty policy
						</span>
						<span
							onClick={this.handle.bind(null, 'FAQ')}
							className={l[active === 'FAQ' ? 'active' : null]}
						>
							FAQ
						</span>
					</div>
					<div className={l.line} />
				</div>
				{active === 'warranty' ? (<div>
					<div className={l.topTitle} style={{ backgroundImage: `url(${title.img})`}}>
						<div>
							<h2>{title.til}</h2>
							<p>{title.text}</p>
						</div>
					</div>
					{
						warrantyData.map( (item,index) => {
							if(item.type === 'left') {
								return(
									<div key={index} style={{backgroundColor: '#f5f5f5'}}>
										<div className={l.cell}>
											<div className={l.ttx}>
												<h3>{item.title}</h3>
												{item.text.map((m, n) => {
													if(m.type === 'title') {
														return <h4>{m.value}</h4>
													}else{
														return <p>{m.value}</p>
													}
												})}
											</div>
											<div className={l.img}>
												<img src={item.img} alt="icon" />
											</div>
										</div>
									</div>
								)
							}else if(item.type === 'right') {
								return(
									<div key={index} style={{backgroundColor: '#fff'}}>
										<div className={l.cell}>
											<div className={l.img}>
												<img src={item.img} alt="icon" />
											</div>
											<div className={l.ttx}>
												<h3>{item.title}</h3>
												{item.text.map((m, n) => {
													if(m.type === 'title') {
														return <h4>{m.value}</h4>
													}else{
														return <p>{m.value}</p>
													}
												})}
											</div>
										</div>
									</div>
								)
							}else if(item.type === 'middle') {
								return(
									<div >
										123
									</div>
								)
							} 
						})
					}
					<div className={l.topTitle} style={{ backgroundImage: `url(${title.img1})`}}>
						<div>
							<h2>{title.til1}</h2>
							<p>{title.text1}</p>
						</div>
					</div>
					<div className={l.last}>
						{ 
							six.map( (k,j) => {
								if(k.type === 'title') {
									return <h3 key={j}>{k.value}</h3>
								}else if(k.type === 'text') {
									return <p key={j}>{k.value}</p>
								}else if(k.type === 'str') {
									return <div style={{paddingLeft: 40}} key={j}>{k.value}</div>
								}else if(k.type === 'sec') {
									return <div style={{paddingLeft: 80}} key={j}>{k.value}</div>
								}
							})
						}
					</div>
				</div>) : null}
				{active === 'FAQ' ? <div>FAQ</div> : null}
			</div>
		);
	}
}
export default Service;
