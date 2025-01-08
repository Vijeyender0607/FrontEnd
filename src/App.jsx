import './App.css'
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./Components/applayout/Applayout.component";
import Home from './Pages/Home.page';
import Brand from './Pages/Brand/Brand.page';
import { Product } from './Pages/Product/Product.page';
import Category from "./Pages/category/Category.jsx";
import { CreateProduct } from './Pages/Product/CreateProduct.page';
import { CreateBrand } from './Pages/Brand/Components/CreateBrand.component.jsx';
import CreateNewCategory from './Pages/category/CreateNewCategory.jsx';
import MaxHome from './Pages/Home/MaxHome.page.jsx';
import Services from './Pages/Services/Services.page.jsx';
import About from './Pages/About/About.page.jsx';
import Privacy from './Pages/PrivacyPolicy/Privacy.page.jsx';
import PdfGenerator from './Pages/PdfGenerator/PdfGenerator.page.jsx';

function App() {
  return (
   
    <AppProviders>
      <Applayout>
        <Suspense >
          <Routes>
            <Route path="/" element={<Brand />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/createBrand" element={<CreateBrand />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/category" element={<Category />} />
            <Route path="category/createcategory" element={<CreateNewCategory />} />
            <Route path="/Product" element={<Product />} />
            <Route path="product/createproduct" element={<CreateProduct />} />
            <Route path="product/editproduct" element={<CreateProduct />} />
            <Route path="brand/createbrand" element={<CreateBrand />} />
            <Route path="/privacyPolicy" element={<Privacy />} />
          </Routes>
        </Suspense>
      </Applayout>
    </AppProviders>
  );
}

export default App;