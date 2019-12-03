module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    coverageDirectory: 'test/coverage',
    testRegex: '/test/birb.test.ts',
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'ts'],
};
