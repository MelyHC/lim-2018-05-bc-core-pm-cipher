describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz'), 'hijklmnopqrstuvwxyzabcdefg');
    });

    it('debería retornar "3456789012" para "0123456789" con offset 33', () => {
      assert.equal(cipher.encode(33, '0123456789'), '3456789012');
    });

    it('debería retornar "áéíóúÁÉÍÓÚ" para "áéíóúÁÉÍÓÚ"', () => {
      assert.equal(cipher.encode(33, 'áéíóúÁÉÍÓÚ'), 'áéíóúÁÉÍÓÚ');
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg'), 'abcdefghijklmnopqrstuvwxyz');
    });

    it('debería retornar "0123456789" para "3456789012" con offset 33', () => {
      assert.equal(cipher.decode(33, '3456789012'), '0123456789');
    });

    it('debería retornar "áéíóúÁÉÍÓÚ" para "áéíóúÁÉÍÓÚ"', () => {
      assert.equal(cipher.decode(33, 'áéíóúÁÉÍÓÚ'), 'áéíóúÁÉÍÓÚ');
    });

  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => {
      assert.equal(typeof cipher.createCipherWithOffset(), 'object');
    });

    describe('cipher.creatCipherWithOffset().encode()', () => {

      it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
        assert.equal(cipher.createCipherWithOffset(33).encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
      });
    
      it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
        assert.equal(cipher.createCipherWithOffset(33).encode('abcdefghijklmnopqrstuvwxyz'), 'hijklmnopqrstuvwxyzabcdefg');
      });

      it('debería retornar "3456789012" para "0123456789" con offset 33', () => {
        assert.equal(cipher.createCipherWithOffset(33).encode('0123456789'), '3456789012');
      });

      it('debería retornar "áéíóúÁÉÍÓÚ" para "áéíóúÁÉÍÓÚ"', () => {
        assert.equal(cipher.createCipherWithOffset(33).encode('áéíóúÁÉÍÓÚ'), 'áéíóúÁÉÍÓÚ');
      });

    });

    describe('cipher.creatCipherWithOffset().encode()', () => {

      it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
        assert.equal(cipher.createCipherWithOffset(33).decode('HIJKLMNOPQRSTUVWXYZABCDEFG'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      });

      it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
        assert.equal(cipher.createCipherWithOffset(33).decode('hijklmnopqrstuvwxyzabcdefg'), 'abcdefghijklmnopqrstuvwxyz');
      });

      it('debería retornar "0123456789" para "3456789012" con offset 33', () => {
        assert.equal(cipher.createCipherWithOffset(33).decode('3456789012'), '0123456789');
      });

      it('debería retornar "áéíóúÁÉÍÓÚ" para "áéíóúÁÉÍÓÚ"', () => {
        assert.equal(cipher.createCipherWithOffset(33).decode('áéíóúÁÉÍÓÚ'), 'áéíóúÁÉÍÓÚ');
      });

    });
    
  });

});
