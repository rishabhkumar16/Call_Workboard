import React from 'react'
import Base from './components/Base';

import store from "./redux/store";
import { Provider } from "react-redux";
export default function App() {
    return (
        <Provider store={store}>
        <Base />
        </Provider>
    )
}
