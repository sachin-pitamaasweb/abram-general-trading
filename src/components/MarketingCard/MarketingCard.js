"use client"; // Ensure the component is treated as a Client Component

import React from "react";

const MarketingCard = () => {
  return (
    <div className="marketing-card">
      <div className="card">
        <div className="card-content">
          <h2>
            &quot;WE EXPORT WHAT THE CONSUMER DESIRES AND THE MARKET REQUIRES EVERY
            DAY&quot;
          </h2>
          <p>
            It&apos;s my pleasure to introduce you to Abran General Trading, a true
            reflection of an indomitable spirit of human endeavor and extend a
            warm welcome to its website.
          </p>
          <p>
            I would like to take this opportunity to say with a sense of pride
            that our performance during the year gone by, despite being fraught
            with unprecedented challenges, is no doubt creditable considering
            the unfavorable global economic scenario that we were pitched into.
          </p>
          <p>
            It would be unfair if I don&apos;t acknowledge and appreciate the
            untiring effort put in by our core group consisting of the
            Directors, Key Management Personnel, Senior Executives, Managers,
            and also every employee who painstakingly played their roles with
            precision and brevity, true to the expectation.
          </p>
          <p>
            I also gratefully acknowledge the numerous support extended by our
            Bankers, Vendors, and Clients and the trust reposed which helped in
            no small measure not only to achieve our goal but also to take
            forward our expansion program.
          </p>
          <p className="signature">
            Warm regards,
            <br />
            CHAIRMAN
          </p>
        </div>
      </div>
      <style jsx>{`
        /* General Styles */
        body,
        html {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .marketing-card {
          width: 100%;
          height: 100vh;
          background-color: #f1f1f1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
        }

        .card {
          width: 100%;
          max-width: 1120px;
          height: auto;
          padding: 20px;
          background-image: url("https://res.cloudinary.com/dtivafy25/image/upload/v1733808777/bg-1_zmmsuo.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: flex-end; /* Align content to the right */
          align-items: center; /* Vertically center the content */
          flex-wrap: wrap; /* Wrap content for smaller devices */
        }

        .card-content {
          width: 50%; /* Adjust width for larger devices */
          background-color: rgba(255, 255, 255, 0.8); /* Optional background for better readability */
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h2 {
          margin: 0 0 10px;
          font-size: 24px;
          color: #333;
        }

        p {
          margin: 10px 0;
          font-size: 16px;
          color: #555;
          line-height: 1.6;
        }

        .signature {
          margin-top: 20px;
          font-size: 16px;
          font-weight: bold;
          color: #333;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .card {
            justify-content: center; /* Center the content on smaller devices */
            background-image: none; /* Remove background image for mobile */
            height: auto; /* Allow the card to adjust height */
            padding: 10px;
          }

          .card-content {
            width: 100%; /* Full width for smaller devices */
            padding: 15px;
          }

          h2 {
            font-size: 20px;
          }

          p {
            font-size: 14px;
          }

          .signature {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default MarketingCard;
