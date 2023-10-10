import { useQuery, useMutation, useQueryClient } from "react-query";

export function useRequestProcessor() {
  const queryClient = useQueryClient();

  function useCustomQuery(key, queryFunction, options = {}) {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    });
  }

  function useCustommutate(key, mutationFunction, options = {}) {
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onSettled: () => queryClient.invalidateQueries(key),
      ...options,
    });
  }

  return { useCustomQuery, useCustommutate };
}
