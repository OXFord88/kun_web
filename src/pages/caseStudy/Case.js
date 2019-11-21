import React from 'react';
import { connect } from 'dva';
import l from './Case.less'

@connect(({ casestudy }) => ({
  cases: casestudy.cases,
  banner: casestudy.banner,
}))
class Case extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		const { cases, banner } = this.props;
		return (
			<div className={l.box}>
				<div className={l.insideBanner} style={{backgroundImage: `url(${banner})`}}></div>
				<div className={l.content}>
					<div className={l.title}>
						<h3><span>CASE STUDY</span></h3>
					</div>
					<ul className={l.caselist}>
						{cases.map((item, index) =>
							<li>
								<img src={item.url} alt="" />
								<p>{item.discription}</p>
							</li>
						)}
					</ul>
				</div>
			</div>
		);
	}
}
export default Case;
