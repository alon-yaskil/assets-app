import {
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import Table from "@mui/material/Table";
import { useCallback, useEffect, useState } from "react";
import { AssetsResponse, getAssets } from "../api/api";
import { columns, getColumnValue } from "../lib/tableTypes";
import { Container } from "../styles/assetsTable";

const PAGE_SIZE = 10;

const AssetsTable = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [assetResponse, setAssetsResponse] = useState<AssetsResponse>({
    data: [],
    total: 0,
  });

  const onChangePageCallback = useCallback(
    (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPageIndex(newPage);
    },
    [],
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAssets(pageIndex, PAGE_SIZE);
        setAssetsResponse(response);
      } catch (e) {
        console.error("failed to get a assets");
      }
    };
    fetchData();
  }, [pageIndex]);

  return (
    <Container>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map(({ id, label }) => (
              <TableCell key={id}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {assetResponse.data.map((asset) => (
            <TableRow key={asset._id}>
              {columns.map(({ id }) => {
                const value = getColumnValue(asset, id);

                return (
                  <TableCell key={id}>
                    {!value && typeof value !== "boolean"
                      ? "N/A"
                      : value.toString()}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
        <TablePagination
          rowsPerPageOptions={[10]}
          align="center"
          component="div"
          count={assetResponse.total}
          rowsPerPage={PAGE_SIZE}
          page={pageIndex}
          onPageChange={onChangePageCallback}
          showFirstButton
          showLastButton
        />
      </Table>
    </Container>
  );
};

export default AssetsTable;
