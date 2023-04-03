import SolicitanteRepositorySql from "../src/infra/repository/SolicitanteRepositorySql";
import GetSolicitante from "../src/core/solicitante/usecases/GetSolicitante";
import CreateSolicitante from "../src/core/solicitante/usecases/CreateSolicitante";
import GetAllSolicitantes from "../src/core/solicitante/usecases/GetAllSolicitantes";
import UpdateSolicitante from "../src/core/solicitante/usecases/UpdateSolicitante";

test("Should get a Solicitante", async () => {
  const solicitanteRepositorySql = new SolicitanteRepositorySql();
  const getSolicitante = new GetSolicitante(solicitanteRepositorySql);
  const solicitante = await getSolicitante.execute("12345678912345");
  expect(solicitante.nome).toBe("Uno");
});

test("Should throw an error when Solicitante doesn't exist!", () => {
  const solicitanteRepositorySql = new SolicitanteRepositorySql();
  const getSolicitante = new GetSolicitante(solicitanteRepositorySql);
  expect(() => getSolicitante.execute("12345678912346")).rejects.toThrow(
    "Solicitante não encontrado!"
  );
});

test("Should create a Solicitante", async () => {
  const solicitanteRepositorySql = new SolicitanteRepositorySql();
  const createSolicitante = new CreateSolicitante(solicitanteRepositorySql);
  const solicitante = await createSolicitante.execute(
    "09876543210987",
    "teste",
    "11111111",
    "rua teste",
    "testopolis",
    "testando",
    "19989971071",
    "contato@teste.com"
  );
  expect(solicitante.nome).toBe("teste");
});

test("Should throw an error when Solicitante already exists", () => {
  const solicitanteRepositorySql = new SolicitanteRepositorySql();
  const createSolicitante = new CreateSolicitante(solicitanteRepositorySql);
  expect(async () => {
    await createSolicitante.execute(
      "12345678912345",
      "Uno",
      "11111111",
      "rua teste",
      "testopolis",
      "testando",
      "19989971071",
      "contato@teste.com"
    );
  }).rejects.toThrow("CNPJ já cadastrado!");
});

test("Should get all Solicitantes", async () => {
  const solicitanteRepositorySql = new SolicitanteRepositorySql();
  const getAllSolicitantes = new GetAllSolicitantes(solicitanteRepositorySql);
  const solicitantes = await getAllSolicitantes.execute();
  expect(solicitantes.length).toBe(2);
});

test("Should update a solicitante", async () => {
  const solicitanteRepositorySql = new SolicitanteRepositorySql();
  const updateSolicitante = new UpdateSolicitante(solicitanteRepositorySql);
  const solicitante = await updateSolicitante.execute(
    "09876543210987",
    "19989970787",
    "testando@update.com"
  );
  expect(solicitante.telefone).toBe("19989970787");
  expect(solicitante.email).toBe("testando@update.com");
});

test("Should not update field if no data provided", async () => {
  const solicitanteRepositorySql = new SolicitanteRepositorySql();
  const updateSolicitante = new UpdateSolicitante(solicitanteRepositorySql);
  const solicitante = await updateSolicitante.execute("09876543210987", "", "");
  expect(solicitante.telefone).toBe("19989970787");
  expect(solicitante.email).toBe("testando@update.com");
});

test("Should throw an error when solicitante doesn't exist", async () => {
  const solicitanteRepositorySql = new SolicitanteRepositorySql();
  const updateSolicitante = new UpdateSolicitante(solicitanteRepositorySql);
  expect(async () => {
    await updateSolicitante.execute("09876543210955", "", "");
  }).rejects.toThrow("Solicitante não encontrado!");
});
