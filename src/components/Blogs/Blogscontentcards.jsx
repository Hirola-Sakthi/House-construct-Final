import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Blogscontentcards = ({ filterLink }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const homeBlogsRef = useRef(null);
  const blogsPerPage = 9;

  const scrollToTop = () => {
    if (homeBlogsRef.current) {
      homeBlogsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const blogData = [
    {
      title: 'How to Choose the Right Floor Plan for Your Dream Home',
      subtitle: 'Design',
      author: 'Lana Steiner',
      date: '18 Jan 2022',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating,testing, and managing them.',
      image: '/blog/blog-img-3.jpg',
      avatar: 'BlogsAvatar3.png',
      link: '/how-to-choose-the-right-floor-plan-for-your-dream-home'
    },
    {
      title: 'The Role of Architectural Design in Creating Sustainable Homes',
      subtitle: 'Product',
      author: 'Phoenix Baker',
      date: '19 Jan 2022',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      image: '/blog/blog-img-2.jpg',
      avatar: 'BlogsAvatar2.png',
      link: '/the-role-of-architectural-design-in-creating-sustainable-homes'
    },
    {
      title: 'The Top Trends in Home Construction and Design for 2023',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '20 Jan 2022',
      description: 'How do you create compelling presentations that wow colleagues and impress your managers?',
      image: '/blog/blog-img-1.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/the-top-trends-in-home-construction-and-design-for-2023'
    },
    {
      title: 'Why Choose House Construct - Top Construction Company in Bangalore',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '18 Feb 2022',
      description: 'Discover why House Construct is the top construction company in Bangalore. We offer quality construction solutions with a track record of excellence.',
      image: 'blog/blog-img-4.jpg',
      avatar: 'BlogsAvatar4.png',
      link: '/why-choose-house-construct-top-construction-company-in-bangalore'
    },
    {
      title: 'How to Choose the Right Construction Company for Your Project',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '19 Feb 2022',
      description: 'How do you create compelling presentations that wow colleagues and impress your managers?',
      image: 'blog/blog-img-5.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/how-to-choose-right-construction-company-for-your-project'
    },
    {
      title: 'Difference Between Residential and Commercial Construction',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '20 Feb 2022',
      description: 'How do you create compelling presentations that wow colleagues and impress your managers?',
      image: 'blog/blog-img-6.png',
      avatar: 'BlogsAvatar.png',
      link: '/difference-between-residential-and-commercial-construction'
    },
    {
      title: 'Top Commercial Construction Trends in 2024',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '18 Mar 2022',
      description: 'How do you create compelling presentations that wow colleagues and impress your managers?',
      image: 'blog/blog-img-7.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/top-commercial-construction-trends-in-2024'
    },
    {
      title: '10 Mistakes to Avoid While Building Your New Home',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '19 Mar 2022',
      description: 'How do you create compelling presentations that wow colleagues and impress your managers?',
      image: 'blog/blog-img-8.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/10-mistakes-to-avoid-while-building-your-new-home'
    },
    {
      title: 'How to Choose the Right Location for Your Dream Home',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '20 Mar 2022',
      description: 'How do you create compelling presentations that wow colleagues and impress your managers?',
      image: 'blog/blog-img-9.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/how-to-choose-right-location-for-your-dream-home'
    },
    {
      title: 'How to Select the Right Floor Plan for Your Family’s Needs | House Construct',
      subtitle: 'Design',
      author: 'Lana Steiner',
      date: ' 07 August, 2024',
      description: 'Find the perfect floor plan for your familys needs with House Construct. Explore our wide range of options and create your dream home.',
      image: 'blog/blog-img-11.jpg',
      avatar: 'BlogsAvatar3.png',
      link: '/how-to-select-right-floor-plan-for-your-family-needs'
    },
    {
      title: 'What to Consider Before Starting Your  House Construction Project',
      subtitle: 'Product',
      author: 'Phoenix Baker',
      date: ' 08 August, 2024',
      description: 'Discover key factors to consider before beginning your house construction project, including budgeting, design planning, legal requirements, and contractor selection to ensure a smooth building process',
      image: '/blog/blog-img-12.jpg',
      avatar: 'BlogsAvatar2.png',
      link: '/what-to-consider-before-starting-your-house-construction-project'
    },
    {
      title: 'How to Ensure Safety on a Construction Site',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: ' 09 August, 2024',
      description: 'Learn how to prioritize safety on your construction site. House Construct provides guidelines, tips, and best practices for maintaining a safe working environment.',
      image: '/blog/blog-img-13.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/how-to-ensure-safety-on-construction-site'
    },
    {
      title: 'Top 10 Home Interior Design Trends You Need to Know',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: ' 13 September, 2024',
      description: 'Stay ahead of the curve with House Constructs guide to the top 10 home interior design trends. Discover the latest styles and transform your space.',
      image: 'blog/blog-img-14.jpg',
      avatar: 'BlogsAvatar4.png',
      link: '/top-10-home-interior-design-trends-you-need-to-know'
    },
    {
      title: 'Common Interior Design Mistakes and How to Avoid Them',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: ' 16 September, 2024',
      description: 'Learn how to avoid common interior design mistakes and create a beautifully designed home. House Construct provides expert tips to help you achieve your dream space.',
      image: 'blog/blog-img-15.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/common-interior-design-mistakes-and-how-to-avoid-them'
    },
    {
      title: 'How to Choose the Right Design for Your Commercial Space',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: ' 26 September, 2024',
      description: 'Enhance your commercial space with the perfect design. Get expert tips on how to choose the right design that reflects your brand and creates a welcoming environment.',
      image: 'blog/blog-img-16.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/how-to-choose-right-design-for-your-commercial-space'
    },
    {
      title: 'Choosing the Perfect Color Scheme for Your House',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '9 October, 2024',
      description: 'Enhance the beauty of your house with the perfect color scheme. Discover expert tips and ideas to create a harmonious and stylish look for your home.',
      image: 'blog/blog-img-17.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/choosing-the-perfect-color-scheme-for-your-house'
    },
    {
      title: 'Modern Interior Design Ideas for Any Space',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: ' 16 October, 2024',
      description: 'Discover the latest modern interior design ideas for any space. Transform your home with House Constructs expert tips and inspirations.',
      image: 'blog/blog-img-18.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/modern-interior-design-ideas-for-any-space'
    },
    {
      title: 'How to Select the Best Materials for a Sustainable Home',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '24 October, 2024',
      description: 'Build a sustainable home with eco-friendly, durable materials at House Construct for long-term value and environmental responsibility',
      image: 'blog/how-to-select-the-best-materials-for-a-sustainable-home.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/how-to-select-the-best-materials-for-a-sustainable-home'
    },
    {
      title: 'The Role of Technology in Modern Commercial Construction',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '11 November, 2024',
      description: 'Learn how House Construct leverages advanced technology to boost efficiency, cut costs, and improve the quality of modern commercial construction projects',
      image: 'blog/the-role-of-technology-in-modern-commercial-construction.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/the-role-of-technology-in-modern-commercial-construction'
    },
    {
      title: 'How to Design Multi-Functional Spaces in Your Home',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '20 November, 2024',
      description: 'Learn how to design multi-functional spaces in your home with House Construct. Discover tips to maximize space, enhance functionality, and create versatile living areas.',
      image: 'blog/how-to-design-multi-functional-spaces-in-your-home.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/how-to-design-multi-functional-spaces-in-your-home'
    },
    {
      title: 'The Importance of Space Planning in Residential Architecture',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '4 December, 2024',
      description: 'Learn the importance of space planning in residential architecture. House Construct helps design efficient, practical, and beautiful homes tailored to your lifestyle!',
      image: 'blog/the-importance-of-space-planning-in-residential-architecture.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/the-importance-of-space-planning-in-residential-architecture'
    },
    {
      title: 'How to Estimate Construction Costs in Bangalore Accurately',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '17 December, 2024',
      description: 'Learn how to estimate construction costs in Bangalore with House Construct. Get accurate insights on budgeting, materials, and labor for a hassle-free building process!',
      image: 'blog/how-to-estimate-construction-costs-in-bangalore.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/how-to-estimate-construction-costs-in-bangalore'
    },
    {
      title: 'Importance of Vastu Shastra in Modern Home Construction',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '22 January, 2025',
      description: 'Learn how Vastu Shastra influences modern home construction. House Construct helps you design homes with positive energy, balance, and enhanced well-being!',
      image: 'blog/importance-of-vastu-shastra-in-home-construction.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/importance-of-vastu-shastra-in-home-construction'
    },
    {
      title: 'Benefits of Turnkey Construction Services for Homeowners',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '12 February, 2025',
      description: 'Learn how turnkey construction services by House Construct simplify home building. Save time, reduce stress, and ensure quality from design to project completion!',
      image: 'blog/benefits-of-turnkey-construction-services.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/benefits-of-turnkey-construction-services'
    },
    {
      title: 'Best Color Combinations for Home Interior Design in Bangalore',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '5 March, 2025',
      description: 'Find the perfect color combinations for your home in Bangalore. Get expert tips from House Construct to make your space stylish, cozy, and beautiful!',
      image: 'blog/best-color-combinations-for-home-interior-design-in-bangalore.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/best-color-combinations-for-home-interior-design-in-bangalore'
    },
    {
      title: 'Affordable House Construction Tips for Bangalore in 2025',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '5 April, 2025',
      description: ': Looking to build in 2025? Get expert, budget-friendly house construction tips for Bangalore from House Construt—smart planning, material savings, and more.',
      image: 'blog/Affordable House Construction Tips for Bangalore in 2025.png',
      avatar: 'BlogsAvatar.png',
      link: '/affordable-house-construction-tips-for-bangalore-in-2025'
    },
     {
      title: 'How Turnkey Home Construction Reduces Stress for Bangalore Families',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '7 April, 2025',
      description: ': Learn how turnkey home construction reduces stress for Bangalore families. House Construt handles every detail—from design to delivery—for a worry-free experience.',
      image: 'blog/How Turnkey Home Construction Reduces Stress for Bangalore Families.png',
      avatar: 'BlogsAvatar.png',
      link: '/how-turnkey-home-construction-reduces-stress-for-bangalore-families'
    },
    {
      title: 'Modern Kitchen Interior Design Trends in Bangalore',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '10 April, 2025',
      description: ': Explore the latest modern kitchen interior design trends in Bangalore with House Construt—smart layouts, sleek finishes, and space-saving innovation.',
      image: 'blog/Modern Kitchen Interior Design Trends in Bangalore.png',
      avatar: 'BlogsAvatar.png',
      link: '/modern-kitchen-interior-design-trends-in-bangalore'
    },
    {
      title: 'Modern Living Room Interior Ideas for Compact Bangalore Homes',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '5 May, 2025',
      description: ': House Construt reveals the best modern interior ideas for compact living rooms in Bangalore—functional layouts, light colors, and space-saving furniture.',
      image: 'blog/Modern Living Room Interior Ideas for Compact Bangalore Homes.png',
      avatar: 'BlogsAvatar.png',
      link: '/modern-living-room-interior-ideas-for-compact-bangalore-homes'
    },
    {
      title: 'Top 10 Questions to Ask Your Home Builder Before You Sign the Contract',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '7 May, 2025',
      description: ': Before signing a contract, ask your builder these 10 essential questions. House Construt helps Bangalore homeowners make informed, stress-free building decisions.',
      image: 'blog/Top 10 Questions to Ask Your Home Builder Before You Sign the Contract.png',
      avatar: 'BlogsAvatar.png',
      link: '/top-10-questions-to-ask-your-home-builder-before-you-sign-the-contract'
    },
     {
      title: 'Top Mistakes to Avoid While Choosing a Builder in Bangalore',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '8 June, 2025',
      description: ': Choosing a builder in Bangalore? Learn the top mistakes to avoid from House Construt—protect your budget, timeline, and vision with smart, expert advice.',
      image: 'blog/Top Mistakes to Avoid While Choosing a Builder in Bangalore.png',
      avatar: 'BlogsAvatar.png',
      link: '/top-mistakes-to-avoid-while-choosing-a-builder-in-bangalore'
    },
    {
      title: 'Turnkey vs. Contract-Based Construction – What Works Best in Bangalore?',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '10 June, 2025',
      description: ': Explore turnkey vs. contract-based construction in Bangalore. House Construt breaks down costs, control, and convenience to help you choose what works best.',
      image: 'blog/Turnkey vs. Contract-Based Construction – What Works Best in Bangalore.png',
      avatar: 'BlogsAvatar.png',
      link: '/turnkey-vs-contract-based-construction-what-works-best-in-bangalore?'
    },
    {
      title: 'What Makes House Construct Different from Other Builders?',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '12 June, 2025',
      description: ': Explore why House Construt stands out from other builders—innovative designs, transparent pricing, and unmatched customer satisfaction on every project.',
      image: 'blog/What Makes House Construct Different from Other Builders.png',
      avatar: 'BlogsAvatar.png',
      link: '/what-makes-house-construct-different-from-other-builders?'
    },
    {
      title: 'What Should You Look for in a Construction Company in Bangalore?',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '12 July, 2025',
      description: ': Find out what matters when selecting a construction company in Bangalore. House Construt explains how to evaluate builders for experience, pricing, and delivery.',
      image: 'blog/What Should You Look for in a Construction Company in Bangalore.png',
      avatar: 'BlogsAvatar.png',
      link: '/what-should-you-look-for-in-a-construction-company-in-bangalore?'
    },
     {
      title: 'Why House Construct is Bangalore’s Trusted Home Building Partner',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '14 July, 2025',
      description: ': Discover why House Construt is Bangalore’s trusted home building partner—delivering quality construction, on-time delivery, and personalized service you can count on.',
      image: 'blog/Why House Construct is Bangalore’s Trusted Home Building Partner.png',
      avatar: 'BlogsAvatar.png',
      link: '/why-house-construct-is-bangalores-trusted-home-building-partner'
    },
    {
      title: 'Best Construction Company in Mysore for Hassle-Free Home Building',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '16 July, 2025',
      description: ': Looking for the best construction company in Mysore? House Construct offers expert home building services with quality craftsmanship, transparent pricing, and on-time delivery.',
      image: 'blog/Best Construction Company in Mysore for Hassle-Free Home Building.png',
      avatar: 'BlogsAvatar.png',
      link: '/best-construction-company-in-mysore-for-hassle-free-home-building'
    },
    {
      title: 'Thinking of Building a Home in Mysore? Here’s Your Starter Guide',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '18 July, 2025',
      description: ': Dreaming of building a home in Mysore? House Construct’s starter guide covers planning, design ideas, and expert advice to simplify your home construction journey. ',
      image: 'blog/Thinking of Building a Home in Mysore_ Here’s Your Starter Guide.png',
      avatar: 'BlogsAvatar.png',
      link: '/thinking-of-building-a-home-in-mysore-heres-your-starter-guide'
    },
     {
      title: 'Top Home Design Trends in Chennai You Should Know About',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '20 July, 2025',
      description: ': Explore top home design trends in Chennai for 2025 with House Construct. Get inspired by innovative interiors, smart layouts, and sustainable living ideas.',
      image: 'blog/Top Home Design Trends in Chennai You Should Know About.png',
      avatar: 'BlogsAvatar.png',
      link: '/top-home-design-trends-in-chennai-you-should-know-about'
    },
     {
      title: 'Top Reasons to Hire a Professional Construction Company in Chennai',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '22 July, 2025',
      description: ': Hiring a professional construction company in Chennai guarantees expert craftsmanship, cost efficiency, and hassle-free project execution. Learn more with House Construct',
      image: 'blog/Top Reasons to Hire a Professional Construction Company in Chennai.png',
      avatar: 'BlogsAvatar.png',
      link: '/top-reasons-to-hire-a-professional-construction-company-in-chennai'
    },
    {
      title: 'What Makes a Construction Company in Mysore Truly Reliable?',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '24 July, 2025',
      description: ': Choosing a reliable construction company in Mysore? House Construct shares essential tips on spotting experienced builders who deliver quality, transparency, and on-time results.',
      image: 'blog/What Makes a Construction Company in Mysore Truly Reliable.png',
      avatar: 'BlogsAvatar.png',
      link: '/what-makes-a-construction-company-in-mysore-truly-reliable?'
    },
     {
      title: 'How to Plan a Vastu-Compliant Home Layout in Chennai',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '26 July, 2025',
      description: ':  Learn how to plan a Vastu-compliant home layout in Chennai with House Construct. Get expert advice on balancing traditional Vastu rules with modern home designs.',
      image: 'blog/How to Plan a Vastu-Compliant Home Layout in Chennai.png',
      avatar: 'BlogsAvatar.png',
      link: '/how-to-plan-a-vastu-compliant-home-layout-in-chennai'
    },
    {
      title: 'What Is Turnkey House Construction and Is It Right for You?',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '28 July, 2025',
      description: ':  Turnkey house construction simplifies your home-building journey with end-to-end solutions. Discover how House Construct makes it seamless, efficient, and cost-effective.',
      image: 'blog/What Is Turnkey House Construction and Is It Right for You.png',
      avatar: 'BlogsAvatar.png',
      link: '/what-is-turnkey-house-construction-and-is-it-right-for-you?'
    },
    {
      title: 'What to Expect During Each Stage of House Construction in Bangalore',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '2 August, 2025',
      description: ':  Planning house construction in Bangalore? Learn what to expect at every stage—from design and approvals to foundation, structure, and finishing with House Construct’s expert guide.',
      image: 'blog/What to Expect During Each Stage of House Construction in Bangalore.png',
      avatar: 'BlogsAvatar.png',
      link: '/what-to-expect-during-each-stage-of-house-construction-in-bangalore'
    },

    {
      title: 'When Is the Best Time to Start House Construction in Bangalore?',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '4 August, 2025',
      description: ':  Planning house construction in Bangalore? House Construct explains the best seasons to start building, considering weather, costs, and project timelines for smooth execution.',
      image: 'blog/When Is the Best Time to Start House Construction in Bangalore.png',
      avatar: 'BlogsAvatar.png',
      link: '/when-is-the-best-time-to-start-house-construction-in-bangalore?'
    },
     {
      title: 'Why Location Matters When Building a Home in Bangalore or Chennai',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '6 August, 2025',
      description: ':   Building a home in Bangalore or Chennai? House Construct explains why choosing the right location impacts property value, convenience, lifestyle, and long-term satisfaction.',
      image: 'blog/Why Location Matters When Building a Home in Bangalore or Chennai.png',
      avatar: 'BlogsAvatar.png',
      link: '/why-location-matters-when-building-a-home-in-bangalore-or-chennai'
    },
  ];

  const filteredBlogData = blogData.filter(item => item.link !== filterLink);
  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredBlogData.length / blogsPerPage);

  // Calculate the index range of the blogs to show on the current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = filteredBlogData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  return (
    <div className='HomeBlogs-parent' ref={homeBlogsRef}>
      <div className="row">
        {currentBlogs.map((blog, index) => (
          <div className="col-sm-6 col-md-4" key={index}>
            <Link to={blog.link} style={{ textDecoration: "none" }}>
              <div className="HomeBlogs-sub">
                <div className='HomeBlogs-sub-image'>
                  <img src={blog.image} alt="" />
                </div>
                <p>{blog.date}</p>
                <div className='HomeBlogs-presentations'>
                  <h1>{blog.title}</h1>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          className="pagination-button-Previous"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="pagination-button-next"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogscontentcards;
