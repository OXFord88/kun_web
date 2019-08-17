import React from 'react';
import { connect } from 'dva';
import l from './Case.less'

@connect(({ casestudy }) => ({
  cases: casestudy.cases,
  // productnav: products.productnav,
}))
class Case extends React.Component {

	render() {
		const { cases } = this.props;
		return (
			<div className={l.box}>
				<div className={l.insideBanner}>
					<img src="/img/casebanner.jpg" alt="" />
				</div>
				<div className={l.content}>
					<div className={l.title}>
						<h3><span>CASE STUDY</span></h3>
					</div>
					<ul className={l.caselist}>
						{cases.map((item, index) =>
							<li>
								<img src={item.url} alt="" />
							</li>
						)}
					</ul>
				</div>
			</div>
		);
	}
}
export default Case;
