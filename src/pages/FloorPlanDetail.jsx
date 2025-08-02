import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Modal, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import toast from 'react-hot-toast';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import { samplePlans } from '../assets/data/floorPlans';

const ProjectDetailsTable = ({ details }) => (
  <div className="my-4">
    <h4>Project Details</h4>
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th>Plot Size</th>
          <td>{details.plotSize}</td>
        </tr>
        <tr>
          <th>Area</th>
          <td>{details.area} sq.ft</td>
        </tr>
        <tr>
          <th>Budget</th>
          <td>₹{details.budget.toLocaleString()}</td>
        </tr>
        <tr>
          <th>Facing</th>
          <td>{details.roadFacing}</td>
        </tr>
        <tr>
          <th>Floors</th>
          <td>G+{details.floors}</td>
        </tr>
        <tr>
          <th>Construction Type</th>
          <td>{details.constructionType}</td>
        </tr>
        <tr>
          <th>Bedrooms</th>
          <td>{details.bedrooms} BHK</td>
        </tr>
        <tr>
          <th>Vastu Compliant</th>
          <td>{details.vastuCompliant ? 'Yes' : 'No'}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// Use the same generateSlug function as HouseFloorPlans component
function generateSlug(plan) {
  const { plotSize, roadFacing, floors, bedrooms, id } = plan;
  return `${plotSize}-sq-ft-${roadFacing}-facing-${floors}-floor-${bedrooms}-bhk-residential-house-plan-${id}`
    .toLowerCase()
    .replace(/\s+/g, '-');
}

function parseSlug(slug) {
  const parts = slug.split('-');
  return {
    size: parts[0],
    facing: capitalize(parts[3]),
    floors: parts[5],
    bhk: parts[7],
  };
}

function capitalize(word) {
  return word ? word.charAt(0).toUpperCase() + word.slice(1) : '';
}

const ConstructionJourney = ({ onBookConsultation }) => {
  return (
    <div className="text-center my-5">
      <h2>Start Your Construction Journey</h2>
      <Button
        variant="warning"
        style={{ background: '#C3921C', borderColor: '#C3921C' }}
        onClick={onBookConsultation}
        className="text-white fw-semibold"
      >
        Book Free Consultation
      </Button>
    </div>
  );
};

const FloorPlanDetail = () => {
  const { slug } = useParams();
  const plan = samplePlans.find(p => generateSlug(p) === slug);
  const parsedDetails = parseSlug(slug);
  const [visibleModal, setVisibleModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", location: "", phone: "", plotsize: "" });

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleModalClose = () => setVisibleModal(false);
  const handleBookConsultation = () => setVisibleModal(true);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!/^\d{10}$/.test(formData.phone)) errors.phone = "Phone number is invalid";
    return errors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("https://houseconstruct.in/forms/contact.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok && data.status === "success") {
          toast.success("Successfully, we got your info.");
          setVisibleModal(false);
          // Show success message with download link instead of auto-opening PDF
          toast.success(
            <div style={{ fontSize: '16px', padding: '10px' }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>
                Thank you!
              </p>
              <a 
                href={plan.pdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn text-white fw-semibold"
                style={{ background: '#C3921C', borderColor: '#C3921C', fontSize: '16px', padding: '12px 24px' }}
              >
                <i className="bi bi-download me-2"></i>
                Open Floor Plan PDF
              </a>
            </div>,
            { 
              duration: 8000,
              style: {
                fontSize: '16px',
                padding: '20px',
                minWidth: '400px'
              }
            }
          );
        } else {
          toast.error(data.message || "An error occurred.");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    } else {
      Object.values(formErrors).forEach(error => toast.error(error));
    }
    setIsLoading(false);
  };

  // If plan is not found, show a 404-like message
  if (!plan) {
    return (
      <>
        <Header />
        <Container className="py-5">
          <Row>
            <Col>
              <div className="text-center">
                <h2>Floor Plan Not Found</h2>
                <p>The requested floor plan could not be found.</p>
                <Button 
                  variant="primary" 
                  onClick={() => window.history.back()}
                  className="me-2"
                >
                  Go Back
                </Button>
                <Button 
                  variant="outline-primary" 
                  onClick={() => window.location.href = '/house-floor-plans'}
                >
                  View All Floor Plans
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div
        className="floor-plan-detail-bg position-relative"
        style={{
          backgroundImage: `url(${plan.thumbnail || '/images/sample-floor-plan.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
          width: '100%',
          padding: '60px 0',
        }}
      >
        <div className="floor-plan-detail-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.45)',
          zIndex: 1
        }} />
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="floor-plan-image-box p-3 bg-white bg-opacity-75 rounded shadow text-center">
                <img
                  src={plan.thumbnail || '/images/sample-floor-plan.jpg'}
                  alt={plan.title}
                  className="img-fluid rounded"
                  style={{ maxHeight: '400px', objectFit: 'contain', width: '100%' }}
                />
              </div>
            </Col>
            <Col lg={6} className="text-white">
              <h1 className="mb-3" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{plan.title}</h1>
              <p className="mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>{plan.description}</p>
              <div className="d-grid gap-2 mb-4">
                <Button
                  variant="warning"
                  style={{ background: '#C3921C', borderColor: '#C3921C' }}
                  className="text-white fw-semibold"
                  onClick={handleBookConsultation}
                >
                  <i className="bi bi-download me-2"></i>
                  Download Floor Plan PDF
                </Button>
                <Button
                  variant="warning"
                  style={{ background: '#C3921C', borderColor: '#C3921C' }}
                  className="text-white fw-semibold"
                  onClick={handleBookConsultation}
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Book Free Consultation
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-5">
        <Helmet>
          <title>{plan.title} | House Construct</title>
          <meta name="description" content={plan.description} />
        </Helmet>
        
        <Row>
          <Col lg={8} className="mx-auto">
            {plan && <ProjectDetailsTable details={plan} />}
            <ConstructionJourney onBookConsultation={handleBookConsultation} />
          </Col>
        </Row>
      </Container>
      
      <Modal
        open={visibleModal}
        onCancel={handleModalClose}
        footer={null}
        className="cautious-title"
      >
        <div className="dataform">
          <div className="banner-form-services">
            <div className="contactUs-banner-form">
              <div className="contactUs-banner-form-sub">
                <h2 className="text-center">Why wait?</h2>
                <h4 className="text-center">Start building your dream home today!</h4>
                <h5 className="text-center"><strong>"Get free vaastu consultation"</strong></h5>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number*"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID*"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="location"
                    placeholder="Plot Location"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="plotsize"
                    placeholder="Plot Size"
                    value={formData.plotsize}
                    onChange={handleInputChange}
                  />
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Footer />
    </>
  );
};

export default FloorPlanDetail; 