import {FC} from 'react';
import styles from './App.module.scss';
import Emoticon from './components/Emoticon';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <code>
        <pre>Well, let's start coding 👨🏻‍💻👨🏻‍💻👨🏻‍💻</pre>
      </code>

      <Emoticon />
    </div>
  );
};

export default App;
