describe(Plane, () => { 
  
  describe('New instance', () => {
    it('Will create a new instance of plane', () => {
      expect(new Plane()).toBeInstanceOf(Plane);
    });
  }); 
});