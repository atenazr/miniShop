export default function useAsyncPublicRequest(request:any)  {
    // const config = useRuntimeConfig()
    console.log('fetch',request)
    return fetch(request)
}