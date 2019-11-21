import React from 'react';
import { connect } from 'dva';
import Link from 'umi/link'
import l from './Production.less';
import cx from 'classnames';

@connect(({ products }) => ({
  productList: products.productList,
  productnav: products.productnav,
  banner: products.banner
}))
class Production extends React.Component {
	state = {
		activeIndex: 0,
		key: 'finePitch',
	}
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	handleClick = (item, index) => {
		this.setState({
			activeIndex: index,
			key: item.key,
		});
	}

	render() {
		const { productList, productnav, banner } = this.props;
		const products = productList[this.state.key];
		return (
			<div className={l.box}>
				<div className={l.insideBanner} style={{backgroundImage: `url(${banner})`}}></div>
				<div className={l.content}>
					<div className={l.title}>
						<h3><span>PRODUCT</span></h3>
					</div>
					<div className={l.productnav}>
						{productnav.map((item, index) => (
							<a className={`${index == this.state.activeIndex ? l.active : ''}`} onClick={() => this.handleClick(item, index)}>{item.title}</a>
						))}
					</div>
					<ul className={l.productList}>
						{products.map((item, index) => {
							if (index % 2 == 0) {
								return (
									<li>
										<h4 className={cx(l.titleName, l.w370)}>
											<a>{item.title}</a>
										</h4>
										<div className={cx(l.imgbox, l.w370)}>
											<Link to={`${item.link}`}><img src={item.url} /></Link>
										</div>
										<div className={cx(l.mask, l.w370)}>
											<h5>{item.smalltitle}</h5>
											<p className={l.text}>{item.text}</p>
											{item.disciption && <p className={l.dis}><i></i>{item.disciption}</p>}
										</div>
									</li>
								);
							} else {
								return (
									<li>
										<div className={cx(l.mask, l.w370)}>
											<h5>{item.smalltitle}</h5>
											<p className={l.text}>{item.text}</p>
											{item.disciption && <p className={l.dis}><i></i>{item.disciption}</p>}
										</div>
										<div className={cx(l.imgbox, l.w370)}>
											<Link to={`${item.link}`}><img src={item.url} /></Link>
										</div>
										<h4 className={cx(l.titleName, l.w370)}>
											<a>{item.title}</a>
										</h4>
									</li>
								);
							}
						})}
					</ul>
				</div>
			</div>
		);
	}
}
export default Production;
