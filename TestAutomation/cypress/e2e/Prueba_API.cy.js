describe('Ejercicio 2 - Validaciones de API FakeStore', () => {

  const baseUrl = 'https://fakestoreapi.com/products';

  it('Validar que el producto estrella (id 11, rate 4.8, categoría electronics y título correcto) existe', () => {
    cy.request('GET', baseUrl).then((response) => {
      expect(response.status).to.eq(200);
      const productos = response.body;

      // Buscar el producto con id 11
      const producto = productos.find(p => p.id === 11);

      expect(producto).to.exist;
      expect(producto.category).to.eq('electronics');
      expect(producto.rating.rate).to.eq(4.8);
      expect(producto.title).to.eq('Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5');
      
      cy.log(`ID: ${producto.id}`);
      cy.log(`Título: ${producto.title}`);
      cy.log(`Categoría: ${producto.category}`);
      cy.log(`Rate: ${producto.rating.rate}`);
    });
  });

  it('Validar que en la categoría electronics existan 6 productos y que esté el producto id 10', () => {
    cy.request('GET', `${baseUrl}/category/electronics`).then((response) => {
      expect(response.status).to.eq(200);
      const productos = response.body;

      expect(productos.length).to.eq(6);
      const existeId10 = productos.some(p => p.id === 10);
      expect(existeId10).to.be.true;
       productos.forEach((p, i) => {
        cy.log(`${i + 1}. ID: ${p.id} | Título: ${p.title} | Categoría: ${p.category}`);
      });

    });
  });

  it('Visualizar los productos por categoría electronics con límite de 3 resultados', () => {
    cy.request('GET', `${baseUrl}/category/electronics`).then((response) => {
      expect(response.status).to.eq(200);
      const productos = response.body;

      const limit = 3;
      const limitados = productos.slice(0, limit);

      cy.log('Mostrando solo los primeros 3 productos:');
        limitados.forEach((p, i) => {
        cy.log(`${i + 1}. ID: ${p.id} | Título: ${p.title} | Categoría: ${p.category}`);
      });


      expect(limitados.length).to.eq(3);
    });
  });

});
