import SolicitanteRepositorySql from "../src/infra/repository/SolicitanteRepositorySql";
import GetSolicitante from "../src/core/solicitante/usecases/GetSolicitante";
import CreateSolicitante from "../src/core/solicitante/usecases/CreateSolicitante";

test("Should get a Solicitante", async () => {
  const solicitanteRepositorySql = new SolicitanteRepositorySql();
  const getSolicitante = new GetSolicitante(solicitanteRepositorySql);
  const solicitante = await getSolicitante.execute("12345678912345");
  expect(solicitante.nome).toBe("Uno");
});

test("Should throw an error when Solicitante doesn't exist!", async () => {
  const solicitanteRepositorySql = new SolicitanteRepositorySql();
  const getSolicitante = new GetSolicitante(solicitanteRepositorySql);
  expect(() => getSolicitante.execute("12345678912346")
  ).rejects.toThrow("Solicitante não encontrado!")
})

