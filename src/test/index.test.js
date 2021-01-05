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
        .set("Sandbox-Key", process.env.SANDBOX_KEY)
        .send(details)
        .end((err, res) => {
          if (err) done(err);

          expect(res.body).to.have.a.property("success");
          expect(res.body).to.have.a.property("plans");
          done();
        });
    });
    })

    describe("ResetBVN /bvn/reset", () => {
        it("should list the plans", done => {
          request(app)
            .post("/api/v1/plans")
            .set("Connection", "keep alive")
            .set("Content-Type", "application/json")
            .set("Sandbox-Key", process.env.SANDBOX_KEY)
            .set("OrganisationCode", process.env.ORGANISATION_CODE)
            .send(details)
            .end((err, res) => {
              if (err) done(err);
    
              expect(res.body).to.have.a.property("success");
              expect(res.body).to.have.a.property("requestCredentials");
              done();
            });
        });
    })
})
