import FooterNavigation from "../Components/FooterNavigation";
import "../Assets/css/Background.css";
import { useContext } from "react";
import Contexto from "../Context/Context";
import SeleccionCanchas from "./SeleccionCanchas.js";
import MisReservas from "./MisReservas";
import News from "./News";
import { useAuth0 } from "@auth0/auth0-react";
import SinPermisoUi from "../Components/SinPermisoUi";

export default function Home() {
  const { RouteComponent } = useContext(Contexto);
  const { user } = useAuth0();
  const rol = user.Nombre.user_metadata.rol;
  console.log(rol);
  if (rol === "Propietario") {
    return <SinPermisoUi></SinPermisoUi>;
  }
  return (
    <head className="BackgroundHomeUsuario">
      <>
        <div >
          {/* <div className="HeaderHomeUsuario">
                    <HeaderUsuario></HeaderUsuario>
                </div> */}

          <div className="BodyHomeUsuario">
            {/* Utilizo condicionales y muestro el componente*/}
            {(() => {
              if (RouteComponent === "Dashboard") {
                return <SeleccionCanchas></SeleccionCanchas>;
              }
              if (RouteComponent === "News") {
                return <News></News>;
              }
              if (RouteComponent === "MisReservas") {
                return <MisReservas />;
              }
            })()}

            {/*<CardDeportes></CardDeportes>*/}
          </div>

          <div className="FooterHomeUsuario">
            <FooterNavigation></FooterNavigation>
          </div>
        </div>
      </>
    </head>
  );
}
