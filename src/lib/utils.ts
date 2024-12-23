 
import { clsx, type ClassValue } from "clsx"
// import { getServerSession } from "next-auth";
// import { redirect, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge"
// import { authOptions } from "./auth";
// import { useSession } from "next-auth/react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomNumber(min: number = 1, max: number = 100): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// export async function loginIsRequiredServer() {
//   const session = await getServerSession(authOptions);
//   if (!session) return redirect("/");
// }

// export function loginIsRequiredClient() {
//   if (typeof window !== "undefined") {
//     const session = useSession();
//     const router = useRouter();
//     if (!session) router.push("/");
//   }
// }
