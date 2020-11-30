import React from 'react';

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  botomt: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
};

export default function confirm({ open, children, onClose }) {
  if (!open) return null;

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </>
  );
}
