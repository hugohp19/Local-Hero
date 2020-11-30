import React, { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const Addphoto = () => {
  const [show, setShow] = useState(false);
  const [picture, setPicture] = useState('');

  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    console.log('picture: ', picture);
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add an Image
      </Button>
      {/* <div className="register_user_image">
                 <input id="usePic" type="file" onChange={onChangePicture}/>
              </div> */}
      <div className="userPic">
        <img className="user_pic" src={picture}></img>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Submit a photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="light">Take Photo</Button>
          <Form>
            <Form.File id="usePic" type="file" onChange={onChangePicture} m />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Addphoto;

// import React from 'react';
// import ReactDOM from 'react-dom';
// // import Modal from 'react-modal';

// // const MODAL_STYLES = {
// //     position: 'fixed',
// //     top: '50%',
// //     left: '50%',
// //     transform: 'translate(-50%, -50%)',
// //     backgroundColor: '#FFF',
// //     padding: '50px',
// //     zIndex: 1000

// // }

// const OVERLAY_STYLES = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   botomt: 0,
//   backgroundColor: 'rgba(0, 0, 0, .7)',
//   zIndex: 1000
// };

// export default function confirm({ open, children, onClose }) {
//   if (!open) return null;

//   return (
//     <>
//       <div style={OVERLAY_STYLES} />
//       <div>
//         <button onClick={onClose}>Close</button>
//         {children}
//       </div>
//     </>
//   );
// }
