import NextLink from "next/link";
import { Link as NextViewLink } from "next-view-transitions";

export default function Link(props: React.ComponentProps<typeof NextLink>) {
  return <NextViewLink {...props} />;
}
