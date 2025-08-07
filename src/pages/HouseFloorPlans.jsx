import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Form, Collapse, Button } from 'react-bootstrap';
import { Modal, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import toast from 'react-hot-toast';
import '../assets/sass/home/_houseFloorPlans.scss';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import { useNavigate } from 'react-router-dom';
import { samplePlans } from '../assets/data/floorPlans';

const categories = ['All', '1BHK', '2BHK', '3BHK'];
const plotSizes = ['All', '20x30', '30x40', '40x60'];

const dimensions = [ '20x30 sq ft', '30x30 sq ft', '30x40 sq ft', '30x50 sq ft', 
  '70x30 sq ft', '40x60 sq ft', '45x60 sq ft', '80x40 sq ft',
  '70x60 sq ft', '100x90 sq ft'
];

const areas = [
  '600 sqft', '900 sqft', '1200 sqft',
  '1500 sqft', '2100 sqft', '2400 sqft', '2700 sqft', '3200 sqft', '4200 sqft', '9000 sqft'
];


const sliderMinValue = 5000000;   // 30 Lakhs
const sliderMaxValue = 20000000; // 2 Crores

const sliderStep = 1000000; // 10 Lakh step

const formatBudget = (amount) => {
  if (amount >= 10000000) { // 1 Crore
    const crores = amount / 10000000;
    return `₹${crores % 1 === 0 ? crores.toFixed(0) : crores.toFixed(1)} Cr`;
  } else if (amount >= 100000) { // 1 Lakh
    const lakhs = amount / 100000;
    return `₹${lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(1)} L`;
  } else if (amount >= 1000) { // 1 Thousand (optional)
    const thousands = amount / 1000;
    return `₹${thousands % 1 === 0 ? thousands.toFixed(0) : thousands.toFixed(1)} K`;
  } else {
    return `₹${amount}`;
  }
};

const roadFacingDirections = [
  'North',
  'South',
  'East',
  'West'
];

const constructionTypes = [
  'Residential',
  'Commercial'
];

const bedroomTypes = [
  '3BHK',
  '4BHK',
  '5BHK',
  '6BHK',
  '7BHK & More'
];

const FilterSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="filter-section">
      <Button
        onClick={() => setOpen(!open)}
        aria-controls={`${title}-collapse`}
        aria-expanded={open}
        className="filter-section-header"
      >
        {title}
        <span className={`arrow ${open ? 'open' : ''}`}>{'>'}</span>
      </Button>
      <Collapse in={open}>
        <div id={`${title}-collapse`} className="filter-section-content">
          {children}
        </div>
      </Collapse>
    </div>
  );
};

