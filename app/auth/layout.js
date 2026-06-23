import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata("auth");

export default function AuthLayout({ children }) {
  return children;
}
