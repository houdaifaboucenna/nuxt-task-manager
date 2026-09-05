import type { User } from "./User";

export type BoardList = {
    id: string;
    name: string;
    userId: number;
    user: User;
    createdAt: string;
};

export type BoardListPayload = {
    lists: BoardList[];
    error?: string;
};