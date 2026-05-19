import './Supported.css'
import { dataImagesSupported } from './dataImagesSupported'

export default function Supported() {
    return (
        <section className='supported'>
            <p className='supported__text'>Supported by:</p>
            <div className="supported__company">
                {
                dataImagesSupported.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                ))
            }
            </div>
        </section>
    )
};
