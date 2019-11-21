
import React from 'react';
import { connect } from 'dva';
import l from './Detail.less';



@connect(({ detail }) => ({
    detail: detail.detail,
    last: detail.last,
    table: detail.table
}))
class CommonDetail extends React.Component{
    
    componentDidMount() {
		window.scrollTo(0, 0)
	}
    renderSpecial = (message, lasts, list=[]) => {
        const { table } = this.props;
        console.log(table)
        return(
            <div>
                <div className={l.top} style={{backgroundColor: '#fff'}}>
                    <div>
                        <h2>{message[0].title}</h2>
                        {
                            message[0].text.map( (k,n) => {
                                return(
                                    <p key={n}>{k}</p>
                                )
                            })
                        }
                        <img src={message[0].img} alt="icon"/>
                    </div> 
                </div>
                {
                    lasts.map( (item,index) => {
                        if(index % 2 === 0) {
                            return(
                                <div key={item.title} className={l.gray}>
                                    <div className={l.cell}>
                                        <div className={l.left}>
                                            <h3>{item.title}</h3>
                                            {
                                                item.text.map( (k,n) => {
                                                    return(
                                                        <p key={n}>{k}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                        <img style={{marginLeft: 50}} src={item.img} />
                                    </div>
                                </div>
                            )
                        }else{
                            return(
                                <div key={item.title} className={l.white}>
                                    <div className={l.cell}>
                                        <img style={{marginRight: 50}} src={item.img} />
                                        <div className={l.left}>
                                            <h3>{item.title}</h3>
                                            {
                                                item.text.map( (k,n) => {
                                                    return(
                                                        <p key={n}>{k}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                <div className={l.gray}>
                    <div className={l.listText}>
                        {
                            list.map( (item,index) => {
                                return <p key={index}>{item}</p>
                            })
                        }    
                    </div>
                </div>
                <div className={l.white}>
                    <div className={l.table}>
                        <img src={table.img} alt="table" />
                    </div>
                </div>
            </div>
        )
    }
    render() {
        const { detail, last, location:{query} } = this.props;
        const message = detail[query.id] ? detail[query.id] : [];
        const lasts = message.splice(1, message.length);
        const imgs = last[query.id]
        console.log(imgs)
        if(query.id === '117'){
            return this.renderSpecial(message, lasts, imgs)
        }

        return(
            <div>
                <div className={l.top}>
                    <div>
                        <h2>{message[0].title}</h2>
                        {
                            message[0].text.map( (k,n) => {
                                return(
                                    <p key={n}>{k}</p>
                                )
                            })
                        }
                        <img src={message[0].img} alt="icon"/>
                    </div> 
                </div>
                {
                    lasts.map( (item,index) => {
                        if(index % 2 === 0) {
                            return(
                                <div key={item.title} className={l.white}>
                                    <div className={l.cell}>
                                        <div className={l.left}>
                                            <h3>{item.title}</h3>
                                            {
                                                item.text.map( (k,n) => {
                                                    return(
                                                        <p key={n}>{k}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                        <img style={{marginLeft: 50}} src={item.img} />
                                    </div>
                                </div>
                            )
                        }else{
                            return(
                                <div key={item.title} className={l.gray}>
                                    <div className={l.cell}>
                                        <img style={{marginRight: 50}} src={item.img} />
                                        <div className={l.left}>
                                            <h3>{item.title}</h3>
                                            {
                                                item.text.map( (k,n) => {
                                                    return(
                                                        <p key={n}>{k}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                {
                    imgs && 
                    <div className={l.lastImg}>
                        <img  src={imgs} alt="me"/>
                    </div>
                }
            </div>
        )
    }
}

export default CommonDetail