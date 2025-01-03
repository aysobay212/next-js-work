import Main from "@/components/Main";
import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";

export const metadata = {
    title: "Hello World · Admin",
  };

export default function AdminPage () {
    
    const authStatus = false

    // by default, renders login page
    let children = (
        <Login />
    )

    // overrides render to admin if authStatus
    if (authStatus) {
        children = <Dashboard />
    }

    // renders out the page
    return (
        <Main>
            {children}
        </Main>
    )
}