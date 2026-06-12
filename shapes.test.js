describe('Validación de la vista de UI', () => {
  it('Debería tener exactamente 3 botones', () => {
    const botonesEsperados = 3;
    const botonesActuales = 2; 
    expect(botonesActuales).toBe(botonesEsperados);
  });
});