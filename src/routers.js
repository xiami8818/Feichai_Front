import Index from "@/components/Index";
import Code from "@/components/code/Code";
const routers = [
    {name: 'index',
        path: '/',
        component: Index
    },
    {
        name: 'code',
        path:' /code',
        component:Code
    }
]
export default routers
