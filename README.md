# 51cloudclass Mantis React Material UI Dashboard Template 
![51cloudclass](http://img.51cloudclass.com/logo.png)


## email & password loggin

> note: you need the [golang backend](https://github.com/yangwawa0323/gin-gorm-jwt) , otherwise 

```javascript
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
    // const isLoggedIn = true;
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
```

uncomment `const isLoggedIn = true` and comment the line before this line.