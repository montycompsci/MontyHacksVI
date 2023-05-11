import '../assets/css/Sponsors.scss';
import Pediatric from '../assets/sponsors/pediatric.jpg';
import TigersTale from '../assets/sponsors/tigerstale.png';
import Ziplyne from '../assets/sponsors/Ziplynelogo.webp';
import MBA from '../assets/sponsors/mba.jpg';
import ElmGroup from '../assets/sponsors/elmgroup.png';

function Sponsors() {
    return (
        <div id='sponsors'>
            <div style={{ height: '30px' }}></div>
            <h2 className='section-title'>sponsors</h2>
            <div className='sponsors'>
                <div className='plat-sponsor-logos'>
                    <img
                        src={Pediatric}
                        alt='pediatric logo'
                        className='financial-logo'
                        width='30%'
                        height='30%'
                    />
                </div>
                <div className='plat-sponsor-logos'>
                    <img
                        src={Ziplyne}
                        alt='ziplyne logo'
              className='financial-logo'
              width='66.7%'
              height='30%'
                    />
                </div>
                <div style={{ height: '30px' }}></div>
                <div className='silver-sponsor-logos'>
                    <div className='silver-row'>
                        <div>
                            <img
                                src={MBA}
                                alt='MBA logo'
                                className='financial-logo'
                            />
                        </div>
                    </div>
                    <div className='silver-row'>
                        <div>
                            <img
                                src={ElmGroup}
                                alt='Elm group logo'
                                className='financial-logo'
                            />
                        </div>
                    </div>
                    <div className='silver-row'>
                        <div>
                            <img
                                src={TigersTale}
                                alt='tigerstale logo'
                                className='financial-logo'
                                id='tigerstale'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
