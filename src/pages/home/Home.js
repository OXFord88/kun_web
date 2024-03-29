import React from 'react';
import l from './Home.less';
import cx from 'classnames';
import { connect } from 'dva'
import router from 'umi/router';
import Link from 'umi/link'
import phone from '@/assets/home/indexwrap_01.png'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;



@connect(({ home }) => ({
	home
}))
class Home extends React.Component {
	state = {
		show: false
	}
	componentDidMount() {
		window.addEventListener('scroll', () => {
			let scrollTop = document.documentElement.scrollTop || document.body / scrollTop;
			if (scrollTop > 500) {
				this.setState({
					show: true
				})
			} else {
				this.setState({
					show: false
				})
			}
		})
	}
	goTo() {
		let scrollToTop = window.setInterval(function () {
			let pos = window.pageYOffset;
			if (pos > 0) {
				window.scrollTo(0, pos - 20); // how far to scroll on each step
			} else {
				window.clearInterval(scrollToTop);
			}
		}, 2);
	}
	scrollTop = () => {
		this.goTo()
		// this.node.scrollIntoView()
		// document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	dealProduct = (arr = []) => {
		let temp = [];
		let copy = JSON.parse(JSON.stringify(arr))
		let double = Math.ceil(copy.length / 4);
		for (let n = 0; n < double; n++) {
			temp.push(copy.slice(0, 4))
			copy = copy.slice(4)
		}
		return temp;
	}


	handleLink = (item) => {
		router.push(item.link)
	}
	render() {
		const { show } = this.state;
		const { home: { banners, products, casees, news, contact } } = this.props;
		return (
			<div className={l.box} ref={node => this.node = node}>

				<div className={cx(l.fixed, l[show ?'showFixed' : null])}>
					<div className={l.fir}>
						<img src={phone} alt="" />
						<div className={l.phone}>
							<p className={l.num}><span>Phone：</span><span>{contact.Phone}</span></p>
							<p className={l.eamil}><span>Eamil：</span><span>{contact.Eamil}</span></p>
							<p className={l.address}><span>Addre：</span><span>{contact.Addre}</span></p>
						</div>
					</div>
					<div onClick={this.scrollTop} className={l.sec}>
						TOP
					</div>
				</div>


				<BannerAnim prefixCls={l['banner-user']} autoPlay autoPlaySpeed={10000} arrow={false} type="grid">
					{
						banners.map((item, index) => {
							return (
								<Element prefixCls={l['banner-user-elem']} key={`${index}`}>
									<BgElement key="bg" className={cx(l.bg)} style={{ backgroundImage: `url(${item})` }} />
								</Element>
							)
						})
					}
				</BannerAnim>

				<div className={l.contain}>
					<div className={l.title}>Product</div>
					<div className={l.content}>
						<BannerAnim prefixCls={l.product} type="across" thumb={false} dragPlay={false}>
							{
								this.dealProduct(products).map((item, index) => {
									return (
										<Element prefixCls={l.cell} key={`${index}`} leaveChildHide={true}>
											<BgElement key="bg" className={l.bg} />
											{
												item.map((k, j) => {
													return (
														<TweenOne className={cx(l.son, l[j !== item.length - 1 ? 'mr' : null])} key={j} animation={{ y: 30, opacity: 0, type: 'from' }}>
															<div className={l.sonCell} onClick={this.handleLink.bind(null, k)}>
																<img src={k.img} alt="icon" />
																<div className={l.text}>
																	<span>{k.title}</span>
																	<span>{k.til}</span>
																</div>
															</div>
														</TweenOne>
													)
												})
											}

										</Element>
									)
								})
							}
						</BannerAnim>
					</div>
				</div>


				<div className={l.case}>
					<div className={l.title}>Case Study</div>
					<div className={l.con}>
						<div className={l.left}>
							<img src="/home/case/indexcase_01.jpg" alt="icon" />
						</div>
						<div className={l.right}>
							{
								casees.map((item, index) => {
									return (
										<div key={index}>
											<img src={item.img} alt="icon" />
											<p>{item.title}</p>
										</div>
									)
								})
							}
							<Link to="/case" className={l.learn}>Learn More</Link>
						</div>
					</div>
				</div>


				<div className={cx(l.contain, l.so_bg)}>
					<div className={l.title}>News Center</div>
					<Link to="/news" className={l.learnBtn}>Learn More</Link>
					<div className={l.content}>
						<BannerAnim prefixCls={l.solution} type="across" dragPlay={false}>
							<Element prefixCls={l.cell} key="0" leaveChildHide={true}>
								<BgElement key="bg" className={l.bg} />
								{
									news.map((item, index) => {
										return (
											<TweenOne key={index} className={cx(l.son, l[index !== news.length - 1 ? 'mr' : ''])} animation={{ y: 30, opacity: 0, type: 'from' }}>
												<div className={l.sonCell}>
													<div className={l.top}>
														<img src={item.img} alt="icon" />
													</div>
													<div className={l.bottom}>
														<h3>{item.title}</h3>
														<p>{item.text}</p>
														<Link to={item.link}>Learn more</Link>
													</div>
												</div>
											</TweenOne>
										)
									})
								}
							</Element>
						</BannerAnim>
					</div>
				</div>

				<div className={l.why}>
					<h3 className={l.title}>Why choose ENOR?</h3>
					<div className={l.content}>
						<div>
							<img src="/home/why/indexwhy_01.png" alt="icon" />
							<h2>Sales Networks</h2>
							<p>Service and support network in over 100 countries</p>
						</div>
						<div>
							<img src="/home/why/indexwhy_02.png" alt="icon" />
							<h2>Technology</h2>
							<p>500+ personnel R&D team </p>
						</div>
						<div>
							<img src="/home/why/indexwhy_03.png" alt="icon" />
							<h2>Service</h2>
							<p> 24/7 pre-sales and after-sales services</p>
						</div>

					</div>
				</div>
			</div>
		);
	}
}
export default Home;
