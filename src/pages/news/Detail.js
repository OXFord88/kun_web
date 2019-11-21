import React from 'react';
import l from './News.less'
import { connect } from 'dva';

@connect(({ news }) => ({
    data: news.datas
}))
class Detail extends React.Component{
    componentDidMount() {
		window.scrollTo(0, 0)
	}
    render() {
        const { data, location: {query}} = this.props;
        const message= data[query.id];
        console.log(message)
        return(
            <div className={l.mains}>
                <h1>{message.title}</h1>
                <img className={l.note} src={message.img} alt="icon"/>
                {
                    message.content.map( (item,index) => {
                        if(item.type === 'title'){
                            return <h2 key={index}>{item.value}</h2>
                        }else if(item.type === 'img'){
                            return <img className={l.img} key={index} src={item.value} />
                        }else if(item.type === 'text'){
                            return(
                                <p key={index}>{item.value}</p>
                            )
                        }
                        
                    })
                }
            </div>
        )
    }
}

export default Detail;