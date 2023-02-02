import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import OrdersPage from '../OrdersPage/OrdersPage'

const AdminMenuPage = () => {
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Управление заказами">
        <OrdersPage />
      </Tab>
    </Tabs>
  )
}

export default AdminMenuPage