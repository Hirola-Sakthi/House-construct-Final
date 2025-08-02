import React from "react";
import slugify from 'slugify';

const PortfolioBanner = ({ project, location }) => {
  const slugifyTitle = (title) => {
    return slugify(title, { lower: true, replacement: '-', remove: /[*+~.()'"!:@]/g }) + "-new";
  };
  return (
    <>
      <div className="PortfolioIndividual-parent">
        {project?.filter(item => slugifyTitle(item?.title) === location)?.map(project =>
          <div className="PortfolioIndividual-banner-bg">
            {console.log(project)}
            <div className="PortfolioIndividual-banner-content">
              <h2>{project?.title}</h2>
              <p>
                {project?.date}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PortfolioBanner;