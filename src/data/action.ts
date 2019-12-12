import { ActionType } from "./action-type";
import { ActionPayload } from "./action-payload";

export interface Action<T> {
    type: ActionType,
    payload: ActionPayload<T>
}