import React, { useState } from 'react';

const Request = () => {
  const [page, setPage] = useState(0);
  const pagedown = () => {
    setPage(page - 1);
    return console.log(page);
  };

  const pageup = () => {
    setPage(page + 1);
    return console.log(page);
  };

  const onFirstPage = page === 0;
  const onLastPage = page === page.length - 1;

  return (
    <div>
      <h2>"Requests"</h2>
      <button onClick={pagedown} disabled={onFirstPage}>
        &gt;
      </button>
      <button onClick={pageup} disabled={onLastPage}>
        &lt;
      </button>
    </div>
  );
};

export default Request;
