import { CMS_NAME, BLOG_NAME } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {BLOG_NAME}.
      </h1>
      <div>
        <h4>Nguyen Quoc Hung - Maximuss Official Blog.</h4>
      </div>
    </section>
  );
}
