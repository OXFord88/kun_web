import React from 'react';
import l from './News.less'
import { connect } from 'dva';

@connect(({ news }) => ({
  list: news.list
}))
class News extends React.Component {

	render() {
		const { list } = this.props;
		return (
			<div className={l.box}>
				<div className={l.insideBanner}></div>
				<div className={l.content}>
					<div className={l.title}>
						<h3><span>News</span></h3>
					</div>

					<div className={l.list}>
						{
							list.map( (item,index) => {
								return(
									<div className={l.li} key={index}>
										<img src={item.img} alt="icon"/>
										<div className={l.title}>{item.title}</div>
										<div className={l.contents}>
											<h5>{item.til}</h5>
											<p>{item.text.length > 320 ? item.text.slice(0, 320) + '...' : item.text}</p>
											<h6>{item.time}</h6>
											<span>see more</span>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		);
	}
}
export default News;
