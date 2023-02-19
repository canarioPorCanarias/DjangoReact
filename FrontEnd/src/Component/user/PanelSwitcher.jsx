import React from 'react'
import CanceledOrders from './form/CanceledOrders';
import History from './form/History';
import Historyreturns from './form/HistoryReturns';
import Messages from './form/Messages';
import Orders from './form/Orders';
import Profile from './form/Profile';
import VinculedAccounts from './form/VinculedAccounts';

export default function PanelSwitcher({ action }) {

    switch (action) {
        case undefined:
            return <Profile></Profile>
        case "messages":
            return <Messages></Messages>
        case "orders":
            return <Orders></Orders>
        case "canceledOrders":
            return <CanceledOrders></CanceledOrders>
        case "history":
            return <History></History>
        case "vinculed":
            return <VinculedAccounts></VinculedAccounts>
        case "historyReturns":
            return <Historyreturns></Historyreturns>
        default:
            return <Profile></Profile>
    }
}
