import React from 'react';
import './blog.css';

export default function Blog() {
  return (
    <div className='container blogsc'>
      <h1>Healthcare Insights Blog</h1>

      <div className="blog-post">
        <h2 className="post-title">5 Tips for Managing Stress in a Busy World</h2>
        <p className="post-date">Posted on October 11, 2024 by Dr. Khushboo Kansal</p>
        {/* <img src="https://via.placeholder.com/800x400" alt="Managing Stress" className="post-image" /> */}
        <p className="post-content">
          Managing stress is crucial for maintaining a healthy lifestyle. In today's busy world, we are constantly bombarded with demands. Here are 5 simple strategies that can help you stay calm...
        </p>
        <p href="#" className="read-more">Read More</p>
        {/* <a href="#" className="read-more">Read More</a> */}
      </div>

      <div className="blog-post">
        <h2 className="post-title">Understanding Hypertension and How to Control It</h2>
        <p className="post-date">Posted on October 9, 2024 by Dr. Rajesh Kansal</p>
        {/* <img src="https://via.placeholder.com/800x400" alt="Hypertension Control" className="post-image" /> */}
        <p className="post-content">
          Hypertension, or high blood pressure, is a common condition that can lead to severe health complications if not managed properly. Learn the key lifestyle changes and medications used to control hypertension...
        </p>
        <p href="#" className="read-more">Read More</p>
        {/* <a href="#" className="read-more">Read More</a> */}
      </div>

      <div className="blog-post">
        <h2 className="post-title">Spine Care: Preventing and Treating Back Problems</h2>
        <p className="post-date">Posted on October 5, 2024 by Dr. Nikhil Jain</p>
        {/* <img src="https://via.placeholder.com/800x400" alt="Spine Care" className="post-image" /> */}
        <p className="post-content">
          Back pain is one of the most common complaints in modern life. Whether it's due to bad posture, injury, or aging, taking care of your spine is critical to overall well-being...
        </p>
        <p href="#" className="read-more">Read More</p>
        {/* <a href="#" className="read-more">Read More</a> */}
      </div>

    </div>
  );
}
