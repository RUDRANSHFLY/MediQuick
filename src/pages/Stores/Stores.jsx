import React from 'react'
import "../Stores/Stores.scss"
const Stores = () => {
    const mapStyle = {
        height: '400px',
        width: '100%',
        border: '1px solid #ccc', // Example border styling
        borderRadius: '8px', // Example border radius
    };
    const position = [51.505, -0.09]
    return (
        <div className='stores'>
            <h1>Our Stores</h1>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58652.60250962963!2d69.62763459609656!3d23.250812916956175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e209000b6f17%3A0x7077f358af0774a6!2sBhuj%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700277112891!5m2!1sen!2sin" width="600" height="450" style={{ border: "0;" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14664.824594306883!2d69.69803724774947!3d23.23558428036743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e1a088eac8dd%3A0x7aa224e1893f90ab!2sMadhapar%2C%20Bhuj%2C%20Gujarat%20370020!5e0!3m2!1sen!2sin!4v1700277324996!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.494824481036!2d69.73559431105635!3d23.225074058653174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e118f901b27d%3A0x81f75cc1813c2d8c!2sBhujodi%2C%20Gujarat%20370020!5e0!3m2!1sen!2sin!4v1700277519954!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14666.611249546806!2d69.61045603323976!3d23.219320072401263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e44b301f483%3A0xe8396658a3fed5b!2sMirjapar%2C%20Bhuj%2C%20Gujarat%20370040!5e0!3m2!1sen!2sin!4v1700277587711!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29347.391365550568!2d69.604857471327!3d23.154723114427334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3951202a4208681b%3A0x909bf14acace884b!2sSedata%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700277710283!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    )
}

export default Stores