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


const techs = [
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
        id:4,
        name: 'Typescript',
        type: 'Lenguaje',
        image: TypescriptImg
    },
    {
        id: 5,
     
        name: 'Express JS',
        type:'Framework',
        image: expressImg


    },
    { 
        id: 6,
        name: 'Next JS',
        type: 'Framework',
        image: NextImg
    },
    {
        id: 7,
       
        name: 'PostgreSQL',
        type: 'Base de datos',
        image: postgreImg
    },
    {
        id: 8,
        name:'HTML',
        type:'Lenguaje',
        image: HTMlImg

    },
    {
        id: 9,
        name:'CSS',
        type: 'Lenguaje',
        image: CSSimg

    },
    {
        id: 10,
        name: 'Tailwind',
        type: 'Librería',
        image: tailwindImg

    },
    {
        id: 11,
        name: 'Sequelize',
        type: 'Framework',
        image: sequelizeImg
    },
    {
        id: 12,
        name:'Google Cloud',
        type:'Libreria',
        image: CloudGog
    },
    {
        id: 13,
        name: 'Redux',
        type: 'Librería',
        image: reduxImg
    },
    {
        id:14,
        name: 'Tremor',
        type: 'Librería',
        image: tremorImg
    },
    {
        id:15,
        name: 'Axios',
        type: 'Librería',
        image: axiosImg
    },
   

]

module.exports = {
    techs
}