// Interfaces dos componentes
export interface Processor { name: string }
export interface Motherboard { name: string }
export interface Ram { name: string }
export interface StorageComponent { name: string }
export interface Gpu { name: string }
export interface PowerSupply { name: string }
export interface CaseComponent { name: string }

// Interface da Abstract Factory para montagem de computadores
export interface ComputerFactory {
  createProcessor(): Processor
  createMotherboard(): Motherboard
  createRam(): Ram
  createStorage(): StorageComponent
  createGpu(): Gpu
  createPowerSupply(): PowerSupply
  createCase(): CaseComponent
}

// Fábrica concreta para Intel
export class IntelFactory implements ComputerFactory {
  createProcessor(): Processor        { return { name: 'Intel Core i7-12700K' } }
  createMotherboard(): Motherboard   { return { name: 'ASUS Z690' } }
  createRam(): Ram                   { return { name: '32GB DDR5' } }
  createStorage(): StorageComponent  { return { name: '1TB SSD NVMe' } }
  createGpu(): Gpu                   { return { name: 'NVIDIA RTX 4070' } }
  createPowerSupply(): PowerSupply   { return { name: '750W 80 Plus Gold' } }
  createCase(): CaseComponent        { return { name: 'Mid Tower com RGB' } }
}

// Fábrica concreta para AMD
export class AmdFactory implements ComputerFactory {
  createProcessor(): Processor        { return { name: 'AMD Ryzen 9 7900X' } }
  createMotherboard(): Motherboard   { return { name: 'MSI X670E' } }
  createRam(): Ram                   { return { name: '32GB DDR5' } }
  createStorage(): StorageComponent  { return { name: '1TB SSD NVMe' } }
  createGpu(): Gpu                   { return { name: 'NVIDIA RTX 4070' } }
  createPowerSupply(): PowerSupply   { return { name: '750W 80 Plus Gold' } }
  createCase(): CaseComponent        { return { name: 'Mid Tower com RGB' } }
}

// 🖥️ Classe Computer que recebe as especificações e exibe no console
export class Computer {
  constructor(
    public processor: string,
    public motherboard: string,
    public ram: string,
    public storage: string,
    public gpu: string,
    public powerSupply: string,
    public caseType: string
  ) {}

  displaySpecs(): void {
    console.log('Especificações do Computador:')
    console.log(`Processador: ${this.processor}`)
    console.log(`Placa Mãe: ${this.motherboard}`)
    console.log(`Memória RAM: ${this.ram}`)
    console.log(`Armazenamento: ${this.storage}`)
    console.log(`Placa de Vídeo: ${this.gpu}`)
    console.log(`Fonte: ${this.powerSupply}`)
    console.log(`Gabinete: ${this.caseType}`)
    console.log('—'.repeat(30))
  }
}

// Função utilitária para criar o computador usando a factory escolhida
export function createComputer(factory: ComputerFactory): Computer {
  const p = factory.createProcessor().name
  const m = factory.createMotherboard().name
  const r = factory.createRam().name
  const s = factory.createStorage().name
  const g = factory.createGpu().name
  const ps = factory.createPowerSupply().name
  const c = factory.createCase().name
  return new Computer(p, m, r, s, g, ps, c)
}
