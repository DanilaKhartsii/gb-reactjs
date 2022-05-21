import React from 'react';
import ReactDOM from 'react-dom/client';
import {Message} from "./components/msg/msg";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Message msg='Hello from message component'/>
    </React.StrictMode>
);
