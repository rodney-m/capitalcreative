import { PERMISSIONS } from '../data/permissions.data';

export interface TokenPayload {
    aud: string[];
    username: string;
    scope: string[];
    userAccountId: number;
    tenantId?: any;
    isAdmin: boolean;
    exp: number;
    authorities: PERMISSIONS[];
    jti: string;
    email: string;
    client_id: string;
}