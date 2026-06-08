import { useMutation, useQueryClient } from "@tanstack/react-query";

import scheduleInterview from "../../services/interview.service";

export function useScheduleInterview() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: scheduleInterview,

    onSuccess: async () => {
      console.log("Mutation Success");

      await queryClient.refetchQueries({
        queryKey: ["interviews"],
      });
    },
  });
}
