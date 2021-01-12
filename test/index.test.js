import request from "supertest";
import { expect } from "chai";
import app from "../src/app";


describe("FSI Test Container", () => {

  afterEach("close connection", done => {
    app.close();
    done();
  });

  describe("Plans /plans", () => {
    it("should return the list of health plans", done => {
      request(app)
        .get("/api/v1/plans")
        .set("Connection", "keep alive")
        .set("Content-Type", "application/json")
        .set("Sandbox-Key", process.env.SANDBOX_KEY)
        .end((err, res) => {
          if (err) done(err);

          expect(res.status).to.equal(200);
          expect(res.body).to.have.a.property("plans")
          done();
        });
    });
    })

    describe("BVN /bvn/reset", () => {
        it("should return the BVN request credentials", done => {
          request(app)
            .get("/api/v1/bvn/reset")
            .set("Connection", "keep alive")
            .set("Content-Type", "application/json")
            .set("Sandbox-Key", process.env.SANDBOX_KEY)
            .set("OrganisationCode", process.env.ORGANISATION_CODE)
            .end((err, res) => {
              if (err) done(err);
    
              expect(res.status).to.equal(200);
              expect(res.body).to.have.a.property("resetCredentials");
              done();
            });
        });
    })

    describe("BVN /bvn/verify", () => {
        it("should verify the BVN and return the owners credentials", done => {
          request(app)
            .post("/api/v1/bvn/verify")
            .send({
                bvn: '12345678901',
                sandbox_key: process.env.SANDBOX_KEY,
                organisation_code: process.env.ORGANISATION_CODE,
                password: "^o'e6EXK5T ~^j2=",
                ivkey: "eRpKTBjdOq6T67D0",
                aes_key: "9+CZaWqfyI/fwezX"
            })
            .end((err, res) => {
              if (err) done(err);
    
              expect(res.status).to.equal(200);
              expect(res.body).to.have.a.property("details");
              done();
            });
        });
    })
})
