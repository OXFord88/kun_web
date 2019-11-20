import React, { Fragment } from 'react';
import l from './Service.less';
import { connect } from 'dva';
import cx from 'classnames';

@connect(({ services }) => ({
	warrantyData: services.warranty,
	banner: services.banner,
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
					{active === 'warranty' ? (
						<ul className={l.company}>
							{JSON.parse(JSON.stringify(warrantyData))
								.splice(0, warrantyData.length - 1)
								.map((m, n) => {
									if (n % 2 === 0) {
										return (
											<li key={n}>
												<div className={cx(l.con, l.pr)}>
													{m.content.map((item, index) => {
														return (
															<Fragment>
																<h3>{item.title}</h3>
																<p>{item.text}</p>
															</Fragment>
														);
													})}
												</div>
												<div className={l.img}>
													<img src={m.img} alt="icon" />
												</div>
											</li>
										);
									} else {
										return (
											<li key={n}>
												<div className={l.img}>
													<img src={m.img} alt="icon" />
												</div>
												<div className={cx(l.con, l.pl)}>
													{m.content.map((item, index) => {
														return (
															<Fragment>
																<h3>{item.title}</h3>
																<p>{item.text}</p>
															</Fragment>
														);
													})}
												</div>
											</li>
										);
									}
								})}
							{JSON.parse(JSON.stringify(warrantyData))
								.splice(-1)
								.map((k, j) => {
									return (
										<li key={j}>
											<div className={l.last}>
												<img src={k.img} alt="icon" />
												<div className={cx(l.con)}>
													{k.content.map((item, index) => {
														return (
															<Fragment>
																<h3>{item.title}</h3>
																<p>{item.text}</p>
															</Fragment>
														);
													})}
												</div>
											</div>
										</li>
									);
								})}
						</ul>
					) : null}
					{active === 'FAQ' ? <div>FAQ</div> : null}
				</div>
			</div>
		);
	}
}
export default Service;
