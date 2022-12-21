import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, vendorRoutes, customerRoutes } from '~/routes';
import DefaultLayout from './layouts';
import config from './config';

function App() {

    var kt = 'customer';
    var login = 'true';
    localStorage.setItem('privilege', kt);
    localStorage.setItem('login', login);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} element={
                                <DefaultLayout>
                                    <route.component />
                                </DefaultLayout>
                            }
                        />;
                    })}

                    {vendorRoutes.map((route, index) => {
                        var privilege = localStorage.getItem('privilege') === 'vendor';
                        var element = <DefaultLayout>
                                        <route.component />
                                    </DefaultLayout>;
                        if(privilege !== true){
                            element = <DefaultLayout>
                                        <Navigate to={config.routes.login} />
                                    </DefaultLayout>;
                        }

                        return <Route key={index} path={route.path} element={element}/>;
                    })}

                    {customerRoutes.map((route, index) => {
                        var privilege = localStorage.getItem('privilege') === 'customer' && localStorage.getItem('login') === 'true';
                        var element = <DefaultLayout>
                                        <route.component />
                                    </DefaultLayout>;
                        if(privilege !== true){
                            element = <DefaultLayout>
                                        <Navigate to={config.routes.login} />
                                    </DefaultLayout>;
                        }

                        return <Route key={index} path={route.path} element={element}/>;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
