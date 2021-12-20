export const COLUMNS = [
  {
    Header: "image",
    accessor: "image",
    disableFilters: true, //to disable filter input for this column
    disableSortBy: true, //to disable sort for this column
    Cell: (tableProps) => {
      console.log(tableProps.row.original);
      return (
        <img
          src={tableProps.row.original.image}
          alt=""
          width="40px"
          height="30px"
        />
      );
    },
  },
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: "category",
    accessor: "category",
  },
  {
    Header: "brand",
    accessor: "type",
  },
  {
    // id: row => row.id,
    Header: "price",
    accessor: "price",
  },
];
