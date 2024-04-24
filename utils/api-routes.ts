  const baseRoute = `${process.env.NEXT_PUBLIC_DOMAIN}/api`

export const ADMIN_API_ROUTES ={
   LOGIN:`${baseRoute}/admin/login`,
   CREATE_POST:`${baseRoute}/admin/create-post`
};

export const PUBLIC_API_ROUTES ={
   GET_POSTS:`${baseRoute}/posts`,
   GET_POST:`${baseRoute}/post`
};