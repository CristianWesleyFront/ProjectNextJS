import { Metadata } from "next"
import { Icons } from "@/components/icons"
import { UserAuthForm } from "@/components/user-auth-form"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  console.log("Session: ", session);

  if (session) return redirect("/dashboard");
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
        </div>
        <UserAuthForm />
      </div>
    </div>
  )
}
