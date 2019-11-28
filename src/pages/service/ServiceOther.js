import React, { Fragment } from 'react';
import l from './Service.less';
import { connect } from 'dva';
import cx from 'classnames';

@connect(({ services }) => ({
	banner: services.banner,
	message: services.message
}))
class ServiceOther extends React.Component {
	state = {
		active: 'warranty',
	};
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	handle = type => {
		this.setState({
			active: type,
		});
	};
	render() {
		const { active } = this.state;
		const {
			message,
			banner,
		} = this.props;
		return (
			<div className={l.box}>
				<div className={l.insideBanner} style={{ backgroundImage: `url(${banner})` }} />
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
					<div className={l.other} style={{ backgroundImage: `url(/services/policy2_03.jpg)` }}>
						<div className={l.texts}>
							<div style={{ textAlign: 'center' }}>
								<h2>{message.til}</h2>
								<p>{message.text}</p>
								<img src={message.img} alt="icon" />
							</div>
							<h3 style={{ marginBottom: 50 }}>{message.dear}</h3>
							<p>{message.head}</p>
							{
								message.list.map((item, index) => {
									if (item.type === 'title') {
										return <h4 key={index} className={l.h4}>{item.value}</h4>
									} else if (item.type === 'text') {
										return <div key={index} className={l.tt}>{item.value}</div>
									} else if (item.type === 'img') {
										return <img key={index} className={l.tm} src={item.value} alt="icon" />
									}
								})
							}
							<div style={{ marginTop: 100 }}>
								<p>{message.lastText}</p>
								<img style={{ height: 100 }} src={message.lastImg} alt="icon" />
							</div>
						</div>
					</div>
				</div>) : null}
				{active === 'FAQ' ? <div className={l.fq}>
					暂无内容
				</div> : null}
			</div>
		);
	}
}
export default ServiceOther;
