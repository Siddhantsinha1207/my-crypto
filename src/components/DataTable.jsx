import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/material";

const TableHeadCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize.primary,
}));
const CoinImage = styled("img")(({ theme }) => ({
  width: "2rem",
  marginRight: "1rem",
}));

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
}));

function Row(props) {
  const { row, header, onCellClick } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset" },
          "&:hover": { backgroundColor: "#111", cursor: "pointer" },
        }}
      >
        {header.map((item) => {
          const { title } = item;
          return (
            <TableCell
              key={item.title}
              scope="row"
              onClick={() => onCellClick(row)}
            >
              {title === "icon" ? (
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              ) : title === "name" ? (
                <StyledContainer style={{ display: "flex" }}>
                  <CoinImage src={row.image} />
                  <div>
                    <Typography>{row.name}</Typography>
                  </div>
                </StyledContainer>
              ) : (
                row[title]
              )}
            </TableCell>
          );
        })}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                {/* <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>{historyRow.amount}</TableCell>
                      <TableCell>
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody> */}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function DataTable(props) {
  const { header, data, onCellClick } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {header.map((item) => {
              return <TableHeadCell key={item.key}>{item.label}</TableHeadCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data?.map((row) => (
              <Row
                key={row.name}
                row={row}
                header={header}
                onCellClick={onCellClick}
              />
            ))
          ) : (
            <Typography sx={{ p: 2, textAlign: "center", fontSize: 20 }}>
              Loading Data... Please wait!
            </Typography>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
