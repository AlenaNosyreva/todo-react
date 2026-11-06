import localAPI from "@/shared/api/tasks/local"
import serverAPI from "@/shared/api/tasks/server"

const isLocal = import.meta.env.VITE_STATIC_BACKEND === 'true'

const taskAPI = isLocal ? localAPI : serverAPI

export default taskAPI