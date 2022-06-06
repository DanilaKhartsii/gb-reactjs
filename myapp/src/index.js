import React from 'react';
import ReactDOM from 'react-dom/client';
import { MessageList } from "./components";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <MessageList />
    </React.StrictMode>
);
