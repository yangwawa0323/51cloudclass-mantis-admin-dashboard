/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useRef, useState, useCallback, useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.css'; // Optional theme CSS

import styled from '@emotion/styled';

import { createApi } from 'unsplash-js';
import EditBtnGroup from './Operation';
import './user-profile.css';
import Profile from './Profile';
import { Button, Chip } from '@mui/material';

const StyledMain = styled.div((prop) => ({
    padding: '10px 40px',
    minHeight: '680px',
    height: '80vh'
}));

const RandomStatus = (props) => {
    const [status] = useState(['Rejected', 'Verified', 'Pending']);
    const [bgcolor] = useState(['rgb(255, 77, 79, 0.1)', 'rgb(82, 196, 26, 0.1)', 'rgb(19, 194, 194, 0.1)']);
    const [color] = useState(['rgb(255, 77, 79)', 'rgb(82, 196, 26)', 'rgb(19, 194, 194)']);
    var random = Math.ceil(Math.random() * 3) % 3;
    return (
        <span>
            <Chip
                sx={{ fontSize: '0.725rem', fontWeight: '500', height: '1.2rem', color: color[random], backgroundColor: bgcolor[random] }}
                variant="filled"
                size="small"
                label={status[random]}
            />
        </span>
    );
};

const UserList = () => {
    const gridRef = useRef(); // Optional - for accessing Grid's API
    const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

    const avatarRenderer = (params) => {
        return (
            <div
                style={{
                    height: '50px',
                    width: '2rem',
                    // marginTop: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <img style={{ borderRadius: '50%' }} src={params.value} alt={params.data.title} />
            </div>
        );
    };

    // Each Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
        {
            field: 'user.profile_image.small',
            headerName: 'Avatar',
            // headerCheckboxSelection: false,
            // checkboxSelection: true,
            rowDrag: true,
            cellRenderer: avatarRenderer
        },
        { field: 'user.name', headerName: 'User Name' },
        { field: 'status', cellRenderer: useMemo((params) => RandomStatus) },
        { field: 'links.photos', headerName: 'Photo link', flex: 2 },
        { field: 'title', headerName: 'Title' },
        { field: 'operation', cellRenderer: useMemo((params) => EditBtnGroup) }
    ]);

    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo(() => ({
        sortable: true,
        flex: 1
    }));

    // Example load data from sever
    useEffect(() => {
        const unsplash = createApi({
            accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY
        });
        unsplash.collections.list({ page: 1 }).then((response) => {
            if (response.status === 200) {
                var {
                    response: { results }
                } = response;
                setRowData(results);
            }
        });
    }, []);

    const getRowHeight = useCallback((params) => {
        let rowHeight = params.node.selected ? 600 : 47;
        return rowHeight;
    }, []);

    const isFullWidthRow = useCallback((params) => {
        return params.rowNode.selected;
    }, []);

    const fullWidthCellRenderer = useMemo((params) => {
        return Profile;
    }, []);

    const reset = () => {
        const renderedNodes = gridRef.current.api.getRenderedNodes();
        renderedNodes.forEach((node) => node.setSelected(false));
    };

    const onSelectionChanged = (params) => {
        const selectedNodes = params.api.getSelectedNodes();
        const renderedNodes = params.api.getRenderedNodes();

        // Restore all the nodes height to 60px;
        renderedNodes.forEach((node) => node.setRowHeight(47));
        selectedNodes[0]?.setRowHeight(600);
        params.api.onRowHeightChanged();
        const selectedRows = params.api.getSelectedRows();
        params.api.redrawRows(selectedRows);
    };

    return (
        <div className="main">
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-end', paddingRight: '40px' }}></div>
            {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
            <div className="ag-theme-material" style={{ width: 'auto', height: '100%' }}>
                <AgGridReact
                    ref={gridRef} // Ref for accessing Grid's API
                    rowData={rowData} // Row Data for Rows
                    columnDefs={columnDefs} // Column Defs for Columns
                    defaultColDef={defaultColDef} // Default Column Properties
                    animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                    // rowSelection="single" // Options - allows click selection of rows
                    // getRowHeight={getRowHeight}
                    isFullWidthRow={isFullWidthRow}
                    fullWidthCellRenderer={fullWidthCellRenderer}
                    onSelectionChanged={onSelectionChanged}
                    rowDragManaged={true}
                    domLayout="autoHeight"
                />
            </div>
        </div>
    );
};

export default UserList;
