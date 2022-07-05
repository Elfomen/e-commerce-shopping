import CategoryList from '../../components/Category-list/list'
import { Outlet } from 'react-router-dom'
const Home = () => {

    return (
        <div>
            <CategoryList />
            <Outlet />
        </div>
    )
}

export default Home;
