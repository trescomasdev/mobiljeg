import request from '../utils/request';
import { REMOTE_URL } from '../config/app';

export function getTickets(e){
  return function(dispatch, getState){
      dispatch({type: "FETCHING_TICKETS_STARTED"})
      request.get(REMOTE_URL + "/data/ticket/all")
        .then((response) => {
          dispatch({type: "FETCHING_TICKETS_SUCCESS", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "FETCHING_TICKETS_FAILED", payload: err.data})
      })
  }
}

export function useTicket(data){
  return function(dispatch, getState){
      dispatch({type: "USE_TICKET_STARTED"})
      request.post(REMOTE_URL + "/data/ticket/use-ticket", {ticketID: data.selectedID, usedQty: data.changeQty})
        .then((response) => {
          dispatch({type: "USE_TICKET_SUCCESS", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "USE_TICKET_FAILED", payload: err.data})
      })
  }
}

export function checkTicketStatus(id){
  return function(dispatch, getState){
      dispatch({type: "CHECK_TICKET_STATUS_STARTED"})
      request.get(REMOTE_URL + "/data/ticket/ticket-status?ticketID=" + id)
        .then((response) => {
          dispatch({type: "CHECK_TICKET_STATUS_SUCCESS", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "CHECK_TICKET_STATUS_FAILED", payload: err.data})
      })
  }
}

export function checkStatus(id){
  return function(dispatch, getState){
      dispatch({type: "CHECK_PAYMENT_STATUS_STARTED"})
      request.get("https://api.test.barion.com/v2/Payment/GetPaymentState/?POSKEY=c7fac0dccb2748c6814584a61f18bd7d&PaymentId=" + id, {withCredentials: false})
        .then((response) => {
          dispatch({type: "CHECK_PAYMENT_STATUS_SUCCESS", payload: response.data})
          dispatch(checkTicketStatus(response.data.PaymentRequestId))
        })
        .catch((err) => {
          dispatch({type: "CHECK_PAYMENT_STATUS_FAILED", payload: err.data})
      })
  }
}

export function barionPay(e){
  return function(dispatch, getState){

    let inputs = getState().buyTicketForm.inputs;

    dispatch({type: "CREATE_NEW_TICKET_STARTED"})
    request.post(REMOTE_URL + "/data/ticket/new-ticket", inputs)
      .then((response) => {
        const transaction_data = {
          "POSKey": "c7fac0dccb2748c6814584a61f18bd7d",
          "PaymentType": "Immediate",
          "GuestCheckOut": true,
          "FundingSources": ["All"],
          "PaymentRequestId": response.data._id,
          "Locale": "hu-HU",
          "OrderNumber": response.data._id,
          "Currency": "HUF",
          "Transactions": [{
              "POSTransactionId": response.data._id,
              "Payee": "mobiljeg@gmail.com",
              "Total": inputs.summary,
              "Items": [{
                "Name": "Csepeli jégpark belépőjegy",
                "Description": "Belépést biztosít a csepeli jégpark területére.",
                "Quantity": inputs.qty,
                "Unit": "darab",
                "ItemTotal": 100
              }]
          }]
        }

        dispatch({type: "CREATE_NEW_TICKET_SUCCESS"})
        request.post("https://api.test.barion.com/v2/Payment/Start/", transaction_data, {withCredentials: false})
          .then((response) => {
            window.location.replace(response.data.GatewayUrl)
          })
          .catch((err) => {
            dispatch({type: "CREATE_NEW_TICKET_FAILED"})
        })

      })
      .catch((err) => {
        dispatch({type: "CREATE_NEW_TICKET_FAILED"})
    })
  }
}
