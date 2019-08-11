import React from 'react';
import l from './Home.less';
import cx from 'classnames';
import { connect } from 'dva'
import Link from 'umi/link'
import phone from '@/assets/indexwrap_01.png'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;



@connect(({ home }) => ({
  home
}))
class Home extends React.Component {

	scrollTop = () => {
		this.node.scrollIntoView()
	}

	dealProduct = (arr = []) => {
		let temp = [];
		let copy = JSON.parse(JSON.stringify(arr))
		let double = Math.ceil(copy.length / 4);
		for(let n=0; n<double; n++) {
			temp.push(copy.slice(0, 4))
			copy = copy.slice(4)
		}
		return temp;
	}
	render() {
		const { home: {banners, products, casees, news} } = this.props;
		return (
			<div className={l.box} ref={node => this.node = node}>
				<div className={l.fixed}>
					<div className={l.fir}>
						<img src={phone} alt=""/>
						<div className={l.phone}>
							<p className={l.num}><span>Phone：</span><span>1888888888</span></p>
							<p className={l.eamil}><span>Eamil：</span><span>361196961@qq.com</span></p>
							<p className={l.address}><span>Addre：</span><span>beijing city address beijing</span></p>
						</div>
					</div>
					<div onClick={this.scrollTop} className={l.sec}>
						TOP
					</div>
				</div>

				<BannerAnim prefixCls={l['banner-user']} autoPlay arrow={false} type="acrossOverlay">
					{
						banners.map( (item,index) => {
							return(
								<Element prefixCls={l['banner-user-elem']} key={`${index}`}>
									<BgElement key="bg" className={cx(l.bg)} style={{ backgroundImage: `url(${item})`}} />
								</Element>
							)
						})
					}
				</BannerAnim>
				
				<div className={l.contain}>
					<div className={l.title}>Product</div>
					<div className={l.content}>
						<BannerAnim prefixCls={l.product} type="across" dragPlay={false}>
							{
								this.dealProduct(products).map( (item,index) => {
									return(
										<Element prefixCls={l.cell} key={`${index}`} leaveChildHide={true}>
											<BgElement key="bg" className={l.bg} />
						          {
						          	item.map( (k,j) => {
						          		return(
						          			<TweenOne className={cx(l.son, l[j !== item.length - 1 ? 'mr' : null])} key={j} animation={{ y: 30, opacity: 0, type: 'from' }}>
									            <div className={l.sonCell}>
										            <img src={k.img} alt="icon"/>
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
							<img src="/case/indexcase_01.jpg" alt="icon"/>
						</div>
						<div className={l.right}>							
							{
								casees.map( (item,index) => {
									return(
										<div key={index}>
											<img src={item.img} alt="icon"/>
											<p>{item.title}</p>
										</div>
									)
								})
							}
							<Link to="/" className={l.learn}>Learn More</Link>
						</div>
					</div>
				</div>


				<div className={cx(l.contain, l.so_bg)}>
					<div className={l.title}>News Center</div>
					<Link to="/" className={l.learnBtn}>Learn More</Link>
					<div className={l.content}>
						<BannerAnim prefixCls={l.solution} type="across" dragPlay={false}>
							<Element prefixCls={l.cell} key="0" leaveChildHide={true}>
								<BgElement key="bg" className={l.bg} />
								{
									news.map( (item,index) => {
										return(
											<TweenOne key={index} className={cx(l.son, l[index !== news.length - 1 ? 'mr' : ''])} animation={{ y: 30, opacity: 0, type: 'from' }}>
						            <div className={l.sonCell}>
						            	<div className={l.top}>
						            		<img src={item.img} alt="icon"/>
						            	</div>
							            <div className={l.bottom}>
							            	<h3>{item.title}</h3>
							            	<p>{item.text}</p>
							            	<Link to="/">Learn more</Link>
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
					<h3 className={l.title}>Why choose Unilumin?</h3>
					<div className={l.content}>
						<div>
							<img src="/why/indexwhy_01.png" alt="icon"/>
							<h2>Sales Networks</h2>
							<p>Service and support network in over 100 countries</p>
						</div>
						<div>
							<img src="/why/indexwhy_02.png" alt="icon"/>
							<h2>Technology</h2>
							<p>500+ personnel R&D team </p>
						</div>
						<div>
							<img src="/why/indexwhy_03.png" alt="icon"/>
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
