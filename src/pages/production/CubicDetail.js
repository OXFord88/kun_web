
import React from 'react';
import { connect } from 'dva';
import l from './Detail.less';



@connect(({ detail }) => ({
    dip: detail.dip,
    cubic: detail.cubic
}))
class CubicDetail extends React.Component{
    componentDidMount() {
		window.scrollTo(0, 0)
	}
    render() {
        const { dip, cubic } = this.props;

        return(
            <div>
                <div className={l.top} style={{backgroundColor: '#fff'}}>
                    <div className={l.topBox}>
                        <h1>{cubic.title}</h1>
                        <h3>{cubic.text1}</h3>
                        <img src={cubic.textImg} style={{height: 600}} alt="image"/>


                        <h2>{cubic.ht1}</h2>
                        <p>{cubic.hp1}</p>
                        <img src={cubic.img1} alt="image"/>

                        <h2>{cubic.ht2}</h2>
                        <p>{cubic.hp2}</p>
                        <img src={cubic.img2} alt="image"/>

                        
                        <h2>{cubic.ht3}</h2>
                        <p style={{marginBottom: 10}}>{cubic.hp3}</p>
                        <p style={{marginBottom: 10}}>{cubic.hp31}</p>
                        <p>{cubic.hp3}</p>
                        <img src={cubic.img3} alt="image"/>
                        <img src={cubic.img31} alt="image"/>
                        <img src={cubic.img32} alt="image"/>
                   
                    </div> 
                </div>
                
            </div>
        )
    }
}

export default CubicDetail