import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import Table from "@mui/material/Table";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Asset, AssetsResponse, getAssets, updateAssets } from "../api/api";
import { columns } from "../lib/tableTypes";
import {
  Buttons,
  Container,
  EditButton,
  SaveButton,
} from "../styles/assetsTable";
import AssetRow from "./AssetRow";
const PAGE_SIZE = 10;

const AssetsTable = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [assetResponse, setAssetsResponse] = useState<AssetsResponse>({
    data: [],
    total: 0,
  });
  const [updatedAssetsMap, setUpdatedAssetsMap] = useState<{
    [key: string]: Asset;
  }>({});

  const [editMode, setEditMode] = useState(false);

  const onClickEditCallback = useCallback(() => {
    setEditMode((mode) => !mode);
  }, []);

  const onChangePageCallback = useCallback(
    (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPageIndex(newPage);
    },
    [],
  );

  const hasUpadates = useMemo(
    () => !!Object.keys(updatedAssetsMap).length,
    [updatedAssetsMap],
  );

  const onUpdateAssetCallback = useCallback(
    (asset: Asset) => {
      updatedAssetsMap[asset._id] = asset;
      setUpdatedAssetsMap({ ...updatedAssetsMap });
    },
    [updatedAssetsMap],
  );

  const onSaveCallback = useCallback(async () => {
    try {
      await updateAssets(
        Object.entries(updatedAssetsMap).map(([key, asset]) => asset),
      );
      setUpdatedAssetsMap({});
      setEditMode(false);
    } catch (e) {
      console.error(e);
    }
  }, [updatedAssetsMap]);

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
      <Buttons>
        {editMode ? (
          <SaveButton onClick={onSaveCallback} disabled={!hasUpadates}>
            <SaveIcon />
          </SaveButton>
        ) : null}
        <EditButton editMode={editMode} onClick={onClickEditCallback}>
          <EditIcon />
        </EditButton>
      </Buttons>
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
            <AssetRow
              key={asset._id}
              originalAsset={asset}
              editMode={editMode}
              onUpdate={onUpdateAssetCallback}
            />
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
