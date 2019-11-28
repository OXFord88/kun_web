import React, { PureComponent } from 'react'
import l from './Nav.less'



class NavBottom extends PureComponent {

    render() {
        const { item } = this.props;
        return (
            <div className={l.hd}>
                <div className={l.left}>
                    <img src="/about/about-us4.jpg" alt="icon" />
                </div>
                <div className={l.middle}>
                    <h2>{item.name}</h2>
                    <p>Unilumin is a leading LED application products and integrated solutions provider dedicated in LED product development, manufacturing, as well as worldwide sales and after-sales services</p>
                </div>
                <ul className={l.right}>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                </ul>
            </div>
        );
    }
}

export default NavBottom;