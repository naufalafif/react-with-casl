export const PermissionsEditor = ({ permissions, updatePermissions }) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <h5>Permission Editor</h5>
      <p>Update permission toggle below to see changes on Post table</p>
      <div className="grid">
        {Object.keys(permissions).map((resource) => {
          return (
            <ResourcePermissionEditor
              key={resource}
              resourcePermission={permissions[resource]}
              updatePermissions={(resourcePermissions) =>
                updatePermissions((prev) => ({
                  ...prev,
                  [resource]: resourcePermissions,
                }))
              }
            />
          );
        })}
      </div>
    </div>
  );
};

const ResourcePermissionEditor = ({
  resourcePermission,
  updatePermissions,
}) => {
  return (
    <div className="grid">
      {["read", "update", "delete", "add"].map((permissionName) => {
        return (
          <fieldset key={permissionName}>
            <label htmlFor={`switch-${permissionName}`}>
              <input
                type="checkbox"
                id={`switch-${permissionName}`}
                name={`switch-${permissionName}`}
                role="switch"
                checked={resourcePermission.includes(permissionName)}
                onChange={(e) => {
                  const checked = e.target.checked;
                  if (!checked) {
                    updatePermissions(
                      resourcePermission.filter(
                        (permission) => permission !== permissionName
                      )
                    );
                  } else {
                    updatePermissions([...resourcePermission, permissionName]);
                  }
                }}
              />
              {permissionName}
            </label>
          </fieldset>
        );
      })}
    </div>
  );
};
