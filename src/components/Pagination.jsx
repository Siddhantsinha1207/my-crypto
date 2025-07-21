import Pagination from "@mui/material/Pagination";

export default function PagesCol(props) {
  const { page, onChange } = props;
  //   const handleChange = (_, value) => {
  //     setPage(value);
  //   };

  return (
    <Pagination
      count={10}
      page={page}
      onChange={onChange}
      color="primary"
      sx={{
        "& .MuiPagination-ul": {
          justifyContent: "center",
        },
      }}
    />
  );
}
