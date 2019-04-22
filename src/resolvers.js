let { products: shoes } = require('./data');

const createShoe = ({ shoe }) => {
    shoes = [...shoes, { ...shoe, id: Date.now() }];
    return Promise.resolve(shoe);
};

const getShoes = () => Promise.resolve(shoes);

const getShoeById = (shoeId) =>
    Promise.resolve(shoes.find(({ id }) => id == shoeId));

module.exports = {
    Mutation: {
        createShoe: async (_, { product }) => createShoe({ product })
    },
    Query: {
        shoes: async () => getShoes(),
        shoe: async (_, { id }) => getShoeById(id),
    }
}