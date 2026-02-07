import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "react",
  "cursor",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "supabase",
  "tailwindcss",
  "git",
  "apollographql",
  "shadcnui",
  "vite",
  "strapi",
  "zod",
  "betterauth",
  "jest",
  "jira",
  "bitbucket",
  "jenkins",
  "vercel",
  "mui",
  "render",
];

export function IconCloudTechnologies() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
