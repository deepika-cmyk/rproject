import React from 'react';
import Heading from './Heading';
import Paragraph from  './Paragraph';
import Orderedlist from './Orderedlist';

function App(){
    return(
    <React.Fragment>
        <Heading></Heading>
    <Paragraph></Paragraph>
    <Orderedlist></Orderedlist>
    </React.Fragment>
    );
}
export default App;