import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';

function Routes() {
  return (
    <Routes>
      {/* unprotected routes for auth */}
      {/* ... sign up, forgot password, reset password */}
      <Route path="/login" component={<Login />}></Route>
        {/* Main App routes...
        AKA public routes */}
      <Route path="/" component={<Outlet />}>
        <Route index component={<Home />}></Route>
        <Route path="about-us" component={<AboutUs />}></Route>
      </Route>
      <Route
        path="/dashboard"
        component={
          <ProtectedRoutes>
            <DashLayout />
          </ProtectedRoutes>
        }
      >
        <Route index component={<Dashboard />}></Route>
        <Route path="users" component={<Users />}></Route>
        {/* deep nested routes  */}
        <Route path="products" component={<Outlet />}>
            <Route index component={<Products />}></Route>
            <Route path=":id" component={<EditProduct />}></Route>  {/* /dashboard/products/ryq86861 */}
        </Route>
      </Route>
    </Routes>
  );
}

function ProtectedRoutes({ children }) {
  // this comes from state...
  let isAuthenticated = false; // boolean
  let permissions = []; // Array of permissions, write, read >> actions, views
  let location = useLocation();

  if (!isAuthenticated) {
    <Navigate to="/login" reset state={{ from: location.pathname }} />;
  }

  return children;
}

function DashLayout() {
  return (
    <Layout>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}
