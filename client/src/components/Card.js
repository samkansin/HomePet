import { Link } from 'react-router-dom';
import '../CSS/Card.css';
const Card = (info) => {
    return (
        <div className='card'>
            <div className='pet-img'>
                <img
                    src='https://cdn.onemars.net/sites/whiskas_th_r81SA_mwh5/image/cat-breeds-03_1920x670_1652358862380.jpeg'
                    alt=''
                />
                <div className='bookmark'>
                    <i className='icon-bookmark'></i>
                </div>
            </div>
            <div className='month_status'>
                <div className='month'>
                    <span>2 Month</span>
                    <span>Male</span>
                </div>
                <div className='status'>
                    <span status='already'>already</span>
                </div>
            </div>
            <div className='name_breed'>
                <div className='name'>
                    <span>Delta</span>
                </div>
                <div className='breed'>
                    <span>Thai Cat</span>
                </div>
            </div>
            <div className='readMore-btn'>
                <Link to='#'>Read More</Link>
            </div>
        </div>
    );
};

export default Card;