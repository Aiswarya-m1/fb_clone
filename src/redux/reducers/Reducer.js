import { Action_types } from "../constants/Action_types"
import dp from'../../images/dp.jpg';
import bg1 from'../../images/bg1.jpg';
import bg2 from'../../images/bg2.jpg';
import bg3 from'../../images/bg3.jpg';
import a2 from'../../images/a2.png';
import a3 from'../../images/a3.jfif';
import a1 from'../../images/a1.jfif';
import video from'../../images/video.mp4';
import v1 from'../../images/v1.mp4';
import v2 from'../../images/v2.mp4';
const initialState={
    register:[{
name:'',age:'',email:'',gender:'',username:'',password:"",image:""





    }],
    data:[],
    products:[{
        profilepic: dp,
        image:bg1,
        username:"Aiswarya",message:"hello,this is message to display"
    },
    {
        profilepic:a2,
        image:bg2,
        username:"Manu",message:"hello,this is  second message to display"
    },
    {
        profilepic:a3,
        image:bg3,
        username:"Nandu",message:"hello,this is  third message to display"
    }
],
video:[{
    profilepic: dp,
    image:video,
    username:"Aiswarya",message:"Its name comes from the Latin word Rosa. The flowers of the rose grow in many different colors, from the well-known red rose or yellow rose and sometimes white or purple rose. Roses belong to the family of plants called Rosaceae."
},
{
    profilepic:a2,
    image:v2,
    username:"Manu",message:"Over hundreds of years they have been specially bred to produce a wide variety of growing habits and a broad range of colours from dark red to white including as well yellow and a bluish/lilac colour. Many roses have a strong, pleasant scent. Most roses have prickles (incorrectly called thorns) on their stems. "
},
{
    profilepic:a3,
    image:v1,
    username:"Nandu",message:"Over hundreds of years they have been specially bred to produce a wide variety of growing habits and a broad range of colours from dark red to white including as well yellow and a bluish/lilac colour. Many roses have a strong, pleasant scent. Most roses have prickles (incorrectly called thorns) on their stems. "
}
],
validation:{
    username:"aiswarya@gmail.com",
    password:"Aiswaryaveena1@"
,},
friendlist:[{
    username:"Usha",dp:a1,
    image:bg1},
    {
        username:"Nikesh",dp:a3,
        image:bg2},
        {
            username:"Nandu",dp:a2,
            image:bg3},
            {
                username:"Lekha",dp:a1,
                image:bg1},{
                username:"Niranjana",dp:a2,
                image:bg2},
                {
                    username:"Sudhi",dp:a3,
                    image:bg1},
                    {
                        username:"Jayesh",dp:a2,
                        image:bg2},
                        {
                            username:"Leena",dp:a1,
                            image:bg3},
]
    
};
export const Reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case Action_types.select_data:



            return state;
            
              
                    case Action_types.checkvalid:

                       
    
                        return state;
                        case Action_types.select_friends:

                       
    
                            return state;
                            case Action_types.register:

                       
    
                                return state;
                                case Action_types.addpost:

                                    return{
                                        ...state,
                                        data:payload
                                    }
    
                                    
            default:

                return state;
    }
}

