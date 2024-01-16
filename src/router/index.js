import MainPage from '../pages/MainPage'
import OrgPage from '../pages/OrgPage'

export const publicRoutes = [
    {path: '/org/:id', component: OrgPage, exact: true},
    {path: '/', component: MainPage, exact: true}
]