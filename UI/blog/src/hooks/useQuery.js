import { useLazyQuery } from '@apollo/client'

export default function useQuery(gqlQuery) {
    const [getData, { loading, error, data }] = useLazyQuery(gqlQuery);
    return { getData, loading, error, data }
}