import { Modal } from "antd";
import React from "react";

const Videopopup = ({
  isOpen,
  videoUrl,
  setSelectedVideoUrl,
  setModalOpen,
  onClose
}) => {
  if (!isOpen) return null;

  // const handleClose = () => {
  //   setSelectedVideoUrl("");
  //   setModalOpen(false);
  // };

  return (
    <>
      {isOpen && (
        <Modal
          open={isOpen}
          onCancel={onClose}
          setSelectedVideoUrl={""}
          footer={null}
          className="bg-dark"
          width={900}
          height={450}
        >
          <iframe
            width="100%"
            height="450px"
            src={`${videoUrl}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen=""
          />
        </Modal>
      )}
    </>
  );
};

export default Videopopup;
