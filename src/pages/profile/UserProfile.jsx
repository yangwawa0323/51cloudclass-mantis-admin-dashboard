/* eslint-disable react-hooks/exhaustive-deps */
import { ClientSideRowModelModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';

import React, { useRef, useEffect, useMemo, useState, useCallback } from 'react';
import styled from '@emotion/styled';

import { ModuleRegistry } from 'ag-grid-community';
import { Button, Checkbox, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import './user-profile.css';

import EditBtnGroup from './Operation';
import { useQuery } from 'react-query';
import axios from 'axios';
import { ReactQueryDevtools } from 'react-query/devtools';

// Register the required feature modules with the Grid
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const StyledMain = styled.div((prop) => ({
    padding: '10px 100px',
    minHeight: '680px',
    height: '60vh'
}));

// this is a hook, but we work also with classes
function MyRenderer(params) {
    return (
        <span className="my-renderer">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src="https://d1yk6z6emsz7qy.cloudfront.net/static/images/loading.gif" className="my-spinner" />
            {params.value}
        </span>
    );
}

function UserProfile() {
    const [sortby, setSortBy] = useState('');
    const gridRef = useRef(null);

    const getData = async () => {
        return await axios.get('https://www.ag-grid.com/example-assets/master-detail-data.json');
    };

    const { data: fetchData } = useQuery('user-profile', getData);
    var rowData = fetchData?.data;

    const handleCellValueChanged = (params) => {
        if (params.oldValue !== params.newValue) {
            var cell = {
                hasBeenChanged: true,
                rowIndex: params.rowIndex,
                colId: params.colDef.field
            };
            params.data.cell = cell;

            // var tempRowData = rowData; // useState variable is immutable
            const index = rowData.findIndex((cell) => cell.account == params.data.account);
            // tempRowData[index] = params.data;
            rowData[index] = params.data;
            // setRowData((draft) => {
            //     rowData[index] = params.data;
            // });

            // TODO:
            // setRowData(tempRowData);

            var column = params.colDef.field;

            gridRef.current.api.refreshCells({
                force: true,
                // columns: [column],
                rowNodes: [params.node]
            });
        }
    };

    const cellChanged = useCallback((params) => {
        var changed = params.data.cell?.hasBeenChanged && params.data.cell?.rowIndex == params.rowIndex;
        return changed;
    }, []);

    const ragCellClassRules = {
        'has-been-changed': (params) => cellChanged(params)
    };

    const reset = () => {
        setRowData(
            rowData.map((row) => {
                row.cell = null;
                return row;
            })
        );
    };

    const ragRenderer = (params) => <span>{params.value}</span>;

    const editBtnGroupRender = useMemo((params) => EditBtnGroup);

    const columnDefs = useMemo(
        () => [
            {
                width: 80,
                headerCheckboxSelection: true,
                checkboxSelection: true,
                suppressMenu: true
                // suppressSorting: true
            },

            { field: 'account', editable: false /*,  cellRenderer: MyRenderer */ },
            {
                field: 'name',
                cellRenderer: 'agGroupCellRenderer',
                editable: true,
                cellRenderer: ragRenderer,
                cellClassRules: ragCellClassRules

                // cellRenderer: modifiedCellRenderer
            },
            { field: 'calls' },
            { field: 'minutes', valueFormatter: "x.toLocaleString() + 'm'" },
            {
                field: 'operation',
                cellRenderer: editBtnGroupRender,
                /* suppressNavigable: true, editable: false,*/ cellClass: 'no-border'
            }
        ],
        []
    );

    const getRowId = (params) => params.data.account;

    const defaultColDef = useMemo(() => ({
        // flex: 1,
        editable: true,
        cellRenderer: ragRenderer,
        cellClassRules: ragCellClassRules,
        suppressRowClickSelection: true
    }));

    const handleSortBy = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <div className="main">
            <div className="op-container">
                <FormControl sx={{ width: 260 }}>
                    <InputLabel id="demo-simple-select-label">Sort by (User name)</InputLabel>
                    <Select
                        defaultValue=""
                        onChange={handleSortBy}
                        value={sortby}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        <MenuItem value="#">#</MenuItem>
                        <MenuItem value={'username'}>User Name</MenuItem>
                        <MenuItem value={'email'}>Email</MenuItem>
                        <MenuItem value={'contact'}>Contact</MenuItem>
                        <MenuItem value={'age'}>Age</MenuItem>
                        <MenuItem value={'country'}>Country</MenuItem>
                    </Select>
                </FormControl>

                <Button variant="contained" size="small" onClick={reset}>
                    Reset
                </Button>
            </div>
            <AgGridReact
                style={{
                    border: '1px solid rgb(230, 235, 241)'
                }}
                onCellValueChanged={handleCellValueChanged}
                ref={gridRef}
                className="ag-theme-material"
                getRowId={getRowId}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                animationRows={true}
                domLayout="autoHeight"
                rowData={rowData}
            />
            <ReactQueryDevtools />
        </div>
    );
}

export default UserProfile;
