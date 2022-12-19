import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, vendorRoutes } from '~/routes';
import DefaultLayout from './layouts';
import config from './config';

function App() {

    var kt = 'vendor';
    localStorage.setItem('privilege', kt);

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

                        return <Route key={index} path={route.path} element={element}
                        />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
