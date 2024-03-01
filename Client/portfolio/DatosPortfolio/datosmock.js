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
        description:'Aplicación completa y atractiva desarrollada para el restaurante "El Festín", pero con la flexibilidad de adaptarse sin esfuerzo a cualquier otro establecimiento de gastronomía.',
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
        description:'Proyecto con temática de perros. Esta enfocado para que el usuario tenga una experiencia cómoda en todo aspecto y que se sienta realmente comunicado con la aplicación.',
        Implementations:'Interactividad con el usuario, creación de perros los cuales persisten, navegación fluida y organizada, integracion de ORM, manejo correcto de errores, diferentes filtros para busquedas.',
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
        name: 'Copywriter Portfolio ',
        shortDescript: 'Portfolio',
        link:'https://lauraramirezportfolio.vercel.app/',
        description:'Un trabajo realizado para Laura Ramirez Carrivali, Copywriter y Profesora de letras. Es aplicación sencilla, facil de usar, con colores cálidos, con una interfaz totalmente interactiva y atractiva a la vez. ',
        Implementations:'Diseño totalmente responsive, utilización de Swiper-React, imagenes pre-cargadas con Cloudinary, manejo correcto del diseño, envio de e-mail automatizados.',
        icon:'https://res.cloudinary.com/dljgbq48k/image/upload/v1709333363/WhatsApp_Image_2024-02-16_at_13.37.19_1_okgobv.jpg',
        images:[
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1709332584/WhatsApp_Image_2024-03-01_at_19.32.12_rahc7i.jpg",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1709332583/WhatsApp_Image_2024-03-01_at_19.32.38_mjuxmc.jpg",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1709332583/WhatsApp_Image_2024-03-01_at_19.33.20_zb3xto.jpg",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1709332584/WhatsApp_Image_2024-03-01_at_19.33.48_p58osv.jpg",
            "https://res.cloudinary.com/dljgbq48k/image/upload/v1709332583/WhatsApp_Image_2024-03-01_at_19.32.38_mjuxmc.jpg",
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
                name: 'Next JS',
                type: 'Framework',
                image: NextImg
            },
            {
                id: 3,
                name:'CSS',
                type: 'Lenguaje',
                image: CSSimg
            },
            {
                id: 4,
                name: 'Tailwind',
                type: 'Librería',
                image: tailwindImg
        
            },
            {
                id: 5,
                name:'HTML',
                type:'Lenguaje',
                image: HTMlImg
        
            },
        ]
    }
]

module.exports = {
    datosProyectos
}