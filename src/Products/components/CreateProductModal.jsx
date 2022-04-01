import React from "react";

const CreateProductModal = () => {
  return (
    <div
      className="modal fade"
      id="createProductModal"
      tabindex="-1"
      aria-labelledby="createProductModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createProductModal">
              Create New Product
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row mb-2">
              <div className="col">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="212 men - 100ml"
                />
              </div>
              <div className="col">
                <label htmlFor="brand">Brand</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="brand"
                  name="brand"
                >
                  <option selected disabled>
                    Select Brand
                  </option>
                  <option value="1">Tom Ford</option>
                  <option value="2">Smart Collection</option>
                  <option value="3">Eleganza</option>
                </select>
              </div>
            </div>
            <div className="row my-2">
              <div className="col col-md-12">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  aria-label="description"
                  placeholder="she just can't resist"
                ></textarea>
              </div>
            </div>
            <div className="row my-2">
              <div className="col">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  placeholder="15,000"
                  min={1}
                />
              </div>
              <div className="col">
                <label htmlFor="stock">Stock</label>
                <input
                  type="number"
                  className="form-control"
                  id="stock"
                  name="stock"
                  placeholder="1"
                  defaultValue={1}
                  min={1}
                />
              </div>
            </div>
            <div className="row my-2">
              <div className="col">
                <label htmlFor="category">Category</label>
                <select
                  className="form-select"
                  aria-label="Category select"
                  id="category"
                  name="category"
                >
                  <option selected disabled>
                    Select Category
                  </option>
                  <option value="designer">Designer</option>
                  <option value="arabian oil">Arabian Oil</option>
                  <option value="oud">Oud</option>
                  <option value="home fragrance">Home Fragrance</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="size">Size</label>
                <select
                  className="form-select"
                  aria-label="Size select"
                  id="size"
                  name="size"
                >
                  <option selected disabled>
                    Select Size
                  </option>
                  <option value="30ml">30ml</option>
                  <option value="50ml">50ml</option>
                  <option value="75ml">75ml</option>
                  <option value="100ml">100ml</option>
                  <option value="200ml">200ml</option>
                  <option value="250ml">250ml</option>
                  <option value="500ml">500ml</option>
                  <option value="1L">1L</option>
                  <option value="2L">2L</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" className="form-control">
                  <option selected value="unisex">
                    Unisex
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="image">Image</label>
                <input
                  class="form-control"
                  type="file"
                  id="image"
                  name="image"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;
