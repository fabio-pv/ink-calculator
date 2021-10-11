import React from "react";

export const SuperContext = React.createContext({
    myPlan: null,
    me: null,
    load: null,
    updateMyRoles: null,
    myRoles: [],
    isAdmin: null,
});