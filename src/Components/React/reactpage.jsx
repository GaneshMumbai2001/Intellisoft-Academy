import React from 'react';
import courseImage from './assets/course-image.png'; // Import the image

const CourseCard = () => {
    const courseTitle = "React";
    const courseDescription = "Embark on a comprehensive React journey with our React Front To Back course. Designed for beginners and seasoned developers alike, this course covers...";
    const instructor = "Rainbow Themes In IT";
    const originalPrice = 120.00;
    const discountedPrice = 70.00;
    const lastUpdated = "December 18, 2024";

    return (
        <div className="course-card">
            <img src={courseImage} alt={courseTitle} className="course-image" /> {/* Use the imported image */}
            <div className="course-details">
                <h3>{courseTitle}</h3>
                <p>{courseDescription}</p>
                <div className="instructor">By {instructor}</div>
                <div className="price">
                    <span className="original-price">${originalPrice.toFixed(2)}</span>
                    <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
                </div>
                <div className="last-updated">Last Updated: {lastUpdated}</div>
            </div>
        </div>
    );
};

export default CourseCard;