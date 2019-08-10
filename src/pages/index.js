import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';

import Xom from '@/components/Component'

export default function() {
  return (
    <div className={styles.normal}>
      <Xom />
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
      <img src="/img/yay.jpg" />
    </div>
  );
}
