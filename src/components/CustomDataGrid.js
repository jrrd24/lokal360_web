import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
function CustomDataGrid({
  data,
  columns,
  rowID,
  sortField,
  sortBy,
  autoHeight,
  disableDensity,
  disableExport,
}) {
  return (
    <DataGrid
      //sx line is needed for overflow (bug in mui data grid v6)
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1f auto",
        ".MuiDataGrid-main": {
          minHeight: 200,
        },
      }}
      rows={data}
      columns={columns}
      slots={{ toolbar: GridToolbar }}
      //Hide Density from toolbar
      disableDensitySelector={disableDensity}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          //Hide Export from toolbar
          csvOptions: { disableToolbarButton: disableExport },
          printOptions: { disableToolbarButton: disableExport },
        },
        panel: { sx: { maxWidth: "90%" } },
        filterPanel: { sx: { maxWidth: "90%" } },
      }}
      getRowId={(row) => row[rowID]}
      initialState={{
        sorting: {
          sortModel: [{ field: sortField, sort: sortBy }],
        },
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      getRowHeight={autoHeight ? () => "auto" : () => null}
      disableRowSelectionOnClick
      pageSizeOptions={[5, 10, 15]}
    />
  );
}

export default CustomDataGrid;
