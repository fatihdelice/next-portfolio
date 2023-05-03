import Link from "next/link";

const NoScrollLink = ({ children, href }) => (
  <Link href={href} legacyBehavior>{children}</Link>
);

export default NoScrollLink;
