import Link from "next/link";
import { siteContent } from "@/content/site";

export default function NotFound() {
  return (
    <main id="main" className="sec">
      <div className="wrap">
        <p className="eyebrow">{siteContent.brand.name}</p>
        <h1>{siteContent.notFound.title}</h1>
        <p>{siteContent.notFound.intro}</p>
        <Link className="btn btn-blue" href={siteContent.notFound.action.href}>
          {siteContent.notFound.action.label}
        </Link>
      </div>
    </main>
  );
}
