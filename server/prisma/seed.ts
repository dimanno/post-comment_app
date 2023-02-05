import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.deleteMany();
  await prisma.article.deleteMany();

  const tadey = await prisma.user.create({
    data: {
      name: 'Tadey',
      email: 'tad@gmaile.com',
      password: '12345678',
      homePage: 'https://massage-pro.org/',
    },
  });

  const admin = await prisma.user.create({
    data: {
      name: 'admin',
      email: 'admin@gmaile.com',
      password: '12345678',
      homePage: 'https://post-comment.app',
    },
  });

  const marianna = await prisma.user.create({
    data: {
      name: 'Marianna',
      email: 'mari@gmaile.com',
      password: '12345678',
    },
  });

  const post1 = await prisma.article.create({
    data: {
      title: 'Cookies in NodeJS ',
      body: 'An HTTP cookie is a small piece of data stored by the users browser. Cookies were designed to be a reliable mechanism for websites to remember stateful information. When the user visits the website again, the cookie is automatically sent with the request \
      Use with Express (default)\
      First install the required package (and its types for TypeScript users)\
      You can pass several options to the cookieParser middleware:\
- secret a string or array used for signing cookies. This is optional and if not specified, will not parse signed cookies. If a string is provided, this is used as the secret. If an array is provided, an attempt will be made to unsign the cookie with each secret in order.\
- options an object that is passed to cookie.parse as the second option. See cookie for more information.\
The middleware will parse the Cookie header on the request and expose the cookie data as the property req.cookies and, if a secret was provided, as the property req.signedCookies. These properties are name value pairs of the cookie name to cookie value.\
When secret is provided, this module will unsign and validate any signed cookie values and move those name value pairs from req.cookies into req.signedCookies. A signed cookie is a cookie that has a value prefixed with s:. Signed cookies that fail signature validation will have the value false instead of the tampered value.\
With this in place, you can now read cookies from within the route handlers, as follows:',
      published: true,
      authorId: tadey.id,
    },
  });

  const post2 = await prisma.article.create({
    data: {
      title: 'Modules in NodeJS ',
      body: 'A module is a class annotated with a @Module() decorator. The @Module() decorator provides metadata that Nest makes use of to organize the application structure\
      Each application has at least one module, a root module. The root module is the starting point Nest uses to build the application graph - the internal data structure Nest uses to resolve module and provider relationships and dependencies. While very small applications may theoretically have just the root module, this is not the typical case. We want to emphasize that modules are strongly recommended as an effective way to organize your components. Thus, for most applications, the resulting architecture will employ multiple modules, each encapsulating a closely related set of capabilities.\
The @Module() decorator takes a single object whose properties describe the module\
providers	the providers that will be instantiated by the Nest injector and that may be shared at least across this module\
controllers	the set of controllers defined in this module which have to be instantiated\
imports	the list of imported modules that export the providers which are required in this module\
exports	the subset of providers that are provided by this module and should be available in other modules which import this module. You can use either the provider itself or just its token (provide value)\
The module encapsulates providers by default. This means that its impossible to inject providers that are neither directly part of the current module nor exported from the imported modules. Thus, you may consider the exported providers from a module as the modules public interface, or API.',
      published: true,
      authorId: marianna.id,
      categories: {
        create: [{ name: 'Programming' }],
      },
    },
  });

  const comment1 = await prisma.comment.create({
    data: {
      message: 'I am a root comment',
      userId: tadey.id,
      articleId: post1.id,
    },
  });

  const comment2 = await prisma.comment.create({
    data: {
      parentId: comment1.id,
      message: 'I am a nested comment',
      userId: marianna.id,
      articleId: post1.id,
    },
  });

  const comment3 = await prisma.comment.create({
    data: {
      message: 'I am another root comment',
      userId: tadey.id,
      articleId: post1.id,
    },
  });
  console.log(post1, post2);
}

seed();
