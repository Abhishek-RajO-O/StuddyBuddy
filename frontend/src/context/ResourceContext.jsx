import { createContext } from "react";

export const ResourceContext = createContext(null);

function ResourceProvider({ children }) {
  return (
    <ResourceContext.Provider value={{}}>
      {children}
    </ResourceContext.Provider>
  );
}

export default ResourceProvider;
