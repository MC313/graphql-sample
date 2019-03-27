const { products: shoes } = require('./data');

const createShoe = ({ shoe }) => {
    const shoeData = [...shoes, { ...shoe, id: Date.now() }];
    return Promise.resolve(shoe);
};

const getShoes = () => Promise.resolve(shoes);

const getShoeById = (shoeId) => {
    return Promise.resolve(shoes.find(({ id }) => id == shoeId));
};

module.exports = {
    Mutation: {
        createShoe: async (_, { product }) => createShoe({ product })
    },
    Query: {
        shoes: async () => getShoes(),
        shoe: async (_, { id }) => getShoeById(id),
    }
}