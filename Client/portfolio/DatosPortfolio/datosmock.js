const JsImage = require('./images/logosTech/JS.svg.png')
const HTMlImg = require('./images/logosTech/HTML.png')
const CSSimg = require('./images/logosTech/CSS.png')
const ReactImg = require('./images/logosTech/react.png')
const NextImg = require('./images/logosTech/Next.png')
const CloudGog = require('./images/logosTech/googleCloud.png')
const expressImg = require('./images/logosTech/express.png')
const nodeJSImg = require('./images/logosTech/Node.png')
const postgreImg = require('./images/logosTech/postgre.png')
const reduxImg = require('./images/logosTech/redux.png')
const tailwindImg = require('./images/logosTech/tailwind.png')
const sequelizeImg = require('./images/logosTech/download.png')
const tremorImg = require('./images/logosTech/tremor.png')
const axiosImg = require('./images/logosTech/axios.png')
const TypescriptImg = require('./images/logosTech/Typescript.png')

const datosProyectos = [
    {
        id: 1,
        name: 'El Festin',
        shortDescript: 'E-commerce',
        link:'https://pf-front-end-grupo3.vercel.app/',
        description:'Aplicación completa y atractiva desarrollada para el restaurante "El Festín", pero con la flexibilidad de adaptarse sin esfuerzo a cualquier otro establecimiento de gastronomía. Todo esto con tecnologias de punta como Node, Express, React, Mercado Pago.',
        Implementations:'Carrito de Compras Integrado, personalización de órdenes, selector de comidas con múltiples filtros, pagos seguros integrados, opiniones y ranking por platos, sistema de cuentas, panel de administración',
        icon:'https://res.cloudinary.com/dljgbq48k/image/upload/v1698162445/elFestinIcon_ypladg.jpg',
         images:[
            "https://res.cloudinary.com/dt2o36ezn/image/upload/v1694119472/Portfolio/el%20festin/ph1_dqx5st.webp",
            "https://res.cloudinary.com/dt2o36ezn/image/upload/v1694119472/Portfolio/el%20festin/ph2_fiopok.webp",
            "https://res.cloudinary.com/dt2o36ezn/image/upload/v1694119472/Portfolio/el%20festin/ph3_u9djck.webp",
            "https://res.cloudinary.com/dt2o36ezn/image/upload/v1694119472/Portfolio/el%20festin/ph4_lt1qjx.webp",
            "https://res.cloudinary.com/dt2o36ezn/image/upload/v1694119472/Portfolio/el%20festin/ph5_t1di3k.webp",
            "https://res.cloudinary.com/dt2o36ezn/image/upload/v1694119472/Portfolio/el%20festin/ph6_jtfey1.webp",
            "https://res.cloudinary.com/dt2o36ezn/image/upload/v1694119471/Portfolio/el%20festin/ph7_w9t4v8.webp",
            "https://res.cloudinary.com/dt2o36ezn/image/upload/v1694119695/Portfolio/el%20festin/ph8_w4lmuk.webp"
          ],
          techs:[
            {
                id: 1,
                name:'JavaScript',
                type:'Lenguaje',
                image: JsImage
            },
            {
                id: 2,
                name: 'React JS',
                type: 'Framework',
                image: ReactImg
            },
            {
                id:3,
                name:'Node',
                type:'Entorno',
                image: nodeJSImg
            },
            {
                id: 4,
                name: 'Express JS',
                type:'Framework',
                image: expressImg
            },
            {
                id: 5,
                name:'CSS',
                type: 'Lenguaje',
                image: CSSimg
            },
            {
                id: 6,
                name:'Google Cloud',
                type:'Libreria',
                image: CloudGog
            },
            {
                id:7,
                name: 'Tremor',
                type: 'Librería',
                image: tremorImg
            },
        ]
    },
    {
        id: 2,
        name: 'Henry PI Dogs',
        shortDescript: 'Data',
        link:'https://github.com/MarcosRamirezCarri/ProyectoIndividualDOGS',
        description:'Proyecto con temática de perros. Esta enfocado para que el usuario tenga una experiencia cómoda en todo aspecto y que se sienta realmente comunicado con la aplicación. Todo esto utilizando tecnologías como React, Node, Express, CSS, Redux.',
        Implementations:'Obtencion de datos mediante apis externas, interactividad con el usuario, creación de perros los cuales persisten, navegación fluida y organizada, integracion de ORM, manejo correcto de errores, diferentes filtros para busquedas.',
        icon:'https://res.cloudinary.com/dljgbq48k/image/upload/v1698606077/dog_rsfcjq.png',
        images:[
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1704586631/perritos1_pc3gww.png",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1704586633/perritos5_umpanm.png",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1704586633/perritos4_mhkzww.png",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1704586633/perritos6_cmvuc1.png",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1704586629/perritos2_alfdyw.png",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1704586629/perritos3_jjqkva.png"
        ],
        techs:[
            {
                id: 1,
                name:'JavaScript',
                type:'Lenguaje',
                image: JsImage
            },
            {
                id: 2,
                name: 'React JS',
                type: 'Framework',
                image: ReactImg
            },
            {
                id:3,
                name:'Node',
                type:'Entorno',
                image: nodeJSImg
            },
            {
                id: 4,
                name: 'Express JS',
                type:'Framework',
                image: expressImg
            },
            {
                id: 5,
                name:'CSS',
                type: 'Lenguaje',
                image: CSSimg
            },
            {
                id:6,
                name: 'Axios',
                type: 'Librería',
                image: axiosImg
            },
        ]
        
    },
    {
        id: 3,
        name: 'Rick and Morty',
        shortDescript: 'Data',
        link:'https://github.com/MarcosRamirezCarri/RickAndMortyApp',
        description:'Proyecto integrador que he realizado durante los 4 módulos del Bootcamp en Henry, una aplicación sencilla, facil de usar e inspirada en la serie "Rick and Morty". Todo esto utilizando tecnologías como React, Node, Express, CSS, Redux.',
        Implementations:'Obtencion de datos mediante apis externas, manejo correcto de errores con comunicación al Front, Sistema de cuentas, sistema de favoritos en relacion a la cuenta, integración de ORM, filtros para favoritos.',
        icon:'https://res.cloudinary.com/dljgbq48k/image/upload/v1698605908/rick_sirtkb.png',
        images:[
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1704586632/rickandmorty3_geob1i.png",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1704586633/rickandmorty1_kyu4os.png",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1704586633/rickandmorty2_sb9rae.png",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1704586631/rickandmorty4_bzumgf.png",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1704586631/rickandmorty5_m12yqk.png",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1704586630/rickandmorty6_vg7npx.png",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1704586630/rickandmorty7_iql0jc.png",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1704586632/rickandmorty8_am1v99.png",
        ],
        techs:[
            {
                id: 1,
                name:'JavaScript',
                type:'Lenguaje',
                image: JsImage
            },
            {
                id: 2,
                name: 'React JS',
                type: 'Framework',
                image: ReactImg
            },
            {
                id:3,
                name:'Node',
                type:'Entorno',
                image: nodeJSImg
            },
            {
                id: 4,
                name: 'Express JS',
                type:'Framework',
                image: expressImg
            },
            {
                id: 5,
                name:'CSS',
                type: 'Lenguaje',
                image: CSSimg
            },
            {
                id:6,
                name: 'Axios',
                type: 'Librería',
                image: axiosImg
            },
        ]
    }
]

module.exports = {
    datosProyectos
}