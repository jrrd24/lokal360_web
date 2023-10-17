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

  function useCustomMutate(key, mutationFunction, invalidateKey, options = {}) {
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onSettled: () => queryClient.invalidateQueries(invalidateKey),
      ...options,
    });
  }

  return { useCustomQuery, useCustomMutate };
}
