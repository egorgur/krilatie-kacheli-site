import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main";
import { CatalogLayout } from "./catalog-layout";
import {
  SubcategoryPage,
  CategoryPage,
  ProductsPage,
  ProductDetailsPage,
} from "../pages/catalogue";
import { ContactsPage } from "../pages/contacts";
export const router = createBrowserRouter([
  {
    path: "/",

    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/catalogue",
        element: <CatalogLayout />,
        children: [
          {
            path: "/catalogue",
            element: <CategoryPage />,
          },
          {
            path: ":categoryId",
            element: <SubcategoryPage />,
          },
          {
            path: ":categoryId/:subcategoryId",
            element: <ProductsPage />,
          },
          {
            path: ":categoryId/:subcategoryId/:productId",
            element: <ProductDetailsPage />,
          },
        ],
      },
    ],
  },
]);
