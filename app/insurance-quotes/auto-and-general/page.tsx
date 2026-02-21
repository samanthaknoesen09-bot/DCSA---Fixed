import { Metadata } from "next"
import { AutoAndGeneralClient } from "./auto-and-general-client"

export const metadata: Metadata = {
  title: "Auto & General Car Insurance Quote | DCSA",
  description: "Get a free car insurance quote from Auto & General. Quick form, no obligation.",
}

export default function AutoAndGeneralPage() {
  return <AutoAndGeneralClient />
}
