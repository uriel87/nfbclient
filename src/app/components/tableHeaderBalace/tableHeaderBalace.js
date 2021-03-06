

import React, { memo } from "react";

const TableHeaderBalace = () => {
    return(
        <div className="flex-table-header header-table">
            <div className="flex-row">Name</div>
            <div className="flex-row">Description</div>
            <div className="flex-row">Amount</div>
            <div className="flex-row">Category</div>
            <div className="flex-row">Time</div>
            <div className="flex-row">Payments</div>
        </div>
    )
}

export default memo(TableHeaderBalace)