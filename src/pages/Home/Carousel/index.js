import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import classNames from 'classnames/bind';
import { useEffect, useMemo, useState } from 'react';
import './Carousel.css';
import styles from './Carousel.module.scss';
const cx = classNames.bind(styles);
function Carousel() {
    const colors = useMemo(() => ['#f59797', '#bdf5df', '#7f9cec', '#8c5d50', '#565657'], []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = colors.length;

    useEffect(() => {
        document.body.style.backgroundColor = colors[currentIndex];

        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % totalSlides;
                document.body.style.backgroundColor = colors[newIndex];
                return newIndex;
            });
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentIndex, colors, totalSlides]);

    const handleChangeColorBody = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={cx('wrapper')} id="carousel-wrapper">
            <div className={cx('carousel')}>
                <section id="slider">
                    <input type="radio" name="slider" id="s1" checked={currentIndex === 0} />
                    <input type="radio" name="slider" id="s2" checked={currentIndex === 1} />
                    <input type="radio" name="slider" id="s3" checked={currentIndex === 2} />
                    <input type="radio" name="slider" id="s4" checked={currentIndex === 3} />
                    <input type="radio" name="slider" id="s5" checked={currentIndex === 4} />
                    <label htmlFor="s1" id="slide1" onClick={() => handleChangeColorBody(0)}>
                        <img src="http://localhost:3000/images/1.png" alt="Carousel Slide 1" />
                    </label>
                    <label htmlFor="s2" id="slide2" onClick={() => handleChangeColorBody(1)}>
                        <img src="http://localhost:3000/images/2.png" alt="Carousel Slide 2" />
                    </label>
                    <label htmlFor="s3" id="slide3" onClick={() => handleChangeColorBody(2)}>
                        <img src="http://localhost:3000/images/3.png" alt="Carousel Slide 3" />
                    </label>
                    <label htmlFor="s4" id="slide4" onClick={() => handleChangeColorBody(3)}>
                        <img src="http://localhost:3000/images/4.png" alt="Carousel Slide 4" />
                    </label>
                    <label htmlFor="s5" id="slide5" onClick={() => handleChangeColorBody(4)}>
                        <img src="http://localhost:3000/images/5.png" alt="Carousel Slide 5" />
                    </label>
                </section>
            </div>
        </div>
    );
}

export default Carousel;
