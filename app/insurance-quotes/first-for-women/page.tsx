import { Metadata } from "next"
import { FirstForWomenClient } from "./first-for-women-client"

export const metadata: Metadata = {
  title: "First for Women Car Insurance Quote | DCSA",
  description: "Get a free car insurance quote from First for Women. Quick form, no obligation.",
}

export default function FirstForWomenPage() {
  return <FirstForWomenClient />
}
