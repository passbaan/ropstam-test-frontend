import { useEffect, useState } from 'react';
import { CarsList, CarsModal, CarsToolbar } from './blocks';
import { useApiContext } from '../../contexts/api.context';

function Cars() {
  const { api } = useApiContext();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [editId, setEditId] = useState(null);
  const [cars, setCars] = useState([]);
  const [count, setCount] = useState(0);
  //
  const fetchCars = async () => {
    const { order, field: orderBy } = tableParams;
    const sorter = order ? `&sort=${orderBy}&order=${order}` : '';
    setLoading(true);
    const response = await api.get(`/cars?offset=${tableParams.pagination.pageSize * (tableParams.pagination.current - 1)}&limit=${tableParams.pagination.pageSize}${sorter}`);
    const { data } = response;
    if (data.error) {
      console.error(data.error);
      return;
    }
    setCars(data.data);
    setCount(data.count);
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        total: data.count,
      },
    });
    setLoading(false);
  };
  const onDelete = async (id) => {
    const response = await api.delete(`/cars/${id}`);
    const { data } = response;
    if (data.error) {
      console.error(data.error);
      return;
    }
    fetchCars();
  };
  const onAdd = () => {
    setOpen(true);
  };
  //
  useEffect(() => {
    fetchCars();
  }, []);
  return (
    <div className="mt-3 flex flex-col gap-4 ">
      <CarsToolbar count={count} onAdd={onAdd} />
      <CarsList
        loading={loading}
        cars={cars}
        setCars={setCars}
        tableParams={tableParams}
        setTableParams={setTableParams}
        onEdit={(record) => {
          setEditId({
            ...record,
            category: record.category._id,
          });
          setOpen(true);
        }}
        onDelete={onDelete}
        refetch={fetchCars}
      />
      <CarsModal
        editId={editId}
        setEditId={setEditId}
        visible={open}
        setVisible={setOpen}
        setCars={setCars}
        refetch={fetchCars}
      />
    </div>
  );
}

export default Cars;
