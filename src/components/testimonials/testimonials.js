import './testimonials.css';
import React, { useEffect, useState } from 'react';

export default function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const reviews = [
    {
      doctor: "Dr. Rajesh Kansal (General Physician)",
      text: "I came across Doctor Rajesh Kansal through Practo. Then I checked his google reviews, since it’s always a bit of uncertainty trying on a new Doctor. However, when I met with doctor Rajesh, he was really humble and friendly and not like other doctors who put stress on a patient’s mental health. He didn’t give me any unnecessary medication or tests. Just told me certain changes in diet and day to day life to fix my issues. Highly recommended doctor for anyone looking for a good doctor in Delhi.",
      patient: "~ Swabhiman Aditya",
      timeline: "4 months ago"
    },
    {
      doctor: "Dr. Khushboo Kansal (Psychiatrist)",
      text: "I had previously consulted 5 doctors, but the medicines did not work. Also, none of the doctors would listen to what was going on in my head. But Dr. Khushboo is a miracle healer. She not only listens to you, but her treatment works like magic. I am way better now. Thank you so much Dr. Khushboo.",
      patient: "~ Akanksha Malik",
      timeline: "3 years ago"
    },
    {
      doctor: "Dr. Rajesh Kansal (General Physician)",
      text: "Dr. You are a messenger of God for us. You treated my mother so well during the COVID period that words are short to express my gratitude for you. Thank you so much for timely follow-ups. You were available day and night for us. Your medication and timely examination were so good that mom has fully recovered. Thank you so much, Dr.",
      patient: "~ Vishwas Choudhary",
      timeline: "3 years ago"
    },
    {
      doctor: "Dr. Khushboo Kansal (Psychiatrist)",
      text: "Dr. Khushboo is a very caring & compassionate doctor. She has extensive knowledge of her field. The best part is she listens to patients with a lot of patience, which itself has a positive impact on the patient's mental health. After changing many doctors, it was her treatment that helped my father cope with his depression. Thank you, doc.",
      patient: "~ Akshita Singh",
      timeline: "3 years ago"
    },
    {
      doctor: "Dr. Nikhil Jain (FNB Spine Surgery)",
      text: "Dr Nikhil is a thorough knowledgeable specialist who listens to patients very calmly n prescribes medication what suits best for the patient. My experience with him have always been cheerful.",
      patient: "~ Vijay Jain",
      timeline: "3 years ago"
    },
    {
      doctor: "Dr. Rajesh Kansal (General Physician)",
      text: "I came across Dr. Rajesh Kansal during the pandemic after experiencing flu symptoms for three days. With no prior recommendations, I reached out to him, and he confidently identified my condition as COVID without needing a test. He provided effective treatment that helped both me and my mother recover. Dr. Rajesh is truly a lifesaver—patient, friendly, and easily approachable. I highly recommend him!",
      patient: "~ Rasneet Kaur Kohli",
      timeline: "3 years ago"
    },
    {
      doctor: "Dr. Nikhil Jain (FNB - Spine Surgery)",
      text: "I was suffering from L4/L5 disk problem. I took an appointment with Dr Nikhil Jain regarding the issue Iam facing with. I was optimistic towards the successful surgery at MGS hospital,Delhi, I was referred through Dr Sushil Agarwal(Orthopaedic). Soon after the surgery I felt the changes and in a short period of time the tingling pain disappeared from my left buttock. Now feeling normal as before, but Following the advices. Thank you Nikhil sir.",
      patient: "~ Abinash Ranjan Nishank",
      timeline: "3 years ago"
    },
  ];

  const youtubeVideos = [
    {
      id: 1,
      title: "Doctor Testimonial 1",
      url: "https://www.youtube.com/embed/m4nQ-jLYpko?si=mZJ-6pDsq-QYfD0i",
    },
    {
      id: 2,
      title: "Doctor Testimonial 2",
      url: "https://www.youtube.com/embed/2j5C-LUY1Uk?si=NAlGZ5c0p_l6s8C1",
    },
    {
      id: 3,
      title: "Doctor Testimonial 3",
      url: "https://www.youtube.com/embed/bYE9yhxF1J4?si=vn3DyMHt2qBnGYVS",
    }
  ];

  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      window.$('.owl-carousel-videos').owlCarousel({
        loop: true,
        margin: 18,
        autoplay: false,  // Explicitly setting to false
        autoplayHoverPause: true,  // Add this to pause on hover
        nav: true,
        navText: [
          "<div class='custom-nav-left'><i class='bi bi-caret-left-fill'></i></div>",
          "<div class='custom-nav-right'><i class='bi bi-caret-right-fill'></i></div>"
        ],
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 }
        }
      });
    }
  }, []);

  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      window.$('.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        margin: 18,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: [
          "<div class='custom-nav-left'><i class='bi bi-caret-left-fill'></i></div>",
          "<div class='custom-nav-right'><i class='bi bi-caret-right-fill'></i></div>"
        ],
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 2 }
        }
      });
    }
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='row main-container mx-auto'>
      <div className="owl-carousel owl-theme">
      {reviews.map((review, index) => (
        <div key={index} className="item p-3 text-center border border-1 border-black">
          {/* Add the timeline in the top-right corner */}
          <div className="timeline">{review.timeline}</div>
          <h3 className='pt-2'>Visited {review.doctor}</h3>
          <p style={{
            maxHeight: expandedIndex === index ? 'none' : '60px',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out'
          }}>
            {review.text}
          </p>
          <div className="button-container">
            <button onClick={() => toggleExpand(index)} className="read-more-btn">
              {expandedIndex === index ? 'Read Less' : 'Read More'}
            </button>
          </div>
          <p>{review.patient}</p>
        </div>
      ))}
      </div>

      <h2 className="mt-5">Video Testimonials</h2>
      <div className="owl-carousel owl-theme owl-carousel-videos">
        {youtubeVideos.map((video) => (
          <div key={video.id} className="item p-3">
            <iframe
              width="100%"
              height="250"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

    </div>
  );
}
