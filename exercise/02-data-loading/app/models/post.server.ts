import { prisma } from "~/db.server";

export async function getPostListItems() {
  return prisma.post.findMany({ select: { title: true, slug: true } });
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}
