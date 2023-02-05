/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Table } from 'antd';
import _columns from '../_columns';

function CarsList({
  cars,
  onEdit,
  setCars,
  refetch,
  onDelete,
  tableParams,
  setTableParams,
  loading,
}) {
  const columns = _columns({ onEdit, onDelete });
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setCars([]);
    }
  };
  useEffect(() => {
    refetch();
  }, [JSON.stringify(tableParams)]);

  return (
    <Table
      columns={columns}
      dataSource={cars}
      loading={loading}
      onChange={handleTableChange}
      rowKey={(record) => record._id}
      pagination={tableParams.pagination}
    />
  );
}
CarsList.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
  cars: PropTypes.any.isRequired,
  tableParams: PropTypes.any.isRequired,
  setTableParams: PropTypes.func.isRequired,
  setCars: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default CarsList;
