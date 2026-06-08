import { interviewTableData } from "../../constants/interviewTableData";


export async function getInterview() {
    await new Promise((r)=>setTimeout(r, 1000));
    console.log(
 "Fetching Interviews"
);
    return interviewTableData;
}
