import React from 'react';
import { connect } from 'dva';
import l from './Production.less'

@connect(({ products }) => ({
  productList: products.productList,
}))
class Production extends React.Component {
	state = {
		activeIndex: null,
	}

	handleEnter = (index) => {
		console.log(index);
		this.setState({
			activeIndex: index,
		});
	}

	handleLeave = () => {
		this.setState({
			activeIndex: null,
		});
	}

	render() {
		const { productList } = this.props;
		return (
			<div className={l.box}>
				<div className={l.insideBanner}>
					<img src="/img/produtsbanner.jpg" />
				</div>
				<div className={l.content}>
					<div className={l.title}>
						<h3><span>PRODUCT</span></h3>
					</div>
					<ul className={l.productList}>
						{productList.map((item, index) => (
							<li className={`${index == this.state.activeIndex ? l.active : ''}`} onMouseEnter={() => this.handleEnter(index)} onMouseLeave={this.handleLeave}>
								<img src={item.url} />
								<div className={l.mask}>
									<h4 className={l.titleName}>
										<a>{item.title}</a>
									</h4>
									<p className={l.text}>{item.text}</p>
									<div className={l.linkBtn}>
										<a>{item.linkBtn}</a>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
export default Production;
