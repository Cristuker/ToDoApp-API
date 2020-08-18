module.exports = {
    roots:['<rootDir>/src'],
    collectCoverageFrom:['<rootDir>/src/**/*.ts'], // Quero cobertura de testes e onde eu quero pegar os meus arquivos para fazer cobertura de testes
    coverageProvider: 'v8',
    testEnvironment: 'node',
    // A map from regular expressions to paths to transformers
    transform: {
        '.+\\.ts$': 'ts-jest' //Qualquer arquivo com .ts no final eu quero ultilizar a biblioteca ts-jest. Ele vai converter os arquivo para js antes de fazer os testes
    },
};
