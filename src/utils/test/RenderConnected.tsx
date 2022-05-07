import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { store_test } from '../../store/ConfigureStore';

type AppProps = {
    children: React.ReactNode,
};

function renderConnected({ children }: AppProps) {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store_test}>
                <BrowserRouter basename="/" >
                    <Routes>
                        <Route path="/" element={children} />
                    </Routes>
                </BrowserRouter >
            </Provider >
        </QueryClientProvider>
    )
}

export default renderConnected

