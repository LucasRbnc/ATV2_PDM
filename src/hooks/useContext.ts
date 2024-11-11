import { useContext } from "react";
import { LotteryContext } from "../contexts/context";

export const useLottery = () => {
    return useContext(LotteryContext);
}