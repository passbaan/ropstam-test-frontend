import { Icon } from '@iconify/react';

const columns = ({ onEdit, onDelete }) => ([
  {
    title: 'Model Name',
    dataIndex: 'model',
    sorter: true,
  },
  {
    title: 'Company',
    dataIndex: 'company',
    sorter: true,
  },
  {
    title: 'Model Year',
    dataIndex: 'year',
    sorter: true,
  },
  {
    title: 'Registeration Number',
    dataIndex: 'regNumber',
    render: (regNumber) => regNumber || 'N/A',
  },
  {
    title: 'Color',
    dataIndex: 'color',
    render: (color) => color || 'N/A',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    render: (category) => category.name,
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    render: (text, record) => (
      <div className="flex text-lg">
        <div
          className="w-1/2 flex justify-center cursor-pointer hover:bg-orange-300 rounded-2xl"
          onClick={() => onEdit(record)}
          onKeyUp={() => onEdit(record)}
        >
          <Icon icon="material-symbols:edit" className="text-stone-800" />
        </div>
        <div
          className="w-1/2 flex justify-center cursor-pointer hover:bg-orange-300 rounded-2xl"
          onClick={() => onDelete(record._id)}
          onKeyUp={() => onDelete(record._id)}
        >
          <Icon icon="mdi:delete" className="text-red-500" />
        </div>
      </div>
    ),
  },
]);
export default columns;
