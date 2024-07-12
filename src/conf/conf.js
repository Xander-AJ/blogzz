const conf = {
   appwriteUrl: String(import.meta.env.VITE_AAPPPWRITE_URL),

   appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

   appwriteDataBaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

   appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),

   appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
export default conf;