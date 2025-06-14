import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CustomerrList } from "./customerr/CustomerrList";
import { CustomerrCreate } from "./customerr/CustomerrCreate";
import { CustomerrEdit } from "./customerr/CustomerrEdit";
import { CustomerrShow } from "./customerr/CustomerrShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Test"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Customerr"
          list={CustomerrList}
          edit={CustomerrEdit}
          create={CustomerrCreate}
          show={CustomerrShow}
        />
      </Admin>
    </div>
  );
};

export default App;
