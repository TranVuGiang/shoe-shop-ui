import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';

const cx = classNames.bind(styles);

function Carousel() {
    return (
        <div className={cx('wrapper')}>
            <section id={cx('slider')}>
                <input type="radio" name="slider" id="s1" />
                <input type="radio" name="slider" id="s2" />
                <input type="radio" name="slider" id="s3" defaultChecked />
                <input type="radio" name="slider" id="s4" />
                <input type="radio" name="slider" id="s5" />

                <label htmlFor="s1" id={cx('slide1')}>
                    <img src="../../../images/1.png" alt="Carousel Slide 1" />
                </label>
                <label htmlFor="s2" id={cx('slide2')} checked>
                    <img src="../../../images/2.png" alt="Carousel Slide 2" />
                </label>
                <label htmlFor="s3" id={cx('slide3')}>
                    <img src="../../../images/3.png" alt="Carousel Slide 3" />
                </label>
                <label htmlFor="s4" id={cx('slide4')}>
                    <img src="../../../images/4.png" alt="Carousel Slide 4" />
                </label>
                <label htmlFor="s5" id={cx('slide5')}>
                    <img src="../../../../src/images/1.png" alt="Carousel Slide 5" />
                </label>
            </section>
        </div>
    );
}

export default Carousel;
