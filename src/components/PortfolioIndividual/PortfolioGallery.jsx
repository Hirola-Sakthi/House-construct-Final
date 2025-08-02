import React, { useState } from 'react';
import slugify from 'slugify';

const PortfolioGallery = ({ project, location }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const slugifyTitle = (title) => {
        return slugify(title, { lower: true, replacement: '-', remove: /[*+~.()'"!:@]/g }) + '-new';
    };

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {project?.filter((item) => slugifyTitle(item?.title) === location)?.map((project) => (
                <div className="PortfolioGallery-parent" key={project.id}>
                    <h2 className="text-center">Project Gallery</h2>
                    <div className="container">
                        <div className="row">
                            {project?.mainImg?.map((profileImg, index) => (
                                <div className="col-md-6" key={index}>
                                    <div className="main-images">
                                        <img src={profileImg?.img} alt="" onClick={() => openModal(profileImg.img)} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="Secondrowgallery-images">
                            <div className="row">
                                {project?.images?.map((profileImg, index) => (
                                    <div className="col-md-4" key={index}>
                                        <div className="gallery-sub-images">
                                            <img src={profileImg.img} alt="" onClick={() => openModal(profileImg.img)} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Modal */}
            {showModal && (
                <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
                    <span onClick={closeModal}>
                        <div className="modal-content">
                            <img src={selectedImage} alt="" />
                        </div>
                    </span>
                </div>

            )}
        </>
    );
};

export default PortfolioGallery;