import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import l from './Index.less'
import Xom from '@/components/Component'

export default function() {
  return (
    <div className={styles.normal}>
      <img src="/img/yay.jpg" />
    </div>
  );
}
