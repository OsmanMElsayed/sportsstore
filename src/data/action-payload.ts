import { DataType } from "./data-type";

export interface ActionPayload<T> {
    dataType: DataType,
    data: T
}