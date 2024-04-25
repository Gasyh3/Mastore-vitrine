  const baseRoute = `${process.env.NEXT_PUBLIC_DOMAIN}/api`

export const ADMIN_API_ROUTES ={
   LOGIN:`${baseRoute}/auth/login`,
   CREATE_POST:`${baseRoute}/admin/create-post`,
   UPDATE_POST:`${baseRoute}/admin/update-post`,
    DELETE_POST:`${baseRoute}/admin/delete-post`


};

export const PUBLIC_API_ROUTES ={
   GET_POSTS:`${baseRoute}/all-posts`,
   GET_POST:`${baseRoute}/post`
};