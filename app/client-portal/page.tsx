import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export const metadata = {
  title: "Client Portal | DCSA",
  description: "Access your debt review account and documents",
}

export default async function ClientPortalPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    // User is logged in, redirect to dashboard
    redirect("/client-portal/dashboard")
  } else {
    // User is not logged in, redirect to login
    redirect("/client-portal/auth/login")
  }
}
