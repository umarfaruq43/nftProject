import Steps from "../assets/step.jpg";

function Product() {
  const steps = [
    {
      id: 1,
      details: "lorem is just a dummy word in the printign press industries",
    },
    {
      id: 2,
      details: "lorem is just a dummy word in the printign press industries",
    },
    {
      id: 3,
      details: "lorem is just a dummy word in the printign press industries",
    },
    {
      id: 4,
      details: "lorem is just a dummy word in the printign press industries",
    },
    {
      id: 5,
      details: "lorem is just a dummy word in the printign press industries",
    },
    {
      id: 6,
      details: "lorem is just a dummy word in the printign press industries",
    },
  ];
  return (
    <div>
      <div className="tab-content py-5 mx-2 mb-5">
        <div id="tab-1" className="tab-pane fade show p-0 active">
          <div className="row g-4">
            {steps.map(({ id, details }) => {
              return (
                <div className="col-lg-6" key={id}>
                  <div className="d-flex align-items-center">
                    <img
                      className="flex-shrink-0 img-fluid rounded"
                      src={Steps}
                      alt="next step"
                      style={{ width: 80 }}
                    ></img>
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2 fw-bold">
                        <span>Step {id} </span>
                      </h5>
                      <small className="fst-italic">{details}</small>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <img
                  className="flex-shrink-0 img-fluid rounded"
                  src={Steps}
                  alt="next step"
                  style={{ width: 80 }}
                ></img>
                <div className="w-100 d-flex flex-column text-start ps-4">
                  <h5 className="d-flex justify-content-between border-bottom pb-2 fw-bold">
                    <span>Lobster Sauce</span>
                  </h5>
                  <small className="fst-italic">
                    An amazing sauce made of one of the best crustaceans - The
                    Lobster
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <img
                  className="flex-shrink-0 img-fluid rounded"
                  src={Steps}
                  alt="next step"
                  style={{ width: 80 }}
                ></img>
                <div className="w-100 d-flex flex-column text-start ps-4">
                  <h5 className="d-flex justify-content-between border-bottom pb-2 fw-bold">
                    <span>Vegetable Pizza</span>
                  </h5>
                  <small className="fst-italic">
                    Six wonderful pieces of sliced pizza, with extra vegetables
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <img
                  className="flex-shrink-0 img-fluid rounded"
                  src={Steps}
                  alt="next step"
                  style={{ width: 80 }}
                ></img>
                <div className="w-100 d-flex flex-column text-start ps-4">
                  <h5 className="d-flex justify-content-between border-bottom pb-2 fw-bold">
                    <span>Bread Buns</span>
                  </h5>
                  <small className="fst-italic">Bread buns mixed with pepper</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <img
                  className="flex-shrink-0 img-fluid rounded"
                  src={Steps}
                  alt="next step"
                  style={{ width: 80 }}
                ></img>
                <div className="w-100 d-flex flex-column text-start ps-4">
                  <h5 className="d-flex justify-content-between border-bottom pb-2 fw-bold">
                    <span>Standard Lunch</span>
                  </h5>
                  <small className="fst-italic">
                    A combination of different meals for your afternoon, Bon
                    Apetite
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <img
                  className="flex-shrink-0 img-fluid rounded"
                  src={Steps}
                  alt="next step"
                  style={{ width: 80 }}
                ></img>
                <div className="w-100 d-flex flex-column text-start ps-4">
                  <h5 className="d-flex justify-content-between border-bottom pb-2 fw-bold">
                    <span>Noodle Fries</span>
                  </h5>
                  <small className="fst-italic">
                    Have you tasted noodle fries before? This one might just be
                    the best yet
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <img
                  className="flex-shrink-0 img-fluid rounded"
                  src={Steps}
                  alt="next step"
                  style={{ width: 80 }}
                ></img>
                <div className="w-100 d-flex flex-column text-start ps-4">
                  <h5 className="d-flex justify-content-between border-bottom pb-2 fw-bold">
                    <span>Pepperoni Pizza</span>
                  </h5>
                  <small className="fst-italic">
                    This combination with extra cheese is for those who have a
                    high taste for awesomeness :)
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <img
                  className="flex-shrink-0 img-fluid rounded"
                  src={Steps}
                  alt="next step"
                  style={{ width: 80 }}
                ></img>
                <div className="w-100 d-flex flex-column text-start ps-4">
                  <h5 className="d-flex justify-content-between border-bottom pb-2 fw-bold">
                    <span>Chicken Burger</span>
                  </h5>
                  <small className="fst-italic">
                    Delivering the very best of fried chicken
                  </small>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
