import { useState } from "react";
import { AbilityContext, getAbility } from "./access-control";
import { Posts } from "./post";
import { PermissionsEditor } from "./permissions-editor";

const App = () => {
  const [permissions, setPermissions] = useState({
    Post: ["read", "update", "delete", "add"],
  });
  const ability = getAbility(permissions);
  return (
    <>
      <main className="container" style={{ marginTop: "10px" }}>
        <h2>React App with Dynamic Permission using CASL</h2>
        <PermissionsEditor
          permissions={permissions}
          updatePermissions={setPermissions}
        />
        <AbilityContext.Provider value={ability}>
          <Posts />
        </AbilityContext.Provider>
      </main>
    </>
  );
};

export default App;
