import React, { useState } from "react";
import ClientInfoModal from "../../components/Modals/ShowClientInfoModal";
import { ClientsTable } from "../../components/Tables/ClientsTable";

const VerClientes = () => {
  const [modalShow, setModalShow] = useState(false);
  const [clientInfo, setClientInfo] = useState();

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
      </div>

      <div className="row">
        <div className="col-lg-10 mb-4 col-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Tabla de clientes
              </h6>
            </div>
            <div className="card-body">
              <ClientsTable
                setModalShow={setModalShow}
                setClientInfo={setClientInfo}
              ></ClientsTable>
            </div>
            <ClientInfoModal
              clientInfo={clientInfo}
              show={modalShow}
              onHide={() => setModalShow(false)}
            ></ClientInfoModal>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerClientes;
