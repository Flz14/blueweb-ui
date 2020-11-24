import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  background-color: #243147;
`;
const ClientPanelSidebar = ({ pendingMessages, pendingRequests }) => {
  return (
    <StyledUl
      className="navbar-nav  sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link to="/admin">
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <img
              src="/images/icons/BluewebLogoWhite.png"
              style={{ width: "50px" }}
            ></img>
          </div>
          <div className="sidebar-brand-text mx-3">BlueWeb</div>
        </a>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Inicio</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Clientes</div>

      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-people-square "></i>
          <span>Creacion/edición</span>
        </Link>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Seccion de clientes:</h6>
            <Link to="/admin/clientes/">
              <a className="collapse-item">Ver clientes</a>
            </Link>
            <Link to="/admin/clientes/crear">
              <a className="collapse-item">Agregar cliente</a>
            </Link>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Factibilidad</div>
      <li className="nav-item">
        <Link to="/admin/factibilidad/">
          <a className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>
              Ver solicitudes
              {pendingRequests ? (
                <span className="badge badge-danger badge-counter">
                  {pendingRequests}
                </span>
              ) : (
                ""
              )}
            </span>
          </a>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Mensajes de Contacto</div>
      <li className="nav-item">
        <Link to="/admin/mensajes/">
          <a className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>
              Ver Mensajes Pendientes
              {pendingMessages !== 0 && (
                <span className="badge badge-danger badge-counter">
                  {pendingMessages}
                </span>
              )}
            </span>
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/mensajes/revisados">
          <a className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>Mensajes revisados</span>
          </a>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />

      <div className="sidebar-heading">Usuarios</div>

      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="#"
          data-toggle="collapse"
          data-target="#collapseUser"
          aria-expanded="true"
          aria-controls="collapseUser"
        >
          <i className="fas fa-plus-square "></i>
          <span>Creacion/edición</span>
        </Link>
        <div
          id="collapseUser"
          className="collapse"
          aria-labelledby="headingUser"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Opciones de usuario:</h6>
            <Link to="/admin/clientes/">
              <a className="collapse-item">Ver/modificar usuarios</a>
            </Link>
            <Link to="/admin/usuarios/crear">
              <a className="collapse-item">Crear usuario</a>
            </Link>
          </div>
        </div>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
      <div className="sidebar-heading">Reportes</div>

      <li className="nav-item">
        <Link to="/admin/reportes/pendientes">
          <a className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>Reportes pendientes</span>
          </a>
        </Link>
        <Link to="/admin/reportes">
          <a className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>Todos los reportes</span>
          </a>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />

      <div className="sidebar-heading">Configuración</div>

      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="#"
          data-toggle="collapse"
          data-target="#collapseConfigReport"
          aria-expanded="true"
          aria-controls="collapseConfigReport"
        >
          <i className="fas fa-plus-square "></i>
          <span>Estados y categorias de reporte</span>
        </Link>
        <div
          id="collapseConfigReport"
          className="collapse"
          aria-labelledby="headingReportConfig"
          data-parent="#collapseConfigReport"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Opciones:</h6>
            <Link to="/admin/reportes/categorias">
              <a className="collapse-item">Categorias</a>
            </Link>
          </div>
        </div>
      </li>
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </StyledUl>
  );
};

export default ClientPanelSidebar;
