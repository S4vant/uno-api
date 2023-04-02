-- CreateTable
CREATE TABLE "Solicitante" (
    "cnpj" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Solicitante_pkey" PRIMARY KEY ("cnpj")
);

-- CreateIndex
CREATE UNIQUE INDEX "Solicitante_nome_key" ON "Solicitante"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Solicitante_telefone_key" ON "Solicitante"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "Solicitante_email_key" ON "Solicitante"("email");
