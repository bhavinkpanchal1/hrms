import { useQuery } from "@tanstack/react-query";
import { getInterview } from "../../services/getInterviews.service";


export function useInterviews() {
  return useQuery({
    queryKey: ["interviews"],

    queryFn: getInterview,
  });
}
