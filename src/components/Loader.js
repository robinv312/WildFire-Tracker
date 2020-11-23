import images from './images.png'

function Loader() {
    return (
        <div className="loader">
            <img src={images} alt="loading"/>
        </div>
    )
}

export default Loader

