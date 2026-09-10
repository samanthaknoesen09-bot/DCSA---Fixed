import type { Metadata } from "next"
import { ServicesClient } from "./services-client"

export const metadata: Metadata = {
  title: "Our Services | DCSA (Debt Clear SA (Pty) Ltd) - Debt Counselling & Credit Repair",
  description: "Explore our debt counselling and credit repair services. Education-first approach to financial freedom.",
}

export default function ServicesPage() {
  return <ServicesClient />
}
