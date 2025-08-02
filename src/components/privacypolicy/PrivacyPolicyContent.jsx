import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicyContent = () => {
  return (
    <div className="cancellation-policy-parent">
      <div className="container">
        <h3 className="subtitle">OUR PRIVACY POLICY</h3>
        <h6>PRIVACY POLICY</h6>
        <h6>1. Information We Collect</h6>
        <p>
          When you contact us, we may collect personal information such as your:
        </p>
        <ul>
          <li>Name</li>
          <li>Email Address</li>
          <li>Contact Number</li>
          <li>Website URL</li>
          <li>Project Query</li>
        </ul>
        <p>
          This information is used solely to respond to your queries, provide
          updates about our projects, and enhance your experience with our
          company.
        </p>
        <h6>2. Use of Personal Information</h6>
        <p>
          Your personal information will not be sold, shared, or rented to third
          parties. We may use your data to:
        </p>
        <ul>
          <li>Send updates regarding our company, services, and projects</li>
          <li>
            Contact you if requested or if we find it necessary to provide
            assistance
          </li>
        </ul>
        <p>
          This information is used solely to respond to your queries, provide
          updates about our projects, and enhance your experience with our
          company.
        </p>
        <h6>3. Opt-Out Policy</h6>
        <p>
          You have the right to opt out of receiving communication from us at
          any time. To do so, you may:
        </p>
        <ul>
          <li>Call us directly at <Link className="policy-link" to="tel:+91 7557557857"> +91 7557557857</Link></li>
          <li>
            Click the "Unsubscribe" link provided in any of our email
            communications
          </li>
        </ul>
        <h6>4. Security of Your Information</h6>
        <p>
          We take reasonable steps to protect your personal information from
          unauthorized access, alteration, or disclosure. However, please note
          that no method of electronic transmission or storage is completely
          secure.
        </p>
        <h6>5. Contact Us</h6>
        <p>
          If you have any questions about this Privacy Policy or our data
          practices, please contact us at <Link className="policy-link" to="mailto:support@houseconstruct.in">support@houseconstruct.in</Link> or call 
          <Link className="policy-link" to="tel:+91 7557557857"> +91 7557557857</Link>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;
