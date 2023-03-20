import React from 'react';
import { useQuery } from '@apollo/client';
import { Card, CardBody, CardHeader } from 'reactstrap';

import { GET_LOCATIONS } from "@application/queries/Test";

function App() {
    const getTestData = useQuery(GET_LOCATIONS);

    if (getTestData.error || getTestData.error) return <React.Fragment>Can not get from applo server</React.Fragment>;

    return (
        <div className="global-container-screen-prototype" style={{ width: "100%", overflowX: "scroll" }}>
            <Card>
                <CardHeader>List</CardHeader>
                <CardBody>
                    <pre>
                        {JSON.stringify(getTestData.data, null, 2)}
                    </pre>
                </CardBody>
            </Card>
        </div>
    );
};

export default App;
