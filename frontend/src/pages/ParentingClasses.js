import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInModal from '../components/SignInModal';
import './ParentingClasses.css';

const ParentingClasses = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const onlineClasses = [
    { id: 1, title: 'Discipline', image: '/classes/discipline.webp', startDate: 'Starts on 29/08/2025', duration: '10 Days' },
    { id: 2, title: 'Parenting techniques', image: '/classes/parenting1.jpg', startDate: 'Starts on 30/08/2025', duration: '10 Days' },
    { id: 3, title: 'Parenting techniques', image: '/classes/parenting2.png', startDate: 'Starts on 02/09/2025', duration: '30 Days' },
    { id: 4, title: 'Child Development', image: '/classes/child-dev.jpg', startDate: 'Starts on 28/08/2025', duration: '10 Days' },
  ];

  const workshops = [
    {
      id: 1,
      title: 'Child care',
      image: '/classes/childcare.jpg',
      conductor: 'Contucted by James doe',
      role: 'Senior Doctor',
      date: 'Wed, 28 Aug, 2025',
      time: 'Time: 10.00 Am - 1.00Pm',
    },
    {
      id: 2,
      title: 'First step with baby',
      image: '/classes/first-step.jpg',
      conductor: 'Contucted by James doe',
      role: 'Senior Doctor',
      date: 'Wed, 28 Aug, 2025',
      time: 'Time: 10.00 Am - 1.00Pm',
    },
    {
      id: 3,
      title: 'The Art of Baby Handling',
      image: '/classes/baby-handling.webp',
      conductor: 'Contucted by James doe',
      role: 'Senior Doctor',
      date: 'Wed, 28 Aug, 2025',
      time: 'Time: 10.00 Am - 1.00Pm',
    },
  ];

  return (
    <div className="parenting-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>Parenting classes</span>
      </div>

      {/* Online Classes */}
      <h2 className="section-heading">Online Classes</h2>
      <div className="online-classes-slider">
        {onlineClasses.map((cls) => (
          <div key={cls.id} className="class-card">
            <div className="class-card-img">
              <img src={cls.image} alt={cls.title} />
            </div>
            <div className="class-card-info">
              <h3>{cls.title}</h3>
              <p className="class-date">{cls.startDate}</p>
              <p className="class-duration">{cls.duration}</p>
              <button className="join-class-btn" onClick={() => setShowSignIn(true)}>Join class</button>
            </div>
          </div>
        ))}
      </div>

      {/* Workshops */}
      <h2 className="section-heading">Workshops</h2>
      <div className="workshops-grid">
        {workshops.map((ws) => (
          <div key={ws.id} className="workshop-card">
            <div className="workshop-img">
              <img src={ws.image} alt={ws.title} />
            </div>
            <div className="workshop-info">
              <h3>{ws.title}</h3>
              <p>{ws.conductor}</p>
              <p className="workshop-role">{ws.role}</p>
              <p className="workshop-date">{ws.date}</p>
              <p className="workshop-time">{ws.time}</p>
              <button className="register-btn" onClick={() => setShowSignIn(true)}>Register</button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="cta-content">
          <h2>Free sign In to Join classes and Workshop now</h2>
          <button className="cta-register-btn" onClick={() => setShowSignIn(true)}>Register</button>
        </div>
        <img src="/classes/register-lady.jpg" alt="Register" className="cta-image" />
      </div>

      {/* Sign In Modal */}
      <SignInModal isOpen={showSignIn} onClose={() => setShowSignIn(false)} />
    </div>
  );
};

export default ParentingClasses;
