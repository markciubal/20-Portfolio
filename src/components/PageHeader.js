import { React, useEffect, useState, useRef } from 'react';

function PageHeader({title}) {
    return (
        <>
            <h2 className="p-3">{title}</h2>
            <hr></hr>
        </>
    )
}

export default PageHeader;