import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

export const uploadBlogImage = async (file: File): Promise<string> => {
    // Create a unique filename: timestamp_random_originalName
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    const filename = `${timestamp}_${random}_${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;

    const storageRef = ref(storage, `blog-images/${filename}`);

    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    return url;
};
