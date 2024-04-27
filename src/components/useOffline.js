import { useEffect, useState } from "react"

const useOnline = () => {
    const [isOffline, setIsOffline] = useState(false)

    useEffect(() => {
        const handleOnline = () => {
            setIsOffline(false)
        }
        const handleOffline = () => {
            setIsOffline(true)
        }
        window.addEventListener('offline', handleOffline)
        window.addEventListener('online', handleOnline)
        return () => {
            window.removeEventListener('offline', handleOffline)
            window.removeEventListener('online', handleOnline)
        }
    })
    return isOffline
}
export default useOnline