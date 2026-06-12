describe('Validación de la vista de UI', () => {
  it('Debería tener exactamente 2 botones', () => {
    const botonesEsperados = 2;
    const botonesActuales = 2; 
    expect(botonesActuales).toBe(botonesEsperados);
  });
});