import request from "supertest";
import { expect } from "chai";
import app from "../../app";


describe("FSI Test Container", () => {

  afterEach("close connection", done => {
    app.close();
    done();
  });

  describe("Plans /plans", () => {
    it("should list the plans", done => {
      request(app)
        .get("/api/v1/plans")
        .set("Connection", "keep alive")
        .set("Content-Type", "application/json")
        .send(details)
        .end((err, res) => {
          if (err) done(err);

          expect(res.body).to.have.a.property("success");
          expect(res.body).to.have.a.property("plans");
          done();
        });
    });
    })
})
