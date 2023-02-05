import { useEffect, useState } from 'react';
import CategoriesList from './blocks/CategoriesList';
import CategoriesToolbar from './blocks/CategoriesToolbar';
import { CatModal } from './blocks';
import { useApiContext } from '../../contexts/api.context';
import { usePagination } from '../../hooks';

function Categories() {
  const { api } = useApiContext();
  const {
    Paginate, updateCount, currentPage, perPage,
  } = usePagination({ defaultPerPage: 10 });
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchCats = async () => {
    setLoading(true);
    const response = await api.get(`/categories?offset=${currentPage - 1}&limit=${perPage}`);
    setLoading(false);
    const { data } = response;
    if (data.error) {
      console.error(data.error);
      return;
    }
    setCategories(data.data);
    setCount(data.count);
    updateCount(data.count);
  };
  const onDelete = async (id) => {
    const response = await api.delete(`/categories/${id}`);
    const { data } = response;
    if (data.error) {
      console.error(data.error);
      return;
    }
    fetchCats();
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const onAdd = () => {
    setOpenModal(true);
  };
  const onEdit = (id) => {
    setEditId(categories.find((cat) => cat._id === id));
    setOpenModal(true);
  };

  return (
    <div className="mt-3 flex flex-col gap-4 ">
      <CategoriesToolbar onAdd={onAdd} count={count} />
      <CategoriesList categories={categories} onEdit={onEdit} onDelete={onDelete} />
      <Paginate onPageChange={fetchCats} disabled={loading} />
      <CatModal
        editId={editId}
        visible={openModal}
        setVisible={setOpenModal}
        setEditId={setEditId}
        refetch={() => fetchCats()}
      />
    </div>
  );
}
export default Categories;
