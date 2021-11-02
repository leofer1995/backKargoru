
const Concept = require('./models/Concept');

const Client = require('./models/Client');

const Quotation = require('./models/Quotation');

const Seller = require('./models/Seller');

// realación cliente <---> cotizacion
Client.hasMany(Quotation);
Quotation.belongsTo(Client);
// relacion cliente <---> concepto
Client.hasMany(Concept);
Concept.belongsTo(Client);
// relacion cotizacion <---> concepto
Quotation.hasMany(Concept);
Concept.belongsTo(Quotation);

// relacion cotizacion <---> vendedor
// Seller.hasMany(Quotation); 
// Quotation.belongsTo(Seller);