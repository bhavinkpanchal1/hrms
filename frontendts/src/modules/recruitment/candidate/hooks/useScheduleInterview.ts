import { useMutation } from "@tanstack/react-query";
import scheduleInterview from "../../services/interview.service";


export function useScheduleInterview() {
  return useMutation({
    mutationFn: scheduleInterview
  })
}
