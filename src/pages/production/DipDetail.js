
import React from 'react';
import { connect } from 'dva';
import l from './Detail.less';



@connect(({ detail }) => ({
    dip: detail.dip,
}))
class DipDetail extends React.Component{
    componentDidMount() {
		window.scrollTo(0, 0)
	}
    render() {
        const { dip } = this.props;

        return(
            <div>
                <div className={l.top} style={{backgroundColor: '#fff'}}>
                    <div className={l.topBox}>
                        <h1>{dip.title}</h1>
                        <h3>{dip.text1}</h3>
                        <h3>{dip.text2}</h3>
                        <img src={dip.textImg} alt="image"/>
                        <h2>6Savings</h2>
                        <img src={dip.saving} alt="image"/>

                        <h2>{dip.ht1}</h2>
                        <p>{dip.hp1}</p>
                        <img src={dip.img1} alt="image"/>

                        <h2>{dip.ht2}</h2>
                        <p>{dip.hp2}</p>
                        <img src={dip.img2} alt="image"/>
                        <div className={l.power}>
                            <img src={dip.power} alt="image"/>
                            <div>
                                <h2>{dip.powerH2}</h2>
                                {
                                    dip.powerP.map( (k,n) => {
                                        return <span key={n}>{k}</span>
                                    })
                                }
                            </div>
                        </div>
                        <h2>{dip.ht3}</h2>
                        <p>{dip.hp3}</p>
                        <img src={dip.img3} alt="image"/>
                        <div className={l.power}>
                            <img src={dip.main} alt="image" style={{height: 600}} />
                            <div>
                                <h2>{dip.mainH2}</h2>
                                {
                                    dip.mainP.map( (k,n) => {
                                        return <span key={n}>{k}</span>
                                    })
                                }
                            </div>
                        </div>
                        <h2>{dip.ht4}</h2>
                        <p>{dip.hp4}</p>
                        <img src={dip.img4} style={{height: 200}} alt="image"/>

                        <h2>{dip.ht5}</h2>
                        <p>{dip.hp5}</p>
                        <img src={dip.img5} alt="image"/>

                        <h2>{dip.ht6}</h2>
                        <p style={{marginBottom: 10}}>{dip.hp6}</p>
                        <p style={{marginBottom: 10}}>{dip.hp61}</p>
                        <p>{dip.hp62}</p>
                        <img src={dip.img6} alt="image"/>

                        <h3 style={{margin: '40px 0', fontSize: '40px'}}>Parameter</h3>

                        <table className={l.table} border="0" cellSpacing="0" cellPadding="0">
                            <thead>
                                <tr>
                                    {
                                        dip.table.th.map( (k,n) => {
                                            return <th key={n}>{k}</th>
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dip.table.td.map( (k,n) => {
                                        return <tr key={n}>
                                            {
                                                k.map( (item,index) => {
                                                    return <td key={index}>{item}</td>
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
}

export default DipDetail