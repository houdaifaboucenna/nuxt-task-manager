export type User = {
    id: string;
    email: string;
    name: string | null;
    createdAt: string;
};

export type UsersPayload = {
    users: User[];
    error?: string;
};