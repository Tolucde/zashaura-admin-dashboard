import React from "react";
import CreateProductModal from "./components/CreateProductModal";

const Products = () => {
  const view_product = (id) => {
    console.log(id);
  };
  return (
    <>
      <div class="float-end">
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#createProductModal"
        >
          Create Product
        </button>
      </div>
      <CreateProductModal />
      <div className="container-fluid text-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Category</th>
              <th scope="col">Gender</th>
              <th scope="col">Size</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => view_product(1)}>
              <th scope="row">
                <img src={""} alt="product 1" height="40" width="40" />
              </th>
              <td>212 men - 100ml</td>
              <td>Tom Ford</td>
              <td>15,000</td>
              <td>20</td>
              <td>Designer</td>
              <td>Male</td>
              <td>100ml</td>
            </tr>
            <tr onClick={() => view_product(1)}>
              <th scope="row">
                <img src="" alt="product 1" />
              </th>
              <td>212 men - 100ml</td>
              <td>Tom Ford</td>
              <td>15,000</td>
              <td>20</td>
              <td>Designer</td>
              <td>Male</td>
              <td>100ml</td>
            </tr>
            <tr onClick={() => view_product(1)}>
              <th scope="row">
                <img src="" alt="product 1" />
              </th>
              <td>212 men - 100ml</td>
              <td>Tom Ford</td>
              <td>15,000</td>
              <td>20</td>
              <td>Designer</td>
              <td>Male</td>
              <td>100ml</td>
            </tr>
            <tr onClick={() => view_product(1)}>
              <th scope="row">
                <img src="" alt="product 1" />
              </th>
              <td>212 men - 100ml</td>
              <td>Tom Ford</td>
              <td>15,000</td>
              <td>20</td>
              <td>Designer</td>
              <td>Male</td>
              <td>100ml</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
