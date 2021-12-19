export const COLUMNS = [
  {
    Header: 'image',
    accessor: 'image',
    disableFilters: true, //to disable filter input for this column
    disableSortBy: true, //to disable sort for this column
    Cell: (tableProps) => {
      return (
        <img
        src={tableProps.row.original.productInfo.image[0]}
        alt=''
        width='40px'
        height='30px'
      />
      )
    }
  },
  {
    id: row => row.id,
    Header: 'name',
    accessor: row => row.productInfo.title
  },
  {
    Header: 'category',
    accessor: 'category',
  },
  {
    Header: 'brand',
    accessor: 'brand',
  },
  {
    // id: row => row.id,
    Header: 'price',
    accessor: row => row.productInfo.price
  },
];
