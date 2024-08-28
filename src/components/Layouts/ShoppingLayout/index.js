import classNames from 'classnames/bind';
import Header from '../components/Header';
import styles from './ShoppingLayout.module.scss';
import SideBar from './SideBar';

const cx = classNames.bind(styles);
function ShoppingLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('list-content')}>{children}</div>
            </div>
        </div>
    );
}

export default ShoppingLayout;
