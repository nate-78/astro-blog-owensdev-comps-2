// pages/your-page.jsx

import { BuilderComponent, builder } from '@builder.io/react';

const BUILDER_API_KEY = 'de6d47b07dda425e8de672c214f22836';

// Replace with your Public API Key.
builder.init(BUILDER_API_KEY);

export async function getStaticProps({ params }) {
  const urlPath = '/' + (params?.page?.join('/') || '');
  const announce = await builder
    .get('product-category-cta', { query: {
      data: {
        categorySlug: urlPath
      }
    } })
    .toPromise();

  return {
    props: {
      announce: announce || null,
    },
  };
}

// Define a function that generates the
// static paths for all pages in Builder
// export async function getStaticPaths() {
//   // Get a list of all pages in Builder
//   const pages = await builder.getAll("page", {
//     // We only need the URL field
//     fields: "data.url",
//     options: { noTargeting: true },
//   });

//   // Generate the static paths for all pages in Builder
//   return {
//     paths: pages.map((page) => `${page.data?.url}`).filter(url => url !== '/'),
//     fallback: 'blocking',
//   };
// }

export default function Page({ announce }) {
  return (
    <>
      {/* Put your header here. */}
      <div>
        Other stuff goes here -- like built-in stuff
      </div>
      <BuilderComponent model="product-category-cta" content={announce} />
      {/* Put the rest of your page here. */}
      <div>
        More stuff goes down here
      </div>
    </>
  );
}