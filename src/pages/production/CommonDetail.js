
import React from 'react';
import { connect } from 'dva';
import l from './Detail.less';



@connect(({ detail }) => ({
    detail: detail.detail,
    last: detail.last,
    table: detail.table,
    tableData: detail.tableData,
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
                        <table border="0" cellPadding="0" cellSpacing="0">
                            <thead>
                                <tr>
                                    {
                                        table.th.map( (item,index) => {
                                            return <th key={index}>{item}</th>
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                  table.td.map( (item,index) => {
                                        return <tr key={index}>
                                            {
                                                item.map( (k,j) => {
                                                    return <td key={j}>{k}</td>
                                                })
                                            }
                                        </tr>
                                    })  
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        const { detail, last, location:{query}, tableData } = this.props;
        const message = detail[query.id] ? detail[query.id] : [];
        const tables = tableData[query.id] ? tableData[query.id] : {};
        const lasts = message.splice(1, message.length);
        const imgs = last[query.id]
        if(query.id === '117'){
            return this.renderSpecial(message, lasts, imgs)
        }
        console.log(tables, 'tables')
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
                {tables.mark ?
                    <div className={l.white}>
                        <div className={l.table}>
                            <table border="0" cellPadding="0" cellSpacing="0">
                                <thead>
                                    <tr>
                                        {
                                            tables.th.map( (item,index) => {
                                                return <th key={index}>{item}</th>
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    tables.td.map( (item,index) => {
                                            return <tr key={index}>
                                                {
                                                    item.map( (k,j) => {
                                                        return <td key={j}>{k}</td>
                                                    })
                                                }
                                            </tr>
                                        })  
                                    }
                                    <tr>
                                        <td>Mark</td>
                                        <td colSpan={tables.mark.col}>{tables.mark.text}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default CommonDetail