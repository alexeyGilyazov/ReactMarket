import './TalkSection.css'
import img1 from '../../img/talk1.png'

export default function TalkSection() {
    return (
        <section className='talkSection'>
            <div className="container">
                <h3 className='talkSection__title'>Talk. Listen. Get inspired <br />by every minute of it.</h3>
                <div className="talkSection__blocks">
                    <div className='talkSection__block'>
                        <img src={img1} alt="img" />
                        <p className='talkSection__block_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                    </div>
                </div>
            </div>
        </section>
    )
};
