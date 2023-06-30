
import { Product } from "../interfaces/Products"

export const items: Product[] = [

   /* { id: 1, name: 'Correa PetMascota', imagen: 'https://w7.pngwing.com/pngs/699/663/png-transparent-american-pit-bull-terrier-dog-collar-pet-shop-accessory-miscellaneous-leather-pet-thumbnail.png',price: 20.5 },
    { id: 2, name: 'Cortadora Pet', imagen: 'https://promart.vteximg.com.br/arquivos/ids/5979937-1000-1000/image-b90f723df6f845a2ba4daf6e9a727dad.jpg?v=637931841477370000',price: 20.5 },
    { id: 3, name: 'Pack Juguete', imagen: 'https://promart.vteximg.com.br/arquivos/ids/2567338-1000-1000/image-60691779b8da48db800809b00c9c63b0.jpg?v=637705364409200000',price: 26.5 },
    { id: 4, name: 'Mesa PetMascota', imagen: 'https://promart.vteximg.com.br/arquivos/ids/645043-1000-1000/image-17a2f3c48c2240fc90c9c7ef96fcd7db.jpg?v=637443430504530000',price: 29.5 },
    { id: 5, name: 'Hueso Pet Juegos', imagen: 'https://img.freepik.com/psd-premium/maqueta-hueso-masticar-etiqueta-juguetes_1332-17701.jpg?w=1380',price:  45.5 },
    { id: 6, name: 'Combo Rosado', imagen: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-comida-mascotas_114360-9420.jpg?w=740&t=st=1687907785~exp=1687908385~hmac=b404b5b3e30943b5a5af04fbcbf973577bb4edc86f13ae428346b6376b861965' ,price:  24.5},
    { id: 7, name: 'Correa Estrellita + Plato redondo', imagen: 'https://img.freepik.com/psd-premium/maqueta-comedero-hexagonal-mascotas-perspectiva_1332-18109.jpg?size=626&ext=jpg&ga=GA1.2.963785257.1687907631&semt=ais',price: 26.5 },
    { id: 8, name: 'Maleta Pet Rosa', imagen: 'https://img.freepik.com/foto-gratis/arreglo-bolsa-rosa-mascotas_23-2148982404.jpg?size=626&ext=jpg&ga=GA1.2.963785257.1687907631&semt=ais',price:  29.5 },
    { id: 9, name: 'Maleta + Jaula', imagen: 'https://img.freepik.com/vector-gratis/portador-dos-mascotas-vector-bolsa-aislado-sobre-fondo-blanco_1284-48385.jpg?size=626&ext=jpg&ga=GA1.1.963785257.1687907631&semt=ais',price:   70.5 },
    { id: 10, name: 'Pelota Maskot', imagen: 'https://w7.pngwing.com/pngs/354/411/png-transparent-ball-dog-grooming-pet-clothing-accessories-toys-retail-sports-clothing-accessories-thumbnail.png',price: 20.5 },
    { id: 11, name: 'Collar Gato', imagen: 'https://w7.pngwing.com/pngs/582/475/png-transparent-cat-collar-dog-clothing-accessories-necklace-cat-purple-blue-animals-thumbnail.png',price: 20.5 },
    { id: 12, name: 'Mesa 2 Platos', imagen: 'https://img.freepik.com/foto-gratis/accesorios-mascotas-bodegon-cuenco-agua-comida_23-2148949565.jpg?size=626&ext=jpg&ga=GA1.1.963785257.1687907631&semt=ais',price: 26.5 },
    { id: 13, name: 'Juguetes variados', imagen: 'https://img.freepik.com/fotos-premium/concepto-accesorios-mascotas_51665-385.jpg?size=626&ext=jpg&ga=GA1.1.963785257.1687907631&semt=ais',price: 29.5 },
    { id: 14, name: 'Dispensador', imagen: 'https://img.freepik.com/psd-premium/maqueta-dispensadores-bolsas-mascotas_1332-5233.jpg?size=626&ext=jpg&ga=GA1.2.963785257.1687907631&semt=ais',price:  45.5 },
    { id: 15, name: 'Kit Peines', imagen: 'https://img.freepik.com/psd-premium/maqueta-aseo-peines-mascotas-02_1332-8738.jpg?size=626&ext=jpg&ga=GA1.2.963785257.1687907631&semt=ais' ,price:  24.5},
    { id: 16, name: 'Plato Celeste', imagen: 'https://img.freepik.com/fotos-premium/alimentos-gatos-perros-recipiente-aislado-sobre-fondo-blanco_165541-950.jpg?w=1380',price: 26.5 },
    { id: 17, name: 'Casa Rascador', imagen: 'https://img.freepik.com/vector-gratis/arbol-gatos-arbol-gatos-casa-rascador_1284-48371.jpg?size=626&ext=jpg&ga=GA1.2.963785257.1687907631&semt=ais',price:  29.5 },
    { id: 18, name: 'Maleta Patitas Rosa', imagen: 'https://img.freepik.com/foto-gratis/arreglo-bolsa-rosa-mascotas_23-2148982407.jpg?size=626&ext=jpg&ga=GA1.1.963785257.1687907631&semt=ais',price:   70.5 },
    { id: 19, name: 'Bozal de Cuero', imagen: 'https://w7.pngwing.com/pngs/364/752/png-transparent-bumas-gmbh-dog-muzzle-collar-clothing-accessories-dog-animals-fashion-clothing-accessories-thumbnail.png',price: 20.5 },
    { id: 20, name: 'Plato Morado', imagen: 'https://img.freepik.com/fotos-premium/alimentos-gatos-perros-recipiente-sobre-fondo-blanco_165541-955.jpg?size=626&ext=jpg&ga=GA1.1.963785257.1687907631&semt=ais',price: 20.5 },
    { id: 21, name: 'Plato Verde', imagen: 'https://img.freepik.com/vector-gratis/composicion-comida-seca-perros_1284-20804.jpg?size=626&ext=jpg&ga=GA1.1.963785257.1687907631&semt=ais',price: 26.5 },
    { id: 22, name: 'Plato Rojo', imagen: 'https://img.freepik.com/fotos-premium/recipiente-comida-metacrilato-cuenco-rojo-perro-o-gato-comida-aislado_77749-218.jpg?size=626&ext=jpg&ga=GA1.1.963785257.1687907631&semt=ais',price: 29.5 },
    { id: 23, name: 'Plato duo azul', imagen: 'https://img.freepik.com/fotos-premium/comida-seca-gatos-recipiente-hierro-sobre-fondo-blanco_280340-1495.jpg?size=626&ext=jpg&ga=GA1.1.963785257.1687907631&semt=ais',price:  45.5 },
    { id: 24, name: 'Super correa', imagen: 'https://img.freepik.com/psd-premium/maqueta-correa-perro-retractil-primer-plano_1332-18177.jpg?size=626&ext=jpg&ga=GA1.2.963785257.1687907631&semt=ais' ,price:  24.5},
    { id: 25, name: 'Plato de Acero + Correa Black', imagen: 'https://img.freepik.com/foto-gratis/collar-cerca-tazon-mascotas_23-2147799920.jpg?size=626&ext=jpg&ga=GA1.1.963785257.1687907631&semt=ais',price: 26.5 },
    { id: 26, name: 'Plato Pescadito', imagen: 'https://img.freepik.com/fotos-premium/comida-gatos-tazon_522560-1233.jpg?w=996',price:  29.5 },
    { id: 27, name: 'Esterocopio Pet', imagen: 'https://img.freepik.com/foto-gratis/vista-superior-hueso-papel-huella-pata-estetoscopio-dia-animales_23-2148668865.jpg?size=626&ext=jpg&ga=GA1.1.963785257.1687907631&semt=ais',price:   70.5 },
    { id: 28, name: 'Pelota Lucky Dog', imagen: 'https://w7.pngwing.com/pngs/767/861/png-transparent-clothing-accessories-graphic-design-dog-bone-electronics-fashion-clothing-accessories-thumbnail.png',price: 20.5 },
    { id: 29, name: 'Cama Orange', imagen: 'https://img.freepik.com/psd-premium/maqueta-asientos-tipo-almohada-mascotas-perspectiva_1332-8684.jpg?size=626&ext=jpg&ga=GA1.1.963785257.1687907631&semt=ais',price: 20.5 },
    { id: 30, name: 'Pack Juguete', imagen: 'https://promart.vteximg.com.br/arquivos/ids/2567338-1000-1000/image-60691779b8da48db800809b00c9c63b0.jpg?v=637705364409200000',price: 26.5 },
    { id: 31, name: 'Mesa PetMascota', imagen: 'https://promart.vteximg.com.br/arquivos/ids/645043-1000-1000/image-17a2f3c48c2240fc90c9c7ef96fcd7db.jpg?v=637443430504530000',price: 29.5 },
    { id: 32, name: 'Cortadora Pet', imagen: 'https://promart.vteximg.com.br/arquivos/ids/5979937-1000-1000/image-b90f723df6f845a2ba4daf6e9a727dad.jpg?v=637931841477370000',price:  45.5 },
    { id: 33, name: 'Pack Juguete', imagen: 'https://promart.vteximg.com.br/arquivos/ids/2567338-1000-1000/image-60691779b8da48db800809b00c9c63b0.jpg?v=637705364409200000' ,price:  24.5},
    { id: 34, name: 'Mesa PetMascota', imagen: 'https://promart.vteximg.com.br/arquivos/ids/645043-1000-1000/image-17a2f3c48c2240fc90c9c7ef96fcd7db.jpg?v=637443430504530000',price: 26.5 },
    { id: 35, name: 'Cortadora Pet', imagen: 'https://promart.vteximg.com.br/arquivos/ids/5979937-1000-1000/image-b90f723df6f845a2ba4daf6e9a727dad.jpg?v=637931841477370000',price:  29.5 },
    { id: 36, name: 'Pack Juguete', imagen: 'https://promart.vteximg.com.br/arquivos/ids/2567338-1000-1000/image-60691779b8da48db800809b00c9c63b0.jpg?v=637705364409200000',price:   70.5 },
    { id: 37, name: 'Pelota Lucky Dog', imagen: 'https://w7.pngwing.com/pngs/244/850/png-transparent-dog-houses-encapsulated-postscript-dog-house-angle-photography-cartoon-thumbnail.png',price: 20.5 },
    { id: 38, name: 'Cortadora Pet', imagen: 'https://promart.vteximg.com.br/arquivos/ids/5979937-1000-1000/image-b90f723df6f845a2ba4daf6e9a727dad.jpg?v=637931841477370000',price: 20.5 },
    { id: 39, name: 'Pack Juguete', imagen: 'https://promart.vteximg.com.br/arquivos/ids/2567338-1000-1000/image-60691779b8da48db800809b00c9c63b0.jpg?v=637705364409200000',price: 26.5 },
    { id: 40, name: 'Mesa PetMascota', imagen: 'https://promart.vteximg.com.br/arquivos/ids/645043-1000-1000/image-17a2f3c48c2240fc90c9c7ef96fcd7db.jpg?v=637443430504530000',price: 29.5 },
    { id: 41, name: 'Cortadora Pet', imagen: 'https://promart.vteximg.com.br/arquivos/ids/5979937-1000-1000/image-b90f723df6f845a2ba4daf6e9a727dad.jpg?v=637931841477370000',price:  45.5 },
    { id: 42, name: 'Pack Juguete', imagen: 'https://promart.vteximg.com.br/arquivos/ids/2567338-1000-1000/image-60691779b8da48db800809b00c9c63b0.jpg?v=637705364409200000' ,price:  24.5},
    { id: 43, name: 'Mesa PetMascota', imagen: 'https://promart.vteximg.com.br/arquivos/ids/645043-1000-1000/image-17a2f3c48c2240fc90c9c7ef96fcd7db.jpg?v=637443430504530000',price: 26.5 },
    { id: 44, name: 'Cortadora Pet', imagen: 'https://promart.vteximg.com.br/arquivos/ids/5979937-1000-1000/image-b90f723df6f845a2ba4daf6e9a727dad.jpg?v=637931841477370000',price:  29.5 },
    { id: 45, name: 'Pack Juguete', imagen: 'https://promart.vteximg.com.br/arquivos/ids/2567338-1000-1000/image-60691779b8da48db800809b00c9c63b0.jpg?v=637705364409200000',price:   70.5 },
    { id: 46, name: 'Etiqueta de Perro', imagen: 'https://w7.pngwing.com/pngs/999/746/png-transparent-dog-tag-military-soldier-pet-tag-dog-pendant-animals-army-thumbnail.png',price: 20.5 },
    { id: 47, name: 'Cortadora Pet', imagen: 'https://promart.vteximg.com.br/arquivos/ids/5979937-1000-1000/image-b90f723df6f845a2ba4daf6e9a727dad.jpg?v=637931841477370000',price: 20.5 },
    { id: 48, name: 'Pack Juguete', imagen: 'https://promart.vteximg.com.br/arquivos/ids/2567338-1000-1000/image-60691779b8da48db800809b00c9c63b0.jpg?v=637705364409200000',price: 26.5 },
    { id: 49, name: 'Mesa PetMascota', imagen: 'https://promart.vteximg.com.br/arquivos/ids/645043-1000-1000/image-17a2f3c48c2240fc90c9c7ef96fcd7db.jpg?v=637443430504530000',price: 29.5 },
    { id: 50, name: 'Cortadora Pet', imagen: 'https://promart.vteximg.com.br/arquivos/ids/5979937-1000-1000/image-b90f723df6f845a2ba4daf6e9a727dad.jpg?v=637931841477370000',price:  45.5 },
    { id: 51, name: 'Pack Juguete', imagen: 'https://promart.vteximg.com.br/arquivos/ids/2567338-1000-1000/image-60691779b8da48db800809b00c9c63b0.jpg?v=637705364409200000' ,price:  24.5},
    { id: 52, name: 'Mesa PetMascota', imagen: 'https://promart.vteximg.com.br/arquivos/ids/645043-1000-1000/image-17a2f3c48c2240fc90c9c7ef96fcd7db.jpg?v=637443430504530000',price: 26.5 },
    { id: 53, name: 'Bolsa DogCan', imagen: 'https://w7.pngwing.com/pngs/796/747/png-transparent-dog-puppy-organic-food-vegetarian-cuisine-cat-food-accessoires-dog-food-pet-dog-like-mammal-thumbnail.png',price:  29.5 },
    { id: 54, name: 'Pack Juguete', imagen: 'https://promart.vteximg.com.br/arquivos/ids/2567338-1000-1000/image-60691779b8da48db800809b00c9c63b0.jpg?v=637705364409200000',price:   70.5 },
**/
]