const HouseFloorPlans = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPlotSize, setSelectedPlotSize] = useState('All');
  const [selectedDimensions, setSelectedDimensions] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [budgetRange, setBudgetRange] = useState([sliderMinValue, sliderMaxValue]);
  const [roadFacing, setRoadFacing] = useState('');
  const [floors, setFloors] = useState(0);
  const [constructionType, setConstructionType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [vastuCompliant, setVastuCompliant] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
    plotsize: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!/^\d{10}$/.test(formData.phone))
      errors.phone = "Phone number is invalid";
    return errors;
  };

  const handleModalClose = () => {
    setVisibleModal(false);
    setIsLoading(false);
  };

  const handleViewFloorPlan = (plan) => {
    setSelectedPlan(plan);
    setVisibleModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch(
          "https://houseconstruct.in/forms/contact.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          const data = await response.json();

          if (data.status === "success") {
            setFormData({
              name: "",
              email: "",
              location: "",
              phone: "",
              plotsize: "",
            });
            setIsLoading(false);
            setVisibleModal(false);
            toast.success("Successfully we got your info.");
            // Open PDF in new tab after successful submission
            window.open(selectedPlan.pdf, '_blank');
          } else {
            console.error("Error:", data.message);
            toast.error(data.message);
          }
        } else {
          console.error("Error:", response.statusText);
          toast.error("An error occurred. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An error occurred. Please try again later.");
      }
    } else {
      Object.values(formErrors).forEach((error) => {
        toast.error(error);
      });
    }

    setIsLoading(false);
  };

  const filteredPlans = samplePlans.filter(plan => {
    // Category filter
    const matchCategory = selectedCategory === 'All' || plan.category === selectedCategory;
    
    // Plot size filter
    const matchPlotSize = selectedPlotSize === 'All' || plan.plotSize === selectedPlotSize;
    
    // Dimensions filter
    const matchDimensions = selectedDimensions.length === 0 || 
      selectedDimensions.includes(plan.plotSize);
    
    // Area filter
    const matchAreas = selectedAreas.length === 0 || 
      selectedAreas.includes(plan.area);
    
    // Budget filter
    const matchBudget = plan.budget >= budgetRange[0] && 
      plan.budget <= budgetRange[1];
    
    // Road facing filter
    const matchRoadFacing = !roadFacing || plan.roadFacing === roadFacing;
    
    // Floors filter
    const matchFloors = !floors || plan.floors === parseInt(floors);
    
    // Construction type filter
    const matchConstructionType = !constructionType || 
      plan.constructionType === constructionType;
    
    // Bedrooms filter
    const matchBedrooms = !bedrooms || plan.bedrooms === parseInt(bedrooms);
    
    // Vastu compliant filter
    const matchVastu = !vastuCompliant || plan.vastuCompliant === vastuCompliant;
    

    return matchCategory && matchPlotSize && matchDimensions && matchAreas && 
           matchBudget && matchRoadFacing && matchFloors && matchConstructionType && 
           matchBedrooms && matchVastu;
  });

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedPlotSize('All');
    setSelectedDimensions([]);
    setSelectedAreas([]);
    setBudgetRange([sliderMinValue, sliderMaxValue]);
    setRoadFacing('');
    setFloors(0);
    setConstructionType('');
    setBedrooms('');
    setVastuCompliant(false);
  };

  const minFloors = 0;
  const maxFloors = 3;

  const handleFloorChange = (increment) => {
    const newValue = floors + increment;
    if (newValue >= minFloors && newValue <= maxFloors) {
      setFloors(newValue);
    }
  };

  const getActiveFiltersCount = () => {
    return Object.entries({
      selectedCategory,
      selectedPlotSize,
      selectedDimensions,
      selectedAreas,
      budgetRange,
      roadFacing,
      floors,
      constructionType,
      bedrooms,
      vastuCompliant
    }).filter(([_, value]) => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      if (typeof value === 'boolean') {
        return value;
      }
      if (typeof value === 'number') {
        return value > 0;
      }
      return value !== '' && value !== 'All';
    }).length;
  };

  const generateSlug = (plan) => {
    const { plotSize, roadFacing, floors, bedrooms, id } = plan;
    return `${plotSize}-sq-ft-${roadFacing}-facing-${floors}-floor-${bedrooms}-bhk-residential-house-plan-${id}`
      .toLowerCase()
      .replace(/\s+/g, '-');
  };

  return (
    <>
       <div id="floorplans" className="hidden-div-for-floorplan"></div>
      <Header />
      <div
        className="service-banner-subparent"
        style={{
          backgroundImage: 'url(/servicepage/servicebanner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '3rem'
        }}
      >
        <h1 className="text-white fw-bold display-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
          Floor Plans
        </h1>
      </div>
      <Helmet>
        <title>House Floor Plans - House Construct</title>
        <meta name="description" content="Browse our collection of house floor plans. Find the perfect design for your dream home." />
      </Helmet>

      <div className="house-floor-plans-page">
        <Container>
          <Row>
            <Col lg={3} md={4} className="sidebar">
              <div className="sidebar-content">
                <div className="total-count">
                  <div className="filters-header">
                    <p>Filters ({getActiveFiltersCount()})</p>
                    <Button 
                      variant="outline-secondary" 
                      onClick={resetFilters} 
                      className="reset-btn"
                      disabled={getActiveFiltersCount() === 0}
                    >
                      Reset
                    </Button>
                  </div>
                </div>

                <FilterSection title="Plot Dimensions (sq ft)">
                  <div className="dimensions-list">
                    {dimensions.map((dimension, index) => (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        id={`dimension-${index}`}
                        label={dimension}
                        checked={selectedDimensions.includes(dimension)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedDimensions([...selectedDimensions, dimension]);
                          } else {
                            setSelectedDimensions(selectedDimensions.filter(d => d !== dimension));
                          }
                        }}
                      />
                    ))}
                  </div>
                </FilterSection>

                <FilterSection title="AREA">
                  <div className="area-list">
                    {areas.map((area, index) => (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        id={`area-${index}`}
                        label={area}
                        checked={selectedAreas.includes(area)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedAreas([...selectedAreas, area]);
                          } else {
                            setSelectedAreas(selectedAreas.filter(a => a !== area));
                          }
                        }}
                      />
                    ))}
                  </div>
                </FilterSection>

                <FilterSection title="House Budget">
                  <Form.Range 
                    min={sliderMinValue}
                    max={sliderMaxValue}
                    step={sliderStep}
                    value={budgetRange[1]}
                    onChange={(e) => setBudgetRange([sliderMinValue, parseInt(e.target.value)])}
                  />
                  <div className="budget-range">
                    {formatBudget(budgetRange[0])} to {formatBudget(budgetRange[1])}
                  </div>
                </FilterSection>

                <FilterSection title="Road Facing Direction">
                  <Form.Select
                    value={roadFacing}
                    onChange={(e) => setRoadFacing(e.target.value)}
                  >
                    <option value="">Select Direction</option>
                    {roadFacingDirections.map((direction, index) => (
                      <option key={index} value={direction}>{direction}</option>
                    ))}
                  </Form.Select>
                </FilterSection>

                <FilterSection title="Number of Floors">
                  <div className="floor-counter">
                    <Button 
                      variant="outline-secondary" 
                      onClick={() => handleFloorChange(-1)}
                      className="floor-btn"
                      disabled={floors <= minFloors}
                    >
                      -
                    </Button>
                    <span className="floor-number">{floors}</span>
                    <Button 
                      variant="outline-secondary" 
                      onClick={() => handleFloorChange(1)}
                      className="floor-btn"
                      disabled={floors >= maxFloors}
                    >
                      +
                    </Button>
                  </div>
                </FilterSection>

                <FilterSection title="Type of Construction">
                  <Form.Select
                    value={constructionType}
                    onChange={(e) => setConstructionType(e.target.value)}
                  >
                    <option value="">Select Type</option>
                    {constructionTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </Form.Select>
                </FilterSection>

                <FilterSection title="Number of Bedrooms">
                  <Form.Select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                  >
                    <option value="">Select Bedrooms</option>
                    {bedroomTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </Form.Select>
                </FilterSection>

                <FilterSection title="Vastu Compliant">
                  <Form.Check 
                    type="checkbox" 
                    label="Yes"
                    checked={vastuCompliant}
                    onChange={(e) => setVastuCompliant(e.target.checked)}
                  />
                </FilterSection>

              </div>
            </Col>

            {/* Main Content */}
            <Col lg={9} md={8}>
              <Row className="mb-4">
                <Col>
                  <p className="text-center text-muted">
                    Browse through our carefully designed floor plans to find the perfect layout for your dream home.
                  </p>
                </Col>
              </Row>

              {/* Gallery */}
              <Row>
                {filteredPlans.length ? (
                  filteredPlans.map(plan => (
                    <Col key={plan.id} xl={6} lg={6} md={6} sm={12} className="mb-4">
                      <div className="brickbolt-style-card p-3 shadow-sm rounded bg-white position-relative h-100 d-flex flex-column">
                        <div className="position-relative">
                          <img
                            src={plan.thumbnail || '/floorPlans/thumbnails/placeholder.png'}
                            alt={plan.title}
                            className="img-fluid rounded"
                            style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                          />
                        </div>

                        <div className="mt-3 flex-grow-1 d-flex flex-column">
                          <h9 className="fw-bold mb-2">Residential</h9>
                          <p className="text-muted mb-3" style={{ 
                            fontSize: '0.9rem', 
                            height: '60px', 
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical'
                          }}>
                            {plan.description}
                          </p>

                          <div className="specs-grid mb-3">
                            <div className="d-flex justify-content-between text-muted" style={{ fontSize: '0.9rem' }}>
                              <div><i className="bi bi-aspect-ratio me-1"></i>{plan.plotSize}</div>
                              <div><i className="bi bi-currency-rupee me-1"></i>{plan.budget.toLocaleString()}</div>
                            </div>
                            <div className="d-flex justify-content-between text-muted mt-2" style={{ fontSize: '0.9rem' }}>
                              <div><i className="bi bi-building me-1"></i>G+{plan.floors}</div>
                              <div><i className="bi bi-house-door me-1"></i>{plan.bedrooms} BHK</div>
                            </div>
                          </div>

                          <div className="d-flex gap-2 mt-auto flex-column flex-sm-row">
                            <button
                              onClick={() => navigate(`/house-floor-plans/${generateSlug(plan)}`)}
                              className="btn btn-outline-secondary flex-fill mb-2 mb-sm-0"
                            >
                              View Floor plans
                            </button>
                            <button
                              onClick={() => handleViewFloorPlan(plan)}
                              className="btn flex-fill text-white fw-semibold"
                              style={{ background: '#C3921C', borderColor: '#C3921C' }}
                            >
                              Book Free Consultation
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))
                ) : (
                  <Col>
                    <div className="text-center py-5">
                      <i className="bi bi-search display-1 text-muted mb-3"></i>
                      <h3>No floor plans found</h3>
                      <p className="text-muted">Try adjusting your filters to see more results.</p>
                      <Button variant="outline-primary" onClick={resetFilters}>
                        Reset Filters
                      </Button>
                    </div>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Form Modal */}
      <Modal
        title=""
        open={visibleModal}
        onOk={handleModalClose}
        onCancel={handleModalClose}
        className="cautious-title"
        footer={null}
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

export default HouseFloorPlans; 