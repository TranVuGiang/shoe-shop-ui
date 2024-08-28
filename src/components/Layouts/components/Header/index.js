import {} from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('header')}>
            <nav className={cx('navbar', 'navbar navbar-expand-lg fixed-top', 'd-flex', 'align-items-center')}>
                <div className={cx('container', 'd-flex', 'justify-content-between', 'align-items-center')}>
                    <a className={cx('navbar-brand')} href="1">
                        MyShop
                    </a>

                    <button
                        className={cx('navbar-toggler', 'navbar-toggler pe-0')}
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className={cx('navbar-toggler-icon')}></span>
                    </button>
                    <div
                        className={cx('offcanvas', 'offcanvas-end')}
                        tabIndex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className={cx('offcanvas-header')}>
                            <h5 className={cx('offcanvas-title')} id="offcanvasNavbarLabel">
                                MyShop
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className={cx('offcanvas-body')}>
                            <div className={cx('search', 'm-auto', 'd-flex')}>
                                <input placeholder="Enter name products..." spellCheck={false} />
                                <button className={cx('search-btn')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                            <ul className={cx('navbar-nav', 'pe-3', 'd-flex', 'justify-content-end')}>
                                <li className="nav-item mt-2">
                                    <a className={cx('nav-link', 'mx-lg-2')} href="1">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className={cx('nav-link', 'mx-lg-2')} href="1">
                                        Products
                                    </a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className={cx('nav-link', 'mx-lg-2')} href="1">
                                        Contact
                                    </a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className={cx('nav-link', 'mx-lg-2', 'fw-bold')} href="1">
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
