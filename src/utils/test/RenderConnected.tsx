import React  from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { store_test } from '../../store/ConfigureStore';

type AppProps = {
    children: React.ReactNode,
    location? : string,
    params? : boolean,
};

function RenderConnected({ children , location = "/" , params = false  }: AppProps) {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store_test}>
                <BrowserRouter  basename="/" >
                    <Routes location={location} >
                        <Route path={params ? `/:id` : `/`} element={children} />
                    </Routes>
                </BrowserRouter >
            </Provider >
        </QueryClientProvider>
    )
}

export default RenderConnected

