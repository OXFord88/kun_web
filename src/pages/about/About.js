import React, { Fragment } from 'react';
import { connect } from 'dva';
import cx from 'classnames'
import l from './About.less'



@connect(({ about }) => ({
  companyData: about.company,
  contact: about.contact
}))
class About extends React.Component {
	state = {
		active: 'company',
		
	}
	handle = (type) => {
		this.setState({
			active: type
		})
	}
	render() {
		const { active } = this.state;
		const { companyData, contact: {address, area, bottom} } = this.props;
		return (
			<div className={l.box}>
				<div className={l.insideBanner}></div>
				<div className={l.content}>
					<div className={l.title}>
						<h3><span>ABOUT US</span></h3>
					</div>
					<div className={l.text}>
						<span onClick={this.handle.bind(null, 'company')} className={l[active === 'company' ? 'active' : null]}>Company profile</span>
						<span onClick={this.handle.bind(null, 'contact')} className={l[active === 'contact' ? 'active' : null]}>Contact us</span>
					</div>
					<div className={l.line}></div>
					{
						active === 'company' ?
						<ul className={l.company}>
							{
								JSON.parse(JSON.stringify(companyData)).splice(0, companyData.length - 1).map( (m,n) => {
									if (n % 2 === 0) {
										return(
											<li key={n}>
												<div className={cx(l.con, l.pr)}>
													{
														m.content.map( (item,index) => {
															return<Fragment>
																<h3>{item.title}</h3>
																<p>{item.text}</p>
															</Fragment>
														})
													}
												</div>
												<div className={l.img}>
													<img src={m.img} alt="icon" />
												</div>
											</li>
										)
									}else{
										return(
											<li key={n}>
												<div className={l.img}>
													<img src={m.img} alt="icon" />
												</div>
												<div className={cx(l.con, l.pl)}>
													{
														m.content.map( (item,index) => {
															return<Fragment>
																<h3>{item.title}</h3>
																<p>{item.text}</p>
															</Fragment>
														})
													}
												</div>
											</li>
										)	
									}
									
								})
							}
							{
								JSON.parse(JSON.stringify(companyData)).splice(-1).map( (k,j) => {
									return(
										<li key={j}>
											<div className={l.last}>
												<img src={k.img}alt="icon" />
												<div className={cx(l.con)}>
													{
														k.content.map( (item,index) => {
															return<Fragment>
																<h3>{item.title}</h3>
																<p>{item.text}</p>
															</Fragment>
														})
													}
												</div>
											</div>
										</li>
									)
								})
							}
						</ul>
						: null
					}
					{
						active === 'contact' ?
						<div className={l.contact}>
							<h3>{address.title}</h3>
							<div className={l.cell}>
								{
									address.list.map( (k,j) => {
										return(
											<div className={l.bell} key={j}>
												<img src={k.img} alt="icon"/>
												<p>{k.til}</p>
												{
													k.text.map( (m,n) => {
														return(
															<div key={n}>
																{m}
															</div>
														)
													})
												}
											</div>	
										)
									})
								}
							</div>
							<div className={l.map}>
								<img src={address.maps} alt="map"/>
							</div>

							<div className={l.addr}>
								<h2>{area.title}</h2>
								<p>{area.text}</p>
								<ul className={l.list}>
									{
										area.list.map( (item,index) => {
											if (index === 0 || index === 1 || index === 4 || index === 5 || index === 7 || index === 8) {
												return(
													<li key={index}>
														<div className={l.list_cell}>
															<div className={l.img}>
																<img src={item.img} alt="icon"/>
															</div>
															<div className={l.text}>
																<h2>{item.title}</h2>
																<p>{item.addr}</p>
																<p>{item.tel}</p>
																<p>{item.email}</p>
															</div>
														</div>
													</li>
												)
											}else{
												return(
													<li key={index}>
														<div className={l.list_cell}>
															<div className={l.text}>
																<h2>{item.title}</h2>
																<p>{item.addr}</p>
																<p>{item.tel}</p>
																<p>{item.email}</p>
															</div>
															<div className={l.img}>
																<img src={item.img} alt="icon"/>
															</div>
															
														</div>
													</li>
												)
											}
										})
									}
								</ul>
							</div>

							<div className={l.addr}>
								{/* <h2>{bottom.title}</h2>
								<h5>{bottom.til}</h5> */}
								<div className={l.cell}>
									{
										bottom.list.map( (k,j) => {
											return(
												<div className={l.bell} key={j}>
													<img src={k.img} alt="icon"/>
													<p>{k.til}</p>
													{
														k.text.map( (m,n) => {
															return(
																<div key={n}>
																	{m}
																</div>
															)
														})
													}
												</div>	
											)
										})
									}
								</div>
							</div>
						</div>
						: null
					}
				</div>
			</div>
		);
	}
}
export default About;
