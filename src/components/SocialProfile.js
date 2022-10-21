
import { loginFields } from "../constants/Formfields";
const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');


function Profiles({
    id,
    image_url,
    account_name,
    cover_photo_url,
    linkUrl="#"
}){
    return(
        <>
    
       <div class="m-auto w-1/2 flex content-center gap-1"> 
    <div class="shadow-lg rounded-2xl w-2/5 bg-white dark:bg-gray-800 inline-block m-auto  my-2 ">
    <img alt="profil" src={cover_photo_url} class="rounded-t-lg h-28 w-full mb-4"/>
    <div class="flex flex-col items-center justify-center p-4 -mt-16">
        <a href="#" class="block relative">
            <img alt={account_name} src={image_url} class="mx-auto object-cover rounded-full h-16 w-16 "/>
        </a>
        <p class="text-gray-800 dark:text-white text-xl font-medium mt-2">
            {account_name}
        </p>
        <p class="text-gray-400 text-xs flex items-center">
            <svg width="10" height="10" fill="currentColor" class="h-4 w-4 mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                </path>
            </svg>
            
        </p>
        <p class="text-gray-400 text-xs">
            SEO
        </p>
        <div class="flex items-center justify-between gap-4 w-full mt-8">
            
        <a href={linkUrl} class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            <button type="button" >
                See profile 
            </button>
            </a>
        </div>
    </div>
</div>
</div>

        </>

        
    )
        }

export default Profiles;