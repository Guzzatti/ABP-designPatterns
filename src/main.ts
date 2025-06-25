import { ComputerComponents } from "./comportamentais/chain_of_responsability/components/ComputerComponents";
import { CPUValidator } from "./comportamentais/chain_of_responsability/validators/CPUValidator";
import { RAMValidator } from "./comportamentais/chain_of_responsability/validators/RAMValidator";
import { StorageValidator } from "./comportamentais/chain_of_responsability/validators/StorageValidator";
import { PowerSupplyValidator } from "./comportamentais/chain_of_responsability/validators/PowerSupplyValidator";
import { CaseValidator } from "./comportamentais/chain_of_responsability/validators/CaseValidator";
import { IComputadorBuilder } from "./criacionais/builder/IComputadorBuilder";
import { ComputadorBuilder } from "./criacionais/builder/ComputadorBuilder";
import { PresetComputadorBuilder } from "./criacionais/builder/PresetComputadorBuilder";
import { IntelFactory, AmdFactory, createComputer } from "./criacionais/abstractfactory/abstractFactory";
import { Computador } from "./estrutural/composite/Computador";
import { KitComponentes } from "./estrutural/composite/KitComponentes";  

console.log("\n---------EXEMPLO DE USO - CHAIN OF RESPONSABILITY:---------\n")

const cpuValidator = new CPUValidator();
const ramValidator = new RAMValidator();
const storageValidator = new StorageValidator();
const powerSupplyValidator = new PowerSupplyValidator();
const caseValidator = new CaseValidator();

cpuValidator
  .setNext(ramValidator)
  .setNext(storageValidator)
  .setNext(powerSupplyValidator)
  .setNext(caseValidator);

const pcChain: ComputerComponents = {
  cpu: "Intel i7",
  ramGB: 4, 
  storageGB: 256,
  powerSupplyW: 400, 
  case: "", 
};

const errors = cpuValidator.validate(pcChain);

if (errors.length === 0) {
  console.log("✅ Computador válido! Pode montar sem medo!");
} else {
  console.log("❌ Erros na configuração do computador:");
  errors.forEach((error) => console.log("- " + error));
}

console.log("\n---------EXEMPLO DE USO - BUILDER:---------\n")

const builder: IComputadorBuilder = new ComputadorBuilder();
const pcBuilder = builder
  .setProcessador("Intel Core i7-12700K")
  .setPlacaMae("ASUS Z690")
  .setMemoriaRAM("32GB DDR5")
  .setArmazenamento("1TB SSD NVMe")
  .setPlacaDeVideo("NVIDIA RTX 4070")
  .setFonte("750W 80 Plus Gold")
  .setGabinete("Mid Tower com RGB")
  .setSistemaOperacional("Windows 11 Pro")
  .build();
console.log("PC personalizado via interface:", pcBuilder);

const builder2: IComputadorBuilder = new PresetComputadorBuilder("GAMER");
const pcBuilder2 = builder2.build();
console.log("PC Gamer pré-montado:", pcBuilder2);

console.log("\n---------EXEMPLO DE USO - ABSTRACT FACTORY:---------\n")

const intelPC_AF = createComputer(new IntelFactory());
intelPC_AF.displaySpecs();

const amdPC_AF = createComputer(new AmdFactory());
amdPC_AF.displaySpecs();

console.log("\n---------EXEMPLO DE USO - COMPOSITE:---------\n")

console.log("\n=== Computador Personalizado ===\n");
const pcPersonalizado = new Computador();

pcPersonalizado.adicionarProcessador("AMD Ryzen 7 5800X", 1500, "3.8-4.7GHz, 8 cores");
pcPersonalizado.adicionarPlacaMae("MSI B550", 600, "Socket AM4, DDR4");
pcPersonalizado.adicionarMemoriaRAM("32GB DDR4", 800, "3600MHz, RGB");
pcPersonalizado.adicionarArmazenamento("1TB SSD NVMe", 400, "PCIe 3.0");
pcPersonalizado.adicionarPlacaDeVideo("NVIDIA RTX 3070", 3000, "8GB GDDR6");
pcPersonalizado.adicionarFonte("750W", 400, "80 Plus Gold");
pcPersonalizado.adicionarGabinete("Mid Tower", 250, "ATX, RGB");
pcPersonalizado.adicionarSistemaOperacional("Windows 11 Home", 600);

console.log(pcPersonalizado.obterResumo());

console.log("\n=== Kit Gamer Pré-configurado ===\n");
const pcGamer = new Computador();
const kitGamer = KitComponentes.criarKitGamer();
pcGamer.adicionarKit(kitGamer);
console.log(pcGamer.obterResumo());

console.log("\n=== Validação de Configuração ===\n");
const pcIncompleto = new Computador();
pcIncompleto.adicionarProcessador("Intel i5", 1000);

const validacao = pcIncompleto.validarConfiguracao();
console.log(`Configuração válida: ${validacao.valido}`);

if (!validacao.valido) {
    console.log("Erros encontrados:");
    validacao.erros.forEach(erro => console.log(`- ${erro}`));
}

console.log("\n=== Misturando Kits e Componentes Individuais ===\n");
const pcMisto = new Computador();
const kitBasico = KitComponentes.criarKitBasico();
pcMisto.adicionarKit(kitBasico);

// Upgrades no kit básico
pcMisto.adicionarPlacaDeVideo("NVIDIA GTX 1660", 1500, "6GB GDDR5 - Upgrade");
pcMisto.adicionarMemoriaRAM("16GB DDR4 Adicional", 400, "3200MHz - Expansão");

console.log(pcMisto.obterResumo());
