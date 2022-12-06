import {useCallback, useEffect, useState} from 'react'
import {Flower} from '../model/flower'
import {getFlowersRequest} from '../service/UserService'
import {useDispatch} from 'react-redux'
import {showErrorSnackbar} from '../redux/slices/uiSlice'

export const useFlowers = () => {
    const dispatch = useDispatch()

    const [flowers, setFlowers] = useState<Flower[]>([])
    const [isLoadingFlowers, setIsLoadingFlowers] = useState(false)

    const fetchFlowers = useCallback((search: string)=>{
        setIsLoadingFlowers(true)
        getFlowersRequest(search).then(flowers =>{
            setFlowers(flowers)
            setIsLoadingFlowers(false)
        }).catch(e => dispatch(showErrorSnackbar(e.message)))
    },[])

    useEffect(()=>{
        fetchFlowers('')
    }, [])

    return {flowers, isLoadingFlowers, fetchFlowers}
}