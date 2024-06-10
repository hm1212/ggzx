import { RouteRecordRaw } from "vue-router";
export interface TokenData{
    token:string|null;
    menuConstRoutes:RouteRecordRaw[]
}

export interface FoldData{
    fold:boolean
}