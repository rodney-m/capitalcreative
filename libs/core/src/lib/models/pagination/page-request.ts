export interface PageRequest {
    page: number;
    size?: number;
    query?: string;
    search?: string;
    sort?: string;
    [prop: string]: any;
  }
  
  export const PAGEPARAMS = function get(request?: PageRequest): string {
    if (!request) return '';
    if (!request.sort) request.sort = 'id,desc';
    let url = `?`;
    for (const [key, value] of Object.entries(request)) {
      if (value === undefined || value === null) continue;
      url += `&${key}=${value}`;
    }
    return url;
  }
  