// sum.spec.js

const sum = require('./sum'); // Assuming the sum.js file is in the same directory

describe('sum function', () => {
    it('should correctly calculate the sum of two numbers', () => {
        // Arrange
        const a = 5;
        const b = 3;

        // Act
        const result = sum(a, b);

        // Assert
        expect(result).toBe(8);
    });

    it('should handle negative numbers', () => {
        // Arrange
        const a = -2;
        const b = -3;

        // Act
        const result = sum(a, b);

        // Assert
        expect(result).toBe(-5);
    });

    it('should handle zero values', () => {
        // Arrange
        const a = 0;
        const b = 0;

        // Act
        const result = sum(a, b);

        // Assert
        expect(result).toBe(0);
    });
});

