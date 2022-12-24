// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';

import { QueryClient, QueryClientProvider } from 'react-query';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const client = new QueryClient();

const App = () => (
    <QueryClientProvider client={client}>
        <ThemeCustomization>
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </ThemeCustomization>
    </QueryClientProvider>
);

export default App;
