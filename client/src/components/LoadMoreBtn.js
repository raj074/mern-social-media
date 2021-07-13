import React from 'react'

const LoadMoreBtn = ({ result, page, load, handleLoadMore }) => {
  return (
    <>
      {result < 9 * (page - 1)
        ? ""
        : !load && (
            <button
              className="btn  btn-outline-info color-c1 mx-auto d-block"
              onClick={handleLoadMore}
            >
              Load more.
            </button>
          )}
    </>
  );
};

export default LoadMoreBtn
