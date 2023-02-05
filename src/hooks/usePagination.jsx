import { useState } from 'react';
import PropTypes from 'prop-types';

const LinearPagination = function LinearPagination({
  count,
  setPage,
  perPage,
  currentPage,
  disabled,
}) {
  if (currentPage === null || count === null) {
    return null;
  }

  const pages = new Array(Math.ceil(count / perPage)).fill(0).map((_, i) => i + 1);
  return (
    <div className="flex p-2 text-sm">
      <div className="flex mx-auto gap-2">
        {
          pages.map((i) => (
            <div
              key={`pagination-${i}`}
              onClick={() => setPage(i)}
              aria-hidden="true"
              className={[
                'btn',
                currentPage === i ? 'bg-orange-300 text-white' : 'bg-white text-primary',
                disabled ? 'disabled' : '',
                'rounded py-4 px-6 font-bold shadow-sm cursor-pointer',
              ].join(' ')}
            >
              {i}
            </div>
          ))
        }
      </div>
    </div>
  );
};

LinearPagination.propTypes = {
  count: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

function usePagination({
  defaultPerPage = 1,
}) {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(defaultPerPage);
  const Paginate = function Paginate({ disabled, onPageChange }) {
    const updatePage = (num) => {
      setCurrentPage(num);

      if (onPageChange) {
        onPageChange(num);
      }
    };
    return (
      <LinearPagination
        perPage={perPage}
        count={count}
        currentPage={currentPage}
        setPage={updatePage}
        disabled={disabled}
      />
    );
  };
  Paginate.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onPageChange: PropTypes.func,
  };
  Paginate.defaultProps = {
    onPageChange: null,
  };

  return {
    currentPage,
    perPage,
    updateCount: (num) => {
      setCount(num);
    },
    setPerPage: (num) => {
      setCurrentPage(1);
      setPerPage(num);
    },
    Paginate,
  };
}
usePagination.propTypes = {
  defaultPage: PropTypes.number,
  defaultPerPage: PropTypes.number,
};
usePagination.defaultProps = {
  defaultPage: 1,
  defaultPerPage: 10,
};

export default usePagination;
