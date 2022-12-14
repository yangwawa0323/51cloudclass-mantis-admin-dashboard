'use strict';

import React, { useMemo, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './style.css';
import styled from '@emotion/styled';

import { ModuleRegistry } from 'ag-grid-community';
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

function UserCard() {
    // never changes, so we can use useMemo
    const columnDefs = useMemo(
        () => [
            { field: 'athlete' },
            { field: 'age', cellRenderer: MyRenderer },
            { field: 'country' },
            { field: 'year' },
            { field: 'date' },
            { field: 'sport' },
            { field: 'gold' },
            { field: 'silver' },
            { field: 'bronze' },
            { field: 'total' }
        ],
        []
    );

    // never changes, so we can use useMemo
    const defaultColDef = useMemo(
        () => ({
            resizable: true,
            sortable: true
        }),
        []
    );

    // changes, needs to be state
    const [rowData, setRowData] = useState();

    // gets called once, no dependencies, loads the grid data
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then((resp) => resp.json())
            .then((data) => setRowData(data));
    }, []);

    return (
        <StyledMain>
            <AgGridReact
                animateRows="true"
                className="ag-theme-material"
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowData={rowData}
                rowSelection="multiple"
                suppressRowClickSelection="true"
            />
        </StyledMain>
    );
}

export default UserCard;
